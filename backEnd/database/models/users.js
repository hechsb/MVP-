const db = require('../index') 
const bcrypt =require("bcrypt")
const salt =10
module.exports={
    addUser : function(callBack,user_name  ,user_lastName,user_phone,user_password ){
        //be careful i should add the password to the user table !!!
        const sql = `insert into user (user_name,user_lastName,user_phone,user_password) values (?) `
        bcrypt.hash(user_password.toString(),salt,(err,hash)=>{
            if(err) return "error for hashing password"
            const values =[
                user_name,
                user_lastName,
                user_phone,
                hash
            ]
               db.query(sql,[values],function(error,results,fields){
            callBack(error,results)
        })
        })
     
    },

    logUser :function(callBack ,user_phone){
        const sql ='select * from user where user_phone =? '
        db.query(sql,[user_phone],function(error,results,fields){
            callBack(error,results  )
        })
    }
}