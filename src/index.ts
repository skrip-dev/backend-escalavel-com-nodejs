import 'dotenv/config';

import debug from 'debug';
import express from 'express';

import { usersRouter } from './modules/users/usersRouter.js';

const log = debug('app:api:main');

const server = express();
server.use(express.json());

server.get('/', async (req, res) => {
  res.send('Hello APP Typescript');
});

server.use('/users', usersRouter);

server.listen(3333, () => {
  log('Server listen');
});
