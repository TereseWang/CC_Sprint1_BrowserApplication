import { Button, Checkbox, Form, Input } from 'antd';
import React, {useEffect} from 'react';
import jwt_decode from "jwt-decode";
const Login = ({ onSubmit }) => {
    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "1087828871650-j945q42fdmv6n5mi77uhmvfsap7v6ddr.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline", size:"large",
            }
        )
    },[]);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        onSubmit(userObject);
    }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{background: "white", padding: "20px", marginRight: "20px"}}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
          style={{paddingLeft:'20px', width:'350px'}}>
          <Input placeholder="Email"/>
        </Form.Item>

        <Form.Item

          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          style={{paddingLeft:'20px', width:'350px'}}
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox style={{marginTop:"-40px", marginLeft:'-10px', }}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" style={{marginTop:'-20px', marginLeft:'-65px', width:'220px'}}>
            Login
          </Button>
            <div id="signInDiv" style={{marginTop:'20px', marginLeft:'-50px'}}></div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;