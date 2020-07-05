const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');
// Initialise app with express
const app = express();

//Initialise Middleware
// app.use(logger);

//Handlebars Middleware
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Members Api Routes
app.use('/api/members', require('./routes/api/members'));
app.use('/charts/years', require('./routes/api/charts'));

//Home Page route
// app.get('/', (req, res) => res.render('index', {

// }));



//Add port to listen 
const PORT = process.env.PORT || 5000; //check if env has port no . if not run on 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));