# ECommerce API

## Structure

    ecommerce-api-express
    ├── src/
    ├── app.ts          # Main app entry
    ├── server.ts       # Server setup
    ├── config/         # Configuration files
    ├── constants/      # Constant values
    ├── controllers/    # Route controllers
    ├── dtos/           # Data Transfer Objects
    ├── interfaces/     # TypeScript interfaces
    ├── middlewares/    # Custom middlewares
    ├── models/         # Mongoose models
    ├── routes/         # API routes
    ├── services/       # Business logic
    ├── utils/          # Utility functions
    ├── validations/    # Validation schemas
    └── cache/          # Redis caching setup
    ├── package.json    # NPM dependencies and scripts
    ├── tsconfig.json   # TypeScript configuration
    └── README.md       # Project documentation

## Getting Started

### Installation

1. Clone the repository

```bash
git clone https://github.com/DevCoderPS/ecommerce-api-express.git
cd ecommerce-api-express
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables (create a `.env` file)

```env
#APP
PORT=8000
```

4. Start the application

```bash
# Development
npm run dev
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
