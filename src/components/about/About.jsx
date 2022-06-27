import React from 'react'
import './about.css'
import ME1 from '../../assets/me1-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME1} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3 Months Working</small>
            </article>

            <article className='about_card'>
              <FiUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>100+ Employee</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className="about_icon"/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores, similique modi quam quo eligendi minus, velit impedit quaerat repudiandae odit. Veritatis culpa assumenda officia facilis laborum reiciendis in temporibus?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
