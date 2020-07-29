import React from 'react'
import { Form, Button } from 'react-bootstrap'
import ControlGroup from '../Common/ControlGroup'

/**
* @author
* @function ContactForm
**/

const ContactForm = (props) => {
    return (
        <Form id="contactForm" name="sentMessage" noValidate="novalidate">
            <div className='control-group'>
                <ControlGroup labelTitle='Name' id='name' type="text" placeholder="Name" ValideMessage="Please enter your name." />
            </div>
            <div className='control-group'>
                <ControlGroup labelTitle='Email Address' id='email' type="email" placeholder="Email Address" ValideMessage="Please enter your email address." />
            </div>
            <div className='control-group'>
                <ControlGroup labelTitle='Phone Number' id='phone' type="tel" placeholder="Phone Number" ValideMessage="Please enter your phone number." />
            </div>
            <div className='control-group'>
                <ControlGroup labelTitle='Message' id='message' row="5" type="text" placeholder="Message" ValideMessage="Please enter a message." />
            </div>
            <br />
            <div id="success"></div>
            <div className="form-group">
                <Button className="btn btn-primary btn-xl" id="sendMessageButton" type="submit">
                    Send
                </Button>
            </div>

        </Form>
    )

}

export default ContactForm