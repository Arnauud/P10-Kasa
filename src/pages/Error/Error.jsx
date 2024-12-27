import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Error() {
  return (
    <>
    <Header />
    <div className='error-container'>
    <div className='error-404'>404</div>
    <div className="error-Message">Oups! La page que vous demandez n'existe pas</div>
    <div className="error-homeLink">Retourner sur la page d’accueil</div>
    </div>
    <Footer />
    </>
  )
}

export default Error;