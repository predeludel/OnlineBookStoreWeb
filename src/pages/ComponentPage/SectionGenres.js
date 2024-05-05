import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Vecto from './Img/Vecto.svg';
import Image from 'react-bootstrap/Image';


function SectionGenres() {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ background: "#B7ADBE" }}>
            <div className="text-center">
                <Container className="col-centered">
                    <Button className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Лучшее 2023</Button>
                    <Button className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Романтика</Button>
                    <Button className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Детектив</Button>
                    <Button className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Проза</Button>
                    <Button className="m-2 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>История</Button>
                    <Image className="m-2" style={{ width: 20, height: 37, transform: 'rotate(-90deg)' }} src={Vecto} />
                </Container>
            </div>
        </Container>

    );
}

export default SectionGenres;