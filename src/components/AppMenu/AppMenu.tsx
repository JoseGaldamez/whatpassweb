import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

import {
  SettingOutlined,
  HomeOutlined,
  ShareAltOutlined,
  LockOutlined
} from '@ant-design/icons';

import './AppMenu.css';

export const AppMenu = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path, { replace: true });
  }

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={['home']}
      onClick={({ key }) => navigateTo(key)}
      items={[
        {
          key: 'home',
          icon: <HomeOutlined />,
          label: 'Home',
        },
        {
          key: 'passwords',
          icon: <LockOutlined />,
          label: 'Passwords',
        },
        {
          key: 'shared',
          icon: <ShareAltOutlined />,
          label: 'Shared',
        },
        {
          key: 'setting',
          icon: <SettingOutlined />,
          label: 'Setting',
        },
      ]}
    />
  )
}
