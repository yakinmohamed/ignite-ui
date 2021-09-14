﻿/*!@license
* Infragistics.Web.ClientUI templating localization resources <build_number>
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
	$.ig.Templating = $.ig.Templating || {};
	
	$.ig.locale['nb-NO'].Templating = {
			undefinedArgument: 'Det har oppstått en feil under forsøket på å hente datakildegenskapen: '
	};

	$.ig.Templating.locale = $.ig.Templating.locale || $.ig.locale['nb-NO'].Templating;
	return $.ig.locale['nb-NO'].Templating;
}));// REMOVE_FROM_COMBINED_FILES
