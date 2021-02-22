import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import BizningAfzaliklar from "./BizningAfzaliklar";
import BizningXizmatlarimiz from "./BizningXizmatlarimiz";
import BizHaqimizda from "./BizHaqimizda";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import BizHaqimizdaBoshqalarFikri from "./BizHaqimizdaBoshqalarFikri";
class MainPage extends Component {
    render() {
        return (
            <div>
                <NavbarPart/>
                <BizningAfzaliklar/>
                <BizningXizmatlarimiz/>
                <BizHaqimizda/>
                <Portfolio/>
                <BizHaqimizdaBoshqalarFikri/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;