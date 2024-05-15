import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardBasket from './ComponentPage/CardBasket';
export const Basket = () => (
     <Container>
          <Row className="col-centered d-flex justify-content-center align-items-center">
               <Row className="justify-content-center">
                    <Col className="text-center mt-2">
                         <h3 className="font-alcotton text-dark">Товары из вашей корзины</h3>
                         <p className="font-Dimica-Light" style={{ color: "#B7ADBE", textDecoration: "underline" }}>Вернуться к покупкам</p>
                    </Col>
               </Row>
          </Row>
          <CardBasket></CardBasket>
          <CardBasket></CardBasket>
          <CardBasket></CardBasket>
          <Container className="col-centered d-flex justify-content-center align-items-center">
               <Button className="p-1 m-1 text-dark " variant="white" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Перейти к оформлению заказа</Button>
          </Container>

     </Container>
)