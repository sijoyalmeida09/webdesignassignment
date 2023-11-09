const express= require("express")
const app=express()
const mongoose= require("mongoose")
const { send } = require("process")
const joi = require("@hapi/joi");
const { string } = require("@hapi/joi");
const bcrypt = require('bcrypt')
app.use(express.json())
//DB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("Connected to db")
    }else{
        console.log("error")
    }
})


 
//Schema
const sch={
    name: String,
    email:String,
    password:String
    }
    
    const myschema = joi.object({
        name: joi.string().min(2)
            .max(30).
            pattern(new RegExp("^^[a-zA-Z].*[\s\.]*$")).required().messages({
                "string.pattern.base": "Invalid name type, Only String accepted",
                "string.empty": "cannot be an empty field",
                "string.min": "minimum 2 character required",
                "string.max": "maximum 30 characters allowed"
            }), 

        password: joi.string().min(8)
        .max(15).
        pattern(new RegExp()).required().messages({
            "string.empty": "Password cannot be an empty field",
            "string.min": "minimum 8 character required in password",
            "string.max": "maximum 15 characters allowed in password"
        }),  
        
        email: joi.string().min(2)
            .max(30).
            pattern(new RegExp("[a-z0-9]+@[a-z]+\.edu")).required().messages({
                "string.pattern.base": "Invalid email type, Only .edu domain accepted",
                "string.empty": "Email cannot be an empty field",
                "string.max": "maximum 30 characters allowed"
            })    
    })    
   
    const monmodel=mongoose.model("NEWCOL", sch);

 
//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const { error, value } = myschema.validate(req.body)
 
const data=new monmodel({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
});
 
if (error) {
    res.json({
        message: error.details[0].message
    })
}
else {
    //saving the data to mongodb
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
    const val = await data.save();
    res.send("User Added Successfully");
  
}
 
 
})
 
 
//PUT
 
app.put("/update/:email", async(req, res)=>{
 
    let upemail=req.params.email;
    let upname=req.body.name;
    let uppassword=req.body.password;
   
    monmodel.findOneAndUpdate({email:upemail}, {$set:{name:upname,password:uppassword}},{new: true}, (err, data)=>{
    if(err){
        res.send("Error")  
    }
    else{
    if(data==null)
    {
    res.send("No user with such email ID exists")
    }else{
        res.send("User Updated Successfully");
    }
}
})
})
 
 
// FETCH ALL
 
app.get("/fetchall", (req, res)=>{
 
    monmodel.find((err,val)=>{
    if(err)
    {
        console.log(err)
   
    }else{
   
    res.json(val)
   
    }
   
    })

})
 
//Delete
app.delete('/del/:email', function(req, res){
 
    let delemail=req.params.email;
   
    monmodel.findOneAndDelete(({email:delemail}), function(err,docs){
   
    if (err)
    {
    res.send("Error")
    }
    else{
        if(docs==null) {
        res.send("No such user found")
        }
        else
        {
            res.send("Deleted Succesfully");
        }
 
 
    }
})
})
   
   
 
 
 
app.listen(3000,()=>{
    console.log("on port 3000")
})

