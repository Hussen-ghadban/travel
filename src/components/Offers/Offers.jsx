import React from 'react'
import './Offers.css';
import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import img1 from "../../assets/china.jpg"
import img2 from "../../assets/TajMahal.jpg"
import img3 from "../../assets/London.jpg"

const Offer=[
  {
    id:1,
    imgSrc:img1,
    desTitle:'Machu picchu',
    location:'Peru',
    price:'$7,000',
  },
  {
    id:2,
    imgSrc:img2,
    desTitle:'Guanajuato',
    location:'Mexico',
    price:'$2,000',
  },
  {
    id:3,
    imgSrc:img3,
    desTitle:'Angkor Wat',
    location:'Cambodia',
    price:'$4,400',
  }
]


const Offers = () => {

  return (
   <section className='offer container section'>
    <div className="secContainer">
      <div className="secIntro">
        <h2 className="secTitle">Special Offers</h2>
        <p>from historical cities to natural specteculars, come see the best of the wordl!</p>
      </div>
      <div className="mainContent">
        {
          Offer.map(post=>(
            <div className="singleOffer">
          <div className="destImage">
            <img src={post.imgSrc} alt={post.destTitle} />
            <span className="discount">
              30% off
            </span>
          </div>
          <div className="offerBody">
            <div className="price flex">
              <h4>{post.price}</h4>
              <span className="status">
                For Rent
              </span>
            </div>
            <div className="amenities flex">
              <div className="singleAmenity flex">
                <MdKingBed className="icon"/>
                <small>2 Beds</small>
              </div>
              <div className="singleAmenity flex">
                <MdBathtub className="icon"/>
                <small>1 Bath</small>
              </div>
              <div className="singleAmenity flex">
                <FaWifi className="icon"/>
                <small>Wifi</small>
              </div>
              <div className="singleAmenity flex">
                <MdAirportShuttle className="icon"/>
                <small>shuttle</small>
              </div>
            </div>
            <div className="location flex">
              <MdLocationOn className="icon"/>
              <small>450 Vine #110, {post.location}</small>
            </div>
            <button className="btn flex">
              View Details
              <BsArrowRightShort className="icon"/>
            </button>
          </div>
        </div>
          ))
        }
      </div>
      </div>
   </section>
  )
}

export default Offers
