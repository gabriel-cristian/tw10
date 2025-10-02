// 1. importam modulul 
const express = require("express");

//2. cream serverul
const app = express();

app.use(express.static("./src/public"))

app.get("/",(req,res)=>{
    res.send("Hello from Express ...")
})

app.get("/server/ping",(req,res)=>{
    res.send("SALUTARE ...")
})

// http://localhost:8000/server/ping -> SALUTARE

//3. port
app.listen(8000, ()=>console.log("Server is running on port 8000"));