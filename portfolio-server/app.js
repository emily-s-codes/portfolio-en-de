import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import nodemailer from 'nodemailer'
import "./config/config.js"

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD
    }
});

app.post('/api/emailme', (req, res) => {
    const message = {
        from: req.body.email,
        to: 'sheil.emily1@gmail.com',
        subject: `Portfolio Email - from ${req.body.name}`,
        //  
        text: req.body.message,
        html: req.body.message
    }

    transport.sendMail(message, (err, info) => {
        console.log(info)
        if (err) return res.status(500).json({ message: err })
        return res.status(200).json({ message: 'sent' })
    })
})

app.post('/api/emailyou', (req, res) => {
    const message = {
        from: "sheil.emily1@gmail.com",
        to: req.body.email,
        subject: "Your email to Emily",
        text: `Dear ${req.body.name}, Thank you for your message, I will get back to you as soon as I can. Here is a copy of what you sent me, for your records: ${req.body.message}`,
        html: `<section><p>Dear ${req.body.name},</p></section><section><p>Thank you for your message, I will get back to you as soon as I can.</p>
        <p>Below is a copy of what you sent me.</p></section>
        <section>
        <p>${req.body.message}</p>
        </section>
        <p>All best wishes,</p>
        <p>Emily</p>`
    }

    transport.sendMail(message, (err, info) => {
        console.log(info)
        if (err) return res.status(500).json({ message: err })
        return res.status(200).json({ message: 'sent' })
    })
})


app.listen(PORT, () => console.log('running on port', PORT))