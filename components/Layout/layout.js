import Header from "./header";
import styles from "../../styles/main.module.css";
import Head from "next/head";
function Layout({ children,title }) {
  return (
    <div className={styles.mainLayout}>
      <Header />
      {children}
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  );
}

export default Layout;
