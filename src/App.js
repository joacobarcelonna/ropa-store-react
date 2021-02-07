import React,{ useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import {checkUserSession} from './redux/User/user.actions'
import {useDispatch} from 'react-redux'

// hoc
import WithAuth from './hoc/withAuth'

//layouts
import MainLayouts from './layouts/MainLayouts'
import HomepageLayout from './layouts/HomepageLayout'


//pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import './setup.scss'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Recovery from './pages/Recovery'

const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
        />
        <Route path="/registrarse" render={() => (
          <MainLayouts>
            <Registration />
          </MainLayouts>
        )} />
        <Route path="/login"
          render={() => (
            <MainLayouts>
              <Login />
            </MainLayouts>
          )} />
        <Route path="/recovery" render={() => (
          <MainLayouts>
            <Recovery />
          </MainLayouts>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayouts>
              <Dashboard />
            </MainLayouts>
          </WithAuth>
        )} />
      </Switch>
    </div>
  );
}

export default App;