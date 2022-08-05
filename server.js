import express from 'express';
const app = express();

// middleware
import notFoundMiddleware from './middleware/not-found.js';


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use(notFoundMiddleware);

const port = process.env.PORT || 5005;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})