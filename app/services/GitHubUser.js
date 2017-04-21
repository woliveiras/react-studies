import axios from 'axios';

var GithubUser = {
	getByUsername: function(username) {
		return axios.get('https://api.github.com/users/' + username);
	},
	getReposByUsername: function(username) {
		return axios.get('https://api.github.com/users/' + username + '/repos');
	}
};

export default GithubUser;