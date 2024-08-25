import { Col, Form, Row } from 'antd';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../../components/display';
import { CreateForm } from '../../components/form';
import { CInput } from '../../components/input';
import TableContent from './table-content';

const FormAndTablePage = () => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    values.dateOfBirth = dayjs(values.dateOfBirth).format();
    if (values.id) {
      dispatch({ type: 'personal/update', payload: values });
    } else {
      dispatch({ type: 'personal/create', payload: values });
    }
    // return form.resetFields();
  };

  const onClear = () => {
    form.resetFields();
  };

  const onBack = () => {
    return navigate('/');
  };

  return (
    <div className=" overflow-auto px-8">
      <Row>
        <Col span={5}></Col>
        <Col span={14} className="pt-8">
          <Form form={form} onFinish={onFinish}>
            <Form.Item name="id" hidden>
              <CInput />
            </Form.Item>
            <CreateForm onClear={onClear} />
          </Form>
        </Col>
        <Col span={5} className="flex justify-end pt-2">
          <ButtonCustom onClick={onBack}>{t('home')}</ButtonCustom>
        </Col>
        <Col span={24}>
          <TableContent form={form} />
        </Col>
      </Row>
    </div>
  );
};

export default FormAndTablePage;
