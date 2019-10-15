import React from "react"
import Layout from "../components/layout"
import './contact.css'

export default class ContactPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <Layout>
        <div class="container">
          <h1>Contact Us</h1>
          <form name="contact" method="POST" data-netlify="true">
            <ul class="flex-outer">
              <li>
                <label for="first-name">First Name</label>
                <input name="first" type="text" id="first-name" placeholder="Enter your first name here" />
              </li>
              <li>
                <label for="last-name">Last Name</label>
                <input name="last" type="text" id="last-name" placeholder="Enter your last name here" />
              </li>
              <li>
                <label for="email">Email</label>
                <input name="email" type="email" id="email" placeholder="Enter your email here" />
              </li>
              <li>
                <label for="message">Message</label>
                <textarea name="message" rows="6" id="message" placeholder="Enter your message here"></textarea>
              </li>
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
        </div>
      </Layout>
    )
  }
}