import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Button from 'react-bootstrap/Button';

import './Login.css'

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const {LoginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
 const location = useLocation()
 const from = location.state?.from?.pathname|| '/';


  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from , {replace : true})
    }) 
    .catch(error => console.error(error));
  }

  const handleLogin = (event) =>{
    event.preventDefault();
    LoginWithGoogle()
    .then(result => {
      const user = result.user;
      console.log(user);
  
  
    })
    .catch( error => {
      console.error('error:',error);
    })
  
  
  }


  return (
    <div className='form-container'>
      <h2 className='form-title'> Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" required/>

        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" required/>
        </div>
        <input className='btn-submit' type='submit' value='Login'/>
      </form>
      <p>New here? <Link to='/signup'>create a New account</Link></p>
      <Button className='mt-5 ml-24 w-1/2' onClick={handleLogin}  variant="outline-primary"> <img className='g-logo w-1/2' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=''/> </Button>{' '}
    </div>
  )
 }
export default Login;
