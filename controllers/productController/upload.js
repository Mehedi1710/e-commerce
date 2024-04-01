const multer = require('multer');
const MAX_FILE_SIZE = '2097152';
const ALLOWED_FILE_TYPES = ['image/jpg', 'image/jpeg', 'image/png'];

const userStorage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, UPLOAD_IMAGE);
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const productStorage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, UPLOAD_PRODUCT_IMG_DIRECTORY);
  // },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/')) {
    cb(new Error('Only image files are allowed'), false);
  }

  if (file.size < MAX_FILE_SIZE) {
    cb(new Error('File size exceeds the maximum limit'), false);
  }

  if (!ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    cb(createError(400, 'file type not allowed'), false);
  }
  cb(null, true);
};

const uploadUserImage = multer({
  storage: userStorage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});

module.exports = { uploadUserImage };
