import React from 'react';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import { Container, Row, Col } from 'react-bootstrap';
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
import ParallaxVert from './components/ParallexVert';
import AnimatingAuto from './components/useSpring/animatingAuto';
import Springs from './components/Spring';
import './index.css';

import reportWebVitals from './reportWebVitals';
import CommonConfigs from './components/commons/configs';


ReactDOM.render(
  <React.StrictMode>
      <div className="container py-3">
      <div className="col-lg-12">
        <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Use Chain</h6>
                    <div className="components"><ChainShow /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Use Spring</h6>
                        <div className="components"><SpringShow /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Animating Auto</h6>
                    <div className="components"><AnimatingAuto /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Use Spring Flip Card</h6>
                        <div className="components"><FlipCard /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Use Spring SVG Filter</h6>
                    <div className="components"><SvgFilter /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Use Spring Draggable List</h6>
                        <div className="components"><DragList /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Use Trail</h6>
                    <div className="components"><TrailShow /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Use Transition Image Fade</h6>
                        <div className="components"><ImageFade /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Use Transition List Ordering</h6>
                    <div className="components"><ListOrder /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Use Transition MANSORY</h6>
                        <div className="components"><MansoryShow /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row mb-3">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Common Configs</h6>
                    <div className="components"><CommonConfigs /></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h6>Render Props (Spring)</h6>
                        <div className="components"><Springs /></div>
                      </div>
                    </div>
              </div>
          </div>

          <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h6>Render Props Parallax Vert</h6>
                    <div className="components"><ParallaxVert /></div>
                  </div>
                </div>
              </div>
          </div>
        </div>

      </div>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
