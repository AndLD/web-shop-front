import React from 'react';
import { BrowserRouter } from "react-router-dom"
import { useRoutes } from "./routes"

const App: React.FunctionComponent = () => {

  const routes = useRoutes()

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
}

export default App;
