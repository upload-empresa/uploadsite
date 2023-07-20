import nc from 'next-connect';
import db from '../../../../../utils/db';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import Post from '../../../../../models/Post';

const handler = nc(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  await db.disconnect();
  res.send(post);
});

handler.put(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  if (post) {
    post.title = req.body.title;
    post.data = req.body.data;
    post.slug = req.body.slug;
    post.category = req.body.category;
    post.image = req.body.image;
    post.perfil = req.body.perfil;
    post.author = req.body.author;
    post.resumo = req.body.resumo;
    post.body = req.body.body;
    post.featuredImage = req.body.featuredImage;
    await post.save();
    await db.disconnect();
    res.send({ message: 'Post atualizado com sucesso!' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Post não encontrado' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  if (post) {
    await post.remove();
    await db.disconnect();
    res.send({ message: 'Post Deletado' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Post Não Encontrado' });
  }
});

export default handler;
