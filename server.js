const express = require('express');
const methodOverride = require('method-override');

// app initialization
const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use('/', require('./src/routes/initial.routes'));
app.use('/users', require('./src/routes/users.routes'));

app.listen(4000);
