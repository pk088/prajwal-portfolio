import React from 'react'
import { NavLink } from 'react-router-dom';
import ProCard from '../Components/ProCard'

const projects = (props) => {

  // console.log(props.projectData);

  const proArray = props.projectData;

  return (
    <>
      <div className='mt-5'>
        <h1 className='text-center'>My Projects</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className='row'>
          <div className='col-lg-10 mx-auto'>
            <div className='my-4 w-50 fs-5'>
              {/* <div className='projects_navbar d-flex justify-content-between'>
                
                  <div className="projects_navbar_active"><a href='#'>All</a></div>
                
                  <div className="projects_navbar_active"><a href='#'>Basic</a></div>
                
                  <div className="projects_navbar_active"><a href='#'>Intermediate</a></div>
                
                  <div className="projects_navbar_active"><a href='#'>Advance</a></div>
              </div> */}
            </div>

            <div className='row gy-4'>

              {
                proArray.map((element, index) => {
                  return <ProCard key={index} projectData={element} />
                })
              }



            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default projects