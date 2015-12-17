'use strict';

// Configuring the Chat module
angular.module('configuracion').run(['Menus',
	function (Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', {
			title: 'Configuracion',
			state: 'configuracion.app'
		});
	}
]);
