const express = require('express');
const authRouter = express.Router();

authRouter.get("/", (req, res) => {
    res.send(` Welcome to login Route `);
});

authRouter.get("/register", (req, res) => {
    const {userName,pass}=req.query;
    if(userName==="admin" & pass==="admin123"){
        res.status(200).json({message:"Registration Successful"});
    } else {
        res.status(200).json({message:"Registration Failed"});
    }
});

module.exports = authRouter;