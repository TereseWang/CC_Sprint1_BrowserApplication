import { Layout, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import request from "../utils/request";
// import axios from 'axios';

function PostList() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const ret = await request('http://127.0.0.1:5011/comment/query?postId=1');
            const comments = ret.data.content.map((info, index) => <div key={index}>
                    <span>{info.commentId}</span>
                    <span>{info.content}</span>
                </div>)
            setData(comments)
            console.log(ret.data.content)
        }

        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error);
    }, [])


    return(
        <div>
            {data}
        </div>
    )
}

export default PostList;