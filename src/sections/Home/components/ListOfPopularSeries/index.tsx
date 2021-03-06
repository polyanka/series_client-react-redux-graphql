import React, { FC } from 'react';
import { List, Typography } from 'antd';
import { SeriesCard } from '../../../../lib/components/SeriesCard';
import { SeriesList } from '../../../../lib/graphql/queries/SeriesList/__generated__/SeriesList';

interface Props {
  seriesList: SeriesList['seriesList']['result'];
}

const { Title } = Typography;

export const ListOfPopularSeries: FC<Props> = ({ seriesList }) => {
  return (
    <>
      <Title level={2}>Premium TV Series</Title>
      <List
        grid={{ gutter: 16, column: 4, xs: 1, sm: 2, lg: 4 }}
        dataSource={seriesList}
        renderItem={(series) => (
          <List.Item>
            <SeriesCard series={series} />
          </List.Item>
        )}
      />
    </>
  );
};
