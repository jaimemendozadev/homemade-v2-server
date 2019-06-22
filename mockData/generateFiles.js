const fs = require('fs');
const path = require('path');
const {generateSingleUser} = require('./Users/generateUsers.js');

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

    idx === payloadLen ? file.write('   }\n') : file.write('  }, \n');
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

const payload = [];

for (let i = 0; i < 10; i++) {
  payload.push(generateSingleUser());
}

const filePath = path.join(__dirname, '../mockJSON/mock-data.json');

writeFileToDisk(filePath, payload);
