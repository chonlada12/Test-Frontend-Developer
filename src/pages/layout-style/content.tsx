import { Col, Divider, Row } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CardLayout } from '../../components/display';

const dataKey: string[] = ['square', 'circle', 'oval', 'trapezoid', 'rectangle', 'parallelogram'];

const ContentLayout = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<string[]>(dataKey);
  const [switchShape, setSwitchShape] = useState<boolean>(false);

  const onMoveShape = (key: 'left' | 'right') => {
    if (key === 'right') {
      const newData = [...data];
      const firstData = newData.shift(); // Remove the first item of the array
      newData.push(firstData as string); // Add to the end of the array
      setData(newData);
    } else {
      const newData = [...data];
      const lastData = newData.pop(); // Remove the last item of the array
      newData.unshift(lastData as string); // Add to the first of the array
      setData(newData);
    }
  };

  const onMovePosition = () => {
    const newData = [...data];
    const firstThree = newData.slice(0, 3); // Get the first three items of the array
    const lastThree = newData.slice(-3); // Get the last three items of the array
    setData([...lastThree, ...firstThree]);

    setSwitchShape(!switchShape);
  };

  const onClickShape = () => {
    const newData = [...data].sort(() => Math.random() - 0.5); // Randomize the array
    setData(newData);
  };

  return (
    <div className="px-20">
      <div className="pb-4">
        <Row gutter={[10, 10]}>
          <Col span={6}>
            <CardLayout title={t('move-shape')} onClick={() => onMoveShape('right')}>
              <div className="triangle -rotate-90"></div>
            </CardLayout>
          </Col>
          <Col span={12}>
            <CardLayout title={t('move-position')} onClick={onMovePosition}>
              <div className="w-full flex justify-around">
                <div className="triangle"></div>
                <div className="triangle rotate-180"></div>
              </div>
            </CardLayout>
          </Col>
          <Col span={6}>
            <CardLayout title={t('move-shape')} onClick={() => onMoveShape('left')}>
              <div className="triangle rotate-90"></div>
            </CardLayout>
          </Col>
        </Row>
      </div>
      <Divider />
      <div className="">
        <Row gutter={[10, 10]} justify={switchShape ? 'center' : 'end'} className="mb-4">
          {data
            .filter((_, i) => i < 3)
            .map((item, index) => {
              return (
                <Col span={6} key={index}>
                  <CardShape type={item} onClick={onClickShape} />
                </Col>
              );
            })}
        </Row>
        <Row gutter={[10, 10]} justify={!switchShape ? 'center' : 'end'}>
          {data
            .filter((_, i) => i > 2)
            .map((item, index) => {
              return (
                <Col span={6} key={index}>
                  <CardShape type={item} onClick={onClickShape} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

interface CardShapeProps {
  type: string;
  onClick: () => void;
}

const CardShape = ({ type, onClick }: CardShapeProps) => {
  return (
    <CardLayout onClick={onClick}>
      <div className={type}></div>
    </CardLayout>
  );
};

export default ContentLayout;
