import Layout from "../components/Layout/layout";
import styles from "../styles/mainWrapper.module.css";
import Siluet from "../components/icons/Siluet";

function Contact() {
  return (
    <div className={styles.mainLayout}>
      <Layout />
      <h1 className = {styles.mainTitle}>Contact Me</h1>
      <section className={styles.mainContainer}>
      <form className={styles.blabla}>
        <input placeholder="Full Name" type="text" name="name"></input>
        <input placeholder="E-Mail" type="text" name="email"></input>
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
        ></textarea>
        <button type="submit"> Contact </button>
      </form>

          <div className={styles.mainImage}>
            <Siluet />
          </div>
        </section>

      
    </div>
  );
}

export default Contact;
