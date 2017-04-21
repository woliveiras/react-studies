import React from 'react';
import UserRepos from './UserRepos';

function UserInfo(props) {
    var userInfo = props.user ? (
    <div>
        <div>
            <img src={ props.user.avatar_url } alt="avatar" width="140" height="140"/>
            <h2>{ props.user.login }</h2>
            <p>{ props.user.name }</p>
            <p>Folowers: { props.user.followers }</p>
            <a href="{ props.user.html_url }">View more</a>
        </div>
        <div>
            <UserRepos repos={ props.repos } />
        </div>
    </div>
    ) : null;

    return userInfo;
}

UserInfo.propTypes = {
    user: React.PropTypes.object,
    repos: React.PropTypes.array
}

export default UserInfo;