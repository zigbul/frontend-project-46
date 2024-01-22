#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((pathfile1, pathfile2) => {
    const { format } = program.opts();
    console.log(gendiff(pathfile1, pathfile2, format));
  })
  .arguments('<filepath1> <filepath2>')
  .parse();

export default program;
