import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./images/Petflix_Logo.png"; //changed from server image to local image
//isScrolled now takes the information from netflix.js
const TopNav = ({ isScrolled }) => {
  const navLinks = [
    { name: "Home", link: "/" },
    {
      /*this will all display at the top like tab buttons*/
    },
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
    .scrolled{
        display: flex;
        background-color: black; {/*when scroll is above zero this is triggered and will show a black dropdown bar UI*/}
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
            
        }
    }
`;

export default TopNav;
