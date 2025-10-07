import React from 'react'
import './About.css'
import profilepic from '../../../src/Assets/profilepic.JPG'

const About = () => {
  return <>
    <div className="container about">
        <div className="about-left">
            <img src={profilepic} alt="" className='about-img'/>
        </div>

        <div className="about-right">
            <h2>I'm GuruPrasath</h2>
            <p>Hi, I’m GuruPrasath, a passionate Full Stack Developer in the making. I recently graduated and I’m currently pursuing a Java Full Stack Development course. Skilled in React.js, Bootstrap, SQL, and MongoDB, I enjoy creating clean and responsive web applications.</p>
        </div>
    </div>
  </>
}

export default About;