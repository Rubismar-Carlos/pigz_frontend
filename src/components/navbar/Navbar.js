import styles from './Navbar.module.css'

import logo from '../../imagens/logo.png'

const Navbar = () => {

  return (
    <div className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo empresa" />
            </div>
            <button className={styles.btn_navbar}>
                Já sou parceiro
            </button>
        </nav>
    </div>
  )
}

export default Navbar