import React,{ useState } from 'react'
import './styles.scss'
import Button from './../forms/Button'
import {singinWithGoogle, auth} from './../../firebase/utils'
import FormInput from './../forms/Button/FormInput'
import {withRouter} from 'react-router-dom'


const SignIn = props => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    
    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    
    const handleSubmit = async e => {
        e.preventDefault();
        

        try{

            await auth.signInWithEmailAndPassword(email, password)
            resetForm();
            props.history.push('/')

        } catch(err){
            // console.log(err);
        }
    }


        return (
            <div className="signin">
            <div className='wrap'>
                <h2>
                    Ingresar
                </h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}>

                        <FormInput   
                            type="email"
                            name="email"    
                            value={email}
                            placeholder="Email" 
                            handleChange = {e=>setEmail(e.target.value)}
                        />
                         <FormInput   
                            type="password"
                            name="password"    
                            value={password}
                            placeholder="Constraseña" 
                            handleChange = {e=>setPassword(e.target.value)}
                        />

                        <Button type="submit" >
                            Ingresar
                        </Button>

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
    


export default withRouter(SignIn);