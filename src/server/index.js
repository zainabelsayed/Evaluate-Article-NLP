var path = require('path')
const fetch = require('node-fetch')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const cors = require('cors') 
app.use(cors())
app.use(express.static('dist'))
const port = 8081
const server = app.listen(port,listening)
function listening(){
    console.log(`server running on localhost:${port}`)
}


const apiKey= process.env.API_KEY // getting the API_KEY from the .env file
let textData = []
app.post('/submit', (req,res)=>{ // fetching the meaning cloud api and post the response to the client side
    fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&url=${req.body.articleUrl}&lang=en&verbose=n&of=json`,
    {
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-Type':'application/json'
        }
    })
        .then(res => res.json())
        .then(data =>{
            console.log(data,req.body.articleUrl)
            res.send(data)
            textData.push(req.body)
        }).catch(error=>{
            console.log(error)
            res.send(`<script>alert(${error})</script>`)
        })
           
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.get('/all', function (req, res) {
    res.send(req.body)
    console.log(textData)
})


// TODO: export app to use it in the unit testing
