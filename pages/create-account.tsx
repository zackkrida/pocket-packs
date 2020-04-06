// import styles from "./index.module.css";
import { NextPage } from "next";
import * as React from "react";
import { Page } from "../components/Page";

const CreateAccount: NextPage = () => {
  return (
    <Page title={"create an account | pocket-packs"}>
      <section>
        <h1>Create an account</h1>
        <form action="">
          <label htmlFor="email">
            <span>Username</span>
            <input type="text" />
          </label>
          <label htmlFor="email">
            <span>Password</span>
            <input type="password" />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </section>
    </Page>
  );
};

export default CreateAccount;
