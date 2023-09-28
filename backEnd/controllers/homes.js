const homes =require("../database/models/homes")

module.exports ={
    getAllHouses :function(req,res){
        homes.getAll(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(200).json(results)
            }
        })
    },

    getOneHouse :function(req,res){
        const {home_id}=req.params
        homes.getOne(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(200).json(results)
            }
        },home_id)
    },


    addHouse : function(req,res){
        const {user_user_id}=req.params
        const {home_description,home_price,home_images}=req.body
        homes.addHome(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(201).json(results)
            }
        },home_description,home_price,home_images,user_user_id)
    },

    updateHouse :function(req,res){
        const {home_id}=req.params
        const {home_description,home_price,home_images}=req.body
        homes.updateHome(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(202).json(results)
            }
        },home_description,home_price,home_images,home_id)
    },
    deleteHouse:function(req,res){
        const {home_id}=req.params
        homes.deleteHome(function(err,results){
            if(err){
                console.log(err)
            }else {
                res.status(200).json(results)
            }
        },home_id)
    }
}