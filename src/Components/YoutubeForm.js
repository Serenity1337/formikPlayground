// formik.touched gives us an object of visited fields if we set handleblur on inputs

// formik.values gives us an object of all the input values we have if we set handlechange on change on inputs

// we set initialValues

// formik.getFieldProps replaces the boilerplate code ''onsubmit,onchange,onblur'' etc.

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
function YoutubeForm() {
  const initialValues = {
    name: '',
    email: '',
    channel: '',
  }

  const onSubmit = (values) => {
    console.log(values)
  }

  const validate = (values) => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Required'
    }

    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email format'
    }

    if (!values.channel) {
      errors.channel = 'Required'
    }
    return errors
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'>name</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' />
        </div>

        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>channel</label>
          <Field type='text' id='channel' name='channel' />
          <ErrorMessage name='channel' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default YoutubeForm
