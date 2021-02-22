import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";

class BizningJamoa extends Component {
    render() {
        return (
            <div className="bizningJamoa">
                <div className="container-fluid px-4 pb-5 pt-5">
                    <Row className="py-5">
                        <div className="d-flex col-4 align-items-center pl-5">
                            <div className="border-bottom w-100"/>
                        </div>
                        <div className="text-center col-4">
                            <h1 className="text-white title-of-component">Bizning Jamoa</h1>
                        </div>
                        <div className="d-flex col-4  align-items-center pr-5">
                            <div className="border-bottom w-100"/>
                        </div>
                    </Row>
                </div>
                <Container>
                    <Row>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                        <Col sm="4" className="mt-5">
                            <div className="d-flex align-items-center">
                            <img src="images/img_8.png" alt=""/>
                            <div className="ml-3">
                            <h5 className="text-white mb-0 ">Qobil Karimberdiyev</h5>
                            <p className="text-color mb-0 mt-2">Frontend Developer</p>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default BizningJamoa;