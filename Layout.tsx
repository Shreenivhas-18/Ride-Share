import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animation';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <motion.main 
        className="flex-grow"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;