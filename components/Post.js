import Link from 'next/link'
import { connect } from 'react-redux'
import styles from './moduleStyles/post.module.css'

function Post(props) {
  return (
    <div className={styles.post}>
        <img src='./assets/download (6).jfif' className={styles.image} />
        <p className={styles.text}>این یک متن است</p>
    </div>
  )
}

export default connect(state => state)(Post)
