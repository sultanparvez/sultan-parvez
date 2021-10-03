import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/d/u/3/embed?mid=12K1fT7DQgAgdppMgyvha5beqzmxQe5by" width="640" height="480"style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+880 1516159311'} text2={'+880 1762178895'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'sultanparvez77.sp@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={location} text1={'House#38, Saleh Bhaban, Jatrabari, Dhaka'} text2={'Bangladesh'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
