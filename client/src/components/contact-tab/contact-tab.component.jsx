import React from 'react';
import {ContactImageOverlay, ContactImageContainer, ContactImageText} from './contact-tab.styles';

const ContactTab = () => {
    return(
    <ContactImageOverlay>
        <ContactImageContainer imageUrl='https://i.imgur.com/zwaEM8V.jpg'/>
        <ContactImageText>Sorry, this page is under construction</ContactImageText>
    </ContactImageOverlay>
    )
};

export default ContactTab;
