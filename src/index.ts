import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

const PORT = 5000;
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`this server is listening at port:${PORT}`);
});
