import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSelect } from './style-select';

export const SelectLanguage: FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation();
  const data: DefaultOptionType[] = [
    {
      value: 'en',
      label: t('en'),
    },
    {
      value: 'th',
      label: t('th'),
    },
  ];
  return <StyleSelect {...props} options={data} placeholder={t('select-language')} />;
};
