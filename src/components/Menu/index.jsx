import { Link } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/projets'>Projets</Link>
        </li>
        <li>
          <Link to='/profile'>Qui suis-je ?</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
