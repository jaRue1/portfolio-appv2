import React, {useState} from 'react'
import './contact.scss'
function Contact() {
  const [message,setMessage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
        <h2>Contact.</h2>
          <input type="text" name="email" id="email" placeholder="email" />
          <textarea placeholder="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks for reaching out I will contact you shortly.</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
