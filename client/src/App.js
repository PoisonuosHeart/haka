import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import './index.css'
import { useRoutes } from './routers/rootRouter'
import {Header} from './pages/components/Header'
import {MFooter} from './pages/components/Footer'

function App() {
  const routes = useRoutes()
  return (
    [
      <Header/>,
      <main>
    <Router>
      <div className = 'container'>
        {routes}
      </div>
    </Router>
    </main>,
    <MFooter/>
    ]
  );
}

export default App;
