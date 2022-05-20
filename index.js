const express = require('express')
const app = express()
const PORT = 2022

app.set('view engine', 'ejs')

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params)
    res.send(`${parseInt(req.params.x) + parseInt(req.params.y)}`)
})
app.get('/subtract/:x/:y', (req, res) => {
    console.log(req.params)
    res.send(`${parseInt(req.params.x) - parseInt(req.params.y)}`)
})
app.get('/multiply/:x/:y', (req, res) => {
    console.log(req.params)
    res.send(`${parseInt(req.params.x) * parseInt(req.params.y)}`)
})
app.get('/divide/:x/:y', (req, res) => {
    console.log(req.params)
    res.send(`${parseInt(req.params.x) / parseInt(req.params.y)}`)
})
app.get("/*", (req, res) => {
    console.log(req.params)
    res.send(req.params)
  })
app.listen(PORT,() => {
    console.log('hello world')
})