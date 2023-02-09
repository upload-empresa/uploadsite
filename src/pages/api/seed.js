import nc from 'next-connect';
import Post from '../../models/Post';
import db from '../../utils/db';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Post.deleteMany();
  await Post.insertMany(data.posts);
  await db.disconnect();
  res.send({ message: 'seeded com sucesso!' });
});

export default handler;
