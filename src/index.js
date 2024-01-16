import { Command } from 'commander';
import getDiff from './getDiff.js';

export default new Command()
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .action((pathfile1, pathfile2) => {
    console.log(getDiff(pathfile1, pathfile2));
  })
  .arguments('<filepath1> <filepath2>')
  .parse();
