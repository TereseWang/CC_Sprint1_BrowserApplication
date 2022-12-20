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
  };

  const handleLogout = () => {
    setUserInfo({userId: -1, username: "", isLogin: false});
  };

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
        <Header style={{backgroundImage: "url(/Image/bg.png)" , backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover', backgroundPosition: 'center',
                            display: 'block', color:"#ffffff",fontSize: '50px', height: '120px'}}>
            <p style={{marginTop:"30px", marginLeft:"auto", fontWeight:"700"}}>CUbook</p>
        </Header>
        <Menu
            style={{background: "#002766", display: 'block', marginright: 'auto', color:"#ffffff", fontSize: '20px'}}
            mode="horizontal"
            defaultSelectedKeys={[1]}>
            <Menu.Item key="1" style={{marginLeft: '50px'}}>
                <span>Home</span>
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
              <Route exact path="/" element={<PostHome userInfo={userInfo}/>}/>
              <Route exact path="/user" element={<UserList/>}/>
              <Route exact path="/detail/:postId" element={<PostDetail userInfo={userInfo}/>}/>
            </Routes>
          </Content>
          <Sider theme='light' width={340} style={{background: "#ececec", paddingTop:"35px", paddingRight:"20px"}}>
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
