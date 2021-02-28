const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const checkinSchema = mongoose.Schema(
  {
    from: {
      type: Date,
      required: true,
      default: Date.now,
    },
    until: {
      type: Date,
      required: true,
      default: Date.now,
    },
    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

checkinSchema.plugin(toJSON);
checkinSchema.plugin(paginate);

const Checkin = mongoose.model('Checkin', checkinSchema);

module.exports = Checkin;
