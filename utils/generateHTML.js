const fs = require('fs');

const writeHTML = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/Team.html', fileContent, err => {
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

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            //if thers an error reject the promise and send error to promise .catch()
            if (err) {
                reject(err);
                // return out of the function to make sure promise doesnt execute
                return;
            }
            // if everything went well, resolve promise and send successful data to the .then()
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeHTML, copyFile};