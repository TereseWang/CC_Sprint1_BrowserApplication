import { Layout, Card, Comment, Tooltip, List, Avatar, Form, Input, Button } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/apis';
import request from "../utils/request";

const { TextArea } = Input;

function PostDetail(props) {
  const [form] = Form.useForm();
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const userInfo = props.userInfo;
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log(userInfo);
    console.log('Received values of form: ', values);
    setLoading(true);

    const newComment = {
      key: comments.length+1,
      // use actions to implement comment replying
      // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: userInfo.username,
      avatar: <Avatar />,
      content: (<p>{values.comment}</p>),
      datetime: <span>{comments[comments.length-1].date}</span>
    };

    setTimeout(() => {
        console.log("handling data...");
        setComments(comments.concat(newComment));
        setLoading(false);
        form.resetFields();
    }, 1000);
};

  useEffect(() => {
    console.log(postId);

    const fetchCommentData = async () => {
      let commentData = [];
      const ret = await request(API.CommentListByPostId + postId);
      console.log(ret.data.content);
      commentData = ret.data.content;

      const commentCards = commentData.map(comment => ({
        key: comment.comment_id,
        // use actions to implement comment replying
        // actions: [<span key="comment-list-reply-to-0">Reply to</span>],
        author: "Han Solo",
        avatar: <Avatar />,
        content: (<p>{comment.content}</p>),
        datetime: <span>{comment.date}</span>
      }));

      setComments(commentCards);
    };

    fetchCommentData();
  }, [postId]);

  const post = { title: "A Sample Title", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non sapien ut elit posuere vestibulum. Fusce non faucibus sem, non tristique nulla. Nulla quis posuere libero. Vestibulum dui leo, interdum vitae gravida sit amet, sagittis vel justo. Nam nec sagittis nulla, vel rutrum ante. Morbi viverra nibh a odio sodales tincidunt. Nulla sed arcu nibh. Duis volutpat mattis elit quis commodo. Fusce quis ultricies diam. Curabitur sit amet magna sagittis, varius est vel, dapibus purus. Aliquam accumsan luctus nibh, eu rhoncus libero ornare pharetra. Proin posuere metus ut velit auctor pulvinar. Sed aliquet auctor est et sollicitudin. Maecenas quis leo in eros placerat mattis at id mi. Maecenas ut iaculis mi. Maecenas finibus massa erat, id molestie ante finibus ac." };

  return (
    <Layout>
      <Content style={{background: "#ececec"}}>
        <Card
          title={post.title}
          bordered={true}
          style={{ margin: "50px" }}
        >
          <p>{post.content}</p>
        </Card>
        <List
          className="comment-list"
          style={{marginLeft: "80px", marginRight: "80px", marginTop:'-40px'}}
          header={`${comments.length} replies`}
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <li style={{width:'785px', marginLeft:'-30px', marginTop:'-10px'}}>
              <Comment
                style={{background: "white", padding: "10px"}}
                // actions={item.actions}
                author={item.author}
                avatar={item.avatar}
                content={item.content}
                datetime={item.datetime}
              />
            </li>
          )}
        >
        </List>
        <Form
          style={{width: "785px", marginTop:'80px',marginLeft:'50px'}}
          form={form}
          layout="vertical"
          name="comment"
          onFinish={onFinish}
          // initialValues={{
          //     residence: ['zhejiang', 'hangzhou', 'xihu'],
          //     prefix: '86',
          // }}
          disabled={!userInfo.isLogin}
          scrollToFirstError
        >
          <Form.Item
              style={{marginTop:'-50px'}}
            name="comment"
            label="Comment"
            rules={[{required: true, message: "Please write contents!"}]}
          ><TextArea rows={4}/></Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>Submit</Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
}

export default PostDetail