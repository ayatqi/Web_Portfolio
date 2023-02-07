import styles from '../styles/Footer.module.css'
import React, { useEffect } from 'react';
import email from '../Icons/email.png';
import instagram from '../Icons/instagram.png';
import linkedin from '../Icons/linkedin.png';
import phone from '../Icons/phone.png';


const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className={styles.footer}>
     
        
      <div className={styles.backToTop}>
      <button onClick={handleClick}>Back to Top</button>
      </div>
    
    </footer>
  );
};

export default Footer;