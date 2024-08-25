import { Col, Radio, Row } from 'antd';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonCustom } from '../display';
import {
  CInput,
  CInputNumber,
  DateCustom,
  InputIdCardNumber,
  InputPhoneNumber,
  SelectNationality,
  SelectTitleName,
} from '../input';
import { FormItem } from './form-item';

interface CreateFormProps {
  onClear: () => void;
}

export const CreateForm: FC<CreateFormProps> = ({ onClear }) => {
  const { t } = useTranslation();
  return (
    <div className="box-form">
      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={6} name="title" label={t('title')} rules={[{ required: true }]}>
          <SelectTitleName />
        </FormItem>
        <FormItem span={9} name="firstName" label={t('first-name')} rules={[{ required: true }]}>
          <CInput />
        </FormItem>
        <FormItem span={9} name="lastName" label={t('last-name')} rules={[{ required: true }]}>
          <CInput />
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={8} name="dateOfBirth" label={t('date-of-birth')} rules={[{ required: true }]}>
          <DateCustom />
        </FormItem>
        <FormItem span={10} name="nationality" label={t('nationality')} rules={[{ required: true }]}>
          <SelectNationality />
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={24} name="idCardNumber" label={t('id-card-number')}>
          <InputIdCardNumber />
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={24} name="gender" label={t('gender')} rules={[{ required: true }]}>
          <Radio.Group>
            <Radio value="male">{t('male')}</Radio>
            <Radio value="female">{t('female')}</Radio>
            <Radio value="unspecified">{t('unspecified')}</Radio>
          </Radio.Group>
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={16} name="phoneNumber" label={t('phone-number')} rules={[{ required: true }]}>
          <InputPhoneNumber />
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={10} name="passport" label={t('passport')}>
          <CInput />
        </FormItem>
      </Row>

      <Row gutter={[10, 10]} className="w-full">
        <FormItem span={10} name="expectedSalary" label={t('expected-salary')} rules={[{ required: true }]}>
          <CInputNumber />
        </FormItem>
        <Col span={14}>
          <div className="center  ">
            <ButtonCustom className="mr-10" onClick={onClear}>
              {t('clear-data')}
            </ButtonCustom>
            <ButtonCustom htmlType="submit">{t('send-data')}</ButtonCustom>
          </div>
        </Col>
      </Row>
    </div>
  );
};
