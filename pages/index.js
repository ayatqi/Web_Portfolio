import Head from 'next/head'
import Header from '@components/Header'
import Profile from '@components/profile'
import MyProjects from '@components/MyProjects'
import styles from '@styles/index.module.css'
import { Projects } from '@components/MyProjects.js'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={styles.main}>
     <header className={styles.header}>
      <div>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#contact">Resume</a>
        </nav>
      </div>
    </header>
    </div>

      <div  className={styles.profile}>
      <Profile></Profile>
      </div>
      
      <div className={styles.MyProjects}>
      <MyProjects></MyProjects>
      </div>

    </div>
  )
}

