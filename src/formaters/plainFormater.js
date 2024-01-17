const stringify = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  } else if (typeof value === 'boolean') {
    return `${value}`;
  }
  return `'${value}'`;
};

const render = (tree) => {
  const iter = (arr, parentKey) => {
    const makefullKey = (obj) => [...parentKey, obj.key];
    const makeBegining = (obj) => `Property '${makefullKey(obj).join('.')}'`;

    const makePropperString = {
      same: (obj) => `${makeBegining(obj)} was the same`,
      new: (obj) => `${makeBegining(obj)} was added with value: ${stringify(obj.value)}`,
      changed: (obj) =>
        `${makeBegining(obj)} was updated. From ${stringify(obj.changed)} to ${stringify(
          obj.value,
        )}`,
      deleted: (obj) => `${makeBegining(obj)} was removed`,
      object: (obj) => iter(obj.children, makefullKey(obj)),
    };
    return arr.reduce((acc, obj) => [...acc, makePropperString[obj.type](obj)], []).join('\n');
  };

  return iter(tree, []);
};

export default render;
