import expressAsyncHandler from "express-async-handler";
import { products } from "../data.js";
import { ProductModel } from "../models/schema/product_model.js";
import { getSimpResData } from "../const/wrap_response.js";
import { StatusRes } from "../const/ResStatus.js";

const importProduct = expressAsyncHandler(async (req, res) => {
    try {
        await ProductModel.deleteMany({});
        const createProduct = await ProductModel.insertMany(products);
        res.status(201).send(getSimpResData({ data: createProduct }));
    } catch (error) {
        console.error(error);
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const insertProduct = expressAsyncHandler(async (req, res) => {
    try {
        const { title, name, image, brand, category, tags, salesOffer, description, price, countInStock } = req.body;
        const product = new ProductModel({ title, name, image, brand, category, tags, salesOffer, description, price, countInStock });
        const createProduct = await product.save();
        res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: createProduct }));
    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const getProduct = expressAsyncHandler(async (req, res) => {
    try {
        const product = await ProductModel.find({});
        res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: product }));
    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const updateProduct = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const { title, name, image, brand, category, description, price, stocck } = req.body;
        const product = await ProductModel.findById(id);
        if (product) {
            product.title = title || product.title;
            product.name = name || product.name;
            product.image = image || product.image;
            product.brand = brand || product.brand;
            product.category = category || product.category;
            product.description = description || product.description;
            product.price = price || product.price;
            product.stocck = stocck || product.stocck;
            const updateProduct = await product.save();
            res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: updateProduct }));
        } else {
            res.status(404).json(getSimpResData({ status: StatusRes.ERROR, message: "Product not found" }));
        }
    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const product = await ProductModel.findByIdAndDelete(id);
        res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, message: "delete product success", data: product }))
    } catch (e) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: e.message }));
    }
});



export { importProduct, insertProduct, getProduct, updateProduct, deleteProduct }