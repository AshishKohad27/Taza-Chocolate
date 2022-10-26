const express = require("express");

const PORT = 2707;


const app = express();

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(PORT,(req,res)=>{
    console.log(`Listening Port on http://localhost:${PORT}`);
})

//  