// import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// import { NextRouter } from "next/router";
const jwt = require("jsonwebtoken");

const jwtSecretKey = process.env.JSON_SECRET_KEY;

export const authMiddleWare = async (req, res, next) => {
    console.log("hello")
    try {
        let token = req.headers["authorization"];
        console.log('token:', token)
        if (!token) {
            return {
                message: "You are not Authorized Person",
                desc: "",
                flag: false,
                data: [],
            };
        } else {
            let verifyToken = await jwt.decode(token, jwtSecretKey);
            if (verifyToken) {
                console.log('verifyToken:', verifyToken)
                req.userId = verifyToken._id;
                next();
            } else {
                return res.status(400).send({
                    data: [],
                    message: "Unauthorized Person",
                    flag: false,
                    desc: "",
                });
            }
        }
    } catch (e) {
        return {
            message: "You are not Authorized",
            desc: "",
            flag: true,
            data: [],
        };
    }
};
