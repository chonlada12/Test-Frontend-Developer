import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../../components/display';
import ContentLayout from './content';

const LayoutAndStylePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onBack = () => {
    return navigate('/');
  };
  return (
    <div className=" overflow-auto px-8">
      <Row>
        <Col span={2}></Col>
        <Col span={20} className="pt-8">
          <ContentLayout />
        </Col>
        <Col span={2} className="flex justify-end pt-2">
          <ButtonCustom onClick={onBack}>{t('home')}</ButtonCustom>
        </Col>
      </Row>
    </div>
  );
};

export default LayoutAndStylePage;
