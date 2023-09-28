const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hichem', 
    password: 'admin', 
    database: 'homeRent' 
  });

  connection.connect(function(err){
    if(err)throw err ;
    else{
      console.log("connected");
    }
  })

  module.exports = connection;