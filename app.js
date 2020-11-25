const express = require('express'); // веб фреймворк
const bodyParser = require('body-parser'); // разбор тела запроса
const cors = require('cors'); // для CORS

const PORT = require('./config').port; // порт для запуска api

const app = express();

// Routers
const mpe1gem = require('./routes/mpe1gem');
const r1022 = require('./routes/r1022');

app.use(cors());
app.use(bodyParser.json()); // разбор json
app.use(bodyParser.urlencoded({extended: true})); // разбор formdata

// Url's
app.get('/', (req, res) => {
	res.status(200).send('API is live!')
});
app.use('/mpe1gem', mpe1gem);
app.use('/r1022', r1022);


app.listen(PORT, () => {
	console.log('API started on localhost:' + PORT)
})