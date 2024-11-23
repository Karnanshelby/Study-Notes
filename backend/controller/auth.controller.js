import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js"
import bcryptjs from "bcryptjs";

export const signup = async(req, res, next) => {
    const {username,email,password} = req.body

    const isvalidUser = await User.findOne({ email })

    if(isvalidUser){
        return next(errorHandler(400, "user already exist"))
    }   

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
        username,
        email,
        password: hashedPassword
    })

    try {
        await newUser.save()

        res.status(201).json({
            sucess: true,
            message: "user created successfully"
        })
    } catch (error) {
        next(error)
    }
}