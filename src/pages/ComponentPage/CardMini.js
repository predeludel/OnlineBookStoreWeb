import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Vector_yel from './Img/Vector_yel.svg';


import { useState, useEffect } from 'react';

function CardMini({ id }) {
    const [book, setBook] = useState([{ title: "wewew" }]);

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
        <Container className="col-centered d-flex justify-content-center align-items-center" style={{ background: "#001C17" }}>
            <div className="text-center">
                <Image className="mt-2" src={`http://localhost:8080/book/public/read/file/${id}`} style={{ width: 112, height: 174 }} />
                <h3 className="font-Dimica-Light mt-2" style={{ color: "#B7ADBE", fontSize: 20 }}>“{book.title}”</h3>
                <h5 className="font-Dimica-Light" style={{ color: "#B7ADBE", fontSize: 15 }}>{book.author}</h5>
                <Container className="col-centered">
                    <Button className="p-1 m-1 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>{book.price} ₽</Button>
                    <Button className="p-1 m-1 text-dark" variant="white" style={{ background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                    <Image src={Vector_yel} style={{ justifyContent: "center" }} />
                </Container>
            </div>
        </Container>
    );
}

export default CardMini;