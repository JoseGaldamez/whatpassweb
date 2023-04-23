import { useState } from 'react';
import { EmptyComponent } from '../EmptyComponent/EmptyComponent.tsx';
import { Typography, Button, Col, Row, Statistic, Divider } from 'antd';

const { Title } = Typography;


export const DashboardHome = () => {

    const [empty, _] = useState(false);

    if (empty) {
        return <div>
            <EmptyComponent />
        </div>;
    }


    return (
        <div style={{ padding: '20px' }}>
            <Title level={2}>Home</Title>
            <Divider />
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} />
                </Col>
                <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    <Button style={{ marginTop: 16 }} type="primary">
                        Recharge
                    </Button>
                </Col>
                <Col span={12}>
                    <Statistic title="Active Users" value={112893} loading />
                </Col>
            </Row>
        </div>
    )

};
