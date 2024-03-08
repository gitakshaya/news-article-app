import React from 'react';
import './App.css';
import { Layout, Menu, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import News from './news/News';

function App() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
      <Layout className="main">
      <Header className="header" style={{ display: 'flex', alignItems: 'center' }}>
        <p className='title'>News</p>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          // items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content className="main-con" >
        <News></News>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
