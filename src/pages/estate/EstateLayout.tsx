import { Outlet } from 'react-router-dom';
import EstateNavbar from '../../components/EstateNavbar';
import Footer from '../../components/shared/Footer';

const EstateLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <EstateNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default EstateLayout;