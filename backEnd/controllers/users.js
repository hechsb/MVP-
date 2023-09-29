const users =require("../database/models/users")
const bcrypt =require("bcrypt")
module.exports={
    addUser :function(req,res){
        const {user_name  ,user_lastName,user_phone,user_password}=req.body
 
        users.addUser(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(201).json(results)
            }
        },user_name  ,user_lastName,user_phone,user_password)
    },
    logUser :function(req,res){
        const {user_phone,user_password } =req.body
        users.logUser(function(err,results){
            if(err) return res.json({Error:"Login error in server"})
            if(results.length>0){
                bcrypt.compare(user_password.toString(),results[0].user_password,(err,resp)=>{
                    if(err) return res.json({Error:"password compare error "})
                    if(resp){
                        return res.json({Status:"success"})
                    }else {
                        return res.json({Error:"password not matched"})
                    }
                })
            }else {
                return res.json({Error:"no phone number existed"})
            }
        },user_phone)
    }
}