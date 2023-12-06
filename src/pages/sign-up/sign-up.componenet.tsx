import BackgroundComponent from 'core/layouts/background/background';
import { useSignupStyles } from './sign-up.style';
import { IRegisterFormValues } from './sign-up';
import { useRegister } from './actions/sign-up,mutation';
import { Button, Form, FormRule, Input } from 'antd';
import { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';

const SignUpComponent = () => {
  const { title, page, wrapper, button, subtitle, left, right, contact } =
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
      username: [
        {
          required: true,
          message: 'Username required',
        },
      ],
      contactNumber: [
        {
          required: true,
          message: 'Contact Number required',
        },
      ],
    }),
    []
  );
  return (
    <BackgroundComponent
      isLogoVis={true}
      isLeftVecVis={true}
      isRightVecVis={true}
    >
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
                  rules={rules.email}
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
                    <Form.Item
                      rules={rules.username}
                      required={false}
                      name='username'
                      label='User name'
                    >
                      <Input
                        placeholder='Username'
                        type='username'
                        name='username'
                      />
                    </Form.Item>
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <Form.Item
                    
                      rules={rules.contactNumber}
                      required={false}
                      name='number'
                      label={<span style={{ width: '106px' }}>Contact Number</span>}
                      >
                      <Input placeholder='Number' type='' />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item
                  rules={rules.password}
                  required={false}
                  name='password'
                  label='Enter your password'
                >
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
