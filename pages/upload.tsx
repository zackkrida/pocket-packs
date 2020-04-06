// import styles from "./index.module.css";
import { NextPage } from "next";
import React, { FormEventHandler } from "react";
import { Page } from "../components/Page";
import { UploadForm } from "../components/UploadForm";

const Home: NextPage = () => {
  return (
    <Page title={"upload a pack | pocket-packs"}>
      <section>
        <h1>Upload a pack</h1>
        <UploadForm />
      </section>
    </Page>
  );
};

export default Home;
