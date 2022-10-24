import { Layout, Card } from 'antd';
import React from 'react';
import request from "../utils/request";

function PostList() {
    let rows = request("http://127.0.0.1:5000/comment/query?postId=1")
    console.log(rows)
    return(
        <div>
        </div>
    )
}

export default PostList;