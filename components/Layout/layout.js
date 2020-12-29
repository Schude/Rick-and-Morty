import Navbar from "../navbar";
import styles from "./layout.module.css";
function Layout({ children }) {
  return (
    <div className={styles.welcome}>
      {children}
      <Navbar />
    </div>
  );
}

export default Layout;
