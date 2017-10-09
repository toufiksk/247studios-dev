/**
*
* Post
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostDescription from './PostDescription';
import PostTitleLine from './PostTitleLine';
import CommentsArea from './CommentsArea';
import Separator from './Separator';

const PostWrapper = styled.article`
width: 100%;
heitght: 119px;
background-color: #fff;
`;

const TextArea = styled.div`
position: relative;
float: left;
display: inline-block;
font-size: 14px;
line-height: 15px;
color: #a5a4a4;
`;


class Post extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    
  }


  render() {
    return (
     <PostWrapper>
       <PostHeader>
          <PostDescription >
            <div > 
            <TextArea> { this.props.subreddit } </TextArea>
            <Separator />
            <TextArea> { this.props.author } </TextArea>
            <Separator />
            <TextArea> { this.props.time } </TextArea>
            </div>
          </PostDescription>
          <PostTitleLine>
            {this.props.title}
          </PostTitleLine>          
        </ PostHeader >
        <PostFooter >
            <CommentsArea>
              {this.props.commments} Comments
            </CommentsArea>
        </PostFooter>
     </PostWrapper>
    );
  }
}

Post.propTypes = {

};

export default Post;
