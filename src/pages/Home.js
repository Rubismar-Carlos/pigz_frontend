import styles from './Home.module.css'

// components
import Banner from '../components/banner/Banner'

const Home = () => {
  return (
    <div className={styles.container_home}>
      <div className={styles.container_banner}>
          <Banner />
      </div>
    </div>
  )
}

export default Home