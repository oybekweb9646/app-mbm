import React, {Component} from 'react';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";

class BizHaqimizda extends Component {
    render() {
        return (
            <div className="aboutUs">
                <div className="container-fluid px-4 pb-5 pt-5">
                    <Row className="py-5">
                        <div className="d-flex col-4 align-items-center pl-5">
                            <div className="border-bottom w-100"/>
                        </div>
                        <div className="text-center col-4">
                            <h1 className="text-white title-of-component">Biz Haqimizda</h1>
                        </div>
                        <div className="d-flex col-4  align-items-center pr-5">
                            <div className="border-bottom w-100"/>
                        </div>
                    </Row>
                </div>
                <Container>
                    <Row>
                        <Col lg="6">
                            <Card className="bg-transparent">
                                <CardBody className="position-relative">
                                    <img className="card-img mr-md-0" src="images/img_14.png" alt=""/>
                                    <img className="ramka bg-transparent" src="images/img_4.png" alt=""/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col className="text-md-left text-center" lg="6">
                            <p className="mt-3 text-white">Megabayt Media Kompaniyasi axborot texnologiyalari sohasiga ixtisoslashgan brend nomidagi tashkilot. MBM IT kompaniyasi indivudial yondashuv asosida har bir buyurtmachi faoliyati va mahsulotidan kelib chiqgan holda takliflar hamda ximatlar ko'rsatadigan kompaniya hisoblanadi. </p>

                            <p className="mt-4 text-white">Bizning kompaniyamiz buyurtmachilarining faoliyat turidan kelib chiqib, joriy statistik malumotlarini o'rganib chiqadi va qisqa muddat ichida muammoning muqobil yechimlarini biznes egalariga taqdim etadi </p>


                            <Button className="bg-danger px-5 border-0 mt-4 py-2">Batafsil</Button>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default BizHaqimizda;