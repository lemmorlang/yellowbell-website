// Import npm packages

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

//password: yellowbell
//const MONGODB_URI = 'mongodb+srv://yellowbellmongo:yellowbell@cluster0.f6fea.mongodb.net/<dbname>?retryWrites=true&w=majority';
//mongodb+srv://yellowbellprotopyte:yellowbell@cluster0.ohsdw.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/yellowbell', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Saving data to our mongo database
const data = {
    title: 'wowowow',
    body: 'yeah yeah'
};


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('yellowbell/build'));
}

app.listen(PORT, console.log(`Server is starting at ${PORT}`));