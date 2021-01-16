import Header from './header'
import styles from '../../styles/main.module.css'
function Layout({ children }) {
  return (
    <div className={styles.mainLayout}>
    <Header/>
      {children}
      
    </div>
  );
}

export default Layout;
