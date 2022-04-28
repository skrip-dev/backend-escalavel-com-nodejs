import express from 'express'
import { promises } from 'fs'

const server = express()


server.get('/', async (req, res)=>{
  const data = await promises.readFile('package.json', {
    encoding:'utf-8'
  });

  res.send(data)
})

server.get('/info', async (req, res)=>{
  res.send('Hello APP')
})


server.listen(3333, ()=>{
  console.log('server listen')
})
