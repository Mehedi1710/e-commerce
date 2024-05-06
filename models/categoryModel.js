const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
    },
    description: {
      type: String,
      required: [true, 'Category Description is required'],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: 'waiting',
      enum: ['waiting', 'rejected', 'approved']
    },
    subCategory: [{
        type: mongoose.Types.ObjectId,
        ref: "SubCategoryList"
    }],
  },
  { timestamps: true }
);

const Category = mongoose.model('CategoryList', categorySchema);

module.exports = Category;
