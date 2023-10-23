const express=require('express');
const jwt=require('jsonwebtoken');
const Authenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    console.log("auth",token);
    if(!token){
        return res.status(400).send({message:"error"})
    }
    jwt.verify(token,'secret',async function(err,decode){
        if (err) {
            console.log(err);
            return res.status(400).send("Please Login First");
        }
        else{
            console.log("else");
            req.userID=decode.userID;
            next();
        }
        
    })
}
module.exports={Authenticate}