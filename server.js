const denv=require('dotenv').config();
// load the things we need
const express = require('express');
const app = express();
const portNumber=process.env['port_number']||8080;
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
// // index page
// app.get('/', function (req, res) {
// 	res.render('pages/index');
// });
// index page
app.get('/', function(req, res) {
	var mascots = [
		{ name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
		{ name: 'Tux', organization: "Linux", birth_year: 1996},
		{ name: 'Moby Dock', organization: "Docker", birth_year: 2013}
	];
	var tagline = "No programming concept is complete without a cute animal mascot.";
	res.render('pages/index', {
		mascots: mascots,
		tagline: tagline
	});
});
// about page
app.get('/about', function (req, res) {
	res.render('pages/about');
});
app.listen(portNumber);
console.log(portNumber+' is the magic port');
