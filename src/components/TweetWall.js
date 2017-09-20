import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tweets: []
    };
  }
//only called on first render
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }
  
  componentWillReceiveProps(nextProps) {
    let newestTweets = nextProps.newTweets.concat(this.state.tweets)
    this.setState({
      tweets: newestTweets
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.newTweets.length > 0)
  }
  

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;