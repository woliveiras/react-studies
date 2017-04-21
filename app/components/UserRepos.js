var React = require('react');

var UserRepos = React.createClass({
    getInitialState: function() {
        return {
            reposCount: 0
        }
    },
    componentWillReceiveProps: function(props) {
        this.setState({
            reposCount: props.repos.length
        })
    },
    render: function() {
        var repos = this.props.repos.map(function(repo, key) {
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
                { repos }
            </div>
        );
    }
});

module.exports = UserRepos;