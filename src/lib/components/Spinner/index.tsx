import React from 'react';
import { Row, Col, Spin } from 'antd';

export const Spinner = (): JSX.Element => {
  return (
    <Row align="middle" justify="center">
      <Col>
        <p>Loading</p>
        <Spin size="large" />
      </Col>
    </Row>
  );
};
