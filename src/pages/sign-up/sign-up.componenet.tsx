import BackgroundComponent from 'core/layouts/background/background';
import { useSignupStyles } from './sign-up.style';
import { IRegisterFormValues } from './sign-up';
import { useRegister } from './actions/sign-up,mutation';
import { Button, Form, Input } from 'antd';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';

const SignUpComponent = () => {
  const { title, page, wrapper, button, subtitle, left, right } =
    useSignupStyles();
  const { mutate, isLoading } = useRegister();

  const initialValues: IRegisterFormValues = {
    email: '',
    username: '',
    password: '',
    number: '',
  };
  const onSubmit = useCallback(
    (values: IRegisterFormValues) => {
      mutate(values);
    },
    [mutate]
  );
  return (
    <BackgroundComponent>
      {
        <div className={page}>
          <div>
            <div className={wrapper}>
              <div className={left}>
                <h4 className={subtitle}>Welcome to Site</h4>
                <h2 className={title}>Sign up</h2>
              </div>
              <div className={right}>
                <p>
                  Have an Account ? <br />
                  <Link to={Routes.login} style={{ color: '#B87514' }}>
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
            <div>
              <Form
                name='login'
                layout='vertical'
                onFinish={onSubmit}
                initialValues={initialValues}
              >
                <Form.Item
                  required={false}
                  name='email'
                  label='Enter your username or email address'
                >
                  <Input placeholder='Username or email' type='email' />
                </Form.Item>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div style={{ flex: 1, marginRight: '10px' }}>
                    <Form.Item name='username' label='User name'>
                      <Input
                        placeholder='Username'
                        type='username'
                        name='username'
                      />
                    </Form.Item>
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <Form.Item name='number' label='Contact Number'>
                      <Input placeholder='Number' type='' />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item name='password' label='Enter your password'>
                  <Input placeholder='Password' type='password' />
                </Form.Item>
                <div>
                  <Button
                    className={button}
                    type='primary'
                    htmlType='submit'
                    loading={isLoading}
                  >
                    Sign Up
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      }
    </BackgroundComponent>
  );
};

export default SignUpComponent;
