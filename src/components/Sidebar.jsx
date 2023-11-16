import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet /> {/*React will place the nested route component here*/}
      <Footer />
    </div>
  );
}

export default Sidebar;
