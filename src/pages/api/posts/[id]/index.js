import nc from 'next-connect';
import db from '../../../../utils/db';
import Post from '../../../models/Post';

const handler = nc();

handler.get(async (req, res) => {
    await db.connect();
    const post = await Post.findById(req.body.id);
    await db.disconnect();
    res.send(post);
});

export default handler;