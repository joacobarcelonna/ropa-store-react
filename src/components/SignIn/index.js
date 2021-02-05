import React,{Component} from 'react'
import './styles.scss'
import Button from './../forms/Button'
import {singinWithGoogle} from './../../firebase/utils'


class SignIn extends Component {
    
    handleSubmit = async e => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div className="signin">
            <div className='wrap'>
                <h2>
                    log in 
                </h2>
                <div className="formWrap">
                    <form onSubmit={this.handleSubmit}>
                        <div className="socialSignin">
                            <div className='row'>
                                <Button onClick={singinWithGoogle}> 
                                    Iniciar Sesion con Google
                                </Button>
    
                            </div>
    
                        </div>
                    </form>
                </div>
    
            </div>
    
            </div>
        )
    }
    
}

export default SignIn;