import express from 'express';
import { getFeedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ */
// Get feed posts
router.get('/', verifyToken, getFeedPosts);

// Get posts for a specific user
router.get('/user/:userId', verifyToken, getUserPosts);

/* UPDATE */
// Like or unlike a post
router.patch('/:id/like', verifyToken, likePost);

export default router;
