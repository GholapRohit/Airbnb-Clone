const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "airbnb-clone_images", // The name of the folder in cloudinary
    allowedFormat: ["png", "jpg", "jpeg"], // Allowed formats for images
  },
});

module.exports = {
  cloudinary,
  storage,
};
