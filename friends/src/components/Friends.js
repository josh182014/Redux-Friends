import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { findFriends } from '../actions';

class Friends extends React.Component {

    componentDidMount() {
        this.props.findFriends();
      }

    render() {
        return (
            <div>
                <h3>My Friends!</h3>
            </div>
        )
    }
}

const mapStateToProps = ({ Friends }) => ({
    Friends
});
  

export default withRouter(
    connect(
      mapStateToProps,
      { findFriends }
    )(Friends)
);
