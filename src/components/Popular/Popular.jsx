import React from 'react'
import './Popular.css';
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img from "../../assets/London.jpg"
import img2 from "../../assets/dubai.jpg"
import img3 from "../../assets/machu-peru.jpg"
import img4 from "../../assets/milan.jpg"


const data=[
 { id:1,
   imgSrc:img,
   destTitle:'London',
   location:'UK',
   grade:'CULTURAL RELAX'
},
{
  id:2,
   imgSrc:img3,
   destTitle:'Machu Picchu',
   location:'Peru',
   grade:'CULTURAL RELAX'
},
{ id:3,
  imgSrc:img2,
  destTitle:'Dbai',
  location:'Emirates',
  grade:'CULTURAL RELAX'
},
{
 id:4,
  imgSrc:img4,
  destTitle:'Milan',
  location:'Italy',
  grade:'CULTURAL RELAX'
}
]

const Popular = () => {
  return (
    <section className='popular section container'>
<div className="secContainerPopular">
  <div className='secheader flex'>
    <div className="textDiv">
      <h2 className="secTitle">Popular Destination
      </h2>
      <p>From historical cities to natural specteculars, come see the best of the world!</p>

      </div>
      <div className="iconsDiv flex">
        <BsArrowLeftShort className="icon leftIcon"/>
        <BsArrowRightShort className="icon"/>
      </div>
  </div>
  <div className="mainContentPopular">
    {data.map(post=>(
        <div className="singleDestination" key={post.id}>
      <div className="destImage">
        <img src={post.imgSrc} alt="Image title" />
        <div className="overlayInfo">
          <h3>{post.destTitle}</h3>
          <p>{post.location}</p>
          <BsArrowRightShort className="icon"/>
        </div>
      </div>
      <div className="destFooter">
        <div className="number">
          0{post.id}
        </div>
        <div className="destText flex">
          <h6>{post.location}</h6>
          <span className="flex">
            <span className="dot">
              <BsDot className="icon"/>Dot
            </span>
          </span>
        </div>
      </div>
    </div>
      ))}
  </div>
</div>
    </section>
  )
}

export default Popular
