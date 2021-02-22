import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer">

                <div className="container-fluid footer-komp px-5 pt-5">
                    <div className=" border-bottom my-5"/>
                    <Row>
                        <Col lg="3">
                            <img src="images/img.png" width="65" alt=""/>
                            <p className="mt-4 text-color">MBM IT Company. All right reserved</p>
                        </Col>
                        <Col lg="3">
                            <h6 className="text-white">Kompaniyamizga tashrif buyuring</h6>
                            <p className="text-color mt-4">Toshkent shahri, Olmazor tumani,
                            Qoraqamish ko'chasi, AB
                            </p>
                        </Col>
                        <Col lg="3">
                            <h6 className="text-white">Aloqada bo'ling</h6>
                            <p className="mt-4 text-color">+998(90) 740 48 08
                                info@mbmitcompany.uz
                            </p>
                        </Col>
                        <Col lg="3">
                            <h6 className="text-white">Bizni ijtimoiy tarmoqlarda kuzatib boring</h6>

                            <div className="d-flex align-items-center">
                                <div className="iconborder border"><Link to="/" ><span className="icon iconfacebook "/></Link></div>
                                <div className="iconborder mx-3 my-2 p-1 border bg-transparent"><Link to="/"><span className="icon icontg"/></Link></div>
                                <div className="iconborder my-2 border"><Link to="/"><span className="icon iconinstagram"/></Link></div>
                            </div>

                        </Col>
                    </Row>
                </div>

                <div className="mobile-footer container-fluid px-5 pt-5 d-none">
                    <div className=" border-bottom my-5"/>
                    <Row>
                    <Col sm="6" className="text-center">
                        <h6 className="text-white">Kompaniyamizga tashrif buyuring</h6>
                        <p className=" mt-4">Toshkent shahri, Olmazor tumani,
                            Qoraqamish ko'chasi, AB
                        </p>
                    </Col>
                    <Col sm="6" className="text-center">
                        <h6 className="text-white">Aloqada bo'ling</h6>
                        <p className="mt-4">+998(90) 740 48 08
                            info@mbmitcompany.uz
                        </p>
                    </Col>
                    <Col sm="12" className="text-center mb-5 mt-3">
                        <h6 className="text-white">Bizni ijtimoiy tarmoqlarda kuzatib boring</h6>

                        <div className="d-flex align-items-center justify-content-center">
                            <div className="iconborder border"><Link to="/" ><span className="icon iconfacebook "/></Link></div>
                            <div className="iconborder mx-3 my-2 p-1 border bg-transparent"><Link to="/"><span className="icon icontg"/></Link></div>
                            <div className="iconborder my-2 border"><Link to="/"><span className="icon iconinstagram"/></Link></div>
                        </div>

                    </Col>
                    <Col sm="12" className="text-center">
                        <img src="images/img.png" width="65" alt=""/>
                        <p className="text-color mt-4">MBM IT Company. All right reserved</p>
                    </Col>
                    </Row>
                </div>

            </div>
        );
    }
}

export default Footer;