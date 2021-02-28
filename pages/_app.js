import App from 'next/app';
import '../styles.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp;