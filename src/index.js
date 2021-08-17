import { Command } from 'commander/esm.mjs';

const main = () => {
  const program = new Command();

  program.version('0.0.1');
  program.description('Compares two configuration files and shows a difference.');

  program.argument('<filepath1>');
  program.argument('<filepath2>');

  program.option('-f, --format <type>', 'output format');

  program.parse();
};

export default main;
