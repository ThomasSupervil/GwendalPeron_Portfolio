import './style.scss';
import Menu from '../Menu';

const Profile = () => {
  return (
    <>
      <Menu />
      <h1 className='title'>Qui suis-je ?</h1>
      <img src='' alt='' />
      <div className='role'>
        <p>Chef opérateur</p>
        <p>Electrcien</p>
        <p>Photographe</p>
      </div>
      <p className='description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
};

export default Profile;
