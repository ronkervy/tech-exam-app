const { Schema,Types } = require('mongoose');
const bcrypt = require('bcryptjs');
const db = require('../config/db.config');

const UserModel = new Schema({
   uname: {
      type: String,
      required: true,
      unique: true
   },
   pword: {
      type: String
   },
   first_name: {
      type: String
   },
   last_name:  {
      type: String
   },
   email: {
      type: String
   }
},{timestamps: true});

UserModel.pre('save', async function(){
   try{
      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(this.pword, salt);
      this.pword  = hash;
   }catch(e){
      throw new Error(`Error saving user: ${e}`);
   }
});

module.exports = db.model('User',UserModel);


