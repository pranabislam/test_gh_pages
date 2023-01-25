import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
  return (
    <>
      <h1>Seeing image</h1>
      <h2>
        <Link href="/test_gh_pages">Back to home</Link>
      </h2>
      <h2>
        <Link href="/contracts_main">Contract images page</Link>
      </h2>
      <div>
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="https://images.unsplash.com/photo-1674585639691-19872899cc0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80"
          alt="Picture of Germany"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
      <div>
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="/contracts/IMG_3402.JPG"
          alt="Picture of rohith"
          width={550}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="/contracts/drawisland.png"
          alt="Picture of intiials"
          width={350}
          height={350}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
    </>
  );
}
