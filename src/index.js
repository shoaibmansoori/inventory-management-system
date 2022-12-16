const express = require('express');
const app = express();
const userRouter = require('./routes/userRoutes')
const mongoose = require('mongoose');
const categoryRouter = require('./routes/categoryRoutes');
const productRouter = require('./routes/productRoutes');

//middleware 
app.use(express.json());

app.use((req,res,next)=>{
    console.log("HTTP Method - "+ req.method + ", URL -" + req.url);
    next();
})

//router for user api 
app.use("/user",userRouter)
app.use("/category",categoryRouter)
app.use("/product",productRouter)

app.get('/',(req,res)=>{
    res.send('hello everyone')
})

//connect mongoDb database
mongoose.connect('mongodb://localhost:27017/Invetory-management-system')
.then(()=>{
    app.listen(5000,()=>{
        console.log('server started on port no. 5000')
    })
})
.catch((error)=>{
    console.log(error)
})

