import React from 'react';
import UserRepos from './UserRepos';

const UserInfo = ({ user, repos }) => {
    const userInfo = user ? (
    <div>
        <div>
            <img src={ user.avatar_url } alt="avatar" width="140" height="140"/>
            <h2>{ user.login }</h2>
            <p>{ user.name }</p>
            <p>Folowers: { user.followers }</p>
            <a href="{ user.html_url }">View more</a>
        </div>
        <div>
            <UserRepos repos={ repos } />
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