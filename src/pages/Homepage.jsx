import { NavLink } from 'react-router-dom';
import PageNav from '../components/PageNav';

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Homepage</h1>
      <NavLink to="/app">Go to the app</NavLink>
    </div>
  );
}

export default Homepage;
