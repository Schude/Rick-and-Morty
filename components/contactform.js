import React, { useState } from "react";
import { db } from "./firebase";
import styles from "../styles/contactform.module.css";

export default function Contactform() {
  const onSubmit = (data) => {
    db.collection("contacts")
      .add({
        name: "ser",
        email: "data.email",
        subject: "data.subject",
        message: "data.message",
      })
      .then(() => {
        alert("Submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className={styles.contactSection}>
      <h1>Contact Me</h1>

      <form onSubmit={onSubmit} className={styles.contactForm}>
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
