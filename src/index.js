import { Command } from 'commander';
import getDiff from './getDiff.js';

const program = new Command();

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((pathfile1, pathfile2) => {
    const format = program.opts().format;
    console.log(getDiff(pathfile1, pathfile2, format));
  })
  .arguments('<filepath1> <filepath2>')
  .parse();

export default program;
