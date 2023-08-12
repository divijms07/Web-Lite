import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Quote from '../../components/quote/Quote'
import Slide from '../../components/slide/Slide'

const Home = () => {
    return (
        <div className='home'>
            <Featured/>
            <Quote />
            <Slide />
        </div>
    )
}

export default Home