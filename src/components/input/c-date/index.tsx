import { DatePicker } from 'antd';
import { PickerProps } from 'antd/es/date-picker/generatePicker';
import classNames from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ENUM_KEY_LOCAL_STORAGE, ENUM_LANGUAGE_TYPE } from '../../../enum';
import { getStorage } from '../../../service/storage';

export interface DateProps extends PickerProps {
  formatDate?: string;
}

export const DateCustom: FC<DateProps> = ({ className, ...props }) => {
  const { t } = useTranslation();
  const lang = getStorage(ENUM_KEY_LOCAL_STORAGE['@test-frontend-language']) as ENUM_LANGUAGE_TYPE;
  const format: { en: string; th: string } = {
    en: 'MM/DD/YYYY',
    th: 'MM/DD/YYYY',
  };
  return (
    <DatePicker
      placeholder={t('m/d/y')}
      className={classNames('w-full', className)}
      size="large"
      format={format[lang]}
      {...props}
    />
  );
};
