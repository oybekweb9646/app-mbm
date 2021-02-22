import React, {Component} from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container-fluid px-4 pb-5 pt-5">
                    <Row className="py-5">
                        <div  className="d-flex col-4  align-items-center pl-5">
                            <div className="border-bottom w-100"/>
                        </div>
                        <div  className="text-center col-4">
                            <h1 className="text-white title-of-component">Kontakt</h1>
                        </div>
                        <div  className="d-flex    col-4 align-items-center pr-5">
                            <div className="border-bottom w-100"/>
                        </div>
                    </Row>
                </div>


                <Container>
                    <Row>
                    <Col lg="6" className="mapCol">
                        <Card className="p-0 bg-transparent">
                            <CardBody className="p-0  d-flex justify-content-end justify-content-sm-center">
                                <div id="map-container-google-1" className="z-depth-1-half map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.823260946244!2d69.21750224495935!3d41.35619512220954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c405301662d%3A0xb89f4f278a29d189!2zOGEgUW9yYXFhbWlzaCBrbydjaGFzaSwg0KLQvtGI0LrQtdC90YIgMTAwMDk1LCBPYHpiZWtpc3Rvbg!5e0!3m2!1suz!2s!4v1613719600528!5m2!1suz!2s"
                                        frameBorder="0"
                                       className="aaa"  allowFullScreen/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <div className="d-flex align-items-center mt-2 pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23.955" height="36.763" viewBox="0 0 23.955 36.763">
                            <path id="placeholder_1_" data-name="placeholder (1)" d="M5.727,0C-.877,0-6.25,5.733-6.25,12.779c0,8.856,11.989,23.984,11.989,23.984S17.7,21.2,17.7,12.779C17.7,5.733,12.332,0,5.727,0ZM9.341,16.52a4.892,4.892,0,0,1-7.228,0,5.72,5.72,0,0,1,0-7.711,4.887,4.887,0,0,1,7.228,0A5.72,5.72,0,0,1,9.341,16.52Zm0,0" transform="translate(6.25)" fill="#aaa"/>
                        </svg>
                       <Link src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.823260946244!2d69.21750224495935!3d41.35619512220954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c405301662d%3A0xb89f4f278a29d189!2zOGEgUW9yYXFhbWlzaCBrbydjaGFzaSwg0KLQvtGI0LrQtdC90YIgMTAwMDk1LCBPYHpiZWtpc3Rvbg!5e0!3m2!1suz!2s!4v1613719600528!5m2!1suz!2s" className="text-color ml-2 mb-0">Toshkent shahri, Olmazor tumani, Qoraqamish ko'chasi, 8A</Link>
                        </div>
                        <div className="d-flex align-items-center mt-4 pl-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28.955" height="29.016" viewBox="0 0 28.955 29.016">
                                <path id="Path_44" data-name="Path 44" d="M28.735,21.295l-4.049-4.049A2.693,2.693,0,0,0,20.2,18.258a2.756,2.756,0,0,1-3.182,1.735c-2.892-.723-6.8-4.483-7.52-7.52a2.621,2.621,0,0,1,1.735-3.182,2.693,2.693,0,0,0,1.012-4.483L8.2.759a2.888,2.888,0,0,0-3.9,0L1.547,3.507C-1.2,6.4,1.836,14.064,8.633,20.861s14.462,9.979,17.354,7.086L28.735,25.2A2.888,2.888,0,0,0,28.735,21.295Z" transform="translate(-0.539 0)" fill="#aaa"/>
                            </svg>
                            <a href="tel: +998907404807"  className="text-color ml-2 mb-0">+998 (90) 740 48 07</a>
                        </div>
                        <div className="d-flex align-items-center mt-4 pl-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.53" height="21.677" viewBox="0 0 31.53 21.677">
                                <g id="email_1_" data-name="email (1)" transform="translate(0 -80)">
                                    <g id="Group_101" data-name="Group 101" transform="translate(20.9 83.996)">
                                        <g id="Group_100" data-name="Group 100">
                                            <path id="Path_37" data-name="Path 37" d="M339.392,151.9l10.629,6.72V144.9Z" transform="translate(-339.392 -144.896)" fill="#aaa"/>
                                        </g>
                                    </g>
                                    <g id="Group_103" data-name="Group 103" transform="translate(0 83.996)">
                                        <g id="Group_102" data-name="Group 102">
                                            <path id="Path_38" data-name="Path 38" d="M0,144.9v13.723l10.629-6.72Z" transform="translate(0 -144.896)" fill="#aaa"/>
                                        </g>
                                    </g>
                                    <g id="Group_105" data-name="Group 105" transform="translate(0.059 80)">
                                        <g id="Group_104" data-name="Group 104">
                                            <path id="Path_39" data-name="Path 39" d="M30.46,80H2.871A1.946,1.946,0,0,0,.96,81.677L16.666,92.025,32.371,81.677A1.946,1.946,0,0,0,30.46,80Z" transform="translate(-0.96 -80)" fill="#aaa"/>
                                        </g>
                                    </g>
                                    <g id="Group_107" data-name="Group 107" transform="translate(0.063 92.188)">
                                        <g id="Group_106" data-name="Group 106">
                                            <path id="Path_40" data-name="Path 40" d="M20.056,277.922l-2.788,1.837a.99.99,0,0,1-1.084,0L13.4,277.92,1.024,285.745a1.943,1.943,0,0,0,1.908,1.663H30.52a1.943,1.943,0,0,0,1.908-1.663Z" transform="translate(-1.024 -277.92)" fill="#aaa"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <Link  className="text-color ml-2 mb-0">info@mbmitcompany.uz</Link>
                        </div>
                    </Col>
                        <Col lg="6">
                            <h3 className="text-white mt-5 pt-5">Biz bilan bog'laning va o'z biznesingizni yuqori natijalarga olib chiqing!</h3>
                        <p className="text-color">Biz siz bilan hamkor bo'lishga tayyormiz</p>
                        </Col>
                        <Col lg="6" className="mt-5 pt-5 px-5">
                            <input type="text" placeholder="Ism" className="px-4 w-100 py-3 rounded inputColor border-0"/>
                            <input type="email" placeholder="E-mail" className="px-4 w-100 mt-3 py-3 rounded inputColor border-0"/>

                            <textarea type="text" placeholder="Xabar qoldirish" className="px-4 w-100 mt-3 py-3 rounded inputColor border-0"/>

                            <Button className="bg-danger mt-4 w-100 border-0">Yuborish</Button>
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Contact;