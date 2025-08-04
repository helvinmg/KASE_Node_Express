const express=require("express")
const app=express()
app.get("/",(req,res)=>
{
    res.status(200).send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>
{
    res.status(200).send("<h1>About Page</h1>")
})
app.get("/about/:role",(req,res)=>
{
    let userrole=req.params.role//URL Parameter
    console.log("Requested for:",userrole);
    res.status(200).send("<h1>About Page of "+userrole+"</h1>")
})
app.get("/products",(req,res)=>
{
    let product_cate=req.query.category//req.query.key
    let product_discount=req.query.discount
    console.log("user wants to see: ",product_cate);
    if(req.query.category!=null && req.query.discount!=null)
        res.send("<h1>fetching products from category "+product_cate+" with discount >="+product_discount+"</h1>")
    else
        res.send("<h1>fetching all products</h1>")
})
app.use((req,res)=>
{
    res.status(404).send("<h1 style='color:red'>404 Page Not Found</h1>")
})
app.listen(3000,()=>console.log("server running"))