/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"dasf/test01/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dasf/test01/test/integration/pages/App",
	"dasf/test01/test/integration/pages/Browser",
	"dasf/test01/test/integration/pages/Master",
	"dasf/test01/test/integration/pages/Detail",
	"dasf/test01/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dasf.test01.view."
	});

	sap.ui.require([
		"dasf/test01/test/integration/NavigationJourneyPhone",
		"dasf/test01/test/integration/NotFoundJourneyPhone",
		"dasf/test01/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});