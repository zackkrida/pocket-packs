import * as React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href="/">
        <a>pocket-packs</a>
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/upload">
              <a>Upload</a>
            </Link>
          </li>

          <li>
            <Link href="/sign-in">
              <a>Sign in</a>
            </Link>
          </li>
          <li>
            <Link href="/create-account">
              <a>Create Account</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
