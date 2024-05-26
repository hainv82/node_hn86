import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        salesOffer: {
            status: {
                type: Boolean,
                required: true,

                default: false,
            },
            discount: {
                type: Number,
                required: true,
                default: 0,
            },
        },
        stocck: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

export const ProductModel = mongoose.model("ProductModel", ProductSchema);
