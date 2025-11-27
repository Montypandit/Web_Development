const express = require('express');
const app = express();
const path = require('path');
const public = path.join(__dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send(` Welcome to Node js server `);
});

app.post("/auth",(req,res)=>{
    const {user,pwd}=req.body;
    //const pwd=req.query.pwd;
if(user==="admin" & pwd==="admin123"){
    res.status(201).json({
        id:new  Date(Date.now()),
        message:"Login Successful"
    });
    //res.send("Login Successful");
} else {
    //res.send("Invalid Credentials");
    res.status(401).json({message:"Invalid Credentials"});
}
});

// app.get("/auth",(req,res)=>{
//     const {user,pwd}=req.body;
//     //const pwd=req.query.pwd;
// if(user==="admin" & pwd==="admin123"){
//     res.status(200).json({message:"Login Successful"});
//     //res.send("Login Successful");
// } else {
//     //res.send("Invalid Credentials");
//     res.status(401).json({message:"Invalid Credentials"});
// }
// });
app.get("/user",(req,res)=>{
    const user=req.query.user;
    const pwd=req.query.pwd;
if(user==="admin" & pwd==="admin123"){
    res.send("Login Successful");
} else {
    res.send("Invalid Credentials");
}
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