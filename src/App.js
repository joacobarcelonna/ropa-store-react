import React,{ useEffect } from 'react';
import {Switch, Route} from 'react-router-dom'
import {checkUserSession} from './redux/User/user.actions'
import {useDispatch} from 'react-redux'


//components

import AdminToolbar from './components/AdminToolbar'


// hoc
import WithAuth from './hoc/withAuth'
import WithAdminAuth from './hoc/withAdminAuth'

//layouts
import MainLayouts from './layouts/MainLayouts'
import HomepageLayout from './layouts/HomepageLayout'
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';


//pages
import Cart from './pages/Cart';
import Search from './pages/Search';
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import './setup.scss'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Recovery from './pages/Recovery'
import Admin from './pages/Admin'
import ProductDetails from './pages/ProductDetails';


const App = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <AdminToolbar />
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )}
        />
        <Route exact path="/search" render={() => (
          <MainLayouts>
            <Search />
          </MainLayouts>
        )} />
        <Route path="/search/:filterType" render={() => (
          <MainLayouts>
            <Search />
          </MainLayouts>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayouts>
            <ProductDetails />
          </MainLayouts>
        )} />
        <Route path="/cart" render={() => (
          <MainLayouts>
            <Cart />
          </MainLayouts>
        )} />
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
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
         <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        
      </Switch>
    </div>
  );
}

export default App;