import {randomUUID} from 'crypto'


const usersList = []

export const usersIndex = (req,res) => {
  res.json(usersList)
}

export const usersCreate = (req,res) => {
  const requestData = req.body;

  requestData.id = randomUUID()

  usersList.push(requestData)

  res.json(requestData)
}