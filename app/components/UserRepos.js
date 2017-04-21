import React from 'react';

class UserRepos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reposCount: 0
        }
    }
    componentWillReceiveProps(props) {
        this.setState({ reposCount: props.repos.length });
    }
    render() {
        const { repos } = this.props;
        const reposList = this.props.repos.map(function(repo, key) {
            return (
                <div key={ key }>
                    <h3>{ repo.name }</h3>
                    <span> { repo.stars } STARS</span>
                    <p>{ repo.description }</p>
                    <p>
                        <a href={ repo.html_url }>Repository</a>
                        <a href={ repo.html_url + "/issues" }>Issues</a>
                    </p>
                </div>
            );
        });

        return (
            <div>
                <h3>{ this.state.reposCount }</h3>
                { reposList }
            </div>
        );
    }
}

export default UserRepos;