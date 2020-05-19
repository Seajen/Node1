const fs = require('fs');
const path = require('path');

function changeFolders(dir1, dir2) {
    fs.readdir(dir1, (err, files) => {
        for (const file of files) {
            fs.rename(path.join(dir1, file), path.join(dir2, file), err => {
                console.log(err);
            });
        }
    });

    fs.readdir(dir2, (err, files) => {
        for (const file of files) {
            fs.rename(path.join(dir2, file), path.join(dir1, file), err => {
                console.log(err);
            });
        }
    });
}

const directory1 = './1800';
const directory2 = './2000';
changeFolders(directory1,directory2);

