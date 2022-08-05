import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div className={styles.container}>
      <Link href='/'><h1 className={styles.title}>Next Translate</h1></Link>
      <div className={styles.links}>
        <Link href="/">
          <a className={styles.link}>
            Translate
          </a>
        </Link>
        <Link href="/about">
          <a className={styles.link}>
            About
          </a>
        </Link>
        <Link href="/codes">
          <a className={styles.link}>
            Codes
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Header