const mongoose = require('mongoose');

const userBookings = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  consultantEmail: {
    type: String
  },
  dnt: {
    date: {
      type: String,
    },
   time:{
      type:String,
    }
  },
  meetingId:{
    type:String,
  },
  conName:{
    type:String,
  },
  expertise:{
    type:String,
  },
  sta:{
    type:String,
  },
  reason:{
    type:String
  },
});

module.exports = mongoose.model('userBookings', userBookings);
