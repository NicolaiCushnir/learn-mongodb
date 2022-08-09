const router = require('express').Router();
const path = require('path');

router.get('/movies', function(req, res) {
	res.send('<h2> Main Page </h2>');
});

router.get('/anime', function(req, res) {
	res.send(anime);
	res.send('<h1> Here will be anime categories</h1>');
});

// fa ca fiecare anime sa arate dupa id
router.get('/anime/:id', function(req, res) {
	// arata in consola dynamic url
	console.log(req.params);
	var title = anime.find(function(title) {
		return title.id === Number(req.params.id);
	});
	res.send(title);
});

module.exports = router;