// formik.touched gives us an object of visited fields if we set handleblur on inputs

// formik.values gives us an object of all the input values we have if we set handlechange on change on inputs

// we set initialValues

import React from 'react'
import { useFormik } from 'formik'
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

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'>{formik.errors.name}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='email'>email</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'>{formik.errors.email}</div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'>channel</label>
          <input
            type='text'
            id='channel'
            name='channel'
            onChange={formik.handleChange}
            value={formik.values.channel}
            onBlur={formik.handleBlur}
          />

          {formik.touched.channel && formik.errors.channel ? (
            <div className='error'>{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
