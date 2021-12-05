//Aquino, Bea Nichole T. - Dizon, Maycee G. - Quizon, Megan Rae L.
// CS - 401     6ASI	PRELIM Exam
// August 26, 2021

const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();


// Get Name
router.get("/name", function(req, res) {
    res.send({ type: "I'm Maycee Dizon" });
});


// Get Age
router.get("/age", function(req, res) {
    res.send({ type: "Currently 21 years old" });
});


// Get Gender
router.get("/gender", function(req, res) {
    res.send({ type: "A female" });
});


// Get Address
router.get("/address", function(req, res) {
    res.send({ type: "I'm from Angeles City Pampanga" });
});


// Get Section
router.get("/section", function(req, res) {
    res.send({ type: "CS-401 is my section" });
});


// Post to Send Email
router.post("/email", function(req, res) {
    console.log("You made a post ", req.body);
    res.send({
        type: "POST",
        email: req.body.email,
        message: req.body.message,
    });
    sendEmail(req.body.email, req.body.message);
});


// This is the function for sending the email
// Parameters: Receive the receiver and message

function sendEmail(receiver, message) {
	// user and pass 
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "cs401asi@gmail.com",
            pass: "P4$$w0rd",
        },
    });


    // Details of the mail: receiver, subject, text or content
    let mailDetails = {
        from: "cs401asi@gmail.com",
        to: receiver,
        subject: "PRELIM Examination",
        text: message,
    };


    // Error or Success message
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if (err) {
            console.log("[ Error: Email Not Sent ]");
        } else {
            console.log("[ Success: Email Sent ]");
        }
    });
}


module.exports = router;