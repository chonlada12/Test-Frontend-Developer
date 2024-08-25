import { SelectProps } from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSelect } from './style-select';

export const SelectTitleName: FC<SelectProps> = ({ ...props }) => {
  const { t } = useTranslation();
  const data: DefaultOptionType[] = [
    {
      value: 'mr',
      label: t('mr'),
    },
    {
      value: 'mrs',
      label: t('mrs'),
    },
    {
      value: 'miss',
      label: t('miss'),
    },
  ];
  return <StyleSelect {...props} options={data} placeholder={t('select-title')} />;
};
