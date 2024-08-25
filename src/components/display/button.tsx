import { Button, ButtonProps } from 'antd';
import { FC } from 'react';

export const ButtonCustom: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button size="large" {...props}>
      {children}
    </Button>
  );
};
