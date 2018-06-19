import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    var username = "";
    if (this.props.user) {
      console.log(this.props.user);
      username = this.props.user.username;
    }


    return (

      <div className="User">
        <Link className='link-home' to='/'>
          <h4>Home</h4></Link>
        <h1>{username}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(User);
