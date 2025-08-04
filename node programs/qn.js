const fs=require("fs")
fs.readFile("input.txt","utf-8",(err,num)=>
{
    if(err)
        console.log("error is",err.message);
    else
    {
        let cube=num**3
        fs.writeFile("output.txt",cube.toString(),(err)=>
        {
            if(err)
                console.log("error is",err.message);
            else
                console.log("write operation successful")
        })
    }
})

