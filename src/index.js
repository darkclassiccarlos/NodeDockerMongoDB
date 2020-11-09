const express = require('express');
//const path = require('path');
//const exphbs = require('express-handlebars');
//const method0verride = require('method-override');
//const session = require('express-session')

//Initiliazations
const app = express();

// Settings
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));
//app.engine('.hbs', exphbs({
//  defaultLayout: 'main',
//  layoutsDir: path.join(app.get('views'), 'layouts'),
//  partialsDir: path.join(app.get('views'), 'partials'),
//  extname: '.hbs'
//}));
//app.set('view engine', '.hbs');

//// Middlewares
//app.use(express.urlencoded({ extended: false }));
//app.use(method0verride('_method'));
//app.use(session({
//  secret: 'mysecretapp',
//  resave: true,
//  saveUninitialized: true
//}));

// Global Variables

// Routes
//app.use(require('./routes/index'));
//app.use(require('./routes/notes'));
//app.use(require('./routes/users'));

// Static Files

//Server is listenning
require('./database');

app.use(require('./routes/index.routes'))
app.listen(3000);
console.log('Server on port', 3000);
//app.listen(app.get('port'), () => {
//  console.log('Server on port', app.get('port'));
//});