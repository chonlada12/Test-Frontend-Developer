import { Col, Form, FormItemProps } from 'antd';
import classNames from 'classnames';
import { FC } from 'react';

interface FormProps extends FormItemProps {
  span?: number;
}

export const FormItem: FC<FormProps> = ({ span, children, className, ...props }) => {
  return (
    <Col span={span}>
      <Form.Item {...props} className={classNames('form-item', className)}>
        {children}
      </Form.Item>
    </Col>
  );
};
