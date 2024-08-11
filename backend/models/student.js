const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    subname: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
    outOf: {
        type: Number,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    }
});


const userSchema = new mongoose.Schema({
    rollno: {
        type: String,
        required: true,
        unique: true,
    },
    Subjects: [subjectSchema], // Embedding the subject schema
}, { timestamps: true });

const Subject = mongoose.model('Subject', userSchema);

module.exports = Subject;
