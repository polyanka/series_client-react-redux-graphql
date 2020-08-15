import React, { FC } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export const HomeSearch: FC = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Link to="/series/fantasy">
          <Card>FANTASY</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/comics">
          <Card>COMICS</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/drama">
          <Card>DRAMA</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/thriller">
          <Card>THRILLER</Card>
        </Link>
      </Col>
    </Row>
  );
};
