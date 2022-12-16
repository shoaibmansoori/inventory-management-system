const express = require('express');
const { signup, signin, getAll } = require('../controllers/userController');
const userRouter = express.Router();

//This route for signUp 
userRouter.post("/signup",signup);

//This route for login 
userRouter.post("/signin",signin);

//This route for get all user 
userRouter.get("/getall",getAll);


module.exports = userRouter;