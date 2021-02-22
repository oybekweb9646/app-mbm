import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import BizHaqimizda from "./BizHaqimizda";
import BizningJamoa from "./BizningJamoa";
import Contact from "./Contact";
import Footer from "./Footer";
class AboutUs extends Component {
    render() {
        return (
            <div>
                <NavbarPart/>
                <BizHaqimizda/>
                <BizningJamoa/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default AboutUs;