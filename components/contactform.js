import React, { useState } from "react";
import { database } from "./firebase";

import styles from "../styles/contactform.module.css";

export default function Contactform() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    setData(() => ({
      ...data,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    database
      .collection("contacts")
      .add({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
      .then(function (docRef) {
        alert("Submitted");
      })
      .catch(function (error) {
        alert("Error adding document: ", error);
      });
    setData(() => ({
      name: "",
      email: "",
      subject: "",
      message: "",
    }));
  };

  return (
    <div className={styles.contactSection}>
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <input
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Full Name"
          type="text"
          name="name"
          value={data.name}
        ></input>
        <input
          onChange={handleChange}
          className={styles.formInput}
          placeholder="E-Mail"
          type="email"
          name="email"
          value={data.email}
        ></input>
        <input
          onChange={handleChange}
          className={styles.formInput}
          placeholder="Subject"
          type="text"
          name="subject"
          value={data.subject}
        ></input>
        <textarea
          onChange={handleChange}
          className={styles.formArea}
          placeholder="Your Message"
          type="text"
          name="message"
          value={data.message}
        ></textarea>
        <input className={styles.submitBtn} type="submit"></input>
      </form>
    </div>
  );
}
