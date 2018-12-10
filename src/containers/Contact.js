import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import NavComponent from '../components/NavComponent';
import Footer from '../components/Footer';
import Field from '../components/Field';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      email: '',
      message: '',

    };
    // To ensure 'this' when calling 'this.updateField' refers to Form  and not  Field, we do:
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Field  could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field
  updateField(field, value) {
    this.setState({ [field]: value });
  }



  async handleSubmit(e) {
    e.preventDefault()

    // const { subject, email, message } = this.state

    await axios.post('http://localhost:5000', {
      subject: `${this.state.subject}`,
      email: `${this.state.email}`,
      message: `${this.state.message}`
    })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    const initialState = {
      subject: '',
      email: '',
      message: '',
    }
    this.setState(initialState)
    alert('Contact form has been submitted')
  };


  render() {
    return (
      <div>
        <NavComponent />
        {/* Name field */}
        <Field
          label="Subject"
          onChange={(event) => this.updateField('subject', event.target.value)}
          value={this.state.subject}
        />
        {/* Email field */}
        <Field
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <Field
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          textarea={true}
          value={this.state.message}
        />
        {/* Submit button */}
        <button
          onClick={this.handleSubmit}
        >Submit
        </button>
        <Footer />
      </div>
    );
  }
}