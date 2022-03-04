import React from 'react'
import "./AboutMe.css"
import SkillBar from '../Components/SkillBar';
import 'react-circular-progressbar/dist/styles.css';
import { GrLinkedinOption } from 'react-icons/gr';
import { FiGithub } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';

const AboutMe = () => {

  const Linkedin = <GrLinkedinOption size={40} />
  const GitHub = <FiGithub size={40} />
  const Twitter = <FiTwitter size={40} />
  const Facebook = <FiFacebook size={40} />
  const Instagram = <FiInstagram size={40} />
  const Whatsapp = <ImWhatsapp size={40} />


  const SkillData = [
    {
      percentage: 92,
      styles: {
        textColor: "red",
        pathColor: "#F16529",
      },
      imgsrc: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      alt: "HTML"
    },
    {
      percentage: 90,
      styles: {
        textColor: "red",
        pathColor: "#2965F1",
      },
      imgsrc: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      // imgsrc:"https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      alt: "CSS"
    },
    {
      percentage: 85,
      styles: {
        textColor: "red",
        pathColor: "#FFDA3E",
      },
      imgsrc: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg",
      alt: "JavaScript"
    },
    {
      percentage: 80,
      styles: {
        textColor: "red",
        pathColor: "#51DAFB",
      },
      imgsrc: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React"
    },

  ]

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className='row aboutme'>
          <div className='col-9 mt-4 mx-auto'>
            <h1 className='text-center'> Prajwal Kharat </h1>

            <div className='d-flex d-sm-flex flex-column flex-sm-column flex-lg-row justify-content-between  '>
              <div className='my-5 col-lg-8 col-sm-10 fs-3 order-2 order-lg-1'>
                <div>
                  <h2>Education</h2>
                </div>
                <div>
                  <ul className='ms-3'>
                    <li>Pursuing MCA at Sinhagad Institute Of Management, Vadgaon Bk, Pune.</li>
                    <li>BCA from Dr. Babasaheb Ambedkar Marathwada University with aggregate of 64.20%.</li>
                    <li>HSC under Maharashtra state divisional board with 70%.</li>
                    <li>SSC Saraswati Bhuvan Prashala, Jalna with 86.20%.</li>
                  </ul>
                </div>
              </div>

              <div className=' flex-wrap icons d-flex flex-lg-column justify-content-around h-705 order-1 order-lg-2 flex-sm-row'>
                <a className='text-dark my-2' target="_blank" href="https://www.linkedin.com/in/prajwal-kharat-4a0080206/"><span>Linkedin</span> &nbsp;&nbsp; {Linkedin}</a>
                <a className='text-dark my-2' target="_blank" href="https://github.com/pk088"><span>GitHub</span> &nbsp;&nbsp; {GitHub}</a>
                <a className='text-dark my-2' target="_blank" href="https://twitter.com/KharatPrajwal"><span>Twitter</span> &nbsp;&nbsp; {Twitter}</a>
                <a className='text-dark my-2' target="_blank" href="https://www.facebook.com/prajwal.kharat.31"><span>Facebook</span> &nbsp;&nbsp; {Facebook}</a>
                <a className='text-dark my-2' target="_blank" href="https://www.instagram.com/pk._99/"><span>Instagram</span> &nbsp;&nbsp; {Instagram}</a>
                <a className='text-dark my-2' target="_blank" href="https://wa.me/918983996238?text=I%20want%20to%20connect"><span>Whatsapp</span> &nbsp;&nbsp; {Whatsapp}</a>
              </div>
            </div>

            <div className='my-4 fs-3'>
              <div>
                <h2>Objective</h2>
              </div>
              <div>
                <p className='ms-4' style={{textIndent: "50px"}}>Looking for a challenging role in a reputable organization to utilize my technical, and management skills for
                  the growth of the organization as well as to enhance my knowledge about new and emerging trends in the
                  IT sector. </p>
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