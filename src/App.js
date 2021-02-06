import React,{ useEffect } from 'react';
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import {auth, handleUserProfile} from './firebase/utils'
import {setCurrentUser} from './redux/User/user.actions'


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



const App = props => {
  
  const { setCurrentUser, currentUser } = props;

  useEffect(()=> {
    const authListener = auth.onAuthStateChanged( async userAuth =>{
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            
          })
        })
      }
      setCurrentUser(userAuth)

    })
   
    return () => {
      authListener();
    }


  }, [])


    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} /> 
        <Route path= "/registrarse" render={() => (
          <MainLayouts>
            <Registration />
          </MainLayouts>
        )} />
          <Route path= "/login" 
            render={() => (
            <MainLayouts>
              <Login />
            </MainLayouts>
          )} />
          <Route path= "/dashboard" render={() => (
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
  


const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,

});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)



       