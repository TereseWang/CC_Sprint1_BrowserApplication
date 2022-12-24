import { Layout, Menu, Card, Button, Radio} from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState} from 'react';
import './App.css';
import PostHome from "./Post";
import UserList from "./User/List";
import PostDetail from './Detail';
import Login from './components/Login';
import Register from "./components/Register";

const { Header, Footer, Content, Sider } = Layout;

const App = () => {
  const [userInfo, setUserInfo] = useState({
      userId: -1,
      username: "",
      isLogin: false,
      registerState: 'login',
      email: "",
      phone: "",
  });

  const handleSubmit = (values) => {
    console.log("login success");
    console.log(values);
    setUserInfo({userId: 1, email:values.email,username: values.username, isLogin: true});
    // console.log(userInfo);
      
  };

    const handleRegister = (values) => {
        console.log("login success");
        console.log(values.email);
        
        setUserInfo({userId: 1, username: "Somebody", isLogin: true});
        // console.log(userInfo);
    };

    const handleLogout = () => {
    setUserInfo({userId: -1, username: "", isLogin: false, registerState: 'login'});
    };

    const switchLogin = () => {
        setUserInfo({registerState: 'login'})
    }
    const switchRegister = () => {
        setUserInfo({registerState: 'register'})
    }

  const UserInfo = ({userInfo}) => {
    return userInfo.isLogin ?
      <Card title={userInfo.username}>
          <p>username: {userInfo.username}</p>
        <Button type='primary' onClick={handleLogout}>Logout</Button>
      </Card> :
        <div>
            <Radio.Group>
                <Radio.Button style={{width:'150px', textAlign: 'center'}} value="Login" onClick={switchLogin}>Login</Radio.Button>
                <Radio.Button style={{width:'150px', textAlign: 'center'}} value="Register" onClick={switchRegister}>Register</Radio.Button>
            </Radio.Group>
            {userInfo.registerState === 'login' ? <Login onSubmit={handleSubmit}/> : <Register onSubmit={handleRegister}/>}
        </div>
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
            {/* <Menu.Item key="2">
                <span>Users</span>
                <Link to="/user" />
            </Menu.Item> */}
        </Menu>
        <Layout>
          <Content>
            <Routes>
              <Route exact path="/" element={<PostHome userInfo={userInfo}/>}/>
              {/* <Route exact path="/user" element={<UserList/>}/> */}
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
