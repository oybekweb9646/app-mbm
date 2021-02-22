import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import Contact from "./Contact";
import Footer from "./Footer";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <NavbarPart/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default ContactPage;