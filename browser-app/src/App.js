import { Breadcrumb, Layout, Card, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import PostList from "./Post/List";
import UserList from "./User/List";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <Header style={{color: "#ffffff"}}>
          E6156 Sprint1
      </Header>
        <Content>
            <Menu
                style={{ marginright: 'auto' }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <span>Posts</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <span>Users</span>
                    <Link to="/user" />
                </Menu.Item>
            </Menu>
        </Content>
      <Routes>
        <Route exact path="/" element={<PostList/>}/>
          <Route exact path="/user" element={<UserList/>}/>
      </Routes>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  </Router>
);

export default App;
