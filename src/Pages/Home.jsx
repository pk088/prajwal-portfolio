import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import programer from "../Images/Programer.png"
import { useState } from 'react'

const Home = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hourNow = new Date().getHours();
        setGreeting(hourNow < 5 ? "Good Night" : hourNow < 12 ? "Good Morning" : hourNow < 17 ? "Good Afternoon" : "Good Evening");

    }, [])

    return (
        <>
            <section id='header' className='d-flex align-items-center'>
                <div className="container-fluid">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className='row align-items-center'>
                                <div className='col-md-6 py-5 pt-lg-0 order-2 order-lg-1'>
                                    <h3 className='mb-lg-3'>Hey, {greeting}...</h3>
                                    <h1><span className='iam'>I'm </span>
                                    <strong className='brand-name'>Prajwal Kharat</strong></h1>
                                    <h2 className='my-3 work'>I work as Frontend Software Developer.<br/> I Make Things Look Good..</h2>
                                    <div className='mt-3'>
                                        <NavLink to="/projects" className='btn btn-get-started'>See Projects</NavLink>
                                    </div>
                                </div>

                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={programer} className='img-fluid animated' alt="Programer Image" title='Coding All the Day' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home