import Link from 'next/link'
import { connect } from 'react-redux'
import styles from './moduleStyles/header.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logined}>
          <div className={styles.right}>
            right section
          </div>
          <div className={styles.center}>
            <label>
              <input placeholder="سرچ کنید ..." type="search" />
            </label>
          </div>
          <div className={styles.left}>
            <img src="./assets/pinterest.svg" width="30" />
          </div>
        </div>
    </nav>
    </header>
  )
}


export default connect(state => state)(Header)




{/* <header className={styles.header}>
<nav className={styles.navbar}>
  <div className={styles.rightSection}>
      <div>
        <Link href="/login"><a className={styles.loginButton}>ورود</a></Link> 
        <Link href="/register"><a className={styles.registerButton}>ثبت نام</a></Link>
      </div>
      <Link href="/"> خانه</Link>
      <Link href="/"> بلاگ</Link>
      <Link href="/"> درباره ی ما</Link>
  </div>
  <div className={styles.leftSection}> 
      <img src="./assets/pinterest.svg" width="50"/>
  </div>
</nav>
</header> */}