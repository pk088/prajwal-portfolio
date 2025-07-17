import React from 'react'
import { NavLink } from 'react-router-dom'
import Resume from "../ResumePDF/Prajwal_Kharat_Resume.pdf"


const Navbar = () => {

    // const resumeDownloader = () => {
    //    const answer = window.confirm("Do you want to Download my Resume??")
    //    if(answer){
    //        <a href="./ResumePDF/Prajwal Kharat Resume.pdf" download></a>
           
    //    } 
    


    return (
        <>
            <div className='container-fluid nav_bg sticky-lg-top'>
                <div className='row' >
                    <div className='col-lg-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <a href='' target="_blank" className="navbar-brand" >Portfolio</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" to="/"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Home</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" to="/aboutMe"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">AboutMe</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" to="/projects"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Projects</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" to="/contact"><span data-bs-toggle="collapse" data-bs-target=".navbar-collapse">Contact</span></NavLink>
                                        </li>

                                        {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li> */}

                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
    
}


export default Navbar