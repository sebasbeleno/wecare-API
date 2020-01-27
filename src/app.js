const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Server config
app.set('port', process.env.PORT  || 5050)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(require('./routes/user'));

//Start sever
app.listen(app.get('port'), () => {
    console.log('Server iniciado correctamente en el puerto: ', app.get('port'))
})