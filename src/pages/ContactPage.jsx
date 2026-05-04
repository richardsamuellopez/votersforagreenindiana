import { useState } from 'react';
import Layout from '../components/Layout';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.target)).toString(),
    }).then(() => setSubmitted(true));
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Thank you for reaching out! We'll be in touch.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container">
        <h1>Contact Us</h1>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <ul className="flex-outer">
            <li>
              <label htmlFor="first-name">First Name</label>
              <input name="first" type="text" id="first-name" placeholder="Enter your first name here" />
            </li>
            <li>
              <label htmlFor="last-name">Last Name</label>
              <input name="last" type="text" id="last-name" placeholder="Enter your last name here" />
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input name="email" type="email" id="email" placeholder="Enter your email here" />
            </li>
            <li>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows="6" id="message" placeholder="Enter your message here"></textarea>
            </li>
            <li>
              <button type="submit">Submit</button>
            </li>
          </ul>
        </form>
      </div>
    </Layout>
  );
}
