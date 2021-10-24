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
		app.post('/submitdata', (req, res) => {
			db.collection(req.body.name).insertOne({'num_unique':parseInt(req.body.num_unique),'time':Date.now()})
			console.log('poggers database moment')
		})
		//
		app.get('/mostrecentdata',(req,res)=>{
			db.listCollections().toArray((err, collections) => {
				const collnames = collections.map(x => x['name'])
				if (req.query.floor == null){
					occupancyjson = {
							'occupancy':'no floor input'
						}
					res.send(occupancyjson)
				}
				else if (req.query.building == null){
					occupancyjson = {
							'occupancy':'no building input'
						}
					res.send(occupancyjson)
				}
				else if (collnames.indexOf(req.query.building+req.query.floor) == -1){
					occupancyjson = {
							'occupancy':'no data on specified building/floor'
						}
					res.send(occupancyjson)
				}
				else{
					db.collection(req.query.building+req.query.floor).find({}).sort({time:1}).toArray((err,result)=>{
					var recent = result[0].num_unique
					var avg = 0;
					for(var i = 0; i<result.length; i++){
						avg += result[i].num_unique
					}
					avg /= result.length
					if (recent > .6*avg){
						occupancyjson = {
							'occupancy':'high'
						}
					}
					else if (recent > .4*avg){
						occupancyjson = {
							'occupancy':'medium'
						}
					}
					else{
						occupancyjson = {
							'occupancy':'low'
						}
					}
					res.send(occupancyjson)
				})}
			});
		})

		app.get('/',(req,res)=>{
			res.sendFile(path.join(__dirname,'BuzzSense.html'))
		})
		app.listen(port, () => {
			console.log('Started listening at http://localhost:'+port)
		})
	  })
  .catch(error => console.error(error))
