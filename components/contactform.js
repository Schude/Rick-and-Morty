import React from "react";
import styles from "../styles/contactform.module.css";

export default function Contactform() {
  return (
    <div className={styles.contactSection}>
      <h1>Contact Me</h1>
      <form className={styles.contactForm}>
        <input
          className={styles.formInput}
          placeholder="Full Name"
          type="text"
          name="name"
        ></input>
        <input
          className={styles.formInput}
          placeholder="E-Mail"
          type="email"
          name="email"
        ></input>
        <input
          className={styles.formInput}
          placeholder="Subject"
          type="text"
          name="subject"
        ></input>
        <textarea
          className={styles.formArea}
          placeholder="Your Message"
          type="text"
          name="message"
        ></textarea>
        <button className={styles.submitBtn} type="submit">
          {" "}
          Contact{" "}
        </button>
      </form>
    </div>
  );
}
