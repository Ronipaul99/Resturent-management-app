import React from 'react';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import '../css/PromoBanner.css';

const categories = [
  { title: 'Lunch', img: 'https://via.placeholder.com/100' },
  { title: 'Dinner', img: 'https://via.placeholder.com/100' },
  { title: 'Fast Food', img: 'https://via.placeholder.com/100' },
  { title: 'Near Me', img: 'https://via.placeholder.com/100' },
  { title: 'Breakfast', img: 'https://via.placeholder.com/100' },
];

const PromoBanner = () => {
  return (
    <div>
      {/* Banner Section */}
      <Carousel fade id='order-online'>
        <Carousel.Item>
          <div className="banner-content" style={{ backgroundColor: "#d01381" }}>
            <Container>
              <Row>
                <Col>
                  <h1 className="text-light">EazyDiner Eat Out Festival</h1>
                  <h2 className="text-light">50% OFF + Extra 25% OFF!</h2>
                  <Button variant="light">Explore Offers</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        {/* Add more slides if needed */}
      </Carousel>

      {/* Category Section */}
      <Container className="my-4" id='dining-out'>
        <h3 className="text-center">Hi Foodie, Dine Anytime!</h3>
        <Row className="d-flex justify-content-around">
          {categories.map((category, index) => (
            <Col key={index} xs={6} md={2} className="mb-3">
              <Card className="text-center">
                <Card.Img variant="top" src={category.img} />
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PromoBanner;
