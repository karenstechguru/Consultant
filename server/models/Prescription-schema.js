const mongoose = require('mongoose');

const prescription = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  consultantName: {
    type: String,
  },
  consultantEmail: {
    type: String,
  },
  dnt: {
    date: {
      type: String,
    },
   time:{
      type: String,
    }
  },
  prescription: [
        {
            medicine: {
                type: String,
            },
            meal: {
                type: String,
            },
            times: {
                type: Array,
            },
            days: {
                type: String,
            },
            dosage: {
                type: String,
            },
            notes: {
                type: String,
            }
        }
    ],
  advice: {
    type: String,
  }
});

module.exports = mongoose.model('prescription', prescription);
