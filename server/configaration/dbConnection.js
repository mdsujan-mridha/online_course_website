const mongoose = require('mongoose');


const database = (module.exports = () =>{
    const connectionParams = {
      useNewUrlParser:true,
      useUnifiedTopology:true,
    }
    try{
    //   mongoose.set('strictQuery', false);
       mongoose.connect("mongodb+srv://sujan:gQYJ2JYrvxvzQuw9@cluster0.dacpqrc.mongodb.net/?retryWrites=true&w=majority",
       connectionParams
       );
       console.log('database connected');
    } catch(error){
      console.log(error);
      console.log("database cant not connecting");
    }
  
  });

  module.exports = database;