import { Command } from 'commander/esm.mjs';

const main = () => {
  const program = new Command();

  program.version('0.0.1');

  program.description('Compares two configuration files and shows a difference.');

  program.parse();
};

export default main;
