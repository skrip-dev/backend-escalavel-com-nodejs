import { randomUUID } from 'crypto';
import { Request, Response } from 'express';

interface IUserItem {
  id: string;
  name: string;
}

const usersList: IUserItem[] = [];

export const usersIndex = (req: Request, res: Response) => {
  res.json(usersList);
};

export const usersCreate = (req: Request, res: Response) => {
  const requestData = req.body;

  const newUser: IUserItem = {
    id: randomUUID(),
    name: requestData.name,
  };

  usersList.push(newUser);

  res.json(newUser);
};

export const userShow = (req: Request, res: Response) => {
  const params = req.params;

  const user = usersList.find(
    (currentUser) => currentUser.id === params.user_id,
  );

  if (!user) {
    return res.status(404).json({
      error: 'not found',
    });
  }

  res.json({
    user,
  });
};
