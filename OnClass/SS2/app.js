const fs = require('fs');
// const { resolve } = require('path/posix');
//CommonJS
// import export EM Module

// fs.readFile(
//     'hello.txt',
//     { encoding: 'utf-8'},
//     (err, data) => {
//         if(err) return console.log(err);
//         console.log(data);
//     }
// )

fs.promises.readFile(
    'hello.txt'
).then(data => {
    console.log(data.toString());
}).catch(err => {
    console.log(err);
})

const wait = (timeSec) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeSec * 1000)
    });
}

console.log(1);
wait(3).then(() => console.log('after 3s'));

const readFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) reject(err);

            resolve(data)
        })
    })
}

readFile('hello.txt')
.then(data => console.log(data.toString()))
.catch(err => console.log(err));

async function readFileSync() {
    try{
        const data  = await fs.promises.readFile('hello.txt');
        return data;
    } catch(err) {
        throw err;
    }
}

readFileSync()
.then(data => console.log(data))
.catch(err => console.log('1', err));

