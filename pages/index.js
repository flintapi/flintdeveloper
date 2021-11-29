import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FlintAPI | Developer</title>
        <meta name="description" content="FlintAPI Developer Dashboard" />
        <link rel="icon" href="/ico.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,  user-scalable=no, maximum-scale=1"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://flintapi.io">FLINT API</a>
        </h1>

        <p className={styles.description}>
          For a good experience make sure you are not accessing this developer
          dashboard on a mobile device or the likes{" "}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="https://dev.flintapi.io/login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>
              Already got an account with us? proceed to login and start
              building on already available API suit.
            </p>
          </a>

          <a href="https://dev.flintapi.io/signup" className={styles.card}>
            <h2>Sign Up &rarr;</h2>
            <p>
              Create an account lets get the party started, use our available
              API suit to build your next NFT project.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://flintapi.io" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/logo-black.png"
              alt="Flint API Logo"
              width={82}
              height={21}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
