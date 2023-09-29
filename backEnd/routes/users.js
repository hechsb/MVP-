const express = require('express');
const router = express.Router();
const {addUser, logUser}=require("../controllers/users")


router.post("/signUp",addUser)
router.post("/signIn",logUser)

module.exports=router