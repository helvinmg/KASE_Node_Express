const express=require("express")
const app=express()
app.use(express.json())//middleware
//help to understand all incoming resp in the body
const students=["arun","amal","arjun","anu","vinu","apsara","manu","meena","geeta","ashok"]
app.get("/",(req,res)=>
{
    res.status(200).send("<h1>Home Page</h1>")
})
app.get("/students",(req,res)=>
{
    let rollnum=req.query.rollno
    if(rollnum!=null)
    {
        if(rollnum<students.length)
            res.send("<h1>"+students[rollnum-1]+"</h1>")
        else
            res.send("<h1>Invalid Roll Number</h1>")
    }     
    else
            res.send("<h1>All students: "+students+"</h1>")   
})
app.post("/students",(req,res)=>
{
    let newstuds=req.body.new//["harsha","varsha"]
    console.log(newstuds)
    for(stud of newstuds)
        students.push(stud)
    res.send("<h1>All student details saved!!</h1>")
})
app.use((req,res)=>
{
    res.status(404).send("<h1 style='color:red'>404 Page Not Found</h1>")
})
app.listen(3000,()=>console.log("server running"))