import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { HiOutlineLanguage } from "react-icons/hi2";
import { PiChats } from "react-icons/pi";
import { IoIosContact } from "react-icons/io";
import "./Navbar.css";
// import { navbarData1 } from "../../data/navbarData1";

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(null);
  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/navbar");
        if (!response.ok) throw new Error("Could not retrieve navbar data.");
        const jdata = await response.json();
        setNavbarData(jdata);
      } catch (err) {
        console.log("Failed to fetch navbar data");
      }
    };
    fetchNavbar();
  }, []);
  return (
    <>
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <div className="site-header__start">
            {/* <nav class="nav">
              <ul>
                <li class="nav__item">
                  <a href="#">Home</a>
                </li>
                <li class="nav__item">
                  <a href="#">About</a>
                </li>
                <li class="nav__item">
                  <a href="#">Services</a>
                </li>
                <li class="nav__item">
                  <a href="#">Solutions</a>
                </li>
                <li class="nav__item">
                  <a href="#">Pricing</a>
                </li>
                <li class="nav__item">
                  <a href="#">Partners</a>
                </li>
                <li class="nav__item">
                  <a href="#">Resources</a>
                </li>
              </ul>
            </nav> */}
            <a href="#" class="brand">
              Oracle | OCI
            </a>
          </div>
          <div className="site-header__middle">
            <ul className="sub-nav">
              {navbarData?.map((item) => (
                <>
                  <li class="">
                    <a href="#">{item}</a>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div class="site-header__end">
            <ul className="sub-nav">
              <li>
                <a href="#">
                  <IoSearchSharp />
                </a>
              </li>
              <li>
                <a>
                  <HiOutlineLanguage />
                </a>
              </li>
              <li>
                <a>
                  <PiChats />
                </a>
              </li>
              <li>
                <a>
                  <span>
                    <IoIosContact />
                    Sign in to Oracle Cloud
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
