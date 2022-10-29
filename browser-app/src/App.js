import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import PostHome from "./Post";
import UserList from "./User/List";

const { Header, Footer } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <Header style={{color: "#ffffff"}}>
          E6156 Sprint1
      </Header>
      <Menu
          style={{ marginright: 'auto' }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[1]}>
          <Menu.Item key="1">
              <span>Posts Home</span>
              <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
              <span>Users</span>
              <Link to="/user" />
          </Menu.Item>
      </Menu>
      <Layout>
        <Routes>
          <Route exact path="/" element={<PostHome/>}/>
          <Route exact path="/user" element={<UserList/>}/>
        </Routes>
      </Layout>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        This is the space for footer
      </Footer>
    </Layout>
  </Router>
);

export default App;
