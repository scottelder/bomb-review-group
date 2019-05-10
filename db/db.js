const mysql = require('mysql');
const connection = mysql.createConnection({
user: 'root',
password: 'password',
host: 'localhost',
database: 'MYBOMBDB'

});


const insertMessage = (message) => {
  
  connection.query(`insert into MYBOMBTABLE set message = '${message.text}', users = '${message.user}';`, (err)=>{
if(err){
  console.log('error from database: ',err)
    } else{
      console.log('BOOM success!!!')
    }
  })
}




const getAllMessages = (callback) => {
  
  connection.query('select * from mybombtable',(err, result)=>{
    if (err) {
      console.log('error getting messages', err)
      callback(err, null);
    } else {
      callback(null, result);
    }

  })
}


module.exports = {insertMessage, getAllMessages}
