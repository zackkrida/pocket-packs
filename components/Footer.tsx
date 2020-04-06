import * as React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <p>
          This site is not affiliated with{" "}
          <a
            href={
              "https://teenage.engineering/products/po?utm_source=po-packs.com&utm_medium=website&utm_campaign=referral"
            }
          >
            Teenage Engineering.
          </a>
        </p>
        <p>
          Built by{" "}
          <a
            href={
              "https://zackkrida.com?utm_source=po-packs.com&utm_medium=website&utm_campaign=referral"
            }
          >
            zackkrida.
          </a>
        </p>
      </section>

      <nav>
        <ul>
          <li>
            <Link href="/about">
              <a>About pocket-packs</a>
            </Link>
          </li>
          <li>
            <a href="https://www.reddit.com/r/pocketoperators/">Community</a>
          </li>
          <li>
            <a href="https://teenage.engineering/guides">
              Pocket Operator Support
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
