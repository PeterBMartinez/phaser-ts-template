var express = require('express');
var app = express();
var routes = require('./routes/routes');
const PORT = 4000;

app.use(express.static('dist'));

routes(app);
app.listen(PORT, () => {
    console.log('testing');
});