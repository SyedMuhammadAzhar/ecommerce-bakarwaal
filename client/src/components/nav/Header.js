import React, { useState } from 'react'

import { Menu } from 'antd';
import { HomeOutlined , SettingOutlined,UserOutlined,UserAddOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; //Menu.subMenu   its destructoring

const Header =()=>{


    const [current,setCurrent]=useState("home");


    const handleClick=(e)=>{

        setCurrent(e.key);


    }




    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>

          <Menu.Item key="login" icon={<UserOutlined />} className="float-right">
            Login
          </Menu.Item>

          <Menu.Item key="register" icon={<UserAddOutlined /> } className="float-right">
            Register
          </Menu.Item>


          
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="UserName">
            
              <Menu.Item key="setting:1">DashBoard</Menu.Item>
              <Menu.Item key="setting:2">Logout</Menu.Item>
            
            
          </SubMenu>
         
        </Menu>
      );





}

export default Header;