let express=require("express");
let app=express();
let allroutes=require("./routers/paths");
let connectDB=require("./database/db");
require("dotenv").config();

// app.get("/",(req,res)=>{
//     res.send("hello how are you")
// });

app.use(express.json());  //for form
app.use(express.urlencoded({ extended: true }));  //for form
app.use("/",allroutes);

app.use(express.static("public"));  // this is for public



let start=async ()=>{
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(5000,()=>{
        console.log("running on 5000")
});
    } catch (error) {
        console.log(error)
    }
}

start();