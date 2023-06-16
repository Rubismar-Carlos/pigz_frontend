import styles from './Home.module.css'

// components
import Banner from '../components/banner/Banner'
import Ofertas from '../components/ofertas/Ofertas'

const Home = () => {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_banner}>
          <Banner />
      </div>
      <div className={styles.container_ofertas}>
          <Ofertas />
      </div>
    </div>
  )
}

export default Home