const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user: 'postmaster@sandbox9a48b981c9a347eab9d78b0b76c53f33.mailgun.org',
            pass: 'be44223b1464102d3cc25e67666edc9a-4c955d28-72bc624b',
        }
    });

    const sendVerificationEmail = async (email, token) => {
        const verificationUrl = `http://localhost:5173/FormVerification/${token}`;
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

       
