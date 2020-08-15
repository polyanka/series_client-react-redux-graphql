import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SeriesList_seriesList_result } from '../../graphql/queries/SeriesList/__generated__/SeriesList';
import { Card, Typography } from 'antd';

interface Props {
  series: SeriesList_seriesList_result;
}

const { Text } = Typography;

export const SeriesCard: FC<Props> = ({ series }) => {
  const { id, name } = series;

  return (
    <Link to={`/series/${id}`}>
      <Card hoverable>
        <Text strong ellipsis>
          {name}
        </Text>
      </Card>
    </Link>
  );
};
