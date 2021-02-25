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
      </Head>
      <h1>HoopsBot</h1>
      <img src="../static/devinbooker.jpg" alt="Devin Armani Booker" height="250px" />
      <button onClick={increase}>There are {count} takes</button>

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