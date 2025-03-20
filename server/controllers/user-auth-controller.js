const User = require('../models/user-registration-schema');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
  try {
    const { userName, email, phone, password } = req.body;
    if (!password) {
      throw new Error('Password is required');
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const userData = await User.findOne({ email });

    if (!userData) {
      await User.create({
        userName,
        email,
        phone,
        password: hashedPassword,
      });

      const token = jwt.sign(
        {
          userId: this._id,
          userName: userName,
          email: email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1d',
        }
      );

      const response = {
        msg: 'USER ADDED',
        token,
      };

      res.status(200).json(response);
    } else {
      res.status(400).json('USER ALREADY Exists !');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const userLogin = async (req, res) => {
  let { email, password } = req.body;
  const isUserExists = await User.findOne({ email });

  if (!isUserExists) {
    console.log('INvalid');
    return res.status(401).json({ msg: 'INvalid Credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, isUserExists.password);
  if (!isPasswordValid) {
    console.log('Incorrect Pas');
    res.send("Incorrect pass")
  }else {
    const token = jwt.sign(
      {
        email,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1d',
      }
    );

    res.status(200).json({
      msg: 'User Logged In Successfully',
      token,
      email:email,
      name:isUserExists.userName,
    });
  }

};

module.exports = { userRegister, userLogin };
