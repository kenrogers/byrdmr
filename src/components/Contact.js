import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import arrow from '../img/arrow.svg'

const ContactContainer = styled.div`
  min-height: 100vh;
  background: #f5f0ec;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .container {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      label {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 14px;
        margin: 0;
      }
      input,
      textarea {
        margin: 0;
        margin-bottom: 1.5rem;
        background: #f5f0ec;
        border: none;
        border-bottom: solid 1px #979797;
        width: 100%;
        padding: 1rem 0;
        &:focus {
          outline: none;
        }
      }
      button {
        background: #ee5f20;
        padding: 1rem 1.5rem;
        display: inline-block;
        border: none;
        color: #fff;
        font-size: 20px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`

const Error = styled.div`
  color: #c53030;
  margin-bottom: 1.5rem;
`

function validateName(value) {
  let error
  if (!value) {
    error = 'Name is required'
  }
  return error
}

function validateEmail(value) {
  let error
  if (!value) {
    error = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address'
  }
  return error
}

function validateMessage(value) {
  let error
  if (!value) {
    error = 'Message is required'
  }
  return error
}

const Contact = () => (
  <ContactContainer>
    <div className="container">
      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={values => {
          let errors = {}
          if (!values.name) {
            errors.name = 'Name is required'
          }
        }}
        onSubmit={(values, { setSubmitting }) => {
          // Send email here
          setSubmitting(false)
        }}
        render={({ isSubmitting, submitCount }) =>
          submitCount === 1 ? (
            <p>Form successfully submitted. We'll be in touch.</p>
          ) : (
            <Form>
              <label htmlFor="name">Full Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                validate={validateName}
              />
              <ErrorMessage name="name" component={Error} />
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                validate={validateEmail}
              />
              <ErrorMessage name="email" component={Error} />
              <label htmlFor="message">Message</label>
              <Field
                component="textarea"
                name="message"
                id="message"
                placeholder="What are your plans?"
                validate={validateMessage}
              />
              <ErrorMessage name="message" component={Error} />
              <button type="submit" disabled={isSubmitting}>
                Send Message <img src={arrow} alt="Arrow Icon" />
              </button>
            </Form>
          )
        }
      />
    </div>
  </ContactContainer>
)

export default Contact
