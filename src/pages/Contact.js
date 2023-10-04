import React, { useState } from 'react';
import Header from '../components/Header';
import url from '../img/contact.jpg';
import EmailHandler from '../components/EmailHandler';


const Contact = () => {
    const [email, setEmail] = useState('');
    const [demande, setDemande] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, demande })
        });
  
        if (response.ok) {
          console.log('Courriel envoyé avec succès');
          // Réinitialisez les champs du formulaire après l'envoi réussi
        //   setEmail('');
        //   setDemande('');
        } else {
          console.error('Erreur lors de l\'envoi du courriel');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du courriel', error);
      }
    };
  
    return (
        <>
        <div>
            <Header title="Contact" description="Malgré notre FAQ, vous avez encore des questions ? Envoyez-nous un petit message" url={url} />
        </div>
       <div className='container'>
        <div className="App">
            <EmailHandler/>
          </div>
       </div>
        
    </>
    );
};

export default Contact;