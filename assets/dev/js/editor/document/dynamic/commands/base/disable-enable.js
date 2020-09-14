import CommandDisableEnable from 'elementor-document/commands/base/command-disable-enable';

export default class DisableEnable extends CommandDisableEnable {
	static getName() {
		return 'dynamic';
	}

	static getTitle() {
		return __( 'Dynamic' );
	}

	static getEnableCommand() {
		return 'document/dynamic/enable';
	}

	static getDisableCommand() {
		return 'document/dynamic/disable';
	}
}
