import User from "../models/User.js";


export const registerTheNumber = async (req, res, next) => {
    try {
        const { number } = req.body;
        const newUser = await User({ number: number });

        const user = await newUser.save();

        return res.status(201).json({
            success: true,
            messege: "User has been created succesfully",
            user
        })


    } catch (error) {
        return res.status(500).json({
            success: false,
            messege: "Something is wrong",
            error
        })
    }
}


export const getTheUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ number: req.body.number });

        return res.status(201).json({
            success: true,
            messege: "User has been found succesfully",
            user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            messege: "Something is wrong",
            error
        })
    }
}