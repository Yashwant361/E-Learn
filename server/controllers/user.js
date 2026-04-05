import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from 'bcrypt'
import sendMail from "../middleware/sendmail.js";

export const register = async (req, res) => {
    try {

        const { email, name, password } = req.body


        let user = await User.findOne({ email })

        if (user) {
            return res.status(400)
                .json({ message: 'User Already exists' })
        }
        const hashPassword = await bcrypt.hash(password, 10)

        user = {
            name,
            email,
            password: hashPassword
        }

        const otp = Math.floor(Math.random() * 1000000)

        const activationToken = await jwt.sign({
            user,
            otp
        }, process.env.Activation_Secret,
            {
                expiresIn: '5m'
            }
        );

        const data = {
            name, otp
        }

        await sendMail(
            email,
            "E learning",
            data
        )

        res.status(200).json({
            message: 'OTP send to your email succesfully',
            activationToken,
        })


    } catch (error) {
        console.log('ERROR =>' + error);
        res.status(500)
            .json({ message: 'ERROR FROM SERVER =>' + error.message })

    }
}