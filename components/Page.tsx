import * as React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./Page.module.css";

export const Page = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.Page}>
      <Head>
        <title>
          {title ||
            "pocket-packs | Samples and patches for Teenage Engineering Pocket Operators"}
        </title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
