import React from 'react';
import {
        ContactPageContainer,
        ImageContainer,
        ContentContainer,
        CallContainer,
        EmailContainer

} from './contact.styles';
import {FaPhoneAlt} from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

const ContactPage = () => (
    <ContactPageContainer>
        <ImageContainer>
            <h1>Get in touch</h1>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
        </ImageContainer>
        <ContentContainer>
            <CallContainer>
                <FaPhoneAlt className='phone-icon' />
                <h3>Talk to Agent</h3>
                <p>Interested in buying but got some issues?<br/>We are here to help. Give us a call...</p>
                <h3>Call:  <a href='tel:+1 234 5678'>+1 234 567 8901</a></h3>
            </CallContainer>
            <EmailContainer>
                <GrMail className='email-icon' />
                <h3>Contact Customer Support</h3>
                <p>Sometimes it happens you don't want to talk?<br/>We are here to respond you over the chat.</p>
                <a href='mailto: support@help.com'>Contact Support</a>
            </EmailContainer>
        </ContentContainer>
    </ContactPageContainer>
);
export default ContactPage;