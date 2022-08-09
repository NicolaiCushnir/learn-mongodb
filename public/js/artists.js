var router = require('express').Router()

var artists = [
	{
		id: 1,
		name: 'metalica'
	},
	{
		id: 2,
		name: 'Iron Maiden'
	},
	{
		id: 3,
		name: 'Deep Purple'
	}
];

router.get('/', function(req, res) {
	res.send('<h1> Main Page </h1>');
});

router.get('/artists', function(req, res) {
	res.send(`<pre>${JSON.stringify(artists, null, 4)}</pre>`);
});

router.get('/artists/:id', function(req, res) {
	var artist = artists.find(function(artist) {
		return artist.id === Number(req.params.id);
	});
	res.send(`<pre>${JSON.stringify(artist, null, 4)}</pre>`);
});

router.post('/artists', function(req, res) {
	var stringRequest = JSON.stringify( {"da"} );
	artists.push(JSON.parse(stringRequest));
	res.send(typeof stringRequest);
});

module.exports = router;