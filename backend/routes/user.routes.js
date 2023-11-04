const router = require('express').Router();
const {
   getUsers,
   getUserById,
   getByUsername,
   insertUser,
   updateUser,
   deleteUser
} = require('../controllers/user.controller');

//USER ENTRYPOINTS

//Get All Users
router.get('/user',getUsers);

//Get User by given uname
router.post('/search/user',getByUsername);

//Get User by Id
router.get('/user/:id',getUserById);

//Insert new User
router.post('/user',insertUser);

//Update Single User
router.patch('/user/:id',updateUser);

//Delete User 
router.delete('/user/:id',deleteUser);

module.exports = router;

