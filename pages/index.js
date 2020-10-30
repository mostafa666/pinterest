import Link from 'next/link'
import { connect } from 'react-redux'
import Header from '../components/Header';

function Home(props) {
  console.log(props);
  return (
    <>
      <Header />
    </>
  )
}


export default connect(state => state)(Home)