import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './setup.scss'
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'

//layouts
import MainLayouts from './layouts/MainLayouts'
import HomepageLayout from './layouts/HomepageLayout'


//pages
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" render={()=>(
        <HomepageLayout>
          <Homepage />

        </HomepageLayout>
      )} /> 
      <Route path= "/registrarse" render={()=>(
        <HomepageLayout>
          <Registration />
        </HomepageLayout>
      )} />
      </Switch>
    </div>
  );
}

export default App;
