import styles from '../styles/Header.module.css'

export default function Header() {
  return (
  <>
     <header className={styles.header}>
      <div>
        <h1>My Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </>
  )
}
