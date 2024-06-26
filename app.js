const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const merchantRouter = require('./routers/merchantRouter');
const createHttpError = require('http-errors');
const productRouter = require('./routers/productRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1', categoryRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', merchantRouter);
app.use('/api/v1', productRouter);

// Client Error handling
app.use((req, res, next) => {
  next(createHttpError(404, 'route not found'));
});

module.exports = app;
