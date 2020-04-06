// import styles from "./index.module.css";
import { NextPage } from "next";
import React from "react";
import { Page } from "../components/Page";
import Link from "next/link";

const Home: NextPage = () => (
  <Page
    title={
      "pocket-packs | samples and patches for teenage engineering pocket operators"
    }
  >
    <section>
      <h1>Find samples &amp; tracks for your pocket operators</h1>
      <input type="text" placeholder="search for samples and patches" /> or{" "}
      <Link href="/upload">
        <a>Upload your own</a>
      </Link>
    </section>
    <section>
      <h2>Recent uploads</h2>
    </section>
    <section>
      <h2>Popular Tags</h2>
    </section>
  </Page>
);

export default Home;
