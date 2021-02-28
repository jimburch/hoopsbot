import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import MadLibs from '../components/MadLibs';
// import Link from 'next/link';

const Index = () => {

  return (
    <Layout>
      <Head>
        <title>HoopsBot</title>
      </Head>
      <h1>HoopsBot</h1>
      <MadLibs />
    </Layout>
  )
};

export default Index;