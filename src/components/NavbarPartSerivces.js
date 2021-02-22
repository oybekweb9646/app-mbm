import React, {Component} from 'react';
import {
    Button,
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem, UncontrolledDropdown,
} from "reactstrap";
import {Link} from "react-router-dom";

class NavbarPart extends Component {


    constructor(props) {
        super(props);
        this.state ={
            isOpen: false,
            dropdownOpen: false,
            show: false
        }
    }



    render() {

        const toggle = () => {this.setState({isOpen: !this.state.isOpen, show: !this.state.show});}

        const toggle2 = () =>{ this.setState({dropdownOpen: !this.state.dropdownOpen});}


        return (
            <div className="navbarPartSerivces">
                <Navbar color="light" light expand="md" className=" pl-5 bg-transparent">
                    <NavbarBrand href={this.state.show ? null : "/"}><img className={this.state.show ? "d-none" : "d-block"} src="images/img.png" width="65" alt=""/>  <UncontrolledDropdown setActiveFromChild className={this.state.show ? "d-block" : "d-none"}>
                        <DropdownToggle className="bg-transparent border-0 text-white pr-5"  caret>
                            UZ
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem  href="/" active>UZ</DropdownItem>
                            <DropdownItem  href="/" active>RU</DropdownItem>
                            <DropdownItem  href="/" active>EN</DropdownItem>
                        </DropdownMenu>

                    </UncontrolledDropdown></NavbarBrand>
                    <div className={this.state.show ? "show mobil_burger" : "mobil_burger"}  onClick={toggle}>
                        <span className="line-first"/>
                        <span className="line-second"/>
                        <span className="line-third"/>
                    </div>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto mr-5" navbar>
                            <NavItem>
                                <Link to="/" className="text-color link mx-3 text-decoration-none">Home</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/services" className="text-color link mx-3 text-decoration-none">Services</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/ourTeam" className="text-color link mx-3 text-decoration-none">About us</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/portfolio" className="text-color link mx-3 text-decoration-none">Portfolio</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="text-color link mx-3 text-decoration-none">Contact</Link>
                            </NavItem>
                            <div className={this.state.show ? "d-flex justify-content-center mt-5" : "d-none"} >
                                <div><img width="30" className=""  src="/images/img_1.png" alt=""/></div>
                                <div><img className={this.state.show ? "d-flex mx-4" : "d-none"} width="30" src="/images/img_2.png" alt=""/></div>
                                <div><img width="30" className="" src="/images/img_3.png" alt=""/></div>
                            </div>


                        </Nav>
                        <UncontrolledDropdown setActiveFromChild className={this.state.show ? "d-none" : "d-block"}>
                            <DropdownToggle className="bg-transparent border-0 text-white pr-5"  caret>
                                UZ
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem  href="/" active>UZ</DropdownItem>
                                <DropdownItem  href="/" active>RU</DropdownItem>
                                <DropdownItem  href="/" active>EN</DropdownItem>
                            </DropdownMenu>

                        </UncontrolledDropdown>
                    </Collapse>
                </Navbar>

<div className="navbarFooter pt-5">
                <h1 className="text-white text-center mt-5 pt-5">Biz sizga <span className="text-danger">eng yaxshi </span> xizmatni ko'rsatamiz!</h1>

    <p className="mt-4 text-center">Biz O'zbekistondagi mijozlarga sifatli  xizmat ko'rsatuvchi yetakchi kompaniyamiz </p>

    <div className="text-center buttons">
        <Button className="bg-danger button text-white border-0 px-4">
            Biz haqimizda
        </Button>
        <Button className="bg-transparent ourworks text-white ml-2  px-4">
            Bizning ishlar
        </Button>

    </div>
    <div className="d-flex justify-content-end mr-5">
    <div className={this.state.show ? "d-none" : "mt-5 mr-2  ml-auto d-block icons"} >
        <div className="iconborder border"><Link to="/" ><span className="icon iconfacebook "/></Link></div>
        <div className="iconborder my-2 p-1 border bg-transparent"><Link to="/"><span className="icon icontg"/></Link></div>
        <div className="iconborder my-2 border"><Link to="/"><span className="icon iconinstagram"/></Link></div>
    </div>
    </div>



</div>
            </div>
        );
    }
}

export default NavbarPart;