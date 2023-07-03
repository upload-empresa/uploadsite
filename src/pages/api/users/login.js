import nc from "next-connect";
import bcrypt from "bcryptjs";
import db from "../../../utils/db";
import User from "../../../models/User";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if (user && bcrypt.compareSync(req.body.password, user.password)) {
    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).send({ message: "Email ou senha inválidos" });
  }
});

export default handler;
