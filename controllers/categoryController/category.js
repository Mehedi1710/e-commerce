const createHttpError = require('http-errors');
const Category = require('../../models/categoryModel');

const category = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const categoryName = await Category.findOne({ name });
    if (categoryName) {
      throw createHttpError(400, 'Category name is already exists');
    }
    const product = { name, description };

    const category = await Category.create(product);

    res.status(200).json({
      message: 'Category create Successfully done',
      payload: { category },
    });
  } catch (error) {
    next(error);
  }
};

const getCategory = async (req, res, next) => {
  try {
    const category = await Category.find({}).populate("subCategory");
    res.status(200).json({
      message: 'Category get Successfully Done!',
      payload: { category },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { category, getCategory };
