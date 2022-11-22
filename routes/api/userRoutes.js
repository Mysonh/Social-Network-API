const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getUsers)
.post(createUser);

// /api/users/:userId 
// Get, update, delete a user
router.route('/:userId')
.get(getSingleUser);
// Post for add a friend 
router.route('/:userId/friends/:friendId')
//Delete a friend
module.exports = router;
