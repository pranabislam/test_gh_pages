import Link from 'next/link';
import Image from 'next/image';
import { Gallery } from 'react-grid-gallery';

export default function ListContracts() {
  let labelled_img_urls: Map<string, Array<string>> = new Map<string, Array<string>>();
  const s3_root_dir =
    'https://multimodal-contract-segmentation-contracts-bucket.s3.amazonaws.com/cuad_imgs_labeled/';
  const ct_id_list = ['ct_200', 'ct_308']; //, 'ct_308', 'ct_353', 'ct_345', 'ct_327', 'ct_506'];

  for (var ct of ct_id_list) {
    console.log(ct);
    labelled_img_urls.set(ct, []);

    for (let i = 1; i < 75; i++) {
      let img_url = s3_root_dir + ct + '_' + i + '.jpg';

      try {
        labelled_img_urls.get(ct)?.push(img_url);
      } catch (err) {
        console.log(err);
      }
    }
  }
  console.log(labelled_img_urls);
  // //Todo: ITERATIVELY LOAD MULTIPLE CONTRACTS.
  // //Complete this code to replace below.
  // const gallery_test: {
  //   src: string;
  //   width: number;
  //   height: number;
  //   isSelected: boolean;
  //   caption: string;
  //   thumbnailCaption: string;
  //   onClick: () => void;
  // }[] = [];
  // labelled_img_urls.forEach((imgs, ct_id) => {
  //   gallery_test.push({
  //     src: imgs[62],
  //     width: 320,
  //     height: 212,
  //     isSelected: true,
  //     caption: 'View Contract',
  //     thumbnailCaption: 'Contract ' + ct_id,
  //     onClick: () => {
  //       console.log('Test');
  //     },
  //   });
  // });
  let gallery_test = [
    {
      src: 'https://multimodal-contract-segmentation-contracts-bucket.s3.amazonaws.com/cuad_imgs_labeled/ct_200_54.jpg',
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_200">View Contract</Link>, title: 'View Contract' },
      ],
    },
    {
      src: 'https://multimodal-contract-segmentation-contracts-bucket.s3.amazonaws.com/cuad_imgs_labeled/ct_308_19.jpg',
      width: 100,
      height: 75,
      tags: [
        { value: <Link href="/image_scroll_308">View Contract</Link>, title: 'View Contract' },
      ],
    },
  ];
  return (
    <>
      <h1>List of Contracts</h1>
      <h2>
        <Link href="/test_gh_pages">Back to home</Link>
      </h2>
      <h2>
        <Link href="/image_test">Image test page</Link>
      </h2>
      <Gallery images={gallery_test}></Gallery>
    </>
  );
}
