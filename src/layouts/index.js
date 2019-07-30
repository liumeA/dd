import React from 'react';
import { Layout } from 'antd';
import Topbar from '@/components/Topbar/Topbar';

const { Header, Content, Footer } = Layout;


function BasicLayout(props) {
  return (
    <div>

      <Layout className={'layout'}>
        <Header>
          <Topbar/>
        </Header>
        <Content style={{ padding: '0 50px' }}>

          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}> {props.children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>豫ICP备19026790</Footer>
      </Layout>
    </div>

  );
}

export default BasicLayout;
