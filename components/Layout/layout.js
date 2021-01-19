import Header from "./header";
import styles from "../../styles/wrapper.module.css";
import Head from "next/head";
function Layout({ children, title }) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Serkan"></meta>
        <meta
          name="description"
          content="Rick and Morty Character Database. Created by ReactJS and NextJS."
        ></meta>
      </Head>
      <Header />

      {children}
    </div>
  );
}

export default Layout;
