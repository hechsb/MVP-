const express = require('express');
const router = express.Router();

const {getAllHouses, addHouse, updateHouse, deleteHouse, getOneHouse}=require("../controllers/homes");


router.get('/getAll',getAllHouses);
router.get('/getOne/:home_id',getOneHouse)
router.post('/addHome/:user_user_id',addHouse);
router.put("/updateHome/:home_id",updateHouse)
router.delete('/deleteHome/:home_id',deleteHouse)

module.exports=router