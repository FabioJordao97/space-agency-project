import React from "react"
import Router from "./router/router"
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-color: #800000
}
`

function App() {
  return (
      <div>
      <GlobalStyle />
      <Router />
      </div>
  )

}

export default App;
