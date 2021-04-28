import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import SpringShow from './components/useSpring';
import ChainShow from './components/useChain';
import FlipCard from './components/useSpring/flipCard';
import SvgFilter from './components/useSpring/SvgFilter';
import DragList from './components/useSprings/DraggableList';
import TrailShow from './components/useTrail';
import ImageFade from './components/useTransition/ImageFade';
import ListOrder from './components/useTransition/ListOrdering';
import MansoryShow from './components/useTransition/Masonry';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Container fluid="md">
        <Row>
          <Col>
              <h2 className="ml-5">useChain</h2>
                <Col><ChainShow /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5 mb-4">
          <Col>
              <h2>Use Spring Card</h2>
                <Col><SpringShow /></Col>
          </Col>
        </Row>
        
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Spring Flip Card</h2>
                <Col><FlipCard /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Spring SVG Filter</h2>
                <Col><SvgFilter /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Springs Draggable List</h2>
                <Col><DragList /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Trail</h2>
                <Col><TrailShow /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Transition ( Image Fade )</h2>
                <Col><ImageFade /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Transition ( List Ordering )</h2>
                <Col><ListOrder /></Col>
          </Col>
        </Row>
        <hr></hr>
        <Row className="mt-5">
          <Col>
            <h2>Use Transition ( MANSORY )</h2>
                <Col><MansoryShow /></Col>
          </Col>
        </Row>
        <hr></hr>
        {/* <Row className="mt-5">
          <Col>
            <h2>Use Transition ( Notifications )</h2>
                <Col><NotifShow /></Col>
          </Col>
        </Row> */}
      </Container>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
