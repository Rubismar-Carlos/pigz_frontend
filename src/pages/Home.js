import styles from './Home.module.css'

// components
import Banner from '../components/banner/Banner'
import Ofertas from '../components/ofertas/Ofertas'
import Slider from '../components/slider/Slider'
import Suporte from '../components/suporte/Suporte'

const Home = () => {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_banner}>
          <Banner />
      </div>
      <div className={styles.container_ofertas}>
          <Ofertas />
      </div>
      <div className={styles.container_slide}>
          <Slider />
      </div>
      <div className={styles.container_suporte}>
          <Suporte />
      </div>
    </div>
  )
}

export default Home