import React from 'react'

const InputFields = (props) => {
  return (
   <>
   <input type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} className='.col-lg-* .col-sm-*' />
   </>
  )
}

export default InputFields