import nc from 'next-connect';
import db from '../../../../utils/db';
import Post from '../../../../models/Post';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const post = await Post.find({});
  await db.disconnect();
  res.send(post);
});

handler.post(async (req, res) => {
  await db.connect();
  const newPost = new Post({
    title: 'Titulo 1',
    slug: 'titulo1',
    category: 'categoria1',
    data: '12/03/2023',
    image: '/image 4.png',
    author: 'Brenner 1',
    perfil: '/',
    body: 'Loren Ipsum',
    resumo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  });

  const post = await newPost.save();
  await db.disconnect();
  res.send({ message: 'Post Criado', post });
});

// handler.delete(async(req, res) => {
//     await db.connect();
//     const postDelete = await Post.findById(req.body.id);
//     if(postDelete){
//         await postDelete.remove();
//         await db.disconnect();
//         res.send({ message: "Post Deletado" });
//     } else {
//         await db.disconnect();
//         res.status(400).send({ message: "Post Não Encontrado" })
//     }
// });

export default handler;
