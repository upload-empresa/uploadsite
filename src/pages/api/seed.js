import nc from 'next-connect';
import data from '../../utils/data';
import Post from '../../models/Post';
import User from '../../models/User';
import db from '../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  // await Post.deleteMany();
  //   await User.deleteMany();
  await Post.insertMany(data.posts);
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded com sucesso!' });
});

export default handler;
