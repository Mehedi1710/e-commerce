const app = require('./app');
const dbConnection = require('./config/dbConnection');

require('dotenv').config();
const port = process.env.PORT || 3008;

app.listen(port, () => {
  console.log(`Server running at port: ${port}. Alex ross`);
  dbConnection();
});
