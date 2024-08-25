import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { SelectLanguage } from '../components/input';
import { ENUM_LANGUAGE_TYPE } from '../enum';
import { useAppLanguage } from '../provider/app-language';

const HeaderLayout = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const { changeLanguage, lang } = useAppLanguage();

  const title = t(pathname.replace('/', ''));

  const onChange = (value: string) => {
    changeLanguage(value as ENUM_LANGUAGE_TYPE);
  };

  return (
    <div className="px-8 h-[80px] flex justify-between items-end">
      <span className="text-[34px] m-0">{title}</span>
      <SelectLanguage value={lang} onChange={onChange} className="w-[90px]" size="large" />
    </div>
  );
};

export default HeaderLayout;
