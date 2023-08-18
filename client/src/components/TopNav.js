import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/assets/Petflix_Logo.png'; //changed from server image to local image
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/Firebase-config";



//isScrolled now takes the information from netflix.js
/*this will all display at the top like tab buttons*/
//?isScrolled is recieved from Netflix.js and destructers it
const TopNav = ({ isScrolled }) => {
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate();
  
  //@this indicates that if theres no current user will be redirected to homepage
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login"); 
  });

  //?on line 20 if isScrolled is true then it goes to a class name "scrolled" ELSE it goes to classname notScroll
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
          <button onClick={() => signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  //?when scroll is at zero this is active (no black navbar)
  .notScroll {
    display: flex;
  }
  //?when scroll is above zero this is triggered and will show a black dropdown bar UI *see line 20 again
  .scrolled {
    display: flex;
    background-color: black;
  }
  //!may need to change img size
  nav {
    position: sticky;
    top: 0;
    height: 6rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.04rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .leftSide {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-left: 5rem;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 10rem;
        height: 3rem;
      }
    }
    .links {
      display: flex;
      list-style-type: none;
      gap: 3rem;
      li {
        a {
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  .rightSide {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button {
      background-color: red;
      border: none;
      cursor: pointer;
      border-radius: 50%;
    }
    &:focus {
      outline: none;
    }
    svg {
      color: white;
      font-size: 2rem;
    }
  }
`;

export default TopNav;
