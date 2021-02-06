import React,{Component} from 'react';
import {connect} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import {auth, handleUserProfile} from './firebase/utils'
import {setCurrentUser} from './redux/User/user.actions'


//layouts
import MainLayouts from './layouts/MainLayouts'
import HomepageLayout from './layouts/HomepageLayout'


//pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import './setup.scss'
import Login from './pages/Login'




class App extends Component {
  
  authListener = null;


   componentDidMount(){
     const { setCurrentUser } = this.props;

    this.authListener = auth.onAuthStateChanged( async userAuth =>{
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
   }

   componentWillUnmount(){
    this.authListener();
   }


  render() {

    const { currentUser } = this.props;

    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} /> 
        <Route path= "/registrarse" render={() => currentUser ? <Redirect to="/" />:(
          <MainLayouts>
            <Registration />
          </MainLayouts>
        )} />
          <Route path= "/login" 
            render={() => currentUser ? <Redirect to="/" /> : (
            <MainLayouts>
              <Login />
            </MainLayouts>
          )} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,

});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps,mapDispatchToProps)(App)