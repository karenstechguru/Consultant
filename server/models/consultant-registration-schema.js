const mongoose = require('mongoose');

const consultantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  password: {
    type: String,
  },
  degree: {
    type: String,
  },
  license: {
    type: String,
  },
  expertise: {
    type: String,
  },
  experience: {
    type: Number,
  },
  address: {
    type: String,
  },
  gender: {
    type: String,
  },
  photo: {
    type: String,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  reviews:[
    {
      userName: {
        type : String,
      },
      userEmail: {
        type : String
      },
      date : {
        type : String,
      },
      time : {
        type : String,
      },
      rating : {
        type : Number,
      },
      review : {
        type : String,
      }
    }
  ]
});

const consultant = mongoose.model('consultant', consultantSchema);
module.exports = consultant;
