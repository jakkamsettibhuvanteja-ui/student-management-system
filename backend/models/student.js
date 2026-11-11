const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    rollNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;