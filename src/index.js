const express = require('express')

const app = express()

//SETTINGS
app.set('port', 3000 || process.env.PORT)

//MIDDLEWARES


//ROUTES


//STATIC FILES


//SERVICIO ESCUCHANDO
app.listen(app.get('port'), ()=>{
	console.log('server on port '+app.get('port'))
	})
