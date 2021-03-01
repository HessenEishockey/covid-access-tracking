const QRCode = require('qrcode');
const logger = require('../config/logger');

const generateQR = async (text) => {
  try {
    return await QRCode.toDataURL(text);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = generateQR;
