import React from 'react'
import './Home.css'
import profilepic from '../../../Assets/profilepic.JPG' 

const Home = () => {
  return <>
    <div className='home container'>
        <div className="row">
            <div className="col-6">
                <h1>Hello , I'm GuruPrasath</h1>
                <h3>FrontEnd Developer</h3>
                <a href="/GuruPrasath M Resume .pdf" download="GuruPrasath Resume.pdf">
                <button className='btn'>Download CV</button>
                </a>
            </div>
        </div>

        <div className='col-6 profile-pic'>
            <img src={profilepic} alt="" />
        </div>

    </div>
  </>
}

export default Home;