import { Card, List, Typography, Divider } from 'antd';
const { Title } = Typography;
import './Passwords.css';

const data = [
    {
        title: 'Title 1',
        description: 'Description 1'
    },
    {
        title: 'Title 2',
        description: 'Description 2'
    },
    {
        title: 'Title 3',
        description: 'Description 3'
    },
    {
        title: 'Title 4',
        description: 'Description 4'
    },
    {
        title: 'Title 5',
        description: 'Description 5'
    },
    {
        title: 'Title 6',
        description: 'Description 6'
    }
];

export const Passwords = () => {
    return <div style={{ padding: '20px' }}>
        <Title level={2}>Your Passwords</Title>
        <Divider />
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 4,
                xxl: 4,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item className='card_item_password'>
                    <Card title={item.title}>{item.description}</Card>
                </List.Item>
            )}
        />
    </div>;
};
