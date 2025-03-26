const express = require('express')
const cors = require('cors')
const connectDB = require("./db/db");
require('dotenv').config()
const authRoutes = require('./routes/auth.routes')
const urlRoutes = require('./routes/url.routes')
// const protectedRoutes = require('./routes/protected.routes')
const usersRoutes = require('./routes/users.routes')

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
    origin: 'http://localhost:5173, ',
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  
    credentials: true  

};

app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
app.use(express.json())

// Database Connection
connectDB();

// Routes
app.use("/api/authRoutes", authRoutes)
app.use("/", urlRoutes)
app.use("/api/users", usersRoutes)
// app.use("/", protectedRoutes)

app.listen(PORT, (req, res) =>{
    console.log(`Server running on ${PORT}`)

})

