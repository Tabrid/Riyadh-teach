import React, { useContext, useState }  from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/UserContext';
import Button from 'react-bootstrap/Button';


import './Signup.css'

const Signup = () => {

  const [error,setError] = useState(null);

  const {createUser,LoginWithGoogle} = useContext(AuthContext);




const handleSubmit = (event) =>{
event.preventDefault();
const form = event.target;
const email = form.email.value;
const password = form.password.value;
const confirm = form.confirm.value;
console.log(email , password ,confirm);


if(password.length < 6){
  setError('password should be 6 character or more.');
  return;
}

if(password  !== confirm){

  setError('Your Password did not match');
  return;
}
createUser(email,password)
.then(result => {
 const user = result.user;
 console.log(user);
 form.reset();

})
.catch(error => console.error(error))
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
      <h2 className='form-title'> Signup</h2>
      <form onSubmit={handleSubmit} >
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" required/>

        </div>
        <div className='form-control'>
          <label htmlFor='password'>Password</label>
          <input type="password" name="password" required/>
        </div>
        <div className='form-control'>
          <label htmlFor='confirm'>Confirm Password</label>
          <input type="password" name="confirm" required/>
        </div>
        <input className='btn-submit' type='submit' value='Signup'/>
      </form>
      <p>Already have a account? <Link to='/login'>login</Link></p>
      <p className='text-error'>{error}</p>
      <Button onClick={handleLogin}  variant="outline-primary"> <img className='g-logo' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=''/> </Button>{' '}
    </div>
  )
}

export default Signup;
