import { Layout, Menu, Card, Button } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState} from 'react';
import './App.css';
import PostHome from "./Post";
import UserList from "./User/List";
import PostDetail from './Detail';
import Login from './components/Login';

const { Header, Footer, Content, Sider } = Layout;

const App = () => {
  const [userInfo, setUserInfo] = useState({
    userId: -1, 
    username: "", 
    isLogin: false,
  });

  const handleSubmit = (values) => {
    console.log("login success");
    setUserInfo({userId: 1, username: "Somebody", isLogin: true});
    // console.log(userInfo);
  }

  const handleLogout = () => {
    setUserInfo({userId: -1, username: "", isLogin: false});
  }

  const UserInfo = ({userInfo}) => {
    return userInfo.isLogin ? 
      <Card title={userInfo.username}>
        <p>More User Info</p>
        <p>Such as Email</p>
        <p>Or Phone Number</p>
        <Button type='primary' onClick={handleLogout}>Logout</Button>
      </Card> : <Login onSubmit={handleSubmit}/>
  };

  return (
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
          <Content>
            <Routes>
              <Route exact path="/" element={<PostHome/>}/>
              <Route exact path="/user" element={<UserList/>}/>
              <Route exact path="/detail/:postId" element={<PostDetail/>}/>
            </Routes>
          </Content>
          <Sider theme='light' width={300} style={{background: "#ececec"}}>
            <UserInfo userInfo={userInfo}/>
          </Sider>
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
}

export default App;
