import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardDeck, Card, Button } from "react-bootstrap";
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';


export default class Home extends Component {
    render() {
        return (
           <>
            <CarouselBox/>


            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">
                    <Card bg="light" border="primary" text="primary" >
                       
                        <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>igoerugoerugoeruorytou</Card.Text>
                           <Button variant="primary">about</Button>
                        </Card.Body>
                        <Card.Img height="100px" variant="bottom" src={ pic1 } />
                    </Card>

                    <Card>
                        <Card.Img
                        height="100px"
                        variant="top" 
                        src={ pic2 }
                        />
                        <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>igoerugoerugoeruorytou</Card.Text>
                           <Button variant="primary">about</Button>
                        </Card.Body>
                    </Card>


                    <Card>
                        <Card.Img
                        height="100px"
                        variant="top" 
                        src={ pic1 }
                        />
                        <Card.Body>
                           <Card.Title>Developers</Card.Title>
                           <Card.Text>igoerugoerugoeruorytou</Card.Text>
                           <Button variant="primary">about</Button>
                        </Card.Body>
                    </Card>




                </CardDeck>
            </Container>
            </>
        );
    }
}