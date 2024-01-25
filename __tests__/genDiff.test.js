import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join('__tests__', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const cases = [
  ['file1.json', 'file2.json', 'stylish', 'stylishResult.txt'],
  ['file1.yaml', 'file2.yml', 'plain', 'plainResult.txt'],
  ['file1.json', 'file2.json', 'json', 'jsonResult.txt'],
];

test.each(cases)('genDiff', (file1, file2, formatName, result) => {
  const expected = readFile(result).trim();
  const actual = genDiff(getFixturePath(file1), getFixturePath(file2), formatName).trim();
  expect(actual).toEqual(expected);
});

test('default stylish formatting', () => {
  const expected = readFile('stylishResult.txt');
  const compareWithDefaultFormetter = genDiff(
    getFixturePath('file1.json'),
    getFixturePath('file2.yml'),
  );
  expect(compareWithDefaultFormetter).toEqual(expected);
});
