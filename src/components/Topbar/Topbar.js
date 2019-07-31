import React, { Component } from 'react';
import { Menu } from 'antd';
import styles from './index.css';
import { Link } from 'umi';

const { SubMenu } = Menu;


export default class Topbar extends Component {


  render() {
    return (
      <div>
        <div className={styles.logo}><Link to={'/'} className={styles.cursor}><h2 className={styles.logol}>没有Logo</h2>
        </Link></div>
        <Menu className={styles.menu}
              mode="horizontal">
          <Menu.Item key="mail" className={[styles.cursor, styles.item]}>

            <Link to={'/'} className={styles.cursor}>首页</Link>
          </Menu.Item>
          <Menu.Item key="app" className={[styles.cursor, styles.item]}>

            <Link to={'/'} className={styles.cursor}>不是首页</Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className={[styles.cursor, styles.item]}>

                <Link to={'/'} className={styles.cursor}>首页</Link>

            </span>
            }
          >
            <Menu.ItemGroup title="后端">
              <Menu.Item key="setting:1" className={styles.cursor}>Java</Menu.Item>
              <Menu.Item key="setting:2" className={styles.cursor}>Android</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="前端">
              <Menu.Item key="setting:3" className={styles.cursor}>React</Menu.Item>
              {/*<Menu.Item key="setting:4" className={styles.cursor}>Option 4</Menu.Item>*/}
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay" className={[styles.cursor, styles.item]}>
            <Link to={'/messages'} rel="noopener noreferrer">
              留言板
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}



