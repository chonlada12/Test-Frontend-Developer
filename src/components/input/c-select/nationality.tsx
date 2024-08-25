import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSelect } from './style-select';

export const SelectNationality: FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation();
  const option: DefaultOptionType[] = [
    {
      value: 'thai',
      label: t('thai'),
    },
    {
      value: 'other',
      label: t('other'),
    },
  ];
  return <StyleSelect options={option} placeholder={t('select-nationality')} {...props} />;
};
