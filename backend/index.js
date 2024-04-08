const express = require("express")
const cors = require("cors")


const app = express();
app.use(cors())


app.get("/",(req,res)=>{
    res.send("Home")
})


app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})