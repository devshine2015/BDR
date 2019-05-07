import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Profile from './components/Profile';
import DataLinks from './components/DataLinks';
import DataSources from './components/DataSources';
import Emails from './components/Emails';
import Consent from './components/Consent';
import DataAnalytics from './components/DataAnalytics';

const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Dashboard</h3>
      </Col>
    </Row>
    <Row>
      <Profile />
      <DataLinks />
      <Consent />
      <DataSources />
      <Emails />
      <DataAnalytics />
    </Row>
  </Container>
);

export default ExamplePage;
