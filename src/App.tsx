import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';

import './App.css';
import { Container, Col, Row } from 'react-bootstrap';
import { Sidebar } from './app/views/sidebar/Sidebar';
import { MainPanel } from './app/views/main/MainPanel';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={4}>
          <Sidebar />
        </Col>
        <Col sm={8}>
          <MainPanel />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
