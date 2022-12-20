import { Layout, Card, Pagination, Input, Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/apis';
// import request from "../utils/request";

const { Content } = Layout;
const { TextArea } = Input;

function PostHome(props) {
    const PAGE_SIZE = 5;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(PAGE_SIZE);
    const userInfo = props.userInfo;

    const onFinish = (values) => {
        console.log(userInfo);
        console.log('Received values of form: ', values);
        setLoading(true);

        setTimeout(() => {
            console.log("handling data...");
            setLoading(false);
            form.resetFields();
        }, 1000);       
    };

    useEffect(() => {
        // const fetchData = async () => {
        //     const ret = await request('http://127.0.0.1:5011/comment/query?postId=1');
        //     const comments = ret.data.content.map((info, index) => <div key={index}>
        //             <span>{info.commentId}</span>
        //             <span>{info.content}</span>
        //         </div>)
        //     setData(comments)
        //     console.log(ret.data.content)
        // }

        // // call the function
        // fetchData().catch(console.error);
        const postListData = API.postList;
        setPosts(postListData);
    }, []);

    const handleChangePage = (value) => {
        if (value <= 1) {
            setMinVal(0);
            setMaxVal(PAGE_SIZE);
        } else {
            setMinVal(maxVal);
            setMaxVal(value * PAGE_SIZE);
        }
    };

    return(
        <Layout style={{paddingTop:"20px", paddingLeft: "50px", paddingRight: "50px", background: "#ececec"}}>
            <Content>
                <div style={{ background: "#ececec"}}>
                    {posts && posts.length > 0 && posts.slice(minVal, maxVal).map(post => 
                        <Card 
                            key={post.pid} 
                            title={post.title}
                            extra={<Link to={"/detail/" + post.pid}>More</Link>}
                            bordered={true} 
                            style={{ margin: "15px" }}
                        >
                            <p>{post.post}</p>
                        </Card>)}
                    <Pagination 
                        defaultCurrent={1}
                        defaultPageSize={PAGE_SIZE}
                        total={posts.length}
                        onChange={handleChangePage}
                        style={{marginLeft: "20px", marginBottom: "20px"}}
                    />
                    <p style={{marginLeft: "20px"}}><b style={{background: "#ececec", padding: "5px"}}>Add A New Post</b></p>
                    <Form
                        style={{margin: "20px",width: "750px"}}
                        form={form}
                        layout="vertical"
                        name="post"
                        onFinish={onFinish}
                        // initialValues={{
                        //     residence: ['zhejiang', 'hangzhou', 'xihu'],
                        //     prefix: '86',
                        // }}
                        disabled={!userInfo.isLogin}
                        scrollToFirstError
                    >
                        <Form.Item
                            style={{marginTop:'-10px'}}
                            name="title" 
                            label="title"
                            rules={[{required: true, message: "Please write a title!"}]}
                        ><Input placeholder="Put your title here"/></Form.Item>
                        <Form.Item
                            style={{marginTop:'-20px'}}
                            name="content"
                            label="content"
                            rules={[{required: true, message: "Please write contents!"}]}
                        ><TextArea placeholder="Put your content here" rows={4}/></Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </Layout>
    );
}

export default PostHome;