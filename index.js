const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello fuck suck it bitch World!')
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})
