/**
 * Default Software module to load
 * Will be overriden by the ifapi-avod-software content loadable
 */

(function (root, factory) {
	if (window.InFlight != null && typeof InFlight.define === 'function' && InFlight.define.amd)
		InFlight.define(['exports'], factory);
	else if (typeof exports === 'object')
		factory(module.exports);
	else {
		root['SoftwareLocation'] = factory(typeof this['SoftwareLocation'] === 'undefined' ? {} : this['SoftwareLocation']);
	}
}(this, function (_) {
	/** @type {ifapi.avod.v1.support.SoftwareLocation} */
	var softwareLocation = /** @type {ifapi.avod.v1.support.SoftwareLocation} */ ({
		plugin: /** @type {ifapi.avod.v1.support.SoftwareLocation.PluginDictionary} */ ({
			flash: /** @type {ifapi.avod.v1.support.SoftwareLocation.FlashPlugin} */ ({
				version: null,
				windows: /** @type {ifapi.avod.v1.support.SoftwareLocation.FlashPluginWindows} */ ({
					activex: null,
					npapi: null,
					ppapi: null
				}),
				mac: /** @type {ifapi.avod.v1.support.SoftwareLocation.FlashPluginMac} */ ({
					npapi: null,
					ppapi: null
				})
			}),
			drm: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPlugin} */ ({
				version: null,
				windows: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPluginLocation} */ ({
					software: /** @type {Object.<string,?string>} */({
						en: null,
						ja: null
					}),
					software_and_extension: /** @type {Object.<string,?string>} */({
						en: null,
						ja: null
					})
				}),
				mac: /** @type {ifapi.avod.v1.support.SoftwareLocation.DRMPluginLocation} */ ({
					software: null,
					software_and_extension: null
				})
			})
		}),
		mobile: /** @type {ifapi.avod.v1.support.SoftwareLocation.Mobile} */ ({
			android: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileAndroid} */ ({
				shellApp: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileShellApp} */ ({
					osVersion: null,
					sdkVersion: null,
					appVersion: null,
					url: null
				})
			}),
			ios: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileIOS} */ ({
				shellApp: /** @type {ifapi.avod.v1.support.SoftwareLocation.MobileShellApp} */ ({
					osVersion: null,
					sdkVersion: null,
					appVersion: null,
					url: null
				})
			})
		})
	});

	softwareLocation.plugin.drm.version = softwareLocation.plugin.drm.version;
	softwareLocation.plugin.drm.mac.software = softwareLocation.plugin.drm.mac.software;
	softwareLocation.plugin.drm.mac.software_and_extension = softwareLocation.plugin.drm.mac.software_and_extension;
	softwareLocation.plugin.drm.windows.software.en = softwareLocation.plugin.drm.windows.software.en;
	softwareLocation.plugin.drm.windows.software.ja = softwareLocation.plugin.drm.windows.software.ja;
	softwareLocation.plugin.drm.windows.software_and_extension.en = softwareLocation.plugin.drm.windows.software_and_extension.en;
	softwareLocation.plugin.drm.windows.software_and_extension.ja = softwareLocation.plugin.drm.windows.software_and_extension.ja;
	softwareLocation.plugin.flash.version = softwareLocation.plugin.flash.version;
	softwareLocation.plugin.flash.mac.npapi = softwareLocation.plugin.flash.mac.npapi;
	softwareLocation.plugin.flash.mac.ppapi = softwareLocation.plugin.flash.mac.ppapi;
	softwareLocation.plugin.flash.windows.activex = softwareLocation.plugin.flash.windows.activex;
	softwareLocation.plugin.flash.windows.npapi = softwareLocation.plugin.flash.windows.npapi;
	softwareLocation.plugin.flash.windows.ppapi = softwareLocation.plugin.flash.windows.ppapi;
	softwareLocation.mobile.ios.shellApp.osVersion = softwareLocation.mobile.ios.shellApp.osVersion;
	softwareLocation.mobile.ios.shellApp.sdkVersion = softwareLocation.mobile.ios.shellApp.sdkVersion;
	softwareLocation.mobile.ios.shellApp.appVersion = softwareLocation.mobile.ios.shellApp.appVersion;
	softwareLocation.mobile.ios.shellApp.url = softwareLocation.mobile.ios.shellApp.url;
	softwareLocation.mobile.android.shellApp.osVersion = softwareLocation.mobile.android.shellApp.osVersion;
	softwareLocation.mobile.android.shellApp.sdkVersion = softwareLocation.mobile.android.shellApp.sdkVersion;
	softwareLocation.mobile.android.shellApp.appVersion = softwareLocation.mobile.android.shellApp.appVersion;
	softwareLocation.mobile.android.shellApp.url = softwareLocation.mobile.android.shellApp.url;

	return softwareLocation;
}));

	