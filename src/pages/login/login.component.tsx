import useLocalization from 'assets/lang';
import { useLogin } from './actions/login.mutation';
import { useLoginStyles } from './login.style';
import { useCallback, useMemo } from 'react';
import { Button, Form, FormRule, Input } from 'antd';
import { ILoginFormValues } from './login';
import BackgroundComponent from 'core/layouts/background/background';
import { Routes } from 'router/routes';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const translate = useLocalization();
  const { mutate, isLoading } = useLogin();
  const { title, page, welcome, button, or } = useLoginStyles();

  const initialValues: ILoginFormValues = {
    email: '',
    password: '',
  };

  const onSubmit = useCallback(
    (values: ILoginFormValues) => {
      mutate(values);
    },
    [mutate]
  );
  const navigate = useNavigate();
  const rules: { [key: string]: FormRule[] } = useMemo(
    () => ({
      email: [
        {
          required: true,
          message: 'Iinput required',
        },
        {
          pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
          message: 'Invalid email',
        },
      ],
      password: [
        {
          required: true,
          message: 'Password required',
        },
      ],
    }),
    []
  );
  return (
    <>
      <BackgroundComponent
        isLogoVis={true}
        isLeftVecVis={true}
        isRightVecVis={true}
      >
        <div className={page}>
          <div>
            <div>
              <div className=' mb-35 text-center'>
                <h1 className={welcome}>{translate('welcome')}</h1>
              </div>
              <div className=' mb-35 text-center'>
                <h1 className={title}>{translate('login_title')}</h1>
              </div>
            </div>
            <Form
              name='login'
              initialValues={initialValues}
              onFinish={onSubmit}
              layout='vertical'
            >
              <Form.Item
                name='email'
                rules={rules.email}
                required={false}
                label='Enter your username or email address'
              >
                <Input />
              </Form.Item>
              <Form.Item
                rules={rules.password}
                required={false}
                name='password'
                label='Enter your Password'
              >
                <Input type='password' />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 13, span: 16 }}>
                <a href='/forgot-password'>Forgot Password</a>
              </Form.Item>
              <div>
                <Button
                  loading={isLoading}
                  className={button}
                  type='primary'
                  htmlType='submit'
                >
                  {translate('login_sign_in_button')}
                </Button>
                <h2 className={or}>OR</h2>
                <Button
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF4E3',
                    color: '#BC7E23',
                    fontWeight: '500',
                  }}
                  className={button}
                  type='primary'
                  htmlType='submit'
                  onClick={() => navigate(Routes.signup)}
                >
                  Sign Up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </BackgroundComponent>
    </>
  );
};
export default LoginComponent;
