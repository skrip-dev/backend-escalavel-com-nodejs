import {Request,Response} from 'express'
import {randomUUID} from 'crypto'

interface IUserItem {
  id: string;
  name: string;
}


const usersList:IUserItem[] = []

export const usersIndex = (req:Request,res:Response) => {
  res.json(usersList)
}

export const usersCreate = (req:Request,res:Response) => {
  const requestData = req.body;

  const newUser: IUserItem = {
    id: randomUUID(),
    name: requestData.name
  }

  usersList.push(newUser)

  res.json(newUser)
}