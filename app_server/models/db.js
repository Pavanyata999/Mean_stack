const mongoose = require('mongoose');

// MongoDB Cluster connection string with your username and password
const dbURI = 'mongodb+srv://22eg106a62:Pavanyata123@cluster0.mongodb.net/wpm?retryWrites=true&w=majority'; 

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => { 
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Load your models (ensure paths are correct)
require('./locations'); 
