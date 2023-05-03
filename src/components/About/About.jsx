import React from 'react'
import './About.css';

import img1 from "../../assets/forest.jpg"
import img2 from "../../assets/mountain.jpg"
import img3 from "../../assets/hiking.jpg"

import video from "../../assets/video.mp4"

const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h2 className="title">
          Why Hiking?
        </h2>
        <div className="mainConten container grid">
          <div className="singleItem">
            <img src={img1} alt="Image" className='image-item' />
            <h3>100+ Mountains</h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of
daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={img2} alt="Image" className='image-item' />
            <h3>100+ Hikings</h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of
daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="Image"  className='image-item'/>
            <h3>20000+ Customers</h3>
            <p>
            Research shows that a chance to break away from the normal rhythms of
daily life reduces stress and improves health and well-being.
            </p>
          </div>
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>Wonderful House experience nin there!</h2>
              <p>
              The Adventure subranking is based on an
              equally weighted average of scores from
              five country.
              </p>
            </div>
            <div className="cardVideo">
              <video>
              <source src={video} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
