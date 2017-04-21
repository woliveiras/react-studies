import React from 'react';
import GitHubUser from '../services/GitHubUser';

class SearchUser extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	} 
	handleSubmit(e) {
		e.preventDefault();
		GitHubUser.getByUsername(this.refs.username.value).then((res) => this.props.updateUser(res.data));
		GitHubUser.getReposByUsername(this.refs.username.value).then((res) => this.props.updateRepos(res.data));
	}
	render() {
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
}

SearchUser.propTypes = {
	updateUser: React.PropTypes.func.isRequired,
	updateRepos: React.PropTypes.func.isRequired
}

module.exports = SearchUser;