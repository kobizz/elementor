import ComponentBase from 'elementor-api/modules/component-base';

export default class Component extends ComponentBase {
	getNamespace() {
		return 'panel/page-settings';
	}

	defaultTabs() {
		return {
			settings: { title: __( 'Settings', 'elementor' ) },
			style: { title: __( 'style', 'elementor' ) },
			advanced: { title: __( 'advanced', 'elementor' ) },
		};
	}

	renderTab( tab ) {
		elementor.getPanelView().setPage( 'page_settings' ).activateTab( tab );
	}

	getTabsWrapperSelector() {
		return '.elementor-panel-navigation';
	}
}
