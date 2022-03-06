const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

const port = 5000

const app = express()

const list = [
  {
    id: 1,
    title: 'item 1',
    student: 'student001',
    coin: -50,
    item: '航海武器',
    operator: 'H 編',
  },
  {
    id: 2,
    title: 'item 2',
    student: 'student001',
    coin: 50,
    item: '操作失誤：航海武器',
    operator: 'H 編',
  },
  {
    id: 2,
    title: 'item 3',
    student: 'student003',
    coin: -10000,
    item: 'S 見面會',
    operator: 'S 編',
  },
]

app.use(cors())
app.use(express.json())

app.post('/api/login', async(req, res) => {
  const { username, password } = req.body

  try {
    const hash = await bcrypt.hash(password, 10)
    res.status(200).send({
      data: 'login',
      username,
      hash,
    })
  }
  catch (error) {
    console.log(error)
  }
})

app.get('/api/list', (req, res) => {
  res.send(list)
})

app.listen(port, () => {
  console.log(`$ server is running at ${port}`)
})
