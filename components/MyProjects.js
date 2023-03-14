import styles from '@styles/MyProjects.module.css'


export default function MyProject() {
    return (
    <>
      <div id="Projects"  className={styles.main}>

        <div className={styles.title}>
            <p>My Projects</p>
        </div>
        
        <div className={styles.Projects}>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
               1
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
                   2
               </div>

               <div className={styles.content_2}>
                    <div>
                    <h1>Brain Tumors Image Classification</h1>
                    <h2>Brain tumor detection using convolutional 
                        neural networks and transfer learning.</h2>
                    <a href='https://github.com/ayatqi/Brain-Tumors-Image-Classification'>Project GitHub Link</a>
                    </div>
                
               </div>
            </div>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
               3
               </div>

               <div className={styles.content_2}>

                <div>
                    <h1>Quotation System</h1>
                    <h2>The Quotation System is a software that allows different users to create and
                         view purchase requisitions, quotations and purchase orders according to their
                         roles. The system has four subsystems: Customer, Salesman, Manager and Finance
                         Officer.</h2>
                    <a href='https://github.com/ayatqi/Quotation-System'>Project GitHub Link</a>
                </div>
                    
               </div>
            </div>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
               4
               </div>

               <div className={styles.content_2}>

                <div>
                    <h1>Huffman Coding C++</h1>
                    <h2>An algorithm that generates the Huffman code for different numbers
                         of words with different lengths. Also, it calculates the execution time.</h2>
                    <a href='https://github.com/ayatqi/Huffman-Coding'>Project GitHub Link</a>
                </div>
                    
               </div>
            </div>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
               5
               </div>

               <div className={styles.content_2}>

                <div>
                    <h1>Rock, Paper, Scissors, Lizard, and Spock Java</h1>
                    <h2>The game is Rock-Paper-Scissors-Lizard-Spock which consists of 2 teams of 2 players.</h2>
                    <a href='https://github.com/ayatqi/Rock-Paper-Scissors-Lizard-Spock'>Project GitHub Link</a>
                </div>
                    
               </div>
            </div>

            <div className={styles.Prj}>
               <div className={styles.content_1}>
               6
               </div>

               <div className={styles.content_2}>

                <div>
                    <h1>BurgerCode Website</h1>
                    <h2>This project describes a fast food website that has two different 
                        access levels: user and admin. The user page features various pages
                        such as Home, Menu, About us, Contact, Rating, Registration, Login
                        and Dashboard.</h2>
                    <a href='https://github.com/ayatqi/BurgerCode-Website'>Project GitHub Link</a>
                </div>
                    
               </div>
            </div>


        </div>

      </div>
    </>
    )
  }
  