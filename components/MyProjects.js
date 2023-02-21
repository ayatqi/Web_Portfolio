import styles from '@styles/MyProjects.module.css'


export default function Header() {
    return (
    <>
      <div className={styles.main}>

        <div className={styles.title}>
            <p>My Projects</p>
        </div>
        
        <div className={styles.Projects}>

            <div className={styles.Prj}>
               <div className={styles.content_1}>

                    <iframe></iframe>

               </div>

               <div className={styles.content_2}>

                <div>
                    <h1>100 sports Image Classification</h1>
                    <h2>Hundred sports image classification using 
                        convolutional neural networks and transfer learning.</h2>
                    <a>Project GitHub Link</a>
                </div>
                    
               </div>
            </div>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
                    <iframe src="../PDF/Report.pdf" width="100%" height="100%"></iframe>
               </div>

               <div className={styles.content_2}>
                    <div>
                    <h1>Brain Tumors Image Classification</h1>
                    <h2>Brain tumor detection using convolutional 
                        neural networks and transfer learning.</h2>
                    <a>Project GitHub Link</a>
                    </div>
                
               </div>
            </div>

        </div>

      </div>
    </>
    )
  }
  