import styles from '../styles/Selector.module.css'

const Selector = ({ onChange, options }) => {
  let key = 0

  return (
    <select className={styles.selector} onChange={onChange}>
      {options.map((option) => (<option key={key++}>{option}</option>))}
    </select>
  )
}

export default Selector