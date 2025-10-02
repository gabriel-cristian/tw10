// 1. importam modulul http
const http = require("http");

//2. cream serverul
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.write("Salutare Node...")
    res.end();
})


//3. port
server.listen(3000);