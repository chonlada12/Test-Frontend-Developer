import { Outlet } from 'react-router-dom';

const ContentLayout = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default ContentLayout;
