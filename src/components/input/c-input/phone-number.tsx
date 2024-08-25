import { E164Number } from 'libphonenumber-js/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneInput, { Value } from 'react-phone-number-input';

export interface InputPhoneNumberProps {
  value?: Value;
  onChange?: (value?: E164Number) => void;
}

export const InputPhoneNumber: FC<InputPhoneNumberProps> = ({ onChange, ...props }) => {
  const { t } = useTranslation();

  const onChangePhoneNumber = (value?: E164Number) => {
    onChange?.(value);
  };
  return (
    <PhoneInput
      defaultCountry="TH"
      onChange={onChangePhoneNumber}
      {...props}
      className="phoneNumber"
      placeholder={t('Enter phone number')}
    />
  );
};
