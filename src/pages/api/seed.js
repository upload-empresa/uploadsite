import nc from 'next-connect';
import data from '../../utils/data';
import Post from '../../models/Post';
import db from '../../utils/db';

const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    // await Post.deleteMany();
    await Post.insertMany(data.posts);
    await db.disconnect();
    res.send({ message: 'seeded com sucesso!'});
});

export default handler;