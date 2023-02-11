import styles from '../styles/Header.module.css'

export default function Header() {
  return (
  <>
     <header className={styles.header}>
      <div>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Resume</a>
        </nav>
      </div>
    </header>
  </>
  )
}
