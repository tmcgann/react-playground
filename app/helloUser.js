var HelloUser = React.createClass({
	getInitialState: function () {
		return {
			username: '@mtmcgann'
		};
	},
	handleChange: function (e) {
		this.setState({
			username: e.target.value
		});
	},
	render: function () {
		return (
			<div>
				Hello, {this.props.name}! <br />
				Twitter: {this.state.username} <br />
				Change Twitter: <input type="text" value={this.state.username} onChange={this.handleChange} />
			</div>
		);
	}
});

React.render(<HelloUser name="Taylor" />, document.getElementById('app'));