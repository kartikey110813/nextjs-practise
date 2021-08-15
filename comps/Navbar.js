import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
       <Image src="/vercel.svg" alt="" width={128} height={77} />
      </div>
     <Link href="/"><a>Home</a></Link>
      <Link href ="/about"><a>About</a></Link>
      <Link href="/ninjas"><a>Lists</a></Link> 
    </nav>
  );
};

export default Navbar;
