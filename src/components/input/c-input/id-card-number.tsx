import { Col, Row } from 'antd';
import { FC, useRef, useState } from 'react';

interface IdCardNumberProps {
  value?: string[];
  onChange?: (value: string) => void;
}

export const InputIdCardNumber: FC<IdCardNumberProps> = ({ value, onChange }) => {
  const input = [1, 4, 5, 2, 1];
  const [inputValue, setInputValue] = useState(['', '', '', '', '']);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const onChangeInput = (event: any, index: number, maxLength: number) => {
    const { value } = event.target;
    const newValue = value.replace(/\D/g, ''); // Remove not number

    // Update the current input's value
    const newInputValue = [...inputValue];
    newInputValue[index] = value;

    setInputValue(newInputValue);
    onChange?.(newInputValue.join(''));

    // Move focus to the next input
    if (newValue.length === maxLength) {
      inputRefs?.[index + 1]?.current?.focus();
    } else if (newValue.length === 0 && index > 0) {
      // Move focus to the previous input if the input is empty
      inputRefs?.[index - 1]?.current?.focus();
    }
  };

  const sliceValue = () => {
    const newValue1 = value?.slice(0, 1);
    const newValue2 = value?.slice(1, 5);
    const newValue3 = value?.slice(5, 10);
    const newValue4 = value?.slice(10, 12);
    const newValue5 = value?.slice(12, 13);

    return [newValue1, newValue2, newValue3, newValue4, newValue5];
  };

  const getValue = sliceValue();

  return (
    <Row>
      {input.map((item, index) => {
        return (
          <Col key={index} span={item === 1 ? 3 : item + 1}>
            <Row className="flex justify-center items-center">
              <Col span={20}>
                <input
                  className="input-id-card"
                  maxLength={item}
                  type="text"
                  defaultValue={getValue?.[index] || ''}
                  onChange={(e) => onChangeInput(e, index, item)}
                  ref={inputRefs[index]}
                />
              </Col>
              {index + 1 < input.length && (
                <Col span={4} className="flex justify-center items-center">
                  <span>-</span>
                </Col>
              )}
            </Row>
          </Col>
        );
      })}
    </Row>
  );
};
