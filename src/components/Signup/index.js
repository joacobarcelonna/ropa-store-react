import React,{ useState } from 'react'
import './styles.scss'
import FormInput from './../forms/Button/FormInput'
import Button from './../forms/Button'
import {auth, handleUserProfile} from './../../firebase/utils'
import {withRouter} from 'react-router-dom'

const Signup = props => {
    const [displayName, setDisplayName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') 
    const [errors, setErros] = useState('') 
    const reset = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErros([])

    }

const handleFormSubmit = async event => {
     event.preventDefault();
     

     if (password !== confirmPassword) {
        const err = ['Contraseña no coincide'] 
        setErros(err)
        return;
     }

    try {
        const {user } =  await auth.createUserWithEmailAndPassword (email, password);

        await handleUserProfile(user,{displayName});
        reset();
        props.history.push('/')

    }catch(err) {
        // console.log(err);
    }


}


        return (
            <div className="signup">
                <div className="wrap">
                    <h2>
                        Signup
                    </h2>

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                            return (
                                <li key={index}>
                                {err}
                                </li>
                            );
                            })}
                        </ul>
                        )}
           



            <div className="formWrap"> 

                <form onSubmit={handleFormSubmit}>
                
                <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="nombre completo"
                handleChange ={e => setDisplayName(e.target.value)}
                />
                <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                handleChange ={e => setEmail(e.target.value)}
                />
                <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Contraseña"
                handleChange ={e => setPassword(e.target.value)}
                />
                <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirmar Contraseña"
                handleChange ={e => setConfirmPassword(e.target.value)}
                />
                <Button type="submit">
                    Registrarse
                </Button>

                </form>
                </div>
                </div>
            </div>
            
        );
    }


export default withRouter(Signup);