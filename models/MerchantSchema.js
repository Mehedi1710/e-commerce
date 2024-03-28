const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  storeName: {
    type: String,
    required: true,
  },
  officialEmail: {
    type: String,
    required: true,
  },
  officialPhone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserList"
  },
  products: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
    },
  ],
});
