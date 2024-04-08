const {DataTypes} = require("sequelize")
const sequelize = require("../db")

const User = sequelize.define('User', {
    id:{
        type:DataTypes.NUMBER,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    street:{
        type:DataTypes.STRING,
    },
    suite:{
        type:DataTypes.STRING,
    },
    city:{
        type:DataTypes.STRING,
    },
    zipcode:{
        type:DataTypes.STRING,
    },
    lat:{
        type:DataTypes.DECIMAL
    },
    lng:{
        type:DataTypes.DECIMAL
    },
    phone:{
        type:DataTypes.STRING(40),
        allowNull:false
    },
    website:{
        type:DataTypes.STRING,
    },
    company_name:{
        type:DataTypes.STRING,
    },
    catch_phrase:
    {
        type:DataTypes.STRING,
    },
    bs:{
        type:DataTypes.STRING,
    },
},{
    timestamps:false,
})

module.exports={
    User
}