const createHttpError = require('http-errors');
const cloudinary = require('../../config/cloudinary');
const Product = require('../../models/productModel');
const Variant = require('../../models/variantSchema');

const createVariant = async (req, res, next) => {
  try {
    const { price, storage, ram, color, product, size } = req.body;

    const findProduct = await Product.findById(product);
    if (!findProduct) {
      throw createHttpError(400, 'product not fond');
    }

    const variant = { price, storage, ram, color, product, size };

    const image = req.file?.path;
    if (image && image.size > 1024 * 1024 * 2) {
      throw createError(400, 'Image file to large. It must be less than 2 mb');
    };

    if (image) {
      const response = await cloudinary.uploader.upload(image, {
        folder: 'ecommerce/products',
      });
      variant.image = response.secure_url;
    };
    
    const newVariant = await Variant.create(variant);
    findProduct.variants.push(newVariant);
    await findProduct.save();

    res.status(200).json({
      message: 'Variant create Successfully done',
        payload: { newVariant },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createVariant };
