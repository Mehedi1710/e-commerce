const express = require('express');
const categoryRouter = require('./routers/categoryRouter');
const userRouter = require('./routers/userRouter');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1', categoryRouter);
app.use('/api/v1', userRouter);


// Client Error handling
app.use((req, res, next) => {
    next(createError(404, 'route not found'));
  });


module.exports = app;