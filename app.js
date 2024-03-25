const expess=require("express");
const app =expess();
const port =process.env.port || 5000;
app.get("/",(req,res)=>{
    res.send("hi I am live");
})
const start= async ()=>{
    try{
        app.listen(port,()=>{
            console.log(`${port} connected`);
        })
    }
    catch(error){
console.log(error);
    }
   
};
start();