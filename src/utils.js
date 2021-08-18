/* eslint-disable import/prefer-default-export */

import path from 'path';
import fs from 'fs';

const readJSONFromFile = (filename) => {
  const fullFilename = path.resolve(filename);
  const fileContent = fs.readFileSync(fullFilename, 'utf-8');
  return JSON.parse(fileContent);
};

export { readJSONFromFile };
