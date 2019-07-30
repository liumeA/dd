import React, { Component } from 'react';
import { Icon, Menu } from 'antd';
import styles from './index.css';
import { Link } from 'umi';

const { SubMenu } = Menu;

export default class Topbar extends Component {


  render() {
    return (
      <div>
        <Icon type={'qq'} className={styles.logo}/>
        <Menu theme={'dark'} className={styles.menu}
              style={{ lineHeight: '64px' }}
              mode="horizontal">
          <Menu.Item key="mail">

            <Link to={'/'} className={styles.cursor}> <Icon type="mail"/>Navigation One</Link>
          </Menu.Item>
          <Menu.Item key="app" className={styles.cursor}>
            <Icon type="appstore"/>
            Navigation Two
          </Menu.Item>
          <SubMenu
            title={
              <span className={styles.cursor}>
              <Icon type="setting"/>
                <Link to={'1'} className={styles.cursor}> Navigation Three - Submenu</Link>

            </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1" className={styles.cursor}>Option 1</Menu.Item>
              <Menu.Item key="setting:2" className={styles.cursor}>Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3" className={styles.cursor}>Option 3</Menu.Item>
              <Menu.Item key="setting:4" className={styles.cursor}>Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}



