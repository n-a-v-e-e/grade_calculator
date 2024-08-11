const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    rollno: {
        type: String,
        required: true,
        unique: true,
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
