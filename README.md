# Node.js MongoDB Boilerplate

Một boilerplate đơn giản để khởi tạo dự án Node.js với Express và MongoDB sử dụng Mongoose.

## 🚀 Tính năng

- ✅ Express.js server
- ✅ MongoDB connection với Mongoose
- ✅ Environment variables với dotenv
- ✅ ES6 modules support
- ✅ Singleton pattern cho database connection
- ✅ Database debug mode

## 📁 Cấu trúc thư mục

```
boilerplate-nodejs-mongodb/
├── src/
│   ├── index.js          # Entry point của ứng dụng
│   └── database.js       # Database connection configuration
├── package.json
└── README.md
```

## 🛠️ Cài đặt

1. **Clone repository:**
```bash
git clone <repository-url>
cd boilerplate-nodejs-mongodb
```

2. **Cài đặt dependencies:**
```bash
npm install
```

3. **Tạo file .env:**
```bash
# Tạo file .env trong thư mục gốc
touch .env
```

4. **Cấu hình environment variables:**
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-database-name
```

## 🏃‍♂️ Chạy ứng dụng

### Development mode:
```bash
npm start
```

### Hoặc chạy trực tiếp:
```bash
node src/index.js
```

## 📋 Yêu cầu hệ thống

- Node.js (version 14+)
- MongoDB (local hoặc cloud)
- npm hoặc yarn

## 🔧 Cấu hình

### Database Connection
File `src/database.js` sử dụng Singleton pattern để đảm bảo chỉ có một kết nối database duy nhất:

```javascript
import {mongoose} from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/boilerplate-nodejs-mongodb";

class Database {
    instance = null;
    
    constructor() {
        this.connect();
    }
    
    connect(_type_ = 'mongodb') {
        mongoose.set('debug', true);
        mongoose.set('debug', {color: true});
        
        mongoose.connect(uri, {maxPoolSize: 50})
            .then(() => {
                console.log(`connected mongodb success: ${uri}`)
            })
            .catch((err) => console.log(`Error connect`));
    }
    
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const mongoDbInit = Database.getInstance();
export default mongoDbInit;
```

### Server Configuration
File `src/index.js` khởi tạo Express server:

```javascript
import express from "express";
import dotenv from "dotenv";
import connectDB from "./database.js";

dotenv.config();

const app = express();

const mongoConnection = connectDB;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running in ${PORT} port`)
})
```

## 📦 Dependencies

- **express**: ^5.1.0 - Web framework cho Node.js
- **mongoose**: ^8.19.0 - MongoDB object modeling
- **dotenv**: ^17.2.3 - Environment variables loader

## 🔄 Scripts

- `npm start`: Chạy ứng dụng
- `npm test`: Chạy tests (chưa được cấu hình)

## 🚀 Mở rộng

Để mở rộng boilerplate này, bạn có thể:

1. **Thêm routes:**
```javascript
// src/routes/index.js
import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

export default router;
```

2. **Thêm models:**
```javascript
// src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

export default mongoose.model('User', userSchema);
```

3. **Thêm middleware:**
```javascript
// src/middleware/auth.js
export const auth = (req, res, next) => {
    // Authentication logic
    next();
};
```

## 🐛 Troubleshooting

### Lỗi kết nối MongoDB:
- Đảm bảo MongoDB đang chạy
- Kiểm tra connection string trong file .env
- Kiểm tra firewall và network settings

### Lỗi module not found:
- Chạy `npm install` để cài đặt dependencies
- Kiểm tra Node.js version (cần 14+)

## 📝 License

ISC

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Support

Nếu có vấn đề gì, hãy tạo issue trong repository hoặc liên hệ qua email.

---
HELLO WORLD
⭐ Nếu project này hữu ích, hãy star repository nhé!

REBASE
