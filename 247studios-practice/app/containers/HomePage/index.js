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
      posts : '' 
    }
  }
  componentWillMount(){
      fetch('https://www.reddit.com/.json',{mode: 'cors'})
                  .then(response => response.json())
                  .then(data => this.setState({ posts: data.data.children }));
  }

  post(){
      return (<p>hello</p>)
  }
  posts(){
    var test="";
    for (var index = 0; index < 10; index++) {
      ;
      
    }
    return test;
  }
 
  render() {
    return (
      <div>
         <Post subreddit="test" author="testauth" time="3h" commments="333" />
         {this.post()}
      </div>
    );
  }
}
