import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AppState } from './context'
import { Home, About } from './pages'
import { Navbar } from './components'

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Navbar/>
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home}/>
            <Route path={'/about'} component={About}/>
          </Switch>
        </div>
      </BrowserRouter>
    </AppState>
  );
}

export default App;
