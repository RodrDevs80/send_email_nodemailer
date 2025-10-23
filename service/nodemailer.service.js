import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_APP,
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from: process.env.USER_GMAIL,
            to,
            subject,
            text
        })
        console.log(info)
        return info;
    } catch (err) {
        console.log(err.message)
        return "error";
    }
}

export default sendEmail;