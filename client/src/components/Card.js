import React, { useState } from "react"; //useState is a function so i need to import it
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//! All coming from react icons
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = () => {
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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCor4AIV__zuNlgGZTSr424NdUudWBQKBrA&usqp=CAU"
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
            />
          </div>
          <div className="info-container">
            <h3 className="movieName" onClick={() => navigate("/player")}>Red Notice</h3>
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
            <div className="genre">
                <ul>
                    <li>Action</li>
                    <li>Action</li>
                    <li>Action</li>
                    <li>Action</li>
                </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  /* max-width: 230px; */
  background-color: red;
`;

export default Card;
