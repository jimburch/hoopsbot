import { useState, useEffect } from 'react';
import Head from 'next/head';
import MadLibs from '../components/MadLibs';
// import Link from 'next/link';

const Index = () => {

  return (
    <div className="container">
      <Head>
        <title>HoopsBot</title>
      </Head>
      <h1>HoopsBot</h1>
      <MadLibs />
    </div>
  )
};

export default Index;