const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { email, demande } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'votre_email@gmail.com',
      pass: 'votre_mot_de_passe'
    }
  });

  const mailOptions = {
    from: 'votre_email@gmail.com',
    to: 'destinataire@example.com',
    subject: 'Nouvelle demande de contact',
    text: `Email: ${email}\nDemande: ${demande}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Erreur lors de l\'envoi du courriel');
    } else {
      console.log('Email envoyé: ' + info.response);
      res.status(200).send('Courriel envoyé avec succès');
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur d'API en cours d'exécution sur le port ${PORT}`);
});
