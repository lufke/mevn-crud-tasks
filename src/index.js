const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()
mongoose.connect('mongodb+srv://pipechela:lufke1980@chimba.diz4m.mongodb.net/mevn-tasks?retryWrites=true&w=majority',{
	useNewUrlParser:true,
	useUnifiedTopology:true
	})
	.then(db=>console.log('db conectada'))
	.catch(err=>console.error(err))

//SETTINGS
app.set('port', 3000 || process.env.PORT)

//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.use('/tasks',require('./routes/tasks'))

//STATIC FILES
app.use(express.static(__dirname+'/public'))

//SERVICIO ESCUCHANDO
app.listen(app.get('port'), ()=>{
	console.log('server on port '+app.get('port'))
	})
