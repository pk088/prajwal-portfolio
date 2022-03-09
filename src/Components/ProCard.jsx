import React from 'react'


const ProCard = (props) => {

    // console.log(props.projectData);

    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card shadow">
                    <img src={props.projectData.imgsrc} className="card-img-top" alt="Project Image" />
                    <div className="card-body">
                        <h5 className="card-title">{props.projectData.title}</h5>
                        <p className="card-text">{props.projectData.desc}</p>
                        <a href={props.projectData.path} target="_blank" className="btn btn-primary">Go to Project</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProCard