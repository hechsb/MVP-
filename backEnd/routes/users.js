const express = require('express');
const router = express.Router();
const {addUser, logUser, getOne}=require("../controllers/users")


router.post("/signUp",addUser)
router.post("/signIn",logUser)
router.get("/getOne",getOne)

module.exports=router