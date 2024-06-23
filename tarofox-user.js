/* https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db
 */
//MAKE FIREFOX GREAT AGAIN
// General tweaks
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.notify.checkForProxies", false);
// Browser cache
user_pref("browser.cache.disk.capacity", 2560000);
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.frecency_half_life_hours", 18);
user_pref("browser.cache.max_shutdown_io_lag", 16);
user_pref("browser.cache.memory.capacity", 2097152);
user_pref("browser.cache.memory.max_entry_size", 327680);
user_pref("browser.cache.disk.metadata_memory_limit", 15360);

// GFX rendering tweaks
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("layers.acceleration.force-enabled", false);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.compositor", true);
user_pref("gfx.webrender.compositor.force-enabled", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.program-binary-disk", true);
user_pref("gfx.webrender.software.opengl", true);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000);
user_pref("layers.gpu-process.enabled", true);
user_pref("layers.gpu-process.force-enabled", true);
user_pref("image.cache.size", 10485760);
user_pref("media.memory_cache_max_size", 1048576);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

// Increase predictive network operations
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dnsCacheEntries", 51200); //200000
user_pref("network.dnsCacheEntries", 51200);
user_pref("network.dnsCacheExpiration", 86400); //3600
user_pref("network.dnsCacheExpiration", 86400);
user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.preconnect-min-confidence", 20);
user_pref("network.predictor.prefetch-force-valid-for", 3600);
user_pref("network.predictor.prefetch-min-confidence", 30);
user_pref("network.predictor.prefetch-rolling-load-count", 120);
user_pref("network.predictor.preresolve-min-confidence", 40);

// Faster SSL
user_pref("network.ssl_tokens_cache_capacity", 32768);
// Disable network separations
//user_pref("fission.autostart", false);
/** end rubenkelevra configs */

user_pref("privacy.partition.network_state", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

user_pref("network.ftp.enabled", true);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("network.buffer.cache.size", 327680); // preferred=327680; default=32768 past: 262144
user_pref("network.buffer.cache.count", 240); // preferred=240; default=24 past: 128

//
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("content.notify.interval", 100000);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 12);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6);
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
/*Betterfox configs x  Narsil v AveYo*/
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("privacy.clearOnShutdown.history", false);
user_pref("privacy.clearOnShutdown.downloads", false);
user_pref("content.notify.interval", 100000);
user_pref("browser.cache.jsbc_compression_level", 3);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 12);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6);
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

user_pref("browser.contentblocking.category", "standard");
user_pref(
    "urlclassifier.trackingSkipURLs",
    "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"
);
user_pref(
    "urlclassifier.features.socialtracking.skipURLs",
    "*.instagram.com, *.twitter.com, *.twimg.com"
);

user_pref("network.cookie.sameSite.noneRequiresSecure", true);
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/ 1;
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_first_schemeless", true);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("security.mixed_content.upgrade_display_content.image", true);
user_pref("pdfjs.enableScripting", false);
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** WEBRTC ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.default_address_only", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
/*user_pref(
    "geo.provider.network.url",
    "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%"
);*/

user_pref("permissions.manager.defaultsUrl", "");
user_pref("webchannel.allowObject.urlWhitelist", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
    false
);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
    false
);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.tabs.tabmanager.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

//Full screen fade faster:
user_pref("full-screen-api.transition-duration.enter", "50 50");
user_pref("full-screen-api.transition-duration.leave", "50 50");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", false);
user_pref("browser.urlbar.unitConversion.enabled", false);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.always_ask_before_handling_new_types", true);
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);
user_pref("privacy.partition.network_state", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);

user_pref("network.ftp.enabled", true);
user_pref("media.gmp-provider.enabled", false);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("network.buffer.cache.size", 327680); // preferred=327680; default=32768 past: 262144
user_pref("network.buffer.cache.count", 240); // preferred=240; default=24 past: 128

user_pref("nglayout.initialpaint.delay", 3); // default=5; used to be 250
user_pref("nglayout.initialpaint.delay_in_oopif", 2); // default=5
user_pref("media.cache_size", 2048000); // default=512000
user_pref("identity.fxaccounts.enabled", false);

//JUNE 9 OVERRIDE
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
// Disable region updates
user_pref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
user_pref("browser.region.update.enabled", false); // [FF79+]

// Disable contentblocking reports
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
// Block unwanted connections
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("app.update.staging.enabled", false);
// Remove default handlers and translation engine
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.translation.engine", "");
// Disable connections to Mozilla servers
user_pref("services.settings.server", "");
// Disable SB checks for downloads (both local lookups + remote)
user_pref("browser.safebrowsing.downloads.enabled", false);

// Google connections
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google.advisory", "");
user_pref("browser.safebrowsing.provder.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
// Disable location bar making speculative connections [FF56+]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// Disable live search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.quicksuggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);
// -------------------------------------
// Disable urlbar trending search suggestions [FF118+]
user_pref("browser.urlbar.trending.featureGate", false);
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
user_pref("privacy.resistFingerprinting", false); // [FF41+]
user_pref("fission.autostart", false);
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.resistFingerprinting.randomization.enabled", true);

//JUNE 10
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]
// Disable mozAddonManager Web API [FF57+]
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
// Disable Firefox blocklist
user_pref("extensions.blocklist.enabled", false); // [DEFAULT: true]
user_pref("extensions.blocklist.addonItemURL", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.addons.signer", "");
user_pref("services.blocklist.plugins.collection", "");
user_pref("services.blocklist.plugins.signer", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.gfx.signer", "");
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", true); // [DEFAULT: false]
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2); // Virtual Reality
// Disable System Add-on updates
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// Enable the DNT (Do Not Track) HTTP header
user_pref("privacy.donottrackheader.enabled", false);
user_pref("privacy.trackingprotection.enabled", true);

// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]
user_pref("app.update.auto", false);
// -------------------------------------
// Disable auto-CHECKING for extension and theme updates
user_pref("extensions.update.enabled", false);
// -------------------------------------
// Disable auto-INSTALLING extension and theme updates
user_pref("extensions.update.autoUpdateDefault", false);
// -------------------------------------
// Disable extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
// -------------------------------------
// Disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);

//update 5am
user_pref("network.predictor.max-resources-per-entry", 350); // default=100
user_pref("network.predictor.max-uri-length", 1500); // default=500
// Set new window size rounding max values [FF55+]
user_pref("privacy.window.maxInnerWidth", 1400);
user_pref("privacy.window.maxInnerHeight", 900);
user_pref("privacy.clearOnShutdown.cache", false);
user_pref("privacy.clearOnShutdown.cookies", false); // Cookies
user_pref("browser.ping-centre.telemetry", false);

//JUNE 10 7AM
// PREF: assorted telemetry
// [NOTE] Shouldn't be needed for user.js, but browser forks
// may want to disable these prefs.
user_pref("doh-rollout.disable-heuristics", true); // ensure DoH doesn't get enabled automatically
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("network.trr.confirmation_telemetry_enabled", false);
user_pref("security.app_menu.recordEventTelemetry", false);
user_pref("security.certerrors.mitm.priming.enabled", false);
user_pref("security.certerrors.recordEventTelemetry", false);
user_pref("security.protectionspopup.recordEventTelemetry", false);
user_pref("messaging-system.askForFeedback", true); // DEFAULT [FF120+]
// PREF: remove focus indicator for links
// [1] https://www.askvg.com/firefox-tip-restore-classic-dotted-outline-focus-indicator-for-links/
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
//
user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
//
user_pref("gfx.font_rendering.cleartype_params.gamma", 1600);
//font 'Cartograph CF', 'Cascadia Code PL', 'Fira Code iScript', 'Cascadia Code', 'Courier New', monospace

//Ffont ''Open Sans', 'Fira Code iScript', ''Cartograph  CF'', 'Cascadia Code', JetBrainsMono Nerd Font
//
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
//
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 5); //default 1
// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://kb.mozillazine.org/Thunderbird_6.0,_etc.#Font_rendering_and_performance_issues
// [2] https://reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3

user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
//
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 20);
user_pref(
    "gfx.font_rendering.cleartype_params.force_gdi_classic_for_families",
    ""
);

//
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
// PREF: disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("content.notify.ontimer", true); // DEFAULT
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("dom.iframe_lazy_loading.enabled", true); //
user_pref("browser.sessionhistory.max_total_viewers", 4);
user_pref("network.http.pacing.requests.burst", 20); // default=10
user_pref("dom.ipc.processCount", 4); // DEFAULT; Shared Web Content
user_pref("dom.ipc.processCount.webIsolated", 2); // default=4; Isolated Web Content
//user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache

user_pref("apz.frame_delay.enabled", false);
user_pref("ui.prefersReducedMotion", 1);
user_pref("full-screen-api.transition.timeout", 1);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.tabClipWidth", 999);
user_pref("network.http.rcwn.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

user_pref("browser.firefox-view.search.enabled", true);
user_pref("browser.firefox-view.virtual-list.enabled", true);

//update june 11 arkenoxtoolkit.scrollbox.verticalScrollDistanc
user_pref("network.gio.supported-protocols", "");
user_pref("network.proxy.failover_direct", false);
user_pref("security.ssl.require_safe_negotiation", true);
user_pref("dom.security.https_only_mode_send_http_background_request", false);

user_pref("gfx.font_rendering.graphite.enabled", false);
user_pref("javascript.options.asmjs", false);
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); //
user_pref("dom.disable_window_move_resize", true);
user_pref("network.dns.disableIPv6", true);
user_pref("full-screen-api.enabled", false);
user_pref("geo.enabled", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
user_pref("privacy.query_stripping.enabled", true); // [FF101+]

user_pref("layout.css.font-visibility.trackingprotection", 1);
user_pref("userchrome.floating-findbar-on-right.enabled", true);
/*
 * https://new.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/k
 * https://new.reddit.com/user/TheQueefGoblin/
 * general.smoothScroll.lines.durationMaxMS
 */
//MS Edge smooth scrolling (not using msdPhysics)
user_pref("general.smoothScroll.lines.durationMaxMS", 150); //400
user_pref("general.smoothScroll.lines.durationMinMS", 80); //300
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250); //200
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 250); //250
user_pref("general.smoothScroll.other.durationMaxMS", 150);
user_pref("general.smoothScroll.other.durationMinMS", 150); //350
user_pref("general.smoothScroll.pages.durationMaxMS", 700);
user_pref("general.smoothScroll.pages.durationMinMS", 650); //250
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 500);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 400); //300
//user_pref("browser.cache.offline.enable", true); // o Offline cache

user_pref("mousewheel.min_line_scroll_amount", 10);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 4);
user_pref("general.smoothScroll.pixels.durationMaxMS", 300); //600OP SETTINGS
user_pref("general.smoothScroll.pixels.durationMinMS", 300); //OP SETTINGS//250
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.0"); // NSS  "0.0"          reduce stutter             [0.4]
user_pref("mousewheel.acceleration.factor", 1); //       10 //ENABKE
user_pref("mousewheel.acceleration.start", -1); //       -1
user_pref("mousewheel.default.delta_multiplier_x", 100); //      100
user_pref("mousewheel.default.delta_multiplier_y", 100); //NSS    [100]
user_pref("mousewheel.default.delta_multiplier_z", 100); //      100
user_pref("apz.allow_zooming", true); //     true
user_pref("apz.force_disable_desktop_zooming_scrollbars", true); // false
user_pref("apz.paint_skipping.enabled", false); ///     true
user_pref("apz.windows.use_direct_manipulation", true); //     true
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true); //   false
user_pref("general.smoothScroll.durationToIntervalRatio", 350); //      200
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 0); //     100
user_pref("layers.async-pan-zoom.enabled", true); ///     true
user_pref("layout.css.scroll-behavior.spring-constant", "300.0"); //   "250.0"
//test
user_pref("dom.image-lazy-loading.enabled", true);
///  NATURAL SMOOTH SCROLLING V4 "SHARP" - AveYo, 2020-2022             preset     [default]
///  copy into firefox/librewolf profile as user.js, add to existing, or set in about:config
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 120); //NSS    [120]
user_pref("general.smoothScroll.msdPhysics.enabled", true); //NSS  [false]
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200); //NSS   [1250]
//user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 250); //NSS   [1000]
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 300);
//user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25); //NSS     [12]
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 30);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 2.0); //NSS    [1.3]

//user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 450); //NSS default 250  [2000]
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 500);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.25"); //NSS ["0.25"]
user_pref("browser.urlbar.openintab", true);
user_pref("browser.search.openintab", true);
user_pref("devtools.debugger.prompt-connection", false);
user_pref("browser.display.use_system_colors", false);
user_pref("gfx.direct3d11.reuse-decoder-device", false);
user_pref("media.wmf.zero-copy-nv12-textures", false);
//new
user_pref("toolkit.scrollbox.scrollIncrement", 100); // Adjust this value to your preference

user_pref("general.smoothScroll.curve", "easeInOutCubic");

user_pref("general.smoothScroll.stopDecelerationAfterTouchWeighting", "0.3");
//FINAL CONFIGS
///june15
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true);
user_pref(
    "_user.js.parrot",
    "8000 syntax error: the parrot's crossed the Jordan"
);

//june 16
/*
/* 5010: disable location bar suggestion types
 * [SETTING] Search>Address Bar>When using the address bar, suggest ***/
user_pref("browser.urlbar.suggest.history", true); //false
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);

user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
/* 5011: disable location bar dropdown
 * This value controls the total number of entries to appear in the location bar dropdown ***/
//user_pref("browser.urlbar.maxRichResults", 0);
/* 5012: disable location bar autofill
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete ***/
user_pref("browser.urlbar.autoFill", false);
//new
user_pref("toolkit.scrollbox.smoothScroll", true); //default=false
//june/16
user_pref("dom.battery.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("dom.telephony.enabled", false);
user_pref("media.webspeech.recognition.enable", false);
user_pref("device.sensors.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
// PREF: Disable GeoIP lookup on your address to set default search engine region
// https://trac.torproject.org/projects/tor/ticket/16254
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections#w_geolocation-for-default-search-engine
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.region", "US");
user_pref("browser.search.geoip.url", "");
user_pref("javascript.use_us_english_locale", true);
user_pref("extensions.webextensions.restrictedDomains", "");

user_pref("layout.css.devtoolsThemes.theme", dark);
//JUNE21
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

//-----------------------
/// Lepton-Proton-Style v8.6.1
// ** Theme Default Options ****************************************************
// userchrome.css usercontent.css activate
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Fill SVG Color
user_pref("svg.context-properties.content.enabled", true);

// Restore Compact Mode - 89 Above
user_pref("browser.compactmode.show", true);

// about:home Search Bar - 89 Above
user_pref(
    "browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar",
    false
);

// CSS's `:has()` selector #457 - 103 Above
user_pref("layout.css.has-selector.enabled", true);

user_pref("browser.backspace_action", 0); // o Pressing Backspace does not open previous page [0]
user_pref("browser.search.context.loadInBackground", true); // x Search results open in the background, focus stays
user_pref("browser.sessionstore.interval", 1800000); // x Save session to disk every 30m [15000]
user_pref("browser.sessionstore.interval.idle", 3600000); // x Save session to disk when idle every 60m [3600000]
user_pref("browser.slowStartup.notificationDisabled", true); // x Slow startup notification
user_pref("browser.slowStartup.maxSamples", 5); // o Slow startup max samples [5]
user_pref("browser.slowStartup.samples", 2); // o Slow startup min samples [2]
user_pref("dom.vibrator.enabled", false); // o Shaking the screen effect
user_pref("ui.key.menuAccessKey", 0); // // Alt key does not toggle the menu bar
user_pref("ui.systemUsesDarkTheme", 1); // / Fake system dark theme
//user_pref("b", false);                                                   // / Encryption Media Extension for DRM (Netflix etc)
//user_pref("media.gmp-gmpopenh264.autoupdate", false);                                    // / Cisco h264 decoder updating
//user_pref("media.gmp-widevinecdm.autoupdate", false);                                    // / Google widevine decryption for DRM (Netflix etc)
//user_pref("media.gmp-widevinecdm.enabled", false);                                       // / Google widevine decryption for DRM (Netflix etc)
//user_pref("media.gmp-widevinecdm.visible", false);                                       // / Google widevine decryption for DRM (Netflix etc)
user_pref("media.peerconnection.ice.default_address_only", false); // o Limit Google WebRTC IP leaks
user_pref("media.peerconnection.ice.no_host", false); // o Limit Google WebRTC IP leaks

user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", false); // o limit Google WebRTC IP leaks
//user_pref("network.cookie.cookieBehavior", 3);                                             // x Block Unvisited cookies 3 / Cross-site cookies [4]
user_pref("security.family_safety.mode", 0); // x Don't allow MitM by Microsoft Family Safety [2]
user_pref("security.insecure_connection_icon.enabled", true); // x Display "insecure" icon on HTTP sites
user_pref("security.mixed_content.block_object_subrequest", true); // x Block unencrypted object request on encrypted page
user_pref("security.ssl.disable_session_identifiers", false); // o Disable SSL session tracking
user_pref("security.ssl.require_safe_negotiation", true); // x Require safe SSL negotiation
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true); // x Display warning on the padlock for broken security
user_pref("security.tls.enable_0rtt_data", false); // o TLS1.3 0-RTT (round-trip time)
user_pref("security.tls.version.enable-deprecated", false); // o Enforce TLS 1.0 and 1.1 downgrades as session only

//// TELEMETRY
user_pref("app.normandy.api_url", ""); // o Normandy (Heartbeat) blank url
user_pref("app.normandy.enabled", false); // o Normandy (Heartbeat) for studies, feature rollouts
user_pref("app.normandy.optoutstudies.enabled", false); // o Normandy (Heartbeat) running experiments
user_pref("app.normandy.user_id", ""); // o cafecafe-cafe-cafe-cafe-cafecafecafe
user_pref("app.shield.optoutstudies.enabled", false); // o Shield extension installing and running studies
user_pref("beacon.enabled", false); // o Sending additional analytics to web servers
user_pref("breakpad.reportURL", ""); // o Crash Reports url
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // o Auto send backlogged crash reports
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // o Unsent crash report prompt bar
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // o New Tab page remote activity stream telemetry
user_pref("browser.newtabpage.activity-stream.impressionId", ""); // o cafecafe-cafe-cafe-cafe-cafecafecafe
user_pref("browser.newtabpage.activity-stream.telemetry", false); // o New Tab page local activity stream telemetry
user_pref("browser.ping-centre.telemetry", false); // o Telemetry for ping centre system
user_pref("browser.send_pings", false); // o Hyperlink Auditing aka click tracking
user_pref("browser.send_pings.require_same_host", true); // x Hyperlink Auditing aka click tracking hardening
user_pref("browser.tabs.crashReporting.sendReport", false); // o Crash Reports for tabs
user_pref("datareporting.healthreport.service.enabled", false); // o Health reports service
user_pref("datareporting.healthreport.uploadEnabled", false); // o Health report upload to mozilla
user_pref("datareporting.policy.dataSubmissionEnabled", false); // o Data submission uploads master toggle
user_pref("default-browser-agent.enabled", false); // o Default browser agent telemetry
user_pref("dom.about_newtab_sanitization.enabled", true); // x Sanitize remote snippets in New Tab page
user_pref("dom.ipc.plugins.reportCrashURL", false); // o Sending website URL where a plugin crashed
user_pref("dom.security.unexpected_system_load_telemetry_enabled", false); // o System load telemetry
user_pref("messaging-system.rsexperimentloader.enabled", false); // o New feature experiments
user_pref("toolkit.coverage.enabled", false); // o Percent of users adopting feature x estimations
user_pref("toolkit.coverage.opt-out", true); // x Percent of users adopting feature x estimations
user_pref("toolkit.telemetry.archive.enabled", false); // o Allow pings to be archived locally
user_pref("toolkit.telemetry.bhrPing.enabled", false); // o Ping telemetry servers on undocummented bhr event
user_pref("toolkit.telemetry.cachedClientID", ""); // o cafecafe-cafe-cafe-cafe-cafecafecafe
user_pref("toolkit.telemetry.coverage.opt-out", true); // x Percent of users adopting feature x estimations
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false); // o Firefox Account only telemetry
user_pref("toolkit.telemetry.enabled", false); // o Telemetry module master toggle
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // o Ping telemetry servers on first shutdown
user_pref("toolkit.telemetry.geckoview.streaming", false); // o Gecko send Histogram/Scalar to telemetry delegate
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // o Ping servers on the first run of a new profile
user_pref("toolkit.telemetry.pioneer-new-studies-available", false); // o New studies available - lie
user_pref("toolkit.telemetry.prioping.enabled", false); // o Ping servers on content events (tracking blocked)
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false); // o Firefox reporting warning
user_pref("toolkit.telemetry.server", "data:,"); // o Telemetry server forced empty
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // o Ping servers on browser shuts down, second session
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false); // o Ping servers on browser shuts down, first session
user_pref("toolkit.telemetry.unified", false); // o Unified telemetry behavior
user_pref("toolkit.telemetry.updatePing.enabled", false); // o Ping servers on browser updates - opt-out
user_pref("security.ssl.errorReporting.enabled", false); // o SSL Error Reporting
user_pref("security.ssl.errorReporting.url", ""); // o SSL Error Reporting url
user_pref("services.sync.telemetry.maxPayloadCount", 1); // x Ping servers on account sync with 1 entry [500]
user_pref("toolkit.telemetry.eventping.minimumFrequency", 6000); // x Ping servers on events min frequency [60]
user_pref("toolkit.telemetry.eventping.maximumFrequency", 6001); // x Ping servers on events max frequency [10]

//
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false); // NSS  false       ignoring sys accel           [true]
user_pref("browser.tabs.tabMinWidth", 120); // x Increase minimum tab width [76]
user_pref("browser.urlbar.clickSelectsAll", false); // o Select all url on Click
user_pref("browser.urlbar.ctrlCanonizesURLs", false); // x Ctrl+Enter opens new tab instead of lame canonize
user_pref("browser.urlbar.decodeURLsOnCopy", true); // x Decode urlencoded link on copy
user_pref("browser.urlbar.doubleClickSelectsAll", true); // x Select all url on doubleClick
user_pref("browser.urlbar.formatting.enabled", false); // o Domain highlight that makes full url hard to read
//user_pref("browser.urlbar.switchTabs.adoptIntoActiveWindow", true);                      // / Search in active tabs pulls tab from all windows
user_pref("browser.urlbar.trimURLs", true); // o Display all parts of the url in the urlbar
user_pref("image.animation_mode", "once"); // / GIF loop once - improves perf a lot
//user_pref("intl.accept_languages", "en-US, en");                                         // / Set preferred language for displaying web pages
//user_pref("javascript.use_us_english_locale", true);                                     // / Enforce US English regardless of system locale
user_pref("network.dns.echconfig.enabled", true); // x Enable Encrypted Client Hello
user_pref("network.http.http3.enabled", true); // x Enable HTTP3
//// SPONSORED
user_pref("browser.discovery.enabled", false); // o Personalized recommendations
user_pref("browser.library.activity-stream.enabled", false); // o Library recent Highlights
user_pref("browser.laterrun.enabled", false); // o Show welcome and onboarding later after install
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // o What's new panel
user_pref("browser.newtabpage.introShown", true); // x New Tab welcome
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.cfr",
    '{"id":"cfr","enabled":false}'
); // o Mozilla servers
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa",
    '{"id":"cfr-fxa","enabled":false}'
); // o 3rd-party servers
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.message-groups",
    '{"id":"message-groups","enabled":false}'
);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments",
    '{"id":"messaging-experiments","enabled":false}'
);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.onboarding",
    '{"id":"onboarding","enabled":false}'
);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.snippets",
    '{"id":"snippets","enabled":false}'
);
user_pref(
    "browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel",
    '{"id":"whats-new-panel","enabled":false}'
);
user_pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false); // o Online translate entries
user_pref(
    "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
    false
); // o Recommend extensions as you browse
user_pref(
    "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
    false
); // o Recommend features as you browse
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // o Built-in Top Sites list - add your own instead
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "{}"); // o Personalized content cfg
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false); // o Personalized content entries
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false); // o Online contextual recommendations
user_pref(
    "browser.newtabpage.activity-stream.feeds.discoverystreamfeed",
    false
); // o Personalized content entries
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", true); // x New Tab page entries master toggle
user_pref("browser.newtabpage.activity-stream.feeds.places", true); // x Breaks left-click to open links from New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.prefs", true); // x Oops something went wrong otherwise
user_pref(
    "browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher",
    false
); // o Refresh recommendations when provider changes
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);         // / Highlights section entries
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // o Top Stories section entries
user_pref(
    "browser.newtabpage.activity-stream.feeds.section.topstories.options",
    "{}"
); // o Top Stories section entries - forced empty
user_pref("browser.newtabpage.activity-stream.feeds.sections", true); // x All sections entries master toggle
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // o Snippets entries
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false); // o Top Stories no refresh
//user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);            // / Top Sites no refresh
//user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);                   // / Top Sites entries
user_pref(
    "browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar",
    true
); // x Search pane switches focus to urlbar
user_pref(
    "browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile",
    true
); // x Search pane do not override most used sites order
user_pref(
    "browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts",
    false
); // o Search pane do not override most used sites
user_pref(
    "browser.newtabpage.activity-stream.section.highlights.includePocket",
    false
); // o Pocket stories in highlights
user_pref("browser.newtabpage.activity-stream.showSearch", false); // o Search pane -superfluous,  use urlbar instead
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // o Sponsored content
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // o Sponsored Top Sites
user_pref("browser.search.suggest.enabled", true); // o Search suggestions master toggle
user_pref("browser.search.update", true); // o Search engine updates - ebay needs an update atm
user_pref("browser.uitour.enabled", false); // o Firefox Tour
user_pref("browser.urlbar.autoFill", false); // x Disable urlbar autofill with domain extension
user_pref("browser.urlbar.speculativeConnect.enabled", false); // o Speculative connections from urlbar
user_pref("browser.urlbar.suggest.searches", false); // o Previous searches suggestions
user_pref("browser.urlbar.suggest.engines", false); // o Search engines in the urlbar (tab2search)
//user_pref("browser.urlbar.update2.oneOffsRefresh", false);                               // o Search in alternative engine v83 new annoyance
user_pref("extensions.getAddons.showPane", false); // o Get Add-ons recommendations
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false); // o Html about:addons recommendations
user_pref("extensions.pocket.enabled", false); // o Pocket extension
user_pref("startup.homepage_override_url", ""); // o What's New page after updates
user_pref("startup.homepage_welcome_url", ""); // o Welcome page
user_pref("startup.homepage_welcome_url.additional", ""); // o Welcome additional pages
//// UPDATE
user_pref("app.update.service.enabled", false); // o Use a background service to install updates
user_pref("app.update.silent", false); // o Hide update UI prompts
//user_pref("extensions.systemAddon.update.enabled", false);                               // / System Add-ons update
//user_pref("extensions.update.autoUpdateDefault", false);                                 // / Update Add-ons Automatically
user_pref("nglayout.enable_drag_images", false); // o Tab drag without preview
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // o Block known fingerprinters OR uBlock Origin
user_pref("privacy.donottrackheader.enabled", true); // x Send websites a Do Not Track signal

/*all credits go to the rightful owner
https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db

https://github.com/yokoffing/Betterfox

https://codeberg.org/Narsil/user.js/src/branch/main/desktop/user.js

https://github.com/arkenfox/user.js

https://github.com/pyllyukko/user.js

https://github.com/AveYo/fox
//other references that i used for smooth scroll

https://groups.google.com/g/mozilla.dev.platform/c/hcEqovQrBts

https://admx.help/?Category=FrontMotion&Policy=FrontMotion.Policies.

Firefox::GENERAL_SMOOTHSCROLL_DURATIONTOINTERVALRATIO

https://superuser.com/questions/922055/

changing-firefox-smooth-scroll-settings-using-aboutconfig-to-be-like-default

https://new.reddit.com/r/firefox/comments/13gdu1k/smooth_scrolling_on_firefox_is_not_really_smooth/

https://new.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/

https://new.reddit.com/r/firefox/comments/kojli8/actually_smooth_scrolling_for_firefox_now/

https://discuss.techlore.tech/t/questions-about-firefox-configuration-hardening/8928/3

https://msfn.org/board/topic/31820-firefox-10-help-nglayoutinitialpaintdelay/

https://www.linuxquestions.org/questions/linux-software-2/nglayout-initialpaint-delay-in-firefox-3-x-x-823170/

 */
