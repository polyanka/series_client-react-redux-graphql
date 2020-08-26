import React, { FC } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';

export const GenreSearchBar: FC = () => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <Link to="/series/genres/fantasy">
          <Card>FANTASY</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/genres/comics">
          <Card>COMICS</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/genres/drama">
          <Card>DRAMA</Card>
        </Link>
      </Col>
      <Col xs={12} md={6}>
        <Link to="/series/genres/horror">
          <Card>HORROR</Card>
        </Link>
      </Col>
    </Row>
  );
};
