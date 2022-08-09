const router = require('express').Router();

router.get('/', (req, res) => {
	let articles = [
		{
			id: 1,
			title: 'Article One',
			author: 'Brad Traversy',
			body: 'This is article one'
		},
		{
			id: 2,
			title: 'Article Two',
			author: 'Nicolai Cushnir',
			body: 'This is article two'
		},
				{
			id: 3,
			title: 'Article Three',
			author: 'Brad Traversy',
			body: 'This is article three'
		}
	];

	res.render('index', {
		title: 'List anime',
		articles: articles
	});
});

router.get('/add', (req, res) => {
	res.render('add', {
		title: 'add anime',
		age: 24
	});
});

module.exports = router;