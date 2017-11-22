const express = require('express');
const hbs	= require('hbs');
const fs = require('fs');

// port
const port = process.env.PORT || 3000;

let app = express();

// register hbs partials
hbs.registerPartials(__dirname + '/views/partials')

// set view engine
app.set('view engine', 'hbs');

// set static folder
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=> {
	res.render('home.hbs', {
		message: "welcome to Home page",
		pageTitle: "Home Page"
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: "About Page"
	});
});


app.listen(3000)