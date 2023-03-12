import Head from 'next/head'
import Header from '@components/Header'
import Profile from '@components/profile'
import MyProjects from '@components/MyProjects'
import styles from '@styles/index.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      </main>

      <div  className={styles.profile}>
      <Profile></Profile>
      </div>
      
      <div className={styles.MyProjects}>
      <MyProjects></MyProjects>
      </div>

    </div>
  )
}

