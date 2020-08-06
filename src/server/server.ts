import * as express from 'express';
import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
