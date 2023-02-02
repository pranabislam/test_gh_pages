import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Herosection from './herosection';
import validPageNumbers from '../public/ct_id_valid_page_numbers.json';
import { URLListBuilder } from './contracts_list';
import { s3_root_dir } from './contracts_list';

export default function Home() {
  let img_list = URLListBuilder(s3_root_dir, 'ct_200', validPageNumbers['ct_200']);
  return (
    <div>
      <Head>
        <title>Contract 200</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Herosection img_list={img_list} />
      <Footer />
    </div>
  );
}
