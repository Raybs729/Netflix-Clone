//below are imports from external libraries
import React, { useState } from "react";
import styled from "styled-components";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

//below are imports I implemented 
import {firebaseAuth} from "../utils/Firebase-config";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState ({email: "", password: ""}) //*inital state of email field should be empty and same for password (stops password field from showing data already)

  const navigate = useNavigate();

  const handleSignIn = async() => {
    try{
      const {email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password) //createUser... is coming from firebase/auth
    } catch(error) {
      console.log(error)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=> { //this will check current user that signed in and once they sign in it will redirect user to homepage
    if(currentUser) navigate('/') //this indicates the current user will be redirected to homepage
  })

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to Watch? Enter your email to create or restart your membership.
            </h6>
          </div>
          <div className="form">
            {
              showPassword ? (<input type="password" placeholder="password" name="password" value={formValues.password} onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value})}/>) : //this will grab whatever password user inputs into the input field
              
              (<input type="email" placeholder="email address" name="email" value={formValues.email} onChange={(e)=>setFormValues({
                ...formValues, [e.target.name]: e.target.value})}/>)
            }
            {
              !showPassword ? (<button onClick = {() => setShowPassword(true)}>Get Started</button>) : (<button onClick={handleSignIn}>Sign Up</button>) //I need to call the handle signup function when the sign in button is clicked.
            }

          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.75);
    height: 110vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text{
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 2rem;
      color: white;
    }
    h1{
      padding: 0.25rem;
    }
    h4{
      margin-top: -1.5rem;
    }
    h6{
      margin-top: -1.5rem;
    }
    .form{
      display: grid;
      width: 60%;
      align-items: center;
      margin-left: 10rem;
      grid-template-columns: ${({showPassword})=>showPassword ? "1fr 1fr" : "1fr 1fr"} ;
      input{
        color: black;
        padding: 1.5rem;
        font-size: 1.2rem;
        width: 45rem;
        &:focus{
          outline: red;
        }
      }
      button{
        padding: 0.5rem 1rem;
        background-color: red;
        border: none;
        cursor: pointer;
        color: white;
        font-size: 1.05rem;
        height: 4.6rem;
        width: 10rem;
      }
    }
  }
`;

export default SignUpPage;
