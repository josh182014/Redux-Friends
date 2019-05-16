import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { findFriends } from '../actions';

class Friends extends React.Component {

    componentDidMount() {
        this.props.findFriends();
    }

    renderFriends = () => {
        const formattedFriends = []
        if (this.props.friends) {
            this.props.friends.forEach((friend) => {
                formattedFriends.push({name: friend.name})
            })
        }
        return formattedFriends
    }

    render() {
        const newFriends = this.renderFriends()
        return (
            <div>
                <h3>My Friends!</h3>
                {this.props.isFindingFriends && 'Loading...' }
                {!this.props.isFindingFriends && newFriends.length >0 && (
                    <div>
                    {newFriends.map(friend => (
                    <p>{friend.name}</p>
                ))}
                </div>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = ({ friends, isFindingFriends }) => ({
    friends,
    isFindingFriends
});
  

export default withRouter(
    connect(
      mapStateToProps,
      { findFriends }
    )(Friends)
);
