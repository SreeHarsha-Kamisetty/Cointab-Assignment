const express = require("express")
const cors = require("cors");
const UserRouter = require("./routes/users.routes");



const app = express();
app.use(cors())
app.use(express.json())

app.use("/users",UserRouter)
app.get("/",(req,res)=>{
    res.send("Home")
})



app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})