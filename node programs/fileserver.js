const fs=require("fs")//file system buil-in module
//fs.readFile("filename","encoding",(error,data)=>logic)
fs.readFile("data.txt","utf-8",(err,data)=>
{
    if(err)
        console.log("error is",err.message);
    else
        console.log("Data read:",data);
})
// fs.on("open",()=>console.log("file opened"))
//rewrite if file exist, create new file otherwise
fs.writeFile("datanew10.txt","Content changed again",(err)=>
{
    if(err)
        console.log("error is",err.message);
    else
        console.log("write operation successful")
})
