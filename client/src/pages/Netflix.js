import React, { useState } from "react";
import TopNav from "../components/TopNav";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false); // ?the initial state of webpage is false since user has not moved up or down (greater than zero will set it to TRUE)

  //?below is windows scroll listener. it listens for the onscroll event
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled);

  //images displayed in the background
  //?on line 19 isScrolled is pass as a prop.
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img className="background-image"
          src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg"
          alt="hero image"
        />{" "}
        {/*change this to ori and cook*/}
        <div className="container">
          <div className="title">
            <h1>Super man</h1>
            <p>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="buttons">
            <button className="playBtn">Play</button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  //goal is to make the hero buttons go ontop of hero banner
  .hero {
    position: relative;
    .background-image{
      filter: brightness(40%)
    }
    img {
      height: 70vh;
      width: 100%;
    }
    //this makes sure words are ontop of hero banner. see line 28
    .container{
      position: absolute;
      bottom: 1rem;
      .title{
        h1{
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p{
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: 'lexend Deca', sans-serif;
          color: white;
        }
      }
      .buttons{
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn{
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`;

export default Netflix;
