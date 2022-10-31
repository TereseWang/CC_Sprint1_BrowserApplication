import { Layout, Card, Comment, Tooltip, List } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/apis';
import request from "../utils/request";

function PostDetail() {
  const { postId } = useParams()
  const [comments, setComments] = useState([])

  useEffect(() => {
    console.log(postId)
    const commentData = API.CommentListByPostId
    const commentCards = commentData.map(comment => ({
      key: comment.commendId,
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: (<p>{comment.content}</p>),
      datetime: (<Tooltip title="2022-10-30 22:22:33"><span>9 hours ago</span></Tooltip>)
    }))

    setComments(commentCards)
  }, [postId])

  const post = { title: "A Sample Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sapien ut elit posuere vestibulum. Fusce non faucibus sem, non tristique nulla. Nulla quis posuere libero. Vestibulum dui leo, interdum vitae gravida sit amet, sagittis vel justo. Nam nec sagittis nulla, vel rutrum ante. Morbi viverra nibh a odio sodales tincidunt. Nulla sed arcu nibh. Duis volutpat mattis elit quis commodo. Fusce quis ultricies diam. Curabitur sit amet magna sagittis, varius est vel, dapibus purus. Aliquam accumsan luctus nibh, eu rhoncus libero ornare pharetra. Proin posuere metus ut velit auctor pulvinar. Sed aliquet auctor est et sollicitudin. Maecenas quis leo in eros placerat mattis at id mi. Maecenas ut iaculis mi. Maecenas finibus massa erat, id molestie ante finibus ac." }

  return (
    <Layout>
      <Content>
        <Card
          title={post.title}
          bordered={true} 
          style={{ margin: "50px" }}
        >
          <p>{post.content}</p>
        </Card>
        <List
          className="comment-list"
          style={{marginLeft: "80px", marginRight: "80px"}}
          header={`${comments.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <li>
              <Comment
                style={{background: "white", padding: "10px"}}
                actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}    
        >
        </List>
      </Content>
    </Layout>
  )
}

export default PostDetail