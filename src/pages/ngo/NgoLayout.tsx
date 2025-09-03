import { Outlet } from 'react-router-dom';
import NgoNavbar from '../../components/NgoNavbar';
import Footer from '../../components/shared/Footer';

const NgoLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <NgoNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default NgoLayout;