const express = require('express')
const path = require('path')



const app = express()

const PORT = process.env.PORT || 4700;
const app_path = '/dist'
app.use('/', express.static(path.join(__dirname, app_path)))
.get('*', (req, res)=> res.sendFile(path.join(__dirname, app_path + '/index.html')))
.listen(PORT, () => console.log(`port ${PORT}`));