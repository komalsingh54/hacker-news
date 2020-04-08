import express from 'express';
import handleRender from './handleRender';

const app = express();
const port = 3000;

app.use('/dist', express.static('dist'));

app.use(handleRender);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('app now listening on port', port);
});
