import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './User'; // Adjust the path if necessary

const userIds = Array.from({ length: 10 }, () => new mongoose.Types.ObjectId());

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const createUser = async ({ _id, firstName, lastName, email, password, picturePath, location, occupation, viewedProfile, impressions }) => ({
  _id,
  firstName,
  lastName,
  email,
  password: await hashPassword(password),
  picturePath,
  friends: [],
  location,
  occupation,
  viewedProfile: viewedProfile || Math.floor(Math.random() * 10000),
  impressions: impressions || Math.floor(Math.random() * 100000),
  createdAt: Date.now(),
  updatedAt: Date.now(),
  __v: 0,
});

const userData = [
  {
    _id: userIds[0],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image1.jpg",
    location: "New York, NY",
    occupation: "T-Pain Concert Attendee",
    viewedProfile: 14561,
    impressions: 888822,
  },
  {
    _id: userIds[1],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image2.jpg",
    location: "New York, NY",
    occupation: "Clothing Enthusiast",
    viewedProfile: 12351,
    impressions: 55555,
  },
  {
    _id: userIds[2],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image3.jpg",
    location: "New York, NY",
    occupation: "Model and Fashion Icon",
    viewedProfile: 45468,
    impressions: 19986,
  },
  {
    _id: userIds[3],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image4.jpg",
    location: "Burkburnett, TX",
    occupation: "Travel Explorer",
    viewedProfile: 41024,
    impressions: 55316,
  },
  {
    _id: userIds[4],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image5.jpg",
    location: "New York, NY",
    occupation: "Bosnia and Herzegovina United Nations Head Delegate",
    viewedProfile: 40212,
    impressions: 7758,
  },
  {
    _id: userIds[5],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image6.jpg",
    location: "Corpus Chrisit, TX",
    occupation: "Wedding Anniversary Party Attendee",
    viewedProfile: 976,
    impressions: 4658,
  },
  {
    _id: userIds[6],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekyo98",
    picturePath: "image7.jpg",
    location: "Corpus Christi, TX",
    occupation: "Brooklyn College Bachelor Degree Class of 2021",
    viewedProfile: 1510,
    impressions: 77579,
  },
  {
    _id: userIds[7],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekgo98",
    picturePath: "image8.jpg",
    location: "Queens, NY",
    occupation: "Arby's... we have the meats",
    viewedProfile: 19420,
    impressions: 82970,
  },
  {
    _id: userIds[8],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekgo98",
    picturePath: "image9.jpg",
    location: "New York, NY",
    occupation: "Cold Weather Fit",
    viewedProfile: 19420,
    impressions: 82970,
  },
  {
    _id: userIds[9],
    firstName: "Shawn",
    lastName: "Gibson",
    email: "shawngibsonoh@icloud.com",
    password: "Mangekgo98",
    picturePath: "image10.jpg",
    location: "Manhattan, NY",
    occupation: "Photo Shoot, but make the face serious",
    viewedProfile: 19420,
    impressions: 82970,
  },
];

const main = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/anime-server', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    const users = await Promise.all(userData.map(data => createUser(data)));
    await User.insertMany(users);
    console.log('Users have been inserted');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    mongoose.connection.close();
  }
};

main().catch((err) => console.error('Connection error:', err));
