const express=require("express")
const app=express()
app.use(express.json())
//array of objects
let books=[
    {'bookid':10,'bookname':'Harry Porter','price':500},
    {'bookid':11,'bookname':'Lord of Rings','price':1200},
    {'bookid':12,'bookname':'The Legends','price':750} ]
app.get("/books",(req,res)=>
{
    res.send(books)
})
//searching a book
app.get("/books/:id",(req,res)=>
{
    let id=req.params.id
    let found=0
    for(book of books)
    {

        if(book.bookid==id)
        {
            found=1
            res.send(book)
        }
    }
    if(found==0)
       res.send("<h2>Not Found</h2>")
})
//storing a book detail
app.post("/books/add",(req,res)=>
{
    let newbook=req.body
    books.push(newbook)
    res.send("<h2>Saved</h2>")
})
app.listen(3000,()=>{
    console.log("Server is running");
})