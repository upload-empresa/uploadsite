import bcrypt from 'bcryptjs';

const data = {
  posts: [
    {
      title:
        'Captar novos clientes: Como tornar seu negócio mais rentável',
      slug: 'captar-novos-clientes',
      data: '13 Jan | Leitura: 10min',
      category: 'categoria1',
      image: '/image 4.png',
      rating: 4.5,
      numReviews: 10,
      author: 'Gabriel Botelho',
      perfil: '/image 4.png',
      body: 'Loren Ipsum',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor `<br />` sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      slug: 'titulo2',
      data: '13 Jan | Leitura: 10min',
      category: 'categoria2',
      image: '/image 4.png',
      rating: 6,
      numReviews: 10,
      author: 'Iba',
      perfil: '/image 4.png',
      body: 'Loren Ipsum',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      slug: 'titulo3',
      data: '13 Jan | Leitura: 10min',
      category: 'categoria2',
      image: '/image 4.png',
      rating: 7,
      numReviews: 10,
      author: 'Iba',
      perfil: '/image 4.png',
      body: 'Loren Ipsum',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      slug: 'titulo4',
      data: '13 Jan | Leitura: 10min',
      category: 'categoria2',
      image: '/image 4.png',
      rating: 8,
      numReviews: 10,
      author: 'Iba',
      perfil: '/image 4.png',
      body: 'Loren Ipsum',
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ],
};

export default data;
