import express from 'express';
import compression from 'compression';

import handleRender from './handleRender';

require('dotenv').config();

const app = express();
const port = 3000;

app.use(compression());

app.use('/dist', express.static('dist'));
app.use('/public', express.static('public'));

app.use(handleRender);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('app now listening on port', port);
});
