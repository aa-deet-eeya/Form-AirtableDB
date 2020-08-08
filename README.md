# Form-AirtableDB

This is a basic Node Express Server setup which follows MVC pattern and displays a Form which creates a record to a connected Airtable DB which has similar properties as the given form.

This app uses Nodemailer and Gmail as transport to send Email confirmation.
DO NOT USE THIS CONFIGURATION IN PRODUCTION

## Getting Started

Make an .env file and store the passes as follows :

```
AIRTABLE_API_KEY=<airtable api key>
BASE=<airtable base key>
SERVICE=<Nodemailer transport Service>
SENDER=<transport service sender email>
PASS=<password for the given sender email>

```

Now, to install the dependencies run

```npm install```

Now go ahead and launch the server in your local machine
```npm start```


## Glitch
This project is hosted in Glitch as well :

Live Code : https://glitch.com/edit/#!/airtabledbform
Live View : https://airtabledbform.glitch.me
