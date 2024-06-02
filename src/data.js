// import bcrypt from "bcryptjs/dist/bcrypt";
import bcrypt from "bcryptjs";
export const users = [
    {
        fullName: "John Doe",
        email: "hainguyen1@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        phone: "123456789",
    },
    {
        fullName: "Zputin",
        email: "hainguyen2@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        phone: "123456789",
    }
]

export const categorys = [
    {
        name: "Category 1",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 2",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 3",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 4",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 5",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 6",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 7",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 8",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 9",
        image: "https://via.placeholder.com/150",
    },
    {
        name: "Category 10",
        image: "https://via.placeholder.com/150",
    }

]

export const products = [
    {
        title: "Product 1",
        price: 100,
        description: "Description 1",
        image: "https://via.placeholder.com/150",
        category: "665bedf4125862d1532ae117",
        tags: ["tag 1", "tag 2", "tag 3"],
        salesOffer: {
            status: true,
            discount: 10,
        },
        stocck: 100,
    },
    {
        title: "Product 2",
        price: 200,
        description: "Description 2",
        image: "https://via.placeholder.com/150",
        category: "665bedf4125862d1532ae117",
        tags: ["tag 1", "tag 2", "tag 3"],
        salesOffer: {
            status: true,
            discount: 20,
        },
        stocck: 200,
    },
    {
        title: "Product 3",
        price: 300,
        description: "Description 3",
        image: "https://via.placeholder.com/150",
        category: "665bedf4125862d1532ae118",
        tags: ["tag 1", "tag 2", "tag 3"],
        salesOffer: {
            status: true,
            discount: 30,
        },
        stocck: 300,
    },
    {
        title: "Product 4",
        price: 400,
        description: "Description 4",
        image: "https://via.placeholder.com/150",
        category: "665bedf4125862d1532ae118",
        tags: ["tag 1", "tag 2", "tag 3"],
        salesOffer: {
            status: true,
            discount: 40,
        },
        stocck: 400,
    },
    {
        title: "Product 5",
        price: 500,
        description: "Description 5",
        image: "https://via.placeholder.com/150",
        category: "665bedf4125862d1532ae119",
        tags: ["tag 1", "tag 2", "tag 3"],
        salesOffer: {
            status: true,
            discount: 50,
        },
        stocck: 500,
    },
]

export const orders = [
    {
        user: "6651adcdf298379ec9269c50",
        orderItems: [
            {
                size: "M",
                color: "Red",
                name: "Product 1",
                quantity: 1,
                image: "https://via.placeholder.com/150",
                price: 100,
                product: "665bfc1d438d05c917b1bd20",
            },
            {
                size: "L",
                color: "Blue",
                name: "Product 2",
                quantity: 1,
                image: "https://via.placeholder.com/150",
                price: 100,
                product: "665bfc1d438d05c917b1bd21",
            }
        ],
        shippingAddress: {
            fullName: "John Doe",
            address: "123 street",
            email: "hainguyen@gmail.com",
            location: "HCM",
            phoneNumber: "123456789",
            shippingMethod: "Standard",
            shipingCost: 10,
        },
        payments: {
            paymentMethod: "Paypal",
            status: "Paid",
            paymentDate: new Date(),

        }, delivery: {
            status: "Delivered",
            deliveryDate: new Date(),
            deliveryMethod: "Standard",
        }

    },
    {
        user: "6652f5766ed37eb533f0f28a",
        orderItems: [
            {
                size: "M",
                color: "Red",
                name: "Product 1",
                quantity: 1,
                image: "https://via.placeholder.com/150",
                price: 100,
                product: "665bfc1d438d05c917b1bd20",
            },
            {
                size: "L",
                color: "Blue",
                name: "Product 2",
                quantity: 1,
                image: "https://via.placeholder.com/150",
                price: 100,
                product: "665bfc1d438d05c917b1bd21",
            }
        ],
        shippingAddress: {
            fullName: "John Doe",
            address: "123 street",
            email: "hainguyen@gmail.com",
            location: "HCM",
            phoneNumber: "123456789",
            shippingMethod: "Standard",
            shipingCost: 10,
        },
        payments: {
            paymentMethod: "Paypal",
            status: "Paid",
            paymentDate: new Date(),

        }, delivery: {
            status: "Delivered",
            deliveryDate: new Date(),
            deliveryMethod: "Standard",
        }

    },

]