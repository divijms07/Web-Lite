import React from 'react'
import './Featured.scss'


const Featured = () => {
        return (
        <div className="featured">
            <div className="container">
                <div className="left">
                <h1>
                Find the perfect <span>freelance</span> & <span>learning </span>services here!
                </h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Try "building mobile app"' />
                </div>
            <button>Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Web Design</button>
                <button>WordPress</button>
                <button>Logo Design</button>
            </div>
            </div>
                <div className="right">
                    <img src="./img/mans.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured


