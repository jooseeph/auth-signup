import { createBrowserRouter } from 'react-router-dom';
import AuthProtectedComponent from './protected/auth-protected.component';
import PublicComponent from 'core/layouts/public/public.component';
import HomeComponent from 'pages/home/home.component';
import { Routes } from './routes';
import LoginComponent from 'pages/login/login.component';
import SignUpComponent from 'pages/sign-up/sign-up.componenet';
import AuthComponent from 'core/layouts/auth/auth.component';

const router = createBrowserRouter(
  [
    {
      element: (
        <AuthProtectedComponent layout='public'>
          <PublicComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.home,
          element: <HomeComponent />,
        },
      ],
    },
    {
      path: Routes.auth,
      element: (
        <AuthProtectedComponent layout='auth'>
          <AuthComponent />
        </AuthProtectedComponent>
      ),
      children: [
        {
          path: Routes.login,
          element: <LoginComponent />,
        },
        {
          path: Routes.signup,
          element: <SignUpComponent />,
        },
      ],
    },
  ],
  { basename: '/' }
);

export default router;
