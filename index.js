const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname);

app.get('/', (req, res) => {
    res.send(` Welcome to Node js server `);
});
app.get('/about', (req, res) => {
    res.send(` This is about page of website`);
});
app.get('/htmlfile', (req, res) => {
    res.sendFile(`${public}/mypage.html`);
});

app.listen(4000, (error) => {
    if (error) {
        console.log("Error in server setup");
    } else {
        console.log("Server is listening on port 4000 http://localhost:4000");
    }
});