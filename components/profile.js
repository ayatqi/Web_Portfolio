import styles from '../styles/profile.module.css'
import React from 'react';

export default function Profile() {
    return (
    <>
    <div className={styles.main_content}>

        <div className={styles.profile_content}>

        <p>Hello, <span>I'm</span> </p>
        <p className={styles.Myname}>Ayat Al-Khulaqi</p>
        <p>Data Science Student </p>

        <div className={styles.MyDescription}>

            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo 
                    nisi vitae sagittis dapibus. Mauris ac euismod purus, at eleifend tortor. Aenean 
                    at risus neque. Nullam a urna elit. </p>

        </div>

        <div className={styles.letsbtn}>
            <button>Let's Talk</button>
        </div>

        </div>

        <div className={styles.frame_img}>
        <img src="../Images/FramePic.svg" alt="Frame Image" />
        </div>

    </div>
       
    </>
    )
  }
  