const mongoose = require('mongoose');

const consultantSchedule = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  dnt: {
    date: {
      type: String,
    },
   time:{
      type:Array,
   }
  },
});

module.exports = mongoose.model('consultantSchedule', consultantSchedule);
