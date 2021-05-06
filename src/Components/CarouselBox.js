import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/pic1.jpeg';
import pic2 from '../assets/pic2.jpeg';

export default class CarouselBox extends Component {
    render() {
        return (
         
            <Carousel>

                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={ pic1 }
                        //width="1920" 
                        height="640"
                        alt ="Forest!!!"
                    
                    />

                    <Carousel.Caption>

                        <h3>Forest Image!!!</h3>
                        <p>fgojuhgfodgfhuodufgoiwdeufowieuftoiewutoewutoweutoewutoweutoewuo</p>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={ pic2 }
                        //width="1920" 
                        height="640"
                        alt ="Chairs!!!"

                    
                    />

                    <Carousel.Caption>

                        <h3>Chairs Image!!!</h3>
                        <p>fgojuhgfodgfhuodufgoiwdeufowieuftoiewutoewutoweutoewutoweutoewuo</p>
                    </Carousel.Caption>

                </Carousel.Item>



                <Carousel.Item>
                    <img

                        className="d-block w-100"
                        src={ pic1 }
                        //width="1920" 
                        height="640"
                        alt ="Forest!!!"
                    
                    />

                    <Carousel.Caption>

                        <h3>Forest Image!!!</h3>
                        <p>fgojuhgfodgfhuodufgoiwdeufowieuftoiewutoewutoweutoewutoweutoewuo</p>
                    </Carousel.Caption>

                </Carousel.Item>



    





            </Carousel>


        )
    }
}