const UserModel = require('../models/user.schema');

module.exports = {
      
      getUsers: async (req,res)=>{
	 try{
	    const userList = await UserModel.find().sort({createdAt: -1});
	    return res.status(200).json(userList); 
	 }catch(e){
	    return res.status(400).json({
	       err: `Error: ${e.message}}`
	    });
	 }
      },
      
      getUserById: async (req,res)=>{
	 try{
	    const {id} = req.params;
	    const userResult = await UserModel.findById(id);
	    
	    if(!userResult){
	       return res.status(400).json({
		  msg: `User not found.`
	       });
	    }

	    return res.status(200).json(userResult);
	 }catch(e){
	    res.status(400).json({
	       err: `Error: ${e.message}`
	    });
	 }
      },
   
      getByUsername: async (req,res)=>{
	 try{
	    const { uname } = req.body; 
	    const userResult = await UserModel.find({ uname }).exec();

	    if(!userResult){
	       return res.status(400).json({
		  msg: `User not found.`
	       });
	    }

	    return res.status(200).json(userResult);
	 }catch(e){
	    res.status(400).json({
	       err: `Error: ${e.message}`
	    });
	 }
      },

      insertUser: async (req,res)=>{
	 try{
	    console.log(req.body);
	    const { uname } = req.body;
	    const userResult = await UserModel.findOne({uname});
	    
	    if(userResult){
	        return res.status(400).json({
		   msg: `Username must be unique!`
		});
	    }
	    
	    const newUser = await UserModel.create(req.body);
	    return res.status(201).json(newUser);
	 }catch(e){
	    res.status(400).json({
	       err: `Error: ${e.message}`
	    });
	 }
      },

      updateUser: async (req,res)=>{
	 try{
	    const { id } = req.params;
	    const toUpdate = await UserModel.findByIdAndUpdate(id, {...req.body});
	    
	    if(!toUpdate){
	       return res.status(400).json({
		  msg: `User not found.`
	       });
	    }
	    return res.status(200).json(toUpdate);
	 }catch(e){
	    res.status(400).json({
	       err: `Error: ${e.message}`
	    });
	 }
      },
      
      deleteUser: async (req,res)=>{
	 try{
	    const { id } = req.params;
	    const toDelete = await UserModel.findByIdAndDelete(id);
	    
	    if(!toDelete){
	       return res.status(400).json({
		  msg: `User not found.`
	       });
	    }

	    return res.status(200).json({
	       msg: `User has been deleted.`
	    });
	 }catch(e){
	    return res.status(400).json({
	       err: `Error: ${e.message}`
	    });
	 }
      }
};

