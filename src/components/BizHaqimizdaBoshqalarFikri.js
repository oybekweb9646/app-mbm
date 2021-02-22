import React, {Component} from 'react';
import {Col, Row} from "reactstrap";
import Slider from 'react-slick'
import FooterCarousel from "./FooterCarousel";
class BizHaqimizdaBoshqalarFikri extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };

        return (
            <div className="aboutUsView">
                <div className="container-fluid px-4 pb-5 pt-5">
                    <Row className="py-5">
                        <div  className="d-flex  col-4 align-items-center pl-5">
                            <div className="border-bottom w-100"/>
                        </div>
                        <div  className="text-center col-4">
                            <h1 className="text-white title-of-component">Biz haqimizda boshqalar fikri</h1>
                        </div>
                        <div  className="d-flex  col-4  align-items-center pr-5">
                            <div className="border-bottom w-100"/>
                        </div>
                    </Row>
                </div>
                <div className="px-5">
                    <Slider {...settings}>
                      <FooterCarousel textclass="text-color text-center" class="border  p-4 mt-5" />
                      <FooterCarousel textclass="text-color text-center text-white" class="border  p-4 mt-5 bg-danger text-white" />
                      <FooterCarousel textclass="text-color text-center" class="border  p-4 mt-5" />
                      <FooterCarousel textclass="text-color text-center" class="border  p-4 mt-5" />

                    </Slider>
                </div>
            </div>
        );
    }
}

export default BizHaqimizdaBoshqalarFikri;