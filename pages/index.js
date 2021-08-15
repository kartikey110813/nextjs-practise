import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
<>
    <Head>
   <title>Ninja | Home Page</title>
   <meta name="keywords" content=''ninjas></meta> 
    </Head>
    <div>
    <h1  className={styles.title} >Homepage</h1>
    <p classNames={styles.text}>this is a homepage where we do some stuff out there</p>
    <p classNames={styles.text}>this is a homepage where we do some stuff out there</p>
    <Link href="/ninjas">
    <a className={styles.btn}>Ninjas Listings</a>
    </Link>
    </div>
</>    
  )
}
