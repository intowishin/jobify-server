import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// db and authenticate user
import connectDB from './db/connect.js';

// routers
import authRoutes from './routes/authRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js';

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/jobs', jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5005;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        })
    }
    catch (err) {
        console.log(err);
    }
}

start()