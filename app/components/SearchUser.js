var React = require('react');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = React.createClass({
	handleSubmit: function(event) {
		event.preventDefault();

		GitHubUser.getByUsername(this.refs.username.value).then(function(res) {
			this.props.updateUser(res.data);
		}.bind(this));

		GitHubUser.getReposByUsername(this.refs.username.value).then(function(res) {
			this.props.updateRepos(res.data);
		}.bind(this));
	},
	render: function() {
		return (
			<main>
				<form onSubmit={ this.handleSubmit }>
					<label>Username</label>
					<input type='text' placeholder='woliveiras' ref="username"/>
					<button type="submit">Buscar</button>
				</form>
			</main>
		)
	}
});

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired
}

module.exports = SearchUser;