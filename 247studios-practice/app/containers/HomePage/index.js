/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Post from 'components/Post'

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  
  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  componentDidMount(){
      fetch('https://www.reddit.com/.json',{mode: 'cors'})
            .then(response => response.json())
            .then(json =>
              this.setState({
                data: json.data.children
              }));
 }
 
  render() {
    if(this.state.data.length === 0){
      return false //return false or a <Loader/> when you don't have anything in your message[]
     }
    console.log(this.state.data);
    var posts = this.state.data;
    var postsList = posts.map(function(post){
                    return <Post subreddit={ "r/"+post.data.subreddit } domain={post.data.domain} title={post.data.title } />;
                  })
    return   <div>{postsList}</div>
  }
}
