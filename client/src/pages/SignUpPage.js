import React, { useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";

const SignUpPage = () => {
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
            <input type="email" placeholder="email address" name="email" />
            <input type="password" placeholder="password" name="password" />
            <button>Get Started</button>
            <button>Sign Up</button>
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
    height: 100vh;
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
        width: 10rem;
      }
    }
  }
`;

export default SignUpPage;
