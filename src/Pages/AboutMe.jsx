import React from 'react'
import "./AboutMe.css"
import SkillBar from '../Components/SkillBar';
import 'react-circular-progressbar/dist/styles.css';

// import { GrLinkedinOption } from 'react-icons/gr';
// import { FiGithub } from 'react-icons/fi';
// import { FiTwitter } from 'react-icons/fi';
// import { FiFacebook } from 'react-icons/fi';
// import { FiInstagram } from 'react-icons/fi';
// import { ImWhatsapp } from 'react-icons/im';

import rowLinkedin from "../Images/Social icons/Linkedin.svg"
import rowGithub from "../Images/Social icons/Github.svg"
import rowTwitter from "../Images/Social icons/Twitter.svg"
import rowFacebook from "../Images/Social icons/Facebook.svg"
import rowInstagram from "../Images/Social icons/Instagram.svg"
import rowWhatsapp from "../Images/Social icons/Whatsapp.svg"


import html from "../Images/logo/html.svg"
import css from "../Images/logo/css.svg"
// import javascript from "../Images/logo/javascript.svg"
import react from "../Images/logo/react.svg"
import node from "../Images/logo/node.svg"
import express from "../Images/logo/express.svg"
import mongodb from "../Images/logo/mongodb.svg"
import native from "../Images/logo/react-native.svg"

const AboutMe = () => {

  const Linkedin = <img src={rowLinkedin} />
  const Github = <img src={rowGithub} />
  const Twitter = <img src={rowTwitter} />
  const Facebook = <img src={rowFacebook} />
  const Instagram = <img src={rowInstagram} />
  const Whatsapp = <img src={rowWhatsapp} />

  const SkillData = [
    {
      percentage: 92,
      styles: {
        textColor: "red",
        pathColor: "#F16529",
      },
      // imgsrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      imgsrc: html,
      alt: "HTML"
    },
    {
      percentage: 90,
      styles: {
        textColor: "red",
        pathColor: "#2965F1",
      },
      // imgsrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      // imgsrc:"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      imgsrc: css,
      alt: "CSS"
    },
    {
      percentage: 85,
      styles: {
        textColor: "red",
        pathColor: "#FFDA3E",
      },
      imgsrc: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg",
      // imgsrc: javascript,
      alt: "JavaScript"
    },
    {
      percentage: 80,
      styles: {
        textColor: "red",
        pathColor: "#01D0F7",
      },
      // imgsrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      imgsrc: react,
      alt: "React"
    },
    {
      percentage: 70,
      styles: {
        textColor: "red",
        pathColor: "#3C833A",
      },
      // imgsrc: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      imgsrc: node,
      alt: "Node"
    },
    {
      percentage: 80,
      styles: {
        textColor: "red",
        pathColor: "",
      },
      // imgsrc: "https://symbols.getvecta.com/stencil_79/87_expressjs.98a8557541.svg",
      imgsrc: express,
      alt: "Express"
    },
    {
      percentage: 65,
      styles: {
        textColor: "red",
        pathColor: "#7DCB3C",
      },
      // imgsrc: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      imgsrc: mongodb,
      alt: "MongoDB"
    },
    {
      percentage: 30,
      styles: {
        textColor: "red",
        pathColor: "#363E54",
      },
      imgsrc: native,
      alt: "React Native"
    },

  ]

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className='row aboutme'>
          <div className='col-lg-9 col-11 mt-4 mx-auto'>
            <h1 className='text-center'> Prajwal Kharat </h1>

            <div className='d-flex d-sm-flex flex-column flex-sm-column flex-lg-row justify-content-between  '>
              <div className='my-5 col-lg-8 col-sm-10 fs-3 order-2 order-lg-1'>
                <div>
                  <h2>Education</h2>
                </div>
                <div>
                  <ul className='my-lg-3'>

                    <li>Pursuing MCA at Sinhagad Institute of Management, Vadgaon Bk, Pune.</li>
                    <li>BCA from Dr. Babasaheb Ambedkar Marathwada University with aggregate of 64.20%.</li>
                    <li>HSC under Maharashtra state divisional board with 70%.</li>
                    <li>SSC Saraswati Bhuvan Prashala, Jalna with 86.20%.</li>
                  </ul>
                </div>
              </div>

              <div className=' flex-wrap icons d-flex flex-lg-column justify-content-around h-705 order-1 order-lg-2 flex-sm-row'>
                <a className='text-dark my-2' target="_blank" href="https://www.linkedin.com/in/prajwal-kharat-4a0080206/"><span>Linkedin</span> &nbsp;&nbsp; {Linkedin}</a>
                <a className='text-dark my-2' target="_blank" href="https://github.com/pk088"><span>GitHub</span> &nbsp;&nbsp; {Github}</a>
                <a className='text-dark my-2' target="_blank" href="https://twitter.com/KharatPrajwal"><span>Twitter</span> &nbsp;&nbsp; {Twitter}</a>
                <a className='text-dark my-2' target="_blank" href="https://www.facebook.com/prajwal.kharat.31"><span>Facebook</span> &nbsp;&nbsp; {Facebook}</a>
                <a className='text-dark my-2' target="_blank" href="https://www.instagram.com/pk._99/"><span>Instagram</span> &nbsp;&nbsp; {Instagram}</a>
                <a className='text-dark my-2' target="_blank" href="https://wa.me/918983996238?text=I%20want%20to%20connect.."><span>Whatsapp</span> &nbsp;&nbsp; {Whatsapp}</a>
              </div>
            </div>

            <div className='my-4 fs-3'>
              <div>
                <h2>Objective</h2>
              </div>
              <div>
                <p className='ms-4' style={{ textIndent: "50px" }}>Looking for a Challenging role in a Reputable Organization to utilize my Technical, and Management skills for
                  the Growth of the Organization as well as to Enhance my Knowledge about New and Emerging Trends in the
                  IT Sector. </p>
              </div>
            </div>

            <div className='my-5 fs-3'>
              <div>
                <h2>Skills</h2>
              </div>

              <div className='skills'>
                {
                  SkillData.map((element, index) => {
                    return <SkillBar key={index} SkillData={element} />
                  })
                }

              </div>
            </div>

            <div className='my-4 fs-3'>
              <div>
                <h2>Personal Details</h2>
              </div>
              <div>
                <ul className='ms-3'>
                  <li className='my-3'><strong>Date of Birth:</strong> 15 DEC 1999</li>
                  <li className='my-3'><strong>Languages known:</strong> Marathi, Hindi and English. </li>
                  <li className='my-3'><strong>Address:</strong> Near Chanakya Complex, Kacheri Road, old Jalna. </li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe