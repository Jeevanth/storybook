
const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.get('/',(req,res)=>{
   res.send('IT WORKS!!!!!!!!!!!!!!!!!2222222222222233333333344444444444');
});

const port = process.env.PORT || 5000;

app.listen(port, ()=>{

   console.log('Server started on port ' + port); 
}); 