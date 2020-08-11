import express from 'express';
import path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static(path.join('dist')));
app.use(apiRouter);

app.get('/*', function (req, res) {
  const someVariable = 123

  res.send(`
    <html>
      <head>
        <title>Barebones Typescript/React/Express</title>
        <meta charset="utf-8" />
        <meta data-est="html from express" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta test="${someVariable}" />
      </head>
      <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
      <script src="client.js"></script></body>
    </html>
    `)
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
