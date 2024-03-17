const mongoose = require('mongoose');

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
    },
    description: {
      type: String,
      required: [true, 'Product Description is required'],
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
    category: {
      type: mongoose.Types.ObjectId,
      ref: "CategoryList"
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model('SubCategoryList', subCategorySchema);

module.exports = SubCategory;
