const http=require("http")//importing inbuilt module
//creating server using http module
const PORT=3000
const server=http.createServer((req,res)=>
{
    //serverlogic
    if(req.url=="/")
    {
        res.statusCode=200
        res.setHeader("Content-Type","text/html")
        res.end("<h1 style='color:blue'>Home Page</h1>")
    }
    else if(req.url=="/about")
    {
        res.statusCode=200
        res.setHeader("Content-Type","text/html")
        res.end("<h1 style='color:blue'>About Page</h1>")
    }
    else
    {
        res.statusCode=404
        res.setHeader("Content-Type","text/html")
        res.end("<h1 style='color:red'>404 Page not found</h1>")
    }
})
server.on('request', (req, res) => {
  console.log("request received");
});
//running server - PORT, Logic as fn
server.listen(PORT,()=>
    {
        console.log("Server running on ",PORT)
        console.log("http://localhost:3000/");
    })