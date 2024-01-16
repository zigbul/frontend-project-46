import path from 'node:path';
import fs from 'node:fs';
import { cwd } from 'node:process';
import parse from './parsers.js';
import _ from 'lodash';

const getData = (filepath) => {
  const pathToFile = path.resolve(cwd(), 'src', filepath);
  const extension = path.extname(filepath).slice(1);
  const data = fs.readFileSync(pathToFile);

  return parse(data, extension);
};

export default function (filepath1, filepath2) {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const strings = keys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    }

    if (!Object.hasOwn(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    }

    if (data1[key] === data2[key]) {
      return `  ${key}: ${data1[key]}`;
    } else {
      return `- ${key} ${data1[key]}\n+ ${key} ${data2[key]}`;
    }
  });

  console.log(strings.join('\n'));
}
