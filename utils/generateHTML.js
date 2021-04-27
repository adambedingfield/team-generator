const fs = require('fs');

const writeHTML = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/test.HTML', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML created!'
            });
        });
    });
};

module.exports = { writeHTML };