const userModel = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "SIGNUPAPI";

// signUp
const signup = async (req, res) => {

    const { username, email, password } = req.body;
    try {

        const existingUser = await userModel.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({ messege: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const result = await userModel.create({
            email: email,
            password: hashPassword,
            username: username
        });

        const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY)
        res.status(201).json({ user: result, token: token })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ messege: "something went wrong" });
    }
}

//login 
const signin = async (req, res) => {
    const { email, password } = req.body;

    try {

        const existingUser = await userModel.findOne({ email: email });
        if (!existingUser) {
            return res.status(404).json({ messege: "User not found" });
        }

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if (!matchPassword) {
            return res.status(400).json({ messege: "Invalid Credentials" });
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY)
        res.status(201).json({ user: existingUser, token: token })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ messege: "something went wrong" });
    }
}


// getAll user 
const getAll = async (req, res) => {
    const s = await userModel.find();
    res.status(200).json(s)
}

module.exports = { signup, signin, getAll }