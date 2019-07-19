const express = require('express')
const axios = require('axios')

const app = express()

app.get('/test/gamespot', (req, res) => {
  axios.get('http://www.gamespot.com').then(response => {
    res.json({
      data: response.data,
    })
  }).catch(error => {
    res.json({
      status: error.response.status,
      error: error.response.data,
      headers: error.response.headers
    })
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT)
