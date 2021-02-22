import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import BizningXizmatlarimiz from "./BizningXizmatlarimiz";
import Contact from "./Contact";
import Footer from "./Footer";
import NavbarPartSerivces from "./NavbarPartSerivces";

class ServicesPage extends Component {
    render() {
        return (
            <div>
                <NavbarPartSerivces/>
                <BizningXizmatlarimiz/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default ServicesPage;