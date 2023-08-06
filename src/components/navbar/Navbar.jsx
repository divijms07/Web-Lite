import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [active,setActive] = useState(false);
    const [open,setOpen] = useState(false);


    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }

    useEffect(() => {
        window.addEventListener("scroll",isActive);

        return () => {
            window.removeEventListener("scroll",isActive);
        }
    },[]);

    const currentUser={
        id:1,
        username:"John David",
        isSeller:"true"
    }

    return (
        <div className={active ? "navbar active" : "navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to='/'className='link'>
                    <span className='text'>eduLance</span>
                    </Link>
                    <span className='dot'>.</span>
                </div>
                <div className="links">
                    <span>Learn</span>
                    <span> Explore</span>
                    <span> English</span>
                    <span> Sign In</span>
                    {!currentUser?.isSeller && <span> Become A Seller</span>}
                    {!currentUser && <button> Join</button>}
                    {currentUser && (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="data:image/png;base64,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" alt="" />
                            <span>{currentUser?.username}</span>
                            { open && (<div className="options">
                                {currentUser?.isSeller && (
                                    <>
                                    <Link className='link' to="/myGigs">Gigs</Link>
                                    <Link className='link' to="/add">Add New Gig</Link>
                                    </>    
                                )}
                                <Link className='link'to="/orders">Orders</Link>
                                <Link className='link'to="/messages">Messages</Link>
                                <Link className='link'to="/">LogOut</Link>

                            </div>
                            )}
                        </div>
                    )}
                
                
                
                </div>
            </div>

        {   active && (
            <>
            <hr />
            <div className="menu">
                <span>TEST</span>
                <span>TEST2</span>
            </div>
            </>
        )}

        </div>
    )
}

export default Navbar