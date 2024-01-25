import _ from 'lodash';

const getIndent = (depth) => '    '.repeat(depth);

const stringify = (value, depth = 0) => {
  if (!(value instanceof Object)) {
    return value;
  }

  const keys = Object.keys(value);
  const str = keys
    .map((key) => `${getIndent(depth + 1)}${key}: ${stringify(value[key], depth + 1)}`)
    .join('\n');

  return `{\n${str}\n${getIndent(depth)}}`;
};

const render = (tree) => {
  const iter = (arr, depth) => {
    const propperString = {
      same: (obj) => `${getIndent(depth)}    ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      new: (obj) => `${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      changed: (obj) => [
        `${getIndent(depth)}  - ${obj.key}: ${stringify(obj.changed, depth + 1)}`,
        `${getIndent(depth)}  + ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      ],
      deleted: (obj) => `${getIndent(depth)}  - ${obj.key}: ${stringify(obj.value, depth + 1)}`,
      object: (obj) => [
        `${getIndent(depth)}    ${obj.key}: {`,
        iter(obj.children, depth + 1),
        `${getIndent(depth)}  }`,
      ],
    };

    const newArr = arr.reduce((acc, obj) => [...acc, propperString[obj.type](obj)], []);
    return _.flatten(newArr).join('\n');
  };

  return `{\n${iter(tree, 0)}\n}`;
};

export default render;
