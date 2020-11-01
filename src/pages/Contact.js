import React from 'react';
import Contactform from '../components/Contactform';
import Contactinfo from '../components/Contactinfo';

function Contact() {
    return(
        <React.Fragment>
            < Contactform />
            < Contactinfo />
        </React.Fragment>
    );
}

export default Contact;