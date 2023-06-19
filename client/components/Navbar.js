import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
const { Item } = Menu ;
import {LoginOutlined,HomeOutlined,UserOutlined } from "@ant-design/icons";
const Navbar = () => {
    return (
        <Menu mode='horizontal'>
            <Item icon={<HomeOutlined />}>
                <Link href="/">  Home  </Link>
            </Item>
            <Item icon={<LoginOutlined />}>
                <Link href="/login">  Login  </Link>
            </Item>
            <Item icon={<UserOutlined />}>
                <Link href="/register"> Register  </Link>
            </Item>
        </Menu>
    );
};

export default Navbar;