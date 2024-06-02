import { StatusRes } from "../const/ResStatus.js";
import { getSimpRes, getSimpResData } from "../const/wrap_response.js";
import { categorys } from "../data.js";
import { CategoryModel } from "../models/schema/category_model.js";
import expressAsyncHandler from "express-async-handler";

const importCategory = expressAsyncHandler(async (req, res) => {
    try {
        await CategoryModel.deleteMany({});
        const createCategory = await CategoryModel.insertMany(categorys);
        res.status(201).send(getSimpResData({
            status: "success",
            message: "import category success",
            data: createCategory,
        }));
    } catch (error) {
        console.error(error);
    }
});


const insertCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { image, name } = req.body;
        const category = new CategoryModel({ name, image });
        const createCategory = await category.save();
        res.status(200).json(createCategory);
    } catch (error) {
        res.status(500).json(getSimpRes({ status: StatusRes.ERROR, message: error.message }));
    }
});

const getCategory = expressAsyncHandler(async (req, res) => {
    try {
        const category = await CategoryModel.find({});
        res.status(200).json(getSimpResData(
            {
                status: StatusRes.SUCCESS,
                data: category,
            }));
    } catch (error) {
        res.status(500).json(getSimpRes({ status: StatusRes.ERROR, message: error.message }));
    }
});

const updateCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const { name, image } = req.body;
        const category = await CategoryModel.findById(id);
        if (category) {
            category.name = name;
            category.image = image;
            const updateCategory = await category.save();
            res.status(200).json(getSimpResData({
                status: StatusRes.SUCCESS,
                message: "update category success",
                data: updateCategory
            }));
        } else {
            res.status(404).json(getSimpRes({ status: StatusRes.ERROR, message: "category not found" }));
        }
    } catch (error) {
        res.status(500).json(getSimpRes({ status: StatusRes.ERROR, message: error.message }));
    }
});

const deleteCategory = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const category = await CategoryModel.findById(id);
        if (category) {
            await category.remove();
            res.status(200).json(getSimpResData({
                status: StatusRes.SUCCESS,
                message: "delete category success",
            }));
        } else {
            res.status(404).json(getSimpRes({ status: StatusRes.ERROR, message: "category not found" }));
        }
    } catch (error) {
        res.status(500).json(getSimpRes({ status: StatusRes.ERROR, message: error.message }));
    }
});

export { importCategory, insertCategory, getCategory, updateCategory, deleteCategory };