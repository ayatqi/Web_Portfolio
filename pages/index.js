import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Profile from '@components/Profile'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Portfolio!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      <Profile></Profile>
      </main>

      

      <Footer />

    </div>
  )
}

