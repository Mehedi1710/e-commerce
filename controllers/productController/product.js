const Product = require('../../models/productModel');
const cloudinary = require('../../config/cloudinary');

const createProduct = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const product = { name, description };
    const image = req.file?.path;
    if (image && image.size > 1024 * 1024 * 2) {
      throw createError(400, 'Image file to large. It must be less than 2 mb');
    }

    if (image) {
      const response = await cloudinary.uploader.upload(image, {
        folder: 'my/folder',
      });
      product.image = response.secure_url;
    }
    const pro = await Product.create(product);
    res.status(200).json({
      message: 'Product create successfully done',
      payload: { pro },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createProduct;
