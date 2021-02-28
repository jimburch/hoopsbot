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
      <div className="header">
        <h1>HoopsBot <img className="fire" src="../static/fire.png" /></h1>

      </div>
      <MadLibs />
      <div className="github">
        <a href="https://github.com/JimBurch/hoopsbot" target="_blank">See this project on GitHub</a>
      </div>
    </div>
  )
};

export default Index;