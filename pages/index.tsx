import Head from "next/head";
import Welcome from "../components/welcome";
import styles from "../styles/Home.module.css";
import { WelcomeProps } from "../components/welcome";

export default function Home() {
  const welcomeProps: WelcomeProps = {
    title: "test 12",
    onClick: () => alert("how bout di"),
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome {...welcomeProps} />
    </div>
  );
}
