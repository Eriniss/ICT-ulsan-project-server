import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import indexRouter from '@src/routes';
import postRouter from '@src/routes/post';
import connect from '@src/schemas';
const app: Application = express();

const PORT = 5000;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
connect();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/', indexRouter);
app.use('/post', postRouter);

app.listen(PORT, () => {
  console.log(`this server is listening at port:${PORT}`);
});

//
