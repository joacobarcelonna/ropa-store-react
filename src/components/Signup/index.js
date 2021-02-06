import React,{ useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.scss'


import FormInput from './../forms/Button/FormInput'
import Button from './../forms/Button'
import {withRouter} from 'react-router-dom'
import AuthWrapper from './../AuthWrapper'
import {signUpUser} from './../../redux/User/user.actions'



const mapState = ({ user }) => ({
    signInSuccess: user.signInSuccess,
    signUpError: user.signUpError
})



const Signup = props => {
    const { signInSuccess, signUpError } = useSelector(mapState)
    const dispatch = useDispatch();
    const [displayName, setDisplayName] = useState('') 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('') 
    const [errors, setErrors] = useState('') 
   
   useEffect(() => {
        if(signInSuccess){
            reset();
            props.history.push('/')
        }
   },[signInSuccess])

   useEffect(() => {
        if(Array.isArray(signUpError) &&  signUpError.length > 0){
            setErrors(signUpError);
        }
   },[signUpError])
   
    const reset = () => {
        setDisplayName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors([])

    }




const handleFormSubmit = event => {
     event.preventDefault();
     dispatch(signUpUser({
         displayName,
         email,
         password,
         confirmPassword
     }))


}

    const configAuthWrapper ={
        headline: 'Registrarse'
    }


        return (


            <AuthWrapper {...configAuthWrapper}>
                 <div className="formWrap"> 

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
    
            </AuthWrapper>
            
        );
    }


export default withRouter(Signup);

