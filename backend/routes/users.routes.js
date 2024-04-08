const express = require("express")
const { User } = require("../models/users.model")
const UserRouter = express.Router();


UserRouter.post("/",async (req,res)=>{
    try {
        let {id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,company_name,catch_phrase,bs} = req.body
        const newUser = await User.create({
            id:id,
            name:name,
            username:username,
            email:email,
            street:street,
            city:city,
            zipcode:zipcode,
            suite:suite,
            city:city,
            lat:lat,
            lng:lng,
            phone:phone,
            website:website,
            company_name:company_name,
            catch_phrase:catch_phrase,
            bs:bs
            
        })

        res.status(201).json(newUser)
    } catch (error) {
        console.log(error)
        res.status(500).json({Error:"Server error"})
    }
})


module.exports = UserRouter