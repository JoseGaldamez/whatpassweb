import { Link, useNavigate } from 'react-router-dom';
import { Image, Layout } from 'antd';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import image from '../../../assets/logo_whatpass.png'

import './Login.css';

export const Login = () => {

    const navigate = useNavigate();

    const onFinish = (formValues: any) => {
        console.log('Received values of form: ', formValues);
        // Login Service consult

        navigate('/dashboard/home', { replace: true })

    };

    return (
        <Layout className='content'>
            <div className='central_form'>
                <div className='central_form__login'>
                    <div className='central_form__image'>
                        <Image width={200} src={image} preview={false} />
                    </div>
                    <Form
                        name='normal_login'
                        className='login-form'
                        initialValues={{ remember: true }}
                        onFinish={onFinish} >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Recordarme</Checkbox>
                            </Form.Item>

                            <Link className="login-form-forgot" to={'register'}>
                                Olvidé mi contraseña
                            </Link>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Layout>
    );
};
