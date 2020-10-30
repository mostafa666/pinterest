import Link from 'next/link'
import { connect } from 'react-redux'
import Layout from '../components/Layout';
import Post from '../components/Post';


function Home(props) {
  console.log(props);
  return (
    <Layout>
      <main className="mainPageContainer">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
    </Layout>
  )
}


export default connect(state => state)(Home)