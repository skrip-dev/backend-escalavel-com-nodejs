import { promises } from 'fs'

const data = await promises.readFile('package.json', {
  encoding:'utf-8'
});

console.log(data)
