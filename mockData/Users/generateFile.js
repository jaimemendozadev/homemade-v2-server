const fs = require('fs');
const path = require('path');

const { generateShipmentObject } = require('./generateMockData.js');

const pathToWrite = path.resolve(__dirname, '../mock-data.json');


const writeFileToDisk = async (filePath, payloadArray) => {
  const file = fs.createWriteStream(filePath, {
    encoding: 'utf8',
  });
  file.write('[\n');

  const payloadLen = payloadArray.length - 1;

  payloadArray.forEach((obj, idx) => {
    const entries = Object.entries(obj);
    const len = entries.length - 1;

    file.write('   {\n');

    entries.forEach(([key, value], index) => {
      file.write(
        `    "${key}": ${JSON.stringify(value)}${
          index === len ? '\n' : ', \n'
        }`,
      );
    });

    payloadLen === idx ? file.write('  }') : file.write('  }, \n');
  });

  file.write(']');
  file.end();
  return new Promise((resolve, reject) => {
    resolve(console.log('Mock data successfully written to file.'));
    file.on('error', () => {
      reject(console.log('There was an error writing the file.'));
    });
  });
};
