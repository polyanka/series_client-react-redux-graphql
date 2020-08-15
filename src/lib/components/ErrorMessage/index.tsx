import React, { FC } from 'react';
import { Alert } from 'antd';

interface Props {
  message?: string;
  description?: string;
}
export const ErrorMessage: FC<Props> = ({
  message = 'Uh oh, Something went wrong :(',
  description = 'Please, try again later',
}) => {
  return (
    <Alert banner closable message={message} description={description}></Alert>
  );
};
