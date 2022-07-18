import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Layout from '../components/Layout'
import MenuBar from '../components/MenuBar'

const Home: NextPage = () => {
  return (
    <div>
    <Layout>
    <MenuBar/>
    <Main/>
    </Layout>
    </div>
  )
}

export default Home
