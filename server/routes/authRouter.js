const express = require('express');
const ConController = require('../controllers/con-auth-controller').default;
const router = express.Router();
const bcrypt = require('bcrypt');
const fsPromises = require('fs/promises');
const conSchema = require('../models/consultant-registration-schema.js');
const cors = require('cors');
require('../db/conn.js');
// router.use(express.urlencoded({ extended: true }));
router.use(express.json());
router.use(cors());

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../frontend/public/Consultantdetails');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/conSubmit',
  upload.fields([{ name: 'photo' }, { name: 'license' }, { name: 'degree' }]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        password,
        expertise,
        experience,
        address,
        gender,
      } = req.body;
      let data = await conSchema.find({email});
      console.log(data);
      if(data.length==0)
      {
        const hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass);
        const license = req.files['license'][0].filename;
        const photo = req.files['photo'][0].filename;
        const degree = req.files['degree'][0].filename;
        await conSchema.create({
          name,
          email,
          phone,
          password: hashedPass,
          degree,
          license,
          expertise,
          experience,
          address,
          gender,
          photo,
        });
        res.send('Data Submitted successfully');
      }
      else
      {
        res.send("consultant already exists")
      }
    } catch (e) {
      console.log(e);
    }
  }
);

router.get('/conDetails', async (req, res) => {
  let data = await conSchema.find();
  res.send(data);
});

router.get('/getConData/:email', async (req, res) => {
  let {email} = req.params;
  let data = await conSchema.findOne({email});
  res.send(data);
});


router.patch('/conVerfication', async (req, res) => {
  let { email } = req.body;
  let data = await conSchema.findOne({ email: email });
  await conSchema.findByIdAndUpdate(
    { _id: data._id },
    { $set: { verified: true } }
  );
  res.send('Accepted');
});

router.patch('/reviews', async (req, res) => {
  let {reviews, ConsultantEmail} = req.body;
  let data = await conSchema.findOne({ email: ConsultantEmail });
  if(data)
  {
    data.reviews = [...data.reviews,reviews];
    await data.save();
    res.send('review added');
  }
  else
  {
    res.send('please enter vaild consultant email');
  }
});

router.delete('/consDelete/:email', async (req, res) => {
  let email = req.params.email;
  let data = await conSchema.findOne({ email: email });
  await fsPromises.unlink(`../frontend/public/consultantdetails/${data.photo}`);
  await fsPromises.unlink(`../frontend/public/consultantdetails/${data.degree}`);
  await fsPromises.unlink(`../frontend/public/consultantdetails/${data.license}`);
  await conSchema.findByIdAndDelete({ _id: data._id });
  res.send('Deleted');
});

module.exports = router;
