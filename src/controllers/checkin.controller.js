const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { checkinService } = require('../services');

const createCheckin = catchAsync(async (req, res) => {
  const checkin = await checkinService.createCheckin(req.body);
  res.status(httpStatus.CREATED).send(checkin);
});

module.exports = {
  createCheckin,
};
