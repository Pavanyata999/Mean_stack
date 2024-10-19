const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,   // Added the type field
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,   // Email should be unique
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] // Simple email validation
    },
    password: {
        type: String,
        required: true
    }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);
