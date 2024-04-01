const createHttpError = require('http-errors');
const Store = require('../../models/MerchantSchema');

const createMerchant = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const { storeName, officialEmail, officialPhone, address, products } =
      req.body;

    const productExists = await Store.findOne({ storeName });
    if (productExists) {
      throw createHttpError(400, 'Store Name already exists');
    }
    const merchant = {
      storeName,
      officialEmail,
      officialPhone,
      address,
      owner: id,
      products,
    };
    const product = await Store.create(merchant);

    res.status(200).json({
      message: 'Merchant create Successfully done',
      payload: { product },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createMerchant;
