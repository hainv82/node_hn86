import Jwt from "jsonwebtoken";
import { getSimpRes } from "../const/wrap_response.js";
import { UserModel } from "../models/user_model.js";
// import UserModel from "../models/user_model.js";


// @desc Auth middleware & get token 
const generateToken = (id) => {
    return Jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "730d" });
}
//protect route
const protect = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = Jwt.verify(token, process.env.JWT_SECRET);
            req.user = await UserModel.findById(decoded.id).select("-password");
            req.bufferOnProtect = await UserModel.findById(decoded.id).select("-password");
            next();
            // var user = await UserModel.findById(decoded.id);
            // if (user) {
            //     req.user = await UserModel.findById(decoded.id).select("-password");
            //     console.log("req.user", req.user);
            //     console.log("id from middleware", req.user.id);
            //     next();
            // } else {
            //     res.status(401).json(getSimpRes({ status: "error", message: "Not authorized, token invalid" }));
            // }

        } catch (error) {
            console.error(error);
            res.status(401).json(getSimpRes({ status: "error", message: "Not authorized, token failed" }));
        }
    }
    if (!token) {
        res.status(401).json(getSimpRes({ status: "error", message: "Not authorized, no token" }));
        // res.status(401).json({ message: "Not authorized, no token" });
    }
}
export { generateToken, protect }