var User = require('./models/user');
var passport = require('passport');

module.exports = function(app) {
	
	app.post('/login', function(req, res) {
		passport.authenticate('local', function(err, user, info) {
			if (err) { return res.json({loginSuccess : false}); }
			if (!user) {
				return res.json({loginSuccess : false});
			}
			return res.json({loginSuccess : true});
		})(req, res);
	});
	
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html'); // load our public/index.html file
	});

};

