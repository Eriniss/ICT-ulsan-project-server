// /post - GET, POST
// /post:id - DELETE, UPDATE

import { Request, Response, NextFunction, Router } from 'express';
import Post from '@src/schemas/post';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  // 모든 포스트 배열로 전달
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      body: req.body.body,
    });
    console.log(post);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Post.remove({
      _id: req.params.id,
    });
    res.json(result);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const title = req.body.title;
    const body = req.body.body;
    const post = await Post.findByIdAndUpdate({ _id: req.params.id }, { title, body });
    res.json(post);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
