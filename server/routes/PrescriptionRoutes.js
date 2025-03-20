const express = require('express');
const router = express.Router();
const prescriptionSchema= require("../models/Prescription-schema.js");
const cors = require("cors");
router.use(express.json())
router.use(cors())

router.post("/addPrescription", async (req,res) => {
    let {name,email,consultantName,consultantEmail,date,time,prescription,advice} = req.body
    await prescriptionSchema.create({ name,email,consultantName,consultantEmail,dnt:{date,time},prescription,advice});
    res.send("prescription added");
})

router.get('/getPrescription/:email', async (req, res) => {
    const { email } = req.params;

    try {

        let data = await prescriptionSchema.find({ email });

        res.send(data);
    } catch (error) {
        console.error("Error fetching prescriptions:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get('/getConPrescription/:email', async (req, res) => {
    const { email } = req.params;

    try {
        let data = await prescriptionSchema.find({ consultantEmail: email });
        res.send(data);
    } catch (error) {
        console.error("Error fetching prescriptions:", error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;