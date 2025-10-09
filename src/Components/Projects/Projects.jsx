import React from 'react'
import Portfolio from "../../Assets/p.png"
import Cloud from "../../Assets/cloud.png"
import South from "../../Assets/south.png"
import Book from "../../Assets/book.png"
import "./Projects.css"

const Projects = () => {
  return <>
    <section class="projects" id="my projects">
    <div class="projects-grid">


        <div class="project">
            <img src={South} alt="Explore Southern India"/>
            <div class="overlay">
               <h3>Explore Southern India</h3>
                <p>A travel guide web app to explore destinations, culture, and food.</p>
                <a href="https://github.com/Guru-Prasath-M/Explore-Southern-India" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>

       
        <div class="project">
            <img src={Portfolio} alt="Portfolio"/>
            <div class="overlay">
                <h3>Portfolio Website</h3>
                <p>A digital platform showcasing my work, skills, and experience.</p>
                <a href="https://github.com/Guru-Prasath-M/Portfolio" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>
    

        <div class="project">
            <img src={Cloud} alt="E-commerce"/>
            <div class="overlay">
                <h3>Static WebPage</h3>
                <p>Developed a simple webpage using HTML and CSS as part of my Cloud Computing Lab.</p>
                <a href="https://github.com/Guru-Prasath-M/Static_webpage" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>
        

        <div class="project">
            <img src={Book} alt="Doctor Appointment"/>
            <div class="overlay">
                <h3>BookSky</h3>
                <p>BookSky is a web-based platform where users can explore, search, and read a wide variety of books online in a user-friendly interface.</p>
                <a href="https://github.com/Guru-Prasath-M/BookSky-JS" target="_blank"><button className='btn1'>View Project</button></a>
            </div>
        </div>
    </div>
</section>
  </>
}

export default Projects;