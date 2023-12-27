const multer = require('multer');

// Define storage for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/image');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// File filter to allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images are allowed.'), false);
  }
};

// Create the Multer instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
