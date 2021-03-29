const express = require('express')

const app = express()

app.use('/styles', express.static(__dirname + '/styles'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use(express.static(__dirname + '/public'))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html")
})

const PORT = process.env.PORT || 3301
app.listen(PORT, console.log('The server is running'))