import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { CardTest, ItemTest } from '../../components/display';

const HomePage = () => {
  const { t } = useTranslation();
  const item: ItemTest[] = [
    { title: t('test-1'), content: t('layout-style'), path: '/layout-style' },
    { title: t('test-2'), content: t('form-table'), path: '/form-table' },
  ];
  return (
    <div className="center h-full">
      <Row gutter={[14, 14]}>
        {item.map((e, i) => {
          return (
            <Col key={i}>
              <CardTest {...e} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default HomePage;
