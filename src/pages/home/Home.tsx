import { Link } from 'react-router-dom';
import { Layout } from 'antd';

import './Home.css';


export const Home = () => {
    return (
        <Layout className='content'>
            <Layout.Content className='full'>
                <h1>Home Page</h1>
                <Link to={'login'}>Iniciar Sesión</Link>
            </Layout.Content>
        </Layout>
    );
};
