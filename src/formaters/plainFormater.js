const stringify = (value) => {
  if (value instanceof Object) {
    return '[complex value]';
  }

  if (typeof value === 'boolean' || typeof value === 'number') {
    return `${value}`;
  }

  if (value === null) {
    return null;
  }

  if (typeof value === 'string' && value.length === 0) {
    return "''";
  }

  return `'${value}'`;
};

const render = (tree) => {
  const iter = (arr, parentKey) => {
    const makefullKey = (obj) => [...parentKey, obj.key];
    const makeBegining = (obj) => `Property '${makefullKey(obj).join('.')}'`;

    const makePropperString = {
      // same: (obj) => `${makeBegining(obj)} was the same`,
      same: () => null,
      new: (obj) => `${makeBegining(obj)} was added with value: ${stringify(obj.value)}`,
      changed: (obj) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        `${makeBegining(obj)} was updated. From ${stringify(obj.changed)} to ${stringify(
          obj.value,
        )}`,
      deleted: (obj) => `${makeBegining(obj)} was removed`,
      object: (obj) => iter(obj.children, makefullKey(obj)),
    };

    return arr
      .reduce((acc, obj) => [...acc, makePropperString[obj.type](obj)], [])
      .filter((item) => item !== null)
      .join('\n');
  };

  return iter(tree, []);
};

export default render;
