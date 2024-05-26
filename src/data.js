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