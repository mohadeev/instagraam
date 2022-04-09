import Head from "next/head";
import Image from "next/image";
import Style from "../styles/Home.module.css";
import HomeIndex from "./../components/body/Home/index";

export default function Home() {
  return (
    <div className={Style.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <main className={Style.main}>
        <HomeIndex />
      </main>
    </div>
  );
}
