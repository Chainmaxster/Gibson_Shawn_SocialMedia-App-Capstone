import React, { useEffect, useState } from 'react';
import { getFeedPosts, likePost } from '../services/postService';
import Post from '../components/Post';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getFeedPosts(token);
      setPosts(data);
    };

    fetchPosts();
  }, [token]);

  const handleLike = async (postId) => {
    await likePost(postId, token);
    const updatedPosts = await getFeedPosts(token);
    setPosts(updatedPosts);
  };

  return (
    <div>
      <h1>Feed</h1>
      {posts.map(post => (
        <Post key={post._id} post={post} onLike={handleLike} />
      ))}
    </div>
  );
};

export default Home;
