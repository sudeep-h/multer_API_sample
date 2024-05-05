const { urlencoded } = require('body-parser');
const express=require('express');
const app=express();
const multer=require('multer');
const cors=require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const upload=multer({dest:"uploads/"});

app.post("/upload_files",upload.array("files"),uploadFiles);

function uploadFiles(req,res){
    console.log(req.body);
    console.log("files",req.files);
    res.json({message:"Successfully uploaded!!!"});
}

const PORT=5500;
app.listen(PORT,()=>{
    console.log(`Server connected on ${PORT}!!!`);
});