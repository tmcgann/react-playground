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
	addFriend: function (friend) {
		this.setState({
			friends: this.state.friends.concat([friend])
		});
	},
	render: function () {
		return (
			<div>
				<h3> Name: {this.state.name}</h3>
				<AddFriend addNew={this.addFriend} />
				<ShowList names={this.state.friends} />
			</div>
		);
	}
});

var AddFriend = React.createClass({
	getInitialState: function () {
		return {
			newFriend: ''
		};
	},
	handleAddNew: function () {
		this.props.addNew(this.state.newFriend);
		this.setState({
			newFriend: ''
		});
	},
	updateNewFriend: function (e) {
		this.setState({
			newFriend: e.target.value
		});
	}
	render: function () {
		return (
			<div>
				<input type="text" value={this.state.newFriend} onChange={this.updateNewFriend} />
				<button onClick={this.handleAddNew}> Add Friend </button>
			</div>
		);
	}
});

var ShowList = React.createClass({
	getDefaultProps: function () {
		return {
			names: []
		};
	}
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