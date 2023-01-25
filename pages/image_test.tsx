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
          src="contracts/id_photo.jpg"
          alt="Picture of pranab"
          width={350}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
      <div>
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="contracts/IMG_3402.JPG"
          alt="Picture of rohith"
          width={550}
          height={450}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
        <Image
          //src="/static/images/id_photo.jpg"
          //src={mypic}
          src="contracts/drawisland.png"
          alt="Picture of intiials"
          width={350}
          height={350}
          //layout="fixed" // layout="fill", layout="intrinsic"
        />
      </div>
    </>
  );
}
