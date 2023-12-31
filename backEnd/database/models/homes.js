const db = require('../index') 

module.exports={
    getAll : function (callBack){
        const sql = 'select home_description,home_price  , home_images , home_title from home' 
        db.query(sql,function(error,results,fields){
            callBack(error,results)
        })
    },

    getOne:function(callBack ,home_id){
        
        const sql = `select  home_description,home_price,home_images,home_title from home where home_id=${home_id} `
        db.query(sql,function(error,results,fields){
            callBack(error,results)
        })
    },

    addHome:function(callBack,home_description,home_price,home_images,user_user_id ,home_title){
        const sql = 'insert into home SET ?'
        db.query(sql,{home_description,home_price,home_images,user_user_id,home_title},function(error,results,fields){
            callBack(error,results)
        })
    },
    updateHome:function(callBack,home_description,home_price,home_images,home_id,home_title){
        const sql =`update home SET ? where home_id = ${home_id} `
        
        db.query(sql,{home_description,home_price,home_images,home_title},function(error,results,fields){
            callBack(error,results)
        })
    },
    deleteHome :function(callBack,home_id){
        const sql=`delete from home where home_id=${home_id}`
        db.query(sql,function(error,results,fields){
            callBack(error,results)
        })
    }
}