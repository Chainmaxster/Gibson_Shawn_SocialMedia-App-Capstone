import React, { useEffect, useState } from 'react';
import { getUser } from '../services/userService';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(userId, token);
      setUser(data);
    };

    fetchUser();
  }, [userId, token]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{user.firstName} {user.lastName}</h1>
      <p>Email: {user.email}</p>
      <p>Location: {user.location}</p>
      <p>Occupation: {user.occupation}</p>
    </div>
  );
};

export default UserProfile;
