const express = require('express');// Lấy module bên thứ 3
const path = require('path');// core module

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './demo.html'));
    //Đường dẫn tuyệt đối => bắt đầu từ ổ đĩa gốc
})
// Đánh dấu routing method get, url

app.get('/hello', (req, res) => {
    res.send('Hello!!!');
})

app.get('/object', (req, res) => {
    res.send({ message: 'Hello!!'}); //json
})

app.listen(8080, err => {
    if(err) {
        return console.log(err);
    }

    console.log('Server started');
})