import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div>
    <Layout>
    <Main/>
    </Layout>
    </div>
  )
}

export default Home
