const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT | 8000;

app.use(express.static(__dirname+ '/dist'));

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`Server is running on ${PORT}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'));
});