import Head from "next/head";
import React from "react";
// import styles from "./index.module.css";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home Page! Pretty Cool</title>
    </Head>
    <header>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
    <h1>Home Page!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      eaque dolore repellat nobis laborum vitae inventore placeat accusantium
      provident rem.
    </p>
  </div>
);

export default Home;
