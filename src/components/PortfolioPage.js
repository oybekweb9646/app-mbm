import React, {Component} from 'react';
import NavbarPart from "./NavbarPart";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";

class PortfolioPage extends Component {
    render() {
        return (
            <div>
                <NavbarPart/>
                <Portfolio/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default PortfolioPage;