import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Utility function to create user objects
const createUser = async ({ firstName, lastName, email, password, picturePath, friends = [], location, occupation, viewedProfile, impressions }) => {
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  return {
    _id: new mongoose.Types.ObjectId(),
    firstName,
    lastName,
    email,
    password: passwordHash,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile: viewedProfile || Math.floor(Math.random() * 10000),
    impressions: impressions || Math.floor(Math.random() * 100000),
    createdAt: Date.now(),
    updatedAt: Date.now(),
    __v: 0,
  };
};

// Example user data
const userData = [
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image1.jpg',
    location: 'New York, NY',
    occupation: 'T-Pain Concert Attendee',
    viewedProfile: 14561,
    impressions: 888822,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image2.jpg',
    location: 'New York, NY',
    occupation: 'Clothing Enthusiast',
    viewedProfile: 12351,
    impressions: 55555,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image3.jpg',
    location: 'New York, NY',
    occupation: 'Model and Fashion Icon',
    viewedProfile: 45468,
    impressions: 19986,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image4.jpg',
    location: 'Burkburnett, TX',
    occupation: 'Travel Explorer',
    viewedProfile: 41024,
    impressions: 55316,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image5.jpg',
    location: 'New York, NY',
    occupation: 'Bosnia and Herzegovina United Nations Head Delegate',
    viewedProfile: 40212,
    impressions: 7758,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image6.jpg',
    location: 'Corpus Chrisit, TX',
    occupation: 'Wedding Anniversary Party Attendee',
    viewedProfile: 976,
    impressions: 4658,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekyo98',
    picturePath: 'image7.jpg',
    location: 'Corpus Christi, TX',
    occupation: 'Brooklyn College Bachelor Degree Class of 2021',
    viewedProfile: 1510,
    impressions: 77579,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekgo98',
    picturePath: 'image8.jpg',
    location: 'Queens, NY',
    occupation: 'Arby\'s... we have the meats',
    viewedProfile: 19420,
    impressions: 82970,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekgo98',
    picturePath: 'image9.jpg',
    location: 'New York, NY',
    occupation: 'Cold Weather Fit',
    viewedProfile: 19420,
    impressions: 82970,
  },
  {
    firstName: 'Shawn',
    lastName: 'Gibson',
    email: 'shawngibsonoh@icloud.com',
    password: 'Mangekgo98',
    picturePath: 'image10.jpg',
    location: 'Manhattan, NY',
    occupation: 'Photo Shoot, but make the face serious',
    viewedProfile: 19420,
    impressions: 82970,
  },
];

// Create users array with hashed passwords
export const users = await Promise.all(userData.map(data => createUser(data)));
