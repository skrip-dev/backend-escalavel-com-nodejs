import express from 'express'
import {usersRouter} from './modules/users/usersRouter.js'

const server = express()
server.use(express.json())

server.get('/', async (req, res)=>{
  res.send('Hello APP Typescript')
})

server.use('/users',usersRouter)

server.listen(3333, ()=>{
  console.log('server listen')
})
