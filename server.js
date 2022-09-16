const express = require('express');

const cors = require('cors')

require('./server/config/mongoose.config')

const app = express();
app.use(cors())
app.use(express.json())                             //used for req.body in post route
app.use(express.urlencoded({ extended: true }))     //used for post route

require('./server/routes/pet.routes')(app)

const port = 8000;

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});
