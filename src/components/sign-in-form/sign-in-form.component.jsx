import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields ={
    email:'',
    password: ''
}
const SignInForm = () => {
    const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email,password} = formFields;
    const resetFormFields =()=>{
        setFormFields(defaultFormFields)
    }
    const handleSubmit=async(event)=>{
        event.preventDefault();
        try {
            dispatch(emailSignInStart(email, password))

            resetFormFields()
        } catch (error) {
            switch(error.code){
                case 'auth/user-not-found':
                    alert("This user is not exists")
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect Password')
                    break;
                default:
                    alert(error)
            }
        }
    }
    const handleChange = (event)=>{
        const {name, value}= event.target;
        setFormFields({...formFields, [name]: value})
    }
    const signInWithGoogle = async()=>{
        dispatch(googleSignInStart());
    } 
    return (
        <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
    );
};

export default SignInForm;