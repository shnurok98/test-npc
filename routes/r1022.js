const express = require('express');
const router = express.Router();

const r1022 = require('../models/r1022');

router.get('/', (req, res) => {
	r1022.findAll()
	.then(rows => {
		res.status(200).json(rows)
	})
	.catch(e => {
		res.status(500);
		console.log(e)
	})
})

router.get('/:p00', (req, res) => {
	const p00 = req.params.p00;
	
	r1022.findOne({
		where: {
			p00: p00
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

	r1022.create(data)
	.then(rows => {
		res.status(200).json(rows)
	})
	.catch(e => {
		res.sendStatus(500);
		console.log(e)
	})
});

router.put('/:p00', (req, res) => {
	const data  = req.body;
	const p00 = req.params.p00;

	r1022.update(data, {
		where: {
			p00: p00
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

router.delete('/:p00', (req, res) => {
	const p00 = req.params.p00;

	r1022.destroy({
		where: {
			p00: p00
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