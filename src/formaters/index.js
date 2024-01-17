import stylishFormater from './stylishFormater.js';
import plainFormater from './plainFormater.js';
import jsonFormater from './jsonFormater.js';

const formaters = {
  stylish: stylishFormater,
  plain: plainFormater,
  json: jsonFormater,
};

export default (tree, format) => formaters[format](tree);
