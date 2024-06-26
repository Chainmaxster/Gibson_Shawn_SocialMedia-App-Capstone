import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPosts } from '../services/postService';
import Post from '../components/Post';

const UserPosts = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getUserPosts(userId, token);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching user posts:', error);
      }
    };

    fetchPosts();
  }, [userId, token]);

  const handleLike = async (postId) => {
    try {
      await likePost(postId, token);
      const updatedPosts = await getUserPosts(userId, token);
      setPosts(updatedPosts);
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  return (
    <div>
      <h1>User Posts</h1>
      {posts.map(post => (
        <Post key={post._id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
};

export default UserPosts;
