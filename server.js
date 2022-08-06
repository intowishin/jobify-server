import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';


app.get('/', (req, res) => {
    throw new Error('Something broke!');
    res.send('Hello World!');
})

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})