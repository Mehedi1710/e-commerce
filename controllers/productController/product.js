const Product = require('../../models/productModel');
const cloudinary = require('../../config/cloudinary');
const createHttpError = require('http-errors');
const Store = require('../../models/MerchantSchema');
var QRCode = require('qrcode');

const createProduct = async (req, res, next) => {
  try {
    const { name, description, store } = req.body;
    const findStore = await Store.findById({_id:store});
    if(!findStore) {
      throw createHttpError(400, 'Store does not exists with this id');
    }

    const product = { name, description, store };

    const productExists = await Product.findOne({ name });
    if (productExists) {
      throw createHttpError(400, 'Product already exists');
    }

    const pro = await Product.create(product);

    findStore.products.push(pro);
    await findStore.save();

    res.status(200).json({
      message: 'Product create successfully done',
      payload: { pro },
    });
  } catch (error) {
    next(error);
  }
};

const findProduct = async(req, res, next) => {
  try {
    const product = await Product.find({}).populate('variants');
    res.send(product);
  } catch (error) {
    next(error);
  }
}

const deleteProduct = async(req, res, next) => {
  try {
    const {id} = req.body;
    const product = await Product.findById({_id: id});
    if(!product) {
      throw createHttpError(404, 'Product not found');
    }
    await Product.findByIdAndDelete({_id: id});
    res.send(product);
  } catch (error) {
    next(error);
  }
}

module.exports = {createProduct, findProduct, deleteProduct};
