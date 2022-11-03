import { Layout, Card, Pagination, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/apis';
import request from "../utils/request";

const { Sider, Content } = Layout;
const { TextArea } = Input;

const onChange = (e) => {
    console.log('Change:', e.target.value);
};

function PostHome() {
    const [posts, setPosts] = useState([])

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
        const postListData = API.postList
        const postCards = postListData.map(post =>
            <Card 
                key={post.pid} 
                title={post.title}
                extra={<Link to={"/detail/" + post.pid}>More</Link>}
                bordered={true} 
                style={{ margin: "15px" }}
            >
                <p>{post.post}</p>
            </Card>)
        setPosts(postCards)
    }, [])


    return(
        <Layout style={{paddingLeft: "100px", paddingRight: "100px", background: "#ececec"}}>
            <Content>
                <div style={{padding: "30px", background: "#ececec"}}>
                    {posts}
                    <Pagination defaultCurrent={1} total={50}/>
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                        }}
                        onChange={onChange}
                        placeholder="can resize"
                    />
                </div>
            </Content>
            <Sider theme='light' width={300} style={{background: "#ececec"}}>
                <Card title="Username">
                    <p>More User Info</p>
                    <p>Such as Email</p>
                    <p>Or Phone Number</p>
                </Card>
            </Sider>
        </Layout>
    )
}

export default PostHome;