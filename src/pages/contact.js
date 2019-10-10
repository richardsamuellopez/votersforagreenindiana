import React from "react"
import Layout from "../components/layout"

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
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name} ${this.state.email} ${this.state.message}!`)
  }
  render() {
    return (
      <Layout>
        <div>
          <h1>Contact Us</h1>
        {this.state.name}{this.state.email}{this.state.message}
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" onSubmit={this.handleSubmit}>
        <input type="hidden" name="bot-field" />
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Message
          <input
            type="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
      </Layout>
    )
  }
}