// /api/posts/:id/reviews
import mongoose from 'mongoose';
import nextConnect from 'next-connect';
import { onError } from '../../../../utils/error';
import db from '../../../../utils/db';
import Post from '../../../../models/Post';
import { isAuth } from '../../../../utils/auth';

const handler = nextConnect({
  onError,
});

handler.get(async (req, res) => {
  db.connect();
  const post = await Post.findById(req.query.id);
  db.disconnect();
  if (post) {
    res.send(post.reviews);
  } else {
    res.status(404).send({ message: 'Post not found' });
  }
});

handler.use(isAuth).post(async (req, res) => {
  await db.connect();
  const post = await Post.findById(req.query.id);
  if (post) {
    const existReview = post.reviews.find((x) => x.user == req.user._id);
    if (existReview) {
      await Post.updateOne(
        { _id: req.query.id, 'reviews._id': existReview._id },
        {
          $set: {
            'reviews.$.comment': req.body.comment,
            'reviews.$.rating': Number(req.body.rating),
          },
        }
      );

      const updatedPost = await Post.findById(req.query.id);
      updatedPost.numReviews = updatedPost.reviews.length;
      updatedPost.rating =
        updatedPost.reviews.reduce((a, c) => c.rating + a, 0) /
        updatedPost.reviews.length;
      await updatedPost.save();

      await db.disconnect();
      return res.send({ message: 'Review updated' });
    } else {
      const review = {
        user: mongoose.Types.ObjectId(req.user._id),
        name: req.user.name,
        rating: Number(req.body.rating),
        comment: req.body.comment,
      };
      post.reviews.push(review);
      post.numReviews = post.reviews.length;
      post.rating =
        post.reviews.reduce((a, c) => c.rating + a, 0) / post.reviews.length;
      await post.save();
      await db.disconnect();
      res.status(201).send({
        message: 'Review submitted',
      });
    }
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Post Not Found' });
  }
});

export default handler;
