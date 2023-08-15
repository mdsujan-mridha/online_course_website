const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const fs = require("fs");
const mongoose  = require('mongoose');
const database = require('./configaration/dbConnection');
// create express app 
const app = express();

// apply middlewares 

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
 fs.readdirSync('./routes').map((r) =>app.use('/api',require(`./routes/${r}`))
 
 );

database();
// // routes 
app.get('/' ,(req,res)=>{
      res.send('Server is running')
});

// setup port 
const port = process.env.PORT || 8000;
app.listen(port,() =>console.log(`Server is running on port ${port}`));

