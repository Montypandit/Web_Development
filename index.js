const express= require('express');
const app= express();
const auth=require('./auth/login');
//const path= require('path');

app.use("/auth",auth);
app.get('/', (req, res) => {
    res.send(` Welcome to Node js server `);
});

app.listen(4000, (error) => {
    if (error) {
        console.log("Error in server setup");
    } else {
        console.log("Server is listening on port 4000 http://localhost:4000");
    }   
});