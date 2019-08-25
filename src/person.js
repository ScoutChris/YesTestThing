import React from 'react'

const template2 = (props) => {
    return (
      <div> 
      <p>Hero Name: {props.name ? props.name : "nobody"}</p>
      <br />
      <p>Age: {props.age ? props.age : "Wait no i don't."}</p>
      </div>
  )
  }

export default template2