import { Outlet } from 'react-router-dom';

const PublicComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PublicComponent;
