import fs from 'fs';

export const writeDataToFile = (filename: string, content: object) => {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8');
  };
