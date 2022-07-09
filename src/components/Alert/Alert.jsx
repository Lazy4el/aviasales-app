import { Alert } from 'antd';
import React from 'react';

export const AlertFilter = () => (
  <Alert
    message="Внимание"
    description="Рейсов, подходящих под заданные фильтры, не найдено."
    type="warning"
    showIcon
  />
);
