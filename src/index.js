import { Command } from 'commander/esm.mjs';

import { readJSONFromFile } from './utils.js';
import genDiff from './diff.js';

const main = () => {
  const program = new Command();

  program
    .version('0.0.1')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format <type>', 'output format')
    .action((filepath1, filepath2) => {
      const obj1 = readJSONFromFile(filepath1);
      const obj2 = readJSONFromFile(filepath2);

      const res = genDiff(obj1, obj2);
      console.log(res);
    })
    .parse();
};

export default main;
