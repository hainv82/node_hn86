# 🚀 Node HN86 - E-commerce API

A powerful and modern e-commerce REST API built with Node.js, Express, and MongoDB.

![Node.js](https://img.shields.io/badge/Node.js-v18.x-green.svg)
![Express](https://img.shields.io/badge/Express-v4.19-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-v8.4-green.svg)
![License](https://img.shields.io/badge/license-ISC-blue.svg)

## 🌟 Features

- 👤 **User Management**
  - Authentication & Authorization
  - JWT-based security
  - Password encryption
  
- 📦 **Product Management**
  - Product CRUD operations
  - Category management
  - Image upload support
  
- 🛒 **Order Processing**
  - Order creation and management
  - Stripe payment integration
  
- 🔥 **Firebase Integration**
  - Cloud storage for files
  - Real-time updates
  
- 📧 **Email Services**
  - Email notifications
  - User verification

## 🛠️ Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **File Upload**: Multer
- **Cloud Storage**: Firebase
- **Payment Processing**: Stripe
- **Email Service**: Nodemailer
- **Development**: Nodemon

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Firebase account
- Stripe account (for payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TrapedBoiz/node_hn86.git
   cd node_hn86
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a .env file in the root directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_key
   FIREBASE_CONFIG=your_firebase_config
   ```

4. **Start the server**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## 📁 Project Structure

```
src/
├── client/         # Client-side code
├── config/         # Configuration files
├── const/          # Constants and enums
├── controllers/    # Request handlers
├── middleware/     # Express middleware
├── models/         # Mongoose models
├── routers/        # Route definitions
└── index.js        # Main application entry
```

## 🔐 API Endpoints

### Authentication
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/:id` - Get product by ID
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Categories
- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category
- `PUT /api/categories/:id` - Update category
- `DELETE /api/categories/:id` - Delete category

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get order by ID

## 🔒 Security

- JWT authentication
- Password hashing using bcrypt
- Protected routes with middleware
- Environment variables for sensitive data

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Hai Nguyen (hainguyen8086)**

- GitHub: [@TrapedBoiz](https://github.com/TrapedBoiz)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/TrapedBoiz/node_hn86/issues).

## ⭐️ Show your support

Give a ⭐️ if this project helped you!
