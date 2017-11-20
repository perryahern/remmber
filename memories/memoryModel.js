const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  shareStatus: {
    type: String,
    required: true,
  },
  memoryDate: {
    type: Date,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Memory', MemorySchema);