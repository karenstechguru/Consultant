const consultantSchema = require('../models/consultant-registration-schema');
const express = require('express');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const conLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isConsultant = await consultantSchema.findOne({ email });

    if (!isConsultant) {
      res.status(401).json({ msg: 'consultant does not exist' });
    } else {
      const isPassCorrect = await bcrypt.compare(password, isConsultant.password);
      console.log(isPassCorrect);

      if (!isPassCorrect) {
        res.send('Invalid Credentials');
      } else {
        const token = jwt.sign(
          {
            email
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: '1d',
          }
        );

        res.status(200).json({
          msg: 'Consultant Logged In Successfully',
          token,
          email: email,
          name: isConsultant.name,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { conLogin };
