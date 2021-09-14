﻿/*!@license
* Infragistics.Web.ClientUI Dialog localization resources <build_number>
*
* Copyright (c) 2011-<year> Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define( ["jquery"], factory );
	} else {
		return factory(jQuery);
	}
}
(function ($) {
	$.ig = $.ig || {};
	$.ig.locale = $.ig.locale || {};
	$.ig.locale['nb-NO'] = $.ig.locale['nb-NO'] || {};
	$.ig.Dialog = $.ig.Dialog || {};
	
	$.ig.locale['nb-NO'].Dialog = {
			closeButtonTitle: "Lukk",
			minimizeButtonTitle: "Minimer",
			maximizeButtonTitle: "Maksimer",
			pinButtonTitle: "Fest",
			unpinButtonTitle: "Løsne",
			restoreButtonTitle: "Restaurere",
			setOptionError: 'Kjøretidsendringer er ikke tillatt for følgende alternativ: '
	};

	$.ig.Dialog.locale = $.ig.Dialog.locale || $.ig.locale['nb-NO'].Dialog;
	return $.ig.locale['nb-NO'].Dialog;
}));// REMOVE_FROM_COMBINED_FILES
