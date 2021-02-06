import React,{ useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.scss'
import Button from './../forms/Button'
import {singinWithGoogle} from './../../firebase/utils'
import FormInput from './../forms/Button/FormInput'
import {withRouter} from 'react-router-dom'
import { signInUser } from './../../redux/User/user.actions'



const mapState = ({ user }) => ({ 
    signInSuccess: user.signInSuccess
})


const SignIn = props => {
    const {signInSuccess} = useSelector(mapState)
    const  dispatch = useDispatch();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        if (signInSuccess){
            resetForm();
            props.history.push('/');
            }
    },[signInSuccess])

    
    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({ email, password }))
  
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