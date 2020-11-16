// import express from "express";
const express=require("express");
// import App from "./App";
const bodyparser=require('body-parser');
const mysql=require('mysql');
const cors=require('cors');

const app=express();

// app.use(bodyparser.urlencoded({extended:false})) ;

app.use(bodyparser.json())
app.use(cors());

var mySqlConnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'UserDb'
});

mySqlConnection.connect((err)=>{
    if(!err){
        console.log("DB connection created");        
    }
    else
    {
        console.log("DB connection failed"+ JSON.stringify(err,undefined,2));
    }
})

// app.get('/',(req,res)=>{
//     res.send(App);
// })
app.get('/',(req,res)=>{
    mySqlConnection.query("select * from UserReg",(err,results)=>{
        if(!err)
        {
            res.send(results);
        }
        else{
            res.send(err);
        }
    })
})

app.post('/reg',(req,res)=>{
 const sql="INSERT INTO UserReg (Name,Email,MobileNo,Password) VALUES (?,?,?,?)";
    mySqlConnection.query(sql,[req.body.Name,req.body.Email,req.body.MobileNo,req.body.Password],(err,results)=>{
        // console.log(req.body)
        // console.log(req.body.Deposit)
        if(!err)
        {
            res.send(results);
        }             
       
        else{
            res.send(err);
        }
    })
})


const port = process.env.PORT || 7005;
app.listen(port,()=>console.log("Server started...."));