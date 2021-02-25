import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>

    <style jsx>{`
      a {
        padding: 10px;
      }
    `}</style>

  </div>

);

export default Nav;