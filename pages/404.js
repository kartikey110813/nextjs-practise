import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push('/');
        },3000)
    }, [])

  return (
    <div className="not-found">
      <h1>Ooopss...</h1>
      <h2>This Page cannot be found</h2>

      <Link href="/">
        <a>
          <p>Go back to Homepage</p>
        </a>
      </Link>
    </div>
  );
};

export default NotFound;
