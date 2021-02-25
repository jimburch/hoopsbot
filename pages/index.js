import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
// import Link from 'next/link';

const Index = () => {
  const [ count, setCount ] = useState(0);

  // useEffect(() => {
  //   document.title = `${count} clicks`
  // })

  const increase = () => {
    setCount(count + 1);
  }

  return (
    <Layout>
      <Head>
        <title>HoopsBot</title>
        <meta name="description" content="A bot that serves up bad NBA takes."/>
        <meta name="keywords" content="nba hot takes"/>
        <meta name="author" content="Jim Burch"/>
      </Head>
      <h1>HoopsBot</h1>
      <button onClick={increase}>There are {count} takes.</button>

      <style jsx>{`
        h1 {
          color: purple;
          font-size: 35px;
        }
      `}</style>
    </Layout>
  )
};

export default Index;