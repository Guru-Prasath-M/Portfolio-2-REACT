import React from 'react'
import HTML from "../../Assets/HTML.jpg"
import CSS from "../../Assets/CSS.jpg"
import BOOTSTRAP from "../../Assets/Bootstrap.jpg"
import JS from "../../Assets/JS.jpg"
import REACTJS from "../../Assets/React.jpg"
import MYSQL from "../../Assets/Mysql.jpg"
import MONGODB from "../../Assets/MongoDB.jpg"
import GITHUB from "../../Assets/Github.jpg"
import NODEJS from "../../Assets/Node JS.jpg"
import FIGMA from "../../Assets/Figma.jpg"
import "./Skills.css"

const Skills = () => {
  return <>
    <div className="skills">
        <div className="gallery">
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={BOOTSTRAP} alt="" />
            <img src={JS} alt="" />
            <img src={REACTJS} alt="" />
            <img src={GITHUB} alt="" />
        </div>

        <div className='gallery1'>
          <img src={NODEJS} alt="" />
          <img src={MYSQL} alt="" />
          <img src={MONGODB} alt="" />
          <img src={FIGMA} alt="" />
          
        </div>
    </div>
  </>
}

export default Skills;