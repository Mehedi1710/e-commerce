const express = require('express');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');
const merchantRouter = require('./routers/merchantRouter');
const createHttpError = require('http-errors');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1', categoryRouter);
app.use('/api/v1', userRouter);
app.use('/api/v1', merchantRouter);


// Client Error handling
app.use((req, res, next) => {
    next(createHttpError(404, 'route not found'));
  });


module.exports = app;