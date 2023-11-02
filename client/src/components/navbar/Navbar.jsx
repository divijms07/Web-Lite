import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

const Navbar = () => {
    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive);

        return () => {
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    const currentUser=JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async () => {
        try {
          await newRequest.post("/auth/logout");
          localStorage.setItem("currentUser", null);
          navigate("/");
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
          <div className="container">
            <div className="logo">
              <Link className="link" to="/">
                <span className="text">eduLance</span>
              </Link>
              <span className="dot">.</span>
            </div>
            <div className="links">
            <Link className="link" to="/gigs?cat=design">
              <span>Explore Gigs</span>
            </Link>
            <Link className="link" to="/team">
              <span>Team</span>
            </Link>
            <Link className="link" to="/contact">
              <span>Contact</span>
            </Link>
            <Link className="link" to="/register">
              {!currentUser?.isSeller && <span>Become a Seller</span>}
              </Link>
              {currentUser ? (
                <div className="user" onClick={() => setOpen(!open)}>
                  <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                  <span>{currentUser?.username}</span>
                  {open && (
                    <div className="options">
                      {currentUser.isSeller && (
                        <>
                          <Link className="link" to="/mygigs">
                            Gigs
                          </Link>
                          <Link className="link" to="/add">
                            Add New Gig
                          </Link>
                        </>
                      )}
                      <Link className="link" to="/orders">
                        Orders
                      </Link>
                      <Link className="link" to="/messages">
                        Messages
                      </Link>
                      <Link className="link" onClick={handleLogout}>
                        Logout
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="link">Sign in</Link>
                  <Link className="link" to="/register">
                    <button>Join</button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {(active || pathname !== "/") && (
            <>
              <hr />
              <div className="menu">
                <Link className="link menuLink" to="/gigs?cat=design">
                  Graphics & Design
                </Link>
                <Link className="link menuLink" to="/gigs?cat=animation">
                  Video & Animation
                </Link>
                <Link className="link menuLink" to="/gigs?cat=web">
                  Web Development
                </Link>
                <Link className="link menuLink" to="/gigs?cat=ai">
                  AI Services
                </Link>
              </div>
              <hr />
            </>
          )}
        </div>
      );
    }
    
    export default Navbar;