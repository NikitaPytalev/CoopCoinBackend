import express from 'express';

const app = express();

// middleware

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(`Listening on port ${3000}`);
});
