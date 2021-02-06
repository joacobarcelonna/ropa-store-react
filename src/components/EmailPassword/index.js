import React, {Component} from 'react'
import './styles.scss'
import {withRouter} from 'react-router-dom'

import AuthWrapper from './../AuthWrapper'
import FormInput from './../forms/Button/FormInput'
import Button from './../forms/Button'
import { auth } from './../../firebase/utils'


const initialState = {
    email: '',
    errors: [],
};

class EmailPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        };
        this.handleChange = this.handleChange.bind(this);
 }

 handleChange(e) {
     const { name, value } = e.target;
     this.setState({
         [name]: value
     })
 }


 handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const {email} = this.state;

        const config ={
            url: 'http://localhost:3000/login' //tengo que cambiarlo
        }

        await auth.sendPasswordResetEmail(email, config)
        .then(() => {
            this.props.history.push('/login');
        })
        .catch(() => {
            const err = ['Email no encontrado. Prueba de nuevo']
            this.setState({ 
                errors: err 
            });
        })

    }catch(err) {
        //console.log(err);
    }

 }

    render() {

    const { email, errors } = this.state    


    const configAuthWrapper ={
        headline: 'Contraseña Email'
    }

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className="formWrap">
                    {errors.length > 0 &&(
                        <ul>
                            {errors.map((e,index) => {
                                return (
                                    <li key={index}>
                                        {e}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <form onSubmit={this.handleSubmit}>
                    <FormInput 
                     type="email"
                     name="email"
                     value={email}
                     placeholder="Email" 
                     onChange={this.handleChange}
                    />

                    <Button type="submit">
                        Recuperar Contraseña
                    </Button>
                    </form>
                </div>
            </AuthWrapper>
        );
    }
}

export default withRouter(EmailPassword);
