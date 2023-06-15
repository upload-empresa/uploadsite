import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    data: { type: String     , required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    perfil: { type: String, required: true },
    author: { type: String, required: true },
    resumo: { type: String, required: true },
    body: { type: String, required: true },
    featuredImage: { type: String },
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);
export default Post;
