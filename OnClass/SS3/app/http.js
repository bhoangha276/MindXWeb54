const http = require('http');
const fs = require('fs');

const sever = http.createServer( async(req, res) => {
    const demoHTML = await fs.promises.readFile('demo.html');

    res.write(demoHTML);
    res.end();
})

sever.listen(8080);