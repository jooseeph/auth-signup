import BackgroundComponent from 'core/layouts/background/background';
import { useHomeStyles } from './home.style';
import { useStore } from 'store/store.config';
import { removeToken } from 'core/helpers/get-token';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'router/routes';
import colors from 'assets/styles/abstracts/color';

const HomeComponent = () => {
  const { page, subtitle, title, button } = useHomeStyles();
  const user = useStore('user');
  const navigate = useNavigate();

  return (
    <>
      <BackgroundComponent>
        <div className={page}>
          <h4 className={title}>Welcome </h4>
          <h2 style={{color:colors.btnBgColor}} className={title}>{user}</h2>
          <button
            className={button}
            onClick={() => {
              removeToken();
              navigate(Routes.login);
            }}
          >
            Log out
          </button>
        </div>
      </BackgroundComponent>
    </>
  );
};

export default HomeComponent;
