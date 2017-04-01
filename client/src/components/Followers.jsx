import React, { Component } from 'react';
import { Button, Comment, Container, Divider, Form, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('FOLLOWERS PROPS---', this.props);
    return (
      <div className="followers">
        <h3>Followers: {this.props.followers.length}</h3>
        <h4>{this.props.followers[0]}</h4>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    followers: state.pitchPage.followers
  }
}

export default connect(mapStateToProps)(Followers);