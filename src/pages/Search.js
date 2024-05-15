import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionGenres from './ComponentPage/SectionGenres';
import Image from 'react-bootstrap/Image';
import Vecto from './ComponentPage/Img/Vecto.svg';
import image_6 from './ComponentPage/Img/image_6.png';
import image_7 from './ComponentPage/Img/image_7.png';
import image_4 from './ComponentPage/Img/image_4.png';
import image_3 from './ComponentPage/Img/image_3.png';
import CardMini from './ComponentPage/CardMini';

export const Search = () => (
     <Container className="justify-content-center">
          <FloatingLabel
               controlId="floatingInput"
               label="Книги, авторы, жанры"
               className="mb-3 font-Dimica-Light" style={{ fontSize: 24 }}>
               <Form.Control type="name" placeholder="book_name" />
          </FloatingLabel>
          <SectionGenres></SectionGenres>
          <Row className="justify-content-center">
               <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                         <h3 className="font-alcotton text-dark">Сейчас популярно</h3>
                    </Col>
               </Row>
          </Row>
          <Row style={{ background: "#EBEACA" }}>
               <Col className="text-center mt-2">
                    <Image src={image_7} />
                    <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“Русские народные украшения”</p>
               </Col>
               <Col className="text-center mt-2">
                    <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“Отдых и еда на вднх”</p>
                    <Image src={image_6} />
               </Col>
               <Col className="text-center mt-2">
                    <Image src={image_4} />
                    <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“Девять причин полюбить греческий”</p>
               </Col>
               <Col className="text-center mt-2">
                    <p className="font-Dimica-Light text-dark m-1" style={{ textDecoration: "underline" }}>“Уроки ЛАС-ВЕГАСА”</p>
                    <Image src={image_3} />
               </Col>
          </Row>
          
          <Row className="justify-content-center">
               <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                         <h3 className="font-alcotton text-dark">Вам может понравиться</h3>
                    </Col>
               </Row>
          </Row>
          <Row className="justify-content-center mt-2">
               {/* Показываем четыре карточки на десктопах */}
               <Col sm={3} className=" d-flex d-none d-sm-block ">
                    <Container className="d-flex align-items-center">
                         <Image style={{ width: 20, height: 37 }} src={Vecto} />
                         <CardMini className="flex-grow-1" />
                    </Container>
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <CardMini className="flex-grow-1" />
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <CardMini className="flex-grow-1" />
               </Col>
               <Col sm={3} className="d-none d-sm-block">
                    <Container className="d-flex align-items-center">
                         <CardMini className="flex-grow-1" />
                         <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
                    </Container>
               </Col>

               {/* Показываем одну карточку на мобильных устройствах */}
               <Col xs={12} className="d-block d-sm-none">
                    <Container className="d-flex align-items-center">
                         <Image style={{ width: 20, height: 37 }} src={Vecto} />
                         <CardMini className="flex-grow-1" />
                         <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
                    </Container>
               </Col>
          </Row>
     </Container>

)