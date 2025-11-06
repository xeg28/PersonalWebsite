import '../css/contact.css';
import MessageCard, {addMessage} from './MessageCard';
import { useState} from 'react';

function Contact() {
  const [messages, setMessages] = useState(new Set());

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        addMessage({type:'success', content:'Message sent!'}, setMessages);
        e.target.reset(); // clear form
      } else {
        addMessage({type:'error', content:'Failed to send message.'}, setMessages);
      }
    } catch (error) {
      addMessage({type:'error', content:'Error sending message.'}, setMessages);
    }
  };

  return (
    <div className="section" id="contact">
      <h2 className="monospace fs-600">Contact</h2>
      <form onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="9dc5f9b2-a50d-4f73-b9f0-5455ad9fbd5e"></input>
        <div className="form-container">
          <div className="input-row">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
          </div>
          <div>
            <textarea name="message" placeholder="Send a message about the site or a career opportunity."></textarea>
          </div>
          <div>
            <button type="submit">
              <span>Send Message</span> 
              <div className="btn-image-container">
                <img src="svg/send.svg" />
              </div>
            </button>
          </div>
        </div>
      </form>
      <MessageCard messages={messages} setMessages={setMessages} />
    </div>
  )
}

export default Contact;