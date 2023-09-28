import React from 'react'
import { Link } from 'react-router-dom';
import './ProjectCard.scss';

const ProjectCard = ({item}) => {
  return (
    <div className="projectCard">
      <Link to="/" >
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
        </div>
        <div className="texts">
          <h2>{item.cat}</h2>
          <span>{item.username}</span>
        </div>
      
      </Link>
    </div>
  )
}

export default ProjectCard