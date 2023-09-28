import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import Quote from "../../components/quote/Quote";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";



const Home = () => {
  return (
    <div className="home">
      <Featured />
      <Quote />
      <Slide slidesToshow={5} arrowsScroll={5}>
        { cards.map(card =>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Freelance Talent At Your Fingertips!</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <img className="img-right" src="./img/freelancing.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>eduLance. <i>solutions</i></h1>
            <h1>Solution Designed For Beginners</h1>
            <p>Upgrade to curated experience for learning and upskilling</p>
            
            <div className="title">
              <img src="./img/check.png" alt="" />
              Freedom To Learn Whatever You Want
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Expand Your Career Horizons
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Improvize And Upskill
            </div>
            <button>Explore eduLance Learn</button>
            <div className="item">
              <img
                src=""
                alt=""
                />
            </div>
          </div>
        </div>
      </div>

      <Slide slidesToshow={4} arrowsScroll={4}>
        { projects.map(card =>(
          <ProjectCard key={card.id} item={card}/>
        ))}
      </Slide>

    </div>
  );
};

export default Home;
