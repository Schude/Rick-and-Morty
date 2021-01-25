import React, { useState } from "react";
import { database } from "./firebase";

import styles from "../styles/contactform.module.css";

export default function Contactform() {
  const [data, setData] = useState({
    id: 1,
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    setData(() => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    database
      .collection("contacts")
      .add({
        id:data.id,
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      })
      .then(function () {
        alert("Submitted");
      })
      .catch(function (error) {
        alert("Error adding document: ", error);
      });
    setData(() => ({
      id: data.id+1,
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
        <button className={styles.submitBtn} type="submit">Contact</button>
      </form>
    </div>
  );
}
