import { Layout, Card } from 'antd';
import React, { useEffect, useState } from 'react';
// import request from "../utils/request";
import axios from 'axios';

function PostList() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const ret = await axios('http://127.0.0.1:5011/hello');
            setData(ret.data)
            // console.log(ret)
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