import { Layout, Card, Pagination, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../services/apis';
import request from "../utils/request";

const { Content } = Layout;
const { TextArea } = Input;

const onChange = (e) => {
    console.log('Change:', e.target.value);
};

function PostHome() {
    const PAGE_SIZE = 5
    const [posts, setPosts] = useState([]);
    const [minVal, setMinVal] = useState(0);
    const [maxVal, setMaxVal] = useState(PAGE_SIZE);

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
    }

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
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{
                            height: 120,
                            margin: "20px"
                        }}
                        onChange={onChange}
                        placeholder="can resize"
                    />
                </div>
            </Content>
        </Layout>
    )
}

export default PostHome;