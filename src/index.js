const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const port = 3000


app.use(morgan('combined'))

//template engine
app.engine('.hbs', handlebars.engine({ extname: '.hbs' }))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))
console.log('PATH: ', path.join(__dirname, 'resources', 'views'))
app.get('/', (req, res) => res.render('home'))
app.get('/news', (req, res) => res.render('news'))

app.listen(port, () => console.log(`Example app listening at http://localhost: ${port}`))