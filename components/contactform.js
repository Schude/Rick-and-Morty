import React from 'react'

export default function Contactform() {
    return (
        <form>
        <input placeholder="Full Name" type="text" name="name"></input>
        <input placeholder="E-Mail" type="text" name="email"></input>
        <textarea
          placeholder="Your Message"
          type="text"
          name="message"
        ></textarea>
        <button type="submit"> Contact </button>
      </form>
    )
}
