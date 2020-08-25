import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Layout, Input, Row, Col } from 'antd';

const { Header } = Layout;
const { Search } = Input;

export const AppHeader = withRouter(
  ({ location, history }: RouteComponentProps) => {
    const [search, setSearch] = useState('');

    useEffect(() => {
      const { pathname } = location;

      if (!pathname.includes('/series')) {
        setSearch('');
        return;
      }
    }, [location]);

    const onSearch = (value: string) => {
      const timmedValue = value.trim();

      if (timmedValue) {
        history.push(`/series/${timmedValue}`);
      }
    };

    return (
      <Header>
        <Row justify="center" align="middle" style={{ height: 60 }}>
          <Col span={4}>
            <Link to="/">Home</Link>
          </Col>
          <Col span={16}>
            <Search
              placeholder="Search 'name'"
              enterButton
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onSearch={onSearch}
              style={{ display: 'block' }}
              size="large"
            />
          </Col>
        </Row>
      </Header>
    );
  }
);
