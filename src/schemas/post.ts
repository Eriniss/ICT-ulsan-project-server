import { model, Schema } from 'mongoose';

interface postType {
  title: string;
  body: string;
}

const postSchema = new Schema<postType>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

const Post = model('post', postSchema);
export default Post;
