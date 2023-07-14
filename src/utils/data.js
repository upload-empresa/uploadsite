import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Brenner Costa',
      email: 'costabrenner1@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
  ],
  posts: [
    {
      title: 'Post1',
      data: '01/01/2023',
      slug: 'Post1',
      category: 'categoria1',
      image: 'Imagem1',
      perfil: '/',
      author: 'Brenner 1',
      body: 'Lorem ipsum',
      resumo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    },
    {
      title: 'Post 2',
      data: '13/03/2023',
      slug: 'Post2',
      category: 'categoria2',
      image: '/',
      author: 'Brenner 2',
      perfil: '/',
      body: 'Loren Ipsum',
      resumo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    },
  ],
};

export default data;
