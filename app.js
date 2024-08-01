const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const bcrypt=require("bcrypt")

const app=express()
app.use(cors())
app.use(express.json())



app.listen("8081",()=>{
    console.log("server started")
})