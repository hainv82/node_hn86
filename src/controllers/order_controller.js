import expressAsyncHandler from "express-async-handler";
import { orders } from "../data.js";
import { OrderModel } from "../models/schema/order_model.js";
import { getSimpResData } from "../const/wrap_response.js";
import { StatusRes } from "../const/ResStatus.js";
import { toListIfOnly } from "../const/tolist_if_only.js"

const importOrder = expressAsyncHandler(async (req, res) => {
    try {
        await OrderModel.deleteMany({});
        const createOrder = await OrderModel.insertMany(orders);
        res.status(201).send(getSimpResData({ status: StatusRes.SUCCESS, data: createOrder }));
    } catch (error) {
        console.error(error);
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});
const insertOrder = expressAsyncHandler(async (req, res) => {
    try {
        const { user, orderItems, shippingAddress, payments, delivery } = req.body;
        const order = new OrderModel({ user, orderItems, shippingAddress, payments, delivery });
        const createOrder = await order.save();
        res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: createOrder }));
    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const getOrder = expressAsyncHandler(async (req, res) => {
    try {
        const order = await OrderModel.find({ user: req.user._id });
        // const order = await OrderModel.find({});

        res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: toListIfOnly({ data: order }) }));

        // if (!Array.isArray(order)) {
        //     res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: [order] }));
        // } else {
        //     res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: order }));
        // }

    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const updateOrder = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const { user, orderItems, shippingAddress, payments, delivery } = req.body;
        const order = await OrderModel.findById(id);
        if (order) {
            order.user = user || order.user;
            order.orderItems = orderItems || order.orderItems;
            order.shippingAddress = shippingAddress || order.shippingAddress;
            order.payments = payments || order.payments;
            order.delivery = delivery || order.delivery;
            const updateOrder = await order.save();
            res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, data: updateOrder }));
        } else {
            res.status(404).json(getSimpResData({ status: StatusRes.ERROR, message: "Order not found" }));
        }
    } catch (error) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }
});

const deleteOrder = expressAsyncHandler(async (req, res) => {
    try {
        const { id } = req.query;
        const order = await OrderModel.findByIdAndDelete(id);
        if (order) {
            res.status(200).json(getSimpResData({ status: StatusRes.SUCCESS, message: "Order deleted" }));
        } else {
            res.status(404).json(getSimpResData({ status: StatusRes.ERROR, message: "Order not found" }));
        }
        // const order
    } catch (e) {
        res.status(500).json(getSimpResData({ status: StatusRes.ERROR, message: error.message }));
    }

});

export { importOrder, insertOrder, getOrder, updateOrder };