import './style.scss';
import Menu from '../Menu';

const LandingPage = () => {
  return (
    <>
      <Menu />
      <main>
        <div className="title">
          <h1 className="name">
            Gwendal
            <br />
            Peron
          </h1>
          <div className="subTitle">
            <h2>Director of photography</h2>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
