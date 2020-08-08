require('dotenv').config()
const nodemailer = require('nodemailer')
const express = require('express')
const router = express.Router()
const Airtable = require('airtable');

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_API_KEY
});



exports.createRecord = (req, res, next) => {
  const base = Airtable.base(process.env.BASE)
  base('trips').create([
    {
      "fields": {
        "Name": req.body.name,
        "Country": req.body.country,
        "StartDate": req.body.startDate,
        "UserEmail": req.body.email,
        "AssignedPlan": req.body.plan,
        "PlanAssignedDate": req.body.planDate,
        "UserName": req.body.username
      }
    }], (err, records) => {
      if (err) {
        console.error(err);
        res.json(err)
        return;
      }


      const mailOprions = {
        from: process.env.SENDER,
        to: req.body.email,
        subject: 'Form Successfully submitted',
        text: `Thank you ${req.body.name}.
        Your Response is submitted.
        Thank you`,
      }


      const transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
          user: process.env.SENDER,
          pass: process.env.PASS,
        },
      })

      console.log(process.env.SENDER, process.env.PASS)

      transporter.sendMail(mailOprions, (error,response)=>{
        if(error) {
          res.json(error)
        } else {
          res.json({
            success : true ,
            response : "Thank you for submitting your response"
          })
        }
      })

    });
}