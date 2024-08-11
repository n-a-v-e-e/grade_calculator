
const User = require('../models/model');

const Subject = require('../models/student');


const login = async (req, res) => {
    const { rollno } = req.body;

    try {
        let user = await User.findOne({ rollno });

        if (user) {
            res.status(200).json({ message: 'Roll number already exists in the database!' });
        } else {
            user = new User({ rollno });
            await user.save();
            res.status(201).json({ message: 'Roll number added to the database successfully!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const checkRollno = async (req, res) => {
    const { rollno } = req.body;

    try {
        let user = await User.findOne({ rollno });

        if (user) {
            let subject = await Subject.findOne({ rollno });

            if (subject) {
                res.status(200).json({ message: 'Roll number already exists in the subject model!' });
            } else {
                subject = new Subject({ rollno });
                await subject.save();
                res.status(201).json({ message: 'Roll number added to the subject model successfully!' });
            }
        } else {
            res.status(404).json({ message: 'Roll number not found in user model!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

const addStudentMark = async (req, res) => {
    const { rollno, subname, marks, outOf } = req.body;

    try {
        // Calculate grade based on marks and outOf
        const percentage = (marks / outOf) * 100;
        let grade;

        if (percentage >= 90) {
            grade = 'A';
        } else if (percentage >= 80) {
            grade = 'B';
        } else if (percentage >= 70) {
            grade = 'C';
        } else if (percentage >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Find the student in the Subject model by rollno
        let subject = await Subject.findOne({ rollno });

        if (subject) {
            // Add the new subject and its details to the student's record
            subject.subname.push(subname);
            subject.marks = marks;
            subject.outOf = outOf;
            subject.grade = grade;

            await subject.save();
            res.status(200).json({ message: 'Subject and marks added successfully!' });
        } else {
            res.status(404).json({ message: 'Roll number not found in subject model!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = {
    login,
    checkRollno,
    addStudentMark
};
