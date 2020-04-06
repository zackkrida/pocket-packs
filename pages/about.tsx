// import styles from "./index.module.css";
import { NextPage } from "next";
import * as React from "react";
import { Page } from "../components/Page";

const About: NextPage = () => {
  return (
    <Page title={"create an account | pocket-packs"}>
      <section>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          delectus architecto laboriosam magnam odit itaque saepe quidem porro
          inventore iste.
        </p>
      </section>
    </Page>
  );
};

export default About;
