const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.get('/',(res,req)=>{
   res.setEncoding('IT WORKS');
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{

   console.log('Server started on port ' + port); 
}); 