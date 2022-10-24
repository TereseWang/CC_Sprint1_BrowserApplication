import { Breadcrumb, Layout, Card, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import PostList from "./Post/List";

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <Header style={{color: "#ffffff"}}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(5).fill(null).map((_, index) => {
            const key = index + 1;
            if (index === 0) {
              return { key, label: "E6156 Sprint" }
            } else {
              return { key, label: `nav ${key}`}
            }
          })}
        />
      </Header>
      <Routes>
        <Route exact path="/" element={<PostList/>}/>
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
