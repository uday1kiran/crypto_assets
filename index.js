const express = require('express');
const ejs=require('ejs');

const bodyParser = require('body-parser');

const app = new express();
app.set('view engine','ejs')


app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//global.title = "Crypto Assets"


app.use(function(req, res, next){
    console.log(req)
    res.locals.title = "Marker";//To set website title
    req.active = req.path.split('/')[1] // [0] will be empty since routes start with '/'
    if (req.length === 0) req.active = "Home"
    next();
});

//controllers
const homeController = require('./controllers/home')
const aboutController = require('./controllers/about')
const contactController = require('./controllers/contact')
const portfolioController = require('./controllers/portfolio')
const servicesController = require('./controllers/services')
const teamController = require('./controllers/team')
const ratesCalculatorController = require('./controllers/ratesCalculator')

//routes
app.get('/',homeController)
app.get('/home',homeController)
app.get('/about',aboutController)
app.get('/contact',contactController)
app.get('/portfolio',portfolioController)
app.get('/services',servicesController)
app.get('/team',teamController)
app.get('/ratesCalculator',ratesCalculatorController)

app.listen(4000,()=>{
    console.log('App listening on port: 4000');
})