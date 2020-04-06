// import styles from "./index.module.css";
import { NextPage } from "next";
import * as React from "react";
import { Page } from "../components/Page";

const SignIn: NextPage = () => {
  return (
    <Page title={"upload a pack | pocket-packs"}>
      <section>
        <h1>Sign In</h1>
        <form action="">
          <label htmlFor="email">
            <span>Email Address</span>
            <input type="text" />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </section>
    </Page>
  );
};

export default SignIn;
