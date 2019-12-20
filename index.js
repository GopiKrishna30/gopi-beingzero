const express = require('express')
const app = express()
const port = 3000

//this line tells expres to serve js or css files from front folder
app.use(express.static('frontend'))    
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
//res.sendFile
//res.json
//res.send
var student = { "name" : "Being Zero",
                "college" : "VNRVJIET",
                "regno" : "17071A1259"
               }
app.get('/register', (req, res) => res.send('Register'))
app.get('/data', (req,res) => res.json(student));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))