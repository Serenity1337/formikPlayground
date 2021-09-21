import React from 'react'

export const TextError = (props) => {
  console.log(props)
  return <div className='error'>{props.children}</div>
}
