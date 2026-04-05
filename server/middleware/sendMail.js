import { createTransport } from 'nodemailer'
import welcomeTemplate from '../templates/welcomeTemplate.js';

const sendMail = async (email, subject, data) => {
    const transport = createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.Gmail,
            pass: process.env.Password
        },
    });

    //welcome html desing
    const html = welcomeTemplate(data)

    await transport.sendMail({
        from: process.env.Gmail,
        to: email,
        subject,
        html

    })
}

export default  sendMail