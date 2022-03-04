import React from 'react'
import ContactCard from '../Components/ContactCard';
import { MdPhoneAndroid } from 'react-icons/md';
import { GoMail } from 'react-icons/go';
import { HiLocationMarker } from 'react-icons/hi';


const Contact = () => {

  const mobileicon = <MdPhoneAndroid size={60} />
  const mailicon = <GoMail size={60} />
  const addressicon = <HiLocationMarker size={60} />

  return (
    <>
      <div className="container-fluid nav_bg">
        <div className='row'>
          <div className='col-9 mx-auto'>
            <h1 className='text-center mt-5'>Contact Me</h1>
            <div className='row mt-4 text-break'>
              <ContactCard mobileicon={mobileicon} title = "Give me a Call" value = "8983996238" url="tel:8983996238" />
              <ContactCard mobileicon={mailicon} title = "Send me an Email" value = "prajwalkharat88@gmail.com" url="mailto:prajwalkharat88@gmail.com" />
              <ContactCard mobileicon={addressicon} title = "Address" value = "Near Chanakya Complex, Kacheri Road, Old Jalna." url="https://www.google.com/maps/place/Kharat+Notary/@19.8375276,75.8800452,17z/data=!4m9!1m2!2m1!1skharat++notary!3m5!1s0x3bda5705bab06d83:0xd2ff4b8b4cbb1667!8m2!3d19.8396472!4d75.8776256!15sCg5raGFyYXQgIG5vdGFyeZIBDW5vdGFyeV9wdWJsaWM" />

              {/* <ContactCard mobileicon={mobileicon} /> */}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact