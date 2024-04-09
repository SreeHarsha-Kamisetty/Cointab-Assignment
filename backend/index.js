const express = require("express")
const cors = require("cors");
const UserRouter = require("./routes/users.routes");
const sequelize = require("./db");
const { PostRouter } = require("./routes/posts.routes");



const app = express();
app.use(cors())
app.use(express.json())

app.use("/users",UserRouter);
app.use("/posts",PostRouter);
app.get("/",(req,res)=>{
    res.send("Home")
})



app.listen(8080,async()=>{
    try {
        await sequelize.authenticate();
        console.log("connected to")
        console.log("Server is running on port 8080")
    } catch (error) {
        console.log(error)
    }
    
})