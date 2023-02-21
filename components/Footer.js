import styles from '@styles/Footer.module.css'
import React from 'react';

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