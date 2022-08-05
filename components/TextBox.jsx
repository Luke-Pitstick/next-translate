import { useState} from 'react'
import styles from '../styles/TextBox.module.css'


const TextBox = ({ rows, columns, onChange, value, read }) => {
  return (
    <textarea rows={rows} cols={columns} className={styles.textbox} value={value} onChange={onChange} readOnly={read}/>
  )
}

export default TextBox
