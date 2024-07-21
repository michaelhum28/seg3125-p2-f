// Confirm.js
import React from 'react';

const Confirm = ({ language }) => {
  const text = {
    en: {
      title: 'Thank you for your purchase!',
      message: 'Your order has been received and is being processed.'
    },
    fr: {
      title: 'Merci pour votre achat!',
      message: 'Votre commande a été reçue et est en cours de traitement.'
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{text[language].title}</h1>
      <p>{text[language].message}</p>
    </div>
  );
};

export default Confirm;
