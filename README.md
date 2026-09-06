# Chadiz POS System

A comprehensive Point of Sale (POS) system for Chadiz Pizza and Restaurant.

## Features

- **Menu Management**: Pizza, Main Courses, Pasta, Coffee, Beverages
- **Order Processing**: Add items, customizations, and add-ons
- **Payment Processing**: Support for multiple payment methods
- **Order Tracking**: Real-time order status updates
- **Receipt Generation**: Print-ready receipts
- **Sales Reports**: Daily and monthly sales analytics

## Project Structure

```
chadiz-pos-system/
├── data/
│   └── products.js          # Product catalog
├── models/
│   └── Order.js             # Order model and logic
├── routes/
│   ├── products.js          # Product routes
│   ├── orders.js            # Order routes
│   └── payments.js          # Payment routes
├── public/
│   ├── index.html           # Main POS interface
│   ├── css/
│   │   └── style.css        # Styling
│   └── js/
│       └── app.js           # Frontend logic
├── server.js                # Main server file
├── package.json             # Dependencies
└── README.md                # This file
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/makikram/chadiz-pos-system.git
cd chadiz-pos-system
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Start the server
```bash
npm start
```

5. Access the POS system at `http://localhost:5000`

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:category` - Get products by category

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderId` - Get order details
- `PUT /api/orders/:orderId` - Update order

### Payments
- `POST /api/orders/:orderId/payment` - Process payment

## Product Categories

- **pizza** - Pizza varieties with sizes
- **mainCourse** - Main course dishes
- **pasta** - Pasta dishes
- **coffee** - Coffee and beverages
- **beverages** - Drinks
- **addOns** - Pizza add-ons
- **studentMeal** - Student meal packages
- **sides** - Side dishes

## Payment Methods

- Cash
- Debit Card
- Credit Card
- Online Payment

## License

MIT License

## Support

Contact: 0956-911-7730
