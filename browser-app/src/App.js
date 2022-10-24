import { Breadcrumb, Layout, Card } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import PostList from "./Post/List";

const { Header, Content, Footer, Menu } = Layout;

const App = () => (
    <Router>
  <Layout className="layout">
    <Header style={{color: "#ffffff"}}>
      <div className="logo" />
        E6156 Sprint1

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
