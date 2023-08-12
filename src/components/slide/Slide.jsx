import React from 'react'
import './Slide.scss';
import  Slider  from 'infinite-react-carousel';
// import CatCard from '../catCard/CatCard';
// import { cards } from '../../data';


const Slide = () => {
  return (
    <div className="slide">
      <div className="container">
        <Slider dots >
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          {/* {cards.map(card => {
            <CatCard item={card} key={card.id} />
          })} */}
      </Slider>
      </div>
    </div>
  )
}

export default Slide