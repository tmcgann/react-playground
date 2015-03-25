var FriendsContainer = React.creaeClass({
	getInitialState: function () {
		return {
			name: 'Taylor McGann',
			friends: [
				'Jake Lingwall',
				'Riley Jenkins',
				'Sean Southerland'
			]
		};
	},
	render: function () {
		return (
			<div>
				<h3> Name: {this.state.name}</h3>
				<ShowList names={this.state.friends} />
			</div>
		);
	}
});

var ShowList = React.createClass({
	render: function () {
		var listItems = this.props.name.map(function (friend) {
			return <li>{friend}</li>
		});
		return (
			<div>
				<h3>Friends</h3>
				<ul>
					{listItems}
				</ul
			</div>
		);
	}
});