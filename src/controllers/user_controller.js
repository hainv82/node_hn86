import { users } from "../data.js";
import { UserModel } from "../models/user_model.js";
import expressAsyncHandler from "express-async-handler";

//@desc Import all user
//@route POST /api/users/import
//@access Private/Admin
const importUsers = expressAsyncHandler(async (req, res) => {
    await UserModel.deleteMany({});
    const createUser = await UserModel.insertMany(users);
    const response = createUser.map(user => ({ fullName: user.fullName, email: user.email, phone: user.phone, image: user.image, isAdmin: user.isAmin }));
    res.status(201).send(response);
    // res.status(201).send(createUser);
});
// const importUsers = expressAsyncHandler(async (req, res) => {
//     const data = req.body;
//     const users = await UserModel.insertMany(data);
//     res.status(200).json(users);
// });

export { importUsers };

