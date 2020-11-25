const express = require('express');
const router = express.Router();

const Mpe1gem = require('../models/mpe1gem');

router.get('/', (req, res) => {
	Mpe1gem.findAll()
	.then(rows => {
		res.status(200).json(rows)
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e)
	})
});

router.get('/:id', (req, res) => {
	const id = +req.params.id;
	
	Mpe1gem.findOne({
		where: {
			id: id
		}
	})
	.then(rows => {
		res.status(200).json(rows)
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e)
	})
});

router.post('/', (req, res) => {
	const data = req.body;

	Mpe1gem.create(data)
	.then(rows => {
		res.status(200).json(rows)
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e)
	})
});

router.put('/:id', (req, res) => {
	const data  = req.body;
	const id = +req.params.id;

	Mpe1gem.update(data, {
		where: {
			id: id
		}
	})
	.then(rows => {
		res.sendStatus(204); // 204 No Content
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e);
	})
})

router.delete('/:id', (req, res) => {
	const id = +req.params.id;

	Mpe1gem.destroy({
		where: {
			id: id
		}
	})
	.then(rows => {
		console.log(rows);
		res.sendStatus(204); // 204 No Content
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e);
	})
})

module.exports = router;