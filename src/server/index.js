import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';


import handleRender from './handleRender';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 54370;

app.use(compression());
app.use(cookieParser());
app.use(cors());

app.use('/dist', express.static('dist'));
app.use('/', express.static('public'));


app.use(handleRender);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('app now listening on port', port);
});
