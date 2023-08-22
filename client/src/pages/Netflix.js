//=this is import from library
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";

//=import from own component
import TopNav from "../components/TopNav";
import FurLockerBG from "../components/assets/FurLockerBackground.jpg";
import { fetchMovies, getGenres } from "../store";
import SliderContainer from "../components/SliderContainer";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false); // ?the initial state of webpage is false since user has not moved up or down (greater than zero will set it to TRUE)

  const navigate = useNavigate();

  const movies = useSelector((state) => state.netflix.movies)

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []); //the second part in [] means it requires something to fire up

  //=this should fire up when component renders
  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
  }); //this genreLoaded does not depend on anything to fire up

  //?below is windows scroll listener. it listens for the onscroll event
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  // console.log(movies)


  //images displayed in the background
  //?on line 19 isScrolled is pass as a prop.
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src={FurLockerBG}
          alt="cat image"
        />{" "}
        {/*change this to ori and cook*/}
        <div className="container">
          <div className="title">
            <h1>The Fur Locker</h1>
            <p> Two brothers. One bomb.</p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              Play
            </button>
            {/*#onclick it navigates to component player (see App.js line 20)*/}
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <SliderContainer movies = {movies}/>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  //goal is to make the hero buttons go ontop of hero banner
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
      height: 90vh;
    }
    img {
      height: 70vh;
      width: 100%;
    }
    //this makes sure words are ontop of hero banner. see line 28
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
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
      .moreBtn {
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
