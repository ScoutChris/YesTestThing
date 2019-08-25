import React from 'react'
import ReactDOM from 'react-dom'
import template2 from './person.js'

let root = document.getElementById('root')
let template = (
  <p>Whaddup My Boi</p>
)
// ReactDOM.render(template,root)
let person = {
  name: 'Hawkeye',
  age: 47
}


ReactDOM.render(template2,root)