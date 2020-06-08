const express = require('express')
const path = require('path')

const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.send({status: 'ok'}))

app.listen(3333, () => console.log('Server is Up'))