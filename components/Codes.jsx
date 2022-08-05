import styles from '../styles/Codes.module.css'
import { languages, languageCodes } from '../public/languages'

const Code = () => {
  let key = 0

  return (
    <div className={styles.container}>
      {languages.map(lang => (
          <h3 key={key++}>{lang} - {languageCodes[languages.indexOf(lang)]}</h3>
      ))}
    </div>
  )
}

export default Code