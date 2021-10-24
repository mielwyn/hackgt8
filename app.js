const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port = 3000
const MongoClient = require('mongodb').MongoClient
const passwrd = require('./config/keys').atlasPassword
const connectionString = 'mongodb+srv://micah:'+passwrd+'@cluster0.45jzb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const path = require('path')
app.use(express.static(__dirname+'/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

MongoClient.connect(connectionString, { useUnifiedTopology: true })
	.then(client => {
		console.log('Connected to Database')
		const db = client.db('building-occupancy')
		const fittenCollection = db.collection('fitten')
		app.post('/', (req, res) => {
			res.send('Hello World!')
			fittenCollection.insertOne({'num_unique':req.body.num_unique,'time':Date.now()})
		})
		app.get('/',(req,res)=>{
			res.sendFile(path.join(__dirname,'BuzzSense.html'))
		})
		app.listen(port, () => {
			console.log('Started listening at http://localhost:'+port)
		})
	  })
  .catch(error => console.error(error))
