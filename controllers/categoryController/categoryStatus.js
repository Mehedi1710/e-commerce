const createHttpError = require('http-errors');
const Category = require('../../models/categoryModel');

const categoryStatus = async (req, res, next) => {
  try {
    const { name, status } = req.body;

    const category = await Category.findOne({name});
    if(!category) {
        throw createHttpError(404, 'category not found');
    }

    if (status == 'waiting' || status == 'rejected') {
      const user = await Category.findOneAndUpdate(
        { name },
        { $set: { isActive: false, status: status}},
        {new: true}
      );
      res.status(200).json({
        message: "Category update successfully done",
        payload: {user}
      });
    } else if(status == "approved") {
        const user = await Category.findOneAndUpdate(
            { name },
            { $set: { isActive: true, status: status}},
            {new: true}
          );
          res.status(200).json({
            message: "Category update successfully done",
            payload: {user}
          });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = categoryStatus;
