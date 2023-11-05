const express = require('express')
const fs = require('fs')
const https = require('https')
const sanitizeFilename = require("sanitize-filename");
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = 3000; //In the docker-compose.yml, port 3000 gets forwarded to 443

const options = {
    key: fs.readFileSync('./ssl/private.key'),
    cert: fs.readFileSync('./ssl/server.crt'),
    ca: [
        fs.readFileSync('./ssl/intermediate.crt'),
        fs.readFileSync('./ssl/root.crt')
    ]
};

app.get('/.well-known/:file', (req, res) => {
    const file = sanitizeFilename(req.params.file)

    const filepath = path.resolve(__dirname, '.well-known', file)

    res.set('Content-Type', 'application/json')
    res.status(200)
    res.sendFile(filepath)
})

https.createServer(options, app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.use(express.static('public'))