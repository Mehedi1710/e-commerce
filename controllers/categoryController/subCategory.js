const createHttpError = require('http-errors');
const SubCategory = require('../../models/subCategorySchema');
const Category = require('../../models/categoryModel');

const subCategory = async (req, res, next) => {
  try {
    const { name, description, id } = req.body;

    // find category
    const findCategory = await Category.findById({ _id: id });
    if (!findCategory) {
      throw createHttpError(404, 'Category not found');
    };

    // find subCategory
    const categoryName = await SubCategory.findOne({ name });
    if (categoryName) {
      throw createHttpError(400, 'SubCategory name is already exists');
    };

    const product = { name, description };

    // create subCategory
    const categoryList = await SubCategory.create(product);

    // Push the subcategory ObjectId into the subCategories array
    findCategory.subCategory.push(categoryList);

    // Save the updated category
    await findCategory.save();
    console.log('Subcategory added to category successfully');

    res.status(200).json({
      message: 'SubCategory create Successfully done',
        payload: { categoryList },
    });
  } catch (error) {
    next(error);
  }
};


const getSubCategory = async (req, res, next) => {
  try {
    const subCategory = await SubCategory.find({});
    res.status(200).json({
      message: 'Category get Successfully Done!',
      payload: { subCategory },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {subCategory, getSubCategory};
