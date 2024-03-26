const expess=require("express");
const app =expess();
const port =process.env.port || 5000;

const products_routes=require("./routes/projects");
app.get("/",(req,res)=>{
    res.send("hi I am live");
})
//middleware or set routes

app.use("/api/products",products_routes);
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