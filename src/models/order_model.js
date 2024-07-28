import mongoose from "mongoose";
import PaymentStatusEnum from "./enum_model/pament_enum";
import DeliveryStatusEnum from "./enum_model/delivery_enum";
const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    orderItems: [
        {
            size: {
                type: String,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProductModel",
                required: true,
            },
        }
    ],
    shippingAddress: {
        fullName: {
            type: String,
        },
        address: {
            type: String,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
        },
        location: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        shippingMethod: {
            type: String,
        },
        shippingCost: {
            type: Number,
        },
    },
    payments: {
        paymentMethod: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            default: PaymentStatusEnum.PENDING,
        },
        paymentDate: {
            type: Date,
        },
    },
    delivery: {
        status: {
            type: String,
            required: true,
            default:DeliveryStatusEnum.PENDING,
        },
        deliveryDate: {
            type: Date,
        },
        deliveryMethod: {
            type: String,
        },
    },
},
    { timestamps: true, });

export const OrderModel = mongoose.model('OrderModel', OrderSchema);