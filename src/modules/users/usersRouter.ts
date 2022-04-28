import { Router } from 'express';

import { usersIndex, usersCreate } from './usersController.js';

export const usersRouter = Router();

usersRouter.get('/', usersIndex);

usersRouter.post('/', usersCreate);
