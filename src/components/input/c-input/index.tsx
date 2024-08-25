import { Input, InputNumber, InputNumberProps, InputProps } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';

export const CInput: FC<InputProps> = ({ ...props }) => {
  return <Input {...props} size="large" />;
};

export const CInputNumber: FC<InputNumberProps> = ({ className, ...props }) => {
  return <InputNumber {...props} size="large" className={classNames(className, 'w-full')} />;
};

export * from './id-card-number';
export * from './phone-number';
