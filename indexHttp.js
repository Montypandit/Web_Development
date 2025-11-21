const http=require("http");
const fs=require("fs");
const url=require("url");
const server=(req,res)=>{
    // res.setHeader("Content-Type","text/html");
    res.writeHead(200,{"Content-Type":"text/html"});
    if(req.url==="/"){
    res.write("{message: Welcome to Node js server }");
    } else if(req.url==="/about"){
        res.write("{message: This is about page of website}");
    }
    else if(req.url==="/rfile"){
        fs.readFile("indexPromise.js","utf8",(err,data)=>{
            if(err){
                console.log("File not found");
            } else {
                
                res.write("file found" + `<pre>${data} </pre>`);
                console.log(data);
                res.end();
            }
        });
        return;
    }
    else if(req.url==="/wfile"){
        fs.writeFile("sample.txt","This is sample file created by Node js",(err)=>{
            if(err){
                console.log("File not created");
            } else {
                res.write("File created successfully");
            }
            res.end();
        });
        return; 
    }
    else if(req.url==="/cfile"){
        fs.copyFile("sample.txt","sampleCopy.txt",(err)=>{
            if(err){
                console.log("File not copied");
            } else {
                res.write("File copied successfully");
            }
            res.end();
        });
        return; 
    }
    const filename=req.url.split('/')[2];
    if(req.url===`/dfile/${filename}`){
        fs.unlink("sampleCopy.txt",(err)=>{
            if(err){
                console.log("File not deleted");
            } else {
                res.write("File deleted successfully");
            }
            res.end();
        });
        return;
    } 
    const paramQuery=url.parse(req.url,true);
    const dirName=paramQuery.query.dir;
    console.log(`${dirName}`);
    if(req.url===`/mkdir?dir=${dirName}`){
        fs.mkdir(dirName,{recursive:true, force:true},(err)=>{
            if(err){
                console.log("Directory not created");
            } else {
                res.write("Directory created successfully");
            }
            res.end();
        });
        return;
    }
    
    res.end();
}

http.createServer(server).listen(3000,(error)=>{
    if(error){
        console.log("Server is not created");
    } else {
        console.log("Server created successfully on http://localhost:3000");
    }
})