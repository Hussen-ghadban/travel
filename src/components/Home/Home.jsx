import React from 'react'
import './Home.css';


const Home = () => {
  return (
         <section className='home'>
          <div className="secContainer container">
            <div className="homeText">
              <h1 className="title">
                Plan your Trip with Travel Dot 
              </h1>
              <p className="subTitle">
                travel to your favorite city with respectful of the environement
              </p>
              <button className="btn">
                <a href="#">Explore Now</a>
              </button>
            </div>
            <div className="homeCard">
              <div className="locationDiv">
                <label htmlFor='location'>Location</label>
                <input type="text" className='input' placeholder='Dream Destination' />
              </div>

              <div className="distDiv">
                <label htmlFor='distance'>Distance</label>
                <input type="text" className='input' placeholder='11/Meters' />
              </div>

              <div className="priceDiv">
                <label htmlFor='price'>Price</label>
                <input type="text" className='input' placeholder='$140-$500' />
              </div>
              <button className='btn'>
                search
              </button>
            </div>
            </div>
         </section>
  )
}

export default Home
