import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import App from './App.jsx'

function Myapp(){
  return (
    <h2>Hello world</h2>
  )
}
const ReactElement = {
  type : 'a',
  props : {
      href : 'https://www.google.com',
      target : '_blank'
  },
  children : 'Click me to visit google'
}

const anotherUser = "Tanish";

const CustomReact = React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  "click me to visit google",
  anotherUser

)


const AnotherElement = (
  <a href='https://www.google.com' target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(CustomReact)

// ReactDOM.createRoot(document.getElementById('root')).
// render(<App />)