const express=require("express")
const app=express()
app.use(express.json())
//array of objects
let books=[{'bookid':10,'bookname':'Harry Porter','price':500}]
app.get("/allbooks",(req,res)=>
{
    res.send(books)
})
//searching a book
//storing a book detail
app.listen(3000,()=>{
    console.log("Server is running");
})