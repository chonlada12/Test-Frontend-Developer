import ContentLayout from './content';
import HeaderLayout from './header';

const AppLayout = () => {
  return (
    <div className="!h-screen">
      <HeaderLayout />
      <ContentLayout />
    </div>
  );
};

export default AppLayout;
