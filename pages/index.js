import Link from 'next/link'
import { connect } from 'react-redux'

function Home(props) {
  console.log(props);
  return (
    <>
      <Link href="/login">ورود</Link> 
      <Link href="/register">ثبت نام</Link> 
    </>
  )
}


export default connect(state => state)(Home)