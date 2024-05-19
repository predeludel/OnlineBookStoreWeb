import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Krest from './Img/Krest.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CardBasket({ id }) {
    const [book, setBook] = useState([{ title: "wewew" }]);
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:8080/book/public/read/${id}`;
        const username = "admin";
        const password = "admin";
        let headers = new Headers();
        headers.set("Authorization", "Basic " + btoa(username + ":" + password));

        fetch(url, {
            method: 'GET',
            headers: headers,
        })
            .then((response) => response.json())
            .then((data) => setBook(data));
    }, [id]);


    console.log(book);
    return (
        <Container className="d-flex border-bottom border-dark border-1 justify-content-center mt-4">
            <Row className="">
                
                {/* // Десктопная колонка (для md размера экрана) */}
                <Col md={4} className="d-none d-sm-block justify-content-end d-flex">
                    <Image className="p-4" src={`http://localhost:8080/book/public/read/file/${book.id}`} style={{height: "260px", width: "220px" }} onClick={() => navigate(`/book/${book.id}`)} />
                </Col>
                {/* // Мобильная колонка (для xs размера экрана) */}
                <Col xs={5} className="d-block d-sm-none">
                    <Image src={`http://localhost:8080/book/public/read/file/${book.id}`} style={{ maxWidth: "100%", height: "auto", width: "100%" }} onClick={() => navigate(`/book/${book.id}`)}/>
                </Col>

                <Col xs={5} md={6}>
                    <h5 className="font-Dimica-Light">"{book.title}"</h5>
                    <h6 className="font-Dimica-Light" style={{ color: "#B7ADBE" }}>{book.author}</h6>
                    <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#B7ADBE", color: "#001C17", fontFamily: 'Dimica-Light', borderRadius: 0 }}>{book.price} ₽</Button>
                </Col>
                <Col  className="mt-4" xs={1} md={1}>
                    <Image className="mt-4" src={Krest} style={{ justifyContent: "center" }} />
                </Col>
            </Row>
        </Container>

    );
}

export default CardBasket;