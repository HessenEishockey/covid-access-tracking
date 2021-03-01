const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: 'default',
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

groupSchema.plugin(toJSON);
groupSchema.plugin(paginate);

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
