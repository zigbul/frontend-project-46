import path from 'node:path';
import fs from 'node:fs';
import { cwd } from 'node:process';
import _ from 'lodash';

import parse from './parsers.js';
import render from './formaters/index.js';

const types = {
  new: 'new',
  same: 'same',
  changed: 'changed',
  deleted: 'deleted',
  object: 'object',
};

const getData = (filepath) => {
  const pathToFile = path.resolve(cwd(), 'src', filepath);
  const extension = path.extname(filepath).slice(1);
  const data = fs.readFileSync(pathToFile);

  return parse(data, extension);
};

const createTree = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (value1 === value2) {
      return { key, value: value2, type: types.same };
    }

    if (!_.has(data1, key)) {
      return { key, value: value2, type: types.new };
    }

    if (!_.has(data2, key)) {
      return { key, value: value1, type: types.deleted };
    }

    if (_.isObject(value1) && _.isObject(value2)) {
      const children = createTree(value1, value2);
      return { key, type: types.object, children };
    }

    return {
      key,
      value: value2,
      changed: value1,
      type: types.changed,
    };
  });
};

export default (firstFilePath, secondFilePath, format) => {
  const data1 = getData(firstFilePath);
  const data2 = getData(secondFilePath);
  const tree = createTree(data1, data2);

  return render(tree, format);
};
