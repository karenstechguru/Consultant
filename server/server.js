const express = require('express');
const routes = require("./routes/authRouter.js");
const AuthRouter = require('./routes/user-AuthRouter.js');
const conAuth = require('./routes/con-Routes.js');
const schedule = require("./routes/Schedule.js");
const userBookings = require('./routes/userBookingRoutes.js');
const prescription = require('./routes/PrescriptionRoutes.js');
require("./db/conn.js");
var cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5137; // Use environment variable or default to 5137

// Middleware
var corsOptions = {
    origin: 'http://127.0.0.1:5137',
    methods: "GET , POST, DELETE, PUT, PATCH, HEAD",
    credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: '*', // Replace '*' with specific origins if needed
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Handle preflight requests
app.options('*', cors());

// Routes
app.use('/auth', AuthRouter);
app.use('/conauth', conAuth);
app.use('/Booking', userBookings);
app.use('/pres', prescription);
app.use(schedule);

// Start the server
app.listen(PORT, (e) => {
    if (!e) {
        console.log(`Server running on port ${PORT}`);
    } else {
        console.log(e);
    }
});


