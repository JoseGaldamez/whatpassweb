import { Empty, Button } from 'antd';
import './EmptyComponent.css';

export const EmptyComponent = () => {
    return (
        <div className='empty_components'>
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            <Button className="button_create_new" >Create New Password</Button>
        </div>
    )
}
