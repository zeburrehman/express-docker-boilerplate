// global imports
let express = require('express');
let bodyParser = require('body-parser');

// local imports
let settings = require('./config/settings');

// configure application
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define endpoints here
app.get('/', (req, res) => {
    res.status(200).send({
        status: 200,
        result: "Success"
    });
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        result: 200
    });
});

let port = settings.port;
app.listen(port,() => {
    console.log(`Server started at port: ${port}`);
});