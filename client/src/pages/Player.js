import React from 'react'
import styled from 'styled-components'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
//#will need to change line 15 video to video of cats and also update the banner line in Netflix.js line 33
const Player = () => {
  const navigate = useNavigate()
  return (
    <PlayContainer>
      <div className='player'>
        <div className='backArrow'>
          <BsArrowLeft onClick={()=> navigate (-1)}/>
        </div>
      </div>
      <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
      autoPlay loop controls
      />
    </PlayContainer>
  )
}

const PlayContainer = styled.div `
//=may need to change position on line25 
    .player{
      position: absolute;
      width: 100vw;
      height: 100vh;
      .backArrow{
        position: absolute;
        padding: 2rem;
        z-index: 1;
        svg{
          font-size: 3rem;
          cursor: pointer;
          color: white;
        }
      }
      video{
        height: 100%;
        width: 100%;
      }
    }
`

export default Player