import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'
import Feed from '../components/Feed'
import ProfilePage from '../components/ProfilePage'
import Tweet from '../components/Tweet'

const Home: NextPage = () => {
  return (
    <div>
    <Layout>
    <MenuBar/>
    <Main/>
    <Feed/>
    </Layout>
    </div>
  )
}

export default Home
