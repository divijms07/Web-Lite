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
            </div>
                <div className="right">
                    <img src="./img/mans.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Featured


