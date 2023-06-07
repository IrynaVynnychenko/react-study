import styles from './Home.module.scss'

function Home() {

  return (
    <>
      <div className='wrapper'>
        <h1>
          Cars catalog
        </h1>
        <div className='wrapper-cards'>
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <img src='/car1.png' alt="" />
            </div>
            <div className={styles.itemInfo}>
              <h2>Car1</h2>
              <p>$100 000</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
