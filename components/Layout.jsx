import styles from '../styles/Layout.module.css'
import Header from './Header'

const Layout = ( {children}) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Layout