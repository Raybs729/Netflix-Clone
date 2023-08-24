import React, { useState } from "react"; //useState is a function so i need to import it
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//! All coming from react icons
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
//! imported images and videos
import CatLocker from '../components/assets/The_Cat_Locker.jpg'; //@FINALLLYYYYYYYY!!!! file path for images and videos used by pages must be in components folder then assets folder. Must read documentation for further clarification.
import FurLocker from '../components/assets/TheFurLocker.mp4';

export default React.memo(function Card  ({movieData}) {
  const [onHovered, setOnHovered] = useState(false);
  const navigate = useNavigate();
  return (
    //wrapping up entire application with card container
    //line18 will show the movie card. note will replace with ori and cookie photo
    //``when user places mouse over card it will set setOnHovered to true (line18) it is initially false (line13)
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src={FurLocker}
              autoPlay
              loop
              controls
            />
          </div>
          <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>{movieData.name}</h3>
            <div className="icons">
                <div className="controls">
                    <IoPlayCircleSharp title="play" onClick={() => navigate ("/player")}/>
                    <RiThumbUpFill title="like"/>
                    <RiThumbDownFill title="Dislike"/>
                    <BsCheck title="Remove from List"/>
                    <AiOutlinePlus title="Add to my List"/>
                </div>
                <div className="info">
                    <BiChevronDown title="More Info"/>
                </div>
            </div>
            <div className="genres">
                <ul>
                    {movieData.genres.map((genres)=>{
                      <li>{genres}</li>
                    })}
                </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
}) ;

const CardContainer = styled.div`
margin-top: 1rem; //space for movie card and background image
  max-width: 230px;
  width: 230px;
  height: 100%;
  cursor: pointer;
  position: relative;
  img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
  .hover{
    z-index: 99%;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transition: 0.3s ease-out;
    .image-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }

    }
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        .movieName{
            color: white;
        }
    }
    .icons{
        display: flex;
        justify-content: space-between;
        .controls{
            display: flex;
            gap: 0.5rem;
        }

    svg{
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
            color: #b8b8b8;
        }
    }
    }
    .genres{
        display: flex;
        color: white;
        ul{
            display: flex;
            gap: 1rem;
            li{
                padding-right: 0.7rem;
                &:first-of-type{
                    list-style-type: none;
                }
            }
        }
    }
  }
`;

