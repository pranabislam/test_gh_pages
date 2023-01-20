import Link from 'next/link';
import Image from 'next/image';
//import mypic from './id_photo.jpg';

export default function FirstPost() {
  return (
    <>
      <h1>Seeing image</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <div>
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="/contracts/id_photo.jpg"
          alt="Picture of pranab"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
    </>
  );
}
