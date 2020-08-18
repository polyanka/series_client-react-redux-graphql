import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SeriesList_seriesList_result } from '../../graphql/queries/SeriesList/__generated__/SeriesList';
import { Card } from 'antd';

const { Meta } = Card;

interface Props {
  series: SeriesList_seriesList_result;
}

export const SeriesCard: FC<Props> = ({ series }) => {
  const { id, name, date, genres, status } = series;

  return (
    <Link to={`/series/${id}`}>
      <Card title={name} hoverable>
        <Meta title="Genres" description={genres} />
        <Meta title="Status" description={status} />
        <Meta title="Date" description={date} />
      </Card>
    </Link>
  );
};
