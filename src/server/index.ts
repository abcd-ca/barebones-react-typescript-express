import express from 'express';
import path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static(path.join('dist')));
app.use(apiRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
