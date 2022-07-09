import { Alert } from 'antd';
import React from 'react';

export const AlertFilter = () => {
  return (
    <Alert
      message="Внимание"
      description="Рейсов, подходящих под заданные фильтры, не найдено."
      type="warning"
      showIcon
    />
  );
};

export const ErrorDate = () => {
  return <Alert message="Ошибка" description="Непредвиденная ошибка." type="error" showIcon />;
};
