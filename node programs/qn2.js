const fs=require("fs")
fs.readFile("input.txt","utf-8",(err,num)=>
{
    if(err)
        console.log("error is",err.message);
    else
    {
        for(let i=1;i<=10;i++)
        {
            let mult=num*i
            let value=mult.toString()+"\n"
            fs.appendFileSync("output2.txt",value,(err)=>
            {
                if(err)
                    console.log("error is",err.message);
                else
                    console.log("write operation successful")
            })
       }
    }
})

