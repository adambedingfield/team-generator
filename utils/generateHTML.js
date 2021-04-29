const fs = require('fs');

// writes the html file in dist
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

// copies the style sheet from src to dist
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeHTML, copyFile};