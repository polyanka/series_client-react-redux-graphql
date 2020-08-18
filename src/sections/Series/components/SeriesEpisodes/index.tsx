import React, { FC } from 'react';
import { Series } from '../../../../lib/graphql/queries/Series/__generated__/Series';
import { Typography, List, Row, Col, Space, Affix, Select } from 'antd';
import { EpisodesFilter } from '../../../../lib/graphql/globalTypes';

interface Props {
  seriesEpisodes: Series['series']['episodes'];
  episodesFilter: EpisodesFilter;
  episodesLimit: number;
  episodesPage: number;
  setEpisodesPage: (page: number) => void;
  setEpisodesFilter: (filter: EpisodesFilter) => void;
}

const { Title } = Typography;
const { Option } = Select;

export const SeriesEpisodes: FC<Props> = ({
  seriesEpisodes,
  episodesFilter,
  episodesLimit,
  episodesPage,
  setEpisodesPage,
  setEpisodesFilter,
}) => {
  const total = seriesEpisodes ? seriesEpisodes.total : null;
  const result = seriesEpisodes ? seriesEpisodes.result : null;

  const seriesEpisodesList = (
    <List
      itemLayout="horizontal"
      dataSource={result ? result : undefined}
      pagination={{
        current: episodesPage,
        total: total ? total : undefined,
        defaultPageSize: episodesLimit,
        onChange: (page) => setEpisodesPage(page),
      }}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={`season ${item.season} episode ${item.episode}`}
          />
          <List.Item.Meta title={item.name} description={item.rating} />
          <List.Item.Meta title={item.date} />
        </List.Item>
      )}
    />
  );

  const listingBookingsElement = seriesEpisodes ? (
    <>
      <Row>
        <Col>
          <Affix offsetTop={64}>
            <Space>
              <span>Filter By</span>
              <Select
                value={episodesFilter}
                onChange={(filter: EpisodesFilter) => setEpisodesFilter(filter)}
              >
                <Option value={EpisodesFilter.DATE_LOW_TO_HIGH}>
                  Date: Low to High
                </Option>
                <Option value={EpisodesFilter.DATE_HIGH_TO_LOW}>
                  Date: High to Low
                </Option>
              </Select>
            </Space>
          </Affix>
        </Col>
      </Row>

      <Title level={4}>Episodes</Title>
      {seriesEpisodesList}
    </>
  ) : null;

  return listingBookingsElement;
};
