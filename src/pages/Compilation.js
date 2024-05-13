import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vecto from './ComponentPage/Img/Vecto.svg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import img from './ComponentPage/Img/image 10.png';
import heart from './ComponentPage/Img/ICONS.svg';


import { useState, useEffect } from 'react';

export const Compilation = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:8080/book/public/read';
    const credentials = 'admin:admin';
    const encodedCredentials = Buffer.from(credentials).toString('base64');
    
    fetch(url, {
      headers: {
        'Authorization': 'Basic ' + encodedCredentials,
      }
    })
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <h6>{books}</h6>
        {books.map((book, index) => (
          <Col sm={4} key={index} className="d-flex d-none d-sm-block">
            <Container className="d-flex align-items-center">
              <Image style={{ width: 20, height: 37 }} src={Vecto} />
              <Container className="col-centered d-flex justify-content-center align-items-center" style={{ background: "#B7ADBE" }}>
                <div className="text-center">
                  <Image className="mt-2" src={img} style={{ width: 112, height: 174 }} />
                  <h3 className="font-Dimica-Light mt-2" style={{ fontSize: 20 }}>{book.title}</h3>
                  <h5 className="font-Dimica-Light" style={{ fontSize: 15 }}>{book.author}</h5>
                  <Container className="col-centered">
                    <Button className="m-1 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>{book.price} ₽</Button>
                    <Button className="m-1 text-dark border border-dark" variant="white" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                    <Image src={heart} style={{ justifyContent: "center" }} />
                  </Container>
                </div>
              </Container>
              <Image style={{ width: 20, height: 37, transform: 'rotate(180deg)' }} src={Vecto} />
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Compilation;
