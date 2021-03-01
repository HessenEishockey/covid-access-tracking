const httpStatus = require('http-status');
const { Checkin } = require('../models');
const { userService } = require('.');
const ApiError = require('../utils/ApiError');

/**
 * Create a checkin
 * @param {Object} checkinBody
 * @returns {Promise<Checkin>}
 */
const createCheckin = async (checkinBody) => {
  const user = await userService.getUserById(checkinBody.person);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const checkinData = checkinBody;
  checkinData.person = user.id;
  const checkin = await Checkin.create(checkinData);
  return checkin;
};

module.exports = {
  createCheckin,
};
