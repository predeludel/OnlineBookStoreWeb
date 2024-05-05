import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardBig from './ComponentPage/CardBig';
import SectionGenres from './ComponentPage/SectionGenres';
import Vecto from './ComponentPage/Img/Vecto.svg';
import SectionSeparation from './ComponentPage/Img/SectionSeparation.svg';
import Image from 'react-bootstrap/Image';

export const Home = () => (
  <Container>
    <SectionGenres></SectionGenres>
    <Row className="justify-content-center">
      <Row className="justify-content-center">
        <Col className="text-center mt-2">
          <h1 className="font-alcotton text-dark">НОВИНКИ</h1>
        </Col>
      </Row>
    </Row>
    <Row className="justify-content-center">
      {/* Показываем три карточки на десктопах */}
      <Col sm={4} className=" d-flex d-none d-sm-block ">
        <Container className="d-flex align-items-center">
          <Image style={{ width: 20, height: 37 }} src={Vecto} />
          <CardBig></CardBig>
        </Container>
      </Col>
      <Col sm={4} className="d-none d-sm-block">
        <CardBig></CardBig>
      </Col>
      <Col sm={4} className="d-none d-sm-block">
        <Container className="d-flex align-items-center">
          <CardBig></CardBig>
          <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
        </Container>
      </Col>

      {/* Показываем одну карточку на мобильных устройствах */}
      <Col xs={12} className="d-block d-sm-none">
        <Container className="d-flex align-items-center">
          <Image style={{ width: 20, height: 37 }} src={Vecto} />
          <CardBig></CardBig>
          <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
        </Container>
      </Col>
    </Row>
    <Row className="justify-content-center">
      <Row className="justify-content-center">
        <Col className="text-center mt-2">
          <Image style={{ width: '100%', maxWidth: '100%' }} src={SectionSeparation} />
        </Col>
      </Row>
    </Row>

  </Container>
)
