// pages/api/mail.ts
/* eslint-disable */
const sgMail = require('@sendgrid/mail');

export default async function Send(req: { body: { email: any; cargo: any; name: any; opcao: any; telephone: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, cargo, name, opcao, telephone } = req.body;

  const content = {
    to: 'helenita.lannes.salles@gmail.com',
    from: 'helena.lannes.salles@hotmail.com',
    subject: `Formulário de contato - ${email}`,
    text: cargo,
    html: `
    <p>Nome: ${name}</p>
    <p>Telefone: ${telephone}</p>
    <p>Email: ${email}</p>
    <p>Opção: ${opcao}</p>
    <p>Cargo: ${cargo}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Mensagem enviada!');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Houve um erro ao enviar essa mensagem.');
  }
}



