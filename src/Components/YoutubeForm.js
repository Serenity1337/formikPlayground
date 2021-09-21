import React from 'react'

function YoutubeForm() {
  return (
    <div>
      <form>
        <label htmlFor='name'>name</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>email</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='channel'>channel</label>
        <input type='text' id='channel' name='channel' />
      </form>
    </div>
  )
}

export default YoutubeForm
