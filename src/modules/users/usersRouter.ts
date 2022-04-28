import { Router } from 'express';

import { usersIndex, usersCreate, userShow } from './usersController.js';

export const usersRouter = Router();

usersRouter.get('/', usersIndex);

usersRouter.post('/', usersCreate);

usersRouter.get('/:user_id', userShow);
