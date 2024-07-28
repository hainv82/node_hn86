import expressAsyncHandler from "express-async-handler";
import { getSimpResData } from "../const/wrap_response.js";
import { StatusRes } from "../const/ResStatus.js";
// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });

const uploadImage = expressAsyncHandler(async (req, res) => {
    try {
        // console.log(req.file);

        // res.status(200).send('Upload Success2: ' + res.json(req.file));
        res.status(200).json(getSimpResData({
            status: StatusRes.SUCCESS,
            message: "Upload Success",
            data: req.file
        }));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
export { uploadImage };