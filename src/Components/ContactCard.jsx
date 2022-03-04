import React from 'react'
import './ContactCard.css'

const ContactCard = (props) => {

    return (
        <div className='ContactCard d-flex my-4 p-3'>
            <div>{props.mobileicon}</div>
            <div className='ms-3'>
                <h4>{props.title}</h4>
                <h3><a target="_blank" href={props.url}>{props.value}</a></h3>
            </div>

        </div>
    )
}


export default ContactCard