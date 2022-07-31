// /post - GET, POST
// /post:id - DELETE, UPDATE

import { Request, Response, NextFunction, Router } from 'express';
import Post from '@src/schemas/post';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.json(post);
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
  const id = req.params.id;
  try {
    const result = await Post.deleteOne({
      _id: id,
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
