import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
// Get a user by ID
router.get('/:id', verifyToken, getUser);

// Get a user's friends
router.get('/:id/friends', verifyToken, getUserFriends);

/* UPDATE */
// Add or remove a friend
router.patch('/:id/friend/:friendId', verifyToken, addRemoveFriend);

export default router;
