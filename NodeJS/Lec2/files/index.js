const { mkdir, writeFile, readFile } = require('node:fs')

const demoCreateDirRecursive = () => {
    mkdir("usr/images/icons", { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dir usr/images/icons created")
        }
    });
}
const demoCreateDir = () => {
    mkdir("demo", { recursive: true }, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("Dir demo created")
        }
    });
}


const demoCreateFile = () => {
    writeFile('demo/hello.txt', "Hello, World!", {}, (err) => {
        if (err) {
            console.err(err);
        } else {
            console.log("file created")
        }
    })
}

//const {readFile } = require('node:fs')
const demoReadFile = () => {
    readFile('demo/hello.txt', { encoding: 'utf-8' }, (err, data) => {
        console.log(data);
    });
}
module.exports = { demoCreateDir, demoCreateFile, demoReadFile }