const { React } = require('powercord/webpack');
const { SwitchItem } = require('powercord/components/settings');

module.exports = class ContextPlusSettings extends React.Component {
	render() {
		return (
			<div>
				<SwitchItem
					note="Removes call, note, activity feed, watch stream. Moves invite, add friend, block."
					value={this.props.getSetting("patchUser")}
					onChange={() => this.props.toggleSetting("patchUser")}
				>
					Patch user context menu
				</SwitchItem>

				<SwitchItem
					note="Removes hide muted channels, privacy settings, change nickname, channel creation."
					value={this.props.getSetting("patchGuild")}
					onChange={() => this.props.toggleSetting("patchGuild")}
				>
					Patch guild context menu
				</SwitchItem>
			</div>
		);
	}
};
