const nodemailer = require("nodemailer");

console.log(process.env.EMAIL_USERNAME);

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user:'',
            //process.env.EMAIL_USERNAME,
            pass:'', 
            //process.env.EMAIL_PASSWORD,
        }
    });

    const sendVerificationEmail = async (email, token) => {
        const verificationUrl = `http://localhost:5173/reservations/verify/${token}`;
        const mailOptions = {
            from: 'support@myapp.com',
            to: email,
            subject: 'Email Verification',
            html: `<p>Please click <a href="${verificationUrl}">here</a> to verify your email.</p>`
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Verification email send to:', email);
        } catch (error) {
            console.error('Error ending email:', error);
            
        }
    };

    module.exports={sendVerificationEmail};

       
