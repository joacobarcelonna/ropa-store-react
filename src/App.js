import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {auth} from './firebase/utils'


//layouts
import MainLayouts from './layouts/MainLayouts'
import HomepageLayout from './layouts/HomepageLayout'


//pages
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import './setup.scss'
import Login from './pages/Login'


const initialState = {
  currentUser: null,
}


class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
      ...initialState,
    }
  }

  authListener = null;


   componentDidMount(){
    this.authListener = auth.onAuthStateChanged(userAuth =>{
      if (!userAuth) {
        this.setState({
          ...initialState
        })
      }

      this.setState({
        currentUser: userAuth
      })
    })
   }

   componentWillUnmount(){
    this.authListener();
   }




  render(){

    const {currentUser} = this.setState;

    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={()=>(
          <HomepageLayout currentUser = {currentUser}>
            <Homepage />
  
          </HomepageLayout>
        )} /> 
        <Route path= "/registrarse" render={()=>(
          <MainLayouts currentUser = {currentUser} >
            <Registration />
          </MainLayouts >
        )} />
          <Route path= "/login" render={()=>(
          <MainLayouts currentUser = {currentUser}>
            <Login />
          </MainLayouts >
        )} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
