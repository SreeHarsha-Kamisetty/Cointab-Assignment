const express = require("express");
const { post } = require("../models/posts.model");
const PostRouter = express.Router();
const axios = require("axios")
PostRouter.post("/",async(req,res)=>{
    try {
        
        let posts = await post.bulkCreate(req.body);
        
        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error while creating post"});
    }
})

PostRouter.get("/",async(req,res)=>{
    try {
        let {userId} = req.query;
        let posts = await post.findAll({where: {userId}});
        let data = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        data = data.data
        if(posts.length != 0){
           return  res.status(200).json({status:"added",data})
        }
        
        return res.status(200).json({status:"not added",data});
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Error while getting posts"})
    }
})
module.exports={
    PostRouter
}