import { Select, SelectProps } from 'antd';
import { FC } from 'react';

export const StyleSelect: FC<SelectProps> = ({ ...props }) => {
  return <Select {...props} size="large" className="" />;
};
