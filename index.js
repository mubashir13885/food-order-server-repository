const express = require('express')
require('dotenv').config()
const userRouter = require('./routes/userRoutes')
const { connectDb } = require('./config/userDbConnenction')
const cookieParser = require('cookie-parser')
const restoRoter = require('./routes/restaurentRoutes')
const adminRouter = require('./routes/adminRoutes')
const itemRouter = require('./routes/itemRoutes')



const app=express()

connectDb()
app.use(express.json())
app.use(cookieParser())


app.use("/user",userRouter)
app.use("/admin",adminRouter)
app.use("/restaurant",restoRoter)
app.use("/menu",itemRouter)


app.listen(process.env.PORT,()=>{
    console.log(`server starts on port ${process.env.PORT}`);
})
// HHUUEURancg8VQxS