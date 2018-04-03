import React, { Component, Fragment } from 'react';
import { Header, Image, Menu } from 'semantic-ui-react';
import userImage from './user_image.jpg';
import './Dashboard.css';

class Dashboard extends Component {
	user = {
		name: "Edgar Cahn",
		img: userImage,
		hours: [{
			project: "Inventing Time Banking",
			hours: 236
			},
			{project: "Teaching Law",
			hours: 123,
			}]
	};

	render() {
		return (
			<Menu>
				<Menu.Item header as="h1" className="Header">
					<Image circular src={this.user.img} />
					{' '}{this.user.name}
				</Menu.Item>
				<Menu.Item>Log Activity</Menu.Item>
				<Menu.Item>Send Hrs</Menu.Item>
			</Menu>
		);
	}
}

export default Dashboard;