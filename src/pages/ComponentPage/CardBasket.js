import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import image_19 from './Img/image_19.png';
import Krest from './Img/Krest.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardBasket() {
    return (
        <Container className="d-flex border-bottom border-dark border-1 justify-content-center mt-4">
            <Row className="">
                
                {/* // Десктопная колонка (для md размера экрана) */}
                <Col md={4} className="d-none d-sm-block justify-content-end d-flex">
                    <Image src={image_19} style={{ maxWidth: "auto", height: "auto", width: "auto" }} />
                </Col>
                {/* // Мобильная колонка (для xs размера экрана) */}
                <Col xs={5} className="d-block d-sm-none">
                    <Image src={image_19} style={{ maxWidth: "100%", height: "auto", width: "100%" }} />
                </Col>
                
                <Col xs={5} md={6}>
                    <h5 className="font-Dimica-Light">Felix Gonzalez-Torres & Rudolf Stingel. </h5>
                    <h6 className="font-Dimica-Light" style={{ color: "#B7ADBE" }}>Neue Galerie Graz 1994</h6>
                    <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#B7ADBE", color: "#001C17", fontFamily: 'Dimica-Light', borderRadius: 0 }}>410 ₽</Button>
                </Col>
                <Col xs={1} md={1}>
                    <Image src={Krest} style={{ justifyContent: "center" }} />
                </Col>
            </Row>
        </Container>

    );
}

export default CardBasket;