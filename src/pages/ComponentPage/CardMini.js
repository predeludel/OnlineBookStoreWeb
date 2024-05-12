import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import img from './Img/image 10.png';
import Vector_yel from './Img/Vector_yel.svg';

function CardMini() {
    return (
        <Container className="col-centered d-flex justify-content-center align-items-center" style={{ background: "#001C17" }}>
            <div className="text-center">
                <Image className="mt-2" src={img} style={{ width: 112, height: 174 }} />
                <h3 className="font-Dimica-Light mt-2" style={{ color: "#B7ADBE", fontSize: 20 }}>“Геометрия скорби”</h3>
                <h5 className="font-Dimica-Light" style={{ color: "#B7ADBE", fontSize: 15 }}>Майкл Фрейм</h5>
                <Container className="col-centered">
                    <Button className="p-1 m-1 text-dark background-light" variant="light" style={{ borderRadius: '60px', fontFamily: 'Dimica-Light' }}>700 ₽</Button>
                    <Button className="p-1 m-1 text-dark" variant="white" style={{background: "#EBEACA", borderRadius: '60px', fontFamily: 'Dimica-Light' }}>Купить</Button>
                    <Image src={Vector_yel} style={{ justifyContent: "center"}} />
                </Container>
            </div>
        </Container>

    );
}

export default CardMini;