import prisma from '@prisma/client';
import { Request, Response } from 'express';

const prismaClient = new prisma.PrismaClient();

export const usersIndex = async (req: Request, res: Response) => {
  const users = await prismaClient.user.findMany();

  res.json(users);
};

export const usersCreate = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  res.json(newUser);
};

export const userShow = async (req: Request, res: Response) => {
  const { user_id } = req.params;

  const user = await prismaClient.user.findFirst({
    where: {
      id: user_id,
    },
  });

  if (!user) {
    return res.status(404).json({
      error: 'not found',
    });
  }

  res.json({
    user,
  });
};
