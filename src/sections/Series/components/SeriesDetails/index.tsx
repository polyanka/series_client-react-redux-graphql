import React, { FC } from 'react';
import { Divider, Row, Typography, Col, List } from 'antd';
import { Series as SeriesData } from '../../../../lib/graphql/queries/Series/__generated__/Series';

interface Props {
  series: SeriesData['series'];
}

const { Title } = Typography;

export const SeriesDetails: FC<Props> = ({ series }) => {
  return (
    <Row>
      <Col xs={24}>
        <Title level={3}>{series.name}</Title>
        <Title level={4}>{series.rating}</Title>
        <Divider />
        <List
          itemLayout="vertical"
          dataSource={[series]}
          renderItem={(series) => (
            <List.Item>
              <List.Item.Meta title="Genres:" description={series.genres} />
              <List.Item.Meta title="Status:" description={series.status} />
              <List.Item.Meta title="Date:" description={series.date} />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
