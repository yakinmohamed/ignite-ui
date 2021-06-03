﻿/*!@license
* Infragistics.Web.ClientUI Combo localization resources <build_number>
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
	$.ig.locale.pl = $.ig.locale.pl || {};
	$.ig.Combo = $.ig.Combo || {};
	
	$.ig.locale.pl.Combo = {
			noMatchFoundText: 'No matches found',
			dropDownButtonTitle: 'Show drop-down',
			clearButtonTitle: 'Clear value',
			placeHolder: 'select...',
			notSuported: 'Operation is not supported.',
			errorNoSupportedTextsType: "A different filtering text is required. Provide a value that is either a string or an array of strings.",
			errorUnrecognizedHighlightMatchesMode: "A different highlight matches mode is required. Choose a value between 'multi', 'contains', 'startsWith', 'full' and 'null'.",
			errorIncorrectGroupingKey: "Grouping key is not correct."
	};

	$.ig.Combo.locale = $.ig.Combo.locale || $.ig.locale.pl.Combo;
	return $.ig.locale.pl.Combo;
}));// REMOVE_FROM_COMBINED_FILES
