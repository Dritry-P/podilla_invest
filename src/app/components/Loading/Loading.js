import './_LoadingAnimation.scss';
import Logo from '../UI/logo/Logo';
import Circle from '../UI/circle_loading/Cicle';

const LoadingScreen = () => {

  return (
    <div className="loading_holder">
      <div className="logo_wrapper">
        <div className="logo_main">
          <Logo />
        </div>
        <div className="logo_top">
          <Logo />
        </div>
        <div className="logo_bottom">
          <Logo />
        </div>
      </div>

      <Circle/>
    </div>
  );
};

export default LoadingScreen;
