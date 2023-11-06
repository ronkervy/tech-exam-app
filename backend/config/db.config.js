const mongoose = require('mongoose');
mongoose.connect(`mongodb://mongo`,{
   dbName: 'ump_db',
   autoIndex: true,
}).then(()=>{
    console.log("Connected to the database.");
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose.connection;
