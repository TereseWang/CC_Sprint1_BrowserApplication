import { Layout, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/apis';
import request from "../utils/request";

function PostDetail() {
  const { postId } = useParams()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const commentData = API.CommentListByPostId
    // const commentCards = commentData.map(comment => 
      
    //   )
    
  }, [])

  return (
    <div>
      {postId} test
    </div>
  )
}

export default PostDetail