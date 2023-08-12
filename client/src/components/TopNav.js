import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./images/Petflix_Logo.png"; //changed from server image to local image
//isScrolled now takes the information from netflix.js

/*this will all display at the top like tab buttons*/
const TopNav = ({ isScrolled }) => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="links">
            {/* name and link from line 9 */}
            {navLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  <Link to={link}> {name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rightSide">
          <button>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
    .notScroll{
        display: flex;
    }
    /*when scroll is above zero this is triggered and will show a black dropdown bar UI*/
    .scrolled{
        display: flex;
        background-color: black; 
    }
    nav{
        position: sticky;
        top: 0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0.4rem;
        align-items: center;
        transition : 0.3s ease-in-out;
        .leftSide{
            display: flex;
            align-items: center;
            gap: 2rem;
        }
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 10rem;
            height: 2rem;
        }
    }
    .links{
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li{
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
`;

export default TopNav;
