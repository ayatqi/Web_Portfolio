import styles from './Header.module.css'

export default function Header() {
  return (
  <>
     <header className={styles.header}>
      <div>
        <h1>Ayat Al-Khulaqi</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  </>
  )
}
