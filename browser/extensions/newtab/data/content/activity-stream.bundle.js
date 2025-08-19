/*! THIS FILE IS AUTO-GENERATED: webpack.system-addon.config.js */
var NewtabRenderUtils;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  NewTab: () => (/* binding */ NewTab),
  renderCache: () => (/* binding */ renderCache),
  renderWithoutState: () => (/* binding */ renderWithoutState)
});

;// CONCATENATED MODULE: ./common/Actions.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file is accessed from both content and system scopes.

const MAIN_MESSAGE_TYPE = "ActivityStream:Main";
const CONTENT_MESSAGE_TYPE = "ActivityStream:Content";
const PRELOAD_MESSAGE_TYPE = "ActivityStream:PreloadedBrowser";
const UI_CODE = 1;
const BACKGROUND_PROCESS = 2;

/**
 * globalImportContext - Are we in UI code (i.e. react, a dom) or some kind of background process?
 *                       Use this in action creators if you need different logic
 *                       for ui/background processes.
 */
const globalImportContext =
  typeof Window === "undefined" ? BACKGROUND_PROCESS : UI_CODE;

// Create an object that avoids accidental differing key/value pairs:
// {
//   INIT: "INIT",
//   UNINIT: "UNINIT"
// }
const actionTypes = {};

for (const type of [
  "ABOUT_SPONSORED_TOP_SITES",
  "ADDONS_INFO_REQUEST",
  "ADDONS_INFO_RESPONSE",
  "ADS_FEED_UPDATE",
  "ADS_INIT",
  "ADS_RESET",
  "ADS_UPDATE_SPOCS",
  "ADS_UPDATE_TILES",
  "BLOCK_SECTION",
  "BLOCK_URL",
  "BOOKMARK_URL",
  "CARD_SECTION_IMPRESSION",
  "CLEAR_PREF",
  "COPY_DOWNLOAD_LINK",
  "DELETE_BOOKMARK_BY_ID",
  "DELETE_HISTORY_URL",
  "DIALOG_CANCEL",
  "DIALOG_CLOSE",
  "DIALOG_OPEN",
  "DISABLE_SEARCH",
  "DISCOVERY_STREAM_CONFIG_CHANGE",
  "DISCOVERY_STREAM_CONFIG_RESET",
  "DISCOVERY_STREAM_CONFIG_RESET_DEFAULTS",
  "DISCOVERY_STREAM_CONFIG_SETUP",
  "DISCOVERY_STREAM_CONFIG_SET_VALUE",
  "DISCOVERY_STREAM_DEV_BLOCKS",
  "DISCOVERY_STREAM_DEV_BLOCKS_RESET",
  "DISCOVERY_STREAM_DEV_EXPIRE_CACHE",
  "DISCOVERY_STREAM_DEV_IDLE_DAILY",
  "DISCOVERY_STREAM_DEV_IMPRESSIONS",
  "DISCOVERY_STREAM_DEV_SHOW_PLACEHOLDER",
  "DISCOVERY_STREAM_DEV_SYNC_RS",
  "DISCOVERY_STREAM_DEV_SYSTEM_TICK",
  "DISCOVERY_STREAM_EXPERIMENT_DATA",
  "DISCOVERY_STREAM_FEEDS_UPDATE",
  "DISCOVERY_STREAM_FEED_UPDATE",
  "DISCOVERY_STREAM_IMPRESSION_STATS",
  "DISCOVERY_STREAM_LAYOUT_RESET",
  "DISCOVERY_STREAM_LAYOUT_UPDATE",
  "DISCOVERY_STREAM_LINK_BLOCKED",
  "DISCOVERY_STREAM_LOADED_CONTENT",
  "DISCOVERY_STREAM_PERSONALIZATION_INIT",
  "DISCOVERY_STREAM_PERSONALIZATION_LAST_UPDATED",
  "DISCOVERY_STREAM_PERSONALIZATION_OVERRIDE",
  "DISCOVERY_STREAM_PERSONALIZATION_RESET",
  "DISCOVERY_STREAM_PERSONALIZATION_TOGGLE",
  "DISCOVERY_STREAM_PERSONALIZATION_UPDATED",
  "DISCOVERY_STREAM_POCKET_STATE_INIT",
  "DISCOVERY_STREAM_POCKET_STATE_SET",
  "DISCOVERY_STREAM_PREFS_SETUP",
  "DISCOVERY_STREAM_RETRY_FEED",
  "DISCOVERY_STREAM_SPOCS_CAPS",
  "DISCOVERY_STREAM_SPOCS_ENDPOINT",
  "DISCOVERY_STREAM_SPOCS_PLACEMENTS",
  "DISCOVERY_STREAM_SPOCS_UPDATE",
  "DISCOVERY_STREAM_SPOC_BLOCKED",
  "DISCOVERY_STREAM_SPOC_IMPRESSION",
  "DISCOVERY_STREAM_TOPICS_LOADING",
  "DISCOVERY_STREAM_USER_EVENT",
  "DOWNLOAD_CHANGED",
  "FAKESPOT_CTA_CLICK",
  "FAKESPOT_DISMISS",
  "FAKE_FOCUS_SEARCH",
  "FILL_SEARCH_TERM",
  "FOLLOW_SECTION",
  "HANDOFF_SEARCH_TO_AWESOMEBAR",
  "HIDE_PERSONALIZE",
  "HIDE_TOAST_MESSAGE",
  "INFERRED_PERSONALIZATION_MODEL_UPDATE",
  "INFERRED_PERSONALIZATION_REFRESH",
  "INFERRED_PERSONALIZATION_RESET",
  "INFERRED_PERSONALIZATION_UPDATE",
  "INIT",
  "INLINE_SELECTION_CLICK",
  "INLINE_SELECTION_IMPRESSION",
  "MESSAGE_BLOCK",
  "MESSAGE_CLICK",
  "MESSAGE_DISMISS",
  "MESSAGE_IMPRESSION",
  "MESSAGE_NOTIFY_VISIBILITY",
  "MESSAGE_SET",
  "MESSAGE_TOGGLE_VISIBILITY",
  "NEW_TAB_INIT",
  "NEW_TAB_INITIAL_STATE",
  "NEW_TAB_LOAD",
  "NEW_TAB_REHYDRATED",
  "NEW_TAB_STATE_REQUEST",
  "NEW_TAB_STATE_REQUEST_STARTUPCACHE",
  "NEW_TAB_STATE_REQUEST_WITHOUT_STARTUPCACHE",
  "NEW_TAB_UNLOAD",
  "OPEN_ABOUT_FAKESPOT",
  "OPEN_DOWNLOAD_FILE",
  "OPEN_LINK",
  "OPEN_NEW_WINDOW",
  "OPEN_PRIVATE_WINDOW",
  "OPEN_WEBEXT_SETTINGS",
  "PARTNER_LINK_ATTRIBUTION",
  "PLACES_BOOKMARKS_REMOVED",
  "PLACES_BOOKMARK_ADDED",
  "PLACES_HISTORY_CLEARED",
  "PLACES_LINKS_CHANGED",
  "PLACES_LINKS_DELETED",
  "PLACES_LINK_BLOCKED",
  "POCKET_CTA",
  "POCKET_LOGGED_IN",
  "POCKET_THUMBS_DOWN",
  "POCKET_THUMBS_UP",
  "POCKET_WAITING_FOR_SPOC",
  "PREFS_INITIAL_VALUES",
  "PREF_CHANGED",
  "PREVIEW_REQUEST",
  "PREVIEW_REQUEST_CANCEL",
  "PREVIEW_RESPONSE",
  "PROMO_CARD_CLICK",
  "PROMO_CARD_DISMISS",
  "PROMO_CARD_IMPRESSION",
  "REMOVE_DOWNLOAD_FILE",
  "REPORT_AD_OPEN",
  "REPORT_AD_SUBMIT",
  "REPORT_CLOSE",
  "REPORT_CONTENT_OPEN",
  "REPORT_CONTENT_SUBMIT",
  "RICH_ICON_MISSING",
  "SAVE_SESSION_PERF_DATA",
  "SCREENSHOT_UPDATED",
  "SECTION_DEREGISTER",
  "SECTION_DISABLE",
  "SECTION_ENABLE",
  "SECTION_OPTIONS_CHANGED",
  "SECTION_PERSONALIZATION_SET",
  "SECTION_PERSONALIZATION_UPDATE",
  "SECTION_REGISTER",
  "SECTION_UPDATE",
  "SECTION_UPDATE_CARD",
  "SETTINGS_CLOSE",
  "SETTINGS_OPEN",
  "SET_PREF",
  "SHOW_DOWNLOAD_FILE",
  "SHOW_FIREFOX_ACCOUNTS",
  "SHOW_PERSONALIZE",
  "SHOW_PRIVACY_INFO",
  "SHOW_SEARCH",
  "SHOW_TOAST_MESSAGE",
  "SKIPPED_SIGNIN",
  "SOV_UPDATED",
  "SUBMIT_EMAIL",
  "SUBMIT_SIGNIN",
  "SYSTEM_TICK",
  "TELEMETRY_IMPRESSION_STATS",
  "TELEMETRY_USER_EVENT",
  "TOPIC_SELECTION_IMPRESSION",
  "TOPIC_SELECTION_MAYBE_LATER",
  "TOPIC_SELECTION_SPOTLIGHT_CLOSE",
  "TOPIC_SELECTION_SPOTLIGHT_OPEN",
  "TOPIC_SELECTION_USER_DISMISS",
  "TOPIC_SELECTION_USER_OPEN",
  "TOPIC_SELECTION_USER_SAVE",
  "TOP_SITES_ADD",
  "TOP_SITES_CANCEL_EDIT",
  "TOP_SITES_CLOSE_SEARCH_SHORTCUTS_MODAL",
  "TOP_SITES_EDIT",
  "TOP_SITES_INSERT",
  "TOP_SITES_OPEN_SEARCH_SHORTCUTS_MODAL",
  "TOP_SITES_ORGANIC_IMPRESSION_STATS",
  "TOP_SITES_PIN",
  "TOP_SITES_PREFS_UPDATED",
  "TOP_SITES_SPONSORED_IMPRESSION_STATS",
  "TOP_SITES_UNPIN",
  "TOP_SITES_UPDATED",
  "TOTAL_BOOKMARKS_REQUEST",
  "TOTAL_BOOKMARKS_RESPONSE",
  "TRENDING_SEARCH_IMPRESSION",
  "TRENDING_SEARCH_SUGGESTION_OPEN",
  "TRENDING_SEARCH_TOGGLE_COLLAPSE",
  "TRENDING_SEARCH_UPDATE",
  "UNBLOCK_SECTION",
  "UNFOLLOW_SECTION",
  "UNINIT",
  "UPDATE_PINNED_SEARCH_SHORTCUTS",
  "UPDATE_SEARCH_SHORTCUTS",
  "WALLPAPERS_CATEGORY_SET",
  "WALLPAPERS_CUSTOM_SET",
  "WALLPAPERS_FEATURE_HIGHLIGHT_COUNTER_INCREMENT",
  "WALLPAPERS_FEATURE_HIGHLIGHT_CTA_CLICKED",
  "WALLPAPERS_FEATURE_HIGHLIGHT_DISMISSED",
  "WALLPAPERS_FEATURE_HIGHLIGHT_SEEN",
  "WALLPAPERS_SET",
  "WALLPAPER_CATEGORY_CLICK",
  "WALLPAPER_CLICK",
  "WALLPAPER_REMOVE_UPLOAD",
  "WALLPAPER_UPLOAD",
  "WEATHER_IMPRESSION",
  "WEATHER_LOAD_ERROR",
  "WEATHER_LOCATION_DATA_UPDATE",
  "WEATHER_LOCATION_SEARCH_UPDATE",
  "WEATHER_LOCATION_SUGGESTIONS_UPDATE",
  "WEATHER_OPEN_PROVIDER_URL",
  "WEATHER_QUERY_UPDATE",
  "WEATHER_SEARCH_ACTIVE",
  "WEATHER_UPDATE",
  "WEBEXT_CLICK",
  "WEBEXT_DISMISS",
  "WIDGETS_LISTS_CHANGE_SELECTED",
  "WIDGETS_LISTS_SET",
  "WIDGETS_LISTS_SET_SELECTED",
  "WIDGETS_LISTS_UPDATE",
  "WIDGETS_LISTS_USER_EVENT",
  "WIDGETS_LISTS_USER_IMPRESSION",
  "WIDGETS_TIMER_END",
  "WIDGETS_TIMER_PAUSE",
  "WIDGETS_TIMER_PLAY",
  "WIDGETS_TIMER_RESET",
  "WIDGETS_TIMER_SET",
  "WIDGETS_TIMER_SET_DURATION",
  "WIDGETS_TIMER_SET_TYPE",
  "WIDGETS_TIMER_USER_EVENT",
  "WIDGETS_TIMER_USER_IMPRESSION",
]) {
  actionTypes[type] = type;
}

// Helper function for creating routed actions between content and main
// Not intended to be used by consumers
function _RouteMessage(action, options) {
  const meta = action.meta ? { ...action.meta } : {};
  if (!options || !options.from || !options.to) {
    throw new Error(
      "Routed Messages must have options as the second parameter, and must at least include a .from and .to property."
    );
  }
  // For each of these fields, if they are passed as an option,
  // add them to the action. If they are not defined, remove them.
  ["from", "to", "toTarget", "fromTarget", "skipMain", "skipLocal"].forEach(
    o => {
      if (typeof options[o] !== "undefined") {
        meta[o] = options[o];
      } else if (meta[o]) {
        delete meta[o];
      }
    }
  );
  return { ...action, meta };
}

/**
 * AlsoToMain - Creates a message that will be dispatched locally and also sent to the Main process.
 *
 * @param  {object} action Any redux action (required)
 * @param  {object} options
 * @param  {bool}   skipLocal Used by OnlyToMain to skip the main reducer
 * @param  {string} fromTarget The id of the content port from which the action originated. (optional)
 * @return {object} An action with added .meta properties
 */
function AlsoToMain(action, fromTarget, skipLocal) {
  return _RouteMessage(action, {
    from: CONTENT_MESSAGE_TYPE,
    to: MAIN_MESSAGE_TYPE,
    fromTarget,
    skipLocal,
  });
}

/**
 * OnlyToMain - Creates a message that will be sent to the Main process and skip the local reducer.
 *
 * @param  {object} action Any redux action (required)
 * @param  {object} options
 * @param  {string} fromTarget The id of the content port from which the action originated. (optional)
 * @return {object} An action with added .meta properties
 */
function OnlyToMain(action, fromTarget) {
  return AlsoToMain(action, fromTarget, true);
}

/**
 * BroadcastToContent - Creates a message that will be dispatched to main and sent to ALL content processes.
 *
 * @param  {object} action Any redux action (required)
 * @param  {object} options (optional)
 * @return {object} An action with added .meta properties
 */
function BroadcastToContent(action, options) {
  return _RouteMessage(action, {
    from: MAIN_MESSAGE_TYPE,
    to: CONTENT_MESSAGE_TYPE,
    ...options,
  });
}

/**
 * AlsoToOneContent - Creates a message that will be will be dispatched to the main store
 *                    and also sent to a particular Content process.
 *
 * @param  {object} action Any redux action (required)
 * @param  {string} target The id of a content port
 * @param  {bool} skipMain Used by OnlyToOneContent to skip the main process
 * @return {object} An action with added .meta properties
 */
function AlsoToOneContent(action, target, skipMain) {
  if (!target) {
    throw new Error(
      "You must provide a target ID as the second parameter of AlsoToOneContent. If you want to send to all content processes, use BroadcastToContent"
    );
  }
  return _RouteMessage(action, {
    from: MAIN_MESSAGE_TYPE,
    to: CONTENT_MESSAGE_TYPE,
    toTarget: target,
    skipMain,
  });
}

/**
 * OnlyToOneContent - Creates a message that will be sent to a particular Content process
 *                    and skip the main reducer.
 *
 * @param  {object} action Any redux action (required)
 * @param  {string} target The id of a content port
 * @return {object} An action with added .meta properties
 */
function OnlyToOneContent(action, target) {
  return AlsoToOneContent(action, target, true);
}

/**
 * AlsoToPreloaded - Creates a message that dispatched to the main reducer and also sent to the preloaded tab.
 *
 * @param  {object} action Any redux action (required)
 * @return {object} An action with added .meta properties
 */
function AlsoToPreloaded(action) {
  return _RouteMessage(action, {
    from: MAIN_MESSAGE_TYPE,
    to: PRELOAD_MESSAGE_TYPE,
  });
}

/**
 * UserEvent - A telemetry ping indicating a user action. This should only
 *                   be sent from the UI during a user session.
 *
 * @param  {object} data Fields to include in the ping (source, etc.)
 * @return {object} An AlsoToMain action
 */
function UserEvent(data) {
  return AlsoToMain({
    type: actionTypes.TELEMETRY_USER_EVENT,
    data,
  });
}

/**
 * DiscoveryStreamUserEvent - A telemetry ping indicating a user action from Discovery Stream. This should only
 *                     be sent from the UI during a user session.
 *
 * @param  {object} data Fields to include in the ping (source, etc.)
 * @return {object} An AlsoToMain action
 */
function DiscoveryStreamUserEvent(data) {
  return AlsoToMain({
    type: actionTypes.DISCOVERY_STREAM_USER_EVENT,
    data,
  });
}

/**
 * ImpressionStats - A telemetry ping indicating an impression stats.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
function ImpressionStats(data, importContext = globalImportContext) {
  const action = {
    type: actionTypes.TELEMETRY_IMPRESSION_STATS,
    data,
  };
  return importContext === UI_CODE ? AlsoToMain(action) : action;
}

/**
 * DiscoveryStreamImpressionStats - A telemetry ping indicating an impression stats in Discovery Stream.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
function DiscoveryStreamImpressionStats(
  data,
  importContext = globalImportContext
) {
  const action = {
    type: actionTypes.DISCOVERY_STREAM_IMPRESSION_STATS,
    data,
  };
  return importContext === UI_CODE ? AlsoToMain(action) : action;
}

/**
 * DiscoveryStreamLoadedContent - A telemetry ping indicating a content gets loaded in Discovery Stream.
 *
 * @param  {object} data Fields to include in the ping
 * @param  {int} importContext (For testing) Override the import context for testing.
 * #return {object} An action. For UI code, a AlsoToMain action.
 */
function DiscoveryStreamLoadedContent(
  data,
  importContext = globalImportContext
) {
  const action = {
    type: actionTypes.DISCOVERY_STREAM_LOADED_CONTENT,
    data,
  };
  return importContext === UI_CODE ? AlsoToMain(action) : action;
}

function SetPref(prefName, value, importContext = globalImportContext) {
  const action = {
    type: actionTypes.SET_PREF,
    data: { name: prefName, value },
  };
  return importContext === UI_CODE ? AlsoToMain(action) : action;
}

function WebExtEvent(type, data, importContext = globalImportContext) {
  if (!data || !data.source) {
    throw new Error(
      'WebExtEvent actions should include a property "source", the id of the webextension that should receive the event.'
    );
  }
  const action = { type, data };
  return importContext === UI_CODE ? AlsoToMain(action) : action;
}

const actionCreators = {
  BroadcastToContent,
  UserEvent,
  DiscoveryStreamUserEvent,
  ImpressionStats,
  AlsoToOneContent,
  OnlyToOneContent,
  AlsoToMain,
  OnlyToMain,
  AlsoToPreloaded,
  SetPref,
  WebExtEvent,
  DiscoveryStreamImpressionStats,
  DiscoveryStreamLoadedContent,
};

// These are helpers to test for certain kinds of actions
const actionUtils = {
  isSendToMain(action) {
    if (!action.meta) {
      return false;
    }
    return (
      action.meta.to === MAIN_MESSAGE_TYPE &&
      action.meta.from === CONTENT_MESSAGE_TYPE
    );
  },
  isBroadcastToContent(action) {
    if (!action.meta) {
      return false;
    }
    if (action.meta.to === CONTENT_MESSAGE_TYPE && !action.meta.toTarget) {
      return true;
    }
    return false;
  },
  isSendToOneContent(action) {
    if (!action.meta) {
      return false;
    }
    if (action.meta.to === CONTENT_MESSAGE_TYPE && action.meta.toTarget) {
      return true;
    }
    return false;
  },
  isSendToPreloaded(action) {
    if (!action.meta) {
      return false;
    }
    return (
      action.meta.to === PRELOAD_MESSAGE_TYPE &&
      action.meta.from === MAIN_MESSAGE_TYPE
    );
  },
  isFromMain(action) {
    if (!action.meta) {
      return false;
    }
    return (
      action.meta.from === MAIN_MESSAGE_TYPE &&
      action.meta.to === CONTENT_MESSAGE_TYPE
    );
  },
  getPortIdOfSender(action) {
    return (action.meta && action.meta.fromTarget) || null;
  },
  _RouteMessage,
};

;// CONCATENATED MODULE: external "ReactRedux"
const external_ReactRedux_namespaceObject = ReactRedux;
;// CONCATENATED MODULE: external "React"
const external_React_namespaceObject = React;
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_namespaceObject);
;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamAdmin/SimpleHashRouter.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


class SimpleHashRouter extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onHashChange = this.onHashChange.bind(this);
    this.state = {
      hash: globalThis.location.hash
    };
  }
  onHashChange() {
    this.setState({
      hash: globalThis.location.hash
    });
  }
  componentWillMount() {
    globalThis.addEventListener("hashchange", this.onHashChange);
  }
  componentWillUnmount() {
    globalThis.removeEventListener("hashchange", this.onHashChange);
  }
  render() {
    const [, ...routes] = this.state.hash.split("-");
    return /*#__PURE__*/external_React_default().cloneElement(this.props.children, {
      location: {
        hash: this.state.hash,
        routes
      }
    });
  }
}
;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamAdmin/DiscoveryStreamAdmin.jsx
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */






// Pref Constants
const PREF_AD_SIZE_MEDIUM_RECTANGLE = "newtabAdSize.mediumRectangle";
const PREF_AD_SIZE_BILLBOARD = "newtabAdSize.billboard";
const PREF_AD_SIZE_LEADERBOARD = "newtabAdSize.leaderboard";
const PREF_CONTEXTUAL_CONTENT_SELECTED_FEED = "discoverystream.contextualContent.selectedFeed";
const PREF_CONTEXTUAL_CONTENT_FEEDS = "discoverystream.contextualContent.feeds";
const PREF_SECTIONS_ENABLED = "discoverystream.sections.enabled";
const PREF_SPOC_PLACEMENTS = "discoverystream.placements.spocs";
const PREF_SPOC_COUNTS = "discoverystream.placements.spocs.counts";
const PREF_CONTEXTUAL_ADS_ENABLED = "discoverystream.sections.contextualAds.enabled";
const PREF_CONTEXTUAL_BANNER_PLACEMENTS = "discoverystream.placements.contextualBanners";
const PREF_CONTEXTUAL_BANNER_COUNTS = "discoverystream.placements.contextualBanners.counts";
const Row = props => /*#__PURE__*/external_React_default().createElement("tr", _extends({
  className: "message-item"
}, props), props.children);
function relativeTime(timestamp) {
  if (!timestamp) {
    return "";
  }
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  const minutes = Math.floor((Date.now() - timestamp) / 60000);
  if (seconds < 2) {
    return "just now";
  } else if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes === 1) {
    return "1 minute ago";
  } else if (minutes < 600) {
    return `${minutes} minutes ago`;
  }
  return new Date(timestamp).toLocaleString();
}
class ToggleStoryButton extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.story);
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement("button", {
      onClick: this.handleClick
    }, "collapse/open");
  }
}
class TogglePrefCheckbox extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.props.onChange(this.props.pref, event.target.checked);
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("input", {
      type: "checkbox",
      checked: this.props.checked,
      onChange: this.onChange,
      disabled: this.props.disabled
    }), " ", this.props.pref, " ");
  }
}
class Personalization extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.togglePersonalization = this.togglePersonalization.bind(this);
  }
  togglePersonalization() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.DISCOVERY_STREAM_PERSONALIZATION_TOGGLE
    }));
  }
  render() {
    const {
      lastUpdated,
      initialized
    } = this.props.state.Personalization;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      colSpan: "2"
    }, /*#__PURE__*/external_React_default().createElement(TogglePrefCheckbox, {
      checked: this.props.personalized,
      pref: "personalized",
      onChange: this.togglePersonalization
    }))), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Personalization Last Updated"), /*#__PURE__*/external_React_default().createElement("td", null, relativeTime(lastUpdated) || "(no data)")), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Personalization Initialized"), /*#__PURE__*/external_React_default().createElement("td", null, initialized ? "true" : "false")))));
  }
}
class DiscoveryStreamAdminUI extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.restorePrefDefaults = this.restorePrefDefaults.bind(this);
    this.setConfigValue = this.setConfigValue.bind(this);
    this.expireCache = this.expireCache.bind(this);
    this.refreshCache = this.refreshCache.bind(this);
    this.showPlaceholder = this.showPlaceholder.bind(this);
    this.idleDaily = this.idleDaily.bind(this);
    this.systemTick = this.systemTick.bind(this);
    this.syncRemoteSettings = this.syncRemoteSettings.bind(this);
    this.onStoryToggle = this.onStoryToggle.bind(this);
    this.handleWeatherSubmit = this.handleWeatherSubmit.bind(this);
    this.handleWeatherUpdate = this.handleWeatherUpdate.bind(this);
    this.resetBlocks = this.resetBlocks.bind(this);
    this.refreshInferredPersonalization = this.refreshInferredPersonalization.bind(this);
    this.refreshTopicSelectionCache = this.refreshTopicSelectionCache.bind(this);
    this.toggleTBRFeed = this.toggleTBRFeed.bind(this);
    this.handleSectionsToggle = this.handleSectionsToggle.bind(this);
    this.toggleIABBanners = this.toggleIABBanners.bind(this);
    this.state = {
      toggledStories: {},
      weatherQuery: ""
    };
  }
  setConfigValue(configName, configValue) {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.DISCOVERY_STREAM_CONFIG_SET_VALUE,
      data: {
        name: configName,
        value: configValue
      }
    }));
  }
  restorePrefDefaults() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.DISCOVERY_STREAM_CONFIG_RESET_DEFAULTS
    }));
  }
  refreshCache() {
    const {
      config
    } = this.props.state.DiscoveryStream;
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.DISCOVERY_STREAM_CONFIG_CHANGE,
      data: config
    }));
  }
  refreshInferredPersonalization() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.INFERRED_PERSONALIZATION_REFRESH
    }));
  }
  refreshTopicSelectionCache() {
    this.props.dispatch(actionCreators.SetPref("discoverystream.topicSelection.onboarding.displayCount", 0));
    this.props.dispatch(actionCreators.SetPref("discoverystream.topicSelection.onboarding.maybeDisplay", true));
  }
  dispatchSimpleAction(type) {
    this.props.dispatch(actionCreators.OnlyToMain({
      type
    }));
  }
  resetBlocks() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.DISCOVERY_STREAM_DEV_BLOCKS_RESET
    }));
  }
  systemTick() {
    this.dispatchSimpleAction(actionTypes.DISCOVERY_STREAM_DEV_SYSTEM_TICK);
  }
  expireCache() {
    this.dispatchSimpleAction(actionTypes.DISCOVERY_STREAM_DEV_EXPIRE_CACHE);
  }
  showPlaceholder() {
    this.dispatchSimpleAction(actionTypes.DISCOVERY_STREAM_DEV_SHOW_PLACEHOLDER);
  }
  toggleTBRFeed(e) {
    const feed = e.target.value;
    const selectedFeed = PREF_CONTEXTUAL_CONTENT_SELECTED_FEED;
    this.props.dispatch(actionCreators.SetPref(selectedFeed, feed));
  }
  idleDaily() {
    this.dispatchSimpleAction(actionTypes.DISCOVERY_STREAM_DEV_IDLE_DAILY);
  }
  syncRemoteSettings() {
    this.dispatchSimpleAction(actionTypes.DISCOVERY_STREAM_DEV_SYNC_RS);
  }
  handleWeatherUpdate(e) {
    this.setState({
      weatherQuery: e.target.value || ""
    });
  }
  handleWeatherSubmit(e) {
    e.preventDefault();
    const {
      weatherQuery
    } = this.state;
    this.props.dispatch(actionCreators.SetPref("weather.query", weatherQuery));
  }
  toggleIABBanners(e) {
    const {
      pressed,
      id
    } = e.target;

    // Set the active pref to true/false
    switch (id) {
      case "newtab_billboard":
        // Update boolean pref for billboard ad size
        this.props.dispatch(actionCreators.SetPref(PREF_AD_SIZE_BILLBOARD, pressed));
        break;
      case "newtab_leaderboard":
        // Update boolean pref for billboard ad size
        this.props.dispatch(actionCreators.SetPref(PREF_AD_SIZE_LEADERBOARD, pressed));
        break;
      case "newtab_rectangle":
        // Update boolean pref for mediumRectangle (MREC) ad size
        this.props.dispatch(actionCreators.SetPref(PREF_AD_SIZE_MEDIUM_RECTANGLE, pressed));
        break;
    }

    // Note: The counts array is passively updated whenever the placements array is updated.
    // The default pref values for each are:
    // PREF_SPOC_PLACEMENTS: "newtab_spocs"
    // PREF_SPOC_COUNTS: "6"
    const generateSpocPrefValues = () => {
      const placements = this.props.otherPrefs[PREF_SPOC_PLACEMENTS]?.split(",").map(item => item.trim()).filter(item => item) || [];
      const counts = this.props.otherPrefs[PREF_SPOC_COUNTS]?.split(",").map(item => item.trim()).filter(item => item) || [];

      // Confirm that the IAB type will have a count value of "1"
      const supportIABAdTypes = ["newtab_leaderboard", "newtab_rectangle", "newtab_billboard"];
      let countValue;
      if (supportIABAdTypes.includes(id)) {
        countValue = "1"; // Default count value for all IAB ad types
      } else {
        throw new Error("IAB ad type not supported");
      }
      if (pressed) {
        // If pressed is true, add the id to the placements array
        if (!placements.includes(id)) {
          placements.push(id);
          counts.push(countValue);
        }
      } else {
        // If pressed is false, remove the id from the placements array
        const index = placements.indexOf(id);
        if (index !== -1) {
          placements.splice(index, 1);
          counts.splice(index, 1);
        }
      }
      return {
        placements: placements.join(", "),
        counts: counts.join(", ")
      };
    };
    const {
      placements,
      counts
    } = generateSpocPrefValues();

    // Update prefs with new values
    this.props.dispatch(actionCreators.SetPref(PREF_SPOC_PLACEMENTS, placements));
    this.props.dispatch(actionCreators.SetPref(PREF_SPOC_COUNTS, counts));

    // If contextual ads, sections, and one of the banners are enabled
    // update the contextualBanner prefs to include the banner value and count
    // Else, clear the prefs
    if (PREF_CONTEXTUAL_ADS_ENABLED && PREF_SECTIONS_ENABLED) {
      if (PREF_AD_SIZE_BILLBOARD && placements.includes("newtab_billboard")) {
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_PLACEMENTS, "newtab_billboard"));
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_COUNTS, "1"));
      } else if (PREF_AD_SIZE_LEADERBOARD && placements.includes("newtab_leaderboard")) {
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_PLACEMENTS, "newtab_leaderboard"));
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_COUNTS, "1"));
      } else {
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_PLACEMENTS, ""));
        this.props.dispatch(actionCreators.SetPref(PREF_CONTEXTUAL_BANNER_COUNTS, ""));
      }
    }
  }
  handleSectionsToggle(e) {
    const {
      pressed
    } = e.target;
    this.props.dispatch(actionCreators.SetPref(PREF_SECTIONS_ENABLED, pressed));
    this.props.dispatch(actionCreators.SetPref("discoverystream.sections.cards.enabled", pressed));
    this.props.dispatch(actionCreators.SetPref("discoverystream.sections.cards.thumbsUpDown.enabled", pressed));
  }
  renderComponent(width, component) {
    return /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Type"), /*#__PURE__*/external_React_default().createElement("td", null, component.type)), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Width"), /*#__PURE__*/external_React_default().createElement("td", null, width)), component.feed && this.renderFeed(component.feed)));
  }
  renderWeatherData() {
    const {
      suggestions
    } = this.props.state.Weather;
    let weatherTable;
    if (suggestions) {
      weatherTable = /*#__PURE__*/external_React_default().createElement("div", {
        className: "weather-section"
      }, /*#__PURE__*/external_React_default().createElement("form", {
        onSubmit: this.handleWeatherSubmit
      }, /*#__PURE__*/external_React_default().createElement("label", {
        htmlFor: "weather-query"
      }, "Weather query"), /*#__PURE__*/external_React_default().createElement("input", {
        type: "text",
        min: "3",
        max: "10",
        id: "weather-query",
        onChange: this.handleWeatherUpdate,
        value: this.weatherQuery
      }), /*#__PURE__*/external_React_default().createElement("button", {
        type: "submit"
      }, "Submit")), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, suggestions.map(suggestion => /*#__PURE__*/external_React_default().createElement("tr", {
        className: "message-item",
        key: suggestion.city_name
      }, /*#__PURE__*/external_React_default().createElement("td", {
        className: "message-id"
      }, /*#__PURE__*/external_React_default().createElement("span", null, suggestion.city_name, " ", /*#__PURE__*/external_React_default().createElement("br", null))), /*#__PURE__*/external_React_default().createElement("td", {
        className: "message-summary"
      }, /*#__PURE__*/external_React_default().createElement("pre", null, JSON.stringify(suggestion, null, 2))))))));
    }
    return weatherTable;
  }
  renderPersonalizationData() {
    const {
      inferredInterests,
      coarseInferredInterests,
      coarsePrivateInferredInterests
    } = this.props.state.InferredPersonalization;
    return /*#__PURE__*/external_React_default().createElement("div", null, " ", "Inferred Interests:", /*#__PURE__*/external_React_default().createElement("pre", null, JSON.stringify(inferredInterests, null, 2)), " Coarse Inferred Interests:", /*#__PURE__*/external_React_default().createElement("pre", null, JSON.stringify(coarseInferredInterests, null, 2)), " Coarse Inferred Interests With Differential Privacy:", /*#__PURE__*/external_React_default().createElement("pre", null, JSON.stringify(coarsePrivateInferredInterests, null, 2)));
  }
  renderFeedData(url) {
    const {
      feeds
    } = this.props.state.DiscoveryStream;
    const feed = feeds.data[url].data;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("h4", null, "Feed url: ", url), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, feed.recommendations?.map(story => this.renderStoryData(story)))));
  }
  renderFeedsData() {
    const {
      feeds
    } = this.props.state.DiscoveryStream;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, Object.keys(feeds.data).map(url => this.renderFeedData(url)));
  }
  renderImpressionsData() {
    const {
      impressions
    } = this.props.state.DiscoveryStream;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("h4", null, "Feed Impressions"), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, Object.keys(impressions.feed).map(key => {
      return /*#__PURE__*/external_React_default().createElement(Row, {
        key: key
      }, /*#__PURE__*/external_React_default().createElement("td", {
        className: "min"
      }, key), /*#__PURE__*/external_React_default().createElement("td", null, relativeTime(impressions.feed[key]) || "(no data)"));
    }))));
  }
  renderBlocksData() {
    const {
      blocks
    } = this.props.state.DiscoveryStream;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("h4", null, "Blocks"), /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.resetBlocks
    }, "Reset Blocks"), " ", /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, Object.keys(blocks).map(key => {
      return /*#__PURE__*/external_React_default().createElement(Row, {
        key: key
      }, /*#__PURE__*/external_React_default().createElement("td", {
        className: "min"
      }, key));
    }))));
  }
  renderSpocs() {
    const {
      spocs
    } = this.props.state.DiscoveryStream;
    const unifiedAdsSpocsEnabled = this.props.otherPrefs["unifiedAds.spocs.enabled"];

    // Determine which mechanism is querying the UAPI ads server
    const PREF_UNIFIED_ADS_ADSFEED_ENABLED = "unifiedAds.adsFeed.enabled";
    const adsFeedEnabled = this.props.otherPrefs[PREF_UNIFIED_ADS_ADSFEED_ENABLED];
    const unifiedAdsEndpoint = this.props.otherPrefs["unifiedAds.endpoint"];
    let spocsData = [];
    if (spocs.data && spocs.data.newtab_spocs && spocs.data.newtab_spocs.items) {
      spocsData = spocs.data.newtab_spocs.items || [];
    }
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "adsfeed enabled"), /*#__PURE__*/external_React_default().createElement("td", null, adsFeedEnabled ? "true" : "false")), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "spocs_endpoint"), /*#__PURE__*/external_React_default().createElement("td", null, unifiedAdsSpocsEnabled ? unifiedAdsEndpoint : spocs.spocs_endpoint)), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Data last fetched"), /*#__PURE__*/external_React_default().createElement("td", null, relativeTime(spocs.lastUpdated))))), /*#__PURE__*/external_React_default().createElement("h4", null, "Spoc data"), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, spocsData.map(spoc => this.renderStoryData(spoc)))), /*#__PURE__*/external_React_default().createElement("h4", null, "Spoc frequency caps"), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, spocs.frequency_caps.map(spoc => this.renderStoryData(spoc)))));
  }
  onStoryToggle(story) {
    const {
      toggledStories
    } = this.state;
    this.setState({
      toggledStories: {
        ...toggledStories,
        [story.id]: !toggledStories[story.id]
      }
    });
  }
  renderStoryData(story) {
    let storyData = "";
    if (this.state.toggledStories[story.id]) {
      storyData = JSON.stringify(story, null, 2);
    }
    return /*#__PURE__*/external_React_default().createElement("tr", {
      className: "message-item",
      key: story.id
    }, /*#__PURE__*/external_React_default().createElement("td", {
      className: "message-id"
    }, /*#__PURE__*/external_React_default().createElement("span", null, story.id, " ", /*#__PURE__*/external_React_default().createElement("br", null)), /*#__PURE__*/external_React_default().createElement(ToggleStoryButton, {
      story: story,
      onClick: this.onStoryToggle
    })), /*#__PURE__*/external_React_default().createElement("td", {
      className: "message-summary"
    }, /*#__PURE__*/external_React_default().createElement("pre", null, storyData)));
  }
  renderFeed(feed) {
    const {
      feeds
    } = this.props.state.DiscoveryStream;
    if (!feed.url) {
      return null;
    }
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Feed url"), /*#__PURE__*/external_React_default().createElement("td", null, feed.url)), /*#__PURE__*/external_React_default().createElement(Row, null, /*#__PURE__*/external_React_default().createElement("td", {
      className: "min"
    }, "Data last fetched"), /*#__PURE__*/external_React_default().createElement("td", null, relativeTime(feeds.data[feed.url] ? feeds.data[feed.url].lastUpdated : null) || "(no data)")));
  }
  render() {
    const prefToggles = "enabled collapsible".split(" ");
    const {
      config,
      layout
    } = this.props.state.DiscoveryStream;
    const personalized = this.props.otherPrefs["discoverystream.personalization.enabled"];
    const selectedFeed = this.props.otherPrefs[PREF_CONTEXTUAL_CONTENT_SELECTED_FEED];
    const sectionsEnabled = this.props.otherPrefs[PREF_SECTIONS_ENABLED];
    const TBRFeeds = this.props.otherPrefs[PREF_CONTEXTUAL_CONTENT_FEEDS].split(",").map(s => s.trim()).filter(item => item);

    // Prefs for IAB Banners
    const mediumRectangleEnabled = this.props.otherPrefs[PREF_AD_SIZE_MEDIUM_RECTANGLE];
    const billboardsEnabled = this.props.otherPrefs[PREF_AD_SIZE_BILLBOARD];
    const leaderboardEnabled = this.props.otherPrefs[PREF_AD_SIZE_LEADERBOARD];
    const spocPlacements = this.props.otherPrefs[PREF_SPOC_PLACEMENTS];
    const mediumRectangleEnabledPressed = mediumRectangleEnabled && spocPlacements.includes("newtab_rectangle");
    const billboardPressed = billboardsEnabled && spocPlacements.includes("newtab_billboard");
    const leaderboardPressed = leaderboardEnabled && spocPlacements.includes("newtab_leaderboard");
    return /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.restorePrefDefaults
    }, "Restore Pref Defaults"), " ", /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.refreshCache
    }, "Refresh Cache"), /*#__PURE__*/external_React_default().createElement("br", null), /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.expireCache
    }, "Expire Cache"), " ", /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.systemTick
    }, "Trigger System Tick"), " ", /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.idleDaily
    }, "Trigger Idle Daily"), /*#__PURE__*/external_React_default().createElement("br", null), /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.refreshInferredPersonalization
    }, "Refresh Inferred Personalization"), /*#__PURE__*/external_React_default().createElement("br", null), /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.syncRemoteSettings
    }, "Sync Remote Settings"), " ", /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.refreshTopicSelectionCache
    }, "Refresh Topic selection count"), /*#__PURE__*/external_React_default().createElement("br", null), /*#__PURE__*/external_React_default().createElement("button", {
      className: "button",
      onClick: this.showPlaceholder
    }, "Show Placeholder Cards"), " ", /*#__PURE__*/external_React_default().createElement("select", {
      className: "button",
      onChange: this.toggleTBRFeed,
      value: selectedFeed
    }, TBRFeeds.map(feed => /*#__PURE__*/external_React_default().createElement("option", {
      key: feed,
      value: feed
    }, feed))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "toggle-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "sections-toggle",
      pressed: sectionsEnabled || null,
      onToggle: this.handleSectionsToggle,
      label: "Toggle DS Sections"
    })), /*#__PURE__*/external_React_default().createElement("details", {
      className: "details-section"
    }, /*#__PURE__*/external_React_default().createElement("summary", null, "IAB Banner Ad Sizes"), /*#__PURE__*/external_React_default().createElement("div", {
      className: "toggle-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "newtab_leaderboard",
      pressed: leaderboardPressed || null,
      onToggle: this.toggleIABBanners,
      label: "Enable IAB Leaderboard"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "toggle-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "newtab_billboard",
      pressed: billboardPressed || null,
      onToggle: this.toggleIABBanners,
      label: "Enable IAB Billboard"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "toggle-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "newtab_rectangle",
      pressed: mediumRectangleEnabledPressed || null,
      onToggle: this.toggleIABBanners,
      label: "Enable IAB Medium Rectangle (MREC)"
    }))), /*#__PURE__*/external_React_default().createElement("table", null, /*#__PURE__*/external_React_default().createElement("tbody", null, prefToggles.map(pref => /*#__PURE__*/external_React_default().createElement(Row, {
      key: pref
    }, /*#__PURE__*/external_React_default().createElement("td", null, /*#__PURE__*/external_React_default().createElement(TogglePrefCheckbox, {
      checked: config[pref],
      pref: pref,
      onChange: this.setConfigValue
    })))))), /*#__PURE__*/external_React_default().createElement("h3", null, "Layout"), layout.map((row, rowIndex) => /*#__PURE__*/external_React_default().createElement("div", {
      key: `row-${rowIndex}`
    }, row.components.map((component, componentIndex) => /*#__PURE__*/external_React_default().createElement("div", {
      key: `component-${componentIndex}`,
      className: "ds-component"
    }, this.renderComponent(row.width, component))))), /*#__PURE__*/external_React_default().createElement("h3", null, "Personalization"), /*#__PURE__*/external_React_default().createElement(Personalization, {
      personalized: personalized,
      dispatch: this.props.dispatch,
      state: {
        Personalization: this.props.state.Personalization
      }
    }), /*#__PURE__*/external_React_default().createElement("h3", null, "Spocs"), this.renderSpocs(), /*#__PURE__*/external_React_default().createElement("h3", null, "Feeds Data"), /*#__PURE__*/external_React_default().createElement("div", {
      className: "large-data-container"
    }, this.renderFeedsData()), /*#__PURE__*/external_React_default().createElement("h3", null, "Impressions Data"), /*#__PURE__*/external_React_default().createElement("div", {
      className: "large-data-container"
    }, this.renderImpressionsData()), /*#__PURE__*/external_React_default().createElement("h3", null, "Blocked Data"), /*#__PURE__*/external_React_default().createElement("div", {
      className: "large-data-container"
    }, this.renderBlocksData()), /*#__PURE__*/external_React_default().createElement("h3", null, "Weather Data"), this.renderWeatherData(), /*#__PURE__*/external_React_default().createElement("h3", null, "Personalization Data"), this.renderPersonalizationData());
  }
}
class DiscoveryStreamAdminInner extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: `discoverystream-admin ${this.props.collapsed ? "collapsed" : "expanded"}`
    }, /*#__PURE__*/external_React_default().createElement("main", {
      className: "main-panel"
    }, /*#__PURE__*/external_React_default().createElement("h1", null, "Discovery Stream Admin"), /*#__PURE__*/external_React_default().createElement("p", {
      className: "helpLink"
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-small-spacer icon-info"
    }), " ", /*#__PURE__*/external_React_default().createElement("span", null, "Need to access the ASRouter Admin dev tools?", " ", /*#__PURE__*/external_React_default().createElement("a", {
      target: "blank",
      href: "about:asrouter"
    }, "Click here"))), /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(DiscoveryStreamAdminUI, {
      state: {
        DiscoveryStream: this.props.DiscoveryStream,
        Personalization: this.props.Personalization,
        Weather: this.props.Weather,
        InferredPersonalization: this.props.InferredPersonalization
      },
      otherPrefs: this.props.Prefs.values,
      dispatch: this.props.dispatch
    }))));
  }
}
class CollapseToggle extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onCollapseToggle = this.onCollapseToggle.bind(this);
    this.state = {
      collapsed: false
    };
  }
  get renderAdmin() {
    const {
      props
    } = this;
    return props.location.hash && props.location.hash.startsWith("#devtools");
  }
  onCollapseToggle(e) {
    e.preventDefault();
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  }
  setBodyClass() {
    if (this.renderAdmin && !this.state.collapsed) {
      globalThis.document.body.classList.add("no-scroll");
    } else {
      globalThis.document.body.classList.remove("no-scroll");
    }
  }
  componentDidMount() {
    this.setBodyClass();
  }
  componentDidUpdate() {
    this.setBodyClass();
  }
  componentWillUnmount() {
    globalThis.document.body.classList.remove("no-scroll");
  }
  render() {
    const {
      props
    } = this;
    const {
      renderAdmin
    } = this;
    const isCollapsed = this.state.collapsed || !renderAdmin;
    const label = `${isCollapsed ? "Expand" : "Collapse"} devtools`;
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("a", {
      href: "#devtools",
      title: label,
      "aria-label": label,
      className: `discoverystream-admin-toggle ${isCollapsed ? "collapsed" : "expanded"}`,
      onClick: this.renderAdmin ? this.onCollapseToggle : null
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-devtools"
    })), renderAdmin ? /*#__PURE__*/external_React_default().createElement(DiscoveryStreamAdminInner, _extends({}, props, {
      collapsed: this.state.collapsed
    })) : null);
  }
}
const _DiscoveryStreamAdmin = props => /*#__PURE__*/external_React_default().createElement(SimpleHashRouter, null, /*#__PURE__*/external_React_default().createElement(CollapseToggle, props));
const DiscoveryStreamAdmin = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  Sections: state.Sections,
  DiscoveryStream: state.DiscoveryStream,
  Personalization: state.Personalization,
  InferredPersonalization: state.InferredPersonalization,
  Prefs: state.Prefs,
  Weather: state.Weather
}))(_DiscoveryStreamAdmin);
;// CONCATENATED MODULE: ./content-src/components/ConfirmDialog/ConfirmDialog.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */





/**
 * ConfirmDialog component.
 * One primary action button, one cancel button.
 *
 * Content displayed is controlled by `data` prop the component receives.
 * Example:
 * data: {
 *   // Any sort of data needed to be passed around by actions.
 *   payload: site.url,
 *   // Primary button AlsoToMain action.
 *   action: "DELETE_HISTORY_URL",
 *   // Primary button USerEvent action.
 *   userEvent: "DELETE",
 *   // Array of locale ids to display.
 *   message_body: ["confirm_history_delete_p1", "confirm_history_delete_notice_p2"],
 *   // Text for primary button.
 *   confirm_button_string_id: "menu_action_delete"
 * },
 */
class _ConfirmDialog extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this._handleCancelBtn = this._handleCancelBtn.bind(this);
    this._handleConfirmBtn = this._handleConfirmBtn.bind(this);
  }
  _handleCancelBtn() {
    this.props.dispatch({
      type: actionTypes.DIALOG_CANCEL
    });
    this.props.dispatch(actionCreators.UserEvent({
      event: actionTypes.DIALOG_CANCEL,
      source: this.props.data.eventSource
    }));
  }
  _handleConfirmBtn() {
    this.props.data.onConfirm.forEach(this.props.dispatch);
  }
  _renderModalMessage() {
    const message_body = this.props.data.body_string_id;
    if (!message_body) {
      return null;
    }
    return /*#__PURE__*/external_React_default().createElement("span", null, message_body.map(msg => /*#__PURE__*/external_React_default().createElement("p", {
      key: msg,
      "data-l10n-id": msg
    })));
  }
  render() {
    if (!this.props.visible) {
      return null;
    }
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: "confirmation-dialog"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "modal-overlay",
      onClick: this._handleCancelBtn,
      role: "presentation"
    }), /*#__PURE__*/external_React_default().createElement("div", {
      className: "modal"
    }, /*#__PURE__*/external_React_default().createElement("section", {
      className: "modal-message"
    }, this.props.data.icon && /*#__PURE__*/external_React_default().createElement("span", {
      className: `icon icon-spacer icon-${this.props.data.icon}`
    }), this._renderModalMessage()), /*#__PURE__*/external_React_default().createElement("section", {
      className: "actions"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      onClick: this._handleCancelBtn,
      "data-l10n-id": this.props.data.cancel_button_string_id
    }), /*#__PURE__*/external_React_default().createElement("button", {
      className: "done",
      onClick: this._handleConfirmBtn,
      "data-l10n-id": this.props.data.confirm_button_string_id,
      "data-l10n-args": JSON.stringify(this.props.data.confirm_button_string_args)
    }))));
  }
}
const ConfirmDialog = (0,external_ReactRedux_namespaceObject.connect)(state => state.Dialog)(_ConfirmDialog);
;// CONCATENATED MODULE: ./content-src/components/A11yLinkButton/A11yLinkButton.jsx
function A11yLinkButton_extends() { return A11yLinkButton_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, A11yLinkButton_extends.apply(null, arguments); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


function A11yLinkButton(props) {
  // function for merging classes, if necessary
  let className = "a11y-link-button";
  if (props.className) {
    className += ` ${props.className}`;
  }
  return /*#__PURE__*/external_React_default().createElement("button", A11yLinkButton_extends({
    type: "button"
  }, props, {
    className: className
  }), props.children);
}
;// CONCATENATED MODULE: ./content-src/components/ErrorBoundary/ErrorBoundary.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



class ErrorBoundaryFallback extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.windowObj = this.props.windowObj || window;
    this.onClick = this.onClick.bind(this);
  }

  /**
   * Since we only get here if part of the page has crashed, do a
   * forced reload to give us the best chance at recovering.
   */
  onClick() {
    this.windowObj.location.reload(true);
  }
  render() {
    const defaultClass = "as-error-fallback";
    let className;
    if ("className" in this.props) {
      className = `${this.props.className} ${defaultClass}`;
    } else {
      className = defaultClass;
    }

    // "A11yLinkButton" to force normal link styling stuff (eg cursor on hover)
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: className
    }, /*#__PURE__*/external_React_default().createElement("div", {
      "data-l10n-id": "newtab-error-fallback-info"
    }), /*#__PURE__*/external_React_default().createElement("span", null, /*#__PURE__*/external_React_default().createElement(A11yLinkButton, {
      className: "reload-button",
      onClick: this.onClick,
      "data-l10n-id": "newtab-error-fallback-refresh-link"
    })));
  }
}
ErrorBoundaryFallback.defaultProps = {
  className: "as-error-fallback"
};
class ErrorBoundary extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }
  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }
    return /*#__PURE__*/external_React_default().createElement(this.props.FallbackComponent, {
      className: this.props.className
    });
  }
}
ErrorBoundary.defaultProps = {
  FallbackComponent: ErrorBoundaryFallback
};
;// CONCATENATED MODULE: external "ReactTransitionGroup"
const external_ReactTransitionGroup_namespaceObject = ReactTransitionGroup;
;// CONCATENATED MODULE: ./content-src/components/CustomizeMenu/SectionsMgmtPanel/SectionsMgmtPanel.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line no-shadow

function SectionsMgmtPanel({
  exitEventFired
}) {
  const [showPanel, setShowPanel] = (0,external_React_namespaceObject.useState)(false); // State management with useState
  const {
    sectionPersonalization
  } = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.DiscoveryStream);
  const layoutComponents = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.DiscoveryStream.layout[0].components);
  const sections = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.DiscoveryStream.feeds.data);
  const dispatch = (0,external_ReactRedux_namespaceObject.useDispatch)();

  // TODO: Wrap sectionsFeedName -> sectionsList logic in try...catch?
  let sectionsFeedName;
  const cardGridEntry = layoutComponents.find(item => item.type === "CardGrid");
  if (cardGridEntry) {
    sectionsFeedName = cardGridEntry.feed.url;
  }
  let sectionsList;
  if (sectionsFeedName) {
    sectionsList = sections[sectionsFeedName].data.sections;
  }
  const [sectionsState, setSectionState] = (0,external_React_namespaceObject.useState)(sectionPersonalization); // State management with useState

  let followedSectionsData = sectionsList.filter(item => sectionsState[item.sectionKey]?.isFollowed);
  let blockedSectionsData = sectionsList.filter(item => sectionsState[item.sectionKey]?.isBlocked);
  function updateCachedData() {
    // Reset cached followed/blocked list data while panel is open
    setSectionState(sectionPersonalization);
    followedSectionsData = sectionsList.filter(item => sectionsState[item.sectionKey]?.isFollowed);
    blockedSectionsData = sectionsList.filter(item => sectionsState[item.sectionKey]?.isBlocked);
  }
  const onFollowClick = (0,external_React_namespaceObject.useCallback)((sectionKey, receivedRank) => {
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.SECTION_PERSONALIZATION_SET,
      data: {
        ...sectionPersonalization,
        [sectionKey]: {
          isFollowed: true,
          isBlocked: false,
          followedAt: new Date().toISOString()
        }
      }
    }));
    // Telemetry Event Dispatch
    dispatch(actionCreators.OnlyToMain({
      type: "FOLLOW_SECTION",
      data: {
        section: sectionKey,
        section_position: receivedRank,
        event_source: "CUSTOMIZE_PANEL"
      }
    }));
  }, [dispatch, sectionPersonalization]);
  const onBlockClick = (0,external_React_namespaceObject.useCallback)((sectionKey, receivedRank) => {
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.SECTION_PERSONALIZATION_SET,
      data: {
        ...sectionPersonalization,
        [sectionKey]: {
          isFollowed: false,
          isBlocked: true
        }
      }
    }));

    // Telemetry Event Dispatch
    dispatch(actionCreators.OnlyToMain({
      type: "BLOCK_SECTION",
      data: {
        section: sectionKey,
        section_position: receivedRank,
        event_source: "CUSTOMIZE_PANEL"
      }
    }));
  }, [dispatch, sectionPersonalization]);
  const onUnblockClick = (0,external_React_namespaceObject.useCallback)((sectionKey, receivedRank) => {
    const updatedSectionData = {
      ...sectionPersonalization
    };
    delete updatedSectionData[sectionKey];
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.SECTION_PERSONALIZATION_SET,
      data: updatedSectionData
    }));
    // Telemetry Event Dispatch
    dispatch(actionCreators.OnlyToMain({
      type: "UNBLOCK_SECTION",
      data: {
        section: sectionKey,
        section_position: receivedRank,
        event_source: "CUSTOMIZE_PANEL"
      }
    }));
  }, [dispatch, sectionPersonalization]);
  const onUnfollowClick = (0,external_React_namespaceObject.useCallback)((sectionKey, receivedRank) => {
    const updatedSectionData = {
      ...sectionPersonalization
    };
    delete updatedSectionData[sectionKey];
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.SECTION_PERSONALIZATION_SET,
      data: updatedSectionData
    }));
    // Telemetry Event Dispatch
    dispatch(actionCreators.OnlyToMain({
      type: "UNFOLLOW_SECTION",
      data: {
        section: sectionKey,
        section_position: receivedRank,
        event_source: "CUSTOMIZE_PANEL"
      }
    }));
  }, [dispatch, sectionPersonalization]);

  // Close followed/blocked topic subpanel when parent menu is closed
  (0,external_React_namespaceObject.useEffect)(() => {
    if (exitEventFired) {
      setShowPanel(false);
    }
  }, [exitEventFired]);
  const togglePanel = () => {
    setShowPanel(prevShowPanel => !prevShowPanel);

    // Fire when the panel is open
    if (!showPanel) {
      updateCachedData();
    }
  };
  const followedSectionsList = followedSectionsData.map(({
    sectionKey,
    title,
    receivedRank
  }) => {
    const following = sectionPersonalization[sectionKey]?.isFollowed;
    return /*#__PURE__*/external_React_default().createElement("li", {
      key: sectionKey
    }, /*#__PURE__*/external_React_default().createElement("label", {
      htmlFor: `follow-topic-${sectionKey}`
    }, title), /*#__PURE__*/external_React_default().createElement("div", {
      className: following ? "section-follow following" : "section-follow"
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      onClick: () => following ? onUnfollowClick(sectionKey, receivedRank) : onFollowClick(sectionKey, receivedRank),
      type: "default",
      index: receivedRank,
      section: sectionKey,
      id: `follow-topic-${sectionKey}`
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-follow-text",
      "data-l10n-id": "newtab-section-follow-button"
    }), /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-following-text",
      "data-l10n-id": "newtab-section-following-button"
    }), /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-unfollow-text",
      "data-l10n-id": "newtab-section-unfollow-button"
    }))));
  });
  const blockedSectionsList = blockedSectionsData.map(({
    sectionKey,
    title,
    receivedRank
  }) => {
    const blocked = sectionPersonalization[sectionKey]?.isBlocked;
    return /*#__PURE__*/external_React_default().createElement("li", {
      key: sectionKey
    }, /*#__PURE__*/external_React_default().createElement("label", {
      htmlFor: `blocked-topic-${sectionKey}`
    }, title), /*#__PURE__*/external_React_default().createElement("div", {
      className: blocked ? "section-block blocked" : "section-block"
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      onClick: () => blocked ? onUnblockClick(sectionKey, receivedRank) : onBlockClick(sectionKey, receivedRank),
      type: "default",
      index: receivedRank,
      section: sectionKey,
      id: `blocked-topic-${sectionKey}`
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-block-text",
      "data-l10n-id": "newtab-section-block-button"
    }), /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-blocked-text",
      "data-l10n-id": "newtab-section-blocked-button"
    }), /*#__PURE__*/external_React_default().createElement("span", {
      className: "section-button-unblock-text",
      "data-l10n-id": "newtab-section-unblock-button"
    }))));
  });
  return /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("moz-box-button", {
    onClick: togglePanel,
    "data-l10n-id": "newtab-section-manage-topics-button-v2"
  }), /*#__PURE__*/external_React_default().createElement(external_ReactTransitionGroup_namespaceObject.CSSTransition, {
    in: showPanel,
    timeout: 300,
    classNames: "sections-mgmt-panel",
    unmountOnExit: true
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "sections-mgmt-panel"
  }, /*#__PURE__*/external_React_default().createElement("button", {
    className: "arrow-button",
    onClick: togglePanel
  }, /*#__PURE__*/external_React_default().createElement("h1", {
    "data-l10n-id": "newtab-section-mangage-topics-title"
  })), /*#__PURE__*/external_React_default().createElement("h3", {
    "data-l10n-id": "newtab-section-mangage-topics-followed-topics"
  }), followedSectionsData.length ? /*#__PURE__*/external_React_default().createElement("ul", {
    className: "topic-list"
  }, followedSectionsList) : /*#__PURE__*/external_React_default().createElement("span", {
    className: "topic-list-empty-state",
    "data-l10n-id": "newtab-section-mangage-topics-followed-topics-empty-state"
  }), /*#__PURE__*/external_React_default().createElement("h3", {
    "data-l10n-id": "newtab-section-mangage-topics-blocked-topics"
  }), blockedSectionsData.length ? /*#__PURE__*/external_React_default().createElement("ul", {
    className: "topic-list"
  }, blockedSectionsList) : /*#__PURE__*/external_React_default().createElement("span", {
    className: "topic-list-empty-state",
    "data-l10n-id": "newtab-section-mangage-topics-blocked-topics-empty-state"
  }))));
}

;// CONCATENATED MODULE: ./content-src/components/WallpaperCategories/WallpaperCategories.jsx
function WallpaperCategories_extends() { return WallpaperCategories_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, WallpaperCategories_extends.apply(null, arguments); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line no-shadow

const PREF_WALLPAPER_UPLOADED_PREVIOUSLY = "newtabWallpapers.customWallpaper.uploadedPreviously";
const PREF_WALLPAPER_UPLOAD_MAX_FILE_SIZE = "newtabWallpapers.customWallpaper.fileSize";
const PREF_WALLPAPER_UPLOAD_MAX_FILE_SIZE_ENABLED = "newtabWallpapers.customWallpaper.fileSize.enabled";

// Returns a function will not be continuously triggered when called. The
// function will be triggered if called again after `wait` milliseconds.
function debounce(func, wait) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    let wakeUp = () => {
      timer = null;
    };
    timer = setTimeout(wakeUp, wait);
    func.apply(this, args);
  };
}
class _WallpaperCategories extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.handleColorInput = this.handleColorInput.bind(this);
    this.debouncedHandleChange = debounce(this.handleChange.bind(this), 999);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.getRGBColors = this.getRGBColors.bind(this);
    this.prefersHighContrastQuery = null;
    this.prefersDarkQuery = null;
    this.categoryRef = []; // store references for wallpaper category list
    this.wallpaperRef = []; // store reference for wallpaper selection list
    this.customColorPickerRef = /*#__PURE__*/external_React_default().createRef(); // Used to determine contrast icon color for custom color picker
    this.customColorInput = /*#__PURE__*/external_React_default().createRef(); // Used to determine contrast icon color for custom color picker
    this.state = {
      activeCategory: null,
      activeCategoryFluentID: null,
      showColorPicker: false,
      inputType: "radio",
      activeId: null,
      isCustomWallpaperError: false
    };
  }
  componentDidMount() {
    this.prefersDarkQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
  }
  componentDidUpdate(prevProps) {
    // Walllpaper category subpanel should close when parent menu is closed
    if (this.props.exitEventFired && this.props.exitEventFired !== prevProps.exitEventFired) {
      this.handleBack();
    }
  }
  handleColorInput(event) {
    let {
      id
    } = event.target;
    // Set ID to include hex value of custom color
    id = `solid-color-picker-${event.target.value}`;
    const rgbColors = this.getRGBColors(event.target.value);

    // Set background color to custom color
    event.target.style.backgroundColor = `rgb(${rgbColors.toString()})`;
    if (this.customColorPickerRef.current) {
      const colorInputBackground = this.customColorPickerRef.current.children[0].style.backgroundColor;
      this.customColorPickerRef.current.style.backgroundColor = colorInputBackground;
    }

    // Set icon color based on the selected color
    const isColorDark = this.isWallpaperColorDark(rgbColors);
    if (this.customColorPickerRef.current) {
      if (isColorDark) {
        this.customColorPickerRef.current.classList.add("is-dark");
      } else {
        this.customColorPickerRef.current.classList.remove("is-dark");
      }

      // Remove any possible initial classes
      this.customColorPickerRef.current.classList.remove("custom-color-set", "custom-color-dark", "default-color-set");
    }

    // Setting this now so when we remove v1 we don't have to migrate v1 values.
    this.props.setPref("newtabWallpapers.wallpaper", id);
  }

  // Note: There's a separate event (debouncedHandleChange) that fires the handleChange
  // event but is delayed so that it doesn't fire multiple events when a user
  // is selecting a custom color background
  handleChange(event) {
    let {
      id
    } = event.target;

    // Set ID to include hex value of custom color
    if (id === "solid-color-picker") {
      id = `solid-color-picker-${event.target.value}`;
    }
    this.props.setPref("newtabWallpapers.wallpaper", id);
    const uploadedPreviously = this.props.Prefs.values[PREF_WALLPAPER_UPLOADED_PREVIOUSLY];
    this.handleUserEvent(actionTypes.WALLPAPER_CLICK, {
      selected_wallpaper: id,
      had_previous_wallpaper: !!this.props.activeWallpaper,
      had_uploaded_previously: !!uploadedPreviously
    });
  }

  // function implementing arrow navigation for wallpaper category selection
  handleCategoryKeyDown(event, category) {
    const getIndex = this.categoryRef.findIndex(cat => cat.id === category);
    if (getIndex === -1) {
      return; // prevents errors if wallpaper index isn't found when navigating with arrow keys
    }
    const isRTL = document.dir === "rtl"; // returns true if page language is right-to-left
    let eventKey = event.key;
    if (eventKey === "ArrowRight" || eventKey === "ArrowLeft") {
      if (isRTL) {
        eventKey = eventKey === "ArrowRight" ? "ArrowLeft" : "ArrowRight";
      }
    }
    let nextIndex = getIndex;
    if (eventKey === "ArrowRight") {
      nextIndex = getIndex + 1 < this.categoryRef.length ? getIndex + 1 : getIndex;
    } else if (eventKey === "ArrowLeft") {
      nextIndex = getIndex - 1 >= 0 ? getIndex - 1 : getIndex;
    }
    this.categoryRef[nextIndex].focus();
  }

  // function implementing arrow navigation for wallpaper selection
  handleWallpaperKeyDown(event, title) {
    if (event.key === "Tab") {
      if (event.shiftKey) {
        event.preventDefault();
        this.backToMenuButton?.focus();
      } else {
        event.preventDefault(); // prevent tabbing within wallpaper selection. We should only be using the Tab key to tab between groups
      }
      return;
    }
    const isRTL = document.dir === "rtl"; // returns true if page language is right-to-left
    let eventKey = event.key;
    if (eventKey === "ArrowRight" || eventKey === "ArrowLeft") {
      if (isRTL) {
        eventKey = eventKey === "ArrowRight" ? "ArrowLeft" : "ArrowRight";
      }
    }
    const getIndex = this.wallpaperRef.findIndex(wallpaper => wallpaper.id === title);
    if (getIndex === -1) {
      return; // prevents errors if wallpaper index isn't found when navigating with arrow keys
    }

    // the set layout of columns per row for the wallpaper selection
    const columnCount = 3;
    let nextIndex = getIndex;
    if (eventKey === "ArrowRight") {
      nextIndex = getIndex + 1 < this.wallpaperRef.length ? getIndex + 1 : getIndex;
    } else if (eventKey === "ArrowLeft") {
      nextIndex = getIndex - 1 >= 0 ? getIndex - 1 : getIndex;
    } else if (eventKey === "ArrowDown") {
      nextIndex = getIndex + columnCount < this.wallpaperRef.length ? getIndex + columnCount : getIndex;
    } else if (eventKey === "ArrowUp") {
      nextIndex = getIndex - columnCount >= 0 ? getIndex - columnCount : getIndex;
    }
    this.wallpaperRef[nextIndex].tabIndex = 0;
    this.wallpaperRef[getIndex].tabIndex = -1;
    this.wallpaperRef[nextIndex].focus();
    this.wallpaperRef[nextIndex].click();
  }
  handleReset() {
    const uploadedPreviously = this.props.Prefs.values[PREF_WALLPAPER_UPLOADED_PREVIOUSLY];
    const selectedWallpaper = this.props.Prefs.values["newtabWallpapers.wallpaper"];

    // If a custom wallpaper is set, remove it
    if (selectedWallpaper === "custom") {
      this.props.dispatch(actionCreators.OnlyToMain({
        type: actionTypes.WALLPAPER_REMOVE_UPLOAD
      }));
    }

    // Reset active wallpaper
    this.props.setPref("newtabWallpapers.wallpaper", "");

    // Fire WALLPAPER_CLICK telemetry event
    this.handleUserEvent(actionTypes.WALLPAPER_CLICK, {
      selected_wallpaper: "none",
      had_previous_wallpaper: !!this.props.activeWallpaper,
      had_uploaded_previously: !!uploadedPreviously
    });
  }
  handleCategory = event => {
    this.setState({
      activeCategory: event.target.id
    });
    this.handleUserEvent(actionTypes.WALLPAPER_CATEGORY_CLICK, event.target.id);
    let fluent_id;
    switch (event.target.id) {
      case "abstracts":
        fluent_id = "newtab-wallpaper-category-title-abstract";
        break;
      case "celestial":
        fluent_id = "newtab-wallpaper-category-title-celestial";
        break;
      case "photographs":
        fluent_id = "newtab-wallpaper-category-title-photographs";
        break;
      case "solid-colors":
        fluent_id = "newtab-wallpaper-category-title-colors";
    }
    this.setState({
      activeCategoryFluentID: fluent_id
    });
  };

  // Custom wallpaper image upload
  async handleUpload() {
    const wallpaperUploadMaxFileSizeEnabled = this.props.Prefs.values[PREF_WALLPAPER_UPLOAD_MAX_FILE_SIZE_ENABLED];
    const wallpaperUploadMaxFileSize = this.props.Prefs.values[PREF_WALLPAPER_UPLOAD_MAX_FILE_SIZE];
    const uploadedPreviously = this.props.Prefs.values[PREF_WALLPAPER_UPLOADED_PREVIOUSLY];

    // Create a file input since category buttons are radio inputs
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*"; // only allow image files

    // Catch cancel events
    fileInput.oncancel = async () => {
      this.setState({
        isCustomWallpaperError: false
      });
    };

    // Reset error state when user begins file selection
    this.setState({
      isCustomWallpaperError: false
    });

    // Fire when user selects a file
    fileInput.onchange = async event => {
      const [file] = event.target.files;

      // Limit image uploaded to a maximum file size if enabled
      // Note: The max file size pref (customWallpaper.fileSize) is converted to megabytes (MB)
      // Example: if pref value is 5, max file size is 5 MB
      const maxSize = wallpaperUploadMaxFileSize * 1024 * 1024;
      if (wallpaperUploadMaxFileSizeEnabled && file && file.size > maxSize) {
        console.error("File size exceeds limit");
        this.setState({
          isCustomWallpaperError: true
        });
        return;
      }
      if (file) {
        this.props.dispatch(actionCreators.OnlyToMain({
          type: actionTypes.WALLPAPER_UPLOAD,
          data: file
        }));

        // Set active wallpaper ID to "custom"
        this.props.setPref("newtabWallpapers.wallpaper", "custom");

        // Update the uploadedPreviously pref to TRUE
        // Note: this pref used for telemetry. Do not reset to false.
        this.props.setPref(PREF_WALLPAPER_UPLOADED_PREVIOUSLY, true);
        this.handleUserEvent(actionTypes.WALLPAPER_CLICK, {
          selected_wallpaper: "custom",
          had_previous_wallpaper: !!this.props.activeWallpaper,
          had_uploaded_previously: !!uploadedPreviously
        });
      }
    };
    fileInput.click();
  }
  handleBack() {
    this.setState({
      activeCategory: null
    });
    this.categoryRef[0]?.focus();
  }

  // Record user interaction when changing wallpaper and reseting wallpaper to default
  handleUserEvent(type, data) {
    this.props.dispatch(actionCreators.OnlyToMain({
      type,
      data
    }));
  }
  setActiveId = id => {
    this.setState({
      activeId: id
    }); // Set the active ID
  };
  getRGBColors(input) {
    if (input.length !== 7) {
      return [];
    }
    const r = parseInt(input.substr(1, 2), 16);
    const g = parseInt(input.substr(3, 2), 16);
    const b = parseInt(input.substr(5, 2), 16);
    return [r, g, b];
  }
  isWallpaperColorDark([r, g, b]) {
    return 0.2125 * r + 0.7154 * g + 0.0721 * b <= 110;
  }
  render() {
    const prefs = this.props.Prefs.values;
    const {
      wallpaperList,
      categories
    } = this.props.Wallpapers;
    const {
      activeWallpaper
    } = this.props;
    const {
      activeCategory,
      showColorPicker
    } = this.state;
    const {
      activeCategoryFluentID
    } = this.state;
    let filteredWallpapers = wallpaperList.filter(wallpaper => wallpaper.category === activeCategory);
    const wallpaperUploadMaxFileSize = this.props.Prefs.values[PREF_WALLPAPER_UPLOAD_MAX_FILE_SIZE];
    function reduceColorsToFitCustomColorInput(arr) {
      // Reduce the amount of custom colors to make space for the custom color picker
      while (arr.length % 3 !== 2) {
        arr.pop();
      }
      return arr;
    }
    let wallpaperCustomSolidColorHex = null;
    const selectedWallpaper = prefs["newtabWallpapers.wallpaper"];

    // User has previous selected a custom color
    if (selectedWallpaper.includes("solid-color-picker")) {
      this.setState({
        showColorPicker: true
      });
      const regex = /#([a-fA-F0-9]{6})/;
      [wallpaperCustomSolidColorHex] = selectedWallpaper.match(regex);
    }

    // Enable custom color select if pref'ed on
    this.setState({
      showColorPicker: prefs["newtabWallpapers.customColor.enabled"]
    });

    // Remove last item of solid colors to make space for custom color picker
    if (prefs["newtabWallpapers.customColor.enabled"] && activeCategory === "solid-colors") {
      filteredWallpapers = reduceColorsToFitCustomColorInput(filteredWallpapers);
    }

    // Bug 1953012 - If nothing selected, default to color of customize panel
    // --color-blue-70 : #054096
    // --color-blue-05 : #deeafc
    const starterColorHex = this.prefersDarkQuery?.matches ? "#054096" : "#deeafc";

    // Set initial state of the color picker (depending if the user has already set a custom color)
    let initStateClassname = wallpaperCustomSolidColorHex ? "custom-color-set" : "default-color-set";

    // If a custom color picker is set, make sure the icon has the correct contrast
    if (wallpaperCustomSolidColorHex) {
      const rgbColors = this.getRGBColors(wallpaperCustomSolidColorHex);
      const isColorDark = this.isWallpaperColorDark(rgbColors);
      if (isColorDark) {
        initStateClassname += " custom-color-dark";
      }
    }
    let colorPickerInput = showColorPicker && activeCategory === "solid-colors" ? /*#__PURE__*/external_React_default().createElement("div", {
      className: `theme-custom-color-picker ${initStateClassname}`,
      ref: this.customColorPickerRef
    }, /*#__PURE__*/external_React_default().createElement("input", {
      onInput: this.handleColorInput,
      onChange: this.debouncedHandleChange,
      onClick: () => this.setActiveId("solid-color-picker") //
      ,
      type: "color",
      name: `wallpaper-solid-color-picker`,
      id: "solid-color-picker"
      // aria-checked is not applicable for input[type="color"] elements
      ,
      "aria-current": this.state.activeId === "solid-color-picker",
      value: wallpaperCustomSolidColorHex || starterColorHex,
      className: `wallpaper-input
              ${this.state.activeId === "solid-color-picker" ? "active" : ""}`,
      ref: this.customColorInput
    }), /*#__PURE__*/external_React_default().createElement("label", {
      htmlFor: "solid-color-picker",
      "data-l10n-id": "newtab-wallpaper-custom-color"
    })) : "";
    return /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("div", {
      className: "category-header"
    }, /*#__PURE__*/external_React_default().createElement("h2", {
      "data-l10n-id": "newtab-wallpaper-title"
    }), /*#__PURE__*/external_React_default().createElement("button", {
      className: "wallpapers-reset",
      onClick: this.handleReset,
      "data-l10n-id": "newtab-wallpaper-reset"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      role: "grid",
      "aria-label": "Wallpaper category selection. Use arrow keys to navigate."
    }, /*#__PURE__*/external_React_default().createElement("fieldset", {
      className: "category-list"
    }, categories.map((category, index) => {
      const filteredList = wallpaperList.filter(wallpaper => wallpaper.category === category);
      const activeWallpaperObj = activeWallpaper && filteredList.find(wp => wp.title === activeWallpaper);
      const thumbnail = activeWallpaperObj || filteredList[0];
      let fluent_id;
      switch (category) {
        case "abstracts":
          fluent_id = "newtab-wallpaper-category-title-abstract";
          break;
        case "celestial":
          fluent_id = "newtab-wallpaper-category-title-celestial";
          break;
        case "custom-wallpaper":
          fluent_id = "newtab-wallpaper-upload-image";
          break;
        case "photographs":
          fluent_id = "newtab-wallpaper-category-title-photographs";
          break;
        case "solid-colors":
          fluent_id = "newtab-wallpaper-category-title-colors";
      }
      let style = {};
      if (thumbnail?.wallpaperUrl) {
        style.backgroundImage = `url(${thumbnail.wallpaperUrl})`;
      } else {
        style.backgroundColor = thumbnail?.solid_color || "";
      }
      return /*#__PURE__*/external_React_default().createElement("div", {
        key: category
      }, /*#__PURE__*/external_React_default().createElement("button", WallpaperCategories_extends({
        ref: el => {
          if (el) {
            this.categoryRef[index] = el;
          }
        },
        id: category,
        style: style,
        onKeyDown: e => this.handleCategoryKeyDown(e, category)
        // Add overrides for custom wallpaper upload UI
        ,
        onClick: category !== "custom-wallpaper" ? this.handleCategory : this.handleUpload,
        className: category !== "custom-wallpaper" ? `wallpaper-input` : `wallpaper-input theme-custom-wallpaper`,
        tabIndex: index === 0 ? 0 : -1
      }, category === "custom-wallpaper" ? {
        "aria-errormessage": "customWallpaperError"
      } : {})), /*#__PURE__*/external_React_default().createElement("label", {
        htmlFor: category,
        "data-l10n-id": fluent_id
      }, fluent_id));
    })), this.state.isCustomWallpaperError && /*#__PURE__*/external_React_default().createElement("div", {
      className: "custom-wallpaper-error",
      id: "customWallpaperError"
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-info"
    }), /*#__PURE__*/external_React_default().createElement("span", {
      "data-l10n-id": "newtab-wallpaper-error-max-file-size",
      "data-l10n-args": `{"file_size": ${wallpaperUploadMaxFileSize}}`
    }))), /*#__PURE__*/external_React_default().createElement(external_ReactTransitionGroup_namespaceObject.CSSTransition, {
      in: !!activeCategory,
      timeout: 300,
      classNames: "wallpaper-list",
      unmountOnExit: true
    }, /*#__PURE__*/external_React_default().createElement("section", {
      className: "category wallpaper-list ignore-color-mode"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      className: "arrow-button",
      "data-l10n-id": activeCategoryFluentID,
      onClick: this.handleBack,
      ref: el => {
        this.backToMenuButton = el;
      }
    }), /*#__PURE__*/external_React_default().createElement("div", {
      role: "grid",
      "aria-label": "Wallpaper selection. Use arrow keys to navigate."
    }, /*#__PURE__*/external_React_default().createElement("fieldset", null, filteredWallpapers.map(({
      title,
      theme,
      fluent_id,
      solid_color,
      wallpaperUrl
    }, index) => {
      let style = {};
      if (wallpaperUrl) {
        style.backgroundImage = `url(${wallpaperUrl})`;
      } else {
        style.backgroundColor = solid_color || "";
      }
      return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("input", {
        ref: el => {
          if (el) {
            this.wallpaperRef[index] = el;
          }
        },
        onChange: this.handleChange,
        onKeyDown: e => this.handleWallpaperKeyDown(e, title),
        style: style,
        type: "radio",
        name: `wallpaper-${title}`,
        id: title,
        value: title,
        checked: title === activeWallpaper,
        "aria-checked": title === activeWallpaper,
        className: `wallpaper-input theme-${theme} ${this.state.activeId === title ? "active" : ""}`,
        onClick: () => this.setActiveId(title) //
        ,
        tabIndex: index === 0 ? 0 : -1 //the first wallpaper in the array will have a tabindex of 0 so we can tab into it. The rest will have a tabindex of -1
      }), /*#__PURE__*/external_React_default().createElement("label", {
        htmlFor: title,
        className: "sr-only",
        "data-l10n-id": fluent_id
      }, fluent_id));
    }), colorPickerInput)))));
  }
}
const WallpaperCategories = (0,external_ReactRedux_namespaceObject.connect)(state => {
  return {
    Wallpapers: state.Wallpapers,
    Prefs: state.Prefs
  };
})(_WallpaperCategories);
;// CONCATENATED MODULE: ./content-src/components/CustomizeMenu/ContentSection/ContentSection.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */





class ContentSection extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onPreferenceSelect = this.onPreferenceSelect.bind(this);

    // Refs are necessary for dynamically measuring drawer heights for slide animations
    this.topSitesDrawerRef = /*#__PURE__*/external_React_default().createRef();
    this.pocketDrawerRef = /*#__PURE__*/external_React_default().createRef();
  }
  inputUserEvent(eventSource, eventValue) {
    this.props.dispatch(actionCreators.UserEvent({
      event: "PREF_CHANGED",
      source: eventSource,
      value: {
        status: eventValue,
        menu_source: "CUSTOMIZE_MENU"
      }
    }));
  }
  onPreferenceSelect(e) {
    // eventSource: WEATHER | TOP_SITES | TOP_STORIES
    const {
      preference,
      eventSource
    } = e.target.dataset;
    let value;
    if (e.target.nodeName === "SELECT") {
      value = parseInt(e.target.value, 10);
    } else if (e.target.nodeName === "INPUT") {
      value = e.target.checked;
      if (eventSource) {
        this.inputUserEvent(eventSource, value);
      }
    } else if (e.target.nodeName === "MOZ-TOGGLE") {
      value = e.target.pressed;
      if (eventSource) {
        this.inputUserEvent(eventSource, value);
      }
    }
    this.props.setPref(preference, value);
  }
  componentDidMount() {
    this.setDrawerMargins();
  }
  componentDidUpdate() {
    this.setDrawerMargins();
  }
  setDrawerMargins() {
    this.setDrawerMargin(`TOP_SITES`, this.props.enabledSections.topSitesEnabled);
    this.setDrawerMargin(`TOP_STORIES`, this.props.enabledSections.pocketEnabled);
  }
  setDrawerMargin(drawerID, isOpen) {
    let drawerRef;
    if (drawerID === `TOP_SITES`) {
      drawerRef = this.topSitesDrawerRef.current;
    } else if (drawerID === `TOP_STORIES`) {
      drawerRef = this.pocketDrawerRef.current;
    } else {
      return;
    }
    if (drawerRef) {
      let drawerHeight = parseFloat(window.getComputedStyle(drawerRef)?.height) || 0;
      if (isOpen) {
        drawerRef.style.marginTop = "var(--space-large)";
      } else {
        drawerRef.style.marginTop = `-${drawerHeight + 3}px`;
      }
    }
  }
  render() {
    const {
      enabledSections,
      enabledWidgets,
      pocketRegion,
      mayHaveInferredPersonalization,
      mayHaveWeather,
      mayHaveTrendingSearch,
      mayHaveWidgets,
      mayHaveTimerWidget,
      mayHaveListsWidget,
      openPreferences,
      wallpapersEnabled,
      activeWallpaper,
      setPref,
      mayHaveTopicSections,
      exitEventFired
    } = this.props;
    const {
      topSitesEnabled,
      pocketEnabled,
      weatherEnabled,
      trendingSearchEnabled,
      showInferredPersonalizationEnabled,
      topSitesRowsCount
    } = enabledSections;
    const {
      timerEnabled,
      listsEnabled
    } = enabledWidgets;
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: "home-section"
    }, wallpapersEnabled && /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("div", {
      className: "wallpapers-section"
    }, /*#__PURE__*/external_React_default().createElement(WallpaperCategories, {
      setPref: setPref,
      activeWallpaper: activeWallpaper,
      exitEventFired: exitEventFired
    })), !mayHaveWidgets && /*#__PURE__*/external_React_default().createElement("span", {
      className: "divider",
      role: "separator"
    })), mayHaveWidgets && /*#__PURE__*/external_React_default().createElement("div", {
      className: "widgets-section"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "category-header"
    }, /*#__PURE__*/external_React_default().createElement("h2", {
      "data-l10n-id": "newtab-custom-widget-section-title"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: "settings-widgets"
    }, mayHaveWeather && /*#__PURE__*/external_React_default().createElement("div", {
      id: "weather-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "weather-toggle",
      pressed: weatherEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "showWeather",
      "data-eventSource": "WEATHER",
      "data-l10n-id": "newtab-custom-widget-weather-toggle"
    })), mayHaveListsWidget && /*#__PURE__*/external_React_default().createElement("div", {
      id: "lists-widget-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "lists-toggle",
      pressed: listsEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "widgets.lists.enabled",
      "data-eventSource": "WIDGET_LISTS",
      "data-l10n-id": "newtab-custom-widget-lists-toggle"
    })), mayHaveTimerWidget && /*#__PURE__*/external_React_default().createElement("div", {
      id: "timer-widget-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "timer-toggle",
      pressed: timerEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "widgets.focusTimer.enabled",
      "data-eventSource": "WIDGET_TIMER",
      "data-l10n-id": "newtab-custom-widget-timer-toggle"
    })), mayHaveTrendingSearch && /*#__PURE__*/external_React_default().createElement("div", {
      id: "trending-search-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "trending-search-toggle",
      pressed: trendingSearchEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "trendingSearch.enabled",
      "data-eventSource": "TRENDING_SEARCH",
      "data-l10n-id": "newtab-custom-widget-trending-search-toggle"
    })), /*#__PURE__*/external_React_default().createElement("span", {
      className: "divider",
      role: "separator"
    }))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "settings-toggles"
    }, !mayHaveWidgets && mayHaveWeather && /*#__PURE__*/external_React_default().createElement("div", {
      id: "weather-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "weather-toggle",
      pressed: weatherEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "showWeather",
      "data-eventSource": "WEATHER",
      "data-l10n-id": "newtab-custom-weather-toggle"
    })), !mayHaveWidgets && mayHaveTrendingSearch && /*#__PURE__*/external_React_default().createElement("div", {
      id: "trending-search-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "trending-search-toggle",
      pressed: trendingSearchEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "trendingSearch.enabled",
      "data-eventSource": "TRENDING_SEARCH",
      "data-l10n-id": "newtab-custom-trending-search-toggle"
    })), /*#__PURE__*/external_React_default().createElement("div", {
      id: "shortcuts-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "shortcuts-toggle",
      pressed: topSitesEnabled || null,
      onToggle: this.onPreferenceSelect,
      "data-preference": "feeds.topsites",
      "data-eventSource": "TOP_SITES",
      "data-l10n-id": "newtab-custom-shortcuts-toggle"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      slot: "nested"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "more-info-top-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "more-information",
      ref: this.topSitesDrawerRef
    }, /*#__PURE__*/external_React_default().createElement("select", {
      id: "row-selector",
      className: "selector",
      name: "row-count",
      "data-preference": "topSitesRows",
      value: topSitesRowsCount,
      onChange: this.onPreferenceSelect,
      disabled: !topSitesEnabled,
      "aria-labelledby": "custom-shortcuts-title"
    }, /*#__PURE__*/external_React_default().createElement("option", {
      value: "1",
      "data-l10n-id": "newtab-custom-row-selector",
      "data-l10n-args": "{\"num\": 1}"
    }), /*#__PURE__*/external_React_default().createElement("option", {
      value: "2",
      "data-l10n-id": "newtab-custom-row-selector",
      "data-l10n-args": "{\"num\": 2}"
    }), /*#__PURE__*/external_React_default().createElement("option", {
      value: "3",
      "data-l10n-id": "newtab-custom-row-selector",
      "data-l10n-args": "{\"num\": 3}"
    }), /*#__PURE__*/external_React_default().createElement("option", {
      value: "4",
      "data-l10n-id": "newtab-custom-row-selector",
      "data-l10n-args": "{\"num\": 4}"
    }))))))), pocketRegion && /*#__PURE__*/external_React_default().createElement("div", {
      id: "pocket-section",
      className: "section"
    }, /*#__PURE__*/external_React_default().createElement("moz-toggle", {
      id: "pocket-toggle",
      pressed: pocketEnabled || null,
      onToggle: this.onPreferenceSelect,
      "aria-describedby": "custom-pocket-subtitle",
      "data-preference": "feeds.section.topstories",
      "data-eventSource": "TOP_STORIES",
      "data-l10n-id": "newtab-custom-stories-toggle"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      slot: "nested"
    }, (mayHaveInferredPersonalization || mayHaveTopicSections) && /*#__PURE__*/external_React_default().createElement("div", {
      className: "more-info-pocket-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "more-information",
      ref: this.pocketDrawerRef
    }, mayHaveInferredPersonalization && /*#__PURE__*/external_React_default().createElement("div", {
      className: "check-wrapper",
      role: "presentation"
    }, /*#__PURE__*/external_React_default().createElement("input", {
      id: "inferred-personalization",
      className: "customize-menu-checkbox",
      disabled: !pocketEnabled,
      checked: showInferredPersonalizationEnabled,
      type: "checkbox",
      onChange: this.onPreferenceSelect,
      "data-preference": "discoverystream.sections.personalization.inferred.user.enabled",
      "data-eventSource": "INFERRED_PERSONALIZATION"
    }), /*#__PURE__*/external_React_default().createElement("label", {
      className: "customize-menu-checkbox-label",
      htmlFor: "inferred-personalization"
    }, "Recommendations inferred from your activity with the feed")), mayHaveTopicSections && /*#__PURE__*/external_React_default().createElement(SectionsMgmtPanel, {
      exitEventFired: exitEventFired
    }))))))), /*#__PURE__*/external_React_default().createElement("span", {
      className: "divider",
      role: "separator"
    }), /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("button", {
      id: "settings-link",
      className: "external-link",
      onClick: openPreferences,
      "data-l10n-id": "newtab-custom-settings"
    })));
  }
}
;// CONCATENATED MODULE: ./content-src/components/CustomizeMenu/CustomizeMenu.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




// eslint-disable-next-line no-shadow

class _CustomizeMenu extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onEntered = this.onEntered.bind(this);
    this.onExited = this.onExited.bind(this);
    this.state = {
      exitEventFired: false
    };
  }
  onEntered() {
    this.setState({
      exitEventFired: false
    });
    if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  onExited() {
    this.setState({
      exitEventFired: true
    });
    if (this.openButton) {
      this.openButton.focus();
    }
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement("span", null, /*#__PURE__*/external_React_default().createElement(external_ReactTransitionGroup_namespaceObject.CSSTransition, {
      timeout: 300,
      classNames: "personalize-animate",
      in: !this.props.showing,
      appear: true
    }, /*#__PURE__*/external_React_default().createElement("button", {
      className: "personalize-button",
      "data-l10n-id": "newtab-customize-panel-icon-button",
      onClick: () => this.props.onOpen(),
      onKeyDown: e => {
        if (e.key === "Enter") {
          this.props.onOpen();
        }
      },
      ref: c => this.openButton = c
    }, /*#__PURE__*/external_React_default().createElement("div", null, /*#__PURE__*/external_React_default().createElement("img", {
      role: "presentation",
      src: "chrome://global/skin/icons/edit-outline.svg"
    })), /*#__PURE__*/external_React_default().createElement("label", {
      "data-l10n-id": "newtab-customize-panel-icon-button-label"
    }))), /*#__PURE__*/external_React_default().createElement(external_ReactTransitionGroup_namespaceObject.CSSTransition, {
      timeout: 250,
      classNames: "customize-animate",
      in: this.props.showing,
      onEntered: this.onEntered,
      onExited: this.onExited,
      appear: true
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "customize-menu",
      role: "dialog",
      "data-l10n-id": "newtab-settings-dialog-label"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "close-button-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      onClick: () => this.props.onClose(),
      id: "close-button",
      type: "icon ghost",
      "data-l10n-id": "newtab-custom-close-menu-button",
      iconsrc: "chrome://global/skin/icons/close.svg",
      ref: c => this.closeButton = c
    })), /*#__PURE__*/external_React_default().createElement(ContentSection, {
      openPreferences: this.props.openPreferences,
      setPref: this.props.setPref,
      enabledSections: this.props.enabledSections,
      enabledWidgets: this.props.enabledWidgets,
      wallpapersEnabled: this.props.wallpapersEnabled,
      activeWallpaper: this.props.activeWallpaper,
      pocketRegion: this.props.pocketRegion,
      mayHaveTopicSections: this.props.mayHaveTopicSections,
      mayHaveInferredPersonalization: this.props.mayHaveInferredPersonalization,
      mayHaveWeather: this.props.mayHaveWeather,
      mayHaveTrendingSearch: this.props.mayHaveTrendingSearch,
      mayHaveWidgets: this.props.mayHaveWidgets,
      mayHaveTimerWidget: this.props.mayHaveTimerWidget,
      mayHaveListsWidget: this.props.mayHaveListsWidget,
      dispatch: this.props.dispatch,
      exitEventFired: this.state.exitEventFired
    }))));
  }
}
const CustomizeMenu = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  DiscoveryStream: state.DiscoveryStream
}))(_CustomizeMenu);
;// CONCATENATED MODULE: ./content-src/lib/constants.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const IS_NEWTAB =
  globalThis.document && globalThis.document.documentURI === "about:newtab";
const NEWTAB_DARK_THEME = {
  ntp_background: {
    r: 42,
    g: 42,
    b: 46,
    a: 1,
  },
  ntp_card_background: {
    r: 66,
    g: 65,
    b: 77,
    a: 1,
  },
  ntp_text: {
    r: 249,
    g: 249,
    b: 250,
    a: 1,
  },
  sidebar: {
    r: 56,
    g: 56,
    b: 61,
    a: 1,
  },
  sidebar_text: {
    r: 249,
    g: 249,
    b: 250,
    a: 1,
  },
};

;// CONCATENATED MODULE: ./content-src/components/Logo/Logo.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


function Logo() {
  return /*#__PURE__*/external_React_default().createElement("h1", {
    className: "logo-and-wordmark-wrapper"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "logo-and-wordmark",
    role: "img",
    "data-l10n-id": "newtab-logo-and-wordmark"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "logo"
  }), /*#__PURE__*/external_React_default().createElement("div", {
    className: "wordmark"
  })));
}

;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamComponents/SafeAnchor/SafeAnchor.jsx
function SafeAnchor_extends() { return SafeAnchor_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, SafeAnchor_extends.apply(null, arguments); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



class SafeAnchor extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    // Use dispatch instead of normal link click behavior to include referrer
    if (this.props.dispatch) {
      event.preventDefault();
      const {
        altKey,
        button,
        ctrlKey,
        metaKey,
        shiftKey
      } = event;
      this.props.dispatch(actionCreators.OnlyToMain({
        type: actionTypes.OPEN_LINK,
        data: {
          event: {
            altKey,
            button,
            ctrlKey,
            metaKey,
            shiftKey
          },
          referrer: this.props.referrer || "https://getpocket.com/recommendations",
          // Use the anchor's url, which could have been cleaned up
          url: event.currentTarget.href,
          is_sponsored: this.props.isSponsored
        }
      }));
    }

    // Propagate event if there's a handler
    if (this.props.onLinkClick) {
      this.props.onLinkClick(event);
    }
  }
  safeURI(url) {
    let protocol = null;
    try {
      protocol = new URL(url).protocol;
    } catch (e) {
      return "";
    }
    const isAllowed = ["http:", "https:"].includes(protocol);
    if (!isAllowed) {
      console.warn(`${url} is not allowed for anchor targets.`); // eslint-disable-line no-console
      return "";
    }
    return url;
  }
  render() {
    const {
      url,
      className,
      title,
      isSponsored
    } = this.props;
    let anchor = /*#__PURE__*/external_React_default().createElement("a", SafeAnchor_extends({
      href: this.safeURI(url),
      title: title,
      className: className,
      onClick: this.onClick,
      "data-is-sponsored-link": !!isSponsored
    }, this.props.tabIndex === 0 || this.props.tabIndex ? {
      ref: this.props.setRef,
      tabIndex: this.props.tabIndex
    } : {}), this.props.children);
    return anchor;
  }
}
;// CONCATENATED MODULE: ./content-src/components/ContextMenu/ContextMenu.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



class ContextMenu extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.hideContext = this.hideContext.bind(this);
    this.onShow = this.onShow.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  hideContext() {
    this.props.onUpdate(false);
  }
  onShow() {
    if (this.props.onShow) {
      this.props.onShow();
    }
  }
  componentDidMount() {
    this.onShow();
    setTimeout(() => {
      globalThis.addEventListener("click", this.hideContext);
    }, 0);
  }
  componentWillUnmount() {
    globalThis.removeEventListener("click", this.hideContext);
  }
  onClick(event) {
    // Eat all clicks on the context menu so they don't bubble up to window.
    // This prevents the context menu from closing when clicking disabled items
    // or the separators.
    event.stopPropagation();
  }
  render() {
    // Disabling focus on the menu span allows the first tab to focus on the first menu item instead of the wrapper.
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/interactive-supports-focus
      external_React_default().createElement("span", {
        className: "context-menu"
      }, /*#__PURE__*/external_React_default().createElement("ul", {
        role: "menu",
        onClick: this.onClick,
        onKeyDown: this.onClick,
        className: "context-menu-list"
      }, this.props.options.map((option, i) => option.type === "separator" ? /*#__PURE__*/external_React_default().createElement("li", {
        key: i,
        className: "separator",
        role: "separator"
      }) : option.type !== "empty" && /*#__PURE__*/external_React_default().createElement(ContextMenuItem, {
        key: i,
        option: option,
        hideContext: this.hideContext,
        keyboardAccess: this.props.keyboardAccess
      }))))
    );
  }
}
class _ContextMenuItem extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.focusFirst = this.focusFirst.bind(this);
  }
  onClick(event) {
    this.props.hideContext();
    this.props.option.onClick(event);
  }

  // Focus the first menu item if the menu was accessed via the keyboard.
  focusFirst(button) {
    if (this.props.keyboardAccess && button) {
      button.focus();
    }
  }

  // This selects the correct node based on the key pressed
  focusSibling(target, key) {
    const {
      parentNode
    } = target;
    const closestSiblingSelector = key === "ArrowUp" ? "previousSibling" : "nextSibling";
    if (!parentNode[closestSiblingSelector]) {
      return;
    }
    if (parentNode[closestSiblingSelector].firstElementChild) {
      parentNode[closestSiblingSelector].firstElementChild.focus();
    } else {
      parentNode[closestSiblingSelector][closestSiblingSelector].firstElementChild.focus();
    }
  }
  onKeyDown(event) {
    const {
      option
    } = this.props;
    switch (event.key) {
      case "Tab":
        // tab goes down in context menu, shift + tab goes up in context menu
        // if we're on the last item, one more tab will close the context menu
        // similarly, if we're on the first item, one more shift + tab will close it
        if (event.shiftKey && option.first || !event.shiftKey && option.last) {
          this.props.hideContext();
        }
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        this.focusSibling(event.target, event.key);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        this.props.hideContext();
        option.onClick();
        break;
      case "Escape":
        this.props.hideContext();
        break;
    }
  }

  // Prevents the default behavior of spacebar
  // scrolling the page & auto-triggering buttons.
  onKeyUp(event) {
    if (event.key === " ") {
      event.preventDefault();
    }
  }
  render() {
    const {
      option
    } = this.props;
    const className = [option.disabled ? "disabled" : ""].join(" ");
    return /*#__PURE__*/external_React_default().createElement("li", {
      role: "presentation",
      className: "context-menu-item"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      role: "menuitem",
      className: className,
      onClick: this.onClick,
      onKeyDown: this.onKeyDown,
      onKeyUp: this.onKeyUp,
      ref: option.first ? this.focusFirst : null,
      "aria-haspopup": option.id === "newtab-menu-edit-topsites" ? "dialog" : null
    }, /*#__PURE__*/external_React_default().createElement("span", {
      "data-l10n-id": option.string_id || option.id
    })));
  }
}
const ContextMenuItem = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  Prefs: state.Prefs
}))(_ContextMenuItem);
;// CONCATENATED MODULE: ./content-src/lib/link-menu-options.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



const _OpenInPrivateWindow = site => ({
  id: "newtab-menu-open-new-private-window",
  icon: "new-window-private",
  action: actionCreators.OnlyToMain({
    type: actionTypes.OPEN_PRIVATE_WINDOW,
    data: {
      url: site.url,
      referrer: site.referrer,
      event_source: "CONTEXT_MENU",
    },
  }),
  userEvent: "OPEN_PRIVATE_WINDOW",
});

/**
 * List of functions that return items that can be included as menu options in a
 * LinkMenu. All functions take the site as the first parameter, and optionally
 * the index of the site.
 */
const LinkMenuOptions = {
  Separator: () => ({ type: "separator" }),
  EmptyItem: () => ({ type: "empty" }),
  ShowPrivacyInfo: () => ({
    id: "newtab-menu-show-privacy-info",
    icon: "info",
    action: {
      type: actionTypes.SHOW_PRIVACY_INFO,
    },
    userEvent: "SHOW_PRIVACY_INFO",
  }),
  AboutSponsored: site => ({
    id: "newtab-menu-show-privacy-info",
    icon: "info",
    action: actionCreators.AlsoToMain({
      type: actionTypes.ABOUT_SPONSORED_TOP_SITES,
      data: {
        advertiser_name: (site.label || site.hostname).toLocaleLowerCase(),
        position: site.sponsored_position,
        tile_id: site.sponsored_tile_id,
        block_key: site.block_key,
      },
    }),
    userEvent: "TOPSITE_SPONSOR_INFO",
  }),
  RemoveBookmark: site => ({
    id: "newtab-menu-remove-bookmark",
    icon: "bookmark-added",
    action: actionCreators.AlsoToMain({
      type: actionTypes.DELETE_BOOKMARK_BY_ID,
      data: site.bookmarkGuid,
    }),
    userEvent: "BOOKMARK_DELETE",
  }),
  AddBookmark: site => ({
    id: "newtab-menu-bookmark",
    icon: "bookmark-hollow",
    action: actionCreators.AlsoToMain({
      type: actionTypes.BOOKMARK_URL,
      data: { url: site.url, title: site.title, type: site.type },
    }),
    userEvent: "BOOKMARK_ADD",
  }),
  OpenInNewWindow: site => ({
    id: "newtab-menu-open-new-window",
    icon: "new-window",
    action: actionCreators.AlsoToMain({
      type: actionTypes.OPEN_NEW_WINDOW,
      data: {
        card_type: site.card_type,
        referrer: site.referrer,
        typedBonus: site.typedBonus,
        url: site.url,
        is_sponsored: !!site.sponsored_tile_id,
        event_source: "CONTEXT_MENU",
        topic: site.topic,
        firstVisibleTimestamp: site.firstVisibleTimestamp,
        tile_id: site.tile_id,
        recommendation_id: site.recommendation_id,
        scheduled_corpus_item_id: site.scheduled_corpus_item_id,
        corpus_item_id: site.corpus_item_id,
        received_rank: site.received_rank,
        recommended_at: site.recommended_at,
        format: site.format,
        ...(site.flight_id ? { flight_id: site.flight_id } : {}),
        is_pocket_card: site.type === "CardGrid",
        is_list_card: site.is_list_card,
        ...(site.section
          ? {
              section: site.section,
              section_position: site.section_position,
              is_section_followed: site.is_section_followed,
            }
          : {}),
      },
    }),
    userEvent: "OPEN_NEW_WINDOW",
  }),

  // This blocks the url for regular stories,
  // but also sends a message to DiscoveryStream with flight_id.
  // If DiscoveryStream sees this message for a flight_id
  // it also blocks it on the flight_id.
  BlockUrl: (site, index, eventSource) => {
    return LinkMenuOptions.BlockUrls([site], index, eventSource);
  },
  // Same as BlockUrl, except can work on an array of sites.
  BlockUrls: (tiles, pos, eventSource) => ({
    id: "newtab-menu-dismiss",
    icon: "dismiss",
    action: actionCreators.AlsoToMain({
      type: actionTypes.BLOCK_URL,
      source: eventSource,
      data: tiles.map(site => ({
        url: site.original_url || site.open_url || site.url,
        // pocket_id is only for pocket stories being in highlights, and then dismissed.
        pocket_id: site.pocket_id,
        tile_id: site.tile_id,
        ...(site.block_key ? { block_key: site.block_key } : {}),
        recommendation_id: site.recommendation_id,
        scheduled_corpus_item_id: site.scheduled_corpus_item_id,
        corpus_item_id: site.corpus_item_id,
        received_rank: site.received_rank,
        recommended_at: site.recommended_at,
        // used by PlacesFeed and TopSitesFeed for sponsored top sites blocking.
        isSponsoredTopSite: site.sponsored_position,
        type: site.type,
        card_type: site.card_type,
        ...(site.shim && site.shim.delete ? { shim: site.shim.delete } : {}),
        ...(site.flight_id ? { flight_id: site.flight_id } : {}),
        // If not sponsored, hostname could be anything (Cat3 Data!).
        // So only put in advertiser_name for sponsored topsites.
        ...(site.sponsored_position
          ? {
              advertiser_name: (
                site.label || site.hostname
              )?.toLocaleLowerCase(),
            }
          : {}),
        position: pos,
        ...(site.sponsored_tile_id ? { tile_id: site.sponsored_tile_id } : {}),
        is_pocket_card: site.type === "CardGrid",
        is_list_card: site.is_list_card,
        ...(site.format ? { format: site.format } : {}),
        ...(site.section
          ? {
              section: site.section,
              section_position: site.section_position,
              is_section_followed: site.is_section_followed,
            }
          : {}),
      })),
    }),
    impression: actionCreators.ImpressionStats({
      source: eventSource,
      block: 0,
      tiles: tiles.map((site, index) => ({
        id: site.guid,
        pos: pos + index,
        ...(site.shim && site.shim.delete ? { shim: site.shim.delete } : {}),
      })),
    }),
    userEvent: "BLOCK",
  }),

  // This is the "Dismiss" action for leaderboard/billboard ads.
  BlockAdUrl: (site, pos, eventSource) => ({
    id: "newtab-menu-dismiss",
    icon: "dismiss",
    action: actionCreators.AlsoToMain({
      type: actionTypes.BLOCK_URL,
      data: [site],
    }),
    impression: actionCreators.ImpressionStats({
      source: eventSource,
      block: 0,
      tiles: [
        {
          id: site.guid,
          pos,
          ...(site.shim && site.shim.save ? { shim: site.shim.save } : {}),
        },
      ],
    }),
    userEvent: "BLOCK",
  }),

  // This is an option for web extentions which will result in remove items from
  // memory and notify the web extenion, rather than using the built-in block list.
  WebExtDismiss: (site, index, eventSource) => ({
    id: "menu_action_webext_dismiss",
    string_id: "newtab-menu-dismiss",
    icon: "dismiss",
    action: actionCreators.WebExtEvent(actionTypes.WEBEXT_DISMISS, {
      source: eventSource,
      url: site.url,
      action_position: index,
    }),
  }),
  DeleteUrl: (site, index, eventSource, isEnabled, siteInfo) => ({
    id: "newtab-menu-delete-history",
    icon: "delete",
    action: {
      type: actionTypes.DIALOG_OPEN,
      data: {
        onConfirm: [
          actionCreators.AlsoToMain({
            type: actionTypes.DELETE_HISTORY_URL,
            data: {
              url: site.url,
              pocket_id: site.pocket_id,
              forceBlock: site.bookmarkGuid,
            },
          }),
          actionCreators.UserEvent(
            Object.assign(
              { event: "DELETE", source: eventSource, action_position: index },
              siteInfo
            )
          ),
          // Also broadcast that this url has been deleted so that
          // the confirmation dialog knows it needs to disappear now.
          actionCreators.AlsoToMain({
            type: actionTypes.DIALOG_CLOSE,
          }),
        ],
        eventSource,
        body_string_id: [
          "newtab-confirm-delete-history-p1",
          "newtab-confirm-delete-history-p2",
        ],
        confirm_button_string_id: "newtab-topsites-delete-history-button",
        cancel_button_string_id: "newtab-topsites-cancel-button",
        icon: "modal-delete",
      },
    },
    userEvent: "DIALOG_OPEN",
  }),
  ShowFile: site => ({
    id: "newtab-menu-show-file",
    icon: "search",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SHOW_DOWNLOAD_FILE,
      data: { url: site.url },
    }),
  }),
  OpenFile: site => ({
    id: "newtab-menu-open-file",
    icon: "open-file",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_DOWNLOAD_FILE,
      data: { url: site.url },
    }),
  }),
  CopyDownloadLink: site => ({
    id: "newtab-menu-copy-download-link",
    icon: "copy",
    action: actionCreators.OnlyToMain({
      type: actionTypes.COPY_DOWNLOAD_LINK,
      data: { url: site.url },
    }),
  }),
  GoToDownloadPage: site => ({
    id: "newtab-menu-go-to-download-page",
    icon: "download",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_LINK,
      data: { url: site.referrer },
    }),
    disabled: !site.referrer,
  }),
  RemoveDownload: site => ({
    id: "newtab-menu-remove-download",
    icon: "delete",
    action: actionCreators.OnlyToMain({
      type: actionTypes.REMOVE_DOWNLOAD_FILE,
      data: { url: site.url },
    }),
  }),
  PinTopSite: (site, index) => ({
    id: "newtab-menu-pin",
    icon: "pin",
    action: actionCreators.AlsoToMain({
      type: actionTypes.TOP_SITES_PIN,
      data: {
        site,
        index,
      },
    }),
    userEvent: "PIN",
  }),
  UnpinTopSite: site => ({
    id: "newtab-menu-unpin",
    icon: "unpin",
    action: actionCreators.AlsoToMain({
      type: actionTypes.TOP_SITES_UNPIN,
      data: { site: { url: site.url } },
    }),
    userEvent: "UNPIN",
  }),
  EditTopSite: (site, index) => ({
    id: "newtab-menu-edit-topsites",
    icon: "edit",
    action: {
      type: actionTypes.TOP_SITES_EDIT,
      data: { index },
    },
  }),
  CheckBookmark: site =>
    site.bookmarkGuid
      ? LinkMenuOptions.RemoveBookmark(site)
      : LinkMenuOptions.AddBookmark(site),
  CheckPinTopSite: (site, index) =>
    site.isPinned
      ? LinkMenuOptions.UnpinTopSite(site)
      : LinkMenuOptions.PinTopSite(site, index),
  OpenInPrivateWindow: (site, index, eventSource, isEnabled) =>
    isEnabled ? _OpenInPrivateWindow(site) : LinkMenuOptions.EmptyItem(),
  ChangeWeatherLocation: () => ({
    id: "newtab-weather-menu-change-location",
    action: actionCreators.BroadcastToContent({
      type: actionTypes.WEATHER_SEARCH_ACTIVE,
      data: true,
    }),
  }),
  ChangeWeatherDisplaySimple: () => ({
    id: "newtab-weather-menu-change-weather-display-simple",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "weather.display",
        value: "simple",
      },
    }),
  }),
  ChangeWeatherDisplayDetailed: () => ({
    id: "newtab-weather-menu-change-weather-display-detailed",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "weather.display",
        value: "detailed",
      },
    }),
  }),
  ChangeTempUnitFahrenheit: () => ({
    id: "newtab-weather-menu-change-temperature-units-fahrenheit",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "weather.temperatureUnits",
        value: "f",
      },
    }),
  }),
  ChangeTempUnitCelsius: () => ({
    id: "newtab-weather-menu-change-temperature-units-celsius",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "weather.temperatureUnits",
        value: "c",
      },
    }),
  }),
  HideWeather: () => ({
    id: "newtab-weather-menu-hide-weather",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "showWeather",
        value: false,
      },
    }),
  }),
  OpenLearnMoreURL: site => ({
    id: "newtab-weather-menu-learn-more",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_LINK,
      data: { url: site.url },
    }),
  }),
  FakespotDismiss: () => ({
    id: "newtab-menu-dismiss",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "discoverystream.contextualContent.fakespot.enabled",
        value: false,
      },
    }),
    impression: actionCreators.OnlyToMain({
      type: actionTypes.FAKESPOT_DISMISS,
    }),
  }),
  AboutFakespot: site => ({
    id: "newtab-menu-about-fakespot",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_LINK,
      data: { url: site.url },
    }),
    impression: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_ABOUT_FAKESPOT,
    }),
  }),
  SectionBlock: ({
    sectionPersonalization,
    sectionKey,
    sectionPosition,
    title,
  }) => ({
    id: "newtab-menu-section-block",
    icon: "delete",
    action: {
      // Open the confirmation dialog to block a section.
      type: actionTypes.DIALOG_OPEN,
      data: {
        onConfirm: [
          // Once the user confirmed their intention to block this section,
          // update their preferences.
          actionCreators.AlsoToMain({
            type: actionTypes.SECTION_PERSONALIZATION_SET,
            data: {
              ...sectionPersonalization,
              [sectionKey]: {
                isBlocked: true,
                isFollowed: false,
              },
            },
          }),
          // Telemetry
          actionCreators.OnlyToMain({
            type: actionTypes.BLOCK_SECTION,
            data: {
              section: sectionKey,
              section_position: sectionPosition,
              event_source: "CONTEXT_MENU",
            },
          }),
          // Also broadcast that this section has been blocked so that
          // the confirmation dialog knows it needs to disappear now.
          actionCreators.AlsoToMain({
            type: actionTypes.DIALOG_CLOSE,
          }),
        ],
        // Pass Fluent strings to ConfirmDialog component for the copy
        // of the prompt to block sections.
        body_string_id: [
          "newtab-section-confirm-block-topic-p1",
          "newtab-section-confirm-block-topic-p2",
        ],
        confirm_button_string_id: "newtab-section-block-topic-button",
        confirm_button_string_args: { topic: title },
        cancel_button_string_id: "newtab-section-cancel-button",
      },
    },
    userEvent: "DIALOG_OPEN",
  }),
  SectionUnfollow: ({
    sectionPersonalization,
    sectionKey,
    sectionPosition,
  }) => ({
    id: "newtab-menu-section-unfollow",
    action: actionCreators.AlsoToMain({
      type: actionTypes.SECTION_PERSONALIZATION_SET,
      data: (({ sectionKey: _sectionKey, ...remaining }) => remaining)(
        sectionPersonalization
      ),
    }),
    impression: actionCreators.OnlyToMain({
      type: actionTypes.UNFOLLOW_SECTION,
      data: {
        section: sectionKey,
        section_position: sectionPosition,
        event_source: "CONTEXT_MENU",
      },
    }),
  }),
  ManageSponsoredContent: () => ({
    id: "newtab-menu-manage-sponsored-content",
    action: actionCreators.OnlyToMain({ type: actionTypes.SETTINGS_OPEN }),
    userEvent: "OPEN_NEWTAB_PREFS",
  }),
  OurSponsorsAndYourPrivacy: () => ({
    id: "newtab-menu-our-sponsors-and-your-privacy",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_LINK,
      data: {
        url: "https://support.mozilla.org/kb/pocket-sponsored-stories-new-tabs",
      },
    }),
    userEvent: "CLICK_PRIVACY_INFO",
  }),
  ReportAd: site => {
    return {
      id: "newtab-menu-report-this-ad",
      action: actionCreators.AlsoToMain({
        type: actionTypes.REPORT_AD_OPEN,
        data: {
          card_type: site.card_type,
          position: site.position,
          reporting_url: site.shim.report,
          url: site.url,
        },
      }),
    };
  },

  ReportContent: site => {
    return {
      id: "newtab-menu-report",
      action: actionCreators.AlsoToMain({
        type: actionTypes.REPORT_CONTENT_OPEN,
        data: {
          card_type: site.card_type,
          corpus_item_id: site.corpus_item_id,
          scheduled_corpus_item_id: site.scheduled_corpus_item_id,
          section_position: site.section_position,
          section: site.section,
          title: site.title,
          topic: site.topic,
          url: site.url,
        },
      }),
    };
  },
  TrendingSearchLearnMore: site => ({
    id: "newtab-trending-searches-learn-more",
    action: actionCreators.OnlyToMain({
      type: actionTypes.OPEN_LINK,
      data: { url: site.url },
    }),
    impression: actionCreators.OnlyToMain({
      type: actionTypes.TRENDING_SEARCH_LEARN_MORE,
      data: {
        variant: site.variant,
      },
    }),
  }),
  TrendingSearchDismiss: site => ({
    id: "newtab-trending-searches-dismiss",
    action: actionCreators.OnlyToMain({
      type: actionTypes.SET_PREF,
      data: {
        name: "trendingSearch.enabled",
        value: false,
      },
    }),
    impression: actionCreators.OnlyToMain({
      type: actionTypes.TRENDING_SEARCH_DISMISS,
      data: {
        variant: site.variant,
      },
    }),
  }),
};

;// CONCATENATED MODULE: ./content-src/components/LinkMenu/LinkMenu.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */






const DEFAULT_SITE_MENU_OPTIONS = ["CheckPinTopSite", "EditTopSite", "Separator", "OpenInNewWindow", "OpenInPrivateWindow", "Separator", "BlockUrl"];
class _LinkMenu extends (external_React_default()).PureComponent {
  getOptions() {
    const {
      props
    } = this;
    const {
      site,
      index,
      source,
      isPrivateBrowsingEnabled,
      siteInfo,
      platform,
      dispatch,
      options,
      shouldSendImpressionStats,
      userEvent = actionCreators.UserEvent
    } = props;

    // Handle special case of default site
    const propOptions = site.isDefault && !site.searchTopSite && !site.sponsored_position ? DEFAULT_SITE_MENU_OPTIONS : options;
    const linkMenuOptions = propOptions.map(o => LinkMenuOptions[o](site, index, source, isPrivateBrowsingEnabled, siteInfo, platform)).map(option => {
      const {
        action,
        impression,
        id,
        type,
        userEvent: eventName
      } = option;
      if (!type && id) {
        option.onClick = (event = {}) => {
          const {
            ctrlKey,
            metaKey,
            shiftKey,
            button
          } = event;
          // Only send along event info if there's something non-default to send
          if (ctrlKey || metaKey || shiftKey || button === 1) {
            action.data = Object.assign({
              event: {
                ctrlKey,
                metaKey,
                shiftKey,
                button
              }
            }, action.data);
          }
          dispatch(action);
          if (eventName) {
            let value;
            // Bug 1958135: Pass additional info to ac.OPEN_NEW_WINDOW event
            if (action.type === "OPEN_NEW_WINDOW") {
              const {
                card_type,
                corpus_item_id,
                event_source,
                fetchTimestamp,
                firstVisibleTimestamp,
                format,
                is_list_card,
                is_section_followed,
                received_rank,
                recommendation_id,
                recommended_at,
                scheduled_corpus_item_id,
                section_position,
                section,
                selected_topics,
                tile_id,
                topic
              } = action.data;
              value = {
                card_type,
                corpus_item_id,
                event_source,
                fetchTimestamp,
                firstVisibleTimestamp,
                format,
                is_list_card,
                received_rank,
                recommendation_id,
                recommended_at,
                scheduled_corpus_item_id,
                ...(section ? {
                  is_section_followed,
                  section_position,
                  section
                } : {}),
                selected_topics: selected_topics ? selected_topics : "",
                tile_id,
                topic
              };
            } else {
              value = {
                card_type: site.flight_id ? "spoc" : "organic"
              };
            }
            const userEventData = Object.assign({
              event: eventName,
              source,
              action_position: index,
              value
            }, siteInfo);
            dispatch(userEvent(userEventData));
            if (impression && shouldSendImpressionStats) {
              dispatch(impression);
            }
          }
        };
      }
      return option;
    });

    // This is for accessibility to support making each item tabbable.
    // We want to know which item is the first and which item
    // is the last, so we can close the context menu accordingly.
    linkMenuOptions[0].first = true;
    linkMenuOptions[linkMenuOptions.length - 1].last = true;
    return linkMenuOptions;
  }
  render() {
    return /*#__PURE__*/external_React_default().createElement(ContextMenu, {
      onUpdate: this.props.onUpdate,
      onShow: this.props.onShow,
      options: this.getOptions(),
      keyboardAccess: this.props.keyboardAccess
    });
  }
}
const getState = state => ({
  isPrivateBrowsingEnabled: state.Prefs.values.isPrivateBrowsingEnabled,
  platform: state.Prefs.values.platform
});
const LinkMenu = (0,external_ReactRedux_namespaceObject.connect)(getState)(_LinkMenu);
;// CONCATENATED MODULE: ./content-src/lib/utils.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */


/**
 * A custom react hook that sets up an IntersectionObserver to observe a single
 * or list of elements and triggers a callback when the element comes into the viewport
 * Note: The refs used should be an array type
 * @function useIntersectionObserver
 * @param {function} callback - The function to call when an element comes into the viewport
 * @param {Object} options - Options object passed to Intersection Observer:
 * https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#options
 * @param {Boolean} [isSingle = false] Boolean if the elements are an array or single element
 *
 * @returns {React.MutableRefObject} a ref containing an array of elements or single element
 *
 *
 *
 */
function useIntersectionObserver(callback, threshold = 0.3) {
  const elementsRef = (0,external_React_namespaceObject.useRef)([]);
  const triggeredElements = (0,external_React_namespaceObject.useRef)(new WeakSet());
  (0,external_React_namespaceObject.useEffect)(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggeredElements.current.has(entry.target)) {
          triggeredElements.current.add(entry.target);
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold
    });
    elementsRef.current.forEach(el => {
      if (el && !triggeredElements.current.has(el)) {
        observer.observe(el);
      }
    });

    // Cleanup function to disconnect observer on unmount
    return () => observer.disconnect();
  }, [callback, threshold]);
  return elementsRef;
}

/**
 * Determines the active card size ("small", "medium", or "large") based on the screen width
 * and class names applied to the card element at the time of an event (example: click)
 *
 * @param {number} screenWidth - The current window width (in pixels).
 * @param {string | string[]} classNames - A string or array of class names applied to the sections card.
 * @param {boolean[]} sectionsEnabled - If sections is not enabled, all cards are `medium-card`
 * @param {number} flightId - Error ege case: This function should not be called on spocs, which have flightId
 * @returns {"small-card" | "medium-card" | "large-card" | null} The active card type, or null if none is matched.
 */
function getActiveCardSize(screenWidth, classNames, sectionsEnabled, flightId) {
  // Only applies to sponsored content
  if (flightId) {
    return "spoc";
  }

  // Default layout only supports `medium-card`
  if (!sectionsEnabled) {
    // Missing arguments
    return "medium-card";
  }

  // Return null if no values are available
  if (!screenWidth || !classNames) {
    // Missing arguments
    return null;
  }
  const classList = classNames.split(" ");

  // Each breakpoint corresponds to a minimum screen width and its associated column class
  const breakpoints = [{
    min: 1374,
    column: "col-4"
  },
  // $break-point-sections-variant
  {
    min: 1122,
    column: "col-3"
  },
  // $break-point-widest
  {
    min: 724,
    column: "col-2"
  },
  // $break-point-layout-variant
  {
    min: 0,
    column: "col-1"
  } // (default layout)
  ];
  const cardTypes = ["small", "medium", "large"];

  // Determine which column is active based on the current screen width
  const currColumnCount = breakpoints.find(bp => screenWidth >= bp.min).column;

  // Match the card type for that column count
  for (let type of cardTypes) {
    const className = `${currColumnCount}-${type}`;
    if (classList.includes(className)) {
      // Special case: below $break-point-medium (610px), report `col-1-small` as medium
      if (screenWidth < 610 && currColumnCount === "col-1" && type === "small") {
        return "medium-card";
      }
      // Will be either "small-card", "medium-card", or "large-card"
      return `${type}-card`;
    }
  }
  return null;
}
const CONFETTI_VARS = ["--color-red-40", "--color-yellow-40", "--color-purple-40", "--color-blue-40", "--color-green-40"];

/**
 * Custom hook to animate a confetti burst.
 *
 * @param {number} count   Number of particles
 * @param {number} spread  spread of confetti
 * @returns {[React.RefObject<HTMLCanvasElement>, () => void]}
 */
function useConfetti(count = 80, spread = Math.PI / 3) {
  // avoid errors from about:home cache
  const prefersReducedMotion = typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let colors;
  // if in abouthome cache, getComputedStyle will not be available
  if (typeof getComputedStyle === "function") {
    const styles = getComputedStyle(document.documentElement);
    colors = CONFETTI_VARS.map(variable => styles.getPropertyValue(variable).trim());
  } else {
    colors = ["#fa5e75", "#de9600", "#c671eb", "#3f94ff", "#37b847"];
  }
  const canvasRef = (0,external_React_namespaceObject.useRef)(null);
  const particlesRef = (0,external_React_namespaceObject.useRef)([]);
  const animationFrameRef = (0,external_React_namespaceObject.useRef)(0);

  // initialize/reset pool
  const initializeConfetti = (0,external_React_namespaceObject.useCallback)((width, height) => {
    const centerX = width / 2;
    const centerY = height;
    const pool = particlesRef.current;

    // Create or overwrite each particle’s initial state
    for (let i = 0; i < count; i++) {
      const angle = Math.PI / 2 + (Math.random() - 0.5) * spread;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const color = colors[Math.floor(Math.random() * colors.length)];
      pool[i] = {
        x: centerX + (Math.random() - 0.5) * 40,
        y: centerY,
        cos,
        sin,
        velocity: Math.random() * 6 + 6,
        gravity: 0.3,
        decay: 0.96,
        size: 8,
        color,
        life: 0,
        maxLife: 100,
        tilt: Math.random() * Math.PI * 2,
        tiltSpeed: Math.random() * 0.2 + 0.05
      };
    }
  }, [count, spread, colors]);

  // Core animation loop — updates physics & renders each frame
  const animateParticles = (0,external_React_namespaceObject.useCallback)(canvas => {
    const context = canvas.getContext("2d");
    const {
      width,
      height
    } = canvas;
    const pool = particlesRef.current;

    // Clear the entire canvas each frame
    context.clearRect(0, 0, width, height);
    let anyAlive = false;
    for (let particle of pool) {
      if (particle.life < particle.maxLife) {
        anyAlive = true;

        // update each particles physics: position, velocity decay, gravity, tilt, lifespan
        particle.velocity *= particle.decay;
        particle.x += particle.cos * particle.velocity;
        particle.y -= particle.sin * particle.velocity;
        particle.y += particle.gravity;
        particle.tilt += particle.tiltSpeed;
        particle.life += 1;
      }

      // Draw: apply alpha, transform & draw a rotated, scaled square
      const alphaValue = 1 - particle.life / particle.maxLife;
      const scaleY = Math.sin(particle.tilt);
      context.globalAlpha = alphaValue;
      context.setTransform(1, 0, 0, 1, particle.x, particle.y);
      context.rotate(Math.PI / 4);
      context.scale(1, scaleY);
      context.fillStyle = particle.color;
      context.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);

      // reset each particle
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.globalAlpha = 1;
    }
    if (anyAlive) {
      // continue the animation
      animationFrameRef.current = requestAnimationFrame(() => {
        animateParticles(canvas);
      });
    } else {
      cancelAnimationFrame(animationFrameRef.current);
      context.clearRect(0, 0, width, height);
    }
  }, []);

  // Resets and starts a new confetti animation
  const fireConfetti = (0,external_React_namespaceObject.useCallback)(() => {
    if (prefersReducedMotion) {
      return;
    }
    const canvas = canvasRef?.current;
    if (canvas) {
      cancelAnimationFrame(animationFrameRef.current);
      initializeConfetti(canvas.width, canvas.height);
      animateParticles(canvas);
    }
  }, [initializeConfetti, animateParticles, prefersReducedMotion]);
  return [canvasRef, fireConfetti];
}

;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamComponents/TrendingSearches/TrendingSearches.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */






const PREF_TRENDING_VARIANT = "trendingSearch.variant";
const PREF_REFINED_CARDS_LAYOUT = "discoverystream.refinedCardsLayout.enabled";
function TrendingSearches() {
  const [showContextMenu, setShowContextMenu] = (0,external_React_namespaceObject.useState)(false);
  // The keyboard access parameter is passed down to LinkMenu component
  // that uses it to focus on the first context menu option for accessibility.
  const [isKeyboardAccess, setIsKeyboardAccess] = (0,external_React_namespaceObject.useState)(false);
  const dispatch = (0,external_ReactRedux_namespaceObject.useDispatch)();
  const {
    TrendingSearch,
    Prefs
  } = (0,external_ReactRedux_namespaceObject.useSelector)(state => state);
  const {
    values: prefs
  } = Prefs;
  const {
    suggestions,
    collapsed
  } = TrendingSearch;
  const variant = prefs[PREF_TRENDING_VARIANT];
  const refinedCards = prefs[PREF_REFINED_CARDS_LAYOUT];
  let resultRef = (0,external_React_namespaceObject.useRef)([]);
  let contextMenuHost = (0,external_React_namespaceObject.useRef)(null);
  const TRENDING_SEARCH_CONTEXT_MENU_OPTIONS = ["TrendingSearchDismiss", "TrendingSearchLearnMore"];
  function onArrowClick() {
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.TRENDING_SEARCH_TOGGLE_COLLAPSE,
      data: {
        collapsed: !collapsed,
        variant
      }
    }));
  }
  function handleLinkOpen() {
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.TRENDING_SEARCH_SUGGESTION_OPEN,
      data: {
        variant
      }
    }));
  }

  // If the window is small, the context menu in variant B will move closer to the card
  // so that it doesn't cut off
  const handleContextMenuShow = () => {
    const host = contextMenuHost.current;
    const isRTL = document.dir === "rtl"; // returns true if page language is right-to-left
    const checkRect = host.getBoundingClientRect();
    const maxBounds = 200;

    // Adds the class of "last-item" if the card is near the edge of the window
    const checkBounds = isRTL ? checkRect.left <= maxBounds : window.innerWidth - checkRect.right <= maxBounds;
    if (checkBounds) {
      host.classList.add("last-item");
    }
  };
  const handleContextMenuUpdate = () => {
    const host = contextMenuHost.current;
    if (!host) {
      return;
    }
    host.classList.remove("last-item");
  };
  const toggleContextMenu = isKeyBoard => {
    setShowContextMenu(!showContextMenu);
    setIsKeyboardAccess(isKeyBoard);
    if (!showContextMenu) {
      handleContextMenuShow();
    } else {
      handleContextMenuUpdate();
    }
  };
  function onContextMenuClick(e) {
    e.preventDefault();
    toggleContextMenu(false);
  }
  function onContextMenuKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleContextMenu(true);
    }
  }
  function onUpdate() {
    setShowContextMenu(!showContextMenu);
  }
  function handleResultKeyDown(event, index) {
    const maxResults = suggestions.length;
    let nextIndex = index;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (index < maxResults - 1) {
        nextIndex = index + 1;
      } else {
        return;
      }
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      if (index > 0) {
        nextIndex = index - 1;
      } else {
        return;
      }
    }
    resultRef.current[index].tabIndex = -1;
    resultRef.current[nextIndex].tabIndex = 0;
    resultRef.current[nextIndex].focus();
  }
  const handleIntersection = (0,external_React_namespaceObject.useCallback)(() => {
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.TRENDING_SEARCH_IMPRESSION,
      data: {
        variant
      }
    }));
  }, [dispatch, variant]);
  const ref = useIntersectionObserver(handleIntersection);
  if (!suggestions?.length) {
    return null;
  } else if (variant === "a" || variant === "c") {
    return /*#__PURE__*/external_React_default().createElement("section", {
      ref: el => {
        ref.current = [el];
      }
      // Variant C matches the design of variant A but should only
      // appear on hover
      ,
      className: `trending-searches-pill-wrapper ${variant === "c" ? "hover-only" : ""}`
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "trending-searches-title-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "trending-searches-icon icon icon-arrow-trending"
    }), /*#__PURE__*/external_React_default().createElement("h2", {
      className: "trending-searches-title",
      "data-l10n-id": "newtab-trending-searches-title"
    }), /*#__PURE__*/external_React_default().createElement("div", {
      className: "close-open-trending-searches"
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      iconsrc: `chrome://global/skin/icons/arrow-${collapsed ? "down" : "up"}.svg`,
      onClick: onArrowClick,
      className: `icon icon-arrowhead-up`,
      type: "icon ghost",
      "data-l10n-id": `newtab-trending-searches-${collapsed ? "show" : "hide"}-trending`
    }))), !collapsed && /*#__PURE__*/external_React_default().createElement("ul", {
      className: "trending-searches-list"
    }, suggestions.map((result, index) => {
      return /*#__PURE__*/external_React_default().createElement("li", {
        key: result.suggestion,
        className: "trending-search-item",
        onKeyDown: e => handleResultKeyDown(e, index)
      }, /*#__PURE__*/external_React_default().createElement(SafeAnchor, {
        url: result.searchUrl,
        onLinkClick: handleLinkOpen,
        title: result.suggestion,
        setRef: item => resultRef.current[index] = item,
        tabIndex: index === 0 ? 0 : -1
      }, result.lowerCaseSuggestion));
    })));
  } else if (variant === "b") {
    return /*#__PURE__*/external_React_default().createElement("div", {
      ref: el => {
        ref.current = [el];
        contextMenuHost.current = el;
      },
      className: "trending-searches-list-view"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "trending-searches-list-view-header"
    }, /*#__PURE__*/external_React_default().createElement("h3", {
      "data-l10n-id": "newtab-trending-searches-title"
    }), /*#__PURE__*/external_React_default().createElement("div", {
      className: "trending-searches-context-menu-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: `trending-searches-context-menu ${showContextMenu ? "context-menu-open" : ""}`
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      type: "icon ghost",
      size: "default",
      "data-l10n-id": "newtab-menu-section-tooltip",
      iconsrc: "chrome://global/skin/icons/more.svg",
      onClick: onContextMenuClick,
      onKeyDown: onContextMenuKeyDown
    }), showContextMenu && /*#__PURE__*/external_React_default().createElement(LinkMenu, {
      onUpdate: onUpdate,
      dispatch: dispatch,
      keyboardAccess: isKeyboardAccess,
      options: TRENDING_SEARCH_CONTEXT_MENU_OPTIONS,
      shouldSendImpressionStats: true,
      site: {
        url: "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/trending-searches-new-tab",
        variant
      }
    })))), /*#__PURE__*/external_React_default().createElement("ul", {
      className: "trending-searches-list-items"
    }, suggestions.slice(0, 6).map((result, index) => {
      return /*#__PURE__*/external_React_default().createElement("li", {
        key: result.suggestion,
        className: `trending-searches-list-item ${refinedCards ? "compact" : ""}`,
        onKeyDown: e => handleResultKeyDown(e, index)
      }, /*#__PURE__*/external_React_default().createElement(SafeAnchor, {
        url: result.searchUrl,
        onLinkClick: handleLinkOpen,
        title: result.suggestion,
        setRef: item => resultRef.current[index] = item,
        tabIndex: index === 0 ? 0 : -1
      }, result.icon ? /*#__PURE__*/external_React_default().createElement("div", {
        className: "trending-icon-wrapper"
      }, /*#__PURE__*/external_React_default().createElement("img", {
        src: result.icon,
        alt: "",
        className: "trending-icon"
      }), /*#__PURE__*/external_React_default().createElement("div", {
        className: "trending-info-wrapper"
      }, result.lowerCaseSuggestion, /*#__PURE__*/external_React_default().createElement("small", null, result.description))) : /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("span", {
        className: "trending-searches-icon icon icon-arrow-trending"
      }), result.lowerCaseSuggestion)));
    })));
  }
}

;// CONCATENATED MODULE: ./content-src/components/Search/Search.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/* globals ContentSearchUIController, ContentSearchHandoffUIController */







class _Search extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onSearchHandoffClick = this.onSearchHandoffClick.bind(this);
    this.onSearchHandoffPaste = this.onSearchHandoffPaste.bind(this);
    this.onSearchHandoffDrop = this.onSearchHandoffDrop.bind(this);
    this.onInputMount = this.onInputMount.bind(this);
    this.onInputMountHandoff = this.onInputMountHandoff.bind(this);
    this.onSearchHandoffButtonMount = this.onSearchHandoffButtonMount.bind(this);
  }
  handleEvent(event) {
    // Also track search events with our own telemetry
    if (event.detail.type === "Search") {
      this.props.dispatch(actionCreators.UserEvent({
        event: "SEARCH"
      }));
    }
  }
  onSearchClick(event) {
    window.gContentSearchController.search(event);
  }
  doSearchHandoff(text) {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.HANDOFF_SEARCH_TO_AWESOMEBAR,
      data: {
        text
      }
    }));
    this.props.dispatch({
      type: actionTypes.FAKE_FOCUS_SEARCH
    });
    this.props.dispatch(actionCreators.UserEvent({
      event: "SEARCH_HANDOFF"
    }));
    if (text) {
      this.props.dispatch({
        type: actionTypes.DISABLE_SEARCH
      });
    }
  }
  onSearchHandoffClick(event) {
    // When search hand-off is enabled, we render a big button that is styled to
    // look like a search textbox. If the button is clicked, we style
    // the button as if it was a focused search box and show a fake cursor but
    // really focus the awesomebar without the focus styles ("hidden focus").
    event.preventDefault();
    this.doSearchHandoff();
  }
  onSearchHandoffPaste(event) {
    event.preventDefault();
    this.doSearchHandoff(event.clipboardData.getData("Text"));
  }
  onSearchHandoffDrop(event) {
    event.preventDefault();
    let text = event.dataTransfer.getData("text");
    if (text) {
      this.doSearchHandoff(text);
    }
  }
  componentDidMount() {
    const caret = this.fakeCaret;
    const {
      caretBlinkCount,
      caretBlinkTime
    } = this.props.Prefs.values;
    if (caret) {
      // If caret blink count isn't defined, use the default infinite behavior for animation
      caret.style.setProperty("--caret-blink-count", caretBlinkCount > -1 ? caretBlinkCount : "infinite");

      // Apply custom blink rate if set, else fallback to default (567ms on/off --> 1134ms total)
      caret.style.setProperty("--caret-blink-time", caretBlinkTime > 0 ? `${caretBlinkTime * 2}ms` : `${1134}ms`);
    }
  }
  componentWillUnmount() {
    delete window.gContentSearchController;
  }
  onInputMount(input) {
    if (input) {
      // The "healthReportKey" and needs to be "newtab" or "abouthome" so that
      // BrowserUsageTelemetry.sys.mjs knows to handle events with this name, and
      // can add the appropriate telemetry probes for search. Without the correct
      // name, certain tests like browser_UsageTelemetry_content.js will fail
      // (See github ticket #2348 for more details)
      const healthReportKey = IS_NEWTAB ? "newtab" : "abouthome";

      // gContentSearchController needs to exist as a global so that tests for
      // the existing about:home can find it; and so it allows these tests to pass.
      // In the future, when activity stream is default about:home, this can be renamed
      window.gContentSearchController = new ContentSearchUIController(input, input.parentNode, healthReportKey);
      addEventListener("ContentSearchClient", this);
    } else {
      window.gContentSearchController = null;
      removeEventListener("ContentSearchClient", this);
    }
  }
  onInputMountHandoff(input) {
    if (input) {
      // The handoff UI controller helps us set the search icon and reacts to
      // changes to default engine to keep everything in sync.
      this._handoffSearchController = new ContentSearchHandoffUIController();
    }
  }
  onSearchHandoffButtonMount(button) {
    // Keep a reference to the button for use during "paste" event handling.
    this._searchHandoffButton = button;
  }

  /*
   * Do not change the ID on the input field, as legacy newtab code
   * specifically looks for the id 'newtab-search-text' on input fields
   * in order to execute searches in various tests
   */
  render() {
    const wrapperClassName = ["search-wrapper", this.props.disable && "search-disabled", this.props.fakeFocus && "fake-focus"].filter(v => v).join(" ");
    const prefs = this.props.Prefs.values;
    const trendingSearchEnabled = prefs["trendingSearch.enabled"] && prefs["system.trendingSearch.enabled"] && prefs["trendingSearch.defaultSearchEngine"]?.toLowerCase() === "google";
    const trendingSearchVariant = this.props.Prefs.values["trendingSearch.variant"];
    return /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement("div", {
      className: wrapperClassName
    }, this.props.showLogo && /*#__PURE__*/external_React_default().createElement(Logo, null), !this.props.handoffEnabled && /*#__PURE__*/external_React_default().createElement("div", {
      className: "search-inner-wrapper no-handoff"
    }, /*#__PURE__*/external_React_default().createElement("input", {
      id: "newtab-search-text",
      "data-l10n-id": "newtab-search-box-input",
      maxLength: "256",
      ref: this.onInputMount,
      type: "search"
    }), /*#__PURE__*/external_React_default().createElement("button", {
      id: "searchSubmit",
      className: "search-button",
      "data-l10n-id": "newtab-search-box-search-button",
      onClick: this.onSearchClick
    }), trendingSearchEnabled && (trendingSearchVariant === "a" || trendingSearchVariant === "c") && /*#__PURE__*/external_React_default().createElement(TrendingSearches, null)), this.props.handoffEnabled && /*#__PURE__*/external_React_default().createElement("div", {
      className: "search-inner-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      className: "search-handoff-button",
      ref: this.onSearchHandoffButtonMount,
      onClick: this.onSearchHandoffClick,
      tabIndex: "-1"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "fake-textbox"
    }), /*#__PURE__*/external_React_default().createElement("input", {
      type: "search",
      className: "fake-editable",
      tabIndex: "-1",
      "aria-hidden": "true",
      onDrop: this.onSearchHandoffDrop,
      onPaste: this.onSearchHandoffPaste,
      ref: this.onInputMountHandoff
    }), /*#__PURE__*/external_React_default().createElement("div", {
      className: "fake-caret",
      ref: el => {
        this.fakeCaret = el;
      }
    })), trendingSearchEnabled && (trendingSearchVariant === "a" || trendingSearchVariant === "c") && /*#__PURE__*/external_React_default().createElement(TrendingSearches, null))));
  }
}
const Search = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  Prefs: state.Prefs
}))(_Search);
;// CONCATENATED MODULE: ./content-src/components/ContextcolAIInterface/ContextcolAIInterface.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


class ContextcolAIInterface extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isExpanded: false,
      isDragging: false,
      files: []
    };
    this.textareaRef = /*#__PURE__*/external_React_default().createRef();
    this.fileInputRef = /*#__PURE__*/external_React_default().createRef();
  }
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.handleSubmit();
    }
  };
  handleSubmit = () => {
    const {
      inputValue,
      files
    } = this.state;
    if (inputValue.trim() || files.length) {
      // Handle AI request submission
      // Log AI request for development
      // console.log("AI Request:", { text: inputValue, files });
      this.props.onAIRequest?.(inputValue, files);
      this.setState({
        inputValue: "",
        files: []
      });
    }
  };
  handleFocus = () => {
    this.setState({
      isExpanded: true
    });
  };
  handleBlur = e => {
    // Only collapse if clicking outside the entire component
    if (!e.currentTarget.contains(e.relatedTarget)) {
      this.setState({
        isExpanded: false
      });
    }
  };
  handleFileUpload = e => {
    const newFiles = Array.from(e.target.files);
    this.setState(prevState => ({
      files: [...prevState.files, ...newFiles]
    }));
  };
  handleRemoveFile = index => {
    this.setState(prevState => ({
      files: prevState.files.filter((_, i) => i !== index)
    }));
  };
  handleDragOver = e => {
    e.preventDefault();
    this.setState({
      isDragging: true
    });
  };
  handleDragLeave = e => {
    e.preventDefault();
    this.setState({
      isDragging: false
    });
  };
  handleDrop = e => {
    e.preventDefault();
    this.setState({
      isDragging: false
    });
    const droppedFiles = Array.from(e.dataTransfer.files);
    this.setState(prevState => ({
      files: [...prevState.files, ...droppedFiles]
    }));
  };
  render() {
    const {
      inputValue,
      isExpanded,
      isDragging,
      files
    } = this.state;
    const {
      wallpapersEnabled
    } = this.props;
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-ai-interface"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-backdrop"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-content-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-logo-section"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "https://contextcol.com/assets/contextcol.png",
      alt: "Contextcol",
      className: "contextcol-logo",
      style: {
        width: "40px",
        height: "40px",
        objectFit: "contain"
      }
    })), /*#__PURE__*/external_React_default().createElement("div", {
      className: `contextcol-cta-container ${isExpanded ? "expanded" : ""} ${isDragging ? "dragging" : ""}`,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onDragOver: this.handleDragOver,
      onDragLeave: this.handleDragLeave,
      onDrop: this.handleDrop
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-cta-backdrop"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-input-section"
    }, /*#__PURE__*/external_React_default().createElement("textarea", {
      ref: this.textareaRef,
      value: inputValue,
      onChange: this.handleInputChange,
      onKeyDown: this.handleKeyDown,
      placeholder: "What you want Contextcol AI agent to do for you on Browser?",
      className: "contextcol-main-input",
      rows: isExpanded ? 4 : 2
    }), Boolean(files.length) && /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-files-display"
    }, files.map((file, index) => /*#__PURE__*/external_React_default().createElement("div", {
      key: index,
      className: "contextcol-file-chip"
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "contextcol-file-icon"
    }, "\uD83D\uDCCE"), /*#__PURE__*/external_React_default().createElement("span", {
      className: "contextcol-file-name"
    }, file.name), /*#__PURE__*/external_React_default().createElement("button", {
      onClick: () => this.handleRemoveFile(index),
      className: "contextcol-file-remove",
      "aria-label": "Remove file"
    }, "\xD7")))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-actions"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-secondary-actions"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      onClick: () => this.fileInputRef.current?.click(),
      className: "contextcol-action-btn contextcol-file-btn",
      title: "Upload files"
    }, /*#__PURE__*/external_React_default().createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
    }))), /*#__PURE__*/external_React_default().createElement("button", {
      className: "contextcol-action-btn contextcol-link-btn",
      title: "Add link"
    }, /*#__PURE__*/external_React_default().createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z"
    }))), /*#__PURE__*/external_React_default().createElement("button", {
      className: "contextcol-action-btn contextcol-voice-btn",
      title: "Voice input"
    }, /*#__PURE__*/external_React_default().createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"
    })))), /*#__PURE__*/external_React_default().createElement("button", {
      onClick: this.handleSubmit,
      className: "contextcol-primary-btn",
      disabled: !inputValue.trim() && !files.length
    }, /*#__PURE__*/external_React_default().createElement("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
    }))))), isDragging && /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-drag-overlay"
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "contextcol-drag-content"
    }, /*#__PURE__*/external_React_default().createElement("svg", {
      width: "48",
      height: "48",
      viewBox: "0 0 24 24",
      fill: "currentColor"
    }, /*#__PURE__*/external_React_default().createElement("path", {
      d: "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
    })), /*#__PURE__*/external_React_default().createElement("p", null, "Drop files here to upload"))))), wallpapersEnabled && this.props.renderWallpaperAttribution?.())), /*#__PURE__*/external_React_default().createElement("input", {
      ref: this.fileInputRef,
      type: "file",
      multiple: true,
      onChange: this.handleFileUpload,
      style: {
        display: "none"
      }
    }));
  }
}
;// CONCATENATED MODULE: ./content-src/components/Weather/LocationSearch.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




function LocationSearch({
  outerClassName
}) {
  // should be the location object from suggestedLocations
  const [selectedLocation, setSelectedLocation] = (0,external_React_namespaceObject.useState)("");
  const suggestedLocations = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Weather.suggestedLocations);
  const locationSearchString = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Weather.locationSearchString);
  const [userInput, setUserInput] = (0,external_React_namespaceObject.useState)(locationSearchString || "");
  const inputRef = (0,external_React_namespaceObject.useRef)(null);
  const dispatch = (0,external_ReactRedux_namespaceObject.useDispatch)();
  (0,external_React_namespaceObject.useEffect)(() => {
    if (selectedLocation) {
      dispatch(actionCreators.AlsoToMain({
        type: actionTypes.WEATHER_LOCATION_DATA_UPDATE,
        data: {
          city: selectedLocation.localized_name,
          adminName: selectedLocation.administrative_area,
          country: selectedLocation.country
        }
      }));
      dispatch(actionCreators.SetPref("weather.query", selectedLocation.key));
      dispatch(actionCreators.BroadcastToContent({
        type: actionTypes.WEATHER_SEARCH_ACTIVE,
        data: false
      }));
    }
  }, [selectedLocation, dispatch]);

  // when component mounts, set focus to input
  (0,external_React_namespaceObject.useEffect)(() => {
    inputRef?.current?.focus();
  }, [inputRef]);
  function handleChange(event) {
    const {
      value
    } = event.target;
    setUserInput(value);
    // if the user input contains less than three characters and suggestedLocations is not an empty array,
    // reset suggestedLocations to [] so there arent incorrect items in the datalist
    if (value.length < 3 && suggestedLocations.length) {
      dispatch(actionCreators.AlsoToMain({
        type: actionTypes.WEATHER_LOCATION_SUGGESTIONS_UPDATE,
        data: []
      }));
    }
    // find match in suggestedLocation array
    const match = suggestedLocations?.find(({
      key
    }) => key === value);
    if (match) {
      setSelectedLocation(match);
      setUserInput(`${match.localized_name}, ${match.administrative_area.localized_name}`);
    } else if (value.length >= 3 && !match) {
      dispatch(actionCreators.AlsoToMain({
        type: actionTypes.WEATHER_LOCATION_SEARCH_UPDATE,
        data: value
      }));
    }
  }
  function handleCloseSearch() {
    dispatch(actionCreators.BroadcastToContent({
      type: actionTypes.WEATHER_SEARCH_ACTIVE,
      data: false
    }));
    setUserInput("");
  }
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      handleCloseSearch();
    }
  }
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: `${outerClassName} location-search`
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "location-input-wrapper"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "search-icon"
  }), /*#__PURE__*/external_React_default().createElement("input", {
    ref: inputRef,
    list: "merino-location-list",
    type: "text",
    "data-l10n-id": "newtab-weather-change-location-search-input-placeholder",
    onChange: handleChange,
    value: userInput,
    onKeyDown: handleKeyDown
  }), /*#__PURE__*/external_React_default().createElement("moz-button", {
    class: "close-icon",
    type: "icon ghost",
    size: "small",
    iconSrc: "chrome://global/skin/icons/close.svg",
    onClick: handleCloseSearch
  }), /*#__PURE__*/external_React_default().createElement("datalist", {
    id: "merino-location-list"
  }, (suggestedLocations || []).map(merinoLcation => /*#__PURE__*/external_React_default().createElement("option", {
    value: merinoLcation.key,
    key: merinoLcation.key
  }, merinoLcation.localized_name, ",", " ", merinoLcation.administrative_area.localized_name)))));
}

;// CONCATENATED MODULE: ./content-src/components/Weather/Weather.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */







const VISIBLE = "visible";
const VISIBILITY_CHANGE_EVENT = "visibilitychange";
function WeatherPlaceholder() {
  const [isSeen, setIsSeen] = (0,external_React_namespaceObject.useState)(false);

  // We are setting up a visibility and intersection event
  // so animations don't happen with headless automation.
  // The animations causes tests to fail beause they never stop,
  // and many tests wait until everything has stopped before passing.
  const ref = useIntersectionObserver(() => setIsSeen(true), 1);
  const isSeenClassName = isSeen ? `placeholder-seen` : ``;
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: `weather weather-placeholder ${isSeenClassName}`,
    ref: el => {
      ref.current = [el];
    }
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "placeholder-image placeholder-fill"
  }), /*#__PURE__*/external_React_default().createElement("div", {
    className: "placeholder-context"
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "placeholder-header placeholder-fill"
  }), /*#__PURE__*/external_React_default().createElement("div", {
    className: "placeholder-description placeholder-fill"
  })));
}
class _Weather extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      contextMenuKeyboard: false,
      showContextMenu: false,
      url: "https://example.com",
      impressionSeen: false,
      errorSeen: false
    };
    this.setImpressionRef = element => {
      this.impressionElement = element;
    };
    this.setErrorRef = element => {
      this.errorElement = element;
    };
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onProviderClick = this.onProviderClick.bind(this);
  }
  componentDidMount() {
    const {
      props
    } = this;
    if (!props.dispatch) {
      return;
    }
    if (props.document.visibilityState === VISIBLE) {
      // Setup the impression observer once the page is visible.
      this.setImpressionObservers();
    } else {
      // We should only ever send the latest impression stats ping, so remove any
      // older listeners.
      if (this._onVisibilityChange) {
        props.document.removeEventListener(VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
      }
      this._onVisibilityChange = () => {
        if (props.document.visibilityState === VISIBLE) {
          // Setup the impression observer once the page is visible.
          this.setImpressionObservers();
          props.document.removeEventListener(VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
        }
      };
      props.document.addEventListener(VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
    }
  }
  componentWillUnmount() {
    // Remove observers on unmount
    if (this.observer && this.impressionElement) {
      this.observer.unobserve(this.impressionElement);
    }
    if (this.observer && this.errorElement) {
      this.observer.unobserve(this.errorElement);
    }
    if (this._onVisibilityChange) {
      this.props.document.removeEventListener(VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
    }
  }
  setImpressionObservers() {
    if (this.impressionElement) {
      this.observer = new IntersectionObserver(this.onImpression.bind(this));
      this.observer.observe(this.impressionElement);
    }
    if (this.errorElement) {
      this.observer = new IntersectionObserver(this.onError.bind(this));
      this.observer.observe(this.errorElement);
    }
  }
  onImpression(entries) {
    if (this.state) {
      const entry = entries.find(e => e.isIntersecting);
      if (entry) {
        if (this.impressionElement) {
          this.observer.unobserve(this.impressionElement);
        }
        this.props.dispatch(actionCreators.OnlyToMain({
          type: actionTypes.WEATHER_IMPRESSION
        }));

        // Stop observing since element has been seen
        this.setState({
          impressionSeen: true
        });
      }
    }
  }
  onError(entries) {
    if (this.state) {
      const entry = entries.find(e => e.isIntersecting);
      if (entry) {
        if (this.errorElement) {
          this.observer.unobserve(this.errorElement);
        }
        this.props.dispatch(actionCreators.OnlyToMain({
          type: actionTypes.WEATHER_LOAD_ERROR
        }));

        // Stop observing since element has been seen
        this.setState({
          errorSeen: true
        });
      }
    }
  }
  openContextMenu(isKeyBoard) {
    if (this.props.onUpdate) {
      this.props.onUpdate(true);
    }
    this.setState({
      showContextMenu: true,
      contextMenuKeyboard: isKeyBoard
    });
  }
  onClick(event) {
    event.preventDefault();
    this.openContextMenu(false, event);
  }
  onKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.openContextMenu(true, event);
    }
  }
  onUpdate(showContextMenu) {
    if (this.props.onUpdate) {
      this.props.onUpdate(showContextMenu);
    }
    this.setState({
      showContextMenu
    });
  }
  onProviderClick() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.WEATHER_OPEN_PROVIDER_URL,
      data: {
        source: "WEATHER"
      }
    }));
  }
  render() {
    // Check if weather should be rendered
    const isWeatherEnabled = this.props.Prefs.values["system.showWeather"];
    if (!isWeatherEnabled) {
      return false;
    }
    if (this.props.App.isForStartupCache.Weather || !this.props.Weather.initialized) {
      return /*#__PURE__*/external_React_default().createElement(WeatherPlaceholder, null);
    }
    const {
      showContextMenu
    } = this.state;
    const {
      props
    } = this;
    const {
      dispatch,
      Prefs,
      Weather
    } = props;
    const WEATHER_SUGGESTION = Weather.suggestions?.[0];
    const outerClassName = ["weather", Weather.searchActive && "search"].filter(v => v).join(" ");
    const showDetailedView = Prefs.values["weather.display"] === "detailed";

    // Note: The temperature units/display options will become secondary menu items
    const WEATHER_SOURCE_CONTEXT_MENU_OPTIONS = [...(Prefs.values["weather.locationSearchEnabled"] ? ["ChangeWeatherLocation"] : []), ...(Prefs.values["weather.temperatureUnits"] === "f" ? ["ChangeTempUnitCelsius"] : ["ChangeTempUnitFahrenheit"]), ...(Prefs.values["weather.display"] === "simple" ? ["ChangeWeatherDisplayDetailed"] : ["ChangeWeatherDisplaySimple"]), "HideWeather", "OpenLearnMoreURL"];
    const WEATHER_SOURCE_ERROR_CONTEXT_MENU_OPTIONS = [...(Prefs.values["weather.locationSearchEnabled"] ? ["ChangeWeatherLocation"] : []), "HideWeather", "OpenLearnMoreURL"];
    const contextMenu = contextOpts => /*#__PURE__*/external_React_default().createElement("div", {
      className: "weatherButtonContextMenuWrapper"
    }, /*#__PURE__*/external_React_default().createElement("button", {
      "aria-haspopup": "true",
      onKeyDown: this.onKeyDown,
      onClick: this.onClick,
      "data-l10n-id": "newtab-menu-section-tooltip",
      className: "weatherButtonContextMenu"
    }, showContextMenu ? /*#__PURE__*/external_React_default().createElement(LinkMenu, {
      dispatch: dispatch,
      index: 0,
      source: "WEATHER",
      onUpdate: this.onUpdate,
      options: contextOpts,
      site: {
        url: "https://support.mozilla.org/kb/customize-items-on-firefox-new-tab-page"
      },
      link: "https://support.mozilla.org/kb/customize-items-on-firefox-new-tab-page",
      shouldSendImpressionStats: false
    }) : null));
    if (Weather.searchActive) {
      return /*#__PURE__*/external_React_default().createElement(LocationSearch, {
        outerClassName: outerClassName
      });
    } else if (WEATHER_SUGGESTION) {
      return /*#__PURE__*/external_React_default().createElement("div", {
        ref: this.setImpressionRef,
        className: outerClassName
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherCard"
      }, /*#__PURE__*/external_React_default().createElement("a", {
        "data-l10n-id": "newtab-weather-see-forecast",
        "data-l10n-args": "{\"provider\": \"AccuWeather\xAE\"}",
        href: WEATHER_SUGGESTION.forecast.url,
        className: "weatherInfoLink",
        onClick: this.onProviderClick
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherIconCol"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: `weatherIcon iconId${WEATHER_SUGGESTION.current_conditions.icon_id}`
      })), /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherText"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherForecastRow"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "weatherTemperature"
      }, WEATHER_SUGGESTION.current_conditions.temperature[Prefs.values["weather.temperatureUnits"]], "\xB0", Prefs.values["weather.temperatureUnits"])), /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherCityRow"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        className: "weatherCity"
      }, Weather.locationData.city)), showDetailedView ? /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherDetailedSummaryRow"
      }, /*#__PURE__*/external_React_default().createElement("div", {
        className: "weatherHighLowTemps"
      }, /*#__PURE__*/external_React_default().createElement("span", null, WEATHER_SUGGESTION.forecast.high[Prefs.values["weather.temperatureUnits"]], "\xB0", Prefs.values["weather.temperatureUnits"]), /*#__PURE__*/external_React_default().createElement("span", null, "\u2022"), /*#__PURE__*/external_React_default().createElement("span", null, WEATHER_SUGGESTION.forecast.low[Prefs.values["weather.temperatureUnits"]], "\xB0", Prefs.values["weather.temperatureUnits"])), /*#__PURE__*/external_React_default().createElement("span", {
        className: "weatherTextSummary"
      }, WEATHER_SUGGESTION.current_conditions.summary)) : null)), contextMenu(WEATHER_SOURCE_CONTEXT_MENU_OPTIONS)), /*#__PURE__*/external_React_default().createElement("span", {
        className: "weatherSponsorText"
      }, /*#__PURE__*/external_React_default().createElement("span", {
        "data-l10n-id": "newtab-weather-sponsored",
        "data-l10n-args": "{\"provider\": \"AccuWeather\xAE\"}"
      })));
    }
    return /*#__PURE__*/external_React_default().createElement("div", {
      ref: this.setErrorRef,
      className: outerClassName
    }, /*#__PURE__*/external_React_default().createElement("div", {
      className: "weatherNotAvailable"
    }, /*#__PURE__*/external_React_default().createElement("span", {
      className: "icon icon-info-warning"
    }), " ", /*#__PURE__*/external_React_default().createElement("p", {
      "data-l10n-id": "newtab-weather-error-not-available"
    }), contextMenu(WEATHER_SOURCE_ERROR_CONTEXT_MENU_OPTIONS)));
  }
}
const Weather = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  App: state.App,
  Weather: state.Weather,
  Prefs: state.Prefs,
  IntersectionObserver: globalThis.IntersectionObserver,
  document: globalThis.document
}))(_Weather);
;// CONCATENATED MODULE: ./content-src/components/DownloadModalToggle/DownloadModalToggle.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


function DownloadModalToggle({
  onClick,
  isActive
}) {
  return /*#__PURE__*/external_React_default().createElement("button", {
    className: `mobile-download-promo ${isActive ? " is-active" : ""}`,
    onClick: onClick
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "icon icon-device-phone"
  }));
}

;// CONCATENATED MODULE: ./content-src/components/Notifications/Toasts/ThumbUpThumbDownToast.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


function ThumbUpThumbDownToast({
  onDismissClick,
  onAnimationEnd
}) {
  const mozMessageBarRef = (0,external_React_namespaceObject.useRef)(null);
  (0,external_React_namespaceObject.useEffect)(() => {
    const {
      current: mozMessageBarElement
    } = mozMessageBarRef;
    mozMessageBarElement.addEventListener("message-bar:user-dismissed", onDismissClick, {
      once: true
    });
    return () => {
      mozMessageBarElement.removeEventListener("message-bar:user-dismissed", onDismissClick);
    };
  }, [onDismissClick]);
  return /*#__PURE__*/external_React_default().createElement("moz-message-bar", {
    type: "success",
    class: "notification-feed-item",
    dismissable: true,
    "data-l10n-id": "newtab-toast-thumbs-up-or-down2",
    ref: mozMessageBarRef,
    onAnimationEnd: onAnimationEnd
  });
}

;// CONCATENATED MODULE: ./content-src/components/Notifications/Toasts/ReportContentToast.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


function ReportContentToast({
  onDismissClick,
  onAnimationEnd
}) {
  const mozMessageBarRef = (0,external_React_namespaceObject.useRef)(null);
  (0,external_React_namespaceObject.useEffect)(() => {
    const {
      current: mozMessageBarElement
    } = mozMessageBarRef;
    mozMessageBarElement.addEventListener("message-bar:user-dismissed", onDismissClick, {
      once: true
    });
    return () => {
      mozMessageBarElement.removeEventListener("message-bar:user-dismissed", onDismissClick);
    };
  }, [onDismissClick]);
  return /*#__PURE__*/external_React_default().createElement("moz-message-bar", {
    type: "success",
    class: "notification-feed-item",
    dismissable: true,
    "data-l10n-id": "newtab-toast-thanks-for-reporting",
    ref: mozMessageBarRef,
    onAnimationEnd: onAnimationEnd
  });
}

;// CONCATENATED MODULE: ./content-src/components/Notifications/Notifications.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */






function Notifications({
  dispatch
}) {
  const toastQueue = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Notifications.toastQueue);
  const toastCounter = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Notifications.toastCounter);

  /**
   * Syncs {@link toastQueue} array so it can be used to
   * remove the toasts wrapper if there are none after a
   * toast is auto-hidden (animated out) via CSS.
   */
  const syncHiddenToastData = (0,external_React_namespaceObject.useCallback)(() => {
    const toastId = toastQueue[toastQueue.length - 1];
    const queuedToasts = [...toastQueue].slice(1);
    dispatch(actionCreators.OnlyToOneContent({
      type: actionTypes.HIDE_TOAST_MESSAGE,
      data: {
        toastQueue: queuedToasts,
        toastCounter: queuedToasts.length,
        toastId,
        showNotifications: false
      }
    }, "ActivityStream:Content"));
  }, [dispatch, toastQueue]);
  const getToast = (0,external_React_namespaceObject.useCallback)(() => {
    // Note: This architecture could expand to support multiple toast notifications at once
    const latestToastItem = toastQueue[toastQueue.length - 1];
    if (!latestToastItem) {
      throw new Error("No toast found");
    }
    switch (latestToastItem) {
      case "reportSuccessToast":
        return /*#__PURE__*/external_React_default().createElement(ReportContentToast, {
          onDismissClick: syncHiddenToastData,
          onAnimationEnd: syncHiddenToastData,
          key: toastCounter
        });
      case "thumbsUpToast":
      case "thumbsDownToast":
        return /*#__PURE__*/external_React_default().createElement(ThumbUpThumbDownToast, {
          onDismissClick: syncHiddenToastData,
          onAnimationEnd: syncHiddenToastData,
          key: toastCounter
        });
      default:
        throw new Error(`Unexpected toast type: ${latestToastItem}`);
    }
  }, [syncHiddenToastData, toastCounter, toastQueue]);
  (0,external_React_namespaceObject.useEffect)(() => {
    getToast();
  }, [toastQueue, getToast]);
  return toastQueue.length ? /*#__PURE__*/external_React_default().createElement("div", {
    className: "notification-wrapper"
  }, getToast()) : "";
}

;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamComponents/FeatureHighlight/FeatureHighlight.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */



function FeatureHighlight({
  message,
  icon,
  toggle,
  arrowPosition = "",
  position = "top-left",
  verticalPosition = "",
  title,
  ariaLabel,
  feature = "FEATURE_HIGHLIGHT_DEFAULT",
  dispatch = () => {},
  windowObj = __webpack_require__.g,
  openedOverride = false,
  showButtonIcon = true,
  dismissCallback = () => {},
  outsideClickCallback = () => {}
}) {
  const [opened, setOpened] = (0,external_React_namespaceObject.useState)(openedOverride);
  const ref = (0,external_React_namespaceObject.useRef)(null);
  (0,external_React_namespaceObject.useEffect)(() => {
    const handleOutsideClick = e => {
      if (!ref?.current?.contains(e.target)) {
        setOpened(false);
        outsideClickCallback();
      }
    };
    const handleKeyDown = e => {
      if (e.key === "Escape") {
        outsideClickCallback();
      }
    };
    windowObj.document.addEventListener("click", handleOutsideClick);
    windowObj.document.addEventListener("keydown", handleKeyDown);
    return () => {
      windowObj.document.removeEventListener("click", handleOutsideClick);
      windowObj.document.removeEventListener("keydown", handleKeyDown);
    };
  }, [windowObj, outsideClickCallback]);
  const onToggleClick = (0,external_React_namespaceObject.useCallback)(() => {
    if (!opened) {
      dispatch(actionCreators.DiscoveryStreamUserEvent({
        event: "CLICK",
        source: "FEATURE_HIGHLIGHT",
        value: {
          feature
        }
      }));
    }
    setOpened(!opened);
  }, [dispatch, feature, opened]);
  const onDismissClick = (0,external_React_namespaceObject.useCallback)(() => {
    setOpened(false);
    dismissCallback();
  }, [dismissCallback]);
  const hideButtonClass = showButtonIcon ? `` : `isHidden`;
  const openedClassname = opened ? `opened` : `closed`;
  return /*#__PURE__*/external_React_default().createElement("div", {
    ref: ref,
    className: `feature-highlight ${verticalPosition}`
  }, /*#__PURE__*/external_React_default().createElement("button", {
    title: title,
    "aria-haspopup": "true",
    "aria-label": ariaLabel,
    className: `toggle-button ${hideButtonClass}`,
    onClick: onToggleClick
  }, toggle), /*#__PURE__*/external_React_default().createElement("div", {
    className: `feature-highlight-modal ${position} ${arrowPosition} ${openedClassname}`
  }, /*#__PURE__*/external_React_default().createElement("div", {
    className: "message-icon"
  }, icon), /*#__PURE__*/external_React_default().createElement("p", {
    className: "content-wrapper"
  }, message), /*#__PURE__*/external_React_default().createElement("moz-button", {
    type: "icon ghost",
    size: "small",
    "data-l10n-id": "feature-highlight-dismiss-button",
    iconsrc: "chrome://global/skin/icons/close.svg",
    onClick: onDismissClick,
    onKeyDown: onDismissClick
  })));
}
;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamComponents/FeatureHighlight/DownloadMobilePromoHighlight.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */





const PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_A = "mobileDownloadModal.variant-a";
const PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_B = "mobileDownloadModal.variant-b";
const PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_C = "mobileDownloadModal.variant-c";
const FEATURE_ID = "FEATURE_DOWNLOAD_MOBILE_PROMO";
function DownloadMobilePromoHighlight({
  position,
  dispatch,
  handleDismiss,
  handleBlock,
  isIntersecting
}) {
  const onDismiss = (0,external_React_namespaceObject.useCallback)(() => {
    // This event is emitted manually because the feature may be triggered outside the OMC flow,
    // and may not be captured by the messaging-system’s automatic reporting.
    dispatch(actionCreators.DiscoveryStreamUserEvent({
      event: "FEATURE_HIGHLIGHT_DISMISS",
      source: "FEATURE_HIGHLIGHT",
      value: {
        feature: FEATURE_ID
      }
    }));
    handleDismiss();
    handleBlock();
  }, [dispatch, handleDismiss, handleBlock]);
  (0,external_React_namespaceObject.useEffect)(() => {
    if (isIntersecting) {
      // This event is emitted manually because the feature may be triggered outside the OMC flow,
      // and may not be captured by the messaging-system’s automatic reporting.
      dispatch(actionCreators.DiscoveryStreamUserEvent({
        event: "FEATURE_HIGHLIGHT_IMPRESSION",
        source: "FEATURE_HIGHLIGHT",
        value: {
          feature: FEATURE_ID
        }
      }));
    }
  }, [dispatch, isIntersecting]);
  const prefs = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Prefs.values);
  const mobileDownloadPromoVarA = prefs[PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_A];
  const mobileDownloadPromoVarB = prefs[PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_B];
  const mobileDownloadPromoVarC = prefs[PREF_MOBILE_DOWNLOAD_HIGHLIGHT_VARIANT_C];
  function getActiveVariant() {
    if (mobileDownloadPromoVarA) {
      return "A";
    }
    if (mobileDownloadPromoVarB) {
      return "B";
    }
    if (mobileDownloadPromoVarC) {
      return "C";
    }
    return null;
  }
  function getVariantQRCodeImg() {
    const variant = getActiveVariant();
    switch (variant) {
      case "A":
        return "chrome://newtab/content/data/content/assets/download-qr-code-var-a.png";
      case "B":
        return "chrome://newtab/content/data/content/assets/download-qr-code-var-b.png";
      case "C":
        return "chrome://newtab/content/data/content/assets/download-qr-code-var-c.png";
      default:
        return null;
    }
  }
  function getVariantCopy() {
    const variant = getActiveVariant();
    switch (variant) {
      case "A":
        return "newtab-download-mobile-highlight-body-variant-a";
      case "B":
        return "newtab-download-mobile-highlight-body-variant-b";
      case "C":
        return "newtab-download-mobile-highlight-body-variant-c";
      default:
        return null;
    }
  }
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: "download-firefox-feature-highlight"
  }, /*#__PURE__*/external_React_default().createElement(FeatureHighlight, {
    position: position,
    feature: FEATURE_ID,
    dispatch: dispatch,
    message: /*#__PURE__*/external_React_default().createElement("div", {
      className: "download-firefox-feature-highlight-content"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: getVariantQRCodeImg(),
      "data-l10n-id": "newtab-download-mobile-highlight-image",
      width: "120",
      height: "191",
      alt: ""
    }), /*#__PURE__*/external_React_default().createElement("p", {
      className: "title",
      "data-l10n-id": "newtab-download-mobile-highlight-title"
    }), /*#__PURE__*/external_React_default().createElement("p", {
      className: "subtitle",
      "data-l10n-id": getVariantCopy()
    })),
    openedOverride: true,
    showButtonIcon: false,
    dismissCallback: onDismiss,
    outsideClickCallback: handleDismiss
  }));
}
;// CONCATENATED MODULE: ./content-src/components/DiscoveryStreamComponents/FeatureHighlight/WallpaperFeatureHighlight.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */





function WallpaperFeatureHighlight({
  position,
  dispatch,
  handleDismiss,
  handleClick,
  handleBlock
}) {
  const onDismiss = (0,external_React_namespaceObject.useCallback)(() => {
    handleDismiss();
    handleBlock();
  }, [handleDismiss, handleBlock]);
  const onToggleClick = (0,external_React_namespaceObject.useCallback)(elementId => {
    dispatch({
      type: actionTypes.SHOW_PERSONALIZE
    });
    dispatch(actionCreators.UserEvent({
      event: "SHOW_PERSONALIZE"
    }));
    handleClick(elementId);
    onDismiss();
  }, [dispatch, onDismiss, handleClick]);

  // Extract the strings and feature ID from OMC
  const {
    messageData
  } = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Messages);
  return /*#__PURE__*/external_React_default().createElement("div", {
    className: "wallpaper-feature-highlight"
  }, /*#__PURE__*/external_React_default().createElement(FeatureHighlight, {
    position: position,
    "data-l10n-id": "feature-highlight-wallpaper",
    feature: messageData.content.feature,
    dispatch: dispatch,
    message: /*#__PURE__*/external_React_default().createElement("div", {
      className: "wallpaper-feature-highlight-content"
    }, /*#__PURE__*/external_React_default().createElement("img", {
      src: "chrome://newtab/content/data/content/assets/custom-wp-highlight.png",
      alt: "",
      width: "320",
      height: "195"
    }), /*#__PURE__*/external_React_default().createElement("p", {
      className: "title",
      "data-l10n-id": messageData.content.title
    }), /*#__PURE__*/external_React_default().createElement("p", {
      className: "subtitle",
      "data-l10n-id": messageData.content.subtitle
    }), /*#__PURE__*/external_React_default().createElement("span", {
      className: "button-wrapper"
    }, /*#__PURE__*/external_React_default().createElement("moz-button", {
      type: "default",
      onClick: () => onToggleClick("open-customize-menu"),
      "data-l10n-id": messageData.content.cta
    }))),
    toggle: /*#__PURE__*/external_React_default().createElement("div", {
      className: "icon icon-help"
    }),
    openedOverride: true,
    showButtonIcon: false,
    dismissCallback: onDismiss,
    outsideClickCallback: handleDismiss
  }));
}
;// CONCATENATED MODULE: ./content-src/components/MessageWrapper/MessageWrapper.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */






// Note: MessageWrapper emits events via submitGleanPingForPing() in the OMC messaging-system.
// If a feature is triggered outside of this flow (e.g., the Mobile Download QR Promo),
// it should emit New Tab-specific Glean events independently.

function MessageWrapper({
  children,
  dispatch,
  hiddenOverride,
  onDismiss
}) {
  const message = (0,external_ReactRedux_namespaceObject.useSelector)(state => state.Messages);
  const [isIntersecting, setIsIntersecting] = (0,external_React_namespaceObject.useState)(false);
  const [tabIsVisible, setTabIsVisible] = (0,external_React_namespaceObject.useState)(() => typeof document !== "undefined" && document.visibilityState === "visible");
  const [hasRun, setHasRun] = (0,external_React_namespaceObject.useState)();
  const handleIntersection = (0,external_React_namespaceObject.useCallback)(() => {
    setIsIntersecting(true);
    // only send impression if messageId is defined and tab is visible
    if (tabIsVisible && message.messageData.id && !hasRun) {
      setHasRun(true);
      dispatch(actionCreators.AlsoToMain({
        type: actionTypes.MESSAGE_IMPRESSION,
        data: message.messageData
      }));
    }
  }, [dispatch, message, tabIsVisible, hasRun]);
  (0,external_React_namespaceObject.useEffect)(() => {
    // we dont want to dispatch this action unless the current tab is open and visible
    if (message.isVisible && tabIsVisible) {
      dispatch(actionCreators.AlsoToMain({
        type: actionTypes.MESSAGE_NOTIFY_VISIBILITY,
        data: true
      }));
    }
  }, [message, dispatch, tabIsVisible]);
  (0,external_React_namespaceObject.useEffect)(() => {
    const handleVisibilityChange = () => {
      setTabIsVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
  const ref = useIntersectionObserver(handleIntersection);
  const handleClose = (0,external_React_namespaceObject.useCallback)(() => {
    const action = {
      type: actionTypes.MESSAGE_TOGGLE_VISIBILITY,
      data: false //isVisible
    };
    if (message.portID) {
      dispatch(actionCreators.OnlyToOneContent(action, message.portID));
    } else {
      dispatch(actionCreators.AlsoToMain(action));
    }
    dispatch(actionCreators.AlsoToMain({
      type: actionTypes.MESSAGE_NOTIFY_VISIBILITY,
      data: false
    }));
    onDismiss?.();
  }, [dispatch, message, onDismiss]);
  function handleDismiss() {
    const {
      id
    } = message.messageData;
    if (id) {
      dispatch(actionCreators.OnlyToMain({
        type: actionTypes.MESSAGE_DISMISS,
        data: {
          message: message.messageData
        }
      }));
    }
    handleClose();
  }
  function handleBlock() {
    const {
      id
    } = message.messageData;
    if (id) {
      dispatch(actionCreators.OnlyToMain({
        type: actionTypes.MESSAGE_BLOCK,
        data: id
      }));
    }
  }
  function handleClick(elementId) {
    const {
      id
    } = message.messageData;
    if (id) {
      dispatch(actionCreators.OnlyToMain({
        type: actionTypes.MESSAGE_CLICK,
        data: {
          message: message.messageData,
          source: elementId || ""
        }
      }));
    }
  }
  if (!message || !hiddenOverride && !message.isVisible) {
    return null;
  }

  // only display the message if `isVisible` is true
  return /*#__PURE__*/external_React_default().createElement("div", {
    ref: el => {
      ref.current = [el];
    },
    className: "message-wrapper"
  }, /*#__PURE__*/external_React_default().cloneElement(children, {
    isIntersecting,
    handleDismiss,
    handleClick,
    handleBlock,
    handleClose
  }));
}

;// CONCATENATED MODULE: ./content-src/components/Base/Base.jsx
function Base_extends() { return Base_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, Base_extends.apply(null, arguments); }
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

















const Base_VISIBLE = "visible";
const Base_VISIBILITY_CHANGE_EVENT = "visibilitychange";
const PREF_INFERRED_PERSONALIZATION_SYSTEM = "discoverystream.sections.personalization.inferred.enabled";
const PREF_INFERRED_PERSONALIZATION_USER = "discoverystream.sections.personalization.inferred.user.enabled";

// Returns a function will not be continuously triggered when called. The
// function will be triggered if called again after `wait` milliseconds.
function Base_debounce(func, wait) {
  let timer;
  return (...args) => {
    if (timer) {
      return;
    }
    let wakeUp = () => {
      timer = null;
    };
    timer = setTimeout(wakeUp, wait);
    func.apply(this, args);
  };
}
class _Base extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: {}
    };
    this.notifyContent = this.notifyContent.bind(this);
  }
  notifyContent(state) {
    this.setState(state);
  }
  componentWillUnmount() {
    this.updateTheme();
  }
  componentWillUpdate() {
    this.updateTheme();
  }
  updateTheme() {
    const bodyClassName = ["activity-stream",
    // If we skipped the about:welcome overlay and removed the CSS classes
    // we don't want to add them back to the Activity Stream view
    document.body.classList.contains("inline-onboarding") ? "inline-onboarding" : ""].filter(v => v).join(" ");
    globalThis.document.body.className = bodyClassName;
  }
  render() {
    const {
      props
    } = this;
    const {
      App
    } = props;
    const isDevtoolsEnabled = props.Prefs.values["asrouter.devtoolsEnabled"];
    if (!App.initialized) {
      return null;
    }
    return /*#__PURE__*/external_React_default().createElement(ErrorBoundary, {
      className: "base-content-fallback"
    }, /*#__PURE__*/external_React_default().createElement((external_React_default()).Fragment, null, /*#__PURE__*/external_React_default().createElement(BaseContent, Base_extends({}, this.props, {
      adminContent: this.state
    })), isDevtoolsEnabled ? /*#__PURE__*/external_React_default().createElement(DiscoveryStreamAdmin, {
      notifyContent: this.notifyContent
    }) : null));
  }
}
class BaseContent extends (external_React_default()).PureComponent {
  constructor(props) {
    super(props);
    this.openPreferences = this.openPreferences.bind(this);
    this.openCustomizationMenu = this.openCustomizationMenu.bind(this);
    this.closeCustomizationMenu = this.closeCustomizationMenu.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.onWindowScroll = Base_debounce(this.onWindowScroll.bind(this), 5);
    this.setPref = this.setPref.bind(this);
    this.shouldShowOMCHighlight = this.shouldShowOMCHighlight.bind(this);
    this.updateWallpaper = this.updateWallpaper.bind(this);
    this.prefersDarkQuery = null;
    this.handleColorModeChange = this.handleColorModeChange.bind(this);
    this.shouldDisplayTopicSelectionModal = this.shouldDisplayTopicSelectionModal.bind(this);
    this.toggleDownloadHighlight = this.toggleDownloadHighlight.bind(this);
    this.handleDismissDownloadHighlight = this.handleDismissDownloadHighlight.bind(this);
    this.renderWallpaperAttribution = this.renderWallpaperAttribution.bind(this);
    this.handleAIRequest = this.handleAIRequest.bind(this);
    this.state = {
      fixedSearch: false,
      firstVisibleTimestamp: null,
      colorMode: "",
      fixedNavStyle: {},
      wallpaperTheme: "",
      showDownloadHighlightOverride: null
    };
  }
  setFirstVisibleTimestamp() {
    if (!this.state.firstVisibleTimestamp) {
      this.setState({
        firstVisibleTimestamp: Date.now()
      });
    }
  }
  componentDidMount() {
    __webpack_require__.g.addEventListener("scroll", this.onWindowScroll);
    __webpack_require__.g.addEventListener("keydown", this.handleOnKeyDown);
    const prefs = this.props.Prefs.values;
    const wallpapersEnabled = prefs["newtabWallpapers.enabled"];
    if (this.props.document.visibilityState === Base_VISIBLE) {
      this.setFirstVisibleTimestamp();
      this.shouldDisplayTopicSelectionModal();
    } else {
      this._onVisibilityChange = () => {
        if (this.props.document.visibilityState === Base_VISIBLE) {
          this.setFirstVisibleTimestamp();
          this.shouldDisplayTopicSelectionModal();
          this.props.document.removeEventListener(Base_VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
          this._onVisibilityChange = null;
        }
      };
      this.props.document.addEventListener(Base_VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
    }
    // track change event to dark/light mode
    this.prefersDarkQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
    this.prefersDarkQuery.addEventListener("change", this.handleColorModeChange);
    this.handleColorModeChange();
    if (wallpapersEnabled) {
      this.updateWallpaper();
    }
  }
  componentDidUpdate(prevProps) {
    const prefs = this.props.Prefs.values;
    const wallpapersEnabled = prefs["newtabWallpapers.enabled"];
    if (wallpapersEnabled) {
      // destructure current and previous props with fallbacks
      // (preventing undefined errors)
      const {
        Wallpapers: {
          uploadedWallpaper = null,
          wallpaperList = null
        } = {}
      } = this.props;
      const {
        Wallpapers: {
          uploadedWallpaper: prevUploadedWallpaper = null,
          wallpaperList: prevWallpaperList = null
        } = {},
        Prefs: {
          values: prevPrefs = {}
        } = {}
      } = prevProps;
      const selectedWallpaper = prefs["newtabWallpapers.wallpaper"];
      const prevSelectedWallpaper = prevPrefs["newtabWallpapers.wallpaper"];

      // don't update wallpaper unless the wallpaper is being changed.
      if (selectedWallpaper !== prevSelectedWallpaper ||
      // selecting a new wallpaper
      uploadedWallpaper !== prevUploadedWallpaper ||
      // uploading a new wallpaper
      wallpaperList !== prevWallpaperList ||
      // remote settings wallpaper list updates
      this.props.App.isForStartupCache.Wallpaper !== prevProps.App.isForStartupCache.Wallpaper // Startup cached page wallpaper is updating
      ) {
        this.updateWallpaper();
      }
    }
  }
  handleColorModeChange() {
    const colorMode = this.prefersDarkQuery?.matches ? "dark" : "light";
    this.setState({
      colorMode
    });
  }
  componentWillUnmount() {
    this.prefersDarkQuery?.removeEventListener("change", this.handleColorModeChange);
    __webpack_require__.g.removeEventListener("scroll", this.onWindowScroll);
    __webpack_require__.g.removeEventListener("keydown", this.handleOnKeyDown);
    if (this._onVisibilityChange) {
      this.props.document.removeEventListener(Base_VISIBILITY_CHANGE_EVENT, this._onVisibilityChange);
    }
  }
  onWindowScroll() {
    if (window.innerHeight <= 700) {
      // Bug 1937296: Only apply fixed-search logic
      // if the page is tall enough to support it.
      return;
    }
    const prefs = this.props.Prefs.values;
    const {
      showSearch
    } = prefs;
    if (!showSearch) {
      // Bug 1944718: Only apply fixed-search logic
      // if search is visible.
      return;
    }
    const logoAlwaysVisible = prefs["logowordmark.alwaysVisible"];

    /* Bug 1917937: The logic presented below is fragile but accurate to the pixel. As new tab experiments with layouts, we have a tech debt of competing styles and classes the slightly modify where the search bar sits on the page. The larger solution for this is to replace everything with an intersection observer, but would require a larger refactor of this file. In the interim, we can programmatically calculate when to fire the fixed-scroll event and account for the moved elements so that topsites/etc stays in the same place. The CSS this references has been flagged to reference this logic so (hopefully) keep them in sync. */

    let SCROLL_THRESHOLD = 0; // When the fixed-scroll event fires
    let MAIN_OFFSET_PADDING = 0; // The padding to compensate for the moved elements

    const CSS_VAR_SPACE_XXLARGE = 32.04; // Custom Acorn themed variable (8 * 0.267rem);

    let layout = {
      outerWrapperPaddingTop: 24,
      searchWrapperPaddingTop: 16,
      searchWrapperPaddingBottom: CSS_VAR_SPACE_XXLARGE,
      searchWrapperFixedScrollPaddingTop: 27,
      searchWrapperFixedScrollPaddingBottom: 27,
      searchInnerWrapperMinHeight: 52,
      logoAndWordmarkWrapperHeight: 0,
      logoAndWordmarkWrapperMarginBottom: 0
    };

    // Logo visibility applies to all layouts
    if (!logoAlwaysVisible) {
      layout.logoAndWordmarkWrapperHeight = 0;
      layout.logoAndWordmarkWrapperMarginBottom = 0;
    }
    SCROLL_THRESHOLD = layout.outerWrapperPaddingTop + layout.searchWrapperPaddingTop + layout.logoAndWordmarkWrapperHeight + layout.logoAndWordmarkWrapperMarginBottom - layout.searchWrapperFixedScrollPaddingTop;
    MAIN_OFFSET_PADDING = layout.searchWrapperPaddingTop + layout.searchWrapperPaddingBottom + layout.searchInnerWrapperMinHeight + layout.logoAndWordmarkWrapperHeight + layout.logoAndWordmarkWrapperMarginBottom;

    // Edge case if logo and thums are turned off, but Var A is enabled
    if (SCROLL_THRESHOLD < 1) {
      SCROLL_THRESHOLD = 1;
    }
    if (__webpack_require__.g.scrollY > SCROLL_THRESHOLD && !this.state.fixedSearch) {
      this.setState({
        fixedSearch: true,
        fixedNavStyle: {
          paddingBlockStart: `${MAIN_OFFSET_PADDING}px`
        }
      });
    } else if (__webpack_require__.g.scrollY <= SCROLL_THRESHOLD && this.state.fixedSearch) {
      this.setState({
        fixedSearch: false,
        fixedNavStyle: {}
      });
    }
  }
  openPreferences() {
    this.props.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.SETTINGS_OPEN
    }));
    this.props.dispatch(actionCreators.UserEvent({
      event: "OPEN_NEWTAB_PREFS"
    }));
  }
  openCustomizationMenu() {
    this.props.dispatch({
      type: actionTypes.SHOW_PERSONALIZE
    });
    this.props.dispatch(actionCreators.UserEvent({
      event: "SHOW_PERSONALIZE"
    }));
  }
  closeCustomizationMenu() {
    if (this.props.App.customizeMenuVisible) {
      this.props.dispatch({
        type: actionTypes.HIDE_PERSONALIZE
      });
      this.props.dispatch(actionCreators.UserEvent({
        event: "HIDE_PERSONALIZE"
      }));
    }
  }
  handleOnKeyDown(e) {
    if (e.key === "Escape") {
      this.closeCustomizationMenu();
    }
  }
  setPref(pref, value) {
    this.props.dispatch(actionCreators.SetPref(pref, value));
  }
  renderWallpaperAttribution() {
    const {
      wallpaperList
    } = this.props.Wallpapers;
    const activeWallpaper = this.props.Prefs.values[`newtabWallpapers.wallpaper`];
    const selected = wallpaperList.find(wp => wp.title === activeWallpaper);
    // make sure a wallpaper is selected and that the attribution also exists
    if (!selected?.attribution) {
      return null;
    }
    const {
      name: authorDetails,
      webpage
    } = selected.attribution;
    if (activeWallpaper && wallpaperList && authorDetails.url) {
      return /*#__PURE__*/external_React_default().createElement("p", {
        className: `wallpaper-attribution`,
        key: authorDetails.string,
        "data-l10n-id": "newtab-wallpaper-attribution",
        "data-l10n-args": JSON.stringify({
          author_string: authorDetails.string,
          author_url: authorDetails.url,
          webpage_string: webpage.string,
          webpage_url: webpage.url
        })
      }, /*#__PURE__*/external_React_default().createElement("a", {
        "data-l10n-name": "name-link",
        href: authorDetails.url
      }, authorDetails.string), /*#__PURE__*/external_React_default().createElement("a", {
        "data-l10n-name": "webpage-link",
        href: webpage.url
      }, webpage.string));
    }
    return null;
  }
  async updateWallpaper() {
    const prefs = this.props.Prefs.values;
    const selectedWallpaper = prefs["newtabWallpapers.wallpaper"];
    const {
      wallpaperList,
      uploadedWallpaper: uploadedWallpaperUrl
    } = this.props.Wallpapers;
    let lightWallpaper = {};
    let darkWallpaper = {};
    if (selectedWallpaper === "custom" && uploadedWallpaperUrl) {
      try {
        __webpack_require__.g.document?.body.style.setProperty("--newtab-wallpaper", `url(${uploadedWallpaperUrl})`);
        __webpack_require__.g.document?.body.style.setProperty("--newtab-wallpaper-color", "transparent");

        // Based on the current colorMode, add the corresponding dark/light CSS classes
        if (this.state.colorMode) {
          this.setState(prevState => ({
            wallpaperTheme: prevState.colorMode
          }));
        }
      } catch (e) {}
      return;
    }
    if (wallpaperList) {
      let wallpaper = wallpaperList.find(wp => wp.title === selectedWallpaper);
      if (selectedWallpaper && wallpaper) {
        // if selectedWallpaper exists - we override what light and dark prefs are to match that
        lightWallpaper = wallpaper;
        darkWallpaper = wallpaper;
      }

      // solid-color-picker-#00d100
      const regexRGB = /#([a-fA-F0-9]{6})/;

      // Override Remote Settings to set custom HEX bg color
      if (selectedWallpaper.includes("solid-color-picker")) {
        wallpaper = {
          theme: wallpaper?.theme || "light",
          title: "solid-color-picker",
          category: "solid-colors",
          solid_color: selectedWallpaper.match(regexRGB)?.[0]
        };
      }
      const wallpaperColor = wallpaper?.solid_color || "";
      __webpack_require__.g.document?.body.style.setProperty("--newtab-wallpaper", `url(${wallpaper?.wallpaperUrl || ""})`);
      __webpack_require__.g.document?.body.style.setProperty("--newtab-wallpaper-color", wallpaperColor || "transparent");
      let wallpaperTheme = "";

      // If we have a solid colour set, let's see how dark it is.
      if (wallpaperColor) {
        const rgbColors = this.getRGBColors(wallpaperColor);
        const isColorDark = this.isWallpaperColorDark(rgbColors);
        wallpaperTheme = isColorDark ? "dark" : "light";
      } else {
        // Grab the contrast of the currently displayed wallpaper.
        const {
          theme
        } = this.state.colorMode === "light" ? lightWallpaper : darkWallpaper;
        if (theme) {
          wallpaperTheme = theme;
        }
      }
      this.setState({
        wallpaperTheme
      });
    }
  }
  shouldShowOMCHighlight(componentId) {
    const messageData = this.props.Messages?.messageData;
    if (!messageData || Object.keys(messageData).length === 0) {
      return false;
    }
    return messageData?.content?.messageType === componentId;
  }
  toggleDownloadHighlight() {
    this.setState(prevState => {
      const override = !(prevState.showDownloadHighlightOverride ?? this.shouldShowOMCHighlight("DownloadMobilePromoHighlight"));
      if (override) {
        // Emit an open event manually since OMC isn't handling it
        this.props.dispatch(actionCreators.DiscoveryStreamUserEvent({
          event: "FEATURE_HIGHLIGHT_OPEN",
          source: "FEATURE_HIGHLIGHT",
          value: {
            feature: "FEATURE_DOWNLOAD_MOBILE_PROMO"
          }
        }));
      }
      return {
        showDownloadHighlightOverride: override
      };
    });
  }
  handleDismissDownloadHighlight() {
    this.setState({
      showDownloadHighlightOverride: false
    });
  }
  handleAIRequest(request) {
    if (!request || !request.trim()) {
      return;
    }

    // You could dispatch an action to handle the AI request
    // this.props.dispatch(ac.OnlyToMain({
    //   type: at.AI_AGENT_REQUEST,
    //   data: { request: request.trim() }
    // }));

    // Clear the textarea
    const textarea = document.querySelector(".contextcol-ai-textarea");
    if (textarea) {
      textarea.value = "";
    }
  }
  getRGBColors(input) {
    if (input.length !== 7) {
      return [];
    }
    const r = parseInt(input.substr(1, 2), 16);
    const g = parseInt(input.substr(3, 2), 16);
    const b = parseInt(input.substr(5, 2), 16);
    return [r, g, b];
  }
  isWallpaperColorDark([r, g, b]) {
    return 0.2125 * r + 0.7154 * g + 0.0721 * b <= 110;
  }
  shouldDisplayTopicSelectionModal() {
    const prefs = this.props.Prefs.values;
    const pocketEnabled = prefs["feeds.section.topstories"] && prefs["feeds.system.topstories"];
    const topicSelectionOnboardingEnabled = prefs["discoverystream.topicSelection.onboarding.enabled"] && pocketEnabled;
    const maybeShowModal = prefs["discoverystream.topicSelection.onboarding.maybeDisplay"];
    const displayTimeout = prefs["discoverystream.topicSelection.onboarding.displayTimeout"];
    const lastDisplayed = prefs["discoverystream.topicSelection.onboarding.lastDisplayed"];
    const displayCount = prefs["discoverystream.topicSelection.onboarding.displayCount"];
    if (!maybeShowModal || !prefs["discoverystream.topicSelection.enabled"] || !topicSelectionOnboardingEnabled) {
      return;
    }
    const day = 24 * 60 * 60 * 1000;
    const now = new Date().getTime();
    const timeoutOccured = now - parseFloat(lastDisplayed) > displayTimeout;
    if (displayCount < 3) {
      if (displayCount === 0 || timeoutOccured) {
        this.props.dispatch(actionCreators.BroadcastToContent({
          type: actionTypes.TOPIC_SELECTION_SPOTLIGHT_OPEN
        }));
        this.setPref("discoverystream.topicSelection.onboarding.displayTimeout", day);
      }
    }
  }

  // eslint-disable-next-line max-statements, complexity
  render() {
    const {
      props
    } = this;
    const {
      App,
      DiscoveryStream
    } = props;
    const {
      initialized,
      customizeMenuVisible
    } = App;
    const prefs = props.Prefs.values;
    const activeWallpaper = prefs[`newtabWallpapers.wallpaper`];
    const wallpapersEnabled = prefs["newtabWallpapers.enabled"];
    const weatherEnabled = prefs.showWeather;
    const {
      pocketConfig
    } = prefs;
    const isDiscoveryStream = props.DiscoveryStream.config && props.DiscoveryStream.config.enabled;
    let filteredSections = props.Sections.filter(section => section.id !== "topstories");
    let spocMessageVariant = "";
    if (props.App.locale?.startsWith("en-") && pocketConfig?.spocMessageVariant === "variant-c") {
      spocMessageVariant = pocketConfig.spocMessageVariant;
    }
    const pocketEnabled = prefs["feeds.section.topstories"] && prefs["feeds.system.topstories"];
    const noSectionsEnabled = !prefs["feeds.topsites"] && !pocketEnabled && filteredSections.filter(section => section.enabled).length === 0;
    const searchHandoffEnabled = prefs["improvesearch.handoffToAwesomebar"];
    const enabledSections = {
      topSitesEnabled: prefs["feeds.topsites"],
      pocketEnabled: prefs["feeds.section.topstories"],
      showInferredPersonalizationEnabled: prefs[PREF_INFERRED_PERSONALIZATION_USER],
      topSitesRowsCount: prefs.topSitesRows,
      weatherEnabled: prefs.showWeather,
      trendingSearchEnabled: prefs["trendingSearch.enabled"]
    };
    const pocketRegion = prefs["feeds.system.topstories"];
    const mayHaveSponsoredStories = prefs["system.showSponsored"];
    const mayHaveInferredPersonalization = prefs[PREF_INFERRED_PERSONALIZATION_SYSTEM];
    const mayHaveWeather = prefs["system.showWeather"];
    const {
      mayHaveSponsoredTopSites
    } = prefs;

    // Widgets experiment pref check
    const mayHaveWidgets = prefs["widgets.system.enabled"];
    const mayHaveListsWidget = prefs["widgets.system.lists.enabled"];
    const mayHaveTimerWidget = prefs["widgets.system.focusTimer.enabled"];
    const enabledWidgets = {
      listsEnabled: prefs["widgets.lists.enabled"],
      timerEnabled: prefs["widgets.focusTimer.enabled"],
      trendingSearchEnabled: prefs["trendingSearch.enabled"],
      weatherEnabled: prefs.showWeather
    };

    // Trending Searches experiment pref check
    const mayHaveTrendingSearch = prefs["system.trendingSearch.enabled"] && prefs["trendingSearch.defaultSearchEngine"].toLowerCase() === "google";

    // Mobile Download Promo Pref Checks
    const mobileDownloadPromoEnabled = prefs["mobileDownloadModal.enabled"];
    const mobileDownloadPromoVariantAEnabled = prefs["mobileDownloadModal.variant-a"];
    const mobileDownloadPromoVariantBEnabled = prefs["mobileDownloadModal.variant-b"];
    const mobileDownloadPromoVariantCEnabled = prefs["mobileDownloadModal.variant-c"];
    const mobileDownloadPromoVariantABorC = mobileDownloadPromoVariantAEnabled || mobileDownloadPromoVariantBEnabled || mobileDownloadPromoVariantCEnabled;
    const mobileDownloadPromoWrapperHeightModifier = prefs["weather.display"] === "detailed" && weatherEnabled && mayHaveWeather ? "is-tall" : "";
    const hasThumbsUpDownLayout = prefs["discoverystream.thumbsUpDown.searchTopsitesCompact"];
    const hasThumbsUpDown = prefs["discoverystream.thumbsUpDown.enabled"];
    const sectionsEnabled = prefs["discoverystream.sections.enabled"];
    const topicLabelsEnabled = prefs["discoverystream.topicLabels.enabled"];
    const sectionsCustomizeMenuPanelEnabled = prefs["discoverystream.sections.customizeMenuPanel.enabled"];
    const sectionsPersonalizationEnabled = prefs["discoverystream.sections.personalization.enabled"];

    // Logic to show follow/block topic mgmt panel in Customize panel
    const mayHavePersonalizedTopicSections = sectionsPersonalizationEnabled && topicLabelsEnabled && sectionsEnabled && sectionsCustomizeMenuPanelEnabled && DiscoveryStream.feeds.loaded;
    const featureClassName = [mobileDownloadPromoEnabled && mobileDownloadPromoVariantABorC && "has-mobile-download-promo",
    // Mobile download promo modal is enabled/visible
    weatherEnabled && mayHaveWeather && "has-weather",
    // Weather widget is enabled/visible
    prefs.showSearch ? "has-search" : "no-search",
    // layoutsVariantAEnabled ? "layout-variant-a" : "", // Layout experiment variant A
    // layoutsVariantBEnabled ? "layout-variant-b" : "", // Layout experiment variant B
    pocketEnabled ? "has-recommended-stories" : "no-recommended-stories", sectionsEnabled ? "has-sections-grid" : ""].filter(v => v).join(" ");
    const outerClassName = ["outer-wrapper", isDiscoveryStream && pocketEnabled && "ds-outer-wrapper-search-alignment", isDiscoveryStream && "ds-outer-wrapper-breakpoint-override", prefs.showSearch && this.state.fixedSearch && !noSectionsEnabled && "fixed-search", prefs.showSearch && noSectionsEnabled && "only-search", prefs["feeds.topsites"] && !pocketEnabled && !prefs.showSearch && "only-topsites", noSectionsEnabled && "no-sections", prefs["logowordmark.alwaysVisible"] && "visible-logo", hasThumbsUpDownLayout && hasThumbsUpDown && "thumbs-ui-compact"].filter(v => v).join(" ");
    if (wallpapersEnabled) {
      // Add helper class to body if user has a wallpaper selected
      if (this.state.wallpaperTheme === "light") {
        __webpack_require__.g.document?.body.classList.add("lightWallpaper");
        __webpack_require__.g.document?.body.classList.remove("darkWallpaper");
      }
      if (this.state.wallpaperTheme === "dark") {
        __webpack_require__.g.document?.body.classList.add("darkWallpaper");
        __webpack_require__.g.document?.body.classList.remove("lightWallpaper");
      }
    }

    // If state.showDownloadHighlightOverride has value, let it override the logic
    // Otherwise, defer to OMC message display logic
    const shouldShowDownloadHighlight = this.state.showDownloadHighlightOverride ?? this.shouldShowOMCHighlight("DownloadMobilePromoHighlight");

    // Check if we should show the simplified AI Agent interface
    const showSimplifiedInterface = true; // Always show simplified interface for Contextcol

    if (showSimplifiedInterface) {
      return /*#__PURE__*/external_React_default().createElement(ContextcolAIInterface, {
        wallpapersEnabled: wallpapersEnabled,
        renderWallpaperAttribution: this.renderWallpaperAttribution,
        onAIRequest: this.handleAIRequest
      });
    }
    return /*#__PURE__*/external_React_default().createElement("div", {
      className: featureClassName
    }, /*#__PURE__*/external_React_default().createElement("menu", {
      className: "personalizeButtonWrapper"
    }, /*#__PURE__*/external_React_default().createElement(CustomizeMenu, {
      onClose: this.closeCustomizationMenu,
      onOpen: this.openCustomizationMenu,
      openPreferences: this.openPreferences,
      setPref: this.setPref,
      enabledSections: enabledSections,
      enabledWidgets: enabledWidgets,
      wallpapersEnabled: wallpapersEnabled,
      activeWallpaper: activeWallpaper,
      pocketRegion: pocketRegion,
      mayHaveTopicSections: mayHavePersonalizedTopicSections,
      mayHaveSponsoredTopSites: mayHaveSponsoredTopSites,
      mayHaveSponsoredStories: mayHaveSponsoredStories,
      mayHaveInferredPersonalization: mayHaveInferredPersonalization,
      mayHaveWeather: mayHaveWeather,
      mayHaveTrendingSearch: mayHaveTrendingSearch,
      mayHaveWidgets: mayHaveWidgets,
      mayHaveTimerWidget: mayHaveTimerWidget,
      mayHaveListsWidget: mayHaveListsWidget,
      spocMessageVariant: spocMessageVariant,
      showing: customizeMenuVisible
    }), this.shouldShowOMCHighlight("CustomWallpaperHighlight") && /*#__PURE__*/external_React_default().createElement(MessageWrapper, {
      dispatch: this.props.dispatch
    }, /*#__PURE__*/external_React_default().createElement(WallpaperFeatureHighlight, {
      position: "inset-block-start inset-inline-start",
      dispatch: this.props.dispatch
    }))), /*#__PURE__*/external_React_default().createElement("div", {
      className: "weatherWrapper"
    }, weatherEnabled && /*#__PURE__*/external_React_default().createElement(ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(Weather, null))), /*#__PURE__*/external_React_default().createElement("div", {
      className: `mobileDownloadPromoWrapper ${mobileDownloadPromoWrapperHeightModifier}`
    }, mobileDownloadPromoEnabled && mobileDownloadPromoVariantABorC && /*#__PURE__*/external_React_default().createElement(ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(DownloadModalToggle, {
      isActive: shouldShowDownloadHighlight,
      onClick: this.toggleDownloadHighlight
    }), shouldShowDownloadHighlight && /*#__PURE__*/external_React_default().createElement(MessageWrapper, {
      hiddenOverride: shouldShowDownloadHighlight,
      onDismiss: this.handleDismissDownloadHighlight,
      dispatch: this.props.dispatch
    }, /*#__PURE__*/external_React_default().createElement(DownloadMobilePromoHighlight, {
      position: `inset-inline-start inset-block-end`,
      dispatch: this.props.dispatch
    })))), /*#__PURE__*/external_React_default().createElement("div", {
      className: outerClassName,
      onClick: this.closeCustomizationMenu
    }, /*#__PURE__*/external_React_default().createElement("main", {
      className: "newtab-main",
      style: this.state.fixedNavStyle
    }, prefs.showSearch && /*#__PURE__*/external_React_default().createElement("div", {
      className: "non-collapsible-section"
    }, /*#__PURE__*/external_React_default().createElement(ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(Search, Base_extends({
      showLogo: noSectionsEnabled || prefs["logowordmark.alwaysVisible"],
      handoffEnabled: searchHandoffEnabled
    }, props.Search)))), /*#__PURE__*/external_React_default().createElement("div", {
      className: `body-wrapper${initialized ? " on" : ""}`
    }), /*#__PURE__*/external_React_default().createElement(ConfirmDialog, null), wallpapersEnabled && this.renderWallpaperAttribution()), /*#__PURE__*/external_React_default().createElement("aside", null, this.props.Notifications?.showNotifications && /*#__PURE__*/external_React_default().createElement(ErrorBoundary, null, /*#__PURE__*/external_React_default().createElement(Notifications, {
      dispatch: this.props.dispatch
    })))));
  }
}
BaseContent.defaultProps = {
  document: __webpack_require__.g.document
};
const Base = (0,external_ReactRedux_namespaceObject.connect)(state => ({
  App: state.App,
  Prefs: state.Prefs,
  Sections: state.Sections,
  DiscoveryStream: state.DiscoveryStream,
  Messages: state.Messages,
  Notifications: state.Notifications,
  Search: state.Search,
  Wallpapers: state.Wallpapers,
  Weather: state.Weather
}))(_Base);
;// CONCATENATED MODULE: ./content-src/lib/perf-service.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

let usablePerfObj = window.performance;

function _PerfService(options) {
  // For testing, so that we can use a fake Window.performance object with
  // known state.
  if (options && options.performanceObj) {
    this._perf = options.performanceObj;
  } else {
    this._perf = usablePerfObj;
  }
}

_PerfService.prototype = {
  /**
   * Calls the underlying mark() method on the appropriate Window.performance
   * object to add a mark with the given name to the appropriate performance
   * timeline.
   *
   * @param  {String} name  the name to give the current mark
   * @return {void}
   */
  mark: function mark(str) {
    this._perf.mark(str);
  },

  /**
   * Calls the underlying getEntriesByName on the appropriate Window.performance
   * object.
   *
   * @param  {String} name
   * @param  {String} type eg "mark"
   * @return {Array}       Performance* objects
   */
  getEntriesByName: function getEntriesByName(entryName, type) {
    return this._perf.getEntriesByName(entryName, type);
  },

  /**
   * The timeOrigin property from the appropriate performance object.
   * Used to ensure that timestamps from the add-on code and the content code
   * are comparable.
   *
   * @note If this is called from a context without a window
   * (eg a JSM in chrome), it will return the timeOrigin of the XUL hidden
   * window, which appears to be the first created window (and thus
   * timeOrigin) in the browser.  Note also, however, there is also a private
   * hidden window, presumably for private browsing, which appears to be
   * created dynamically later.  Exactly how/when that shows up needs to be
   * investigated.
   *
   * @return {Number} A double of milliseconds with a precision of 0.5us.
   */
  get timeOrigin() {
    return this._perf.timeOrigin;
  },

  /**
   * Returns the "absolute" version of performance.now(), i.e. one that
   * should ([bug 1401406](https://bugzilla.mozilla.org/show_bug.cgi?id=1401406)
   * be comparable across both chrome and content.
   *
   * @return {Number}
   */
  absNow: function absNow() {
    return this.timeOrigin + this._perf.now();
  },

  /**
   * This returns the absolute startTime from the most recent performance.mark()
   * with the given name.
   *
   * @param  {String} name  the name to lookup the start time for
   *
   * @return {Number}       the returned start time, as a DOMHighResTimeStamp
   *
   * @throws {Error}        "No Marks with the name ..." if none are available
   *
   * @note Always surround calls to this by try/catch.  Otherwise your code
   * may fail when the `privacy.resistFingerprinting` pref is true.  When
   * this pref is set, all attempts to get marks will likely fail, which will
   * cause this method to throw.
   *
   * See [bug 1369303](https://bugzilla.mozilla.org/show_bug.cgi?id=1369303)
   * for more info.
   */
  getMostRecentAbsMarkStartByName(entryName) {
    let entries = this.getEntriesByName(entryName, "mark");

    if (!entries.length) {
      throw new Error(`No marks with the name ${entryName}`);
    }

    let mostRecentEntry = entries[entries.length - 1];
    return this._perf.timeOrigin + mostRecentEntry.startTime;
  },
};

const perfService = new _PerfService();

;// CONCATENATED MODULE: ./content-src/lib/detect-user-session-start.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




const detect_user_session_start_VISIBLE = "visible";
const detect_user_session_start_VISIBILITY_CHANGE_EVENT = "visibilitychange";

class DetectUserSessionStart {
  constructor(store, options = {}) {
    this._store = store;
    // Overrides for testing
    this.document = options.document || globalThis.document;
    this._perfService = options.perfService || perfService;
    this._onVisibilityChange = this._onVisibilityChange.bind(this);
  }

  /**
   * sendEventOrAddListener - Notify immediately if the page is already visible,
   *                    or else set up a listener for when visibility changes.
   *                    This is needed for accurate session tracking for telemetry,
   *                    because tabs are pre-loaded.
   */
  sendEventOrAddListener() {
    if (this.document.visibilityState === detect_user_session_start_VISIBLE) {
      // If the document is already visible, to the user, send a notification
      // immediately that a session has started.
      this._sendEvent();
    } else {
      // If the document is not visible, listen for when it does become visible.
      this.document.addEventListener(
        detect_user_session_start_VISIBILITY_CHANGE_EVENT,
        this._onVisibilityChange
      );
    }
  }

  /**
   * _sendEvent - Sends a message to the main process to indicate the current
   *              tab is now visible to the user, includes the
   *              visibility_event_rcvd_ts time in ms from the UNIX epoch.
   */
  _sendEvent() {
    this._perfService.mark("visibility_event_rcvd_ts");

    try {
      let visibility_event_rcvd_ts =
        this._perfService.getMostRecentAbsMarkStartByName(
          "visibility_event_rcvd_ts"
        );

      this._store.dispatch(
        actionCreators.AlsoToMain({
          type: actionTypes.SAVE_SESSION_PERF_DATA,
          data: {
            visibility_event_rcvd_ts,
            window_inner_width: window.innerWidth,
            window_inner_height: window.innerHeight,
          },
        })
      );
    } catch (ex) {
      // If this failed, it's likely because the `privacy.resistFingerprinting`
      // pref is true.  We should at least not blow up.
    }
  }

  /**
   * _onVisibilityChange - If the visibility has changed to visible, sends a notification
   *                      and removes the event listener. This should only be called once per tab.
   */
  _onVisibilityChange() {
    if (this.document.visibilityState === detect_user_session_start_VISIBLE) {
      this._sendEvent();
      this.document.removeEventListener(
        detect_user_session_start_VISIBILITY_CHANGE_EVENT,
        this._onVisibilityChange
      );
    }
  }
}

;// CONCATENATED MODULE: external "Redux"
const external_Redux_namespaceObject = Redux;
;// CONCATENATED MODULE: ./content-src/lib/init-store.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint-env mozilla/remote-page */


// We disable import checking here as redux is installed via the npm packages
// at the newtab level, rather than in the top-level package.json.
// eslint-disable-next-line import/no-unresolved


const MERGE_STORE_ACTION = "NEW_TAB_INITIAL_STATE";
const OUTGOING_MESSAGE_NAME = "ActivityStream:ContentToMain";
const INCOMING_MESSAGE_NAME = "ActivityStream:MainToContent";

/**
 * A higher-order function which returns a reducer that, on MERGE_STORE action,
 * will return the action.data object merged into the previous state.
 *
 * For all other actions, it merely calls mainReducer.
 *
 * Because we want this to merge the entire state object, it's written as a
 * higher order function which takes the main reducer (itself often a call to
 * combineReducers) as a parameter.
 *
 * @param  {function} mainReducer reducer to call if action != MERGE_STORE_ACTION
 * @return {function}             a reducer that, on MERGE_STORE_ACTION action,
 *                                will return the action.data object merged
 *                                into the previous state, and the result
 *                                of calling mainReducer otherwise.
 */
function mergeStateReducer(mainReducer) {
  return (prevState, action) => {
    if (action.type === MERGE_STORE_ACTION) {
      return { ...prevState, ...action.data };
    }

    return mainReducer(prevState, action);
  };
}

/**
 * messageMiddleware - Middleware that looks for SentToMain type actions, and sends them if necessary
 */
const messageMiddleware = () => next => action => {
  const skipLocal = action.meta && action.meta.skipLocal;
  if (actionUtils.isSendToMain(action)) {
    RPMSendAsyncMessage(OUTGOING_MESSAGE_NAME, action);
  }
  if (!skipLocal) {
    next(action);
  }
};

const rehydrationMiddleware = ({ getState }) => {
  // NB: The parameter here is MiddlewareAPI which looks like a Store and shares
  // the same getState, so attached properties are accessible from the store.
  getState.didRehydrate = false;
  getState.didRequestInitialState = false;
  return next => action => {
    if (getState.didRehydrate || window.__FROM_STARTUP_CACHE__) {
      // Startup messages can be safely ignored by the about:home document
      // stored in the startup cache.
      if (
        window.__FROM_STARTUP_CACHE__ &&
        action.meta &&
        action.meta.isStartup
      ) {
        return null;
      }
      return next(action);
    }

    const isMergeStoreAction = action.type === MERGE_STORE_ACTION;
    const isRehydrationRequest = action.type === actionTypes.NEW_TAB_STATE_REQUEST;

    if (isRehydrationRequest) {
      getState.didRequestInitialState = true;
      return next(action);
    }

    if (isMergeStoreAction) {
      getState.didRehydrate = true;
      return next(action);
    }

    // If init happened after our request was made, we need to re-request
    if (getState.didRequestInitialState && action.type === actionTypes.INIT) {
      return next(actionCreators.AlsoToMain({ type: actionTypes.NEW_TAB_STATE_REQUEST }));
    }

    if (
      actionUtils.isBroadcastToContent(action) ||
      actionUtils.isSendToOneContent(action) ||
      actionUtils.isSendToPreloaded(action)
    ) {
      // Note that actions received before didRehydrate will not be dispatched
      // because this could negatively affect preloading and the the state
      // will be replaced by rehydration anyway.
      return null;
    }

    return next(action);
  };
};

/**
 * initStore - Create a store and listen for incoming actions
 *
 * @param  {object} reducers An object containing Redux reducers
 * @param  {object} intialState (optional) The initial state of the store, if desired
 * @return {object}          A redux store
 */
function initStore(reducers, initialState) {
  const store = (0,external_Redux_namespaceObject.createStore)(
    mergeStateReducer((0,external_Redux_namespaceObject.combineReducers)(reducers)),
    initialState,
    globalThis.RPMAddMessageListener &&
      (0,external_Redux_namespaceObject.applyMiddleware)(rehydrationMiddleware, messageMiddleware)
  );

  if (globalThis.RPMAddMessageListener) {
    globalThis.RPMAddMessageListener(INCOMING_MESSAGE_NAME, msg => {
      try {
        store.dispatch(msg.data);
      } catch (ex) {
        console.error("Content msg:", msg, "Dispatch error: ", ex);
        dump(
          `Content msg: ${JSON.stringify(msg)}\nDispatch error: ${ex}\n${
            ex.stack
          }`
        );
      }
    });
  }

  return store;
}

;// CONCATENATED MODULE: external "ReactDOM"
const external_ReactDOM_namespaceObject = ReactDOM;
var external_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_ReactDOM_namespaceObject);
;// CONCATENATED MODULE: ../../modules/Dedupe.sys.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

class Dedupe {
  constructor(createKey) {
    this.createKey = createKey || this.defaultCreateKey;
  }

  defaultCreateKey(item) {
    return item;
  }

  /**
   * Dedupe any number of grouped elements favoring those from earlier groups.
   *
   * @param {Array} groups Contains an arbitrary number of arrays of elements.
   * @returns {Array} A matching array of each provided group deduped.
   */
  group(...groups) {
    const globalKeys = new Set();
    const result = [];
    for (const values of groups) {
      const valueMap = new Map();
      for (const value of values) {
        const key = this.createKey(value);
        if (!globalKeys.has(key) && !valueMap.has(key)) {
          valueMap.set(key, value);
        }
      }
      result.push(valueMap);
      valueMap.forEach((value, key) => globalKeys.add(key));
    }
    return result.map(m => Array.from(m.values()));
  }
}

;// CONCATENATED MODULE: ../../components/topsites/constants.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const TOP_SITES_DEFAULT_ROWS = 1;
const TOP_SITES_MAX_SITES_PER_ROW = 8;

;// CONCATENATED MODULE: ./common/Reducers.sys.mjs
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */






const dedupe = new Dedupe(site => site && site.url);

const INITIAL_STATE = {
  App: {
    // Have we received real data from the app yet?
    initialized: false,
    locale: "",
    isForStartupCache: {
      App: false,
      TopSites: false,
      DiscoveryStream: false,
      Weather: false,
      Wallpaper: false,
    },
    customizeMenuVisible: false,
  },
  Ads: {
    initialized: false,
    lastUpdated: null,
    tiles: {},
    spocs: {},
    spocPlacements: {},
  },
  TopSites: {
    // Have we received real data from history yet?
    initialized: false,
    // The history (and possibly default) links
    rows: [],
    // Used in content only to dispatch action to TopSiteForm.
    editForm: null,
    // Used in content only to open the SearchShortcutsForm modal.
    showSearchShortcutsForm: false,
    // The list of available search shortcuts.
    searchShortcuts: [],
    // The "Share-of-Voice" allocations generated by TopSitesFeed
    sov: {
      ready: false,
      positions: [
        // {position: 0, assignedPartner: "amp"},
        // {position: 1, assignedPartner: "moz-sales"},
      ],
    },
  },
  Prefs: {
    initialized: false,
    values: { featureConfig: {} },
  },
  Dialog: {
    visible: false,
    data: {},
  },
  Sections: [],
  Pocket: {
    isUserLoggedIn: null,
    pocketCta: {},
    waitingForSpoc: true,
  },
  // This is the new pocket configurable layout state.
  DiscoveryStream: {
    // This is a JSON-parsed copy of the discoverystream.config pref value.
    config: { enabled: false },
    layout: [],
    topicsLoading: false,
    feeds: {
      data: {
        // "https://foo.com/feed1": {lastUpdated: 123, data: [], personalized: false}
      },
      loaded: false,
    },
    // Used to show impressions in newtab devtools.
    impressions: {
      feed: {},
    },
    // Used to show blocks in newtab devtools.
    blocks: {},
    spocs: {
      spocs_endpoint: "",
      lastUpdated: null,
      data: {
        // "spocs": {title: "", context: "", items: [], personalized: false},
        // "placement1": {title: "", context: "", items: [], personalized: false},
      },
      loaded: false,
      frequency_caps: [],
      blocked: [],
      placements: [],
    },
    experimentData: {
      utmSource: "pocket-newtab",
      utmCampaign: undefined,
      utmContent: undefined,
    },
    isUserLoggedIn: false,
    showTopicSelection: false,
    report: {
      visible: false,
      data: {},
    },
    sectionPersonalization: {},
  },
  // Messages received from ASRouter to render in newtab
  Messages: {
    // messages received from ASRouter are initially visible
    isVisible: true,
    // portID for that tab that was sent the message
    portID: "",
    // READONLY Message data received from ASRouter
    messageData: {},
  },
  Notifications: {
    showNotifications: false,
    toastCounter: 0,
    toastId: "",
    // This queue is reset each time SHOW_TOAST_MESSAGE is ran.
    // For can be a queue in the future, but for now is one item
    toastQueue: [],
  },
  Personalization: {
    lastUpdated: null,
    initialized: false,
  },
  InferredPersonalization: {
    initialized: false,
    lastUpdated: null,
    inferredIntrests: {},
    coarseInferredInterests: {},
    coarsePrivateInferredInterests: {},
  },
  Search: {
    // When search hand-off is enabled, we render a big button that is styled to
    // look like a search textbox. If the button is clicked, we style
    // the button as if it was a focused search box and show a fake cursor but
    // really focus the awesomebar without the focus styles ("hidden focus").
    fakeFocus: false,
    // Hide the search box after handing off to AwesomeBar and user starts typing.
    hide: false,
  },
  Wallpapers: {
    wallpaperList: [],
    highlightSeenCounter: 0,
    categories: [],
    uploadedWallpaper: "",
  },
  Weather: {
    initialized: false,
    lastUpdated: null,
    query: "",
    suggestions: [],
    locationData: {
      city: "",
      adminArea: "",
      country: "",
    },
    // Display search input in Weather widget
    searchActive: false,
    locationSearchString: "",
    suggestedLocations: [],
  },
  TrendingSearch: {
    suggestions: [],
    collapsed: false,
  },
  // Widgets
  ListsWidget: {
    // value pointing to last selectled list
    selected: "taskList",
    // Default state of an empty task list
    lists: {
      taskList: {
        label: "Task List",
        tasks: [],
        completed: [],
      },
    },
  },
  TimerWidget: {
    // The timer will have 2 types of states, focus and break.
    // Focus will the default state
    timerType: "focus",
    focus: {
      // Timer duration set by user; 25 mins by default
      duration: 25 * 60,
      // Initial duration - also set by the user; does not update until timer ends or user resets timer
      initialDuration: 25 * 60,
      // the Date.now() value when a user starts/resumes a timer
      startTime: null,
      // Boolean indicating if timer is currently running
      isRunning: false,
    },
    break: {
      duration: 5 * 60,
      initialDuration: 5 * 60,
      startTime: null,
      isRunning: false,
    },
  },
};

function App(prevState = INITIAL_STATE.App, action) {
  switch (action.type) {
    case actionTypes.INIT:
      return Object.assign({}, prevState, action.data || {}, {
        initialized: true,
      });
    case actionTypes.TOP_SITES_UPDATED:
      // Toggle `isForStartupCache.TopSites` when receiving the `TOP_SITES_UPDATE` action
      // so that sponsored tiles can be rendered as usual. See Bug 1826360.
      return {
        ...prevState,
        isForStartupCache: { ...prevState.isForStartupCache, TopSites: false },
      };
    case actionTypes.DISCOVERY_STREAM_SPOCS_UPDATE:
      // Toggle `isForStartupCache.DiscoveryStream` when receiving the `DISCOVERY_STREAM_SPOCS_UPDATE` action
      // so that spoc cards can be rendered as usual.
      return {
        ...prevState,
        isForStartupCache: {
          ...prevState.isForStartupCache,
          DiscoveryStream: false,
        },
      };
    case actionTypes.WEATHER_UPDATE:
      // Toggle `isForStartupCache.Weather` when receiving the `WEATHER_UPDATE` action
      // so that weather can be rendered as usual.
      return {
        ...prevState,
        isForStartupCache: { ...prevState.isForStartupCache, Weather: false },
      };
    case actionTypes.WALLPAPERS_CUSTOM_SET:
      // Toggle `isForStartupCache.Wallpaper` when receiving the `WALLPAPERS_CUSTOM_SET` action
      // so that custom wallpaper can be rendered as usual.
      return {
        ...prevState,
        isForStartupCache: { ...prevState.isForStartupCache, Wallpaper: false },
      };
    case actionTypes.SHOW_PERSONALIZE:
      return Object.assign({}, prevState, {
        customizeMenuVisible: true,
      });
    case actionTypes.HIDE_PERSONALIZE:
      return Object.assign({}, prevState, {
        customizeMenuVisible: false,
      });
    default:
      return prevState;
  }
}

function TopSites(prevState = INITIAL_STATE.TopSites, action) {
  let hasMatch;
  let newRows;
  switch (action.type) {
    case actionTypes.TOP_SITES_UPDATED:
      if (!action.data || !action.data.links) {
        return prevState;
      }
      return Object.assign(
        {},
        prevState,
        { initialized: true, rows: action.data.links },
        action.data.pref ? { pref: action.data.pref } : {}
      );
    case actionTypes.TOP_SITES_PREFS_UPDATED:
      return Object.assign({}, prevState, { pref: action.data.pref });
    case actionTypes.TOP_SITES_EDIT:
      return Object.assign({}, prevState, {
        editForm: {
          index: action.data.index,
          previewResponse: null,
        },
      });
    case actionTypes.TOP_SITES_CANCEL_EDIT:
      return Object.assign({}, prevState, { editForm: null });
    case actionTypes.TOP_SITES_OPEN_SEARCH_SHORTCUTS_MODAL:
      return Object.assign({}, prevState, { showSearchShortcutsForm: true });
    case actionTypes.TOP_SITES_CLOSE_SEARCH_SHORTCUTS_MODAL:
      return Object.assign({}, prevState, { showSearchShortcutsForm: false });
    case actionTypes.PREVIEW_RESPONSE:
      if (
        !prevState.editForm ||
        action.data.url !== prevState.editForm.previewUrl
      ) {
        return prevState;
      }
      return Object.assign({}, prevState, {
        editForm: {
          index: prevState.editForm.index,
          previewResponse: action.data.preview,
          previewUrl: action.data.url,
        },
      });
    case actionTypes.PREVIEW_REQUEST:
      if (!prevState.editForm) {
        return prevState;
      }
      return Object.assign({}, prevState, {
        editForm: {
          index: prevState.editForm.index,
          previewResponse: null,
          previewUrl: action.data.url,
        },
      });
    case actionTypes.PREVIEW_REQUEST_CANCEL:
      if (!prevState.editForm) {
        return prevState;
      }
      return Object.assign({}, prevState, {
        editForm: {
          index: prevState.editForm.index,
          previewResponse: null,
        },
      });
    case actionTypes.SCREENSHOT_UPDATED:
      newRows = prevState.rows.map(row => {
        if (row && row.url === action.data.url) {
          hasMatch = true;
          return Object.assign({}, row, { screenshot: action.data.screenshot });
        }
        return row;
      });
      return hasMatch
        ? Object.assign({}, prevState, { rows: newRows })
        : prevState;
    case actionTypes.PLACES_BOOKMARK_ADDED:
      if (!action.data) {
        return prevState;
      }
      newRows = prevState.rows.map(site => {
        if (site && site.url === action.data.url) {
          const { bookmarkGuid, bookmarkTitle, dateAdded } = action.data;
          return Object.assign({}, site, {
            bookmarkGuid,
            bookmarkTitle,
            bookmarkDateCreated: dateAdded,
          });
        }
        return site;
      });
      return Object.assign({}, prevState, { rows: newRows });
    case actionTypes.PLACES_BOOKMARKS_REMOVED:
      if (!action.data) {
        return prevState;
      }
      newRows = prevState.rows.map(site => {
        if (site && action.data.urls.includes(site.url)) {
          const newSite = Object.assign({}, site);
          delete newSite.bookmarkGuid;
          delete newSite.bookmarkTitle;
          delete newSite.bookmarkDateCreated;
          return newSite;
        }
        return site;
      });
      return Object.assign({}, prevState, { rows: newRows });
    case actionTypes.PLACES_LINKS_DELETED:
      if (!action.data) {
        return prevState;
      }
      newRows = prevState.rows.filter(
        site => !action.data.urls.includes(site.url)
      );
      return Object.assign({}, prevState, { rows: newRows });
    case actionTypes.UPDATE_SEARCH_SHORTCUTS:
      return { ...prevState, searchShortcuts: action.data.searchShortcuts };
    case actionTypes.SOV_UPDATED: {
      const sov = {
        ready: action.data.ready,
        positions: action.data.positions,
      };
      return { ...prevState, sov };
    }
    default:
      return prevState;
  }
}

function Dialog(prevState = INITIAL_STATE.Dialog, action) {
  switch (action.type) {
    case actionTypes.DIALOG_OPEN:
      return Object.assign({}, prevState, { visible: true, data: action.data });
    case actionTypes.DIALOG_CANCEL:
      return Object.assign({}, prevState, { visible: false });
    case actionTypes.DIALOG_CLOSE:
      // Reset and hide the confirmation dialog once the action is complete.
      return Object.assign({}, INITIAL_STATE.Dialog);
    default:
      return prevState;
  }
}

function Prefs(prevState = INITIAL_STATE.Prefs, action) {
  let newValues;
  switch (action.type) {
    case actionTypes.PREFS_INITIAL_VALUES:
      return Object.assign({}, prevState, {
        initialized: true,
        values: action.data,
      });
    case actionTypes.PREF_CHANGED:
      newValues = Object.assign({}, prevState.values);
      newValues[action.data.name] = action.data.value;
      return Object.assign({}, prevState, { values: newValues });
    default:
      return prevState;
  }
}

function Sections(prevState = INITIAL_STATE.Sections, action) {
  let hasMatch;
  let newState;
  switch (action.type) {
    case actionTypes.SECTION_DEREGISTER:
      return prevState.filter(section => section.id !== action.data);
    case actionTypes.SECTION_REGISTER:
      // If section exists in prevState, update it
      newState = prevState.map(section => {
        if (section && section.id === action.data.id) {
          hasMatch = true;
          return Object.assign({}, section, action.data);
        }
        return section;
      });
      // Otherwise, append it
      if (!hasMatch) {
        const initialized = !!(action.data.rows && !!action.data.rows.length);
        const section = Object.assign(
          { title: "", rows: [], enabled: false },
          action.data,
          { initialized }
        );
        newState.push(section);
      }
      return newState;
    case actionTypes.SECTION_UPDATE:
      newState = prevState.map(section => {
        if (section && section.id === action.data.id) {
          // If the action is updating rows, we should consider initialized to be true.
          // This can be overridden if initialized is defined in the action.data
          const initialized = action.data.rows ? { initialized: true } : {};

          // Make sure pinned cards stay at their current position when rows are updated.
          // Disabling a section (SECTION_UPDATE with empty rows) does not retain pinned cards.
          if (
            action.data.rows &&
            !!action.data.rows.length &&
            section.rows.find(card => card.pinned)
          ) {
            const rows = Array.from(action.data.rows);
            section.rows.forEach((card, index) => {
              if (card.pinned) {
                // Only add it if it's not already there.
                if (rows[index].guid !== card.guid) {
                  rows.splice(index, 0, card);
                }
              }
            });
            return Object.assign(
              {},
              section,
              initialized,
              Object.assign({}, action.data, { rows })
            );
          }

          return Object.assign({}, section, initialized, action.data);
        }
        return section;
      });

      if (!action.data.dedupeConfigurations) {
        return newState;
      }

      action.data.dedupeConfigurations.forEach(dedupeConf => {
        newState = newState.map(section => {
          if (section.id === dedupeConf.id) {
            const dedupedRows = dedupeConf.dedupeFrom.reduce(
              (rows, dedupeSectionId) => {
                const dedupeSection = newState.find(
                  s => s.id === dedupeSectionId
                );
                const [, newRows] = dedupe.group(dedupeSection.rows, rows);
                return newRows;
              },
              section.rows
            );

            return Object.assign({}, section, { rows: dedupedRows });
          }

          return section;
        });
      });

      return newState;
    case actionTypes.SECTION_UPDATE_CARD:
      return prevState.map(section => {
        if (section && section.id === action.data.id && section.rows) {
          const newRows = section.rows.map(card => {
            if (card.url === action.data.url) {
              return Object.assign({}, card, action.data.options);
            }
            return card;
          });
          return Object.assign({}, section, { rows: newRows });
        }
        return section;
      });
    case actionTypes.PLACES_BOOKMARK_ADDED:
      if (!action.data) {
        return prevState;
      }
      return prevState.map(section =>
        Object.assign({}, section, {
          rows: section.rows.map(item => {
            // find the item within the rows that is attempted to be bookmarked
            if (item.url === action.data.url) {
              const { bookmarkGuid, bookmarkTitle, dateAdded } = action.data;
              return Object.assign({}, item, {
                bookmarkGuid,
                bookmarkTitle,
                bookmarkDateCreated: dateAdded,
                type: "bookmark",
              });
            }
            return item;
          }),
        })
      );
    case actionTypes.PLACES_BOOKMARKS_REMOVED:
      if (!action.data) {
        return prevState;
      }
      return prevState.map(section =>
        Object.assign({}, section, {
          rows: section.rows.map(item => {
            // find the bookmark within the rows that is attempted to be removed
            if (action.data.urls.includes(item.url)) {
              const newSite = Object.assign({}, item);
              delete newSite.bookmarkGuid;
              delete newSite.bookmarkTitle;
              delete newSite.bookmarkDateCreated;
              if (!newSite.type || newSite.type === "bookmark") {
                newSite.type = "history";
              }
              return newSite;
            }
            return item;
          }),
        })
      );
    case actionTypes.PLACES_LINKS_DELETED:
      if (!action.data) {
        return prevState;
      }
      return prevState.map(section =>
        Object.assign({}, section, {
          rows: section.rows.filter(
            site => !action.data.urls.includes(site.url)
          ),
        })
      );
    case actionTypes.PLACES_LINK_BLOCKED:
      if (!action.data) {
        return prevState;
      }
      return prevState.map(section =>
        Object.assign({}, section, {
          rows: section.rows.filter(site => site.url !== action.data.url),
        })
      );
    default:
      return prevState;
  }
}

function Messages(prevState = INITIAL_STATE.Messages, action) {
  switch (action.type) {
    case actionTypes.MESSAGE_SET:
      if (prevState.messageData.messageType) {
        return prevState;
      }
      return {
        ...prevState,
        messageData: action.data.message,
        portID: action.data.portID || "",
      };
    case actionTypes.MESSAGE_TOGGLE_VISIBILITY:
      return { ...prevState, isVisible: action.data };
    default:
      return prevState;
  }
}

function Pocket(prevState = INITIAL_STATE.Pocket, action) {
  switch (action.type) {
    case actionTypes.POCKET_WAITING_FOR_SPOC:
      return { ...prevState, waitingForSpoc: action.data };
    case actionTypes.POCKET_LOGGED_IN:
      return { ...prevState, isUserLoggedIn: !!action.data };
    case actionTypes.POCKET_CTA:
      return {
        ...prevState,
        pocketCta: {
          ctaButton: action.data.cta_button,
          ctaText: action.data.cta_text,
          ctaUrl: action.data.cta_url,
          useCta: action.data.use_cta,
        },
      };
    default:
      return prevState;
  }
}

function Reducers_sys_Personalization(prevState = INITIAL_STATE.Personalization, action) {
  switch (action.type) {
    case actionTypes.DISCOVERY_STREAM_PERSONALIZATION_LAST_UPDATED:
      return {
        ...prevState,
        lastUpdated: action.data.lastUpdated,
      };
    case actionTypes.DISCOVERY_STREAM_PERSONALIZATION_INIT:
      return {
        ...prevState,
        initialized: true,
      };
    case actionTypes.DISCOVERY_STREAM_PERSONALIZATION_RESET:
      return { ...INITIAL_STATE.Personalization };
    default:
      return prevState;
  }
}

function InferredPersonalization(
  prevState = INITIAL_STATE.InferredPersonalization,
  action
) {
  switch (action.type) {
    case actionTypes.INFERRED_PERSONALIZATION_UPDATE:
      return {
        ...prevState,
        initialized: true,
        inferredInterests: action.data.inferredInterests,
        coarseInferredInterests: action.data.coarseInferredInterests,
        coarsePrivateInferredInterests:
          action.data.coarsePrivateInferredInterests,
        lastUpdated: action.data.lastUpdated,
      };
    case actionTypes.INFERRED_PERSONALIZATION_RESET:
      return { ...INITIAL_STATE.InferredPersonalization };
    default:
      return prevState;
  }
}

// eslint-disable-next-line complexity
function DiscoveryStream(prevState = INITIAL_STATE.DiscoveryStream, action) {
  // Return if action data is empty, or spocs or feeds data is not loaded
  const isNotReady = () =>
    !action.data || !prevState.spocs.loaded || !prevState.feeds.loaded;

  const handlePlacements = handleSites => {
    const { data, placements } = prevState.spocs;
    const result = {};

    const forPlacement = placement => {
      const placementSpocs = data[placement.name];

      if (
        !placementSpocs ||
        !placementSpocs.items ||
        !placementSpocs.items.length
      ) {
        return;
      }

      result[placement.name] = {
        ...placementSpocs,
        items: handleSites(placementSpocs.items),
      };
    };

    if (!placements || !placements.length) {
      [{ name: "spocs" }].forEach(forPlacement);
    } else {
      placements.forEach(forPlacement);
    }
    return result;
  };

  const nextState = handleSites => ({
    ...prevState,
    spocs: {
      ...prevState.spocs,
      data: handlePlacements(handleSites),
    },
    feeds: {
      ...prevState.feeds,
      data: Object.keys(prevState.feeds.data).reduce(
        (accumulator, feed_url) => {
          accumulator[feed_url] = {
            data: {
              ...prevState.feeds.data[feed_url].data,
              recommendations: handleSites(
                prevState.feeds.data[feed_url].data.recommendations
              ),
            },
          };
          return accumulator;
        },
        {}
      ),
    },
  });

  switch (action.type) {
    case actionTypes.DISCOVERY_STREAM_CONFIG_CHANGE:
    // Fall through to a separate action is so it doesn't trigger a listener update on init
    case actionTypes.DISCOVERY_STREAM_CONFIG_SETUP:
      return { ...prevState, config: action.data || {} };
    case actionTypes.DISCOVERY_STREAM_EXPERIMENT_DATA:
      return { ...prevState, experimentData: action.data || {} };
    case actionTypes.DISCOVERY_STREAM_LAYOUT_UPDATE:
      return {
        ...prevState,
        layout: action.data.layout || [],
      };
    case actionTypes.DISCOVERY_STREAM_TOPICS_LOADING:
      return {
        ...prevState,
        topicsLoading: action.data,
      };
    case actionTypes.DISCOVERY_STREAM_PREFS_SETUP:
      return {
        ...prevState,
        pocketButtonEnabled: action.data.pocketButtonEnabled,
        hideDescriptions: action.data.hideDescriptions,
        compactImages: action.data.compactImages,
        imageGradient: action.data.imageGradient,
        newSponsoredLabel: action.data.newSponsoredLabel,
        titleLines: action.data.titleLines,
        descLines: action.data.descLines,
        readTime: action.data.readTime,
      };
    case actionTypes.DISCOVERY_STREAM_POCKET_STATE_SET:
      return {
        ...prevState,
        isUserLoggedIn: action.data.isUserLoggedIn,
      };
    case actionTypes.SHOW_PRIVACY_INFO:
      return {
        ...prevState,
      };
    case actionTypes.DISCOVERY_STREAM_LAYOUT_RESET:
      return { ...INITIAL_STATE.DiscoveryStream, config: prevState.config };
    case actionTypes.DISCOVERY_STREAM_FEEDS_UPDATE:
      return {
        ...prevState,
        feeds: {
          ...prevState.feeds,
          loaded: true,
        },
      };
    case actionTypes.DISCOVERY_STREAM_FEED_UPDATE: {
      const newData = {};
      newData[action.data.url] = action.data.feed;
      return {
        ...prevState,
        feeds: {
          ...prevState.feeds,
          data: {
            ...prevState.feeds.data,
            ...newData,
          },
        },
      };
    }
    case actionTypes.DISCOVERY_STREAM_DEV_IMPRESSIONS:
      return {
        ...prevState,
        impressions: {
          ...prevState.impressions,
          feed: action.data,
        },
      };
    case actionTypes.DISCOVERY_STREAM_DEV_BLOCKS:
      return {
        ...prevState,
        blocks: action.data,
      };
    case actionTypes.DISCOVERY_STREAM_SPOCS_CAPS:
      return {
        ...prevState,
        spocs: {
          ...prevState.spocs,
          frequency_caps: [...prevState.spocs.frequency_caps, ...action.data],
        },
      };
    case actionTypes.DISCOVERY_STREAM_SPOCS_ENDPOINT:
      return {
        ...prevState,
        spocs: {
          ...INITIAL_STATE.DiscoveryStream.spocs,
          spocs_endpoint:
            action.data.url ||
            INITIAL_STATE.DiscoveryStream.spocs.spocs_endpoint,
        },
      };
    case actionTypes.DISCOVERY_STREAM_SPOCS_PLACEMENTS:
      return {
        ...prevState,
        spocs: {
          ...prevState.spocs,
          placements:
            action.data.placements ||
            INITIAL_STATE.DiscoveryStream.spocs.placements,
        },
      };
    case actionTypes.DISCOVERY_STREAM_SPOCS_UPDATE:
      if (action.data) {
        return {
          ...prevState,
          spocs: {
            ...prevState.spocs,
            lastUpdated: action.data.lastUpdated,
            data: action.data.spocs,
            loaded: true,
          },
        };
      }
      return prevState;
    case actionTypes.DISCOVERY_STREAM_SPOC_BLOCKED:
      return {
        ...prevState,
        spocs: {
          ...prevState.spocs,
          blocked: [...prevState.spocs.blocked, action.data.url],
        },
      };
    case actionTypes.DISCOVERY_STREAM_LINK_BLOCKED:
      return isNotReady()
        ? prevState
        : nextState(items =>
            items.filter(item => item.url !== action.data.url)
          );

    case actionTypes.PLACES_BOOKMARK_ADDED: {
      const updateBookmarkInfo = item => {
        if (item.url === action.data.url) {
          const { bookmarkGuid, bookmarkTitle, dateAdded } = action.data;
          return Object.assign({}, item, {
            bookmarkGuid,
            bookmarkTitle,
            bookmarkDateCreated: dateAdded,
            context_type: "bookmark",
          });
        }
        return item;
      };
      return isNotReady()
        ? prevState
        : nextState(items => items.map(updateBookmarkInfo));
    }
    case actionTypes.PLACES_BOOKMARKS_REMOVED: {
      const removeBookmarkInfo = item => {
        if (action.data.urls.includes(item.url)) {
          const newSite = Object.assign({}, item);
          delete newSite.bookmarkGuid;
          delete newSite.bookmarkTitle;
          delete newSite.bookmarkDateCreated;
          if (!newSite.context_type || newSite.context_type === "bookmark") {
            newSite.context_type = "removedBookmark";
          }
          return newSite;
        }
        return item;
      };
      return isNotReady()
        ? prevState
        : nextState(items => items.map(removeBookmarkInfo));
    }
    case actionTypes.TOPIC_SELECTION_SPOTLIGHT_OPEN:
      return {
        ...prevState,
        showTopicSelection: true,
      };
    case actionTypes.TOPIC_SELECTION_SPOTLIGHT_CLOSE:
      return {
        ...prevState,
        showTopicSelection: false,
      };
    case actionTypes.SECTION_BLOCKED:
      return {
        ...prevState,
        showBlockSectionConfirmation: true,
        sectionPersonalization: action.data,
      };
    case actionTypes.REPORT_AD_OPEN:
      return {
        ...prevState,
        report: {
          ...prevState.report,
          card_type: action.data?.card_type,
          position: action.data?.position,
          placement_id: action.data?.placement_id,
          reporting_url: action.data?.reporting_url,
          url: action.data?.url,
          visible: true,
        },
      };
    case actionTypes.REPORT_CONTENT_OPEN:
      return {
        ...prevState,
        report: {
          ...prevState.report,
          card_type: action.data?.card_type,
          corpus_item_id: action.data?.corpus_item_id,
          scheduled_corpus_item_id: action.data?.scheduled_corpus_item_id,
          section_position: action.data?.section_position,
          section: action.data?.section,
          title: action.data?.title,
          topic: action.data?.topic,
          url: action.data?.url,
          visible: true,
        },
      };
    case actionTypes.REPORT_CLOSE:
    case actionTypes.REPORT_AD_SUBMIT:
    case actionTypes.REPORT_CONTENT_SUBMIT:
      return {
        ...prevState,
        report: {
          ...prevState.report,
          visible: false,
        },
      };
    case actionTypes.SECTION_PERSONALIZATION_UPDATE:
      return { ...prevState, sectionPersonalization: action.data };
    default:
      return prevState;
  }
}

function Reducers_sys_Search(prevState = INITIAL_STATE.Search, action) {
  switch (action.type) {
    case actionTypes.DISABLE_SEARCH:
      return Object.assign({ ...prevState, disable: true });
    case actionTypes.FAKE_FOCUS_SEARCH:
      return Object.assign({ ...prevState, fakeFocus: true });
    case actionTypes.SHOW_SEARCH:
      return Object.assign({ ...prevState, disable: false, fakeFocus: false });
    default:
      return prevState;
  }
}

function Wallpapers(prevState = INITIAL_STATE.Wallpapers, action) {
  switch (action.type) {
    case actionTypes.WALLPAPERS_SET:
      return {
        ...prevState,
        wallpaperList: action.data,
      };
    case actionTypes.WALLPAPERS_FEATURE_HIGHLIGHT_COUNTER_INCREMENT:
      return {
        ...prevState,
        highlightSeenCounter: action.data,
      };
    case actionTypes.WALLPAPERS_CATEGORY_SET:
      return { ...prevState, categories: action.data };
    case actionTypes.WALLPAPERS_CUSTOM_SET:
      return { ...prevState, uploadedWallpaper: action.data };
    default:
      return prevState;
  }
}

function Reducers_sys_Notifications(prevState = INITIAL_STATE.Notifications, action) {
  switch (action.type) {
    case actionTypes.SHOW_TOAST_MESSAGE:
      return {
        ...prevState,
        showNotifications: action.data.showNotifications,
        toastCounter: prevState.toastCounter + 1,
        toastId: action.data.toastId,
        toastQueue: [action.data.toastId],
      };
    case actionTypes.HIDE_TOAST_MESSAGE: {
      const { showNotifications, toastId: hiddenToastId } = action.data;
      const queuedToasts = [...prevState.toastQueue].filter(
        toastId => toastId !== hiddenToastId
      );
      return {
        ...prevState,
        toastCounter: queuedToasts.length,
        toastQueue: queuedToasts,
        toastId: "",
        showNotifications,
      };
    }
    default:
      return prevState;
  }
}

function Reducers_sys_Weather(prevState = INITIAL_STATE.Weather, action) {
  switch (action.type) {
    case actionTypes.WEATHER_UPDATE:
      return {
        ...prevState,
        suggestions: action.data.suggestions,
        lastUpdated: action.data.date,
        locationData: action.data.locationData || prevState.locationData,
        initialized: true,
      };
    case actionTypes.WEATHER_SEARCH_ACTIVE:
      return { ...prevState, searchActive: action.data };
    case actionTypes.WEATHER_LOCATION_SEARCH_UPDATE:
      return { ...prevState, locationSearchString: action.data };
    case actionTypes.WEATHER_LOCATION_SUGGESTIONS_UPDATE:
      return { ...prevState, suggestedLocations: action.data };
    case actionTypes.WEATHER_LOCATION_DATA_UPDATE:
      return { ...prevState, locationData: action.data };
    default:
      return prevState;
  }
}

function Ads(prevState = INITIAL_STATE.Ads, action) {
  switch (action.type) {
    case actionTypes.ADS_INIT:
      return {
        ...prevState,
        initialized: true,
      };
    case actionTypes.ADS_UPDATE_TILES:
      return {
        ...prevState,
        tiles: action.data.tiles,
      };
    case actionTypes.ADS_UPDATE_SPOCS:
      return {
        ...prevState,
        spocs: action.data.spocs,
        spocPlacements: action.data.spocPlacements,
      };
    case actionTypes.ADS_RESET:
      return { ...INITIAL_STATE.Ads };
    default:
      return prevState;
  }
}

function TrendingSearch(prevState = INITIAL_STATE.TrendingSearch, action) {
  switch (action.type) {
    case actionTypes.TRENDING_SEARCH_UPDATE:
      return { ...prevState, suggestions: action.data };
    case actionTypes.TRENDING_SEARCH_TOGGLE_COLLAPSE:
      return { ...prevState, collapsed: action.data.collapsed };
    default:
      return prevState;
  }
}

function TimerWidget(prevState = INITIAL_STATE.TimerWidget, action) {
  // fallback to current timerType in state if not provided in action
  const timerType = action.data?.timerType || prevState.timerType;
  switch (action.type) {
    case actionTypes.WIDGETS_TIMER_SET:
      return {
        ...prevState,
        ...action.data,
      };
    case actionTypes.WIDGETS_TIMER_SET_TYPE:
      return {
        ...prevState,
        timerType: action.data.timerType,
      };
    case actionTypes.WIDGETS_TIMER_SET_DURATION:
      return {
        ...prevState,
        [timerType]: {
          // setting a dynamic key assignment to let us dynamically update timer type's state based on what is set
          duration: action.data.duration,
          initialDuration: action.data.duration,
          startTime: null,
          isRunning: false,
        },
      };
    case actionTypes.WIDGETS_TIMER_PLAY:
      return {
        ...prevState,
        [timerType]: {
          ...prevState[timerType],
          startTime: Math.floor(Date.now() / 1000), // reflected in seconds
          isRunning: true,
        },
      };
    case actionTypes.WIDGETS_TIMER_PAUSE:
      if (prevState[timerType]?.isRunning) {
        return {
          ...prevState,
          [timerType]: {
            ...prevState[timerType],
            duration: action.data.duration,
            // setting startTime to null on pause because we need to check the exact time the user presses play,
            // whether it's when the user starts or resumes the timer. This helps get accurate results
            startTime: null,
            isRunning: false,
          },
        };
      }
      return prevState;
    case actionTypes.WIDGETS_TIMER_RESET:
      return {
        ...prevState,
        [timerType]: {
          ...prevState[timerType],
          duration: action.data.duration,
          initialDuration: action.data.duration,
          startTime: null,
          isRunning: false,
        },
      };
    case actionTypes.WIDGETS_TIMER_END:
      return {
        ...prevState,
        [timerType]: {
          ...prevState[timerType],
          duration: action.data.duration,
          initialDuration: action.data.duration,
          startTime: null,
          isRunning: false,
        },
      };
    default:
      return prevState;
  }
}

function ListsWidget(prevState = INITIAL_STATE.ListsWidget, action) {
  switch (action.type) {
    case actionTypes.WIDGETS_LISTS_SET:
      return { ...prevState, lists: action.data };
    case actionTypes.WIDGETS_LISTS_SET_SELECTED:
      return { ...prevState, selected: action.data };
    default:
      return prevState;
  }
}

const reducers = {
  TopSites,
  App,
  Ads,
  Prefs,
  Dialog,
  Sections,
  Messages,
  Notifications: Reducers_sys_Notifications,
  Pocket,
  Personalization: Reducers_sys_Personalization,
  InferredPersonalization,
  DiscoveryStream,
  Search: Reducers_sys_Search,
  TimerWidget,
  ListsWidget,
  TrendingSearch,
  Wallpapers,
  Weather: Reducers_sys_Weather,
};

;// CONCATENATED MODULE: ./content-src/activity-stream.jsx
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */









const NewTab = ({
  store
}) => /*#__PURE__*/external_React_default().createElement(external_ReactRedux_namespaceObject.Provider, {
  store: store
}, /*#__PURE__*/external_React_default().createElement(Base, null));
function doRequestWhenReady() {
  // If this document has already gone into the background by the time we've reached
  // here, we can deprioritize the request until the event loop
  // frees up. If, however, the visibility changes, we then send the request.
  const doRequestPromise = new Promise(resolve => {
    let didRequest = false;
    let requestIdleCallbackId = 0;
    function doRequest() {
      if (!didRequest) {
        if (requestIdleCallbackId) {
          cancelIdleCallback(requestIdleCallbackId);
        }
        didRequest = true;
        resolve();
      }
    }
    if (document.hidden) {
      requestIdleCallbackId = requestIdleCallback(doRequest);
      addEventListener("visibilitychange", doRequest, {
        once: true
      });
    } else {
      resolve();
    }
  });
  return doRequestPromise;
}
function renderWithoutState() {
  const store = initStore(reducers);
  new DetectUserSessionStart(store).sendEventOrAddListener();
  doRequestWhenReady().then(() => {
    // If state events happened before we got here, we can request state again.
    store.dispatch(actionCreators.AlsoToMain({
      type: actionTypes.NEW_TAB_STATE_REQUEST
    }));
    // If we rendered without state, we don't need the startup cache.
    store.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.NEW_TAB_STATE_REQUEST_WITHOUT_STARTUPCACHE
    }));
  });
  external_ReactDOM_default().hydrate(/*#__PURE__*/external_React_default().createElement(NewTab, {
    store: store
  }), document.getElementById("root"));
}
function renderCache(initialState) {
  if (initialState) {
    initialState.App.isForStartupCache.App = false;
  }
  const store = initStore(reducers, initialState);
  new DetectUserSessionStart(store).sendEventOrAddListener();
  doRequestWhenReady().then(() => {
    // If state events happened before we got here,
    // we can notify main that we need updates.
    // The individual feeds know what state is not cached.
    store.dispatch(actionCreators.OnlyToMain({
      type: actionTypes.NEW_TAB_STATE_REQUEST_STARTUPCACHE
    }));
  });
  external_ReactDOM_default().hydrate(/*#__PURE__*/external_React_default().createElement(NewTab, {
    store: store
  }), document.getElementById("root"));
}
NewtabRenderUtils = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktc3RyZWFtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksTUFBTTtBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLEtBQUs7QUFDakIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxR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QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWCxlQUFlO0FBQ2YsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0Esa0JBQWtCLHlDQUF5QztBQUMzRCxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWCxTQUFTLFdBQUU7QUFDWCxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1gsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsbUJBQU07QUFDZjtBQUNBLFNBQVMsV0FBRTtBQUNYLDZCQUE2Qiw2QkFBNkI7QUFDMUQsU0FBUyxXQUFFO0FBQ1gsNkJBQTZCLCtCQUErQjtBQUM1RCxTQUFTLFdBQUU7QUFDWCw2QkFBNkIsZ0RBQWdEO0FBQzdFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1gsZUFBZTtBQUNmLFNBQVMsV0FBRTtBQUNYLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLDBCQUFhO0FBQ3RCO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWCxjQUFjLDRDQUE0QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUyxvQkFBTztBQUNoQjtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1gsZUFBZTtBQUNmLFNBQVMsV0FBRTtBQUNYLGVBQWU7QUFDZixTQUFTLFdBQUU7QUFDWCxlQUFlO0FBQ2YsU0FBUyxXQUFFO0FBQ1gsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1gsZUFBZTtBQUNmLFNBQVMsV0FBRTtBQUNYLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FB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USxDQUNaM0MsY0FBRSxDQUFDNEMsVUFBVSxDQUFDO01BQUVMLElBQUksRUFBRXJDLFdBQUUsQ0FBQ28vQjtJQUFtQyxDQUFDLENBQy9ELENBQUM7RUFDSCxDQUFDLENBQUM7RUFFRnZCLG1DQUFnQixjQUFDci9CLHNDQUFBLENBQUN1L0IsTUFBTTtJQUFDQyxLQUFLLEVBQUVBO0VBQU0sQ0FBRSxDQUFDLEVBQUV2eUIsUUFBUSxDQUFDd3pCLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM3RSIsInNvdXJjZXMiOlsid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbW1vbi9BY3Rpb25zLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy9leHRlcm5hbCB2YXIgXCJSZWFjdFJlZHV4XCIiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQWRtaW4vU2ltcGxlSGFzaFJvdXRlci5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUFkbWluL0Rpc2NvdmVyeVN0cmVhbUFkbWluLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZy9Db25maXJtRGlhbG9nLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQTExeUxpbmtCdXR0b24vQTExeUxpbmtCdXR0b24uanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnkuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL2V4dGVybmFsIHZhciBcIlJlYWN0VHJhbnNpdGlvbkdyb3VwXCIiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0N1c3RvbWl6ZU1lbnUvU2VjdGlvbnNNZ210UGFuZWwvU2VjdGlvbnNNZ210UGFuZWwuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9XYWxscGFwZXJDYXRlZ29yaWVzL1dhbGxwYXBlckNhdGVnb3JpZXMuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9DdXN0b21pemVNZW51L0NvbnRlbnRTZWN0aW9uL0NvbnRlbnRTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ3VzdG9taXplTWVudS9DdXN0b21pemVNZW51LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2xpYi9jb25zdGFudHMubWpzIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Mb2dvL0xvZ28uanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9EaXNjb3ZlcnlTdHJlYW1Db21wb25lbnRzL1NhZmVBbmNob3IvU2FmZUFuY2hvci5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0NvbnRleHRNZW51L0NvbnRleHRNZW51LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2xpYi9saW5rLW1lbnUtb3B0aW9ucy5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0xpbmtNZW51L0xpbmtNZW51LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2xpYi91dGlscy5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvVHJlbmRpbmdTZWFyY2hlcy9UcmVuZGluZ1NlYXJjaGVzLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvU2VhcmNoL1NlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0NvbnRleHRjb2xBSUludGVyZmFjZS9Db250ZXh0Y29sQUlJbnRlcmZhY2UuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9XZWF0aGVyL0xvY2F0aW9uU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvV2VhdGhlci9XZWF0aGVyLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRG93bmxvYWRNb2RhbFRvZ2dsZS9Eb3dubG9hZE1vZGFsVG9nZ2xlLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Ub2FzdHMvVGh1bWJVcFRodW1iRG93blRvYXN0LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Ub2FzdHMvUmVwb3J0Q29udGVudFRvYXN0LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQ29tcG9uZW50cy9GZWF0dXJlSGlnaGxpZ2h0L0ZlYXR1cmVIaWdobGlnaHQuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9EaXNjb3ZlcnlTdHJlYW1Db21wb25lbnRzL0ZlYXR1cmVIaWdobGlnaHQvRG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodC5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvRmVhdHVyZUhpZ2hsaWdodC9XYWxscGFwZXJGZWF0dXJlSGlnaGxpZ2h0LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvTWVzc2FnZVdyYXBwZXIvTWVzc2FnZVdyYXBwZXIuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9CYXNlL0Jhc2UuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvbGliL3BlcmYtc2VydmljZS5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9saWIvZGV0ZWN0LXVzZXItc2Vzc2lvbi1zdGFydC5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvZXh0ZXJuYWwgdmFyIFwiUmVkdXhcIiIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2xpYi9pbml0LXN0b3JlLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy9leHRlcm5hbCB2YXIgXCJSZWFjdERPTVwiIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4uLy4uL21vZHVsZXMvRGVkdXBlLnN5cy5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi4vLi4vY29tcG9uZW50cy90b3BzaXRlcy9jb25zdGFudHMubWpzIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29tbW9uL1JlZHVjZXJzLnN5cy5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9hY3Rpdml0eS1zdHJlYW0uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbi8vIFRoaXMgZmlsZSBpcyBhY2Nlc3NlZCBmcm9tIGJvdGggY29udGVudCBhbmQgc3lzdGVtIHNjb3Blcy5cblxuZXhwb3J0IGNvbnN0IE1BSU5fTUVTU0FHRV9UWVBFID0gXCJBY3Rpdml0eVN0cmVhbTpNYWluXCI7XG5leHBvcnQgY29uc3QgQ09OVEVOVF9NRVNTQUdFX1RZUEUgPSBcIkFjdGl2aXR5U3RyZWFtOkNvbnRlbnRcIjtcbmV4cG9ydCBjb25zdCBQUkVMT0FEX01FU1NBR0VfVFlQRSA9IFwiQWN0aXZpdHlTdHJlYW06UHJlbG9hZGVkQnJvd3NlclwiO1xuZXhwb3J0IGNvbnN0IFVJX0NPREUgPSAxO1xuZXhwb3J0IGNvbnN0IEJBQ0tHUk9VTkRfUFJPQ0VTUyA9IDI7XG5cbi8qKlxuICogZ2xvYmFsSW1wb3J0Q29udGV4dCAtIEFyZSB3ZSBpbiBVSSBjb2RlIChpLmUuIHJlYWN0LCBhIGRvbSkgb3Igc29tZSBraW5kIG9mIGJhY2tncm91bmQgcHJvY2Vzcz9cbiAqICAgICAgICAgICAgICAgICAgICAgICBVc2UgdGhpcyBpbiBhY3Rpb24gY3JlYXRvcnMgaWYgeW91IG5lZWQgZGlmZmVyZW50IGxvZ2ljXG4gKiAgICAgICAgICAgICAgICAgICAgICAgZm9yIHVpL2JhY2tncm91bmQgcHJvY2Vzc2VzLlxuICovXG5leHBvcnQgY29uc3QgZ2xvYmFsSW1wb3J0Q29udGV4dCA9XG4gIHR5cGVvZiBXaW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBCQUNLR1JPVU5EX1BST0NFU1MgOiBVSV9DT0RFO1xuXG4vLyBDcmVhdGUgYW4gb2JqZWN0IHRoYXQgYXZvaWRzIGFjY2lkZW50YWwgZGlmZmVyaW5nIGtleS92YWx1ZSBwYWlyczpcbi8vIHtcbi8vICAgSU5JVDogXCJJTklUXCIsXG4vLyAgIFVOSU5JVDogXCJVTklOSVRcIlxuLy8gfVxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge307XG5cbmZvciAoY29uc3QgdHlwZSBvZiBbXG4gIFwiQUJPVVRfU1BPTlNPUkVEX1RPUF9TSVRFU1wiLFxuICBcIkFERE9OU19JTkZPX1JFUVVFU1RcIixcbiAgXCJBRERPTlNfSU5GT19SRVNQT05TRVwiLFxuICBcIkFEU19GRUVEX1VQREFURVwiLFxuICBcIkFEU19JTklUXCIsXG4gIFwiQURTX1JFU0VUXCIsXG4gIFwiQURTX1VQREFURV9TUE9DU1wiLFxuICBcIkFEU19VUERBVEVfVElMRVNcIixcbiAgXCJCTE9DS19TRUNUSU9OXCIsXG4gIFwiQkxPQ0tfVVJMXCIsXG4gIFwiQk9PS01BUktfVVJMXCIsXG4gIFwiQ0FSRF9TRUNUSU9OX0lNUFJFU1NJT05cIixcbiAgXCJDTEVBUl9QUkVGXCIsXG4gIFwiQ09QWV9ET1dOTE9BRF9MSU5LXCIsXG4gIFwiREVMRVRFX0JPT0tNQVJLX0JZX0lEXCIsXG4gIFwiREVMRVRFX0hJU1RPUllfVVJMXCIsXG4gIFwiRElBTE9HX0NBTkNFTFwiLFxuICBcIkRJQUxPR19DTE9TRVwiLFxuICBcIkRJQUxPR19PUEVOXCIsXG4gIFwiRElTQUJMRV9TRUFSQ0hcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19DSEFOR0VcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19SRVNFVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1JFU0VUX0RFRkFVTFRTXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfU0VUVVBcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19TRVRfVkFMVUVcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9CTE9DS1NcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9CTE9DS1NfUkVTRVRcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9FWFBJUkVfQ0FDSEVcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9JRExFX0RBSUxZXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9ERVZfSU1QUkVTU0lPTlNcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9TSE9XX1BMQUNFSE9MREVSXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lOQ19SU1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX1NZU1RFTV9USUNLXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9FWFBFUklNRU5UX0RBVEFcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0ZFRURTX1VQREFURVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fRkVFRF9VUERBVEVcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0lNUFJFU1NJT05fU1RBVFNcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0xBWU9VVF9SRVNFVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fTEFZT1VUX1VQREFURVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fTElOS19CTE9DS0VEXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9MT0FERURfQ09OVEVOVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX0lOSVRcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9MQVNUX1VQREFURURcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9PVkVSUklERVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX1JFU0VUXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fVE9HR0xFXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fVVBEQVRFRFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUE9DS0VUX1NUQVRFX0lOSVRcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BPQ0tFVF9TVEFURV9TRVRcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BSRUZTX1NFVFVQXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9SRVRSWV9GRUVEXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9TUE9DU19DQVBTXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9TUE9DU19FTkRQT0lOVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfUExBQ0VNRU5UU1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfVVBEQVRFXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9TUE9DX0JMT0NLRURcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1NQT0NfSU1QUkVTU0lPTlwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fVE9QSUNTX0xPQURJTkdcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1VTRVJfRVZFTlRcIixcbiAgXCJET1dOTE9BRF9DSEFOR0VEXCIsXG4gIFwiRkFLRVNQT1RfQ1RBX0NMSUNLXCIsXG4gIFwiRkFLRVNQT1RfRElTTUlTU1wiLFxuICBcIkZBS0VfRk9DVVNfU0VBUkNIXCIsXG4gIFwiRklMTF9TRUFSQ0hfVEVSTVwiLFxuICBcIkZPTExPV19TRUNUSU9OXCIsXG4gIFwiSEFORE9GRl9TRUFSQ0hfVE9fQVdFU09NRUJBUlwiLFxuICBcIkhJREVfUEVSU09OQUxJWkVcIixcbiAgXCJISURFX1RPQVNUX01FU1NBR0VcIixcbiAgXCJJTkZFUlJFRF9QRVJTT05BTElaQVRJT05fTU9ERUxfVVBEQVRFXCIsXG4gIFwiSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1JFRlJFU0hcIixcbiAgXCJJTkZFUlJFRF9QRVJTT05BTElaQVRJT05fUkVTRVRcIixcbiAgXCJJTkZFUlJFRF9QRVJTT05BTElaQVRJT05fVVBEQVRFXCIsXG4gIFwiSU5JVFwiLFxuICBcIklOTElORV9TRUxFQ1RJT05fQ0xJQ0tcIixcbiAgXCJJTkxJTkVfU0VMRUNUSU9OX0lNUFJFU1NJT05cIixcbiAgXCJNRVNTQUdFX0JMT0NLXCIsXG4gIFwiTUVTU0FHRV9DTElDS1wiLFxuICBcIk1FU1NBR0VfRElTTUlTU1wiLFxuICBcIk1FU1NBR0VfSU1QUkVTU0lPTlwiLFxuICBcIk1FU1NBR0VfTk9USUZZX1ZJU0lCSUxJVFlcIixcbiAgXCJNRVNTQUdFX1NFVFwiLFxuICBcIk1FU1NBR0VfVE9HR0xFX1ZJU0lCSUxJVFlcIixcbiAgXCJORVdfVEFCX0lOSVRcIixcbiAgXCJORVdfVEFCX0lOSVRJQUxfU1RBVEVcIixcbiAgXCJORVdfVEFCX0xPQURcIixcbiAgXCJORVdfVEFCX1JFSFlEUkFURURcIixcbiAgXCJORVdfVEFCX1NUQVRFX1JFUVVFU1RcIixcbiAgXCJORVdfVEFCX1NUQVRFX1JFUVVFU1RfU1RBUlRVUENBQ0hFXCIsXG4gIFwiTkVXX1RBQl9TVEFURV9SRVFVRVNUX1dJVEhPVVRfU1RBUlRVUENBQ0hFXCIsXG4gIFwiTkVXX1RBQl9VTkxPQURcIixcbiAgXCJPUEVOX0FCT1VUX0ZBS0VTUE9UXCIsXG4gIFwiT1BFTl9ET1dOTE9BRF9GSUxFXCIsXG4gIFwiT1BFTl9MSU5LXCIsXG4gIFwiT1BFTl9ORVdfV0lORE9XXCIsXG4gIFwiT1BFTl9QUklWQVRFX1dJTkRPV1wiLFxuICBcIk9QRU5fV0VCRVhUX1NFVFRJTkdTXCIsXG4gIFwiUEFSVE5FUl9MSU5LX0FUVFJJQlVUSU9OXCIsXG4gIFwiUExBQ0VTX0JPT0tNQVJLU19SRU1PVkVEXCIsXG4gIFwiUExBQ0VTX0JPT0tNQVJLX0FEREVEXCIsXG4gIFwiUExBQ0VTX0hJU1RPUllfQ0xFQVJFRFwiLFxuICBcIlBMQUNFU19MSU5LU19DSEFOR0VEXCIsXG4gIFwiUExBQ0VTX0xJTktTX0RFTEVURURcIixcbiAgXCJQTEFDRVNfTElOS19CTE9DS0VEXCIsXG4gIFwiUE9DS0VUX0NUQVwiLFxuICBcIlBPQ0tFVF9MT0dHRURfSU5cIixcbiAgXCJQT0NLRVRfVEhVTUJTX0RPV05cIixcbiAgXCJQT0NLRVRfVEhVTUJTX1VQXCIsXG4gIFwiUE9DS0VUX1dBSVRJTkdfRk9SX1NQT0NcIixcbiAgXCJQUkVGU19JTklUSUFMX1ZBTFVFU1wiLFxuICBcIlBSRUZfQ0hBTkdFRFwiLFxuICBcIlBSRVZJRVdfUkVRVUVTVFwiLFxuICBcIlBSRVZJRVdfUkVRVUVTVF9DQU5DRUxcIixcbiAgXCJQUkVWSUVXX1JFU1BPTlNFXCIsXG4gIFwiUFJPTU9fQ0FSRF9DTElDS1wiLFxuICBcIlBST01PX0NBUkRfRElTTUlTU1wiLFxuICBcIlBST01PX0NBUkRfSU1QUkVTU0lPTlwiLFxuICBcIlJFTU9WRV9ET1dOTE9BRF9GSUxFXCIsXG4gIFwiUkVQT1JUX0FEX09QRU5cIixcbiAgXCJSRVBPUlRfQURfU1VCTUlUXCIsXG4gIFwiUkVQT1JUX0NMT1NFXCIsXG4gIFwiUkVQT1JUX0NPTlRFTlRfT1BFTlwiLFxuICBcIlJFUE9SVF9DT05URU5UX1NVQk1JVFwiLFxuICBcIlJJQ0hfSUNPTl9NSVNTSU5HXCIsXG4gIFwiU0FWRV9TRVNTSU9OX1BFUkZfREFUQVwiLFxuICBcIlNDUkVFTlNIT1RfVVBEQVRFRFwiLFxuICBcIlNFQ1RJT05fREVSRUdJU1RFUlwiLFxuICBcIlNFQ1RJT05fRElTQUJMRVwiLFxuICBcIlNFQ1RJT05fRU5BQkxFXCIsXG4gIFwiU0VDVElPTl9PUFRJT05TX0NIQU5HRURcIixcbiAgXCJTRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVRcIixcbiAgXCJTRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9VUERBVEVcIixcbiAgXCJTRUNUSU9OX1JFR0lTVEVSXCIsXG4gIFwiU0VDVElPTl9VUERBVEVcIixcbiAgXCJTRUNUSU9OX1VQREFURV9DQVJEXCIsXG4gIFwiU0VUVElOR1NfQ0xPU0VcIixcbiAgXCJTRVRUSU5HU19PUEVOXCIsXG4gIFwiU0VUX1BSRUZcIixcbiAgXCJTSE9XX0RPV05MT0FEX0ZJTEVcIixcbiAgXCJTSE9XX0ZJUkVGT1hfQUNDT1VOVFNcIixcbiAgXCJTSE9XX1BFUlNPTkFMSVpFXCIsXG4gIFwiU0hPV19QUklWQUNZX0lORk9cIixcbiAgXCJTSE9XX1NFQVJDSFwiLFxuICBcIlNIT1dfVE9BU1RfTUVTU0FHRVwiLFxuICBcIlNLSVBQRURfU0lHTklOXCIsXG4gIFwiU09WX1VQREFURURcIixcbiAgXCJTVUJNSVRfRU1BSUxcIixcbiAgXCJTVUJNSVRfU0lHTklOXCIsXG4gIFwiU1lTVEVNX1RJQ0tcIixcbiAgXCJURUxFTUVUUllfSU1QUkVTU0lPTl9TVEFUU1wiLFxuICBcIlRFTEVNRVRSWV9VU0VSX0VWRU5UXCIsXG4gIFwiVE9QSUNfU0VMRUNUSU9OX0lNUFJFU1NJT05cIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fTUFZQkVfTEFURVJcIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fU1BPVExJR0hUX0NMT1NFXCIsXG4gIFwiVE9QSUNfU0VMRUNUSU9OX1NQT1RMSUdIVF9PUEVOXCIsXG4gIFwiVE9QSUNfU0VMRUNUSU9OX1VTRVJfRElTTUlTU1wiLFxuICBcIlRPUElDX1NFTEVDVElPTl9VU0VSX09QRU5cIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fVVNFUl9TQVZFXCIsXG4gIFwiVE9QX1NJVEVTX0FERFwiLFxuICBcIlRPUF9TSVRFU19DQU5DRUxfRURJVFwiLFxuICBcIlRPUF9TSVRFU19DTE9TRV9TRUFSQ0hfU0hPUlRDVVRTX01PREFMXCIsXG4gIFwiVE9QX1NJVEVTX0VESVRcIixcbiAgXCJUT1BfU0lURVNfSU5TRVJUXCIsXG4gIFwiVE9QX1NJVEVTX09QRU5fU0VBUkNIX1NIT1JUQ1VUU19NT0RBTFwiLFxuICBcIlRPUF9TSVRFU19PUkdBTklDX0lNUFJFU1NJT05fU1RBVFNcIixcbiAgXCJUT1BfU0lURVNfUElOXCIsXG4gIFwiVE9QX1NJVEVTX1BSRUZTX1VQREFURURcIixcbiAgXCJUT1BfU0lURVNfU1BPTlNPUkVEX0lNUFJFU1NJT05fU1RBVFNcIixcbiAgXCJUT1BfU0lURVNfVU5QSU5cIixcbiAgXCJUT1BfU0lURVNfVVBEQVRFRFwiLFxuICBcIlRPVEFMX0JPT0tNQVJLU19SRVFVRVNUXCIsXG4gIFwiVE9UQUxfQk9PS01BUktTX1JFU1BPTlNFXCIsXG4gIFwiVFJFTkRJTkdfU0VBUkNIX0lNUFJFU1NJT05cIixcbiAgXCJUUkVORElOR19TRUFSQ0hfU1VHR0VTVElPTl9PUEVOXCIsXG4gIFwiVFJFTkRJTkdfU0VBUkNIX1RPR0dMRV9DT0xMQVBTRVwiLFxuICBcIlRSRU5ESU5HX1NFQVJDSF9VUERBVEVcIixcbiAgXCJVTkJMT0NLX1NFQ1RJT05cIixcbiAgXCJVTkZPTExPV19TRUNUSU9OXCIsXG4gIFwiVU5JTklUXCIsXG4gIFwiVVBEQVRFX1BJTk5FRF9TRUFSQ0hfU0hPUlRDVVRTXCIsXG4gIFwiVVBEQVRFX1NFQVJDSF9TSE9SVENVVFNcIixcbiAgXCJXQUxMUEFQRVJTX0NBVEVHT1JZX1NFVFwiLFxuICBcIldBTExQQVBFUlNfQ1VTVE9NX1NFVFwiLFxuICBcIldBTExQQVBFUlNfRkVBVFVSRV9ISUdITElHSFRfQ09VTlRFUl9JTkNSRU1FTlRcIixcbiAgXCJXQUxMUEFQRVJTX0ZFQVRVUkVfSElHSExJR0hUX0NUQV9DTElDS0VEXCIsXG4gIFwiV0FMTFBBUEVSU19GRUFUVVJFX0hJR0hMSUdIVF9ESVNNSVNTRURcIixcbiAgXCJXQUxMUEFQRVJTX0ZFQVRVUkVfSElHSExJR0hUX1NFRU5cIixcbiAgXCJXQUxMUEFQRVJTX1NFVFwiLFxuICBcIldBTExQQVBFUl9DQVRFR09SWV9DTElDS1wiLFxuICBcIldBTExQQVBFUl9DTElDS1wiLFxuICBcIldBTExQQVBFUl9SRU1PVkVfVVBMT0FEXCIsXG4gIFwiV0FMTFBBUEVSX1VQTE9BRFwiLFxuICBcIldFQVRIRVJfSU1QUkVTU0lPTlwiLFxuICBcIldFQVRIRVJfTE9BRF9FUlJPUlwiLFxuICBcIldFQVRIRVJfTE9DQVRJT05fREFUQV9VUERBVEVcIixcbiAgXCJXRUFUSEVSX0xPQ0FUSU9OX1NFQVJDSF9VUERBVEVcIixcbiAgXCJXRUFUSEVSX0xPQ0FUSU9OX1NVR0dFU1RJT05TX1VQREFURVwiLFxuICBcIldFQVRIRVJfT1BFTl9QUk9WSURFUl9VUkxcIixcbiAgXCJXRUFUSEVSX1FVRVJZX1VQREFURVwiLFxuICBcIldFQVRIRVJfU0VBUkNIX0FDVElWRVwiLFxuICBcIldFQVRIRVJfVVBEQVRFXCIsXG4gIFwiV0VCRVhUX0NMSUNLXCIsXG4gIFwiV0VCRVhUX0RJU01JU1NcIixcbiAgXCJXSURHRVRTX0xJU1RTX0NIQU5HRV9TRUxFQ1RFRFwiLFxuICBcIldJREdFVFNfTElTVFNfU0VUXCIsXG4gIFwiV0lER0VUU19MSVNUU19TRVRfU0VMRUNURURcIixcbiAgXCJXSURHRVRTX0xJU1RTX1VQREFURVwiLFxuICBcIldJREdFVFNfTElTVFNfVVNFUl9FVkVOVFwiLFxuICBcIldJREdFVFNfTElTVFNfVVNFUl9JTVBSRVNTSU9OXCIsXG4gIFwiV0lER0VUU19USU1FUl9FTkRcIixcbiAgXCJXSURHRVRTX1RJTUVSX1BBVVNFXCIsXG4gIFwiV0lER0VUU19USU1FUl9QTEFZXCIsXG4gIFwiV0lER0VUU19USU1FUl9SRVNFVFwiLFxuICBcIldJREdFVFNfVElNRVJfU0VUXCIsXG4gIFwiV0lER0VUU19USU1FUl9TRVRfRFVSQVRJT05cIixcbiAgXCJXSURHRVRTX1RJTUVSX1NFVF9UWVBFXCIsXG4gIFwiV0lER0VUU19USU1FUl9VU0VSX0VWRU5UXCIsXG4gIFwiV0lER0VUU19USU1FUl9VU0VSX0lNUFJFU1NJT05cIixcbl0pIHtcbiAgYWN0aW9uVHlwZXNbdHlwZV0gPSB0eXBlO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIHJvdXRlZCBhY3Rpb25zIGJldHdlZW4gY29udGVudCBhbmQgbWFpblxuLy8gTm90IGludGVuZGVkIHRvIGJlIHVzZWQgYnkgY29uc3VtZXJzXG5mdW5jdGlvbiBfUm91dGVNZXNzYWdlKGFjdGlvbiwgb3B0aW9ucykge1xuICBjb25zdCBtZXRhID0gYWN0aW9uLm1ldGEgPyB7IC4uLmFjdGlvbi5tZXRhIH0gOiB7fTtcbiAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLmZyb20gfHwgIW9wdGlvbnMudG8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIlJvdXRlZCBNZXNzYWdlcyBtdXN0IGhhdmUgb3B0aW9ucyBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlciwgYW5kIG11c3QgYXQgbGVhc3QgaW5jbHVkZSBhIC5mcm9tIGFuZCAudG8gcHJvcGVydHkuXCJcbiAgICApO1xuICB9XG4gIC8vIEZvciBlYWNoIG9mIHRoZXNlIGZpZWxkcywgaWYgdGhleSBhcmUgcGFzc2VkIGFzIGFuIG9wdGlvbixcbiAgLy8gYWRkIHRoZW0gdG8gdGhlIGFjdGlvbi4gSWYgdGhleSBhcmUgbm90IGRlZmluZWQsIHJlbW92ZSB0aGVtLlxuICBbXCJmcm9tXCIsIFwidG9cIiwgXCJ0b1RhcmdldFwiLCBcImZyb21UYXJnZXRcIiwgXCJza2lwTWFpblwiLCBcInNraXBMb2NhbFwiXS5mb3JFYWNoKFxuICAgIG8gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zW29dICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIG1ldGFbb10gPSBvcHRpb25zW29dO1xuICAgICAgfSBlbHNlIGlmIChtZXRhW29dKSB7XG4gICAgICAgIGRlbGV0ZSBtZXRhW29dO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHsgLi4uYWN0aW9uLCBtZXRhIH07XG59XG5cbi8qKlxuICogQWxzb1RvTWFpbiAtIENyZWF0ZXMgYSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBkaXNwYXRjaGVkIGxvY2FsbHkgYW5kIGFsc28gc2VudCB0byB0aGUgTWFpbiBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uIEFueSByZWR1eCBhY3Rpb24gKHJlcXVpcmVkKVxuICogQHBhcmFtICB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcGFyYW0gIHtib29sfSAgIHNraXBMb2NhbCBVc2VkIGJ5IE9ubHlUb01haW4gdG8gc2tpcCB0aGUgbWFpbiByZWR1Y2VyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGZyb21UYXJnZXQgVGhlIGlkIG9mIHRoZSBjb250ZW50IHBvcnQgZnJvbSB3aGljaCB0aGUgYWN0aW9uIG9yaWdpbmF0ZWQuIChvcHRpb25hbClcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gYWN0aW9uIHdpdGggYWRkZWQgLm1ldGEgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBBbHNvVG9NYWluKGFjdGlvbiwgZnJvbVRhcmdldCwgc2tpcExvY2FsKSB7XG4gIHJldHVybiBfUm91dGVNZXNzYWdlKGFjdGlvbiwge1xuICAgIGZyb206IENPTlRFTlRfTUVTU0FHRV9UWVBFLFxuICAgIHRvOiBNQUlOX01FU1NBR0VfVFlQRSxcbiAgICBmcm9tVGFyZ2V0LFxuICAgIHNraXBMb2NhbCxcbiAgfSk7XG59XG5cbi8qKlxuICogT25seVRvTWFpbiAtIENyZWF0ZXMgYSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBzZW50IHRvIHRoZSBNYWluIHByb2Nlc3MgYW5kIHNraXAgdGhlIGxvY2FsIHJlZHVjZXIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb24gQW55IHJlZHV4IGFjdGlvbiAocmVxdWlyZWQpXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSAge3N0cmluZ30gZnJvbVRhcmdldCBUaGUgaWQgb2YgdGhlIGNvbnRlbnQgcG9ydCBmcm9tIHdoaWNoIHRoZSBhY3Rpb24gb3JpZ2luYXRlZC4gKG9wdGlvbmFsKVxuICogQHJldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24gd2l0aCBhZGRlZCAubWV0YSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIE9ubHlUb01haW4oYWN0aW9uLCBmcm9tVGFyZ2V0KSB7XG4gIHJldHVybiBBbHNvVG9NYWluKGFjdGlvbiwgZnJvbVRhcmdldCwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQnJvYWRjYXN0VG9Db250ZW50IC0gQ3JlYXRlcyBhIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIGRpc3BhdGNoZWQgdG8gbWFpbiBhbmQgc2VudCB0byBBTEwgY29udGVudCBwcm9jZXNzZXMuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb24gQW55IHJlZHV4IGFjdGlvbiAocmVxdWlyZWQpXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMgKG9wdGlvbmFsKVxuICogQHJldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24gd2l0aCBhZGRlZCAubWV0YSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIEJyb2FkY2FzdFRvQ29udGVudChhY3Rpb24sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIF9Sb3V0ZU1lc3NhZ2UoYWN0aW9uLCB7XG4gICAgZnJvbTogTUFJTl9NRVNTQUdFX1RZUEUsXG4gICAgdG86IENPTlRFTlRfTUVTU0FHRV9UWVBFLFxuICAgIC4uLm9wdGlvbnMsXG4gIH0pO1xufVxuXG4vKipcbiAqIEFsc29Ub09uZUNvbnRlbnQgLSBDcmVhdGVzIGEgbWVzc2FnZSB0aGF0IHdpbGwgYmUgd2lsbCBiZSBkaXNwYXRjaGVkIHRvIHRoZSBtYWluIHN0b3JlXG4gKiAgICAgICAgICAgICAgICAgICAgYW5kIGFsc28gc2VudCB0byBhIHBhcnRpY3VsYXIgQ29udGVudCBwcm9jZXNzLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uIEFueSByZWR1eCBhY3Rpb24gKHJlcXVpcmVkKVxuICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXQgVGhlIGlkIG9mIGEgY29udGVudCBwb3J0XG4gKiBAcGFyYW0gIHtib29sfSBza2lwTWFpbiBVc2VkIGJ5IE9ubHlUb09uZUNvbnRlbnQgdG8gc2tpcCB0aGUgbWFpbiBwcm9jZXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbiB3aXRoIGFkZGVkIC5tZXRhIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gQWxzb1RvT25lQ29udGVudChhY3Rpb24sIHRhcmdldCwgc2tpcE1haW4pIHtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBcIllvdSBtdXN0IHByb3ZpZGUgYSB0YXJnZXQgSUQgYXMgdGhlIHNlY29uZCBwYXJhbWV0ZXIgb2YgQWxzb1RvT25lQ29udGVudC4gSWYgeW91IHdhbnQgdG8gc2VuZCB0byBhbGwgY29udGVudCBwcm9jZXNzZXMsIHVzZSBCcm9hZGNhc3RUb0NvbnRlbnRcIlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIF9Sb3V0ZU1lc3NhZ2UoYWN0aW9uLCB7XG4gICAgZnJvbTogTUFJTl9NRVNTQUdFX1RZUEUsXG4gICAgdG86IENPTlRFTlRfTUVTU0FHRV9UWVBFLFxuICAgIHRvVGFyZ2V0OiB0YXJnZXQsXG4gICAgc2tpcE1haW4sXG4gIH0pO1xufVxuXG4vKipcbiAqIE9ubHlUb09uZUNvbnRlbnQgLSBDcmVhdGVzIGEgbWVzc2FnZSB0aGF0IHdpbGwgYmUgc2VudCB0byBhIHBhcnRpY3VsYXIgQ29udGVudCBwcm9jZXNzXG4gKiAgICAgICAgICAgICAgICAgICAgYW5kIHNraXAgdGhlIG1haW4gcmVkdWNlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbiBBbnkgcmVkdXggYWN0aW9uIChyZXF1aXJlZClcbiAqIEBwYXJhbSAge3N0cmluZ30gdGFyZ2V0IFRoZSBpZCBvZiBhIGNvbnRlbnQgcG9ydFxuICogQHJldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24gd2l0aCBhZGRlZCAubWV0YSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIE9ubHlUb09uZUNvbnRlbnQoYWN0aW9uLCB0YXJnZXQpIHtcbiAgcmV0dXJuIEFsc29Ub09uZUNvbnRlbnQoYWN0aW9uLCB0YXJnZXQsIHRydWUpO1xufVxuXG4vKipcbiAqIEFsc29Ub1ByZWxvYWRlZCAtIENyZWF0ZXMgYSBtZXNzYWdlIHRoYXQgZGlzcGF0Y2hlZCB0byB0aGUgbWFpbiByZWR1Y2VyIGFuZCBhbHNvIHNlbnQgdG8gdGhlIHByZWxvYWRlZCB0YWIuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb24gQW55IHJlZHV4IGFjdGlvbiAocmVxdWlyZWQpXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbiB3aXRoIGFkZGVkIC5tZXRhIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gQWxzb1RvUHJlbG9hZGVkKGFjdGlvbikge1xuICByZXR1cm4gX1JvdXRlTWVzc2FnZShhY3Rpb24sIHtcbiAgICBmcm9tOiBNQUlOX01FU1NBR0VfVFlQRSxcbiAgICB0bzogUFJFTE9BRF9NRVNTQUdFX1RZUEUsXG4gIH0pO1xufVxuXG4vKipcbiAqIFVzZXJFdmVudCAtIEEgdGVsZW1ldHJ5IHBpbmcgaW5kaWNhdGluZyBhIHVzZXIgYWN0aW9uLiBUaGlzIHNob3VsZCBvbmx5XG4gKiAgICAgICAgICAgICAgICAgICBiZSBzZW50IGZyb20gdGhlIFVJIGR1cmluZyBhIHVzZXIgc2Vzc2lvbi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGEgRmllbGRzIHRvIGluY2x1ZGUgaW4gdGhlIHBpbmcgKHNvdXJjZSwgZXRjLilcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gQWxzb1RvTWFpbiBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gVXNlckV2ZW50KGRhdGEpIHtcbiAgcmV0dXJuIEFsc29Ub01haW4oe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlRFTEVNRVRSWV9VU0VSX0VWRU5ULFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG4vKipcbiAqIERpc2NvdmVyeVN0cmVhbVVzZXJFdmVudCAtIEEgdGVsZW1ldHJ5IHBpbmcgaW5kaWNhdGluZyBhIHVzZXIgYWN0aW9uIGZyb20gRGlzY292ZXJ5IFN0cmVhbS4gVGhpcyBzaG91bGQgb25seVxuICogICAgICAgICAgICAgICAgICAgICBiZSBzZW50IGZyb20gdGhlIFVJIGR1cmluZyBhIHVzZXIgc2Vzc2lvbi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGEgRmllbGRzIHRvIGluY2x1ZGUgaW4gdGhlIHBpbmcgKHNvdXJjZSwgZXRjLilcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gQWxzb1RvTWFpbiBhY3Rpb25cbiAqL1xuZnVuY3Rpb24gRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50KGRhdGEpIHtcbiAgcmV0dXJuIEFsc29Ub01haW4oe1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkRJU0NPVkVSWV9TVFJFQU1fVVNFUl9FVkVOVCxcbiAgICBkYXRhLFxuICB9KTtcbn1cblxuLyoqXG4gKiBJbXByZXNzaW9uU3RhdHMgLSBBIHRlbGVtZXRyeSBwaW5nIGluZGljYXRpbmcgYW4gaW1wcmVzc2lvbiBzdGF0cy5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGRhdGEgRmllbGRzIHRvIGluY2x1ZGUgaW4gdGhlIHBpbmdcbiAqIEBwYXJhbSAge2ludH0gaW1wb3J0Q29udGV4dCAoRm9yIHRlc3RpbmcpIE92ZXJyaWRlIHRoZSBpbXBvcnQgY29udGV4dCBmb3IgdGVzdGluZy5cbiAqICNyZXR1cm4ge29iamVjdH0gQW4gYWN0aW9uLiBGb3IgVUkgY29kZSwgYSBBbHNvVG9NYWluIGFjdGlvbi5cbiAqL1xuZnVuY3Rpb24gSW1wcmVzc2lvblN0YXRzKGRhdGEsIGltcG9ydENvbnRleHQgPSBnbG9iYWxJbXBvcnRDb250ZXh0KSB7XG4gIGNvbnN0IGFjdGlvbiA9IHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5URUxFTUVUUllfSU1QUkVTU0lPTl9TVEFUUyxcbiAgICBkYXRhLFxuICB9O1xuICByZXR1cm4gaW1wb3J0Q29udGV4dCA9PT0gVUlfQ09ERSA/IEFsc29Ub01haW4oYWN0aW9uKSA6IGFjdGlvbjtcbn1cblxuLyoqXG4gKiBEaXNjb3ZlcnlTdHJlYW1JbXByZXNzaW9uU3RhdHMgLSBBIHRlbGVtZXRyeSBwaW5nIGluZGljYXRpbmcgYW4gaW1wcmVzc2lvbiBzdGF0cyBpbiBEaXNjb3ZlcnkgU3RyZWFtLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBGaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGluZ1xuICogQHBhcmFtICB7aW50fSBpbXBvcnRDb250ZXh0IChGb3IgdGVzdGluZykgT3ZlcnJpZGUgdGhlIGltcG9ydCBjb250ZXh0IGZvciB0ZXN0aW5nLlxuICogI3JldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24uIEZvciBVSSBjb2RlLCBhIEFsc29Ub01haW4gYWN0aW9uLlxuICovXG5mdW5jdGlvbiBEaXNjb3ZlcnlTdHJlYW1JbXByZXNzaW9uU3RhdHMoXG4gIGRhdGEsXG4gIGltcG9ydENvbnRleHQgPSBnbG9iYWxJbXBvcnRDb250ZXh0XG4pIHtcbiAgY29uc3QgYWN0aW9uID0ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkRJU0NPVkVSWV9TVFJFQU1fSU1QUkVTU0lPTl9TVEFUUyxcbiAgICBkYXRhLFxuICB9O1xuICByZXR1cm4gaW1wb3J0Q29udGV4dCA9PT0gVUlfQ09ERSA/IEFsc29Ub01haW4oYWN0aW9uKSA6IGFjdGlvbjtcbn1cblxuLyoqXG4gKiBEaXNjb3ZlcnlTdHJlYW1Mb2FkZWRDb250ZW50IC0gQSB0ZWxlbWV0cnkgcGluZyBpbmRpY2F0aW5nIGEgY29udGVudCBnZXRzIGxvYWRlZCBpbiBEaXNjb3ZlcnkgU3RyZWFtLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBGaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGluZ1xuICogQHBhcmFtICB7aW50fSBpbXBvcnRDb250ZXh0IChGb3IgdGVzdGluZykgT3ZlcnJpZGUgdGhlIGltcG9ydCBjb250ZXh0IGZvciB0ZXN0aW5nLlxuICogI3JldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24uIEZvciBVSSBjb2RlLCBhIEFsc29Ub01haW4gYWN0aW9uLlxuICovXG5mdW5jdGlvbiBEaXNjb3ZlcnlTdHJlYW1Mb2FkZWRDb250ZW50KFxuICBkYXRhLFxuICBpbXBvcnRDb250ZXh0ID0gZ2xvYmFsSW1wb3J0Q29udGV4dFxuKSB7XG4gIGNvbnN0IGFjdGlvbiA9IHtcbiAgICB0eXBlOiBhY3Rpb25UeXBlcy5ESVNDT1ZFUllfU1RSRUFNX0xPQURFRF9DT05URU5ULFxuICAgIGRhdGEsXG4gIH07XG4gIHJldHVybiBpbXBvcnRDb250ZXh0ID09PSBVSV9DT0RFID8gQWxzb1RvTWFpbihhY3Rpb24pIDogYWN0aW9uO1xufVxuXG5mdW5jdGlvbiBTZXRQcmVmKHByZWZOYW1lLCB2YWx1ZSwgaW1wb3J0Q29udGV4dCA9IGdsb2JhbEltcG9ydENvbnRleHQpIHtcbiAgY29uc3QgYWN0aW9uID0ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlNFVF9QUkVGLFxuICAgIGRhdGE6IHsgbmFtZTogcHJlZk5hbWUsIHZhbHVlIH0sXG4gIH07XG4gIHJldHVybiBpbXBvcnRDb250ZXh0ID09PSBVSV9DT0RFID8gQWxzb1RvTWFpbihhY3Rpb24pIDogYWN0aW9uO1xufVxuXG5mdW5jdGlvbiBXZWJFeHRFdmVudCh0eXBlLCBkYXRhLCBpbXBvcnRDb250ZXh0ID0gZ2xvYmFsSW1wb3J0Q29udGV4dCkge1xuICBpZiAoIWRhdGEgfHwgIWRhdGEuc291cmNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1dlYkV4dEV2ZW50IGFjdGlvbnMgc2hvdWxkIGluY2x1ZGUgYSBwcm9wZXJ0eSBcInNvdXJjZVwiLCB0aGUgaWQgb2YgdGhlIHdlYmV4dGVuc2lvbiB0aGF0IHNob3VsZCByZWNlaXZlIHRoZSBldmVudC4nXG4gICAgKTtcbiAgfVxuICBjb25zdCBhY3Rpb24gPSB7IHR5cGUsIGRhdGEgfTtcbiAgcmV0dXJuIGltcG9ydENvbnRleHQgPT09IFVJX0NPREUgPyBBbHNvVG9NYWluKGFjdGlvbikgOiBhY3Rpb247XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25DcmVhdG9ycyA9IHtcbiAgQnJvYWRjYXN0VG9Db250ZW50LFxuICBVc2VyRXZlbnQsXG4gIERpc2NvdmVyeVN0cmVhbVVzZXJFdmVudCxcbiAgSW1wcmVzc2lvblN0YXRzLFxuICBBbHNvVG9PbmVDb250ZW50LFxuICBPbmx5VG9PbmVDb250ZW50LFxuICBBbHNvVG9NYWluLFxuICBPbmx5VG9NYWluLFxuICBBbHNvVG9QcmVsb2FkZWQsXG4gIFNldFByZWYsXG4gIFdlYkV4dEV2ZW50LFxuICBEaXNjb3ZlcnlTdHJlYW1JbXByZXNzaW9uU3RhdHMsXG4gIERpc2NvdmVyeVN0cmVhbUxvYWRlZENvbnRlbnQsXG59O1xuXG4vLyBUaGVzZSBhcmUgaGVscGVycyB0byB0ZXN0IGZvciBjZXJ0YWluIGtpbmRzIG9mIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBhY3Rpb25VdGlscyA9IHtcbiAgaXNTZW5kVG9NYWluKGFjdGlvbikge1xuICAgIGlmICghYWN0aW9uLm1ldGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGFjdGlvbi5tZXRhLnRvID09PSBNQUlOX01FU1NBR0VfVFlQRSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZnJvbSA9PT0gQ09OVEVOVF9NRVNTQUdFX1RZUEVcbiAgICApO1xuICB9LFxuICBpc0Jyb2FkY2FzdFRvQ29udGVudChhY3Rpb24pIHtcbiAgICBpZiAoIWFjdGlvbi5tZXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ubWV0YS50byA9PT0gQ09OVEVOVF9NRVNTQUdFX1RZUEUgJiYgIWFjdGlvbi5tZXRhLnRvVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBpc1NlbmRUb09uZUNvbnRlbnQoYWN0aW9uKSB7XG4gICAgaWYgKCFhY3Rpb24ubWV0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLm1ldGEudG8gPT09IENPTlRFTlRfTUVTU0FHRV9UWVBFICYmIGFjdGlvbi5tZXRhLnRvVGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuICBpc1NlbmRUb1ByZWxvYWRlZChhY3Rpb24pIHtcbiAgICBpZiAoIWFjdGlvbi5tZXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBhY3Rpb24ubWV0YS50byA9PT0gUFJFTE9BRF9NRVNTQUdFX1RZUEUgJiZcbiAgICAgIGFjdGlvbi5tZXRhLmZyb20gPT09IE1BSU5fTUVTU0FHRV9UWVBFXG4gICAgKTtcbiAgfSxcbiAgaXNGcm9tTWFpbihhY3Rpb24pIHtcbiAgICBpZiAoIWFjdGlvbi5tZXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBhY3Rpb24ubWV0YS5mcm9tID09PSBNQUlOX01FU1NBR0VfVFlQRSAmJlxuICAgICAgYWN0aW9uLm1ldGEudG8gPT09IENPTlRFTlRfTUVTU0FHRV9UWVBFXG4gICAgKTtcbiAgfSxcbiAgZ2V0UG9ydElkT2ZTZW5kZXIoYWN0aW9uKSB7XG4gICAgcmV0dXJuIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5mcm9tVGFyZ2V0KSB8fCBudWxsO1xuICB9LFxuICBfUm91dGVNZXNzYWdlLFxufTtcbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBSZWFjdFJlZHV4OyIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBSZWFjdDsiLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVIYXNoUm91dGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25IYXNoQ2hhbmdlID0gdGhpcy5vbkhhc2hDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNoOiBnbG9iYWxUaGlzLmxvY2F0aW9uLmhhc2ggfTtcbiAgfVxuXG4gIG9uSGFzaENoYW5nZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzaDogZ2xvYmFsVGhpcy5sb2NhdGlvbi5oYXNoIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgdGhpcy5vbkhhc2hDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZ2xvYmFsVGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCB0aGlzLm9uSGFzaENoYW5nZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgWywgLi4ucm91dGVzXSA9IHRoaXMuc3RhdGUuaGFzaC5zcGxpdChcIi1cIik7XG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0aGlzLnByb3BzLmNoaWxkcmVuLCB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBoYXNoOiB0aGlzLnN0YXRlLmhhc2gsXG4gICAgICAgIHJvdXRlcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNpbXBsZUhhc2hSb3V0ZXIgfSBmcm9tIFwiLi9TaW1wbGVIYXNoUm91dGVyXCI7XG5cbi8vIFByZWYgQ29uc3RhbnRzXG5jb25zdCBQUkVGX0FEX1NJWkVfTUVESVVNX1JFQ1RBTkdMRSA9IFwibmV3dGFiQWRTaXplLm1lZGl1bVJlY3RhbmdsZVwiO1xuY29uc3QgUFJFRl9BRF9TSVpFX0JJTExCT0FSRCA9IFwibmV3dGFiQWRTaXplLmJpbGxib2FyZFwiO1xuY29uc3QgUFJFRl9BRF9TSVpFX0xFQURFUkJPQVJEID0gXCJuZXd0YWJBZFNpemUubGVhZGVyYm9hcmRcIjtcbmNvbnN0IFBSRUZfQ09OVEVYVFVBTF9DT05URU5UX1NFTEVDVEVEX0ZFRUQgPVxuICBcImRpc2NvdmVyeXN0cmVhbS5jb250ZXh0dWFsQ29udGVudC5zZWxlY3RlZEZlZWRcIjtcbmNvbnN0IFBSRUZfQ09OVEVYVFVBTF9DT05URU5UX0ZFRURTID0gXCJkaXNjb3ZlcnlzdHJlYW0uY29udGV4dHVhbENvbnRlbnQuZmVlZHNcIjtcbmNvbnN0IFBSRUZfU0VDVElPTlNfRU5BQkxFRCA9IFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmVuYWJsZWRcIjtcbmNvbnN0IFBSRUZfU1BPQ19QTEFDRU1FTlRTID0gXCJkaXNjb3ZlcnlzdHJlYW0ucGxhY2VtZW50cy5zcG9jc1wiO1xuY29uc3QgUFJFRl9TUE9DX0NPVU5UUyA9IFwiZGlzY292ZXJ5c3RyZWFtLnBsYWNlbWVudHMuc3BvY3MuY291bnRzXCI7XG5jb25zdCBQUkVGX0NPTlRFWFRVQUxfQURTX0VOQUJMRUQgPVxuICBcImRpc2NvdmVyeXN0cmVhbS5zZWN0aW9ucy5jb250ZXh0dWFsQWRzLmVuYWJsZWRcIjtcbmNvbnN0IFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfUExBQ0VNRU5UUyA9XG4gIFwiZGlzY292ZXJ5c3RyZWFtLnBsYWNlbWVudHMuY29udGV4dHVhbEJhbm5lcnNcIjtcbmNvbnN0IFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfQ09VTlRTID1cbiAgXCJkaXNjb3ZlcnlzdHJlYW0ucGxhY2VtZW50cy5jb250ZXh0dWFsQmFubmVycy5jb3VudHNcIjtcblxuY29uc3QgUm93ID0gcHJvcHMgPT4gKFxuICA8dHIgY2xhc3NOYW1lPVwibWVzc2FnZS1pdGVtXCIgey4uLnByb3BzfT5cbiAgICB7cHJvcHMuY2hpbGRyZW59XG4gIDwvdHI+XG4pO1xuXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWUodGltZXN0YW1wKSB7XG4gIGlmICghdGltZXN0YW1wKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aW1lc3RhbXApIC8gMTAwMCk7XG4gIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gdGltZXN0YW1wKSAvIDYwMDAwKTtcbiAgaWYgKHNlY29uZHMgPCAyKSB7XG4gICAgcmV0dXJuIFwianVzdCBub3dcIjtcbiAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICByZXR1cm4gYCR7c2Vjb25kc30gc2Vjb25kcyBhZ29gO1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPT09IDEpIHtcbiAgICByZXR1cm4gXCIxIG1pbnV0ZSBhZ29cIjtcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjAwKSB7XG4gICAgcmV0dXJuIGAke21pbnV0ZXN9IG1pbnV0ZXMgYWdvYDtcbiAgfVxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygpO1xufVxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlU3RvcnlCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLnN0b3J5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5jb2xsYXBzZS9vcGVuPC9idXR0b24+O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVQcmVmQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLnByb3BzLnByZWYsIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgIC8+e1wiIFwifVxuICAgICAgICB7dGhpcy5wcm9wcy5wcmVmfXtcIiBcIn1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnRvZ2dsZVBlcnNvbmFsaXphdGlvbiA9IHRoaXMudG9nZ2xlUGVyc29uYWxpemF0aW9uLmJpbmQodGhpcyk7XG4gIH1cblxuICB0b2dnbGVQZXJzb25hbGl6YXRpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5ESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9UT0dHTEUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYXN0VXBkYXRlZCwgaW5pdGlhbGl6ZWQgfSA9IHRoaXMucHJvcHMuc3RhdGUuUGVyc29uYWxpemF0aW9uO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8dGQgY29sU3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICA8VG9nZ2xlUHJlZkNoZWNrYm94XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLnBlcnNvbmFsaXplZH1cbiAgICAgICAgICAgICAgICAgIHByZWY9XCJwZXJzb25hbGl6ZWRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlUGVyc29uYWxpemF0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5QZXJzb25hbGl6YXRpb24gTGFzdCBVcGRhdGVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntyZWxhdGl2ZVRpbWUobGFzdFVwZGF0ZWQpIHx8IFwiKG5vIGRhdGEpXCJ9PC90ZD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPlBlcnNvbmFsaXphdGlvbiBJbml0aWFsaXplZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57aW5pdGlhbGl6ZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L3RkPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlzY292ZXJ5U3RyZWFtQWRtaW5VSSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnJlc3RvcmVQcmVmRGVmYXVsdHMgPSB0aGlzLnJlc3RvcmVQcmVmRGVmYXVsdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldENvbmZpZ1ZhbHVlID0gdGhpcy5zZXRDb25maWdWYWx1ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZXhwaXJlQ2FjaGUgPSB0aGlzLmV4cGlyZUNhY2hlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoQ2FjaGUgPSB0aGlzLnJlZnJlc2hDYWNoZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyID0gdGhpcy5zaG93UGxhY2Vob2xkZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmlkbGVEYWlseSA9IHRoaXMuaWRsZURhaWx5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zeXN0ZW1UaWNrID0gdGhpcy5zeXN0ZW1UaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zeW5jUmVtb3RlU2V0dGluZ3MgPSB0aGlzLnN5bmNSZW1vdGVTZXR0aW5ncy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TdG9yeVRvZ2dsZSA9IHRoaXMub25TdG9yeVRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlV2VhdGhlclN1Ym1pdCA9IHRoaXMuaGFuZGxlV2VhdGhlclN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlV2VhdGhlclVwZGF0ZSA9IHRoaXMuaGFuZGxlV2VhdGhlclVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVzZXRCbG9ja3MgPSB0aGlzLnJlc2V0QmxvY2tzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZWZyZXNoSW5mZXJyZWRQZXJzb25hbGl6YXRpb24gPVxuICAgICAgdGhpcy5yZWZyZXNoSW5mZXJyZWRQZXJzb25hbGl6YXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hUb3BpY1NlbGVjdGlvbkNhY2hlID1cbiAgICAgIHRoaXMucmVmcmVzaFRvcGljU2VsZWN0aW9uQ2FjaGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZVRCUkZlZWQgPSB0aGlzLnRvZ2dsZVRCUkZlZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVNlY3Rpb25zVG9nZ2xlID0gdGhpcy5oYW5kbGVTZWN0aW9uc1RvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlSUFCQmFubmVycyA9IHRoaXMudG9nZ2xlSUFCQmFubmVycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0b2dnbGVkU3Rvcmllczoge30sXG4gICAgICB3ZWF0aGVyUXVlcnk6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIHNldENvbmZpZ1ZhbHVlKGNvbmZpZ05hbWUsIGNvbmZpZ1ZhbHVlKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5ESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19TRVRfVkFMVUUsXG4gICAgICAgIGRhdGE6IHsgbmFtZTogY29uZmlnTmFtZSwgdmFsdWU6IGNvbmZpZ1ZhbHVlIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXN0b3JlUHJlZkRlZmF1bHRzKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfUkVTRVRfREVGQVVMVFMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoQ2FjaGUoKSB7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfQ0hBTkdFLFxuICAgICAgICBkYXRhOiBjb25maWcsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZWZyZXNoSW5mZXJyZWRQZXJzb25hbGl6YXRpb24oKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fUkVGUkVTSCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hUb3BpY1NlbGVjdGlvbkNhY2hlKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5TZXRQcmVmKFwiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcuZGlzcGxheUNvdW50XCIsIDApXG4gICAgKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuU2V0UHJlZihcImRpc2NvdmVyeXN0cmVhbS50b3BpY1NlbGVjdGlvbi5vbmJvYXJkaW5nLm1heWJlRGlzcGxheVwiLCB0cnVlKVxuICAgICk7XG4gIH1cblxuICBkaXNwYXRjaFNpbXBsZUFjdGlvbih0eXBlKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRCbG9ja3MoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9CTE9DS1NfUkVTRVQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBzeXN0ZW1UaWNrKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hTaW1wbGVBY3Rpb24oYXQuRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lTVEVNX1RJQ0spO1xuICB9XG5cbiAgZXhwaXJlQ2FjaGUoKSB7XG4gICAgdGhpcy5kaXNwYXRjaFNpbXBsZUFjdGlvbihhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9FWFBJUkVfQ0FDSEUpO1xuICB9XG5cbiAgc2hvd1BsYWNlaG9sZGVyKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hTaW1wbGVBY3Rpb24oYXQuRElTQ09WRVJZX1NUUkVBTV9ERVZfU0hPV19QTEFDRUhPTERFUik7XG4gIH1cblxuICB0b2dnbGVUQlJGZWVkKGUpIHtcbiAgICBjb25zdCBmZWVkID0gZS50YXJnZXQudmFsdWU7XG4gICAgY29uc3Qgc2VsZWN0ZWRGZWVkID0gUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfU0VMRUNURURfRkVFRDtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoc2VsZWN0ZWRGZWVkLCBmZWVkKSk7XG4gIH1cblxuICBpZGxlRGFpbHkoKSB7XG4gICAgdGhpcy5kaXNwYXRjaFNpbXBsZUFjdGlvbihhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9JRExFX0RBSUxZKTtcbiAgfVxuXG4gIHN5bmNSZW1vdGVTZXR0aW5ncygpIHtcbiAgICB0aGlzLmRpc3BhdGNoU2ltcGxlQWN0aW9uKGF0LkRJU0NPVkVSWV9TVFJFQU1fREVWX1NZTkNfUlMpO1xuICB9XG5cbiAgaGFuZGxlV2VhdGhlclVwZGF0ZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHdlYXRoZXJRdWVyeTogZS50YXJnZXQudmFsdWUgfHwgXCJcIiB9KTtcbiAgfVxuXG4gIGhhbmRsZVdlYXRoZXJTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHdlYXRoZXJRdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoXCJ3ZWF0aGVyLnF1ZXJ5XCIsIHdlYXRoZXJRdWVyeSkpO1xuICB9XG5cbiAgdG9nZ2xlSUFCQmFubmVycyhlKSB7XG4gICAgY29uc3QgeyBwcmVzc2VkLCBpZCB9ID0gZS50YXJnZXQ7XG5cbiAgICAvLyBTZXQgdGhlIGFjdGl2ZSBwcmVmIHRvIHRydWUvZmFsc2VcbiAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICBjYXNlIFwibmV3dGFiX2JpbGxib2FyZFwiOlxuICAgICAgICAvLyBVcGRhdGUgYm9vbGVhbiBwcmVmIGZvciBiaWxsYm9hcmQgYWQgc2l6ZVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9BRF9TSVpFX0JJTExCT0FSRCwgcHJlc3NlZCkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm5ld3RhYl9sZWFkZXJib2FyZFwiOlxuICAgICAgICAvLyBVcGRhdGUgYm9vbGVhbiBwcmVmIGZvciBiaWxsYm9hcmQgYWQgc2l6ZVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9BRF9TSVpFX0xFQURFUkJPQVJELCBwcmVzc2VkKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibmV3dGFiX3JlY3RhbmdsZVwiOlxuICAgICAgICAvLyBVcGRhdGUgYm9vbGVhbiBwcmVmIGZvciBtZWRpdW1SZWN0YW5nbGUgKE1SRUMpIGFkIHNpemVcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfQURfU0laRV9NRURJVU1fUkVDVEFOR0xFLCBwcmVzc2VkKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gTm90ZTogVGhlIGNvdW50cyBhcnJheSBpcyBwYXNzaXZlbHkgdXBkYXRlZCB3aGVuZXZlciB0aGUgcGxhY2VtZW50cyBhcnJheSBpcyB1cGRhdGVkLlxuICAgIC8vIFRoZSBkZWZhdWx0IHByZWYgdmFsdWVzIGZvciBlYWNoIGFyZTpcbiAgICAvLyBQUkVGX1NQT0NfUExBQ0VNRU5UUzogXCJuZXd0YWJfc3BvY3NcIlxuICAgIC8vIFBSRUZfU1BPQ19DT1VOVFM6IFwiNlwiXG4gICAgY29uc3QgZ2VuZXJhdGVTcG9jUHJlZlZhbHVlcyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudHMgPVxuICAgICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9TUE9DX1BMQUNFTUVOVFNdPy5zcGxpdChcIixcIilcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbS50cmltKCkpXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pIHx8IFtdO1xuXG4gICAgICBjb25zdCBjb3VudHMgPVxuICAgICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9TUE9DX0NPVU5UU10/LnNwbGl0KFwiLFwiKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSlcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSkgfHwgW107XG5cbiAgICAgIC8vIENvbmZpcm0gdGhhdCB0aGUgSUFCIHR5cGUgd2lsbCBoYXZlIGEgY291bnQgdmFsdWUgb2YgXCIxXCJcbiAgICAgIGNvbnN0IHN1cHBvcnRJQUJBZFR5cGVzID0gW1xuICAgICAgICBcIm5ld3RhYl9sZWFkZXJib2FyZFwiLFxuICAgICAgICBcIm5ld3RhYl9yZWN0YW5nbGVcIixcbiAgICAgICAgXCJuZXd0YWJfYmlsbGJvYXJkXCIsXG4gICAgICBdO1xuICAgICAgbGV0IGNvdW50VmFsdWU7XG4gICAgICBpZiAoc3VwcG9ydElBQkFkVHlwZXMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIGNvdW50VmFsdWUgPSBcIjFcIjsgLy8gRGVmYXVsdCBjb3VudCB2YWx1ZSBmb3IgYWxsIElBQiBhZCB0eXBlc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSUFCIGFkIHR5cGUgbm90IHN1cHBvcnRlZFwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZXNzZWQpIHtcbiAgICAgICAgLy8gSWYgcHJlc3NlZCBpcyB0cnVlLCBhZGQgdGhlIGlkIHRvIHRoZSBwbGFjZW1lbnRzIGFycmF5XG4gICAgICAgIGlmICghcGxhY2VtZW50cy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICBwbGFjZW1lbnRzLnB1c2goaWQpO1xuICAgICAgICAgIGNvdW50cy5wdXNoKGNvdW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBwcmVzc2VkIGlzIGZhbHNlLCByZW1vdmUgdGhlIGlkIGZyb20gdGhlIHBsYWNlbWVudHMgYXJyYXlcbiAgICAgICAgY29uc3QgaW5kZXggPSBwbGFjZW1lbnRzLmluZGV4T2YoaWQpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgcGxhY2VtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGNvdW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBsYWNlbWVudHM6IHBsYWNlbWVudHMuam9pbihcIiwgXCIpLFxuICAgICAgICBjb3VudHM6IGNvdW50cy5qb2luKFwiLCBcIiksXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCB7IHBsYWNlbWVudHMsIGNvdW50cyB9ID0gZ2VuZXJhdGVTcG9jUHJlZlZhbHVlcygpO1xuXG4gICAgLy8gVXBkYXRlIHByZWZzIHdpdGggbmV3IHZhbHVlc1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX1NQT0NfUExBQ0VNRU5UUywgcGxhY2VtZW50cykpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX1NQT0NfQ09VTlRTLCBjb3VudHMpKTtcblxuICAgIC8vIElmIGNvbnRleHR1YWwgYWRzLCBzZWN0aW9ucywgYW5kIG9uZSBvZiB0aGUgYmFubmVycyBhcmUgZW5hYmxlZFxuICAgIC8vIHVwZGF0ZSB0aGUgY29udGV4dHVhbEJhbm5lciBwcmVmcyB0byBpbmNsdWRlIHRoZSBiYW5uZXIgdmFsdWUgYW5kIGNvdW50XG4gICAgLy8gRWxzZSwgY2xlYXIgdGhlIHByZWZzXG4gICAgaWYgKFBSRUZfQ09OVEVYVFVBTF9BRFNfRU5BQkxFRCAmJiBQUkVGX1NFQ1RJT05TX0VOQUJMRUQpIHtcbiAgICAgIGlmIChQUkVGX0FEX1NJWkVfQklMTEJPQVJEICYmIHBsYWNlbWVudHMuaW5jbHVkZXMoXCJuZXd0YWJfYmlsbGJvYXJkXCIpKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgYWMuU2V0UHJlZihQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX1BMQUNFTUVOVFMsIFwibmV3dGFiX2JpbGxib2FyZFwiKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9DT05URVhUVUFMX0JBTk5FUl9DT1VOVFMsIFwiMVwiKSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBQUkVGX0FEX1NJWkVfTEVBREVSQk9BUkQgJiZcbiAgICAgICAgcGxhY2VtZW50cy5pbmNsdWRlcyhcIm5ld3RhYl9sZWFkZXJib2FyZFwiKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgYWMuU2V0UHJlZihQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX1BMQUNFTUVOVFMsIFwibmV3dGFiX2xlYWRlcmJvYXJkXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX0NPVU5UUywgXCIxXCIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX1BMQUNFTUVOVFMsIFwiXCIpKTtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfQ09VTlRTLCBcIlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlU2VjdGlvbnNUb2dnbGUoZSkge1xuICAgIGNvbnN0IHsgcHJlc3NlZCB9ID0gZS50YXJnZXQ7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfU0VDVElPTlNfRU5BQkxFRCwgcHJlc3NlZCkpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5TZXRQcmVmKFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmNhcmRzLmVuYWJsZWRcIiwgcHJlc3NlZClcbiAgICApO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5TZXRQcmVmKFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmNhcmRzLnRodW1ic1VwRG93bi5lbmFibGVkXCIsIHByZXNzZWQpXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckNvbXBvbmVudCh3aWR0aCwgY29tcG9uZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+VHlwZTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2NvbXBvbmVudC50eXBlfTwvdGQ+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5XaWR0aDwvdGQ+XG4gICAgICAgICAgICA8dGQ+e3dpZHRofTwvdGQ+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAge2NvbXBvbmVudC5mZWVkICYmIHRoaXMucmVuZGVyRmVlZChjb21wb25lbnQuZmVlZCl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJXZWF0aGVyRGF0YSgpIHtcbiAgICBjb25zdCB7IHN1Z2dlc3Rpb25zIH0gPSB0aGlzLnByb3BzLnN0YXRlLldlYXRoZXI7XG4gICAgbGV0IHdlYXRoZXJUYWJsZTtcbiAgICBpZiAoc3VnZ2VzdGlvbnMpIHtcbiAgICAgIHdlYXRoZXJUYWJsZSA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyLXNlY3Rpb25cIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVXZWF0aGVyU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwid2VhdGhlci1xdWVyeVwiPldlYXRoZXIgcXVlcnk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbWluPVwiM1wiXG4gICAgICAgICAgICAgIG1heD1cIjEwXCJcbiAgICAgICAgICAgICAgaWQ9XCJ3ZWF0aGVyLXF1ZXJ5XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlV2VhdGhlclVwZGF0ZX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMud2VhdGhlclF1ZXJ5fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoc3VnZ2VzdGlvbiA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaXRlbVwiIGtleT17c3VnZ2VzdGlvbi5jaXR5X25hbWV9PlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge3N1Z2dlc3Rpb24uY2l0eV9uYW1lfSA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtZXNzYWdlLXN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoc3VnZ2VzdGlvbiwgbnVsbCwgMil9PC9wcmU+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB3ZWF0aGVyVGFibGU7XG4gIH1cblxuICByZW5kZXJQZXJzb25hbGl6YXRpb25EYXRhKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGluZmVycmVkSW50ZXJlc3RzLFxuICAgICAgY29hcnNlSW5mZXJyZWRJbnRlcmVzdHMsXG4gICAgICBjb2Fyc2VQcml2YXRlSW5mZXJyZWRJbnRlcmVzdHMsXG4gICAgfSA9IHRoaXMucHJvcHMuc3RhdGUuSW5mZXJyZWRQZXJzb25hbGl6YXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgSW5mZXJyZWQgSW50ZXJlc3RzOlxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShpbmZlcnJlZEludGVyZXN0cywgbnVsbCwgMil9PC9wcmU+IENvYXJzZSBJbmZlcnJlZFxuICAgICAgICBJbnRlcmVzdHM6XG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvYXJzZUluZmVycmVkSW50ZXJlc3RzLCBudWxsLCAyKX08L3ByZT4gQ29hcnNlXG4gICAgICAgIEluZmVycmVkIEludGVyZXN0cyBXaXRoIERpZmZlcmVudGlhbCBQcml2YWN5OlxuICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShjb2Fyc2VQcml2YXRlSW5mZXJyZWRJbnRlcmVzdHMsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckZlZWREYXRhKHVybCkge1xuICAgIGNvbnN0IHsgZmVlZHMgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIGNvbnN0IGZlZWQgPSBmZWVkcy5kYXRhW3VybF0uZGF0YTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8aDQ+RmVlZCB1cmw6IHt1cmx9PC9oND5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtmZWVkLnJlY29tbWVuZGF0aW9ucz8ubWFwKHN0b3J5ID0+IHRoaXMucmVuZGVyU3RvcnlEYXRhKHN0b3J5KSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckZlZWRzRGF0YSgpIHtcbiAgICBjb25zdCB7IGZlZWRzIH0gPSB0aGlzLnByb3BzLnN0YXRlLkRpc2NvdmVyeVN0cmVhbTtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7T2JqZWN0LmtleXMoZmVlZHMuZGF0YSkubWFwKHVybCA9PiB0aGlzLnJlbmRlckZlZWREYXRhKHVybCkpfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySW1wcmVzc2lvbnNEYXRhKCkge1xuICAgIGNvbnN0IHsgaW1wcmVzc2lvbnMgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDQ+RmVlZCBJbXByZXNzaW9uczwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoaW1wcmVzc2lvbnMuZmVlZCkubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkPntyZWxhdGl2ZVRpbWUoaW1wcmVzc2lvbnMuZmVlZFtrZXldKSB8fCBcIihubyBkYXRhKVwifTwvdGQ+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckJsb2Nrc0RhdGEoKSB7XG4gICAgY29uc3QgeyBibG9ja3MgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aDQ+QmxvY2tzPC9oND5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnJlc2V0QmxvY2tzfT5cbiAgICAgICAgICBSZXNldCBCbG9ja3NcbiAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge09iamVjdC5rZXlzKGJsb2NrcykubWFwKGtleSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFJvdyBrZXk9e2tleX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+e2tleX08L3RkPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTcG9jcygpIHtcbiAgICBjb25zdCB7IHNwb2NzIH0gPSB0aGlzLnByb3BzLnN0YXRlLkRpc2NvdmVyeVN0cmVhbTtcblxuICAgIGNvbnN0IHVuaWZpZWRBZHNTcG9jc0VuYWJsZWQgPVxuICAgICAgdGhpcy5wcm9wcy5vdGhlclByZWZzW1widW5pZmllZEFkcy5zcG9jcy5lbmFibGVkXCJdO1xuXG4gICAgLy8gRGV0ZXJtaW5lIHdoaWNoIG1lY2hhbmlzbSBpcyBxdWVyeWluZyB0aGUgVUFQSSBhZHMgc2VydmVyXG4gICAgY29uc3QgUFJFRl9VTklGSUVEX0FEU19BRFNGRUVEX0VOQUJMRUQgPSBcInVuaWZpZWRBZHMuYWRzRmVlZC5lbmFibGVkXCI7XG4gICAgY29uc3QgYWRzRmVlZEVuYWJsZWQgPVxuICAgICAgdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfVU5JRklFRF9BRFNfQURTRkVFRF9FTkFCTEVEXTtcblxuICAgIGNvbnN0IHVuaWZpZWRBZHNFbmRwb2ludCA9IHRoaXMucHJvcHMub3RoZXJQcmVmc1tcInVuaWZpZWRBZHMuZW5kcG9pbnRcIl07XG5cbiAgICBsZXQgc3BvY3NEYXRhID0gW107XG5cbiAgICBpZiAoXG4gICAgICBzcG9jcy5kYXRhICYmXG4gICAgICBzcG9jcy5kYXRhLm5ld3RhYl9zcG9jcyAmJlxuICAgICAgc3BvY3MuZGF0YS5uZXd0YWJfc3BvY3MuaXRlbXNcbiAgICApIHtcbiAgICAgIHNwb2NzRGF0YSA9IHNwb2NzLmRhdGEubmV3dGFiX3Nwb2NzLml0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+YWRzZmVlZCBlbmFibGVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPnthZHNGZWVkRW5hYmxlZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvdGQ+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5zcG9jc19lbmRwb2ludDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICB7dW5pZmllZEFkc1Nwb2NzRW5hYmxlZFxuICAgICAgICAgICAgICAgICAgPyB1bmlmaWVkQWRzRW5kcG9pbnRcbiAgICAgICAgICAgICAgICAgIDogc3BvY3Muc3BvY3NfZW5kcG9pbnR9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5EYXRhIGxhc3QgZmV0Y2hlZDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57cmVsYXRpdmVUaW1lKHNwb2NzLmxhc3RVcGRhdGVkKX08L3RkPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGg0PlNwb2MgZGF0YTwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+e3Nwb2NzRGF0YS5tYXAoc3BvYyA9PiB0aGlzLnJlbmRlclN0b3J5RGF0YShzcG9jKSl9PC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGg0PlNwb2MgZnJlcXVlbmN5IGNhcHM8L2g0PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge3Nwb2NzLmZyZXF1ZW5jeV9jYXBzLm1hcChzcG9jID0+IHRoaXMucmVuZGVyU3RvcnlEYXRhKHNwb2MpKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgb25TdG9yeVRvZ2dsZShzdG9yeSkge1xuICAgIGNvbnN0IHsgdG9nZ2xlZFN0b3JpZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2dnbGVkU3Rvcmllczoge1xuICAgICAgICAuLi50b2dnbGVkU3RvcmllcyxcbiAgICAgICAgW3N0b3J5LmlkXTogIXRvZ2dsZWRTdG9yaWVzW3N0b3J5LmlkXSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJTdG9yeURhdGEoc3RvcnkpIHtcbiAgICBsZXQgc3RvcnlEYXRhID0gXCJcIjtcbiAgICBpZiAodGhpcy5zdGF0ZS50b2dnbGVkU3Rvcmllc1tzdG9yeS5pZF0pIHtcbiAgICAgIHN0b3J5RGF0YSA9IEpTT04uc3RyaW5naWZ5KHN0b3J5LCBudWxsLCAyKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBjbGFzc05hbWU9XCJtZXNzYWdlLWl0ZW1cIiBrZXk9e3N0b3J5LmlkfT5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaWRcIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtzdG9yeS5pZH0gPGJyIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxUb2dnbGVTdG9yeUJ1dHRvbiBzdG9yeT17c3Rvcnl9IG9uQ2xpY2s9e3RoaXMub25TdG9yeVRvZ2dsZX0gLz5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lc3NhZ2Utc3VtbWFyeVwiPlxuICAgICAgICAgIDxwcmU+e3N0b3J5RGF0YX08L3ByZT5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckZlZWQoZmVlZCkge1xuICAgIGNvbnN0IHsgZmVlZHMgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIGlmICghZmVlZC51cmwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5GZWVkIHVybDwvdGQ+XG4gICAgICAgICAgPHRkPntmZWVkLnVybH08L3RkPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+RGF0YSBsYXN0IGZldGNoZWQ8L3RkPlxuICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHtyZWxhdGl2ZVRpbWUoXG4gICAgICAgICAgICAgIGZlZWRzLmRhdGFbZmVlZC51cmxdID8gZmVlZHMuZGF0YVtmZWVkLnVybF0ubGFzdFVwZGF0ZWQgOiBudWxsXG4gICAgICAgICAgICApIHx8IFwiKG5vIGRhdGEpXCJ9XG4gICAgICAgICAgPC90ZD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgcHJlZlRvZ2dsZXMgPSBcImVuYWJsZWQgY29sbGFwc2libGVcIi5zcGxpdChcIiBcIik7XG4gICAgY29uc3QgeyBjb25maWcsIGxheW91dCB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgY29uc3QgcGVyc29uYWxpemVkID1cbiAgICAgIHRoaXMucHJvcHMub3RoZXJQcmVmc1tcImRpc2NvdmVyeXN0cmVhbS5wZXJzb25hbGl6YXRpb24uZW5hYmxlZFwiXTtcbiAgICBjb25zdCBzZWxlY3RlZEZlZWQgPVxuICAgICAgdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfQ09OVEVYVFVBTF9DT05URU5UX1NFTEVDVEVEX0ZFRURdO1xuICAgIGNvbnN0IHNlY3Rpb25zRW5hYmxlZCA9IHRoaXMucHJvcHMub3RoZXJQcmVmc1tQUkVGX1NFQ1RJT05TX0VOQUJMRURdO1xuICAgIGNvbnN0IFRCUkZlZWRzID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfQ09OVEVYVFVBTF9DT05URU5UX0ZFRURTXS5zcGxpdChcbiAgICAgIFwiLFwiXG4gICAgKVxuICAgICAgLm1hcChzID0+IHMudHJpbSgpKVxuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xuXG4gICAgLy8gUHJlZnMgZm9yIElBQiBCYW5uZXJzXG4gICAgY29uc3QgbWVkaXVtUmVjdGFuZ2xlRW5hYmxlZCA9XG4gICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9BRF9TSVpFX01FRElVTV9SRUNUQU5HTEVdO1xuICAgIGNvbnN0IGJpbGxib2FyZHNFbmFibGVkID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfQURfU0laRV9CSUxMQk9BUkRdO1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkRW5hYmxlZCA9IHRoaXMucHJvcHMub3RoZXJQcmVmc1tQUkVGX0FEX1NJWkVfTEVBREVSQk9BUkRdO1xuICAgIGNvbnN0IHNwb2NQbGFjZW1lbnRzID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfU1BPQ19QTEFDRU1FTlRTXTtcbiAgICBjb25zdCBtZWRpdW1SZWN0YW5nbGVFbmFibGVkUHJlc3NlZCA9XG4gICAgICBtZWRpdW1SZWN0YW5nbGVFbmFibGVkICYmIHNwb2NQbGFjZW1lbnRzLmluY2x1ZGVzKFwibmV3dGFiX3JlY3RhbmdsZVwiKTtcbiAgICBjb25zdCBiaWxsYm9hcmRQcmVzc2VkID1cbiAgICAgIGJpbGxib2FyZHNFbmFibGVkICYmIHNwb2NQbGFjZW1lbnRzLmluY2x1ZGVzKFwibmV3dGFiX2JpbGxib2FyZFwiKTtcbiAgICBjb25zdCBsZWFkZXJib2FyZFByZXNzZWQgPVxuICAgICAgbGVhZGVyYm9hcmRFbmFibGVkICYmIHNwb2NQbGFjZW1lbnRzLmluY2x1ZGVzKFwibmV3dGFiX2xlYWRlcmJvYXJkXCIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5yZXN0b3JlUHJlZkRlZmF1bHRzfT5cbiAgICAgICAgICBSZXN0b3JlIFByZWYgRGVmYXVsdHNcbiAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVmcmVzaENhY2hlfT5cbiAgICAgICAgICBSZWZyZXNoIENhY2hlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmV4cGlyZUNhY2hlfT5cbiAgICAgICAgICBFeHBpcmUgQ2FjaGVcbiAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc3lzdGVtVGlja30+XG4gICAgICAgICAgVHJpZ2dlciBTeXN0ZW0gVGlja1xuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5pZGxlRGFpbHl9PlxuICAgICAgICAgIFRyaWdnZXIgSWRsZSBEYWlseVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucmVmcmVzaEluZmVycmVkUGVyc29uYWxpemF0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAgUmVmcmVzaCBJbmZlcnJlZCBQZXJzb25hbGl6YXRpb25cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc3luY1JlbW90ZVNldHRpbmdzfT5cbiAgICAgICAgICBTeW5jIFJlbW90ZSBTZXR0aW5nc1xuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5yZWZyZXNoVG9waWNTZWxlY3Rpb25DYWNoZX0+XG4gICAgICAgICAgUmVmcmVzaCBUb3BpYyBzZWxlY3Rpb24gY291bnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2hvd1BsYWNlaG9sZGVyfT5cbiAgICAgICAgICBTaG93IFBsYWNlaG9sZGVyIENhcmRzXG4gICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlVEJSRmVlZH1cbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRGZWVkfVxuICAgICAgICA+XG4gICAgICAgICAge1RCUkZlZWRzLm1hcChmZWVkID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtmZWVkfSB2YWx1ZT17ZmVlZH0+XG4gICAgICAgICAgICAgIHtmZWVkfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgIGlkPVwic2VjdGlvbnMtdG9nZ2xlXCJcbiAgICAgICAgICAgIHByZXNzZWQ9e3NlY3Rpb25zRW5hYmxlZCB8fCBudWxsfVxuICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMuaGFuZGxlU2VjdGlvbnNUb2dnbGV9XG4gICAgICAgICAgICBsYWJlbD1cIlRvZ2dsZSBEUyBTZWN0aW9uc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiBDb2xsYXBzaWJsZSBTZWN0aW9ucyBmb3IgZXhwZXJpbWVudHMgZm9yIGVhc3kgb24vb2ZmICovfVxuICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9XCJkZXRhaWxzLXNlY3Rpb25cIj5cbiAgICAgICAgICA8c3VtbWFyeT5JQUIgQmFubmVyIEFkIFNpemVzPC9zdW1tYXJ5PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgIGlkPVwibmV3dGFiX2xlYWRlcmJvYXJkXCJcbiAgICAgICAgICAgICAgcHJlc3NlZD17bGVhZGVyYm9hcmRQcmVzc2VkIHx8IG51bGx9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLnRvZ2dsZUlBQkJhbm5lcnN9XG4gICAgICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIElBQiBMZWFkZXJib2FyZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgIGlkPVwibmV3dGFiX2JpbGxib2FyZFwiXG4gICAgICAgICAgICAgIHByZXNzZWQ9e2JpbGxib2FyZFByZXNzZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMudG9nZ2xlSUFCQmFubmVyc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgSUFCIEJpbGxib2FyZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgIGlkPVwibmV3dGFiX3JlY3RhbmdsZVwiXG4gICAgICAgICAgICAgIHByZXNzZWQ9e21lZGl1bVJlY3RhbmdsZUVuYWJsZWRQcmVzc2VkIHx8IG51bGx9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLnRvZ2dsZUlBQkJhbm5lcnN9XG4gICAgICAgICAgICAgIGxhYmVsPVwiRW5hYmxlIElBQiBNZWRpdW0gUmVjdGFuZ2xlIChNUkVDKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7cHJlZlRvZ2dsZXMubWFwKHByZWYgPT4gKFxuICAgICAgICAgICAgICA8Um93IGtleT17cHJlZn0+XG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgPFRvZ2dsZVByZWZDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtjb25maWdbcHJlZl19XG4gICAgICAgICAgICAgICAgICAgIHByZWY9e3ByZWZ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNldENvbmZpZ1ZhbHVlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxoMz5MYXlvdXQ8L2gzPlxuICAgICAgICB7bGF5b3V0Lm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtgcm93LSR7cm93SW5kZXh9YH0+XG4gICAgICAgICAgICB7cm93LmNvbXBvbmVudHMubWFwKChjb21wb25lbnQsIGNvbXBvbmVudEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgY29tcG9uZW50LSR7Y29tcG9uZW50SW5kZXh9YH0gY2xhc3NOYW1lPVwiZHMtY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29tcG9uZW50KHJvdy53aWR0aCwgY29tcG9uZW50KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICAgIDxoMz5QZXJzb25hbGl6YXRpb248L2gzPlxuICAgICAgICA8UGVyc29uYWxpemF0aW9uXG4gICAgICAgICAgcGVyc29uYWxpemVkPXtwZXJzb25hbGl6ZWR9XG4gICAgICAgICAgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG4gICAgICAgICAgc3RhdGU9e3tcbiAgICAgICAgICAgIFBlcnNvbmFsaXphdGlvbjogdGhpcy5wcm9wcy5zdGF0ZS5QZXJzb25hbGl6YXRpb24sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgzPlNwb2NzPC9oMz5cbiAgICAgICAge3RoaXMucmVuZGVyU3BvY3MoKX1cbiAgICAgICAgPGgzPkZlZWRzIERhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLWRhdGEtY29udGFpbmVyXCI+e3RoaXMucmVuZGVyRmVlZHNEYXRhKCl9PC9kaXY+XG4gICAgICAgIDxoMz5JbXByZXNzaW9ucyBEYXRhPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS1kYXRhLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlckltcHJlc3Npb25zRGF0YSgpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgzPkJsb2NrZWQgRGF0YTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtZGF0YS1jb250YWluZXJcIj57dGhpcy5yZW5kZXJCbG9ja3NEYXRhKCl9PC9kaXY+XG4gICAgICAgIDxoMz5XZWF0aGVyIERhdGE8L2gzPlxuICAgICAgICB7dGhpcy5yZW5kZXJXZWF0aGVyRGF0YSgpfVxuICAgICAgICA8aDM+UGVyc29uYWxpemF0aW9uIERhdGE8L2gzPlxuICAgICAgICB7dGhpcy5yZW5kZXJQZXJzb25hbGl6YXRpb25EYXRhKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXNjb3ZlcnlTdHJlYW1BZG1pbklubmVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc2V0U3RhdGUgPSB0aGlzLnNldFN0YXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgZGlzY292ZXJ5c3RyZWFtLWFkbWluICR7XG4gICAgICAgICAgdGhpcy5wcm9wcy5jb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJleHBhbmRlZFwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYWluLXBhbmVsXCI+XG4gICAgICAgICAgPGgxPkRpc2NvdmVyeSBTdHJlYW0gQWRtaW48L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVscExpbmtcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1zbWFsbC1zcGFjZXIgaWNvbi1pbmZvXCIgLz57XCIgXCJ9XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgTmVlZCB0byBhY2Nlc3MgdGhlIEFTUm91dGVyIEFkbWluIGRldiB0b29scz97XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cImFib3V0OmFzcm91dGVyXCI+XG4gICAgICAgICAgICAgICAgQ2xpY2sgaGVyZVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPERpc2NvdmVyeVN0cmVhbUFkbWluVUlcbiAgICAgICAgICAgICAgc3RhdGU9e3tcbiAgICAgICAgICAgICAgICBEaXNjb3ZlcnlTdHJlYW06IHRoaXMucHJvcHMuRGlzY292ZXJ5U3RyZWFtLFxuICAgICAgICAgICAgICAgIFBlcnNvbmFsaXphdGlvbjogdGhpcy5wcm9wcy5QZXJzb25hbGl6YXRpb24sXG4gICAgICAgICAgICAgICAgV2VhdGhlcjogdGhpcy5wcm9wcy5XZWF0aGVyLFxuICAgICAgICAgICAgICAgIEluZmVycmVkUGVyc29uYWxpemF0aW9uOiB0aGlzLnByb3BzLkluZmVycmVkUGVyc29uYWxpemF0aW9uLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBvdGhlclByZWZzPXt0aGlzLnByb3BzLlByZWZzLnZhbHVlc31cbiAgICAgICAgICAgICAgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbGxhcHNlVG9nZ2xlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25Db2xsYXBzZVRvZ2dsZSA9IHRoaXMub25Db2xsYXBzZVRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGNvbGxhcHNlZDogZmFsc2UgfTtcbiAgfVxuXG4gIGdldCByZW5kZXJBZG1pbigpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIHJldHVybiBwcm9wcy5sb2NhdGlvbi5oYXNoICYmIHByb3BzLmxvY2F0aW9uLmhhc2guc3RhcnRzV2l0aChcIiNkZXZ0b29sc1wiKTtcbiAgfVxuXG4gIG9uQ29sbGFwc2VUb2dnbGUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IGNvbGxhcHNlZDogIXN0YXRlLmNvbGxhcHNlZCB9KSk7XG4gIH1cblxuICBzZXRCb2R5Q2xhc3MoKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyQWRtaW4gJiYgIXRoaXMuc3RhdGUuY29sbGFwc2VkKSB7XG4gICAgICBnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcIm5vLXNjcm9sbFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXRCb2R5Q2xhc3MoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnNldEJvZHlDbGFzcygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1zY3JvbGxcIik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IHJlbmRlckFkbWluIH0gPSB0aGlzO1xuICAgIGNvbnN0IGlzQ29sbGFwc2VkID0gdGhpcy5zdGF0ZS5jb2xsYXBzZWQgfHwgIXJlbmRlckFkbWluO1xuICAgIGNvbnN0IGxhYmVsID0gYCR7aXNDb2xsYXBzZWQgPyBcIkV4cGFuZFwiIDogXCJDb2xsYXBzZVwifSBkZXZ0b29sc2A7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiI2RldnRvb2xzXCJcbiAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgYXJpYS1sYWJlbD17bGFiZWx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgZGlzY292ZXJ5c3RyZWFtLWFkbWluLXRvZ2dsZSAke1xuICAgICAgICAgICAgaXNDb2xsYXBzZWQgPyBcImNvbGxhcHNlZFwiIDogXCJleHBhbmRlZFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5yZW5kZXJBZG1pbiA/IHRoaXMub25Db2xsYXBzZVRvZ2dsZSA6IG51bGx9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24tZGV2dG9vbHNcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIHtyZW5kZXJBZG1pbiA/IChcbiAgICAgICAgICA8RGlzY292ZXJ5U3RyZWFtQWRtaW5Jbm5lclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY29sbGFwc2VkPXt0aGlzLnN0YXRlLmNvbGxhcHNlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBfRGlzY292ZXJ5U3RyZWFtQWRtaW4gPSBwcm9wcyA9PiAoXG4gIDxTaW1wbGVIYXNoUm91dGVyPlxuICAgIDxDb2xsYXBzZVRvZ2dsZSB7Li4ucHJvcHN9IC8+XG4gIDwvU2ltcGxlSGFzaFJvdXRlcj5cbik7XG5cbmV4cG9ydCBjb25zdCBEaXNjb3ZlcnlTdHJlYW1BZG1pbiA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgU2VjdGlvbnM6IHN0YXRlLlNlY3Rpb25zLFxuICBEaXNjb3ZlcnlTdHJlYW06IHN0YXRlLkRpc2NvdmVyeVN0cmVhbSxcbiAgUGVyc29uYWxpemF0aW9uOiBzdGF0ZS5QZXJzb25hbGl6YXRpb24sXG4gIEluZmVycmVkUGVyc29uYWxpemF0aW9uOiBzdGF0ZS5JbmZlcnJlZFBlcnNvbmFsaXphdGlvbixcbiAgUHJlZnM6IHN0YXRlLlByZWZzLFxuICBXZWF0aGVyOiBzdGF0ZS5XZWF0aGVyLFxufSkpKF9EaXNjb3ZlcnlTdHJlYW1BZG1pbik7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogQ29uZmlybURpYWxvZyBjb21wb25lbnQuXG4gKiBPbmUgcHJpbWFyeSBhY3Rpb24gYnV0dG9uLCBvbmUgY2FuY2VsIGJ1dHRvbi5cbiAqXG4gKiBDb250ZW50IGRpc3BsYXllZCBpcyBjb250cm9sbGVkIGJ5IGBkYXRhYCBwcm9wIHRoZSBjb21wb25lbnQgcmVjZWl2ZXMuXG4gKiBFeGFtcGxlOlxuICogZGF0YToge1xuICogICAvLyBBbnkgc29ydCBvZiBkYXRhIG5lZWRlZCB0byBiZSBwYXNzZWQgYXJvdW5kIGJ5IGFjdGlvbnMuXG4gKiAgIHBheWxvYWQ6IHNpdGUudXJsLFxuICogICAvLyBQcmltYXJ5IGJ1dHRvbiBBbHNvVG9NYWluIGFjdGlvbi5cbiAqICAgYWN0aW9uOiBcIkRFTEVURV9ISVNUT1JZX1VSTFwiLFxuICogICAvLyBQcmltYXJ5IGJ1dHRvbiBVU2VyRXZlbnQgYWN0aW9uLlxuICogICB1c2VyRXZlbnQ6IFwiREVMRVRFXCIsXG4gKiAgIC8vIEFycmF5IG9mIGxvY2FsZSBpZHMgdG8gZGlzcGxheS5cbiAqICAgbWVzc2FnZV9ib2R5OiBbXCJjb25maXJtX2hpc3RvcnlfZGVsZXRlX3AxXCIsIFwiY29uZmlybV9oaXN0b3J5X2RlbGV0ZV9ub3RpY2VfcDJcIl0sXG4gKiAgIC8vIFRleHQgZm9yIHByaW1hcnkgYnV0dG9uLlxuICogICBjb25maXJtX2J1dHRvbl9zdHJpbmdfaWQ6IFwibWVudV9hY3Rpb25fZGVsZXRlXCJcbiAqIH0sXG4gKi9cbmV4cG9ydCBjbGFzcyBfQ29uZmlybURpYWxvZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9oYW5kbGVDYW5jZWxCdG4gPSB0aGlzLl9oYW5kbGVDYW5jZWxCdG4uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVDb25maXJtQnRuID0gdGhpcy5faGFuZGxlQ29uZmlybUJ0bi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2hhbmRsZUNhbmNlbEJ0bigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogYWN0aW9uVHlwZXMuRElBTE9HX0NBTkNFTCB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuVXNlckV2ZW50KHtcbiAgICAgICAgZXZlbnQ6IGFjdGlvblR5cGVzLkRJQUxPR19DQU5DRUwsXG4gICAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5kYXRhLmV2ZW50U291cmNlLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgX2hhbmRsZUNvbmZpcm1CdG4oKSB7XG4gICAgdGhpcy5wcm9wcy5kYXRhLm9uQ29uZmlybS5mb3JFYWNoKHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICB9XG5cbiAgX3JlbmRlck1vZGFsTWVzc2FnZSgpIHtcbiAgICBjb25zdCBtZXNzYWdlX2JvZHkgPSB0aGlzLnByb3BzLmRhdGEuYm9keV9zdHJpbmdfaWQ7XG5cbiAgICBpZiAoIW1lc3NhZ2VfYm9keSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7bWVzc2FnZV9ib2R5Lm1hcChtc2cgPT4gKFxuICAgICAgICAgIDxwIGtleT17bXNnfSBkYXRhLWwxMG4taWQ9e21zZ30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZmlybWF0aW9uLWRpYWxvZ1wiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWwtb3ZlcmxheVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlQ2FuY2VsQnRufVxuICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibW9kYWwtbWVzc2FnZVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5pY29uICYmIChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uIGljb24tc3BhY2VyIGljb24tJHt0aGlzLnByb3BzLmRhdGEuaWNvbn1gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHt0aGlzLl9yZW5kZXJNb2RhbE1lc3NhZ2UoKX1cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDYW5jZWxCdG59XG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD17dGhpcy5wcm9wcy5kYXRhLmNhbmNlbF9idXR0b25fc3RyaW5nX2lkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9uZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNvbmZpcm1CdG59XG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD17dGhpcy5wcm9wcy5kYXRhLmNvbmZpcm1fYnV0dG9uX3N0cmluZ19pZH1cbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWFyZ3M9e0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5jb25maXJtX2J1dHRvbl9zdHJpbmdfYXJnc1xuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ29uZmlybURpYWxvZyA9IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUuRGlhbG9nKShfQ29uZmlybURpYWxvZyk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBMTF5TGlua0J1dHRvbihwcm9wcykge1xuICAvLyBmdW5jdGlvbiBmb3IgbWVyZ2luZyBjbGFzc2VzLCBpZiBuZWNlc3NhcnlcbiAgbGV0IGNsYXNzTmFtZSA9IFwiYTExeS1saW5rLWJ1dHRvblwiO1xuICBpZiAocHJvcHMuY2xhc3NOYW1lKSB7XG4gICAgY2xhc3NOYW1lICs9IGAgJHtwcm9wcy5jbGFzc05hbWV9YDtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHsuLi5wcm9wc30gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgQTExeUxpbmtCdXR0b24gfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9BMTF5TGlua0J1dHRvbi9BMTF5TGlua0J1dHRvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgRXJyb3JCb3VuZGFyeUZhbGxiYWNrIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMud2luZG93T2JqID0gdGhpcy5wcm9wcy53aW5kb3dPYmogfHwgd2luZG93O1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNpbmNlIHdlIG9ubHkgZ2V0IGhlcmUgaWYgcGFydCBvZiB0aGUgcGFnZSBoYXMgY3Jhc2hlZCwgZG8gYVxuICAgKiBmb3JjZWQgcmVsb2FkIHRvIGdpdmUgdXMgdGhlIGJlc3QgY2hhbmNlIGF0IHJlY292ZXJpbmcuXG4gICAqL1xuICBvbkNsaWNrKCkge1xuICAgIHRoaXMud2luZG93T2JqLmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBkZWZhdWx0Q2xhc3MgPSBcImFzLWVycm9yLWZhbGxiYWNrXCI7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBpZiAoXCJjbGFzc05hbWVcIiBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBjbGFzc05hbWUgPSBgJHt0aGlzLnByb3BzLmNsYXNzTmFtZX0gJHtkZWZhdWx0Q2xhc3N9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gZGVmYXVsdENsYXNzO1xuICAgIH1cblxuICAgIC8vIFwiQTExeUxpbmtCdXR0b25cIiB0byBmb3JjZSBub3JtYWwgbGluayBzdHlsaW5nIHN0dWZmIChlZyBjdXJzb3Igb24gaG92ZXIpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICA8ZGl2IGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1lcnJvci1mYWxsYmFjay1pbmZvXCIgLz5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgPEExMXlMaW5rQnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxvYWQtYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1lcnJvci1mYWxsYmFjay1yZWZyZXNoLWxpbmtcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbkVycm9yQm91bmRhcnlGYWxsYmFjay5kZWZhdWx0UHJvcHMgPSB7IGNsYXNzTmFtZTogXCJhcy1lcnJvci1mYWxsYmFja1wiIH07XG5cbmV4cG9ydCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiB0cnVlIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgfVxuXG4gICAgcmV0dXJuIDx0aGlzLnByb3BzLkZhbGxiYWNrQ29tcG9uZW50IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IC8+O1xuICB9XG59XG5cbkVycm9yQm91bmRhcnkuZGVmYXVsdFByb3BzID0geyBGYWxsYmFja0NvbXBvbmVudDogRXJyb3JCb3VuZGFyeUZhbGxiYWNrIH07XG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gUmVhY3RUcmFuc2l0aW9uR3JvdXA7IiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiO1xuXG5mdW5jdGlvbiBTZWN0aW9uc01nbXRQYW5lbCh7IGV4aXRFdmVudEZpcmVkIH0pIHtcbiAgY29uc3QgW3Nob3dQYW5lbCwgc2V0U2hvd1BhbmVsXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8gU3RhdGUgbWFuYWdlbWVudCB3aXRoIHVzZVN0YXRlXG4gIGNvbnN0IHsgc2VjdGlvblBlcnNvbmFsaXphdGlvbiB9ID0gdXNlU2VsZWN0b3IoXG4gICAgc3RhdGUgPT4gc3RhdGUuRGlzY292ZXJ5U3RyZWFtXG4gICk7XG4gIGNvbnN0IGxheW91dENvbXBvbmVudHMgPSB1c2VTZWxlY3RvcihcbiAgICBzdGF0ZSA9PiBzdGF0ZS5EaXNjb3ZlcnlTdHJlYW0ubGF5b3V0WzBdLmNvbXBvbmVudHNcbiAgKTtcbiAgY29uc3Qgc2VjdGlvbnMgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5EaXNjb3ZlcnlTdHJlYW0uZmVlZHMuZGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAvLyBUT0RPOiBXcmFwIHNlY3Rpb25zRmVlZE5hbWUgLT4gc2VjdGlvbnNMaXN0IGxvZ2ljIGluIHRyeS4uLmNhdGNoP1xuICBsZXQgc2VjdGlvbnNGZWVkTmFtZTtcblxuICBjb25zdCBjYXJkR3JpZEVudHJ5ID0gbGF5b3V0Q29tcG9uZW50cy5maW5kKGl0ZW0gPT4gaXRlbS50eXBlID09PSBcIkNhcmRHcmlkXCIpO1xuXG4gIGlmIChjYXJkR3JpZEVudHJ5KSB7XG4gICAgc2VjdGlvbnNGZWVkTmFtZSA9IGNhcmRHcmlkRW50cnkuZmVlZC51cmw7XG4gIH1cblxuICBsZXQgc2VjdGlvbnNMaXN0O1xuXG4gIGlmIChzZWN0aW9uc0ZlZWROYW1lKSB7XG4gICAgc2VjdGlvbnNMaXN0ID0gc2VjdGlvbnNbc2VjdGlvbnNGZWVkTmFtZV0uZGF0YS5zZWN0aW9ucztcbiAgfVxuXG4gIGNvbnN0IFtzZWN0aW9uc1N0YXRlLCBzZXRTZWN0aW9uU3RhdGVdID0gdXNlU3RhdGUoc2VjdGlvblBlcnNvbmFsaXphdGlvbik7IC8vIFN0YXRlIG1hbmFnZW1lbnQgd2l0aCB1c2VTdGF0ZVxuXG4gIGxldCBmb2xsb3dlZFNlY3Rpb25zRGF0YSA9IHNlY3Rpb25zTGlzdC5maWx0ZXIoXG4gICAgaXRlbSA9PiBzZWN0aW9uc1N0YXRlW2l0ZW0uc2VjdGlvbktleV0/LmlzRm9sbG93ZWRcbiAgKTtcblxuICBsZXQgYmxvY2tlZFNlY3Rpb25zRGF0YSA9IHNlY3Rpb25zTGlzdC5maWx0ZXIoXG4gICAgaXRlbSA9PiBzZWN0aW9uc1N0YXRlW2l0ZW0uc2VjdGlvbktleV0/LmlzQmxvY2tlZFxuICApO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUNhY2hlZERhdGEoKSB7XG4gICAgLy8gUmVzZXQgY2FjaGVkIGZvbGxvd2VkL2Jsb2NrZWQgbGlzdCBkYXRhIHdoaWxlIHBhbmVsIGlzIG9wZW5cbiAgICBzZXRTZWN0aW9uU3RhdGUoc2VjdGlvblBlcnNvbmFsaXphdGlvbik7XG5cbiAgICBmb2xsb3dlZFNlY3Rpb25zRGF0YSA9IHNlY3Rpb25zTGlzdC5maWx0ZXIoXG4gICAgICBpdGVtID0+IHNlY3Rpb25zU3RhdGVbaXRlbS5zZWN0aW9uS2V5XT8uaXNGb2xsb3dlZFxuICAgICk7XG5cbiAgICBibG9ja2VkU2VjdGlvbnNEYXRhID0gc2VjdGlvbnNMaXN0LmZpbHRlcihcbiAgICAgIGl0ZW0gPT4gc2VjdGlvbnNTdGF0ZVtpdGVtLnNlY3Rpb25LZXldPy5pc0Jsb2NrZWRcbiAgICApO1xuICB9XG5cbiAgY29uc3Qgb25Gb2xsb3dDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWN0aW9uS2V5LCByZWNlaXZlZFJhbmspID0+IHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5TRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVQsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLi4uc2VjdGlvblBlcnNvbmFsaXphdGlvbixcbiAgICAgICAgICAgIFtzZWN0aW9uS2V5XToge1xuICAgICAgICAgICAgICBpc0ZvbGxvd2VkOiB0cnVlLFxuICAgICAgICAgICAgICBpc0Jsb2NrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBmb2xsb3dlZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgLy8gVGVsZW1ldHJ5IEV2ZW50IERpc3BhdGNoXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogXCJGT0xMT1dfU0VDVElPTlwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb25LZXksXG4gICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiByZWNlaXZlZFJhbmssXG4gICAgICAgICAgICBldmVudF9zb3VyY2U6IFwiQ1VTVE9NSVpFX1BBTkVMXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIHNlY3Rpb25QZXJzb25hbGl6YXRpb25dXG4gICk7XG5cbiAgY29uc3Qgb25CbG9ja0NsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlY3Rpb25LZXksIHJlY2VpdmVkUmFuaykgPT4ge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5zZWN0aW9uUGVyc29uYWxpemF0aW9uLFxuICAgICAgICAgICAgW3NlY3Rpb25LZXldOiB7XG4gICAgICAgICAgICAgIGlzRm9sbG93ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpc0Jsb2NrZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICAvLyBUZWxlbWV0cnkgRXZlbnQgRGlzcGF0Y2hcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBcIkJMT0NLX1NFQ1RJT05cIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uS2V5LFxuICAgICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogcmVjZWl2ZWRSYW5rLFxuICAgICAgICAgICAgZXZlbnRfc291cmNlOiBcIkNVU1RPTUlaRV9QQU5FTFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoLCBzZWN0aW9uUGVyc29uYWxpemF0aW9uXVxuICApO1xuXG4gIGNvbnN0IG9uVW5ibG9ja0NsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlY3Rpb25LZXksIHJlY2VpdmVkUmFuaykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZFNlY3Rpb25EYXRhID0geyAuLi5zZWN0aW9uUGVyc29uYWxpemF0aW9uIH07XG4gICAgICBkZWxldGUgdXBkYXRlZFNlY3Rpb25EYXRhW3NlY3Rpb25LZXldO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVCxcbiAgICAgICAgICBkYXRhOiB1cGRhdGVkU2VjdGlvbkRhdGEsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgLy8gVGVsZW1ldHJ5IEV2ZW50IERpc3BhdGNoXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogXCJVTkJMT0NLX1NFQ1RJT05cIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uS2V5LFxuICAgICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogcmVjZWl2ZWRSYW5rLFxuICAgICAgICAgICAgZXZlbnRfc291cmNlOiBcIkNVU1RPTUlaRV9QQU5FTFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0sXG4gICAgW2Rpc3BhdGNoLCBzZWN0aW9uUGVyc29uYWxpemF0aW9uXVxuICApO1xuXG4gIGNvbnN0IG9uVW5mb2xsb3dDbGljayA9IHVzZUNhbGxiYWNrKFxuICAgIChzZWN0aW9uS2V5LCByZWNlaXZlZFJhbmspID0+IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRTZWN0aW9uRGF0YSA9IHsgLi4uc2VjdGlvblBlcnNvbmFsaXphdGlvbiB9O1xuICAgICAgZGVsZXRlIHVwZGF0ZWRTZWN0aW9uRGF0YVtzZWN0aW9uS2V5XTtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5TRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVQsXG4gICAgICAgICAgZGF0YTogdXBkYXRlZFNlY3Rpb25EYXRhLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIC8vIFRlbGVtZXRyeSBFdmVudCBEaXNwYXRjaFxuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgIHR5cGU6IFwiVU5GT0xMT1dfU0VDVElPTlwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb25LZXksXG4gICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiByZWNlaXZlZFJhbmssXG4gICAgICAgICAgICBldmVudF9zb3VyY2U6IFwiQ1VTVE9NSVpFX1BBTkVMXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIHNlY3Rpb25QZXJzb25hbGl6YXRpb25dXG4gICk7XG5cbiAgLy8gQ2xvc2UgZm9sbG93ZWQvYmxvY2tlZCB0b3BpYyBzdWJwYW5lbCB3aGVuIHBhcmVudCBtZW51IGlzIGNsb3NlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChleGl0RXZlbnRGaXJlZCkge1xuICAgICAgc2V0U2hvd1BhbmVsKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtleGl0RXZlbnRGaXJlZF0pO1xuXG4gIGNvbnN0IHRvZ2dsZVBhbmVsID0gKCkgPT4ge1xuICAgIHNldFNob3dQYW5lbChwcmV2U2hvd1BhbmVsID0+ICFwcmV2U2hvd1BhbmVsKTtcblxuICAgIC8vIEZpcmUgd2hlbiB0aGUgcGFuZWwgaXMgb3BlblxuICAgIGlmICghc2hvd1BhbmVsKSB7XG4gICAgICB1cGRhdGVDYWNoZWREYXRhKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGZvbGxvd2VkU2VjdGlvbnNMaXN0ID0gZm9sbG93ZWRTZWN0aW9uc0RhdGEubWFwKFxuICAgICh7IHNlY3Rpb25LZXksIHRpdGxlLCByZWNlaXZlZFJhbmsgfSkgPT4ge1xuICAgICAgY29uc3QgZm9sbG93aW5nID0gc2VjdGlvblBlcnNvbmFsaXphdGlvbltzZWN0aW9uS2V5XT8uaXNGb2xsb3dlZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17c2VjdGlvbktleX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2Bmb2xsb3ctdG9waWMtJHtzZWN0aW9uS2V5fWB9Pnt0aXRsZX08L2xhYmVsPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIGZvbGxvd2luZyA/IFwic2VjdGlvbi1mb2xsb3cgZm9sbG93aW5nXCIgOiBcInNlY3Rpb24tZm9sbG93XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGZvbGxvd2luZ1xuICAgICAgICAgICAgICAgICAgPyBvblVuZm9sbG93Q2xpY2soc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKVxuICAgICAgICAgICAgICAgICAgOiBvbkZvbGxvd0NsaWNrKHNlY3Rpb25LZXksIHJlY2VpdmVkUmFuaylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlPXtcImRlZmF1bHRcIn1cbiAgICAgICAgICAgICAgaW5kZXg9e3JlY2VpdmVkUmFua31cbiAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbktleX1cbiAgICAgICAgICAgICAgaWQ9e2Bmb2xsb3ctdG9waWMtJHtzZWN0aW9uS2V5fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1idXR0b24tZm9sbG93LXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLWZvbGxvdy1idXR0b25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tYnV0dG9uLWZvbGxvd2luZy10ZXh0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi1mb2xsb3dpbmctYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLWJ1dHRvbi11bmZvbGxvdy10ZXh0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi11bmZvbGxvdy1idXR0b25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9tb3otYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgYmxvY2tlZFNlY3Rpb25zTGlzdCA9IGJsb2NrZWRTZWN0aW9uc0RhdGEubWFwKFxuICAgICh7IHNlY3Rpb25LZXksIHRpdGxlLCByZWNlaXZlZFJhbmsgfSkgPT4ge1xuICAgICAgY29uc3QgYmxvY2tlZCA9IHNlY3Rpb25QZXJzb25hbGl6YXRpb25bc2VjdGlvbktleV0/LmlzQmxvY2tlZDtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpIGtleT17c2VjdGlvbktleX0+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2BibG9ja2VkLXRvcGljLSR7c2VjdGlvbktleX1gfT57dGl0bGV9PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmxvY2tlZCA/IFwic2VjdGlvbi1ibG9jayBibG9ja2VkXCIgOiBcInNlY3Rpb24tYmxvY2tcIn0+XG4gICAgICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIGJsb2NrZWRcbiAgICAgICAgICAgICAgICAgID8gb25VbmJsb2NrQ2xpY2soc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKVxuICAgICAgICAgICAgICAgICAgOiBvbkJsb2NrQ2xpY2soc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgaW5kZXg9e3JlY2VpdmVkUmFua31cbiAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbktleX1cbiAgICAgICAgICAgICAgaWQ9e2BibG9ja2VkLXRvcGljLSR7c2VjdGlvbktleX1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tYnV0dG9uLWJsb2NrLXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLWJsb2NrLWJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1idXR0b24tYmxvY2tlZC10ZXh0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi1ibG9ja2VkLWJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1idXR0b24tdW5ibG9jay10ZXh0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi11bmJsb2NrLWJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21vei1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bW96LWJveC1idXR0b25cbiAgICAgICAgb25DbGljaz17dG9nZ2xlUGFuZWx9XG4gICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLW1hbmFnZS10b3BpY3MtYnV0dG9uLXYyXCJcbiAgICAgID48L21vei1ib3gtYnV0dG9uPlxuICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgaW49e3Nob3dQYW5lbH1cbiAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICBjbGFzc05hbWVzPVwic2VjdGlvbnMtbWdtdC1wYW5lbFwiXG4gICAgICAgIHVubW91bnRPbkV4aXQ9e3RydWV9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbnMtbWdtdC1wYW5lbFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYXJyb3ctYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlUGFuZWx9PlxuICAgICAgICAgICAgPGgxIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLW1hbmdhZ2UtdG9waWNzLXRpdGxlXCI+PC9oMT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8aDMgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tbWFuZ2FnZS10b3BpY3MtZm9sbG93ZWQtdG9waWNzXCI+PC9oMz5cbiAgICAgICAgICB7Zm9sbG93ZWRTZWN0aW9uc0RhdGEubGVuZ3RoID8gKFxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvcGljLWxpc3RcIj57Zm9sbG93ZWRTZWN0aW9uc0xpc3R9PC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9waWMtbGlzdC1lbXB0eS1zdGF0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLW1hbmdhZ2UtdG9waWNzLWZvbGxvd2VkLXRvcGljcy1lbXB0eS1zdGF0ZVwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGgzIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLW1hbmdhZ2UtdG9waWNzLWJsb2NrZWQtdG9waWNzXCI+PC9oMz5cbiAgICAgICAgICB7YmxvY2tlZFNlY3Rpb25zRGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9waWMtbGlzdFwiPntibG9ja2VkU2VjdGlvbnNMaXN0fTwvdWw+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcGljLWxpc3QtZW1wdHktc3RhdGVcIlxuICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi1tYW5nYWdlLXRvcGljcy1ibG9ja2VkLXRvcGljcy1lbXB0eS1zdGF0ZVwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgeyBTZWN0aW9uc01nbXRQYW5lbCB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5cbmNvbnN0IFBSRUZfV0FMTFBBUEVSX1VQTE9BREVEX1BSRVZJT1VTTFkgPVxuICBcIm5ld3RhYldhbGxwYXBlcnMuY3VzdG9tV2FsbHBhcGVyLnVwbG9hZGVkUHJldmlvdXNseVwiO1xuXG5jb25zdCBQUkVGX1dBTExQQVBFUl9VUExPQURfTUFYX0ZJTEVfU0laRSA9XG4gIFwibmV3dGFiV2FsbHBhcGVycy5jdXN0b21XYWxscGFwZXIuZmlsZVNpemVcIjtcblxuY29uc3QgUFJFRl9XQUxMUEFQRVJfVVBMT0FEX01BWF9GSUxFX1NJWkVfRU5BQkxFRCA9XG4gIFwibmV3dGFiV2FsbHBhcGVycy5jdXN0b21XYWxscGFwZXIuZmlsZVNpemUuZW5hYmxlZFwiO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gd2lsbCBub3QgYmUgY29udGludW91c2x5IHRyaWdnZXJlZCB3aGVuIGNhbGxlZC4gVGhlXG4vLyBmdW5jdGlvbiB3aWxsIGJlIHRyaWdnZXJlZCBpZiBjYWxsZWQgYWdhaW4gYWZ0ZXIgYHdhaXRgIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVyO1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgd2FrZVVwID0gKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH07XG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQod2FrZVVwLCB3YWl0KTtcbiAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgX1dhbGxwYXBlckNhdGVnb3JpZXMgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVDb2xvcklucHV0ID0gdGhpcy5oYW5kbGVDb2xvcklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZWJvdW5jZWRIYW5kbGVDaGFuZ2UgPSBkZWJvdW5jZSh0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpLCA5OTkpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVJlc2V0ID0gdGhpcy5oYW5kbGVSZXNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2F0ZWdvcnkgPSB0aGlzLmhhbmRsZUNhdGVnb3J5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVVcGxvYWQgPSB0aGlzLmhhbmRsZVVwbG9hZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQmFjayA9IHRoaXMuaGFuZGxlQmFjay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0UkdCQ29sb3JzID0gdGhpcy5nZXRSR0JDb2xvcnMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnByZWZlcnNIaWdoQ29udHJhc3RRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5wcmVmZXJzRGFya1F1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLmNhdGVnb3J5UmVmID0gW107IC8vIHN0b3JlIHJlZmVyZW5jZXMgZm9yIHdhbGxwYXBlciBjYXRlZ29yeSBsaXN0XG4gICAgdGhpcy53YWxscGFwZXJSZWYgPSBbXTsgLy8gc3RvcmUgcmVmZXJlbmNlIGZvciB3YWxscGFwZXIgc2VsZWN0aW9uIGxpc3RcbiAgICB0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7IC8vIFVzZWQgdG8gZGV0ZXJtaW5lIGNvbnRyYXN0IGljb24gY29sb3IgZm9yIGN1c3RvbSBjb2xvciBwaWNrZXJcbiAgICB0aGlzLmN1c3RvbUNvbG9ySW5wdXQgPSBSZWFjdC5jcmVhdGVSZWYoKTsgLy8gVXNlZCB0byBkZXRlcm1pbmUgY29udHJhc3QgaWNvbiBjb2xvciBmb3IgY3VzdG9tIGNvbG9yIHBpY2tlclxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVDYXRlZ29yeTogbnVsbCxcbiAgICAgIGFjdGl2ZUNhdGVnb3J5Rmx1ZW50SUQ6IG51bGwsXG4gICAgICBzaG93Q29sb3JQaWNrZXI6IGZhbHNlLFxuICAgICAgaW5wdXRUeXBlOiBcInJhZGlvXCIsXG4gICAgICBhY3RpdmVJZDogbnVsbCxcbiAgICAgIGlzQ3VzdG9tV2FsbHBhcGVyRXJyb3I6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByZWZlcnNEYXJrUXVlcnkgPSBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXG4gICAgICBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgLy8gV2FsbGxwYXBlciBjYXRlZ29yeSBzdWJwYW5lbCBzaG91bGQgY2xvc2Ugd2hlbiBwYXJlbnQgbWVudSBpcyBjbG9zZWRcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLmV4aXRFdmVudEZpcmVkICYmXG4gICAgICB0aGlzLnByb3BzLmV4aXRFdmVudEZpcmVkICE9PSBwcmV2UHJvcHMuZXhpdEV2ZW50RmlyZWRcbiAgICApIHtcbiAgICAgIHRoaXMuaGFuZGxlQmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNvbG9ySW5wdXQoZXZlbnQpIHtcbiAgICBsZXQgeyBpZCB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIC8vIFNldCBJRCB0byBpbmNsdWRlIGhleCB2YWx1ZSBvZiBjdXN0b20gY29sb3JcbiAgICBpZCA9IGBzb2xpZC1jb2xvci1waWNrZXItJHtldmVudC50YXJnZXQudmFsdWV9YDtcbiAgICBjb25zdCByZ2JDb2xvcnMgPSB0aGlzLmdldFJHQkNvbG9ycyhldmVudC50YXJnZXQudmFsdWUpO1xuXG4gICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgdG8gY3VzdG9tIGNvbG9yXG4gICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGByZ2IoJHtyZ2JDb2xvcnMudG9TdHJpbmcoKX0pYDtcblxuICAgIGlmICh0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGNvbG9ySW5wdXRCYWNrZ3JvdW5kID1cbiAgICAgICAgdGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50LmNoaWxkcmVuWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICAgIHRoaXMuY3VzdG9tQ29sb3JQaWNrZXJSZWYuY3VycmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICBjb2xvcklucHV0QmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAvLyBTZXQgaWNvbiBjb2xvciBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgY29sb3JcbiAgICBjb25zdCBpc0NvbG9yRGFyayA9IHRoaXMuaXNXYWxscGFwZXJDb2xvckRhcmsocmdiQ29sb3JzKTtcbiAgICBpZiAodGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50KSB7XG4gICAgICBpZiAoaXNDb2xvckRhcmspIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1kYXJrXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1kYXJrXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgYW55IHBvc3NpYmxlIGluaXRpYWwgY2xhc3Nlc1xuICAgICAgdGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgIFwiY3VzdG9tLWNvbG9yLXNldFwiLFxuICAgICAgICBcImN1c3RvbS1jb2xvci1kYXJrXCIsXG4gICAgICAgIFwiZGVmYXVsdC1jb2xvci1zZXRcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBTZXR0aW5nIHRoaXMgbm93IHNvIHdoZW4gd2UgcmVtb3ZlIHYxIHdlIGRvbid0IGhhdmUgdG8gbWlncmF0ZSB2MSB2YWx1ZXMuXG4gICAgdGhpcy5wcm9wcy5zZXRQcmVmKFwibmV3dGFiV2FsbHBhcGVycy53YWxscGFwZXJcIiwgaWQpO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlcmUncyBhIHNlcGFyYXRlIGV2ZW50IChkZWJvdW5jZWRIYW5kbGVDaGFuZ2UpIHRoYXQgZmlyZXMgdGhlIGhhbmRsZUNoYW5nZVxuICAvLyBldmVudCBidXQgaXMgZGVsYXllZCBzbyB0aGF0IGl0IGRvZXNuJ3QgZmlyZSBtdWx0aXBsZSBldmVudHMgd2hlbiBhIHVzZXJcbiAgLy8gaXMgc2VsZWN0aW5nIGEgY3VzdG9tIGNvbG9yIGJhY2tncm91bmRcbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgbGV0IHsgaWQgfSA9IGV2ZW50LnRhcmdldDtcblxuICAgIC8vIFNldCBJRCB0byBpbmNsdWRlIGhleCB2YWx1ZSBvZiBjdXN0b20gY29sb3JcbiAgICBpZiAoaWQgPT09IFwic29saWQtY29sb3ItcGlja2VyXCIpIHtcbiAgICAgIGlkID0gYHNvbGlkLWNvbG9yLXBpY2tlci0ke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xuICAgIH1cblxuICAgIHRoaXMucHJvcHMuc2V0UHJlZihcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCIsIGlkKTtcblxuICAgIGNvbnN0IHVwbG9hZGVkUHJldmlvdXNseSA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tQUkVGX1dBTExQQVBFUl9VUExPQURFRF9QUkVWSU9VU0xZXTtcblxuICAgIHRoaXMuaGFuZGxlVXNlckV2ZW50KGF0LldBTExQQVBFUl9DTElDSywge1xuICAgICAgc2VsZWN0ZWRfd2FsbHBhcGVyOiBpZCxcbiAgICAgIGhhZF9wcmV2aW91c193YWxscGFwZXI6ICEhdGhpcy5wcm9wcy5hY3RpdmVXYWxscGFwZXIsXG4gICAgICBoYWRfdXBsb2FkZWRfcHJldmlvdXNseTogISF1cGxvYWRlZFByZXZpb3VzbHksXG4gICAgfSk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBpbXBsZW1lbnRpbmcgYXJyb3cgbmF2aWdhdGlvbiBmb3Igd2FsbHBhcGVyIGNhdGVnb3J5IHNlbGVjdGlvblxuICBoYW5kbGVDYXRlZ29yeUtleURvd24oZXZlbnQsIGNhdGVnb3J5KSB7XG4gICAgY29uc3QgZ2V0SW5kZXggPSB0aGlzLmNhdGVnb3J5UmVmLmZpbmRJbmRleChjYXQgPT4gY2F0LmlkID09PSBjYXRlZ29yeSk7XG4gICAgaWYgKGdldEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuOyAvLyBwcmV2ZW50cyBlcnJvcnMgaWYgd2FsbHBhcGVyIGluZGV4IGlzbid0IGZvdW5kIHdoZW4gbmF2aWdhdGluZyB3aXRoIGFycm93IGtleXNcbiAgICB9XG5cbiAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gXCJydGxcIjsgLy8gcmV0dXJucyB0cnVlIGlmIHBhZ2UgbGFuZ3VhZ2UgaXMgcmlnaHQtdG8tbGVmdFxuICAgIGxldCBldmVudEtleSA9IGV2ZW50LmtleTtcblxuICAgIGlmIChldmVudEtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgfHwgZXZlbnRLZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICBldmVudEtleSA9IGV2ZW50S2V5ID09PSBcIkFycm93UmlnaHRcIiA/IFwiQXJyb3dMZWZ0XCIgOiBcIkFycm93UmlnaHRcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgbmV4dEluZGV4ID0gZ2V0SW5kZXg7XG5cbiAgICBpZiAoZXZlbnRLZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBuZXh0SW5kZXggPVxuICAgICAgICBnZXRJbmRleCArIDEgPCB0aGlzLmNhdGVnb3J5UmVmLmxlbmd0aCA/IGdldEluZGV4ICsgMSA6IGdldEluZGV4O1xuICAgIH0gZWxzZSBpZiAoZXZlbnRLZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIG5leHRJbmRleCA9IGdldEluZGV4IC0gMSA+PSAwID8gZ2V0SW5kZXggLSAxIDogZ2V0SW5kZXg7XG4gICAgfVxuXG4gICAgdGhpcy5jYXRlZ29yeVJlZltuZXh0SW5kZXhdLmZvY3VzKCk7XG4gIH1cblxuICAvLyBmdW5jdGlvbiBpbXBsZW1lbnRpbmcgYXJyb3cgbmF2aWdhdGlvbiBmb3Igd2FsbHBhcGVyIHNlbGVjdGlvblxuICBoYW5kbGVXYWxscGFwZXJLZXlEb3duKGV2ZW50LCB0aXRsZSkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiVGFiXCIpIHtcbiAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmJhY2tUb01lbnVCdXR0b24/LmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHRhYmJpbmcgd2l0aGluIHdhbGxwYXBlciBzZWxlY3Rpb24uIFdlIHNob3VsZCBvbmx5IGJlIHVzaW5nIHRoZSBUYWIga2V5IHRvIHRhYiBiZXR3ZWVuIGdyb3Vwc1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGlzUlRMID0gZG9jdW1lbnQuZGlyID09PSBcInJ0bFwiOyAvLyByZXR1cm5zIHRydWUgaWYgcGFnZSBsYW5ndWFnZSBpcyByaWdodC10by1sZWZ0XG4gICAgbGV0IGV2ZW50S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgaWYgKGV2ZW50S2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudEtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgaWYgKGlzUlRMKSB7XG4gICAgICAgIGV2ZW50S2V5ID0gZXZlbnRLZXkgPT09IFwiQXJyb3dSaWdodFwiID8gXCJBcnJvd0xlZnRcIiA6IFwiQXJyb3dSaWdodFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldEluZGV4ID0gdGhpcy53YWxscGFwZXJSZWYuZmluZEluZGV4KFxuICAgICAgd2FsbHBhcGVyID0+IHdhbGxwYXBlci5pZCA9PT0gdGl0bGVcbiAgICApO1xuXG4gICAgaWYgKGdldEluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuOyAvLyBwcmV2ZW50cyBlcnJvcnMgaWYgd2FsbHBhcGVyIGluZGV4IGlzbid0IGZvdW5kIHdoZW4gbmF2aWdhdGluZyB3aXRoIGFycm93IGtleXNcbiAgICB9XG5cbiAgICAvLyB0aGUgc2V0IGxheW91dCBvZiBjb2x1bW5zIHBlciByb3cgZm9yIHRoZSB3YWxscGFwZXIgc2VsZWN0aW9uXG4gICAgY29uc3QgY29sdW1uQ291bnQgPSAzO1xuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleDtcblxuICAgIGlmIChldmVudEtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIG5leHRJbmRleCA9XG4gICAgICAgIGdldEluZGV4ICsgMSA8IHRoaXMud2FsbHBhcGVyUmVmLmxlbmd0aCA/IGdldEluZGV4ICsgMSA6IGdldEluZGV4O1xuICAgIH0gZWxzZSBpZiAoZXZlbnRLZXkgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgIG5leHRJbmRleCA9IGdldEluZGV4IC0gMSA+PSAwID8gZ2V0SW5kZXggLSAxIDogZ2V0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChldmVudEtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgbmV4dEluZGV4ID1cbiAgICAgICAgZ2V0SW5kZXggKyBjb2x1bW5Db3VudCA8IHRoaXMud2FsbHBhcGVyUmVmLmxlbmd0aFxuICAgICAgICAgID8gZ2V0SW5kZXggKyBjb2x1bW5Db3VudFxuICAgICAgICAgIDogZ2V0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChldmVudEtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIG5leHRJbmRleCA9XG4gICAgICAgIGdldEluZGV4IC0gY29sdW1uQ291bnQgPj0gMCA/IGdldEluZGV4IC0gY29sdW1uQ291bnQgOiBnZXRJbmRleDtcbiAgICB9XG5cbiAgICB0aGlzLndhbGxwYXBlclJlZltuZXh0SW5kZXhdLnRhYkluZGV4ID0gMDtcbiAgICB0aGlzLndhbGxwYXBlclJlZltnZXRJbmRleF0udGFiSW5kZXggPSAtMTtcbiAgICB0aGlzLndhbGxwYXBlclJlZltuZXh0SW5kZXhdLmZvY3VzKCk7XG4gICAgdGhpcy53YWxscGFwZXJSZWZbbmV4dEluZGV4XS5jbGljaygpO1xuICB9XG5cbiAgaGFuZGxlUmVzZXQoKSB7XG4gICAgY29uc3QgdXBsb2FkZWRQcmV2aW91c2x5ID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BREVEX1BSRVZJT1VTTFldO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxscGFwZXIgPVxuICAgICAgdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXNbXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiXTtcblxuICAgIC8vIElmIGEgY3VzdG9tIHdhbGxwYXBlciBpcyBzZXQsIHJlbW92ZSBpdFxuICAgIGlmIChzZWxlY3RlZFdhbGxwYXBlciA9PT0gXCJjdXN0b21cIikge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuV0FMTFBBUEVSX1JFTU9WRV9VUExPQUQsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IGFjdGl2ZSB3YWxscGFwZXJcbiAgICB0aGlzLnByb3BzLnNldFByZWYoXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiLCBcIlwiKTtcblxuICAgIC8vIEZpcmUgV0FMTFBBUEVSX0NMSUNLIHRlbGVtZXRyeSBldmVudFxuICAgIHRoaXMuaGFuZGxlVXNlckV2ZW50KGF0LldBTExQQVBFUl9DTElDSywge1xuICAgICAgc2VsZWN0ZWRfd2FsbHBhcGVyOiBcIm5vbmVcIixcbiAgICAgIGhhZF9wcmV2aW91c193YWxscGFwZXI6ICEhdGhpcy5wcm9wcy5hY3RpdmVXYWxscGFwZXIsXG4gICAgICBoYWRfdXBsb2FkZWRfcHJldmlvdXNseTogISF1cGxvYWRlZFByZXZpb3VzbHksXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDYXRlZ29yeSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlQ2F0ZWdvcnk6IGV2ZW50LnRhcmdldC5pZCB9KTtcblxuICAgIHRoaXMuaGFuZGxlVXNlckV2ZW50KGF0LldBTExQQVBFUl9DQVRFR09SWV9DTElDSywgZXZlbnQudGFyZ2V0LmlkKTtcblxuICAgIGxldCBmbHVlbnRfaWQ7XG4gICAgc3dpdGNoIChldmVudC50YXJnZXQuaWQpIHtcbiAgICAgIGNhc2UgXCJhYnN0cmFjdHNcIjpcbiAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLWFic3RyYWN0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNlbGVzdGlhbFwiOlxuICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItY2F0ZWdvcnktdGl0bGUtY2VsZXN0aWFsXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBob3RvZ3JhcGhzXCI6XG4gICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci1jYXRlZ29yeS10aXRsZS1waG90b2dyYXBoc1wiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzb2xpZC1jb2xvcnNcIjpcbiAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLWNvbG9yc1wiO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDYXRlZ29yeUZsdWVudElEOiBmbHVlbnRfaWQgfSk7XG4gIH07XG5cbiAgLy8gQ3VzdG9tIHdhbGxwYXBlciBpbWFnZSB1cGxvYWRcbiAgYXN5bmMgaGFuZGxlVXBsb2FkKCkge1xuICAgIGNvbnN0IHdhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplRW5hYmxlZCA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tQUkVGX1dBTExQQVBFUl9VUExPQURfTUFYX0ZJTEVfU0laRV9FTkFCTEVEXTtcblxuICAgIGNvbnN0IHdhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BRF9NQVhfRklMRV9TSVpFXTtcblxuICAgIGNvbnN0IHVwbG9hZGVkUHJldmlvdXNseSA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tQUkVGX1dBTExQQVBFUl9VUExPQURFRF9QUkVWSU9VU0xZXTtcblxuICAgIC8vIENyZWF0ZSBhIGZpbGUgaW5wdXQgc2luY2UgY2F0ZWdvcnkgYnV0dG9ucyBhcmUgcmFkaW8gaW5wdXRzXG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGZpbGVJbnB1dC50eXBlID0gXCJmaWxlXCI7XG4gICAgZmlsZUlucHV0LmFjY2VwdCA9IFwiaW1hZ2UvKlwiOyAvLyBvbmx5IGFsbG93IGltYWdlIGZpbGVzXG5cbiAgICAvLyBDYXRjaCBjYW5jZWwgZXZlbnRzXG4gICAgZmlsZUlucHV0Lm9uY2FuY2VsID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ3VzdG9tV2FsbHBhcGVyRXJyb3I6IGZhbHNlIH0pO1xuICAgIH07XG5cbiAgICAvLyBSZXNldCBlcnJvciBzdGF0ZSB3aGVuIHVzZXIgYmVnaW5zIGZpbGUgc2VsZWN0aW9uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ3VzdG9tV2FsbHBhcGVyRXJyb3I6IGZhbHNlIH0pO1xuXG4gICAgLy8gRmlyZSB3aGVuIHVzZXIgc2VsZWN0cyBhIGZpbGVcbiAgICBmaWxlSW5wdXQub25jaGFuZ2UgPSBhc3luYyBldmVudCA9PiB7XG4gICAgICBjb25zdCBbZmlsZV0gPSBldmVudC50YXJnZXQuZmlsZXM7XG5cbiAgICAgIC8vIExpbWl0IGltYWdlIHVwbG9hZGVkIHRvIGEgbWF4aW11bSBmaWxlIHNpemUgaWYgZW5hYmxlZFxuICAgICAgLy8gTm90ZTogVGhlIG1heCBmaWxlIHNpemUgcHJlZiAoY3VzdG9tV2FsbHBhcGVyLmZpbGVTaXplKSBpcyBjb252ZXJ0ZWQgdG8gbWVnYWJ5dGVzIChNQilcbiAgICAgIC8vIEV4YW1wbGU6IGlmIHByZWYgdmFsdWUgaXMgNSwgbWF4IGZpbGUgc2l6ZSBpcyA1IE1CXG4gICAgICBjb25zdCBtYXhTaXplID0gd2FsbHBhcGVyVXBsb2FkTWF4RmlsZVNpemUgKiAxMDI0ICogMTAyNDtcbiAgICAgIGlmICh3YWxscGFwZXJVcGxvYWRNYXhGaWxlU2l6ZUVuYWJsZWQgJiYgZmlsZSAmJiBmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGaWxlIHNpemUgZXhjZWVkcyBsaW1pdFwiKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ3VzdG9tV2FsbHBhcGVyRXJyb3I6IHRydWUgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LldBTExQQVBFUl9VUExPQUQsXG4gICAgICAgICAgICBkYXRhOiBmaWxlLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU2V0IGFjdGl2ZSB3YWxscGFwZXIgSUQgdG8gXCJjdXN0b21cIlxuICAgICAgICB0aGlzLnByb3BzLnNldFByZWYoXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiLCBcImN1c3RvbVwiKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHVwbG9hZGVkUHJldmlvdXNseSBwcmVmIHRvIFRSVUVcbiAgICAgICAgLy8gTm90ZTogdGhpcyBwcmVmIHVzZWQgZm9yIHRlbGVtZXRyeS4gRG8gbm90IHJlc2V0IHRvIGZhbHNlLlxuICAgICAgICB0aGlzLnByb3BzLnNldFByZWYoUFJFRl9XQUxMUEFQRVJfVVBMT0FERURfUFJFVklPVVNMWSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVVc2VyRXZlbnQoYXQuV0FMTFBBUEVSX0NMSUNLLCB7XG4gICAgICAgICAgc2VsZWN0ZWRfd2FsbHBhcGVyOiBcImN1c3RvbVwiLFxuICAgICAgICAgIGhhZF9wcmV2aW91c193YWxscGFwZXI6ICEhdGhpcy5wcm9wcy5hY3RpdmVXYWxscGFwZXIsXG4gICAgICAgICAgaGFkX3VwbG9hZGVkX3ByZXZpb3VzbHk6ICEhdXBsb2FkZWRQcmV2aW91c2x5LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmlsZUlucHV0LmNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVCYWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDYXRlZ29yeTogbnVsbCB9KTtcbiAgICB0aGlzLmNhdGVnb3J5UmVmWzBdPy5mb2N1cygpO1xuICB9XG5cbiAgLy8gUmVjb3JkIHVzZXIgaW50ZXJhY3Rpb24gd2hlbiBjaGFuZ2luZyB3YWxscGFwZXIgYW5kIHJlc2V0aW5nIHdhbGxwYXBlciB0byBkZWZhdWx0XG4gIGhhbmRsZVVzZXJFdmVudCh0eXBlLCBkYXRhKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5Pbmx5VG9NYWluKHsgdHlwZSwgZGF0YSB9KSk7XG4gIH1cblxuICBzZXRBY3RpdmVJZCA9IGlkID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlSWQ6IGlkIH0pOyAvLyBTZXQgdGhlIGFjdGl2ZSBJRFxuICB9O1xuXG4gIGdldFJHQkNvbG9ycyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggIT09IDcpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByID0gcGFyc2VJbnQoaW5wdXQuc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgY29uc3QgZyA9IHBhcnNlSW50KGlucHV0LnN1YnN0cigzLCAyKSwgMTYpO1xuICAgIGNvbnN0IGIgPSBwYXJzZUludChpbnB1dC5zdWJzdHIoNSwgMiksIDE2KTtcblxuICAgIHJldHVybiBbciwgZywgYl07XG4gIH1cblxuICBpc1dhbGxwYXBlckNvbG9yRGFyayhbciwgZywgYl0pIHtcbiAgICByZXR1cm4gMC4yMTI1ICogciArIDAuNzE1NCAqIGcgKyAwLjA3MjEgKiBiIDw9IDExMDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcmVmcyA9IHRoaXMucHJvcHMuUHJlZnMudmFsdWVzO1xuICAgIGNvbnN0IHsgd2FsbHBhcGVyTGlzdCwgY2F0ZWdvcmllcyB9ID0gdGhpcy5wcm9wcy5XYWxscGFwZXJzO1xuICAgIGNvbnN0IHsgYWN0aXZlV2FsbHBhcGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlQ2F0ZWdvcnksIHNob3dDb2xvclBpY2tlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGFjdGl2ZUNhdGVnb3J5Rmx1ZW50SUQgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGZpbHRlcmVkV2FsbHBhcGVycyA9IHdhbGxwYXBlckxpc3QuZmlsdGVyKFxuICAgICAgd2FsbHBhcGVyID0+IHdhbGxwYXBlci5jYXRlZ29yeSA9PT0gYWN0aXZlQ2F0ZWdvcnlcbiAgICApO1xuICAgIGNvbnN0IHdhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BRF9NQVhfRklMRV9TSVpFXTtcblxuICAgIGZ1bmN0aW9uIHJlZHVjZUNvbG9yc1RvRml0Q3VzdG9tQ29sb3JJbnB1dChhcnIpIHtcbiAgICAgIC8vIFJlZHVjZSB0aGUgYW1vdW50IG9mIGN1c3RvbSBjb2xvcnMgdG8gbWFrZSBzcGFjZSBmb3IgdGhlIGN1c3RvbSBjb2xvciBwaWNrZXJcbiAgICAgIHdoaWxlIChhcnIubGVuZ3RoICUgMyAhPT0gMikge1xuICAgICAgICBhcnIucG9wKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGxldCB3YWxscGFwZXJDdXN0b21Tb2xpZENvbG9ySGV4ID0gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdGVkV2FsbHBhcGVyID0gcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiXTtcblxuICAgIC8vIFVzZXIgaGFzIHByZXZpb3VzIHNlbGVjdGVkIGEgY3VzdG9tIGNvbG9yXG4gICAgaWYgKHNlbGVjdGVkV2FsbHBhcGVyLmluY2x1ZGVzKFwic29saWQtY29sb3ItcGlja2VyXCIpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbG9yUGlja2VyOiB0cnVlIH0pO1xuICAgICAgY29uc3QgcmVnZXggPSAvIyhbYS1mQS1GMC05XXs2fSkvO1xuICAgICAgW3dhbGxwYXBlckN1c3RvbVNvbGlkQ29sb3JIZXhdID0gc2VsZWN0ZWRXYWxscGFwZXIubWF0Y2gocmVnZXgpO1xuICAgIH1cblxuICAgIC8vIEVuYWJsZSBjdXN0b20gY29sb3Igc2VsZWN0IGlmIHByZWYnZWQgb25cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dDb2xvclBpY2tlcjogcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLmN1c3RvbUNvbG9yLmVuYWJsZWRcIl0sXG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIG9mIHNvbGlkIGNvbG9ycyB0byBtYWtlIHNwYWNlIGZvciBjdXN0b20gY29sb3IgcGlja2VyXG4gICAgaWYgKFxuICAgICAgcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLmN1c3RvbUNvbG9yLmVuYWJsZWRcIl0gJiZcbiAgICAgIGFjdGl2ZUNhdGVnb3J5ID09PSBcInNvbGlkLWNvbG9yc1wiXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFdhbGxwYXBlcnMgPVxuICAgICAgICByZWR1Y2VDb2xvcnNUb0ZpdEN1c3RvbUNvbG9ySW5wdXQoZmlsdGVyZWRXYWxscGFwZXJzKTtcbiAgICB9XG5cbiAgICAvLyBCdWcgMTk1MzAxMiAtIElmIG5vdGhpbmcgc2VsZWN0ZWQsIGRlZmF1bHQgdG8gY29sb3Igb2YgY3VzdG9taXplIHBhbmVsXG4gICAgLy8gLS1jb2xvci1ibHVlLTcwIDogIzA1NDA5NlxuICAgIC8vIC0tY29sb3ItYmx1ZS0wNSA6ICNkZWVhZmNcbiAgICBjb25zdCBzdGFydGVyQ29sb3JIZXggPSB0aGlzLnByZWZlcnNEYXJrUXVlcnk/Lm1hdGNoZXNcbiAgICAgID8gXCIjMDU0MDk2XCJcbiAgICAgIDogXCIjZGVlYWZjXCI7XG5cbiAgICAvLyBTZXQgaW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29sb3IgcGlja2VyIChkZXBlbmRpbmcgaWYgdGhlIHVzZXIgaGFzIGFscmVhZHkgc2V0IGEgY3VzdG9tIGNvbG9yKVxuICAgIGxldCBpbml0U3RhdGVDbGFzc25hbWUgPSB3YWxscGFwZXJDdXN0b21Tb2xpZENvbG9ySGV4XG4gICAgICA/IFwiY3VzdG9tLWNvbG9yLXNldFwiXG4gICAgICA6IFwiZGVmYXVsdC1jb2xvci1zZXRcIjtcblxuICAgIC8vIElmIGEgY3VzdG9tIGNvbG9yIHBpY2tlciBpcyBzZXQsIG1ha2Ugc3VyZSB0aGUgaWNvbiBoYXMgdGhlIGNvcnJlY3QgY29udHJhc3RcbiAgICBpZiAod2FsbHBhcGVyQ3VzdG9tU29saWRDb2xvckhleCkge1xuICAgICAgY29uc3QgcmdiQ29sb3JzID0gdGhpcy5nZXRSR0JDb2xvcnMod2FsbHBhcGVyQ3VzdG9tU29saWRDb2xvckhleCk7XG4gICAgICBjb25zdCBpc0NvbG9yRGFyayA9IHRoaXMuaXNXYWxscGFwZXJDb2xvckRhcmsocmdiQ29sb3JzKTtcbiAgICAgIGlmIChpc0NvbG9yRGFyaykge1xuICAgICAgICBpbml0U3RhdGVDbGFzc25hbWUgKz0gXCIgY3VzdG9tLWNvbG9yLWRhcmtcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29sb3JQaWNrZXJJbnB1dCA9XG4gICAgICBzaG93Q29sb3JQaWNrZXIgJiYgYWN0aXZlQ2F0ZWdvcnkgPT09IFwic29saWQtY29sb3JzXCIgPyAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B0aGVtZS1jdXN0b20tY29sb3ItcGlja2VyICR7aW5pdFN0YXRlQ2xhc3NuYW1lfWB9XG4gICAgICAgICAgcmVmPXt0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmfVxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbklucHV0PXt0aGlzLmhhbmRsZUNvbG9ySW5wdXR9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5kZWJvdW5jZWRIYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldEFjdGl2ZUlkKFwic29saWQtY29sb3ItcGlja2VyXCIpfSAvL1xuICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgIG5hbWU9e2B3YWxscGFwZXItc29saWQtY29sb3ItcGlja2VyYH1cbiAgICAgICAgICAgIGlkPVwic29saWQtY29sb3ItcGlja2VyXCJcbiAgICAgICAgICAgIC8vIGFyaWEtY2hlY2tlZCBpcyBub3QgYXBwbGljYWJsZSBmb3IgaW5wdXRbdHlwZT1cImNvbG9yXCJdIGVsZW1lbnRzXG4gICAgICAgICAgICBhcmlhLWN1cnJlbnQ9e3RoaXMuc3RhdGUuYWN0aXZlSWQgPT09IFwic29saWQtY29sb3ItcGlja2VyXCJ9XG4gICAgICAgICAgICB2YWx1ZT17d2FsbHBhcGVyQ3VzdG9tU29saWRDb2xvckhleCB8fCBzdGFydGVyQ29sb3JIZXh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3YWxscGFwZXItaW5wdXRcbiAgICAgICAgICAgICAgJHt0aGlzLnN0YXRlLmFjdGl2ZUlkID09PSBcInNvbGlkLWNvbG9yLXBpY2tlclwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgIHJlZj17dGhpcy5jdXN0b21Db2xvcklucHV0fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPVwic29saWQtY29sb3ItcGlja2VyXCJcbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13YWxscGFwZXItY3VzdG9tLWNvbG9yXCJcbiAgICAgICAgICA+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICBcIlwiXG4gICAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgPGgyIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13YWxscGFwZXItdGl0bGVcIj48L2gyPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIndhbGxwYXBlcnMtcmVzZXRcIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZXNldH1cbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13YWxscGFwZXItcmVzZXRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cImdyaWRcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJXYWxscGFwZXIgY2F0ZWdvcnkgc2VsZWN0aW9uLiBVc2UgYXJyb3cga2V5cyB0byBuYXZpZ2F0ZS5cIlxuICAgICAgICA+XG4gICAgICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT1cImNhdGVnb3J5LWxpc3RcIj5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkTGlzdCA9IHdhbGxwYXBlckxpc3QuZmlsdGVyKFxuICAgICAgICAgICAgICAgIHdhbGxwYXBlciA9PiB3YWxscGFwZXIuY2F0ZWdvcnkgPT09IGNhdGVnb3J5XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVdhbGxwYXBlck9iaiA9XG4gICAgICAgICAgICAgICAgYWN0aXZlV2FsbHBhcGVyICYmXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRMaXN0LmZpbmQod3AgPT4gd3AudGl0bGUgPT09IGFjdGl2ZVdhbGxwYXBlcik7XG4gICAgICAgICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IGFjdGl2ZVdhbGxwYXBlck9iaiB8fCBmaWx0ZXJlZExpc3RbMF07XG4gICAgICAgICAgICAgIGxldCBmbHVlbnRfaWQ7XG4gICAgICAgICAgICAgIHN3aXRjaCAoY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiYWJzdHJhY3RzXCI6XG4gICAgICAgICAgICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItY2F0ZWdvcnktdGl0bGUtYWJzdHJhY3RcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjZWxlc3RpYWxcIjpcbiAgICAgICAgICAgICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci1jYXRlZ29yeS10aXRsZS1jZWxlc3RpYWxcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjdXN0b20td2FsbHBhcGVyXCI6XG4gICAgICAgICAgICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItdXBsb2FkLWltYWdlXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicGhvdG9ncmFwaHNcIjpcbiAgICAgICAgICAgICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci1jYXRlZ29yeS10aXRsZS1waG90b2dyYXBoc1wiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcInNvbGlkLWNvbG9yc1wiOlxuICAgICAgICAgICAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLWNvbG9yc1wiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGh1bWJuYWlsPy53YWxscGFwZXJVcmwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGh1bWJuYWlsLndhbGxwYXBlclVybH0pYDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aHVtYm5haWw/LnNvbGlkX2NvbG9yIHx8IFwiXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlSZWZbaW5kZXhdID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBpZD17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuaGFuZGxlQ2F0ZWdvcnlLZXlEb3duKGUsIGNhdGVnb3J5KX1cbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG92ZXJyaWRlcyBmb3IgY3VzdG9tIHdhbGxwYXBlciB1cGxvYWQgVUlcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgIT09IFwiY3VzdG9tLXdhbGxwYXBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlQ2F0ZWdvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5oYW5kbGVVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ICE9PSBcImN1c3RvbS13YWxscGFwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgd2FsbHBhcGVyLWlucHV0YFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBgd2FsbHBhcGVyLWlucHV0IHRoZW1lLWN1c3RvbS13YWxscGFwZXJgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2luZGV4ID09PSAwID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgICB7Li4uKGNhdGVnb3J5ID09PSBcImN1c3RvbS13YWxscGFwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgID8geyBcImFyaWEtZXJyb3JtZXNzYWdlXCI6IFwiY3VzdG9tV2FsbHBhcGVyRXJyb3JcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgOiB7fSl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e2NhdGVnb3J5fSBkYXRhLWwxMG4taWQ9e2ZsdWVudF9pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtmbHVlbnRfaWR9XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0N1c3RvbVdhbGxwYXBlckVycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLXdhbGxwYXBlci1lcnJvclwiIGlkPVwiY3VzdG9tV2FsbHBhcGVyRXJyb3JcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWluZm9cIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXdhbGxwYXBlci1lcnJvci1tYXgtZmlsZS1zaXplXCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz17YHtcImZpbGVfc2l6ZVwiOiAke3dhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplfX1gfVxuICAgICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICBpbj17ISFhY3RpdmVDYXRlZ29yeX1cbiAgICAgICAgICB0aW1lb3V0PXszMDB9XG4gICAgICAgICAgY2xhc3NOYW1lcz1cIndhbGxwYXBlci1saXN0XCJcbiAgICAgICAgICB1bm1vdW50T25FeGl0PXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2F0ZWdvcnkgd2FsbHBhcGVyLWxpc3QgaWdub3JlLWNvbG9yLW1vZGVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXJyb3ctYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXthY3RpdmVDYXRlZ29yeUZsdWVudElEfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUJhY2t9XG4gICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFja1RvTWVudUJ1dHRvbiA9IGVsO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgcm9sZT1cImdyaWRcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiV2FsbHBhcGVyIHNlbGVjdGlvbi4gVXNlIGFycm93IGtleXMgdG8gbmF2aWdhdGUuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFdhbGxwYXBlcnMubWFwKFxuICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICB7IHRpdGxlLCB0aGVtZSwgZmx1ZW50X2lkLCBzb2xpZF9jb2xvciwgd2FsbHBhcGVyVXJsIH0sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmICh3YWxscGFwZXJVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7d2FsbHBhcGVyVXJsfSlgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9IHNvbGlkX2NvbG9yIHx8IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53YWxscGFwZXJSZWZbaW5kZXhdID0gZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB0aGlzLmhhbmRsZVdhbGxwYXBlcktleURvd24oZSwgdGl0bGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2B3YWxscGFwZXItJHt0aXRsZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGl0bGUgPT09IGFjdGl2ZVdhbGxwYXBlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jaGVja2VkPXt0aXRsZSA9PT0gYWN0aXZlV2FsbHBhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3YWxscGFwZXItaW5wdXQgdGhlbWUtJHt0aGVtZX0gJHt0aGlzLnN0YXRlLmFjdGl2ZUlkID09PSB0aXRsZSA/IFwiYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0QWN0aXZlSWQodGl0bGUpfSAvL1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aW5kZXggPT09IDAgPyAwIDogLTF9IC8vdGhlIGZpcnN0IHdhbGxwYXBlciBpbiB0aGUgYXJyYXkgd2lsbCBoYXZlIGEgdGFiaW5kZXggb2YgMCBzbyB3ZSBjYW4gdGFiIGludG8gaXQuIFRoZSByZXN0IHdpbGwgaGF2ZSBhIHRhYmluZGV4IG9mIC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzci1vbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXtmbHVlbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmbHVlbnRfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2NvbG9yUGlja2VySW5wdXR9XG4gICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFdhbGxwYXBlckNhdGVnb3JpZXMgPSBjb25uZWN0KHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBXYWxscGFwZXJzOiBzdGF0ZS5XYWxscGFwZXJzLFxuICAgIFByZWZzOiBzdGF0ZS5QcmVmcyxcbiAgfTtcbn0pKF9XYWxscGFwZXJDYXRlZ29yaWVzKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjIH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgU2VjdGlvbnNNZ210UGFuZWwgfSBmcm9tIFwiLi4vU2VjdGlvbnNNZ210UGFuZWwvU2VjdGlvbnNNZ210UGFuZWxcIjtcbmltcG9ydCB7IFdhbGxwYXBlckNhdGVnb3JpZXMgfSBmcm9tIFwiLi4vLi4vV2FsbHBhcGVyQ2F0ZWdvcmllcy9XYWxscGFwZXJDYXRlZ29yaWVzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb250ZW50U2VjdGlvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdCA9IHRoaXMub25QcmVmZXJlbmNlU2VsZWN0LmJpbmQodGhpcyk7XG5cbiAgICAvLyBSZWZzIGFyZSBuZWNlc3NhcnkgZm9yIGR5bmFtaWNhbGx5IG1lYXN1cmluZyBkcmF3ZXIgaGVpZ2h0cyBmb3Igc2xpZGUgYW5pbWF0aW9uc1xuICAgIHRoaXMudG9wU2l0ZXNEcmF3ZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLnBvY2tldERyYXdlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgaW5wdXRVc2VyRXZlbnQoZXZlbnRTb3VyY2UsIGV2ZW50VmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuVXNlckV2ZW50KHtcbiAgICAgICAgZXZlbnQ6IFwiUFJFRl9DSEFOR0VEXCIsXG4gICAgICAgIHNvdXJjZTogZXZlbnRTb3VyY2UsXG4gICAgICAgIHZhbHVlOiB7IHN0YXR1czogZXZlbnRWYWx1ZSwgbWVudV9zb3VyY2U6IFwiQ1VTVE9NSVpFX01FTlVcIiB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb25QcmVmZXJlbmNlU2VsZWN0KGUpIHtcbiAgICAvLyBldmVudFNvdXJjZTogV0VBVEhFUiB8IFRPUF9TSVRFUyB8IFRPUF9TVE9SSUVTXG4gICAgY29uc3QgeyBwcmVmZXJlbmNlLCBldmVudFNvdXJjZSB9ID0gZS50YXJnZXQuZGF0YXNldDtcbiAgICBsZXQgdmFsdWU7XG4gICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICB2YWx1ZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJJTlBVVFwiKSB7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICBpZiAoZXZlbnRTb3VyY2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dFVzZXJFdmVudChldmVudFNvdXJjZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiTU9aLVRPR0dMRVwiKSB7XG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnByZXNzZWQ7XG4gICAgICBpZiAoZXZlbnRTb3VyY2UpIHtcbiAgICAgICAgdGhpcy5pbnB1dFVzZXJFdmVudChldmVudFNvdXJjZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByb3BzLnNldFByZWYocHJlZmVyZW5jZSwgdmFsdWUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zZXREcmF3ZXJNYXJnaW5zKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zZXREcmF3ZXJNYXJnaW5zKCk7XG4gIH1cblxuICBzZXREcmF3ZXJNYXJnaW5zKCkge1xuICAgIHRoaXMuc2V0RHJhd2VyTWFyZ2luKFxuICAgICAgYFRPUF9TSVRFU2AsXG4gICAgICB0aGlzLnByb3BzLmVuYWJsZWRTZWN0aW9ucy50b3BTaXRlc0VuYWJsZWRcbiAgICApO1xuICAgIHRoaXMuc2V0RHJhd2VyTWFyZ2luKFxuICAgICAgYFRPUF9TVE9SSUVTYCxcbiAgICAgIHRoaXMucHJvcHMuZW5hYmxlZFNlY3Rpb25zLnBvY2tldEVuYWJsZWRcbiAgICApO1xuICB9XG5cbiAgc2V0RHJhd2VyTWFyZ2luKGRyYXdlcklELCBpc09wZW4pIHtcbiAgICBsZXQgZHJhd2VyUmVmO1xuXG4gICAgaWYgKGRyYXdlcklEID09PSBgVE9QX1NJVEVTYCkge1xuICAgICAgZHJhd2VyUmVmID0gdGhpcy50b3BTaXRlc0RyYXdlclJlZi5jdXJyZW50O1xuICAgIH0gZWxzZSBpZiAoZHJhd2VySUQgPT09IGBUT1BfU1RPUklFU2ApIHtcbiAgICAgIGRyYXdlclJlZiA9IHRoaXMucG9ja2V0RHJhd2VyUmVmLmN1cnJlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZHJhd2VyUmVmKSB7XG4gICAgICBsZXQgZHJhd2VySGVpZ2h0ID1cbiAgICAgICAgcGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkcmF3ZXJSZWYpPy5oZWlnaHQpIHx8IDA7XG5cbiAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgZHJhd2VyUmVmLnN0eWxlLm1hcmdpblRvcCA9IFwidmFyKC0tc3BhY2UtbGFyZ2UpXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcmF3ZXJSZWYuc3R5bGUubWFyZ2luVG9wID0gYC0ke2RyYXdlckhlaWdodCArIDN9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBlbmFibGVkU2VjdGlvbnMsXG4gICAgICBlbmFibGVkV2lkZ2V0cyxcbiAgICAgIHBvY2tldFJlZ2lvbixcbiAgICAgIG1heUhhdmVJbmZlcnJlZFBlcnNvbmFsaXphdGlvbixcbiAgICAgIG1heUhhdmVXZWF0aGVyLFxuICAgICAgbWF5SGF2ZVRyZW5kaW5nU2VhcmNoLFxuICAgICAgbWF5SGF2ZVdpZGdldHMsXG4gICAgICBtYXlIYXZlVGltZXJXaWRnZXQsXG4gICAgICBtYXlIYXZlTGlzdHNXaWRnZXQsXG4gICAgICBvcGVuUHJlZmVyZW5jZXMsXG4gICAgICB3YWxscGFwZXJzRW5hYmxlZCxcbiAgICAgIGFjdGl2ZVdhbGxwYXBlcixcbiAgICAgIHNldFByZWYsXG4gICAgICBtYXlIYXZlVG9waWNTZWN0aW9ucyxcbiAgICAgIGV4aXRFdmVudEZpcmVkLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvcFNpdGVzRW5hYmxlZCxcbiAgICAgIHBvY2tldEVuYWJsZWQsXG4gICAgICB3ZWF0aGVyRW5hYmxlZCxcbiAgICAgIHRyZW5kaW5nU2VhcmNoRW5hYmxlZCxcbiAgICAgIHNob3dJbmZlcnJlZFBlcnNvbmFsaXphdGlvbkVuYWJsZWQsXG4gICAgICB0b3BTaXRlc1Jvd3NDb3VudCxcbiAgICB9ID0gZW5hYmxlZFNlY3Rpb25zO1xuICAgIGNvbnN0IHsgdGltZXJFbmFibGVkLCBsaXN0c0VuYWJsZWQgfSA9IGVuYWJsZWRXaWRnZXRzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZS1zZWN0aW9uXCI+XG4gICAgICAgIHt3YWxscGFwZXJzRW5hYmxlZCAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbHBhcGVycy1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxXYWxscGFwZXJDYXRlZ29yaWVzXG4gICAgICAgICAgICAgICAgc2V0UHJlZj17c2V0UHJlZn1cbiAgICAgICAgICAgICAgICBhY3RpdmVXYWxscGFwZXI9e2FjdGl2ZVdhbGxwYXBlcn1cbiAgICAgICAgICAgICAgICBleGl0RXZlbnRGaXJlZD17ZXhpdEV2ZW50RmlyZWR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBJZiB3aWRnZXRzIHNlY3Rpb24gaXMgdmlzaWJsZSwgaGlkZSB0aGlzIGRpdmlkZXIgKi99XG4gICAgICAgICAgICB7IW1heUhhdmVXaWRnZXRzICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiIHJvbGU9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7bWF5SGF2ZVdpZGdldHMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0cy1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDIgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS13aWRnZXQtc2VjdGlvbi10aXRsZVwiPjwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3Mtd2lkZ2V0c1wiPlxuICAgICAgICAgICAgICB7LyogV2VhdGhlciAqL31cbiAgICAgICAgICAgICAge21heUhhdmVXZWF0aGVyICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwid2VhdGhlci1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ3ZWF0aGVyLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNzZWQ9e3dlYXRoZXJFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwic2hvd1dlYXRoZXJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWV2ZW50U291cmNlPVwiV0VBVEhFUlwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20td2lkZ2V0LXdlYXRoZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIExpc3RzICovfVxuICAgICAgICAgICAgICB7bWF5SGF2ZUxpc3RzV2lkZ2V0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibGlzdHMtd2lkZ2V0LXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICBpZD1cImxpc3RzLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgIHByZXNzZWQ9e2xpc3RzRW5hYmxlZCB8fCBudWxsfVxuICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5vblByZWZlcmVuY2VTZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cIndpZGdldHMubGlzdHMuZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJXSURHRVRfTElTVFNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXdpZGdldC1saXN0cy10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogVGltZXIgKi99XG4gICAgICAgICAgICAgIHttYXlIYXZlVGltZXJXaWRnZXQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aW1lci13aWRnZXQtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGltZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZD17dGltZXJFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwid2lkZ2V0cy5mb2N1c1RpbWVyLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWV2ZW50U291cmNlPVwiV0lER0VUX1RJTUVSXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS13aWRnZXQtdGltZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgey8qIFRyZW5kaW5nIFNlYXJjaCAqL31cbiAgICAgICAgICAgICAge21heUhhdmVUcmVuZGluZ1NlYXJjaCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRyZW5kaW5nLXNlYXJjaC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0cmVuZGluZy1zZWFyY2gtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZD17dHJlbmRpbmdTZWFyY2hFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwidHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJUUkVORElOR19TRUFSQ0hcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXdpZGdldC10cmVuZGluZy1zZWFyY2gtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpdmlkZXJcIiByb2xlPVwic2VwYXJhdG9yXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZ3MtdG9nZ2xlc1wiPlxuICAgICAgICAgIHsvKiBOb3RlOiBJZiB3aWRnZXRzIGFyZSBlbmFibGVkLCB0aGUgd2VhdGhlciB0b2dnbGUgd2lsbCBiZSBtb3ZlZCB1bmRlciBXaWRnZXRzIHN1YnNlY3Rpb24gKi99XG4gICAgICAgICAgeyFtYXlIYXZlV2lkZ2V0cyAmJiBtYXlIYXZlV2VhdGhlciAmJiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwid2VhdGhlci1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgICAgIGlkPVwid2VhdGhlci10b2dnbGVcIlxuICAgICAgICAgICAgICAgIHByZXNzZWQ9e3dlYXRoZXJFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cInNob3dXZWF0aGVyXCJcbiAgICAgICAgICAgICAgICBkYXRhLWV2ZW50U291cmNlPVwiV0VBVEhFUlwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS13ZWF0aGVyLXRvZ2dsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgey8qIE5vdGU6IElmIHdpZGdldHMgYXJlIGVuYWJsZWQsIHRoZSB0cmVuZGluZyBzZWFyY2ggdG9nZ2xlIHdpbGwgYmUgbW92ZWQgdW5kZXIgV2lkZ2V0cyBzdWJzZWN0aW9uICovfVxuICAgICAgICAgIHshbWF5SGF2ZVdpZGdldHMgJiYgbWF5SGF2ZVRyZW5kaW5nU2VhcmNoICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0cmVuZGluZy1zZWFyY2gtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgICBpZD1cInRyZW5kaW5nLXNlYXJjaC10b2dnbGVcIlxuICAgICAgICAgICAgICAgIHByZXNzZWQ9e3RyZW5kaW5nU2VhcmNoRW5hYmxlZCB8fCBudWxsfVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICBkYXRhLXByZWZlcmVuY2U9XCJ0cmVuZGluZ1NlYXJjaC5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICBkYXRhLWV2ZW50U291cmNlPVwiVFJFTkRJTkdfU0VBUkNIXCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXRyZW5kaW5nLXNlYXJjaC10b2dnbGVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxkaXYgaWQ9XCJzaG9ydGN1dHMtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgIGlkPVwic2hvcnRjdXRzLXRvZ2dsZVwiXG4gICAgICAgICAgICAgIHByZXNzZWQ9e3RvcFNpdGVzRW5hYmxlZCB8fCBudWxsfVxuICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5vblByZWZlcmVuY2VTZWxlY3R9XG4gICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cImZlZWRzLnRvcHNpdGVzXCJcbiAgICAgICAgICAgICAgZGF0YS1ldmVudFNvdXJjZT1cIlRPUF9TSVRFU1wiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tc2hvcnRjdXRzLXRvZ2dsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm5lc3RlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLXRvcC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vcmUtaW5mb3JtYXRpb25cIlxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMudG9wU2l0ZXNEcmF3ZXJSZWZ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInJvdy1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyb3ctY291bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cInRvcFNpdGVzUm93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RvcFNpdGVzUm93c0NvdW50fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRvcFNpdGVzRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJjdXN0b20tc2hvcnRjdXRzLXRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXJvdy1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz0ne1wibnVtXCI6IDF9J1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tcm93LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPSd7XCJudW1cIjogMn0nXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS1yb3ctc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWFyZ3M9J3tcIm51bVwiOiAzfSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXJvdy1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz0ne1wibnVtXCI6IDR9J1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9tb3otdG9nZ2xlPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3BvY2tldFJlZ2lvbiAmJiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwicG9ja2V0LXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgICAgaWQ9XCJwb2NrZXQtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBwcmVzc2VkPXtwb2NrZXRFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjdXN0b20tcG9ja2V0LXN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXByZWZlcmVuY2U9XCJmZWVkcy5zZWN0aW9uLnRvcHN0b3JpZXNcIlxuICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJUT1BfU1RPUklFU1wiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS1zdG9yaWVzLXRvZ2dsZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJuZXN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgIHsobWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uIHx8IG1heUhhdmVUb3BpY1NlY3Rpb25zKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9yZS1pbmZvLXBvY2tldC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9yZS1pbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMucG9ja2V0RHJhd2VyUmVmfVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrLXdyYXBwZXJcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImluZmVycmVkLXBlcnNvbmFsaXphdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21pemUtbWVudS1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBvY2tldEVuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93SW5mZXJyZWRQZXJzb25hbGl6YXRpb25FbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cImRpc2NvdmVyeXN0cmVhbS5zZWN0aW9ucy5wZXJzb25hbGl6YXRpb24uaW5mZXJyZWQudXNlci5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJJTkZFUlJFRF9QRVJTT05BTElaQVRJT05cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21pemUtbWVudS1jaGVja2JveC1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwiaW5mZXJyZWQtcGVyc29uYWxpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWNvbW1lbmRhdGlvbnMgaW5mZXJyZWQgZnJvbSB5b3VyIGFjdGl2aXR5IHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZSBmZWVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge21heUhhdmVUb3BpY1NlY3Rpb25zICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTWdtdFBhbmVsIGV4aXRFdmVudEZpcmVkPXtleGl0RXZlbnRGaXJlZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9tb3otdG9nZ2xlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiIHJvbGU9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBpZD1cInNldHRpbmdzLWxpbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZXh0ZXJuYWwtbGlua1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtvcGVuUHJlZmVyZW5jZXN9XG4gICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXNldHRpbmdzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IENvbnRlbnRTZWN0aW9uIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ3VzdG9taXplTWVudS9Db250ZW50U2VjdGlvbi9Db250ZW50U2VjdGlvblwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5cbmV4cG9ydCBjbGFzcyBfQ3VzdG9taXplTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uRW50ZXJlZCA9IHRoaXMub25FbnRlcmVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkV4aXRlZCA9IHRoaXMub25FeGl0ZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhpdEV2ZW50RmlyZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvbkVudGVyZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRFdmVudEZpcmVkOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5jbG9zZUJ1dHRvbikge1xuICAgICAgdGhpcy5jbG9zZUJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG9uRXhpdGVkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleGl0RXZlbnRGaXJlZDogdHJ1ZSB9KTtcbiAgICBpZiAodGhpcy5vcGVuQnV0dG9uKSB7XG4gICAgICB0aGlzLm9wZW5CdXR0b24uZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIHRpbWVvdXQ9ezMwMH1cbiAgICAgICAgICBjbGFzc05hbWVzPVwicGVyc29uYWxpemUtYW5pbWF0ZVwiXG4gICAgICAgICAgaW49eyF0aGlzLnByb3BzLnNob3dpbmd9XG4gICAgICAgICAgYXBwZWFyPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyc29uYWxpemUtYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b21pemUtcGFuZWwtaWNvbi1idXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbk9wZW4oKX1cbiAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk9wZW4oKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHJlZj17YyA9PiAodGhpcy5vcGVuQnV0dG9uID0gYyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICAgIHNyYz1cImNocm9tZTovL2dsb2JhbC9za2luL2ljb25zL2VkaXQtb3V0bGluZS5zdmdcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8bGFiZWwgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbWl6ZS1wYW5lbC1pY29uLWJ1dHRvbi1sYWJlbFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICAgICAgPENTU1RyYW5zaXRpb25cbiAgICAgICAgICB0aW1lb3V0PXsyNTB9XG4gICAgICAgICAgY2xhc3NOYW1lcz1cImN1c3RvbWl6ZS1hbmltYXRlXCJcbiAgICAgICAgICBpbj17dGhpcy5wcm9wcy5zaG93aW5nfVxuICAgICAgICAgIG9uRW50ZXJlZD17dGhpcy5vbkVudGVyZWR9XG4gICAgICAgICAgb25FeGl0ZWQ9e3RoaXMub25FeGl0ZWR9XG4gICAgICAgICAgYXBwZWFyPXt0cnVlfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9taXplLW1lbnVcIlxuICAgICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2V0dGluZ3MtZGlhbG9nLWxhYmVsXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvbi13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxtb3otYnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsb3NlKCl9XG4gICAgICAgICAgICAgICAgaWQ9XCJjbG9zZS1idXR0b25cIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJpY29uIGdob3N0XCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLWNsb3NlLW1lbnUtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBpY29uc3JjPVwiY2hyb21lOi8vZ2xvYmFsL3NraW4vaWNvbnMvY2xvc2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICByZWY9e2MgPT4gKHRoaXMuY2xvc2VCdXR0b24gPSBjKX1cbiAgICAgICAgICAgICAgPjwvbW96LWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbnRlbnRTZWN0aW9uXG4gICAgICAgICAgICAgIG9wZW5QcmVmZXJlbmNlcz17dGhpcy5wcm9wcy5vcGVuUHJlZmVyZW5jZXN9XG4gICAgICAgICAgICAgIHNldFByZWY9e3RoaXMucHJvcHMuc2V0UHJlZn1cbiAgICAgICAgICAgICAgZW5hYmxlZFNlY3Rpb25zPXt0aGlzLnByb3BzLmVuYWJsZWRTZWN0aW9uc31cbiAgICAgICAgICAgICAgZW5hYmxlZFdpZGdldHM9e3RoaXMucHJvcHMuZW5hYmxlZFdpZGdldHN9XG4gICAgICAgICAgICAgIHdhbGxwYXBlcnNFbmFibGVkPXt0aGlzLnByb3BzLndhbGxwYXBlcnNFbmFibGVkfVxuICAgICAgICAgICAgICBhY3RpdmVXYWxscGFwZXI9e3RoaXMucHJvcHMuYWN0aXZlV2FsbHBhcGVyfVxuICAgICAgICAgICAgICBwb2NrZXRSZWdpb249e3RoaXMucHJvcHMucG9ja2V0UmVnaW9ufVxuICAgICAgICAgICAgICBtYXlIYXZlVG9waWNTZWN0aW9ucz17dGhpcy5wcm9wcy5tYXlIYXZlVG9waWNTZWN0aW9uc31cbiAgICAgICAgICAgICAgbWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm1heUhhdmVJbmZlcnJlZFBlcnNvbmFsaXphdGlvblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG1heUhhdmVXZWF0aGVyPXt0aGlzLnByb3BzLm1heUhhdmVXZWF0aGVyfVxuICAgICAgICAgICAgICBtYXlIYXZlVHJlbmRpbmdTZWFyY2g9e3RoaXMucHJvcHMubWF5SGF2ZVRyZW5kaW5nU2VhcmNofVxuICAgICAgICAgICAgICBtYXlIYXZlV2lkZ2V0cz17dGhpcy5wcm9wcy5tYXlIYXZlV2lkZ2V0c31cbiAgICAgICAgICAgICAgbWF5SGF2ZVRpbWVyV2lkZ2V0PXt0aGlzLnByb3BzLm1heUhhdmVUaW1lcldpZGdldH1cbiAgICAgICAgICAgICAgbWF5SGF2ZUxpc3RzV2lkZ2V0PXt0aGlzLnByb3BzLm1heUhhdmVMaXN0c1dpZGdldH1cbiAgICAgICAgICAgICAgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9XG4gICAgICAgICAgICAgIGV4aXRFdmVudEZpcmVkPXt0aGlzLnN0YXRlLmV4aXRFdmVudEZpcmVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9zcGFuPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IEN1c3RvbWl6ZU1lbnUgPSBjb25uZWN0KHN0YXRlID0+ICh7XG4gIERpc2NvdmVyeVN0cmVhbTogc3RhdGUuRGlzY292ZXJ5U3RyZWFtLFxufSkpKF9DdXN0b21pemVNZW51KTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmV4cG9ydCBjb25zdCBJU19ORVdUQUIgPVxuICBnbG9iYWxUaGlzLmRvY3VtZW50ICYmIGdsb2JhbFRoaXMuZG9jdW1lbnQuZG9jdW1lbnRVUkkgPT09IFwiYWJvdXQ6bmV3dGFiXCI7XG5leHBvcnQgY29uc3QgTkVXVEFCX0RBUktfVEhFTUUgPSB7XG4gIG50cF9iYWNrZ3JvdW5kOiB7XG4gICAgcjogNDIsXG4gICAgZzogNDIsXG4gICAgYjogNDYsXG4gICAgYTogMSxcbiAgfSxcbiAgbnRwX2NhcmRfYmFja2dyb3VuZDoge1xuICAgIHI6IDY2LFxuICAgIGc6IDY1LFxuICAgIGI6IDc3LFxuICAgIGE6IDEsXG4gIH0sXG4gIG50cF90ZXh0OiB7XG4gICAgcjogMjQ5LFxuICAgIGc6IDI0OSxcbiAgICBiOiAyNTAsXG4gICAgYTogMSxcbiAgfSxcbiAgc2lkZWJhcjoge1xuICAgIHI6IDU2LFxuICAgIGc6IDU2LFxuICAgIGI6IDYxLFxuICAgIGE6IDEsXG4gIH0sXG4gIHNpZGViYXJfdGV4dDoge1xuICAgIHI6IDI0OSxcbiAgICBnOiAyNDksXG4gICAgYjogMjUwLFxuICAgIGE6IDEsXG4gIH0sXG59O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvLWFuZC13b3JkbWFyay13cmFwcGVyXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImxvZ28tYW5kLXdvcmRtYXJrXCJcbiAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1sb2dvLWFuZC13b3JkbWFya1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yZG1hcmtcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9oMT5cbiAgKTtcbn1cblxuZXhwb3J0IHsgTG9nbyB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgU2FmZUFuY2hvciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBVc2UgZGlzcGF0Y2ggaW5zdGVhZCBvZiBub3JtYWwgbGluayBjbGljayBiZWhhdmlvciB0byBpbmNsdWRlIHJlZmVycmVyXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzcGF0Y2gpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB7IGFsdEtleSwgYnV0dG9uLCBjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleSB9ID0gZXZlbnQ7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZXZlbnQ6IHsgYWx0S2V5LCBidXR0b24sIGN0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5IH0sXG4gICAgICAgICAgICByZWZlcnJlcjpcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5yZWZlcnJlciB8fCBcImh0dHBzOi8vZ2V0cG9ja2V0LmNvbS9yZWNvbW1lbmRhdGlvbnNcIixcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgYW5jaG9yJ3MgdXJsLCB3aGljaCBjb3VsZCBoYXZlIGJlZW4gY2xlYW5lZCB1cFxuICAgICAgICAgICAgdXJsOiBldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYsXG4gICAgICAgICAgICBpc19zcG9uc29yZWQ6IHRoaXMucHJvcHMuaXNTcG9uc29yZWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUHJvcGFnYXRlIGV2ZW50IGlmIHRoZXJlJ3MgYSBoYW5kbGVyXG4gICAgaWYgKHRoaXMucHJvcHMub25MaW5rQ2xpY2spIHtcbiAgICAgIHRoaXMucHJvcHMub25MaW5rQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHNhZmVVUkkodXJsKSB7XG4gICAgbGV0IHByb3RvY29sID0gbnVsbDtcbiAgICB0cnkge1xuICAgICAgcHJvdG9jb2wgPSBuZXcgVVJMKHVybCkucHJvdG9jb2w7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgY29uc3QgaXNBbGxvd2VkID0gW1wiaHR0cDpcIiwgXCJodHRwczpcIl0uaW5jbHVkZXMocHJvdG9jb2wpO1xuICAgIGlmICghaXNBbGxvd2VkKSB7XG4gICAgICBjb25zb2xlLndhcm4oYCR7dXJsfSBpcyBub3QgYWxsb3dlZCBmb3IgYW5jaG9yIHRhcmdldHMuYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB1cmwsIGNsYXNzTmFtZSwgdGl0bGUsIGlzU3BvbnNvcmVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGFuY2hvciA9IChcbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e3RoaXMuc2FmZVVSSSh1cmwpfVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgIGRhdGEtaXMtc3BvbnNvcmVkLWxpbms9eyEhaXNTcG9uc29yZWR9XG4gICAgICAgIHsuLi4odGhpcy5wcm9wcy50YWJJbmRleCA9PT0gMCB8fCB0aGlzLnByb3BzLnRhYkluZGV4XG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHJlZjogdGhpcy5wcm9wcy5zZXRSZWYsXG4gICAgICAgICAgICAgIHRhYkluZGV4OiB0aGlzLnByb3BzLnRhYkluZGV4LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pfVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvYT5cbiAgICApO1xuXG4gICAgcmV0dXJuIGFuY2hvcjtcbiAgfVxufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oaWRlQ29udGV4dCA9IHRoaXMuaGlkZUNvbnRleHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2hvdyA9IHRoaXMub25TaG93LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoaWRlQ29udGV4dCgpIHtcbiAgICB0aGlzLnByb3BzLm9uVXBkYXRlKGZhbHNlKTtcbiAgfVxuXG4gIG9uU2hvdygpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNob3cpIHtcbiAgICAgIHRoaXMucHJvcHMub25TaG93KCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5vblNob3coKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGdsb2JhbFRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGlkZUNvbnRleHQpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZ2xvYmFsVGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oaWRlQ29udGV4dCk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgLy8gRWF0IGFsbCBjbGlja3Mgb24gdGhlIGNvbnRleHQgbWVudSBzbyB0aGV5IGRvbid0IGJ1YmJsZSB1cCB0byB3aW5kb3cuXG4gICAgLy8gVGhpcyBwcmV2ZW50cyB0aGUgY29udGV4dCBtZW51IGZyb20gY2xvc2luZyB3aGVuIGNsaWNraW5nIGRpc2FibGVkIGl0ZW1zXG4gICAgLy8gb3IgdGhlIHNlcGFyYXRvcnMuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gRGlzYWJsaW5nIGZvY3VzIG9uIHRoZSBtZW51IHNwYW4gYWxsb3dzIHRoZSBmaXJzdCB0YWIgdG8gZm9jdXMgb24gdGhlIGZpcnN0IG1lbnUgaXRlbSBpbnN0ZWFkIG9mIHRoZSB3cmFwcGVyLlxuICAgIHJldHVybiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvaW50ZXJhY3RpdmUtc3VwcG9ydHMtZm9jdXNcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudVwiPlxuICAgICAgICA8dWxcbiAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1saXN0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGkpID0+XG4gICAgICAgICAgICBvcHRpb24udHlwZSA9PT0gXCJzZXBhcmF0b3JcIiA/IChcbiAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwic2VwYXJhdG9yXCIgcm9sZT1cInNlcGFyYXRvclwiIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBvcHRpb24udHlwZSAhPT0gXCJlbXB0eVwiICYmIChcbiAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBvcHRpb249e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgIGhpZGVDb250ZXh0PXt0aGlzLmhpZGVDb250ZXh0fVxuICAgICAgICAgICAgICAgICAga2V5Ym9hcmRBY2Nlc3M9e3RoaXMucHJvcHMua2V5Ym9hcmRBY2Nlc3N9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgX0NvbnRleHRNZW51SXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleVVwID0gdGhpcy5vbktleVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb2N1c0ZpcnN0ID0gdGhpcy5mb2N1c0ZpcnN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5wcm9wcy5oaWRlQ29udGV4dCgpO1xuICAgIHRoaXMucHJvcHMub3B0aW9uLm9uQ2xpY2soZXZlbnQpO1xuICB9XG5cbiAgLy8gRm9jdXMgdGhlIGZpcnN0IG1lbnUgaXRlbSBpZiB0aGUgbWVudSB3YXMgYWNjZXNzZWQgdmlhIHRoZSBrZXlib2FyZC5cbiAgZm9jdXNGaXJzdChidXR0b24pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5rZXlib2FyZEFjY2VzcyAmJiBidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgc2VsZWN0cyB0aGUgY29ycmVjdCBub2RlIGJhc2VkIG9uIHRoZSBrZXkgcHJlc3NlZFxuICBmb2N1c1NpYmxpbmcodGFyZ2V0LCBrZXkpIHtcbiAgICBjb25zdCB7IHBhcmVudE5vZGUgfSA9IHRhcmdldDtcbiAgICBjb25zdCBjbG9zZXN0U2libGluZ1NlbGVjdG9yID1cbiAgICAgIGtleSA9PT0gXCJBcnJvd1VwXCIgPyBcInByZXZpb3VzU2libGluZ1wiIDogXCJuZXh0U2libGluZ1wiO1xuICAgIGlmICghcGFyZW50Tm9kZVtjbG9zZXN0U2libGluZ1NlbGVjdG9yXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGFyZW50Tm9kZVtjbG9zZXN0U2libGluZ1NlbGVjdG9yXS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgcGFyZW50Tm9kZVtjbG9zZXN0U2libGluZ1NlbGVjdG9yXS5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlW2Nsb3Nlc3RTaWJsaW5nU2VsZWN0b3JdW1xuICAgICAgICBjbG9zZXN0U2libGluZ1NlbGVjdG9yXG4gICAgICBdLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGV2ZW50KSB7XG4gICAgY29uc3QgeyBvcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgLy8gdGFiIGdvZXMgZG93biBpbiBjb250ZXh0IG1lbnUsIHNoaWZ0ICsgdGFiIGdvZXMgdXAgaW4gY29udGV4dCBtZW51XG4gICAgICAgIC8vIGlmIHdlJ3JlIG9uIHRoZSBsYXN0IGl0ZW0sIG9uZSBtb3JlIHRhYiB3aWxsIGNsb3NlIHRoZSBjb250ZXh0IG1lbnVcbiAgICAgICAgLy8gc2ltaWxhcmx5LCBpZiB3ZSdyZSBvbiB0aGUgZmlyc3QgaXRlbSwgb25lIG1vcmUgc2hpZnQgKyB0YWIgd2lsbCBjbG9zZSBpdFxuICAgICAgICBpZiAoXG4gICAgICAgICAgKGV2ZW50LnNoaWZ0S2V5ICYmIG9wdGlvbi5maXJzdCkgfHxcbiAgICAgICAgICAoIWV2ZW50LnNoaWZ0S2V5ICYmIG9wdGlvbi5sYXN0KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnByb3BzLmhpZGVDb250ZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmZvY3VzU2libGluZyhldmVudC50YXJnZXQsIGV2ZW50LmtleSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVudGVyXCI6XG4gICAgICBjYXNlIFwiIFwiOlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLmhpZGVDb250ZXh0KCk7XG4gICAgICAgIG9wdGlvbi5vbkNsaWNrKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkVzY2FwZVwiOlxuICAgICAgICB0aGlzLnByb3BzLmhpZGVDb250ZXh0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFByZXZlbnRzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIHNwYWNlYmFyXG4gIC8vIHNjcm9sbGluZyB0aGUgcGFnZSAmIGF1dG8tdHJpZ2dlcmluZyBidXR0b25zLlxuICBvbktleVVwKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCIgXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9uIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IFtvcHRpb24uZGlzYWJsZWQgPyBcImRpc2FibGVkXCIgOiBcIlwiXS5qb2luKFwiIFwiKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9XCJjb250ZXh0LW1lbnUtaXRlbVwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgcm9sZT1cIm1lbnVpdGVtXCJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgICBvbktleVVwPXt0aGlzLm9uS2V5VXB9XG4gICAgICAgICAgcmVmPXtvcHRpb24uZmlyc3QgPyB0aGlzLmZvY3VzRmlyc3QgOiBudWxsfVxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9e1xuICAgICAgICAgICAgb3B0aW9uLmlkID09PSBcIm5ld3RhYi1tZW51LWVkaXQtdG9wc2l0ZXNcIiA/IFwiZGlhbG9nXCIgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gZGF0YS1sMTBuLWlkPXtvcHRpb24uc3RyaW5nX2lkIHx8IG9wdGlvbi5pZH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IENvbnRleHRNZW51SXRlbSA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgUHJlZnM6IHN0YXRlLlByZWZzLFxufSkpKF9Db250ZXh0TWVudUl0ZW0pO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHtcbiAgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsXG4gIGFjdGlvblR5cGVzIGFzIGF0LFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvbnMubWpzXCI7XG5cbmNvbnN0IF9PcGVuSW5Qcml2YXRlV2luZG93ID0gc2l0ZSA9PiAoe1xuICBpZDogXCJuZXd0YWItbWVudS1vcGVuLW5ldy1wcml2YXRlLXdpbmRvd1wiLFxuICBpY29uOiBcIm5ldy13aW5kb3ctcHJpdmF0ZVwiLFxuICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgIHR5cGU6IGF0Lk9QRU5fUFJJVkFURV9XSU5ET1csXG4gICAgZGF0YToge1xuICAgICAgdXJsOiBzaXRlLnVybCxcbiAgICAgIHJlZmVycmVyOiBzaXRlLnJlZmVycmVyLFxuICAgICAgZXZlbnRfc291cmNlOiBcIkNPTlRFWFRfTUVOVVwiLFxuICAgIH0sXG4gIH0pLFxuICB1c2VyRXZlbnQ6IFwiT1BFTl9QUklWQVRFX1dJTkRPV1wiLFxufSk7XG5cbi8qKlxuICogTGlzdCBvZiBmdW5jdGlvbnMgdGhhdCByZXR1cm4gaXRlbXMgdGhhdCBjYW4gYmUgaW5jbHVkZWQgYXMgbWVudSBvcHRpb25zIGluIGFcbiAqIExpbmtNZW51LiBBbGwgZnVuY3Rpb25zIHRha2UgdGhlIHNpdGUgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgYW5kIG9wdGlvbmFsbHlcbiAqIHRoZSBpbmRleCBvZiB0aGUgc2l0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IExpbmtNZW51T3B0aW9ucyA9IHtcbiAgU2VwYXJhdG9yOiAoKSA9PiAoeyB0eXBlOiBcInNlcGFyYXRvclwiIH0pLFxuICBFbXB0eUl0ZW06ICgpID0+ICh7IHR5cGU6IFwiZW1wdHlcIiB9KSxcbiAgU2hvd1ByaXZhY3lJbmZvOiAoKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXNob3ctcHJpdmFjeS1pbmZvXCIsXG4gICAgaWNvbjogXCJpbmZvXCIsXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBhdC5TSE9XX1BSSVZBQ1lfSU5GTyxcbiAgICB9LFxuICAgIHVzZXJFdmVudDogXCJTSE9XX1BSSVZBQ1lfSU5GT1wiLFxuICB9KSxcbiAgQWJvdXRTcG9uc29yZWQ6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1zaG93LXByaXZhY3ktaW5mb1wiLFxuICAgIGljb246IFwiaW5mb1wiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5BQk9VVF9TUE9OU09SRURfVE9QX1NJVEVTLFxuICAgICAgZGF0YToge1xuICAgICAgICBhZHZlcnRpc2VyX25hbWU6IChzaXRlLmxhYmVsIHx8IHNpdGUuaG9zdG5hbWUpLnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgIHBvc2l0aW9uOiBzaXRlLnNwb25zb3JlZF9wb3NpdGlvbixcbiAgICAgICAgdGlsZV9pZDogc2l0ZS5zcG9uc29yZWRfdGlsZV9pZCxcbiAgICAgICAgYmxvY2tfa2V5OiBzaXRlLmJsb2NrX2tleSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIlRPUFNJVEVfU1BPTlNPUl9JTkZPXCIsXG4gIH0pLFxuICBSZW1vdmVCb29rbWFyazogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXJlbW92ZS1ib29rbWFya1wiLFxuICAgIGljb246IFwiYm9va21hcmstYWRkZWRcIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuREVMRVRFX0JPT0tNQVJLX0JZX0lELFxuICAgICAgZGF0YTogc2l0ZS5ib29rbWFya0d1aWQsXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIkJPT0tNQVJLX0RFTEVURVwiLFxuICB9KSxcbiAgQWRkQm9va21hcms6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1ib29rbWFya1wiLFxuICAgIGljb246IFwiYm9va21hcmstaG9sbG93XCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LkJPT0tNQVJLX1VSTCxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnVybCwgdGl0bGU6IHNpdGUudGl0bGUsIHR5cGU6IHNpdGUudHlwZSB9LFxuICAgIH0pLFxuICAgIHVzZXJFdmVudDogXCJCT09LTUFSS19BRERcIixcbiAgfSksXG4gIE9wZW5Jbk5ld1dpbmRvdzogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LW9wZW4tbmV3LXdpbmRvd1wiLFxuICAgIGljb246IFwibmV3LXdpbmRvd1wiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX05FV19XSU5ET1csXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNhcmRfdHlwZTogc2l0ZS5jYXJkX3R5cGUsXG4gICAgICAgIHJlZmVycmVyOiBzaXRlLnJlZmVycmVyLFxuICAgICAgICB0eXBlZEJvbnVzOiBzaXRlLnR5cGVkQm9udXMsXG4gICAgICAgIHVybDogc2l0ZS51cmwsXG4gICAgICAgIGlzX3Nwb25zb3JlZDogISFzaXRlLnNwb25zb3JlZF90aWxlX2lkLFxuICAgICAgICBldmVudF9zb3VyY2U6IFwiQ09OVEVYVF9NRU5VXCIsXG4gICAgICAgIHRvcGljOiBzaXRlLnRvcGljLFxuICAgICAgICBmaXJzdFZpc2libGVUaW1lc3RhbXA6IHNpdGUuZmlyc3RWaXNpYmxlVGltZXN0YW1wLFxuICAgICAgICB0aWxlX2lkOiBzaXRlLnRpbGVfaWQsXG4gICAgICAgIHJlY29tbWVuZGF0aW9uX2lkOiBzaXRlLnJlY29tbWVuZGF0aW9uX2lkLFxuICAgICAgICBzY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQ6IHNpdGUuc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICBjb3JwdXNfaXRlbV9pZDogc2l0ZS5jb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgcmVjZWl2ZWRfcmFuazogc2l0ZS5yZWNlaXZlZF9yYW5rLFxuICAgICAgICByZWNvbW1lbmRlZF9hdDogc2l0ZS5yZWNvbW1lbmRlZF9hdCxcbiAgICAgICAgZm9ybWF0OiBzaXRlLmZvcm1hdCxcbiAgICAgICAgLi4uKHNpdGUuZmxpZ2h0X2lkID8geyBmbGlnaHRfaWQ6IHNpdGUuZmxpZ2h0X2lkIH0gOiB7fSksXG4gICAgICAgIGlzX3BvY2tldF9jYXJkOiBzaXRlLnR5cGUgPT09IFwiQ2FyZEdyaWRcIixcbiAgICAgICAgaXNfbGlzdF9jYXJkOiBzaXRlLmlzX2xpc3RfY2FyZCxcbiAgICAgICAgLi4uKHNpdGUuc2VjdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBzZWN0aW9uOiBzaXRlLnNlY3Rpb24sXG4gICAgICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHNpdGUuc2VjdGlvbl9wb3NpdGlvbixcbiAgICAgICAgICAgICAgaXNfc2VjdGlvbl9mb2xsb3dlZDogc2l0ZS5pc19zZWN0aW9uX2ZvbGxvd2VkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiT1BFTl9ORVdfV0lORE9XXCIsXG4gIH0pLFxuXG4gIC8vIFRoaXMgYmxvY2tzIHRoZSB1cmwgZm9yIHJlZ3VsYXIgc3RvcmllcyxcbiAgLy8gYnV0IGFsc28gc2VuZHMgYSBtZXNzYWdlIHRvIERpc2NvdmVyeVN0cmVhbSB3aXRoIGZsaWdodF9pZC5cbiAgLy8gSWYgRGlzY292ZXJ5U3RyZWFtIHNlZXMgdGhpcyBtZXNzYWdlIGZvciBhIGZsaWdodF9pZFxuICAvLyBpdCBhbHNvIGJsb2NrcyBpdCBvbiB0aGUgZmxpZ2h0X2lkLlxuICBCbG9ja1VybDogKHNpdGUsIGluZGV4LCBldmVudFNvdXJjZSkgPT4ge1xuICAgIHJldHVybiBMaW5rTWVudU9wdGlvbnMuQmxvY2tVcmxzKFtzaXRlXSwgaW5kZXgsIGV2ZW50U291cmNlKTtcbiAgfSxcbiAgLy8gU2FtZSBhcyBCbG9ja1VybCwgZXhjZXB0IGNhbiB3b3JrIG9uIGFuIGFycmF5IG9mIHNpdGVzLlxuICBCbG9ja1VybHM6ICh0aWxlcywgcG9zLCBldmVudFNvdXJjZSkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1kaXNtaXNzXCIsXG4gICAgaWNvbjogXCJkaXNtaXNzXCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LkJMT0NLX1VSTCxcbiAgICAgIHNvdXJjZTogZXZlbnRTb3VyY2UsXG4gICAgICBkYXRhOiB0aWxlcy5tYXAoc2l0ZSA9PiAoe1xuICAgICAgICB1cmw6IHNpdGUub3JpZ2luYWxfdXJsIHx8IHNpdGUub3Blbl91cmwgfHwgc2l0ZS51cmwsXG4gICAgICAgIC8vIHBvY2tldF9pZCBpcyBvbmx5IGZvciBwb2NrZXQgc3RvcmllcyBiZWluZyBpbiBoaWdobGlnaHRzLCBhbmQgdGhlbiBkaXNtaXNzZWQuXG4gICAgICAgIHBvY2tldF9pZDogc2l0ZS5wb2NrZXRfaWQsXG4gICAgICAgIHRpbGVfaWQ6IHNpdGUudGlsZV9pZCxcbiAgICAgICAgLi4uKHNpdGUuYmxvY2tfa2V5ID8geyBibG9ja19rZXk6IHNpdGUuYmxvY2tfa2V5IH0gOiB7fSksXG4gICAgICAgIHJlY29tbWVuZGF0aW9uX2lkOiBzaXRlLnJlY29tbWVuZGF0aW9uX2lkLFxuICAgICAgICBzY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQ6IHNpdGUuc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICBjb3JwdXNfaXRlbV9pZDogc2l0ZS5jb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgcmVjZWl2ZWRfcmFuazogc2l0ZS5yZWNlaXZlZF9yYW5rLFxuICAgICAgICByZWNvbW1lbmRlZF9hdDogc2l0ZS5yZWNvbW1lbmRlZF9hdCxcbiAgICAgICAgLy8gdXNlZCBieSBQbGFjZXNGZWVkIGFuZCBUb3BTaXRlc0ZlZWQgZm9yIHNwb25zb3JlZCB0b3Agc2l0ZXMgYmxvY2tpbmcuXG4gICAgICAgIGlzU3BvbnNvcmVkVG9wU2l0ZTogc2l0ZS5zcG9uc29yZWRfcG9zaXRpb24sXG4gICAgICAgIHR5cGU6IHNpdGUudHlwZSxcbiAgICAgICAgY2FyZF90eXBlOiBzaXRlLmNhcmRfdHlwZSxcbiAgICAgICAgLi4uKHNpdGUuc2hpbSAmJiBzaXRlLnNoaW0uZGVsZXRlID8geyBzaGltOiBzaXRlLnNoaW0uZGVsZXRlIH0gOiB7fSksXG4gICAgICAgIC4uLihzaXRlLmZsaWdodF9pZCA/IHsgZmxpZ2h0X2lkOiBzaXRlLmZsaWdodF9pZCB9IDoge30pLFxuICAgICAgICAvLyBJZiBub3Qgc3BvbnNvcmVkLCBob3N0bmFtZSBjb3VsZCBiZSBhbnl0aGluZyAoQ2F0MyBEYXRhISkuXG4gICAgICAgIC8vIFNvIG9ubHkgcHV0IGluIGFkdmVydGlzZXJfbmFtZSBmb3Igc3BvbnNvcmVkIHRvcHNpdGVzLlxuICAgICAgICAuLi4oc2l0ZS5zcG9uc29yZWRfcG9zaXRpb25cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgYWR2ZXJ0aXNlcl9uYW1lOiAoXG4gICAgICAgICAgICAgICAgc2l0ZS5sYWJlbCB8fCBzaXRlLmhvc3RuYW1lXG4gICAgICAgICAgICAgICk/LnRvTG9jYWxlTG93ZXJDYXNlKCksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgIC4uLihzaXRlLnNwb25zb3JlZF90aWxlX2lkID8geyB0aWxlX2lkOiBzaXRlLnNwb25zb3JlZF90aWxlX2lkIH0gOiB7fSksXG4gICAgICAgIGlzX3BvY2tldF9jYXJkOiBzaXRlLnR5cGUgPT09IFwiQ2FyZEdyaWRcIixcbiAgICAgICAgaXNfbGlzdF9jYXJkOiBzaXRlLmlzX2xpc3RfY2FyZCxcbiAgICAgICAgLi4uKHNpdGUuZm9ybWF0ID8geyBmb3JtYXQ6IHNpdGUuZm9ybWF0IH0gOiB7fSksXG4gICAgICAgIC4uLihzaXRlLnNlY3Rpb25cbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgc2VjdGlvbjogc2l0ZS5zZWN0aW9uLFxuICAgICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiBzaXRlLnNlY3Rpb25fcG9zaXRpb24sXG4gICAgICAgICAgICAgIGlzX3NlY3Rpb25fZm9sbG93ZWQ6IHNpdGUuaXNfc2VjdGlvbl9mb2xsb3dlZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgIH0pKSxcbiAgICB9KSxcbiAgICBpbXByZXNzaW9uOiBhYy5JbXByZXNzaW9uU3RhdHMoe1xuICAgICAgc291cmNlOiBldmVudFNvdXJjZSxcbiAgICAgIGJsb2NrOiAwLFxuICAgICAgdGlsZXM6IHRpbGVzLm1hcCgoc2l0ZSwgaW5kZXgpID0+ICh7XG4gICAgICAgIGlkOiBzaXRlLmd1aWQsXG4gICAgICAgIHBvczogcG9zICsgaW5kZXgsXG4gICAgICAgIC4uLihzaXRlLnNoaW0gJiYgc2l0ZS5zaGltLmRlbGV0ZSA/IHsgc2hpbTogc2l0ZS5zaGltLmRlbGV0ZSB9IDoge30pLFxuICAgICAgfSkpLFxuICAgIH0pLFxuICAgIHVzZXJFdmVudDogXCJCTE9DS1wiLFxuICB9KSxcblxuICAvLyBUaGlzIGlzIHRoZSBcIkRpc21pc3NcIiBhY3Rpb24gZm9yIGxlYWRlcmJvYXJkL2JpbGxib2FyZCBhZHMuXG4gIEJsb2NrQWRVcmw6IChzaXRlLCBwb3MsIGV2ZW50U291cmNlKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWRpc21pc3NcIixcbiAgICBpY29uOiBcImRpc21pc3NcIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuQkxPQ0tfVVJMLFxuICAgICAgZGF0YTogW3NpdGVdLFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLkltcHJlc3Npb25TdGF0cyh7XG4gICAgICBzb3VyY2U6IGV2ZW50U291cmNlLFxuICAgICAgYmxvY2s6IDAsXG4gICAgICB0aWxlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHNpdGUuZ3VpZCxcbiAgICAgICAgICBwb3MsXG4gICAgICAgICAgLi4uKHNpdGUuc2hpbSAmJiBzaXRlLnNoaW0uc2F2ZSA/IHsgc2hpbTogc2l0ZS5zaGltLnNhdmUgfSA6IHt9KSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIkJMT0NLXCIsXG4gIH0pLFxuXG4gIC8vIFRoaXMgaXMgYW4gb3B0aW9uIGZvciB3ZWIgZXh0ZW50aW9ucyB3aGljaCB3aWxsIHJlc3VsdCBpbiByZW1vdmUgaXRlbXMgZnJvbVxuICAvLyBtZW1vcnkgYW5kIG5vdGlmeSB0aGUgd2ViIGV4dGVuaW9uLCByYXRoZXIgdGhhbiB1c2luZyB0aGUgYnVpbHQtaW4gYmxvY2sgbGlzdC5cbiAgV2ViRXh0RGlzbWlzczogKHNpdGUsIGluZGV4LCBldmVudFNvdXJjZSkgPT4gKHtcbiAgICBpZDogXCJtZW51X2FjdGlvbl93ZWJleHRfZGlzbWlzc1wiLFxuICAgIHN0cmluZ19pZDogXCJuZXd0YWItbWVudS1kaXNtaXNzXCIsXG4gICAgaWNvbjogXCJkaXNtaXNzXCIsXG4gICAgYWN0aW9uOiBhYy5XZWJFeHRFdmVudChhdC5XRUJFWFRfRElTTUlTUywge1xuICAgICAgc291cmNlOiBldmVudFNvdXJjZSxcbiAgICAgIHVybDogc2l0ZS51cmwsXG4gICAgICBhY3Rpb25fcG9zaXRpb246IGluZGV4LFxuICAgIH0pLFxuICB9KSxcbiAgRGVsZXRlVXJsOiAoc2l0ZSwgaW5kZXgsIGV2ZW50U291cmNlLCBpc0VuYWJsZWQsIHNpdGVJbmZvKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWRlbGV0ZS1oaXN0b3J5XCIsXG4gICAgaWNvbjogXCJkZWxldGVcIixcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IGF0LkRJQUxPR19PUEVOLFxuICAgICAgZGF0YToge1xuICAgICAgICBvbkNvbmZpcm06IFtcbiAgICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LkRFTEVURV9ISVNUT1JZX1VSTCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgdXJsOiBzaXRlLnVybCxcbiAgICAgICAgICAgICAgcG9ja2V0X2lkOiBzaXRlLnBvY2tldF9pZCxcbiAgICAgICAgICAgICAgZm9yY2VCbG9jazogc2l0ZS5ib29rbWFya0d1aWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGFjLlVzZXJFdmVudChcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHsgZXZlbnQ6IFwiREVMRVRFXCIsIHNvdXJjZTogZXZlbnRTb3VyY2UsIGFjdGlvbl9wb3NpdGlvbjogaW5kZXggfSxcbiAgICAgICAgICAgICAgc2l0ZUluZm9cbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIC8vIEFsc28gYnJvYWRjYXN0IHRoYXQgdGhpcyB1cmwgaGFzIGJlZW4gZGVsZXRlZCBzbyB0aGF0XG4gICAgICAgICAgLy8gdGhlIGNvbmZpcm1hdGlvbiBkaWFsb2cga25vd3MgaXQgbmVlZHMgdG8gZGlzYXBwZWFyIG5vdy5cbiAgICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LkRJQUxPR19DTE9TRSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZXZlbnRTb3VyY2UsXG4gICAgICAgIGJvZHlfc3RyaW5nX2lkOiBbXG4gICAgICAgICAgXCJuZXd0YWItY29uZmlybS1kZWxldGUtaGlzdG9yeS1wMVwiLFxuICAgICAgICAgIFwibmV3dGFiLWNvbmZpcm0tZGVsZXRlLWhpc3RvcnktcDJcIixcbiAgICAgICAgXSxcbiAgICAgICAgY29uZmlybV9idXR0b25fc3RyaW5nX2lkOiBcIm5ld3RhYi10b3BzaXRlcy1kZWxldGUtaGlzdG9yeS1idXR0b25cIixcbiAgICAgICAgY2FuY2VsX2J1dHRvbl9zdHJpbmdfaWQ6IFwibmV3dGFiLXRvcHNpdGVzLWNhbmNlbC1idXR0b25cIixcbiAgICAgICAgaWNvbjogXCJtb2RhbC1kZWxldGVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1c2VyRXZlbnQ6IFwiRElBTE9HX09QRU5cIixcbiAgfSksXG4gIFNob3dGaWxlOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtc2hvdy1maWxlXCIsXG4gICAgaWNvbjogXCJzZWFyY2hcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuU0hPV19ET1dOTE9BRF9GSUxFLFxuICAgICAgZGF0YTogeyB1cmw6IHNpdGUudXJsIH0sXG4gICAgfSksXG4gIH0pLFxuICBPcGVuRmlsZTogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LW9wZW4tZmlsZVwiLFxuICAgIGljb246IFwib3Blbi1maWxlXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0Lk9QRU5fRE9XTkxPQURfRklMRSxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnVybCB9LFxuICAgIH0pLFxuICB9KSxcbiAgQ29weURvd25sb2FkTGluazogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWNvcHktZG93bmxvYWQtbGlua1wiLFxuICAgIGljb246IFwiY29weVwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5DT1BZX0RPV05MT0FEX0xJTkssXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgfSksXG4gIEdvVG9Eb3dubG9hZFBhZ2U6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1nby10by1kb3dubG9hZC1wYWdlXCIsXG4gICAgaWNvbjogXCJkb3dubG9hZFwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS5yZWZlcnJlciB9LFxuICAgIH0pLFxuICAgIGRpc2FibGVkOiAhc2l0ZS5yZWZlcnJlcixcbiAgfSksXG4gIFJlbW92ZURvd25sb2FkOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtcmVtb3ZlLWRvd25sb2FkXCIsXG4gICAgaWNvbjogXCJkZWxldGVcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuUkVNT1ZFX0RPV05MT0FEX0ZJTEUsXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgfSksXG4gIFBpblRvcFNpdGU6IChzaXRlLCBpbmRleCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1waW5cIixcbiAgICBpY29uOiBcInBpblwiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5UT1BfU0lURVNfUElOLFxuICAgICAgZGF0YToge1xuICAgICAgICBzaXRlLFxuICAgICAgICBpbmRleCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIlBJTlwiLFxuICB9KSxcbiAgVW5waW5Ub3BTaXRlOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtdW5waW5cIixcbiAgICBpY29uOiBcInVucGluXCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlRPUF9TSVRFU19VTlBJTixcbiAgICAgIGRhdGE6IHsgc2l0ZTogeyB1cmw6IHNpdGUudXJsIH0gfSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiVU5QSU5cIixcbiAgfSksXG4gIEVkaXRUb3BTaXRlOiAoc2l0ZSwgaW5kZXgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtZWRpdC10b3BzaXRlc1wiLFxuICAgIGljb246IFwiZWRpdFwiLFxuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogYXQuVE9QX1NJVEVTX0VESVQsXG4gICAgICBkYXRhOiB7IGluZGV4IH0sXG4gICAgfSxcbiAgfSksXG4gIENoZWNrQm9va21hcms6IHNpdGUgPT5cbiAgICBzaXRlLmJvb2ttYXJrR3VpZFxuICAgICAgPyBMaW5rTWVudU9wdGlvbnMuUmVtb3ZlQm9va21hcmsoc2l0ZSlcbiAgICAgIDogTGlua01lbnVPcHRpb25zLkFkZEJvb2ttYXJrKHNpdGUpLFxuICBDaGVja1BpblRvcFNpdGU6IChzaXRlLCBpbmRleCkgPT5cbiAgICBzaXRlLmlzUGlubmVkXG4gICAgICA/IExpbmtNZW51T3B0aW9ucy5VbnBpblRvcFNpdGUoc2l0ZSlcbiAgICAgIDogTGlua01lbnVPcHRpb25zLlBpblRvcFNpdGUoc2l0ZSwgaW5kZXgpLFxuICBPcGVuSW5Qcml2YXRlV2luZG93OiAoc2l0ZSwgaW5kZXgsIGV2ZW50U291cmNlLCBpc0VuYWJsZWQpID0+XG4gICAgaXNFbmFibGVkID8gX09wZW5JblByaXZhdGVXaW5kb3coc2l0ZSkgOiBMaW5rTWVudU9wdGlvbnMuRW1wdHlJdGVtKCksXG4gIENoYW5nZVdlYXRoZXJMb2NhdGlvbjogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWNoYW5nZS1sb2NhdGlvblwiLFxuICAgIGFjdGlvbjogYWMuQnJvYWRjYXN0VG9Db250ZW50KHtcbiAgICAgIHR5cGU6IGF0LldFQVRIRVJfU0VBUkNIX0FDVElWRSxcbiAgICAgIGRhdGE6IHRydWUsXG4gICAgfSksXG4gIH0pLFxuICBDaGFuZ2VXZWF0aGVyRGlzcGxheVNpbXBsZTogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWNoYW5nZS13ZWF0aGVyLWRpc3BsYXktc2ltcGxlXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIndlYXRoZXIuZGlzcGxheVwiLFxuICAgICAgICB2YWx1ZTogXCJzaW1wbGVcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pLFxuICBDaGFuZ2VXZWF0aGVyRGlzcGxheURldGFpbGVkOiAoKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi13ZWF0aGVyLW1lbnUtY2hhbmdlLXdlYXRoZXItZGlzcGxheS1kZXRhaWxlZFwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TRVRfUFJFRixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJ3ZWF0aGVyLmRpc3BsYXlcIixcbiAgICAgICAgdmFsdWU6IFwiZGV0YWlsZWRcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pLFxuICBDaGFuZ2VUZW1wVW5pdEZhaHJlbmhlaXQ6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLXdlYXRoZXItbWVudS1jaGFuZ2UtdGVtcGVyYXR1cmUtdW5pdHMtZmFocmVuaGVpdFwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TRVRfUFJFRixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIixcbiAgICAgICAgdmFsdWU6IFwiZlwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIENoYW5nZVRlbXBVbml0Q2Vsc2l1czogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWNoYW5nZS10ZW1wZXJhdHVyZS11bml0cy1jZWxzaXVzXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiLFxuICAgICAgICB2YWx1ZTogXCJjXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbiAgSGlkZVdlYXRoZXI6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLXdlYXRoZXItbWVudS1oaWRlLXdlYXRoZXJcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuU0VUX1BSRUYsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IFwic2hvd1dlYXRoZXJcIixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIE9wZW5MZWFybk1vcmVVUkw6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWxlYXJuLW1vcmVcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuT1BFTl9MSU5LLFxuICAgICAgZGF0YTogeyB1cmw6IHNpdGUudXJsIH0sXG4gICAgfSksXG4gIH0pLFxuICBGYWtlc3BvdERpc21pc3M6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtZGlzbWlzc1wiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TRVRfUFJFRixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJkaXNjb3ZlcnlzdHJlYW0uY29udGV4dHVhbENvbnRlbnQuZmFrZXNwb3QuZW5hYmxlZFwiLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuRkFLRVNQT1RfRElTTUlTUyxcbiAgICB9KSxcbiAgfSksXG4gIEFib3V0RmFrZXNwb3Q6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1hYm91dC1mYWtlc3BvdFwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgICBpbXByZXNzaW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0Lk9QRU5fQUJPVVRfRkFLRVNQT1QsXG4gICAgfSksXG4gIH0pLFxuICBTZWN0aW9uQmxvY2s6ICh7XG4gICAgc2VjdGlvblBlcnNvbmFsaXphdGlvbixcbiAgICBzZWN0aW9uS2V5LFxuICAgIHNlY3Rpb25Qb3NpdGlvbixcbiAgICB0aXRsZSxcbiAgfSkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1zZWN0aW9uLWJsb2NrXCIsXG4gICAgaWNvbjogXCJkZWxldGVcIixcbiAgICBhY3Rpb246IHtcbiAgICAgIC8vIE9wZW4gdGhlIGNvbmZpcm1hdGlvbiBkaWFsb2cgdG8gYmxvY2sgYSBzZWN0aW9uLlxuICAgICAgdHlwZTogYXQuRElBTE9HX09QRU4sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9uQ29uZmlybTogW1xuICAgICAgICAgIC8vIE9uY2UgdGhlIHVzZXIgY29uZmlybWVkIHRoZWlyIGludGVudGlvbiB0byBibG9jayB0aGlzIHNlY3Rpb24sXG4gICAgICAgICAgLy8gdXBkYXRlIHRoZWlyIHByZWZlcmVuY2VzLlxuICAgICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuU0VDVElPTl9QRVJTT05BTElaQVRJT05fU0VULFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi5zZWN0aW9uUGVyc29uYWxpemF0aW9uLFxuICAgICAgICAgICAgICBbc2VjdGlvbktleV06IHtcbiAgICAgICAgICAgICAgICBpc0Jsb2NrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgaXNGb2xsb3dlZDogZmFsc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIFRlbGVtZXRyeVxuICAgICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuQkxPQ0tfU0VDVElPTixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbktleSxcbiAgICAgICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogc2VjdGlvblBvc2l0aW9uLFxuICAgICAgICAgICAgICBldmVudF9zb3VyY2U6IFwiQ09OVEVYVF9NRU5VXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIC8vIEFsc28gYnJvYWRjYXN0IHRoYXQgdGhpcyBzZWN0aW9uIGhhcyBiZWVuIGJsb2NrZWQgc28gdGhhdFxuICAgICAgICAgIC8vIHRoZSBjb25maXJtYXRpb24gZGlhbG9nIGtub3dzIGl0IG5lZWRzIHRvIGRpc2FwcGVhciBub3cuXG4gICAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgICB0eXBlOiBhdC5ESUFMT0dfQ0xPU0UsXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIC8vIFBhc3MgRmx1ZW50IHN0cmluZ3MgdG8gQ29uZmlybURpYWxvZyBjb21wb25lbnQgZm9yIHRoZSBjb3B5XG4gICAgICAgIC8vIG9mIHRoZSBwcm9tcHQgdG8gYmxvY2sgc2VjdGlvbnMuXG4gICAgICAgIGJvZHlfc3RyaW5nX2lkOiBbXG4gICAgICAgICAgXCJuZXd0YWItc2VjdGlvbi1jb25maXJtLWJsb2NrLXRvcGljLXAxXCIsXG4gICAgICAgICAgXCJuZXd0YWItc2VjdGlvbi1jb25maXJtLWJsb2NrLXRvcGljLXAyXCIsXG4gICAgICAgIF0sXG4gICAgICAgIGNvbmZpcm1fYnV0dG9uX3N0cmluZ19pZDogXCJuZXd0YWItc2VjdGlvbi1ibG9jay10b3BpYy1idXR0b25cIixcbiAgICAgICAgY29uZmlybV9idXR0b25fc3RyaW5nX2FyZ3M6IHsgdG9waWM6IHRpdGxlIH0sXG4gICAgICAgIGNhbmNlbF9idXR0b25fc3RyaW5nX2lkOiBcIm5ld3RhYi1zZWN0aW9uLWNhbmNlbC1idXR0b25cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB1c2VyRXZlbnQ6IFwiRElBTE9HX09QRU5cIixcbiAgfSksXG4gIFNlY3Rpb25VbmZvbGxvdzogKHtcbiAgICBzZWN0aW9uUGVyc29uYWxpemF0aW9uLFxuICAgIHNlY3Rpb25LZXksXG4gICAgc2VjdGlvblBvc2l0aW9uLFxuICB9KSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXNlY3Rpb24tdW5mb2xsb3dcIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuU0VDVElPTl9QRVJTT05BTElaQVRJT05fU0VULFxuICAgICAgZGF0YTogKCh7IHNlY3Rpb25LZXk6IF9zZWN0aW9uS2V5LCAuLi5yZW1haW5pbmcgfSkgPT4gcmVtYWluaW5nKShcbiAgICAgICAgc2VjdGlvblBlcnNvbmFsaXphdGlvblxuICAgICAgKSxcbiAgICB9KSxcbiAgICBpbXByZXNzaW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlVORk9MTE9XX1NFQ1RJT04sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNlY3Rpb246IHNlY3Rpb25LZXksXG4gICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHNlY3Rpb25Qb3NpdGlvbixcbiAgICAgICAgZXZlbnRfc291cmNlOiBcIkNPTlRFWFRfTUVOVVwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIE1hbmFnZVNwb25zb3JlZENvbnRlbnQ6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtbWFuYWdlLXNwb25zb3JlZC1jb250ZW50XCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHsgdHlwZTogYXQuU0VUVElOR1NfT1BFTiB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiT1BFTl9ORVdUQUJfUFJFRlNcIixcbiAgfSksXG4gIE91clNwb25zb3JzQW5kWW91clByaXZhY3k6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtb3VyLXNwb25zb3JzLWFuZC15b3VyLXByaXZhY3lcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuT1BFTl9MSU5LLFxuICAgICAgZGF0YToge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdXBwb3J0Lm1vemlsbGEub3JnL2tiL3BvY2tldC1zcG9uc29yZWQtc3Rvcmllcy1uZXctdGFic1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiQ0xJQ0tfUFJJVkFDWV9JTkZPXCIsXG4gIH0pLFxuICBSZXBvcnRBZDogc2l0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiBcIm5ld3RhYi1tZW51LXJlcG9ydC10aGlzLWFkXCIsXG4gICAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgICB0eXBlOiBhdC5SRVBPUlRfQURfT1BFTixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNhcmRfdHlwZTogc2l0ZS5jYXJkX3R5cGUsXG4gICAgICAgICAgcG9zaXRpb246IHNpdGUucG9zaXRpb24sXG4gICAgICAgICAgcmVwb3J0aW5nX3VybDogc2l0ZS5zaGltLnJlcG9ydCxcbiAgICAgICAgICB1cmw6IHNpdGUudXJsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfTtcbiAgfSxcblxuICBSZXBvcnRDb250ZW50OiBzaXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IFwibmV3dGFiLW1lbnUtcmVwb3J0XCIsXG4gICAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgICB0eXBlOiBhdC5SRVBPUlRfQ09OVEVOVF9PUEVOLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FyZF90eXBlOiBzaXRlLmNhcmRfdHlwZSxcbiAgICAgICAgICBjb3JwdXNfaXRlbV9pZDogc2l0ZS5jb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgICBzY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQ6IHNpdGUuc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHNpdGUuc2VjdGlvbl9wb3NpdGlvbixcbiAgICAgICAgICBzZWN0aW9uOiBzaXRlLnNlY3Rpb24sXG4gICAgICAgICAgdGl0bGU6IHNpdGUudGl0bGUsXG4gICAgICAgICAgdG9waWM6IHNpdGUudG9waWMsXG4gICAgICAgICAgdXJsOiBzaXRlLnVybCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgIH07XG4gIH0sXG4gIFRyZW5kaW5nU2VhcmNoTGVhcm5Nb3JlOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLXRyZW5kaW5nLXNlYXJjaGVzLWxlYXJuLW1vcmVcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuT1BFTl9MSU5LLFxuICAgICAgZGF0YTogeyB1cmw6IHNpdGUudXJsIH0sXG4gICAgfSksXG4gICAgaW1wcmVzc2lvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5UUkVORElOR19TRUFSQ0hfTEVBUk5fTU9SRSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdmFyaWFudDogc2l0ZS52YXJpYW50LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIFRyZW5kaW5nU2VhcmNoRGlzbWlzczogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi10cmVuZGluZy1zZWFyY2hlcy1kaXNtaXNzXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcInRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBpbXByZXNzaW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlRSRU5ESU5HX1NFQVJDSF9ESVNNSVNTLFxuICAgICAgZGF0YToge1xuICAgICAgICB2YXJpYW50OiBzaXRlLnZhcmlhbnQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbn07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYyB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IENvbnRleHRNZW51IH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ29udGV4dE1lbnUvQ29udGV4dE1lbnVcIjtcbmltcG9ydCB7IExpbmtNZW51T3B0aW9ucyB9IGZyb20gXCJjb250ZW50LXNyYy9saWIvbGluay1tZW51LW9wdGlvbnNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgREVGQVVMVF9TSVRFX01FTlVfT1BUSU9OUyA9IFtcbiAgXCJDaGVja1BpblRvcFNpdGVcIixcbiAgXCJFZGl0VG9wU2l0ZVwiLFxuICBcIlNlcGFyYXRvclwiLFxuICBcIk9wZW5Jbk5ld1dpbmRvd1wiLFxuICBcIk9wZW5JblByaXZhdGVXaW5kb3dcIixcbiAgXCJTZXBhcmF0b3JcIixcbiAgXCJCbG9ja1VybFwiLFxuXTtcblxuZXhwb3J0IGNsYXNzIF9MaW5rTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3Qge1xuICAgICAgc2l0ZSxcbiAgICAgIGluZGV4LFxuICAgICAgc291cmNlLFxuICAgICAgaXNQcml2YXRlQnJvd3NpbmdFbmFibGVkLFxuICAgICAgc2l0ZUluZm8sXG4gICAgICBwbGF0Zm9ybSxcbiAgICAgIGRpc3BhdGNoLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHNob3VsZFNlbmRJbXByZXNzaW9uU3RhdHMsXG4gICAgICB1c2VyRXZlbnQgPSBhYy5Vc2VyRXZlbnQsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgLy8gSGFuZGxlIHNwZWNpYWwgY2FzZSBvZiBkZWZhdWx0IHNpdGVcbiAgICBjb25zdCBwcm9wT3B0aW9ucyA9XG4gICAgICBzaXRlLmlzRGVmYXVsdCAmJiAhc2l0ZS5zZWFyY2hUb3BTaXRlICYmICFzaXRlLnNwb25zb3JlZF9wb3NpdGlvblxuICAgICAgICA/IERFRkFVTFRfU0lURV9NRU5VX09QVElPTlNcbiAgICAgICAgOiBvcHRpb25zO1xuXG4gICAgY29uc3QgbGlua01lbnVPcHRpb25zID0gcHJvcE9wdGlvbnNcbiAgICAgIC5tYXAobyA9PlxuICAgICAgICBMaW5rTWVudU9wdGlvbnNbb10oXG4gICAgICAgICAgc2l0ZSxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgaXNQcml2YXRlQnJvd3NpbmdFbmFibGVkLFxuICAgICAgICAgIHNpdGVJbmZvLFxuICAgICAgICAgIHBsYXRmb3JtXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC5tYXAob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgeyBhY3Rpb24sIGltcHJlc3Npb24sIGlkLCB0eXBlLCB1c2VyRXZlbnQ6IGV2ZW50TmFtZSB9ID0gb3B0aW9uO1xuICAgICAgICBpZiAoIXR5cGUgJiYgaWQpIHtcbiAgICAgICAgICBvcHRpb24ub25DbGljayA9IChldmVudCA9IHt9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGN0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5LCBidXR0b24gfSA9IGV2ZW50O1xuICAgICAgICAgICAgLy8gT25seSBzZW5kIGFsb25nIGV2ZW50IGluZm8gaWYgdGhlcmUncyBzb21ldGhpbmcgbm9uLWRlZmF1bHQgdG8gc2VuZFxuICAgICAgICAgICAgaWYgKGN0cmxLZXkgfHwgbWV0YUtleSB8fCBzaGlmdEtleSB8fCBidXR0b24gPT09IDEpIHtcbiAgICAgICAgICAgICAgYWN0aW9uLmRhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiB7IGN0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5LCBidXR0b24gfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFjdGlvbi5kYXRhXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgICAgICAgIC8vIEJ1ZyAxOTU4MTM1OiBQYXNzIGFkZGl0aW9uYWwgaW5mbyB0byBhYy5PUEVOX05FV19XSU5ET1cgZXZlbnRcbiAgICAgICAgICAgICAgaWYgKGFjdGlvbi50eXBlID09PSBcIk9QRU5fTkVXX1dJTkRPV1wiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgY2FyZF90eXBlLFxuICAgICAgICAgICAgICAgICAgY29ycHVzX2l0ZW1faWQsXG4gICAgICAgICAgICAgICAgICBldmVudF9zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBmZXRjaFRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgIGlzX2xpc3RfY2FyZCxcbiAgICAgICAgICAgICAgICAgIGlzX3NlY3Rpb25fZm9sbG93ZWQsXG4gICAgICAgICAgICAgICAgICByZWNlaXZlZF9yYW5rLFxuICAgICAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb25faWQsXG4gICAgICAgICAgICAgICAgICByZWNvbW1lbmRlZF9hdCxcbiAgICAgICAgICAgICAgICAgIHNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdG9waWNzLFxuICAgICAgICAgICAgICAgICAgdGlsZV9pZCxcbiAgICAgICAgICAgICAgICAgIHRvcGljLFxuICAgICAgICAgICAgICAgIH0gPSBhY3Rpb24uZGF0YTtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0ge1xuICAgICAgICAgICAgICAgICAgY2FyZF90eXBlLFxuICAgICAgICAgICAgICAgICAgY29ycHVzX2l0ZW1faWQsXG4gICAgICAgICAgICAgICAgICBldmVudF9zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBmZXRjaFRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICAgIGZvcm1hdCxcbiAgICAgICAgICAgICAgICAgIGlzX2xpc3RfY2FyZCxcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVkX3JhbmssXG4gICAgICAgICAgICAgICAgICByZWNvbW1lbmRhdGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkX2F0LFxuICAgICAgICAgICAgICAgICAgc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICAgICAgICAgICAgLi4uKHNlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgPyB7IGlzX3NlY3Rpb25fZm9sbG93ZWQsIHNlY3Rpb25fcG9zaXRpb24sIHNlY3Rpb24gfVxuICAgICAgICAgICAgICAgICAgICA6IHt9KSxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX3RvcGljczogc2VsZWN0ZWRfdG9waWNzID8gc2VsZWN0ZWRfdG9waWNzIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIHRpbGVfaWQsXG4gICAgICAgICAgICAgICAgICB0b3BpYyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0geyBjYXJkX3R5cGU6IHNpdGUuZmxpZ2h0X2lkID8gXCJzcG9jXCIgOiBcIm9yZ2FuaWNcIiB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJFdmVudERhdGEgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50OiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICAgICAgICBhY3Rpb25fcG9zaXRpb246IGluZGV4LFxuICAgICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaXRlSW5mb1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyRXZlbnQodXNlckV2ZW50RGF0YSkpO1xuICAgICAgICAgICAgICBpZiAoaW1wcmVzc2lvbiAmJiBzaG91bGRTZW5kSW1wcmVzc2lvblN0YXRzKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goaW1wcmVzc2lvbik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICB9KTtcblxuICAgIC8vIFRoaXMgaXMgZm9yIGFjY2Vzc2liaWxpdHkgdG8gc3VwcG9ydCBtYWtpbmcgZWFjaCBpdGVtIHRhYmJhYmxlLlxuICAgIC8vIFdlIHdhbnQgdG8ga25vdyB3aGljaCBpdGVtIGlzIHRoZSBmaXJzdCBhbmQgd2hpY2ggaXRlbVxuICAgIC8vIGlzIHRoZSBsYXN0LCBzbyB3ZSBjYW4gY2xvc2UgdGhlIGNvbnRleHQgbWVudSBhY2NvcmRpbmdseS5cbiAgICBsaW5rTWVudU9wdGlvbnNbMF0uZmlyc3QgPSB0cnVlO1xuICAgIGxpbmtNZW51T3B0aW9uc1tsaW5rTWVudU9wdGlvbnMubGVuZ3RoIC0gMV0ubGFzdCA9IHRydWU7XG4gICAgcmV0dXJuIGxpbmtNZW51T3B0aW9ucztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRleHRNZW51XG4gICAgICAgIG9uVXBkYXRlPXt0aGlzLnByb3BzLm9uVXBkYXRlfVxuICAgICAgICBvblNob3c9e3RoaXMucHJvcHMub25TaG93fVxuICAgICAgICBvcHRpb25zPXt0aGlzLmdldE9wdGlvbnMoKX1cbiAgICAgICAga2V5Ym9hcmRBY2Nlc3M9e3RoaXMucHJvcHMua2V5Ym9hcmRBY2Nlc3N9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgZ2V0U3RhdGUgPSBzdGF0ZSA9PiAoe1xuICBpc1ByaXZhdGVCcm93c2luZ0VuYWJsZWQ6IHN0YXRlLlByZWZzLnZhbHVlcy5pc1ByaXZhdGVCcm93c2luZ0VuYWJsZWQsXG4gIHBsYXRmb3JtOiBzdGF0ZS5QcmVmcy52YWx1ZXMucGxhdGZvcm0sXG59KTtcbmV4cG9ydCBjb25zdCBMaW5rTWVudSA9IGNvbm5lY3QoZ2V0U3RhdGUpKF9MaW5rTWVudSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG4vKipcbiAqIEEgY3VzdG9tIHJlYWN0IGhvb2sgdGhhdCBzZXRzIHVwIGFuIEludGVyc2VjdGlvbk9ic2VydmVyIHRvIG9ic2VydmUgYSBzaW5nbGVcbiAqIG9yIGxpc3Qgb2YgZWxlbWVudHMgYW5kIHRyaWdnZXJzIGEgY2FsbGJhY2sgd2hlbiB0aGUgZWxlbWVudCBjb21lcyBpbnRvIHRoZSB2aWV3cG9ydFxuICogTm90ZTogVGhlIHJlZnMgdXNlZCBzaG91bGQgYmUgYW4gYXJyYXkgdHlwZVxuICogQGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYW4gZWxlbWVudCBjb21lcyBpbnRvIHRoZSB2aWV3cG9ydFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBPcHRpb25zIG9iamVjdCBwYXNzZWQgdG8gSW50ZXJzZWN0aW9uIE9ic2VydmVyOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ludGVyc2VjdGlvbk9ic2VydmVyL0ludGVyc2VjdGlvbk9ic2VydmVyI29wdGlvbnNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2lzU2luZ2xlID0gZmFsc2VdIEJvb2xlYW4gaWYgdGhlIGVsZW1lbnRzIGFyZSBhbiBhcnJheSBvciBzaW5nbGUgZWxlbWVudFxuICpcbiAqIEByZXR1cm5zIHtSZWFjdC5NdXRhYmxlUmVmT2JqZWN0fSBhIHJlZiBjb250YWluaW5nIGFuIGFycmF5IG9mIGVsZW1lbnRzIG9yIHNpbmdsZSBlbGVtZW50XG4gKlxuICpcbiAqXG4gKi9cbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGNhbGxiYWNrLCB0aHJlc2hvbGQgPSAwLjMpIHtcbiAgY29uc3QgZWxlbWVudHNSZWYgPSB1c2VSZWYoW10pO1xuICBjb25zdCB0cmlnZ2VyZWRFbGVtZW50cyA9IHVzZVJlZihuZXcgV2Vha1NldCgpKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAgIGVudHJpZXMgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGVudHJ5LmlzSW50ZXJzZWN0aW5nICYmXG4gICAgICAgICAgICAhdHJpZ2dlcmVkRWxlbWVudHMuY3VycmVudC5oYXMoZW50cnkudGFyZ2V0KVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgdHJpZ2dlcmVkRWxlbWVudHMuY3VycmVudC5hZGQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHsgdGhyZXNob2xkIH1cbiAgICApO1xuXG4gICAgZWxlbWVudHNSZWYuY3VycmVudC5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbCAmJiAhdHJpZ2dlcmVkRWxlbWVudHMuY3VycmVudC5oYXMoZWwpKSB7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoZWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2xlYW51cCBmdW5jdGlvbiB0byBkaXNjb25uZWN0IG9ic2VydmVyIG9uIHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9LCBbY2FsbGJhY2ssIHRocmVzaG9sZF0pO1xuXG4gIHJldHVybiBlbGVtZW50c1JlZjtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSBhY3RpdmUgY2FyZCBzaXplIChcInNtYWxsXCIsIFwibWVkaXVtXCIsIG9yIFwibGFyZ2VcIikgYmFzZWQgb24gdGhlIHNjcmVlbiB3aWR0aFxuICogYW5kIGNsYXNzIG5hbWVzIGFwcGxpZWQgdG8gdGhlIGNhcmQgZWxlbWVudCBhdCB0aGUgdGltZSBvZiBhbiBldmVudCAoZXhhbXBsZTogY2xpY2spXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHNjcmVlbldpZHRoIC0gVGhlIGN1cnJlbnQgd2luZG93IHdpZHRoIChpbiBwaXhlbHMpLlxuICogQHBhcmFtIHtzdHJpbmcgfCBzdHJpbmdbXX0gY2xhc3NOYW1lcyAtIEEgc3RyaW5nIG9yIGFycmF5IG9mIGNsYXNzIG5hbWVzIGFwcGxpZWQgdG8gdGhlIHNlY3Rpb25zIGNhcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW5bXX0gc2VjdGlvbnNFbmFibGVkIC0gSWYgc2VjdGlvbnMgaXMgbm90IGVuYWJsZWQsIGFsbCBjYXJkcyBhcmUgYG1lZGl1bS1jYXJkYFxuICogQHBhcmFtIHtudW1iZXJ9IGZsaWdodElkIC0gRXJyb3IgZWdlIGNhc2U6IFRoaXMgZnVuY3Rpb24gc2hvdWxkIG5vdCBiZSBjYWxsZWQgb24gc3BvY3MsIHdoaWNoIGhhdmUgZmxpZ2h0SWRcbiAqIEByZXR1cm5zIHtcInNtYWxsLWNhcmRcIiB8IFwibWVkaXVtLWNhcmRcIiB8IFwibGFyZ2UtY2FyZFwiIHwgbnVsbH0gVGhlIGFjdGl2ZSBjYXJkIHR5cGUsIG9yIG51bGwgaWYgbm9uZSBpcyBtYXRjaGVkLlxuICovXG5mdW5jdGlvbiBnZXRBY3RpdmVDYXJkU2l6ZShzY3JlZW5XaWR0aCwgY2xhc3NOYW1lcywgc2VjdGlvbnNFbmFibGVkLCBmbGlnaHRJZCkge1xuICAvLyBPbmx5IGFwcGxpZXMgdG8gc3BvbnNvcmVkIGNvbnRlbnRcbiAgaWYgKGZsaWdodElkKSB7XG4gICAgcmV0dXJuIFwic3BvY1wiO1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsYXlvdXQgb25seSBzdXBwb3J0cyBgbWVkaXVtLWNhcmRgXG4gIGlmICghc2VjdGlvbnNFbmFibGVkKSB7XG4gICAgLy8gTWlzc2luZyBhcmd1bWVudHNcbiAgICByZXR1cm4gXCJtZWRpdW0tY2FyZFwiO1xuICB9XG5cbiAgLy8gUmV0dXJuIG51bGwgaWYgbm8gdmFsdWVzIGFyZSBhdmFpbGFibGVcbiAgaWYgKCFzY3JlZW5XaWR0aCB8fCAhY2xhc3NOYW1lcykge1xuICAgIC8vIE1pc3NpbmcgYXJndW1lbnRzXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc05hbWVzLnNwbGl0KFwiIFwiKTtcblxuICAvLyBFYWNoIGJyZWFrcG9pbnQgY29ycmVzcG9uZHMgdG8gYSBtaW5pbXVtIHNjcmVlbiB3aWR0aCBhbmQgaXRzIGFzc29jaWF0ZWQgY29sdW1uIGNsYXNzXG4gIGNvbnN0IGJyZWFrcG9pbnRzID0gW1xuICAgIHsgbWluOiAxMzc0LCBjb2x1bW46IFwiY29sLTRcIiB9LCAvLyAkYnJlYWstcG9pbnQtc2VjdGlvbnMtdmFyaWFudFxuICAgIHsgbWluOiAxMTIyLCBjb2x1bW46IFwiY29sLTNcIiB9LCAvLyAkYnJlYWstcG9pbnQtd2lkZXN0XG4gICAgeyBtaW46IDcyNCwgY29sdW1uOiBcImNvbC0yXCIgfSwgLy8gJGJyZWFrLXBvaW50LWxheW91dC12YXJpYW50XG4gICAgeyBtaW46IDAsIGNvbHVtbjogXCJjb2wtMVwiIH0sIC8vIChkZWZhdWx0IGxheW91dClcbiAgXTtcblxuICBjb25zdCBjYXJkVHlwZXMgPSBbXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdO1xuXG4gIC8vIERldGVybWluZSB3aGljaCBjb2x1bW4gaXMgYWN0aXZlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNjcmVlbiB3aWR0aFxuICBjb25zdCBjdXJyQ29sdW1uQ291bnQgPSBicmVha3BvaW50cy5maW5kKGJwID0+IHNjcmVlbldpZHRoID49IGJwLm1pbikuY29sdW1uO1xuXG4gIC8vIE1hdGNoIHRoZSBjYXJkIHR5cGUgZm9yIHRoYXQgY29sdW1uIGNvdW50XG4gIGZvciAobGV0IHR5cGUgb2YgY2FyZFR5cGVzKSB7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7Y3VyckNvbHVtbkNvdW50fS0ke3R5cGV9YDtcbiAgICBpZiAoY2xhc3NMaXN0LmluY2x1ZGVzKGNsYXNzTmFtZSkpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZTogYmVsb3cgJGJyZWFrLXBvaW50LW1lZGl1bSAoNjEwcHgpLCByZXBvcnQgYGNvbC0xLXNtYWxsYCBhcyBtZWRpdW1cbiAgICAgIGlmIChcbiAgICAgICAgc2NyZWVuV2lkdGggPCA2MTAgJiZcbiAgICAgICAgY3VyckNvbHVtbkNvdW50ID09PSBcImNvbC0xXCIgJiZcbiAgICAgICAgdHlwZSA9PT0gXCJzbWFsbFwiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIFwibWVkaXVtLWNhcmRcIjtcbiAgICAgIH1cbiAgICAgIC8vIFdpbGwgYmUgZWl0aGVyIFwic21hbGwtY2FyZFwiLCBcIm1lZGl1bS1jYXJkXCIsIG9yIFwibGFyZ2UtY2FyZFwiXG4gICAgICByZXR1cm4gYCR7dHlwZX0tY2FyZGA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IENPTkZFVFRJX1ZBUlMgPSBbXG4gIFwiLS1jb2xvci1yZWQtNDBcIixcbiAgXCItLWNvbG9yLXllbGxvdy00MFwiLFxuICBcIi0tY29sb3ItcHVycGxlLTQwXCIsXG4gIFwiLS1jb2xvci1ibHVlLTQwXCIsXG4gIFwiLS1jb2xvci1ncmVlbi00MFwiLFxuXTtcblxuLyoqXG4gKiBDdXN0b20gaG9vayB0byBhbmltYXRlIGEgY29uZmV0dGkgYnVyc3QuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50ICAgTnVtYmVyIG9mIHBhcnRpY2xlc1xuICogQHBhcmFtIHtudW1iZXJ9IHNwcmVhZCAgc3ByZWFkIG9mIGNvbmZldHRpXG4gKiBAcmV0dXJucyB7W1JlYWN0LlJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD4sICgpID0+IHZvaWRdfVxuICovXG5mdW5jdGlvbiB1c2VDb25mZXR0aShjb3VudCA9IDgwLCBzcHJlYWQgPSBNYXRoLlBJIC8gMykge1xuICAvLyBhdm9pZCBlcnJvcnMgZnJvbSBhYm91dDpob21lIGNhY2hlXG4gIGNvbnN0IHByZWZlcnNSZWR1Y2VkTW90aW9uID1cbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICB3aW5kb3cubWF0Y2hNZWRpYShcIihwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpXCIpLm1hdGNoZXM7XG5cbiAgbGV0IGNvbG9ycztcbiAgLy8gaWYgaW4gYWJvdXRob21lIGNhY2hlLCBnZXRDb21wdXRlZFN0eWxlIHdpbGwgbm90IGJlIGF2YWlsYWJsZVxuICBpZiAodHlwZW9mIGdldENvbXB1dGVkU3R5bGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICBjb2xvcnMgPSBDT05GRVRUSV9WQVJTLm1hcCh2YXJpYWJsZSA9PlxuICAgICAgc3R5bGVzLmdldFByb3BlcnR5VmFsdWUodmFyaWFibGUpLnRyaW0oKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29sb3JzID0gW1wiI2ZhNWU3NVwiLCBcIiNkZTk2MDBcIiwgXCIjYzY3MWViXCIsIFwiIzNmOTRmZlwiLCBcIiMzN2I4NDdcIl07XG4gIH1cblxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHBhcnRpY2xlc1JlZiA9IHVzZVJlZihbXSk7XG4gIGNvbnN0IGFuaW1hdGlvbkZyYW1lUmVmID0gdXNlUmVmKDApO1xuXG4gIC8vIGluaXRpYWxpemUvcmVzZXQgcG9vbFxuICBjb25zdCBpbml0aWFsaXplQ29uZmV0dGkgPSB1c2VDYWxsYmFjayhcbiAgICAod2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgY29uc3QgY2VudGVyWCA9IHdpZHRoIC8gMjtcbiAgICAgIGNvbnN0IGNlbnRlclkgPSBoZWlnaHQ7XG4gICAgICBjb25zdCBwb29sID0gcGFydGljbGVzUmVmLmN1cnJlbnQ7XG5cbiAgICAgIC8vIENyZWF0ZSBvciBvdmVyd3JpdGUgZWFjaCBwYXJ0aWNsZeKAmXMgaW5pdGlhbCBzdGF0ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5QSSAvIDIgKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcHJlYWQ7XG4gICAgICAgIGNvbnN0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBjb25zdCBjb2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG5cbiAgICAgICAgcG9vbFtpXSA9IHtcbiAgICAgICAgICB4OiBjZW50ZXJYICsgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDAsXG4gICAgICAgICAgeTogY2VudGVyWSxcbiAgICAgICAgICBjb3MsXG4gICAgICAgICAgc2luLFxuICAgICAgICAgIHZlbG9jaXR5OiBNYXRoLnJhbmRvbSgpICogNiArIDYsXG4gICAgICAgICAgZ3Jhdml0eTogMC4zLFxuICAgICAgICAgIGRlY2F5OiAwLjk2LFxuICAgICAgICAgIHNpemU6IDgsXG4gICAgICAgICAgY29sb3IsXG4gICAgICAgICAgbGlmZTogMCxcbiAgICAgICAgICBtYXhMaWZlOiAxMDAsXG4gICAgICAgICAgdGlsdDogTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyLFxuICAgICAgICAgIHRpbHRTcGVlZDogTWF0aC5yYW5kb20oKSAqIDAuMiArIDAuMDUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBbY291bnQsIHNwcmVhZCwgY29sb3JzXVxuICApO1xuXG4gIC8vIENvcmUgYW5pbWF0aW9uIGxvb3Ag4oCUIHVwZGF0ZXMgcGh5c2ljcyAmIHJlbmRlcnMgZWFjaCBmcmFtZVxuICBjb25zdCBhbmltYXRlUGFydGljbGVzID0gdXNlQ2FsbGJhY2soY2FudmFzID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGNhbnZhcztcbiAgICBjb25zdCBwb29sID0gcGFydGljbGVzUmVmLmN1cnJlbnQ7XG5cbiAgICAvLyBDbGVhciB0aGUgZW50aXJlIGNhbnZhcyBlYWNoIGZyYW1lXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICBsZXQgYW55QWxpdmUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBwYXJ0aWNsZSBvZiBwb29sKSB7XG4gICAgICBpZiAocGFydGljbGUubGlmZSA8IHBhcnRpY2xlLm1heExpZmUpIHtcbiAgICAgICAgYW55QWxpdmUgPSB0cnVlO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBlYWNoIHBhcnRpY2xlcyBwaHlzaWNzOiBwb3NpdGlvbiwgdmVsb2NpdHkgZGVjYXksIGdyYXZpdHksIHRpbHQsIGxpZmVzcGFuXG4gICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5ICo9IHBhcnRpY2xlLmRlY2F5O1xuICAgICAgICBwYXJ0aWNsZS54ICs9IHBhcnRpY2xlLmNvcyAqIHBhcnRpY2xlLnZlbG9jaXR5O1xuICAgICAgICBwYXJ0aWNsZS55IC09IHBhcnRpY2xlLnNpbiAqIHBhcnRpY2xlLnZlbG9jaXR5O1xuICAgICAgICBwYXJ0aWNsZS55ICs9IHBhcnRpY2xlLmdyYXZpdHk7XG4gICAgICAgIHBhcnRpY2xlLnRpbHQgKz0gcGFydGljbGUudGlsdFNwZWVkO1xuICAgICAgICBwYXJ0aWNsZS5saWZlICs9IDE7XG4gICAgICB9XG5cbiAgICAgIC8vIERyYXc6IGFwcGx5IGFscGhhLCB0cmFuc2Zvcm0gJiBkcmF3IGEgcm90YXRlZCwgc2NhbGVkIHNxdWFyZVxuICAgICAgY29uc3QgYWxwaGFWYWx1ZSA9IDEgLSBwYXJ0aWNsZS5saWZlIC8gcGFydGljbGUubWF4TGlmZTtcbiAgICAgIGNvbnN0IHNjYWxlWSA9IE1hdGguc2luKHBhcnRpY2xlLnRpbHQpO1xuXG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gYWxwaGFWYWx1ZTtcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIHBhcnRpY2xlLngsIHBhcnRpY2xlLnkpO1xuICAgICAgY29udGV4dC5yb3RhdGUoTWF0aC5QSSAvIDQpO1xuICAgICAgY29udGV4dC5zY2FsZSgxLCBzY2FsZVkpO1xuXG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhcnRpY2xlLmNvbG9yO1xuICAgICAgY29udGV4dC5maWxsUmVjdChcbiAgICAgICAgLXBhcnRpY2xlLnNpemUgLyAyLFxuICAgICAgICAtcGFydGljbGUuc2l6ZSAvIDIsXG4gICAgICAgIHBhcnRpY2xlLnNpemUsXG4gICAgICAgIHBhcnRpY2xlLnNpemVcbiAgICAgICk7XG5cbiAgICAgIC8vIHJlc2V0IGVhY2ggcGFydGljbGVcbiAgICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgY29udGV4dC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGFueUFsaXZlKSB7XG4gICAgICAvLyBjb250aW51ZSB0aGUgYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb25GcmFtZVJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgYW5pbWF0ZVBhcnRpY2xlcyhjYW52YXMpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQpO1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgLy8gUmVzZXRzIGFuZCBzdGFydHMgYSBuZXcgY29uZmV0dGkgYW5pbWF0aW9uXG4gIGNvbnN0IGZpcmVDb25mZXR0aSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAocHJlZmVyc1JlZHVjZWRNb3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmPy5jdXJyZW50O1xuICAgIGlmIChjYW52YXMpIHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQpO1xuICAgICAgaW5pdGlhbGl6ZUNvbmZldHRpKGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICBhbmltYXRlUGFydGljbGVzKGNhbnZhcyk7XG4gICAgfVxuICB9LCBbaW5pdGlhbGl6ZUNvbmZldHRpLCBhbmltYXRlUGFydGljbGVzLCBwcmVmZXJzUmVkdWNlZE1vdGlvbl0pO1xuXG4gIHJldHVybiBbY2FudmFzUmVmLCBmaXJlQ29uZmV0dGldO1xufVxuXG5leHBvcnQgeyB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciwgZ2V0QWN0aXZlQ2FyZFNpemUsIHVzZUNvbmZldHRpIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IFNhZmVBbmNob3IgfSBmcm9tIFwiLi4vU2FmZUFuY2hvci9TYWZlQW5jaG9yXCI7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBMaW5rTWVudSB9IGZyb20gXCIuLi8uLi9MaW5rTWVudS9MaW5rTWVudVwiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vLi4vbGliL3V0aWxzXCI7XG5cbmNvbnN0IFBSRUZfVFJFTkRJTkdfVkFSSUFOVCA9IFwidHJlbmRpbmdTZWFyY2gudmFyaWFudFwiO1xuY29uc3QgUFJFRl9SRUZJTkVEX0NBUkRTX0xBWU9VVCA9IFwiZGlzY292ZXJ5c3RyZWFtLnJlZmluZWRDYXJkc0xheW91dC5lbmFibGVkXCI7XG5cbmZ1bmN0aW9uIFRyZW5kaW5nU2VhcmNoZXMoKSB7XG4gIGNvbnN0IFtzaG93Q29udGV4dE1lbnUsIHNldFNob3dDb250ZXh0TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIFRoZSBrZXlib2FyZCBhY2Nlc3MgcGFyYW1ldGVyIGlzIHBhc3NlZCBkb3duIHRvIExpbmtNZW51IGNvbXBvbmVudFxuICAvLyB0aGF0IHVzZXMgaXQgdG8gZm9jdXMgb24gdGhlIGZpcnN0IGNvbnRleHQgbWVudSBvcHRpb24gZm9yIGFjY2Vzc2liaWxpdHkuXG4gIGNvbnN0IFtpc0tleWJvYXJkQWNjZXNzLCBzZXRJc0tleWJvYXJkQWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IFRyZW5kaW5nU2VhcmNoLCBQcmVmcyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUpO1xuICBjb25zdCB7IHZhbHVlczogcHJlZnMgfSA9IFByZWZzO1xuICBjb25zdCB7IHN1Z2dlc3Rpb25zLCBjb2xsYXBzZWQgfSA9IFRyZW5kaW5nU2VhcmNoO1xuICBjb25zdCB2YXJpYW50ID0gcHJlZnNbUFJFRl9UUkVORElOR19WQVJJQU5UXTtcbiAgY29uc3QgcmVmaW5lZENhcmRzID0gcHJlZnNbUFJFRl9SRUZJTkVEX0NBUkRTX0xBWU9VVF07XG4gIGxldCByZXN1bHRSZWYgPSB1c2VSZWYoW10pO1xuICBsZXQgY29udGV4dE1lbnVIb3N0ID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IFRSRU5ESU5HX1NFQVJDSF9DT05URVhUX01FTlVfT1BUSU9OUyA9IFtcbiAgICBcIlRyZW5kaW5nU2VhcmNoRGlzbWlzc1wiLFxuICAgIFwiVHJlbmRpbmdTZWFyY2hMZWFybk1vcmVcIixcbiAgXTtcblxuICBmdW5jdGlvbiBvbkFycm93Q2xpY2soKSB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuVFJFTkRJTkdfU0VBUkNIX1RPR0dMRV9DT0xMQVBTRSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbGxhcHNlZDogIWNvbGxhcHNlZCxcbiAgICAgICAgICB2YXJpYW50LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlua09wZW4oKSB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuVFJFTkRJTkdfU0VBUkNIX1NVR0dFU1RJT05fT1BFTixcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHZhcmlhbnQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBJZiB0aGUgd2luZG93IGlzIHNtYWxsLCB0aGUgY29udGV4dCBtZW51IGluIHZhcmlhbnQgQiB3aWxsIG1vdmUgY2xvc2VyIHRvIHRoZSBjYXJkXG4gIC8vIHNvIHRoYXQgaXQgZG9lc24ndCBjdXQgb2ZmXG4gIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51U2hvdyA9ICgpID0+IHtcbiAgICBjb25zdCBob3N0ID0gY29udGV4dE1lbnVIb3N0LmN1cnJlbnQ7XG4gICAgY29uc3QgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09IFwicnRsXCI7IC8vIHJldHVybnMgdHJ1ZSBpZiBwYWdlIGxhbmd1YWdlIGlzIHJpZ2h0LXRvLWxlZnRcbiAgICBjb25zdCBjaGVja1JlY3QgPSBob3N0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IG1heEJvdW5kcyA9IDIwMDtcblxuICAgIC8vIEFkZHMgdGhlIGNsYXNzIG9mIFwibGFzdC1pdGVtXCIgaWYgdGhlIGNhcmQgaXMgbmVhciB0aGUgZWRnZSBvZiB0aGUgd2luZG93XG4gICAgY29uc3QgY2hlY2tCb3VuZHMgPSBpc1JUTFxuICAgICAgPyBjaGVja1JlY3QubGVmdCA8PSBtYXhCb3VuZHNcbiAgICAgIDogd2luZG93LmlubmVyV2lkdGggLSBjaGVja1JlY3QucmlnaHQgPD0gbWF4Qm91bmRzO1xuXG4gICAgaWYgKGNoZWNrQm91bmRzKSB7XG4gICAgICBob3N0LmNsYXNzTGlzdC5hZGQoXCJsYXN0LWl0ZW1cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51VXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvc3QgPSBjb250ZXh0TWVudUhvc3QuY3VycmVudDtcbiAgICBpZiAoIWhvc3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBob3N0LmNsYXNzTGlzdC5yZW1vdmUoXCJsYXN0LWl0ZW1cIik7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlQ29udGV4dE1lbnUgPSBpc0tleUJvYXJkID0+IHtcbiAgICBzZXRTaG93Q29udGV4dE1lbnUoIXNob3dDb250ZXh0TWVudSk7XG4gICAgc2V0SXNLZXlib2FyZEFjY2Vzcyhpc0tleUJvYXJkKTtcblxuICAgIGlmICghc2hvd0NvbnRleHRNZW51KSB7XG4gICAgICBoYW5kbGVDb250ZXh0TWVudVNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGFuZGxlQ29udGV4dE1lbnVVcGRhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gb25Db250ZXh0TWVudUNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdG9nZ2xlQ29udGV4dE1lbnUoZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25Db250ZXh0TWVudUtleURvd24oZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiIHx8IGUua2V5ID09PSBcIiBcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdG9nZ2xlQ29udGV4dE1lbnUodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25VcGRhdGUoKSB7XG4gICAgc2V0U2hvd0NvbnRleHRNZW51KCFzaG93Q29udGV4dE1lbnUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUmVzdWx0S2V5RG93bihldmVudCwgaW5kZXgpIHtcbiAgICBjb25zdCBtYXhSZXN1bHRzID0gc3VnZ2VzdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleDtcblxuICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaW5kZXggPCBtYXhSZXN1bHRzIC0gMSkge1xuICAgICAgICBuZXh0SW5kZXggPSBpbmRleCArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICBuZXh0SW5kZXggPSBpbmRleCAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVzdWx0UmVmLmN1cnJlbnRbaW5kZXhdLnRhYkluZGV4ID0gLTE7XG4gICAgcmVzdWx0UmVmLmN1cnJlbnRbbmV4dEluZGV4XS50YWJJbmRleCA9IDA7XG4gICAgcmVzdWx0UmVmLmN1cnJlbnRbbmV4dEluZGV4XS5mb2N1cygpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LlRSRU5ESU5HX1NFQVJDSF9JTVBSRVNTSU9OLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdmFyaWFudCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfSwgW2Rpc3BhdGNoLCB2YXJpYW50XSk7XG5cbiAgY29uc3QgcmVmID0gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0aW9uKTtcbiAgaWYgKCFzdWdnZXN0aW9ucz8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH0gZWxzZSBpZiAodmFyaWFudCA9PT0gXCJhXCIgfHwgdmFyaWFudCA9PT0gXCJjXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgcmVmLmN1cnJlbnQgPSBbZWxdO1xuICAgICAgICB9fVxuICAgICAgICAvLyBWYXJpYW50IEMgbWF0Y2hlcyB0aGUgZGVzaWduIG9mIHZhcmlhbnQgQSBidXQgc2hvdWxkIG9ubHlcbiAgICAgICAgLy8gYXBwZWFyIG9uIGhvdmVyXG4gICAgICAgIGNsYXNzTmFtZT17YHRyZW5kaW5nLXNlYXJjaGVzLXBpbGwtd3JhcHBlciAke3ZhcmlhbnQgPT09IFwiY1wiID8gXCJob3Zlci1vbmx5XCIgOiBcIlwifWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtdGl0bGUtd3JhcHBlclwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWljb24gaWNvbiBpY29uLWFycm93LXRyZW5kaW5nXCI+PC9zcGFuPlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtdGl0bGVcIlxuICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXRyZW5kaW5nLXNlYXJjaGVzLXRpdGxlXCJcbiAgICAgICAgICA+PC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLW9wZW4tdHJlbmRpbmctc2VhcmNoZXNcIj5cbiAgICAgICAgICAgIDxtb3otYnV0dG9uXG4gICAgICAgICAgICAgIGljb25zcmM9e2BjaHJvbWU6Ly9nbG9iYWwvc2tpbi9pY29ucy9hcnJvdy0ke2NvbGxhcHNlZCA/IFwiZG93blwiIDogXCJ1cFwifS5zdmdgfVxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkFycm93Q2xpY2t9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi1hcnJvd2hlYWQtdXBgfVxuICAgICAgICAgICAgICB0eXBlPVwiaWNvbiBnaG9zdFwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD17YG5ld3RhYi10cmVuZGluZy1zZWFyY2hlcy0ke2NvbGxhcHNlZCA/IFwic2hvd1wiIDogXCJoaWRlXCJ9LXRyZW5kaW5nYH1cbiAgICAgICAgICAgID48L21vei1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IWNvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWxpc3RcIj5cbiAgICAgICAgICAgIHtzdWdnZXN0aW9ucy5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgIGtleT17cmVzdWx0LnN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVuZGluZy1zZWFyY2gtaXRlbVwiXG4gICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gaGFuZGxlUmVzdWx0S2V5RG93bihlLCBpbmRleCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNhZmVBbmNob3JcbiAgICAgICAgICAgICAgICAgICAgdXJsPXtyZXN1bHQuc2VhcmNoVXJsfVxuICAgICAgICAgICAgICAgICAgICBvbkxpbmtDbGljaz17aGFuZGxlTGlua09wZW59XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtyZXN1bHQuc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc2V0UmVmPXtpdGVtID0+IChyZXN1bHRSZWYuY3VycmVudFtpbmRleF0gPSBpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2luZGV4ID09PSAwID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxvd2VyQ2FzZVN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICA8L1NhZmVBbmNob3I+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICl9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfSBlbHNlIGlmICh2YXJpYW50ID09PSBcImJcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgIHJlZi5jdXJyZW50ID0gW2VsXTtcbiAgICAgICAgICBjb250ZXh0TWVudUhvc3QuY3VycmVudCA9IGVsO1xuICAgICAgICB9fVxuICAgICAgICBjbGFzc05hbWU9XCJ0cmVuZGluZy1zZWFyY2hlcy1saXN0LXZpZXdcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWxpc3Qtdmlldy1oZWFkZXJcIj5cbiAgICAgICAgICA8aDMgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXRyZW5kaW5nLXNlYXJjaGVzLXRpdGxlXCI+PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWNvbnRleHQtbWVudS13cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyZW5kaW5nLXNlYXJjaGVzLWNvbnRleHQtbWVudSAke3Nob3dDb250ZXh0TWVudSA/IFwiY29udGV4dC1tZW51LW9wZW5cIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG1vei1idXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiaWNvbiBnaG9zdFwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1tZW51LXNlY3Rpb24tdG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgaWNvbnNyYz1cImNocm9tZTovL2dsb2JhbC9za2luL2ljb25zL21vcmUuc3ZnXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNvbnRleHRNZW51Q2xpY2t9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtvbkNvbnRleHRNZW51S2V5RG93bn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3dDb250ZXh0TWVudSAmJiAoXG4gICAgICAgICAgICAgICAgPExpbmtNZW51XG4gICAgICAgICAgICAgICAgICBvblVwZGF0ZT17b25VcGRhdGV9XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgICAgICBrZXlib2FyZEFjY2Vzcz17aXNLZXlib2FyZEFjY2Vzc31cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e1RSRU5ESU5HX1NFQVJDSF9DT05URVhUX01FTlVfT1BUSU9OU31cbiAgICAgICAgICAgICAgICAgIHNob3VsZFNlbmRJbXByZXNzaW9uU3RhdHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICBzaXRlPXt7XG4gICAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcvMS9maXJlZm94LyVWRVJTSU9OJS8lT1MlLyVMT0NBTEUlL3RyZW5kaW5nLXNlYXJjaGVzLW5ldy10YWJcIixcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWxpc3QtaXRlbXNcIj5cbiAgICAgICAgICB7c3VnZ2VzdGlvbnMuc2xpY2UoMCwgNikubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e3Jlc3VsdC5zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyZW5kaW5nLXNlYXJjaGVzLWxpc3QtaXRlbSAke3JlZmluZWRDYXJkcyA/IFwiY29tcGFjdFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBoYW5kbGVSZXN1bHRLZXlEb3duKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxTYWZlQW5jaG9yXG4gICAgICAgICAgICAgICAgICB1cmw9e3Jlc3VsdC5zZWFyY2hVcmx9XG4gICAgICAgICAgICAgICAgICBvbkxpbmtDbGljaz17aGFuZGxlTGlua09wZW59XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cmVzdWx0LnN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICBzZXRSZWY9e2l0ZW0gPT4gKHJlc3VsdFJlZi5jdXJyZW50W2luZGV4XSA9IGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e2luZGV4ID09PSAwID8gMCA6IC0xfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtyZXN1bHQuaWNvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pY29uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cmVzdWx0Lmljb259IGFsdD1cIlwiIGNsYXNzTmFtZT1cInRyZW5kaW5nLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxvd2VyQ2FzZVN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+e3Jlc3VsdC5kZXNjcmlwdGlvbn08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtaWNvbiBpY29uIGljb24tYXJyb3ctdHJlbmRpbmdcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge3Jlc3VsdC5sb3dlckNhc2VTdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9TYWZlQW5jaG9yPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgVHJlbmRpbmdTZWFyY2hlcyB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyogZ2xvYmFscyBDb250ZW50U2VhcmNoVUlDb250cm9sbGVyLCBDb250ZW50U2VhcmNoSGFuZG9mZlVJQ29udHJvbGxlciAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBJU19ORVdUQUIgfSBmcm9tIFwiY29udGVudC1zcmMvbGliL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0xvZ28vTG9nb1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVHJlbmRpbmdTZWFyY2hlcyB9IGZyb20gXCIuLi9EaXNjb3ZlcnlTdHJlYW1Db21wb25lbnRzL1RyZW5kaW5nU2VhcmNoZXMvVHJlbmRpbmdTZWFyY2hlc1wiO1xuXG5leHBvcnQgY2xhc3MgX1NlYXJjaCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uU2VhcmNoQ2xpY2sgPSB0aGlzLm9uU2VhcmNoQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2VhcmNoSGFuZG9mZkNsaWNrID0gdGhpcy5vblNlYXJjaEhhbmRvZmZDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWFyY2hIYW5kb2ZmUGFzdGUgPSB0aGlzLm9uU2VhcmNoSGFuZG9mZlBhc3RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlYXJjaEhhbmRvZmZEcm9wID0gdGhpcy5vblNlYXJjaEhhbmRvZmZEcm9wLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0TW91bnQgPSB0aGlzLm9uSW5wdXRNb3VudC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25JbnB1dE1vdW50SGFuZG9mZiA9IHRoaXMub25JbnB1dE1vdW50SGFuZG9mZi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWFyY2hIYW5kb2ZmQnV0dG9uTW91bnQgPVxuICAgICAgdGhpcy5vblNlYXJjaEhhbmRvZmZCdXR0b25Nb3VudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRXZlbnQoZXZlbnQpIHtcbiAgICAvLyBBbHNvIHRyYWNrIHNlYXJjaCBldmVudHMgd2l0aCBvdXIgb3duIHRlbGVtZXRyeVxuICAgIGlmIChldmVudC5kZXRhaWwudHlwZSA9PT0gXCJTZWFyY2hcIikge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5Vc2VyRXZlbnQoeyBldmVudDogXCJTRUFSQ0hcIiB9KSk7XG4gICAgfVxuICB9XG5cbiAgb25TZWFyY2hDbGljayhldmVudCkge1xuICAgIHdpbmRvdy5nQ29udGVudFNlYXJjaENvbnRyb2xsZXIuc2VhcmNoKGV2ZW50KTtcbiAgfVxuXG4gIGRvU2VhcmNoSGFuZG9mZih0ZXh0KSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oeyB0eXBlOiBhdC5IQU5ET0ZGX1NFQVJDSF9UT19BV0VTT01FQkFSLCBkYXRhOiB7IHRleHQgfSB9KVxuICAgICk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6IGF0LkZBS0VfRk9DVVNfU0VBUkNIIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuVXNlckV2ZW50KHsgZXZlbnQ6IFwiU0VBUkNIX0hBTkRPRkZcIiB9KSk7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiBhdC5ESVNBQkxFX1NFQVJDSCB9KTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaEhhbmRvZmZDbGljayhldmVudCkge1xuICAgIC8vIFdoZW4gc2VhcmNoIGhhbmQtb2ZmIGlzIGVuYWJsZWQsIHdlIHJlbmRlciBhIGJpZyBidXR0b24gdGhhdCBpcyBzdHlsZWQgdG9cbiAgICAvLyBsb29rIGxpa2UgYSBzZWFyY2ggdGV4dGJveC4gSWYgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCB3ZSBzdHlsZVxuICAgIC8vIHRoZSBidXR0b24gYXMgaWYgaXQgd2FzIGEgZm9jdXNlZCBzZWFyY2ggYm94IGFuZCBzaG93IGEgZmFrZSBjdXJzb3IgYnV0XG4gICAgLy8gcmVhbGx5IGZvY3VzIHRoZSBhd2Vzb21lYmFyIHdpdGhvdXQgdGhlIGZvY3VzIHN0eWxlcyAoXCJoaWRkZW4gZm9jdXNcIikuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRvU2VhcmNoSGFuZG9mZigpO1xuICB9XG5cbiAgb25TZWFyY2hIYW5kb2ZmUGFzdGUoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZG9TZWFyY2hIYW5kb2ZmKGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcIlRleHRcIikpO1xuICB9XG5cbiAgb25TZWFyY2hIYW5kb2ZmRHJvcChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRleHQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHRcIik7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIHRoaXMuZG9TZWFyY2hIYW5kb2ZmKHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGNhcmV0ID0gdGhpcy5mYWtlQ2FyZXQ7XG4gICAgY29uc3QgeyBjYXJldEJsaW5rQ291bnQsIGNhcmV0QmxpbmtUaW1lIH0gPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlcztcblxuICAgIGlmIChjYXJldCkge1xuICAgICAgLy8gSWYgY2FyZXQgYmxpbmsgY291bnQgaXNuJ3QgZGVmaW5lZCwgdXNlIHRoZSBkZWZhdWx0IGluZmluaXRlIGJlaGF2aW9yIGZvciBhbmltYXRpb25cbiAgICAgIGNhcmV0LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tY2FyZXQtYmxpbmstY291bnRcIixcbiAgICAgICAgY2FyZXRCbGlua0NvdW50ID4gLTEgPyBjYXJldEJsaW5rQ291bnQgOiBcImluZmluaXRlXCJcbiAgICAgICk7XG5cbiAgICAgIC8vIEFwcGx5IGN1c3RvbSBibGluayByYXRlIGlmIHNldCwgZWxzZSBmYWxsYmFjayB0byBkZWZhdWx0ICg1NjdtcyBvbi9vZmYgLS0+IDExMzRtcyB0b3RhbClcbiAgICAgIGNhcmV0LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tY2FyZXQtYmxpbmstdGltZVwiLFxuICAgICAgICBjYXJldEJsaW5rVGltZSA+IDAgPyBgJHtjYXJldEJsaW5rVGltZSAqIDJ9bXNgIDogYCR7MTEzNH1tc2BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgZGVsZXRlIHdpbmRvdy5nQ29udGVudFNlYXJjaENvbnRyb2xsZXI7XG4gIH1cblxuICBvbklucHV0TW91bnQoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIFRoZSBcImhlYWx0aFJlcG9ydEtleVwiIGFuZCBuZWVkcyB0byBiZSBcIm5ld3RhYlwiIG9yIFwiYWJvdXRob21lXCIgc28gdGhhdFxuICAgICAgLy8gQnJvd3NlclVzYWdlVGVsZW1ldHJ5LnN5cy5tanMga25vd3MgdG8gaGFuZGxlIGV2ZW50cyB3aXRoIHRoaXMgbmFtZSwgYW5kXG4gICAgICAvLyBjYW4gYWRkIHRoZSBhcHByb3ByaWF0ZSB0ZWxlbWV0cnkgcHJvYmVzIGZvciBzZWFyY2guIFdpdGhvdXQgdGhlIGNvcnJlY3RcbiAgICAgIC8vIG5hbWUsIGNlcnRhaW4gdGVzdHMgbGlrZSBicm93c2VyX1VzYWdlVGVsZW1ldHJ5X2NvbnRlbnQuanMgd2lsbCBmYWlsXG4gICAgICAvLyAoU2VlIGdpdGh1YiB0aWNrZXQgIzIzNDggZm9yIG1vcmUgZGV0YWlscylcbiAgICAgIGNvbnN0IGhlYWx0aFJlcG9ydEtleSA9IElTX05FV1RBQiA/IFwibmV3dGFiXCIgOiBcImFib3V0aG9tZVwiO1xuXG4gICAgICAvLyBnQ29udGVudFNlYXJjaENvbnRyb2xsZXIgbmVlZHMgdG8gZXhpc3QgYXMgYSBnbG9iYWwgc28gdGhhdCB0ZXN0cyBmb3JcbiAgICAgIC8vIHRoZSBleGlzdGluZyBhYm91dDpob21lIGNhbiBmaW5kIGl0OyBhbmQgc28gaXQgYWxsb3dzIHRoZXNlIHRlc3RzIHRvIHBhc3MuXG4gICAgICAvLyBJbiB0aGUgZnV0dXJlLCB3aGVuIGFjdGl2aXR5IHN0cmVhbSBpcyBkZWZhdWx0IGFib3V0OmhvbWUsIHRoaXMgY2FuIGJlIHJlbmFtZWRcbiAgICAgIHdpbmRvdy5nQ29udGVudFNlYXJjaENvbnRyb2xsZXIgPSBuZXcgQ29udGVudFNlYXJjaFVJQ29udHJvbGxlcihcbiAgICAgICAgaW5wdXQsXG4gICAgICAgIGlucHV0LnBhcmVudE5vZGUsXG4gICAgICAgIGhlYWx0aFJlcG9ydEtleVxuICAgICAgKTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJDb250ZW50U2VhcmNoQ2xpZW50XCIsIHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZ0NvbnRlbnRTZWFyY2hDb250cm9sbGVyID0gbnVsbDtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJDb250ZW50U2VhcmNoQ2xpZW50XCIsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW5wdXRNb3VudEhhbmRvZmYoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIC8vIFRoZSBoYW5kb2ZmIFVJIGNvbnRyb2xsZXIgaGVscHMgdXMgc2V0IHRoZSBzZWFyY2ggaWNvbiBhbmQgcmVhY3RzIHRvXG4gICAgICAvLyBjaGFuZ2VzIHRvIGRlZmF1bHQgZW5naW5lIHRvIGtlZXAgZXZlcnl0aGluZyBpbiBzeW5jLlxuICAgICAgdGhpcy5faGFuZG9mZlNlYXJjaENvbnRyb2xsZXIgPSBuZXcgQ29udGVudFNlYXJjaEhhbmRvZmZVSUNvbnRyb2xsZXIoKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaEhhbmRvZmZCdXR0b25Nb3VudChidXR0b24pIHtcbiAgICAvLyBLZWVwIGEgcmVmZXJlbmNlIHRvIHRoZSBidXR0b24gZm9yIHVzZSBkdXJpbmcgXCJwYXN0ZVwiIGV2ZW50IGhhbmRsaW5nLlxuICAgIHRoaXMuX3NlYXJjaEhhbmRvZmZCdXR0b24gPSBidXR0b247XG4gIH1cblxuICAvKlxuICAgKiBEbyBub3QgY2hhbmdlIHRoZSBJRCBvbiB0aGUgaW5wdXQgZmllbGQsIGFzIGxlZ2FjeSBuZXd0YWIgY29kZVxuICAgKiBzcGVjaWZpY2FsbHkgbG9va3MgZm9yIHRoZSBpZCAnbmV3dGFiLXNlYXJjaC10ZXh0JyBvbiBpbnB1dCBmaWVsZHNcbiAgICogaW4gb3JkZXIgdG8gZXhlY3V0ZSBzZWFyY2hlcyBpbiB2YXJpb3VzIHRlc3RzXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgd3JhcHBlckNsYXNzTmFtZSA9IFtcbiAgICAgIFwic2VhcmNoLXdyYXBwZXJcIixcbiAgICAgIHRoaXMucHJvcHMuZGlzYWJsZSAmJiBcInNlYXJjaC1kaXNhYmxlZFwiLFxuICAgICAgdGhpcy5wcm9wcy5mYWtlRm9jdXMgJiYgXCJmYWtlLWZvY3VzXCIsXG4gICAgXVxuICAgICAgLmZpbHRlcih2ID0+IHYpXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgY29uc3QgcHJlZnMgPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlcztcblxuICAgIGNvbnN0IHRyZW5kaW5nU2VhcmNoRW5hYmxlZCA9XG4gICAgICBwcmVmc1tcInRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIl0gJiZcbiAgICAgIHByZWZzW1wic3lzdGVtLnRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIl0gJiZcbiAgICAgIHByZWZzW1widHJlbmRpbmdTZWFyY2guZGVmYXVsdFNlYXJjaEVuZ2luZVwiXT8udG9Mb3dlckNhc2UoKSA9PT0gXCJnb29nbGVcIjtcblxuICAgIGNvbnN0IHRyZW5kaW5nU2VhcmNoVmFyaWFudCA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tcInRyZW5kaW5nU2VhcmNoLnZhcmlhbnRcIl07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJDbGFzc05hbWV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dMb2dvICYmIDxMb2dvIC8+fVxuICAgICAgICAgIHshdGhpcy5wcm9wcy5oYW5kb2ZmRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lci13cmFwcGVyIG5vLWhhbmRvZmZcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJuZXd0YWItc2VhcmNoLXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWFyY2gtYm94LWlucHV0XCJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCIyNTZcIlxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5vbklucHV0TW91bnR9XG4gICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBpZD1cInNlYXJjaFN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlYXJjaC1ib3gtc2VhcmNoLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5vblNlYXJjaENsaWNrfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dHJlbmRpbmdTZWFyY2hFbmFibGVkICYmXG4gICAgICAgICAgICAgICAgKHRyZW5kaW5nU2VhcmNoVmFyaWFudCA9PT0gXCJhXCIgfHxcbiAgICAgICAgICAgICAgICAgIHRyZW5kaW5nU2VhcmNoVmFyaWFudCA9PT0gXCJjXCIpICYmIDxUcmVuZGluZ1NlYXJjaGVzIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5oYW5kb2ZmRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtaGFuZG9mZi1idXR0b25cIlxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5vblNlYXJjaEhhbmRvZmZCdXR0b25Nb3VudH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoSGFuZG9mZkNsaWNrfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYWtlLXRleHRib3hcIiAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWtlLWVkaXRhYmxlXCJcbiAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIG9uRHJvcD17dGhpcy5vblNlYXJjaEhhbmRvZmZEcm9wfVxuICAgICAgICAgICAgICAgICAgb25QYXN0ZT17dGhpcy5vblNlYXJjaEhhbmRvZmZQYXN0ZX1cbiAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5vbklucHV0TW91bnRIYW5kb2ZmfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFrZS1jYXJldFwiXG4gICAgICAgICAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWtlQ2FyZXQgPSBlbDtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIHt0cmVuZGluZ1NlYXJjaEVuYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAodHJlbmRpbmdTZWFyY2hWYXJpYW50ID09PSBcImFcIiB8fFxuICAgICAgICAgICAgICAgICAgdHJlbmRpbmdTZWFyY2hWYXJpYW50ID09PSBcImNcIikgJiYgPFRyZW5kaW5nU2VhcmNoZXMgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaCA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgUHJlZnM6IHN0YXRlLlByZWZzLFxufSkpKF9TZWFyY2gpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dGNvbEFJSW50ZXJmYWNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbnB1dFZhbHVlOiBcIlwiLFxuICAgICAgaXNFeHBhbmRlZDogZmFsc2UsXG4gICAgICBpc0RyYWdnaW5nOiBmYWxzZSxcbiAgICAgIGZpbGVzOiBbXSxcbiAgICB9O1xuICAgIHRoaXMudGV4dGFyZWFSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmZpbGVJbnB1dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSBlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlS2V5RG93biA9IGUgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmICFlLnNoaWZ0S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmhhbmRsZVN1Ym1pdCgpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlLCBmaWxlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgfHwgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAvLyBIYW5kbGUgQUkgcmVxdWVzdCBzdWJtaXNzaW9uXG4gICAgICAvLyBMb2cgQUkgcmVxdWVzdCBmb3IgZGV2ZWxvcG1lbnRcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiQUkgUmVxdWVzdDpcIiwgeyB0ZXh0OiBpbnB1dFZhbHVlLCBmaWxlcyB9KTtcbiAgICAgIHRoaXMucHJvcHMub25BSVJlcXVlc3Q/LihpbnB1dFZhbHVlLCBmaWxlcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZTogXCJcIiwgZmlsZXM6IFtdIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVGb2N1cyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgLy8gT25seSBjb2xsYXBzZSBpZiBjbGlja2luZyBvdXRzaWRlIHRoZSBlbnRpcmUgY29tcG9uZW50XG4gICAgaWYgKCFlLmN1cnJlbnRUYXJnZXQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXhwYW5kZWQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVGaWxlVXBsb2FkID0gZSA9PiB7XG4gICAgY29uc3QgbmV3RmlsZXMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmZpbGVzKTtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgZmlsZXM6IFsuLi5wcmV2U3RhdGUuZmlsZXMsIC4uLm5ld0ZpbGVzXSxcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlUmVtb3ZlRmlsZSA9IGluZGV4ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgZmlsZXM6IHByZXZTdGF0ZS5maWxlcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KSxcbiAgICB9KSk7XG4gIH07XG5cbiAgaGFuZGxlRHJhZ092ZXIgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRHJhZ2dpbmc6IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlRHJhZ0xlYXZlID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RyYWdnaW5nOiBmYWxzZSB9KTtcbiAgfTtcblxuICBoYW5kbGVEcm9wID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0RyYWdnaW5nOiBmYWxzZSB9KTtcblxuICAgIGNvbnN0IGRyb3BwZWRGaWxlcyA9IEFycmF5LmZyb20oZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBmaWxlczogWy4uLnByZXZTdGF0ZS5maWxlcywgLi4uZHJvcHBlZEZpbGVzXSxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaW5wdXRWYWx1ZSwgaXNFeHBhbmRlZCwgaXNEcmFnZ2luZywgZmlsZXMgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB3YWxscGFwZXJzRW5hYmxlZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRjb2wtYWktaW50ZXJmYWNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1iYWNrZHJvcFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1jb250ZW50LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIHsvKiBMb2dvIFNlY3Rpb24gLSBVbmlxdWUgQ29udGV4dGNvbCBCcmFuZGluZyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1sb2dvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY29udGV4dGNvbC5jb20vYXNzZXRzL2NvbnRleHRjb2wucG5nXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJDb250ZXh0Y29sXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWxvZ29cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDBweFwiLFxuICAgICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBNYWluIENUQSBTZWN0aW9uICovfVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb250ZXh0Y29sLWN0YS1jb250YWluZXIgJHtpc0V4cGFuZGVkID8gXCJleHBhbmRlZFwiIDogXCJcIn0gJHtpc0RyYWdnaW5nID8gXCJkcmFnZ2luZ1wiIDogXCJcIn1gfVxuICAgICAgICAgICAgICBvbkZvY3VzPXt0aGlzLmhhbmRsZUZvY3VzfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgICAgICAgb25EcmFnT3Zlcj17dGhpcy5oYW5kbGVEcmFnT3Zlcn1cbiAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e3RoaXMuaGFuZGxlRHJhZ0xlYXZlfVxuICAgICAgICAgICAgICBvbkRyb3A9e3RoaXMuaGFuZGxlRHJvcH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWN0YS1iYWNrZHJvcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1pbnB1dC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLnRleHRhcmVhUmVmfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5oYW5kbGVLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgeW91IHdhbnQgQ29udGV4dGNvbCBBSSBhZ2VudCB0byBkbyBmb3IgeW91IG9uIEJyb3dzZXI/XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1tYWluLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgcm93cz17aXNFeHBhbmRlZCA/IDQgOiAyfVxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgey8qIEZpbGUgRGlzcGxheSAqL31cbiAgICAgICAgICAgICAgICAgIHtCb29sZWFuKGZpbGVzLmxlbmd0aCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRjb2wtZmlsZXMtZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtmaWxlcy5tYXAoKGZpbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbnRleHRjb2wtZmlsZS1jaGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbnRleHRjb2wtZmlsZS1pY29uXCI+8J+Tjjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dGNvbC1maWxlLW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVJlbW92ZUZpbGUoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHRjb2wtZmlsZS1yZW1vdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJSZW1vdmUgZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDDl1xuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgIHsvKiBBY3Rpb24gQnV0dG9ucyAqL31cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1zZWNvbmRhcnktYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWFjdGlvbi1idG4gY29udGV4dGNvbC1maWxlLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlVwbG9hZCBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsMkg2QTIsMiAwIDAsMCA0LDRWMjBBMiwyIDAgMCwwIDYsMjJIMThBMiwyIDAgMCwwIDIwLDIwVjhMMTQsMk0xOCwyMEg2VjRIMTNWOUgxOFYyMFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1hY3Rpb24tYnRuIGNvbnRleHRjb2wtbGluay1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMy45LDEyQzMuOSwxMC4yOSA1LjI5LDguOSA3LDguOUgxMVY3SDdBNSw1IDAgMCwwIDIsMTJBNSw1IDAgMCwwIDcsMTdIMTFWMTUuMUg3QzUuMjksMTUuMSAzLjksMTMuNzEgMy45LDEyTTgsMTNIMTZWMTFIOFYxM00xNyw3SDEzVjguOUgxN0MxOC43MSw4LjkgMjAuMSwxMC4yOSAyMC4xLDEyQzIwLjEsMTMuNzEgMTguNzEsMTUuMSAxNywxNS4xSDEzVjE3SDE3QTUsNSAwIDAsMCAyMiwxMkE1LDUgMCAwLDAgMTcsN1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1hY3Rpb24tYnRuIGNvbnRleHRjb2wtdm9pY2UtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVm9pY2UgaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyLDJBMywzIDAgMCwxIDE1LDVWMTFBMywzIDAgMCwxIDEyLDE0QTMsMyAwIDAsMSA5LDExVjVBMywzIDAgMCwxIDEyLDJNMTksMTFDMTksMTQuNTMgMTYuMzksMTcuNDQgMTMsMTcuOTNWMjFIMTFWMTcuOTNDNy42MSwxNy40NCA1LDE0LjUzIDUsMTFIN0E1LDUgMCAwLDAgMTIsMTZBNSw1IDAgMCwwIDE3LDExSDE5WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHRjb2wtcHJpbWFyeS1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshaW5wdXRWYWx1ZS50cmltKCkgJiYgIWZpbGVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQsMTFWMTNIMTZMMTAuNSwxOC41TDExLjkyLDE5LjkyTDE5Ljg0LDEyTDExLjkyLDQuMDhMMTAuNSw1LjVMMTYsMTFINFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qIERyYWcgT3ZlcmxheSAqL31cbiAgICAgICAgICAgICAgICB7aXNEcmFnZ2luZyAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRjb2wtZHJhZy1vdmVybGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1kcmFnLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCwySDZBMiwyIDAgMCwwIDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwyTTE4LDIwSDZWNEgxM1Y5SDE4VjIwWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPHA+RHJvcCBmaWxlcyBoZXJlIHRvIHVwbG9hZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7LyogV2FsbHBhcGVyIEF0dHJpYnV0aW9uICovfVxuICAgICAgICAgICAge3dhbGxwYXBlcnNFbmFibGVkICYmIHRoaXMucHJvcHMucmVuZGVyV2FsbHBhcGVyQXR0cmlidXRpb24/LigpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogSGlkZGVuIEZpbGUgSW5wdXQgKi99XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHJlZj17dGhpcy5maWxlSW5wdXRSZWZ9XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG11bHRpcGxlPXt0cnVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbGVVcGxvYWR9XG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuXG5mdW5jdGlvbiBMb2NhdGlvblNlYXJjaCh7IG91dGVyQ2xhc3NOYW1lIH0pIHtcbiAgLy8gc2hvdWxkIGJlIHRoZSBsb2NhdGlvbiBvYmplY3QgZnJvbSBzdWdnZXN0ZWRMb2NhdGlvbnNcbiAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IHN1Z2dlc3RlZExvY2F0aW9ucyA9IHVzZVNlbGVjdG9yKFxuICAgIHN0YXRlID0+IHN0YXRlLldlYXRoZXIuc3VnZ2VzdGVkTG9jYXRpb25zXG4gICk7XG4gIGNvbnN0IGxvY2F0aW9uU2VhcmNoU3RyaW5nID0gdXNlU2VsZWN0b3IoXG4gICAgc3RhdGUgPT4gc3RhdGUuV2VhdGhlci5sb2NhdGlvblNlYXJjaFN0cmluZ1xuICApO1xuICBjb25zdCBbdXNlcklucHV0LCBzZXRVc2VySW5wdXRdID0gdXNlU3RhdGUobG9jYXRpb25TZWFyY2hTdHJpbmcgfHwgXCJcIik7XG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZExvY2F0aW9uKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9MT0NBVElPTl9EQVRBX1VQREFURSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBjaXR5OiBzZWxlY3RlZExvY2F0aW9uLmxvY2FsaXplZF9uYW1lLFxuICAgICAgICAgICAgYWRtaW5OYW1lOiBzZWxlY3RlZExvY2F0aW9uLmFkbWluaXN0cmF0aXZlX2FyZWEsXG4gICAgICAgICAgICBjb3VudHJ5OiBzZWxlY3RlZExvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICBkaXNwYXRjaChhYy5TZXRQcmVmKFwid2VhdGhlci5xdWVyeVwiLCBzZWxlY3RlZExvY2F0aW9uLmtleSkpO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkJyb2FkY2FzdFRvQ29udGVudCh7XG4gICAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9TRUFSQ0hfQUNUSVZFLFxuICAgICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtzZWxlY3RlZExvY2F0aW9uLCBkaXNwYXRjaF0pO1xuXG4gIC8vIHdoZW4gY29tcG9uZW50IG1vdW50cywgc2V0IGZvY3VzIHRvIGlucHV0XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaW5wdXRSZWY/LmN1cnJlbnQ/LmZvY3VzKCk7XG4gIH0sIFtpbnB1dFJlZl0pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRVc2VySW5wdXQodmFsdWUpO1xuICAgIC8vIGlmIHRoZSB1c2VyIGlucHV0IGNvbnRhaW5zIGxlc3MgdGhhbiB0aHJlZSBjaGFyYWN0ZXJzIGFuZCBzdWdnZXN0ZWRMb2NhdGlvbnMgaXMgbm90IGFuIGVtcHR5IGFycmF5LFxuICAgIC8vIHJlc2V0IHN1Z2dlc3RlZExvY2F0aW9ucyB0byBbXSBzbyB0aGVyZSBhcmVudCBpbmNvcnJlY3QgaXRlbXMgaW4gdGhlIGRhdGFsaXN0XG4gICAgaWYgKHZhbHVlLmxlbmd0aCA8IDMgJiYgc3VnZ2VzdGVkTG9jYXRpb25zLmxlbmd0aCkge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LldFQVRIRVJfTE9DQVRJT05fU1VHR0VTVElPTlNfVVBEQVRFLFxuICAgICAgICAgIGRhdGE6IFtdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gZmluZCBtYXRjaCBpbiBzdWdnZXN0ZWRMb2NhdGlvbiBhcnJheVxuICAgIGNvbnN0IG1hdGNoID0gc3VnZ2VzdGVkTG9jYXRpb25zPy5maW5kKCh7IGtleSB9KSA9PiBrZXkgPT09IHZhbHVlKTtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24obWF0Y2gpO1xuICAgICAgc2V0VXNlcklucHV0KFxuICAgICAgICBgJHttYXRjaC5sb2NhbGl6ZWRfbmFtZX0sICR7bWF0Y2guYWRtaW5pc3RyYXRpdmVfYXJlYS5sb2NhbGl6ZWRfbmFtZX1gXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID49IDMgJiYgIW1hdGNoKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9MT0NBVElPTl9TRUFSQ0hfVVBEQVRFLFxuICAgICAgICAgIGRhdGE6IHZhbHVlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZVNlYXJjaCgpIHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLkJyb2FkY2FzdFRvQ29udGVudCh7XG4gICAgICAgIHR5cGU6IGF0LldFQVRIRVJfU0VBUkNIX0FDVElWRSxcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gICAgc2V0VXNlcklucHV0KFwiXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBoYW5kbGVDbG9zZVNlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake291dGVyQ2xhc3NOYW1lfSBsb2NhdGlvbi1zZWFyY2hgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYXRpb24taW5wdXQtd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICBsaXN0PVwibWVyaW5vLWxvY2F0aW9uLWxpc3RcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItd2VhdGhlci1jaGFuZ2UtbG9jYXRpb24tc2VhcmNoLWlucHV0LXBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHZhbHVlPXt1c2VySW5wdXR9XG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlEb3dufVxuICAgICAgICAvPlxuICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwiY2xvc2UtaWNvblwiXG4gICAgICAgICAgdHlwZT1cImljb24gZ2hvc3RcIlxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgaWNvblNyYz1cImNocm9tZTovL2dsb2JhbC9za2luL2ljb25zL2Nsb3NlLnN2Z1wiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2VTZWFyY2h9XG4gICAgICAgIC8+XG4gICAgICAgIDxkYXRhbGlzdCBpZD1cIm1lcmluby1sb2NhdGlvbi1saXN0XCI+XG4gICAgICAgICAgeyhzdWdnZXN0ZWRMb2NhdGlvbnMgfHwgW10pLm1hcChtZXJpbm9MY2F0aW9uID0+IChcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e21lcmlub0xjYXRpb24ua2V5fSBrZXk9e21lcmlub0xjYXRpb24ua2V5fT5cbiAgICAgICAgICAgICAge21lcmlub0xjYXRpb24ubG9jYWxpemVkX25hbWV9LHtcIiBcIn1cbiAgICAgICAgICAgICAge21lcmlub0xjYXRpb24uYWRtaW5pc3RyYXRpdmVfYXJlYS5sb2NhbGl6ZWRfbmFtZX1cbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2RhdGFsaXN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCB7IExvY2F0aW9uU2VhcmNoIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBMaW5rTWVudSB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0xpbmtNZW51L0xpbmtNZW51XCI7XG5pbXBvcnQgeyBMb2NhdGlvblNlYXJjaCB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL1dlYXRoZXIvTG9jYXRpb25TZWFyY2hcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFZJU0lCTEUgPSBcInZpc2libGVcIjtcbmNvbnN0IFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5UID0gXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7XG5cbmZ1bmN0aW9uIFdlYXRoZXJQbGFjZWhvbGRlcigpIHtcbiAgY29uc3QgW2lzU2Vlbiwgc2V0SXNTZWVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvLyBXZSBhcmUgc2V0dGluZyB1cCBhIHZpc2liaWxpdHkgYW5kIGludGVyc2VjdGlvbiBldmVudFxuICAvLyBzbyBhbmltYXRpb25zIGRvbid0IGhhcHBlbiB3aXRoIGhlYWRsZXNzIGF1dG9tYXRpb24uXG4gIC8vIFRoZSBhbmltYXRpb25zIGNhdXNlcyB0ZXN0cyB0byBmYWlsIGJlYXVzZSB0aGV5IG5ldmVyIHN0b3AsXG4gIC8vIGFuZCBtYW55IHRlc3RzIHdhaXQgdW50aWwgZXZlcnl0aGluZyBoYXMgc3RvcHBlZCBiZWZvcmUgcGFzc2luZy5cbiAgY29uc3QgcmVmID0gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKCkgPT4gc2V0SXNTZWVuKHRydWUpLCAxKTtcblxuICBjb25zdCBpc1NlZW5DbGFzc05hbWUgPSBpc1NlZW4gPyBgcGxhY2Vob2xkZXItc2VlbmAgOiBgYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHdlYXRoZXIgd2VhdGhlci1wbGFjZWhvbGRlciAke2lzU2VlbkNsYXNzTmFtZX1gfVxuICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gW2VsXTtcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlci1pbWFnZSBwbGFjZWhvbGRlci1maWxsXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXItY29udGV4dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyLWhlYWRlciBwbGFjZWhvbGRlci1maWxsXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlci1kZXNjcmlwdGlvbiBwbGFjZWhvbGRlci1maWxsXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY2xhc3MgX1dlYXRoZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbnRleHRNZW51S2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgc2hvd0NvbnRleHRNZW51OiBmYWxzZSxcbiAgICAgIHVybDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBpbXByZXNzaW9uU2VlbjogZmFsc2UsXG4gICAgICBlcnJvclNlZW46IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5zZXRJbXByZXNzaW9uUmVmID0gZWxlbWVudCA9PiB7XG4gICAgICB0aGlzLmltcHJlc3Npb25FbGVtZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIHRoaXMuc2V0RXJyb3JSZWYgPSBlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuZXJyb3JFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9O1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uVXBkYXRlID0gdGhpcy5vblVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Qcm92aWRlckNsaWNrID0gdGhpcy5vblByb3ZpZGVyQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG5cbiAgICBpZiAoIXByb3BzLmRpc3BhdGNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLmRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gVklTSUJMRSkge1xuICAgICAgLy8gU2V0dXAgdGhlIGltcHJlc3Npb24gb2JzZXJ2ZXIgb25jZSB0aGUgcGFnZSBpcyB2aXNpYmxlLlxuICAgICAgdGhpcy5zZXRJbXByZXNzaW9uT2JzZXJ2ZXJzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IGV2ZXIgc2VuZCB0aGUgbGF0ZXN0IGltcHJlc3Npb24gc3RhdHMgcGluZywgc28gcmVtb3ZlIGFueVxuICAgICAgLy8gb2xkZXIgbGlzdGVuZXJzLlxuICAgICAgaWYgKHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSkge1xuICAgICAgICBwcm9wcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFZJU0lCTEUpIHtcbiAgICAgICAgICAvLyBTZXR1cCB0aGUgaW1wcmVzc2lvbiBvYnNlcnZlciBvbmNlIHRoZSBwYWdlIGlzIHZpc2libGUuXG4gICAgICAgICAgdGhpcy5zZXRJbXByZXNzaW9uT2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgcHJvcHMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHByb3BzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8gUmVtb3ZlIG9ic2VydmVycyBvbiB1bm1vdW50XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5pbXByZXNzaW9uRWxlbWVudCkge1xuICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcy5pbXByZXNzaW9uRWxlbWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLm9ic2VydmVyICYmIHRoaXMuZXJyb3JFbGVtZW50KSB7XG4gICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmVycm9yRWxlbWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbXByZXNzaW9uT2JzZXJ2ZXJzKCkge1xuICAgIGlmICh0aGlzLmltcHJlc3Npb25FbGVtZW50KSB7XG4gICAgICB0aGlzLm9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKHRoaXMub25JbXByZXNzaW9uLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuaW1wcmVzc2lvbkVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lcnJvckVsZW1lbnQpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZXJyb3JFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBvbkltcHJlc3Npb24oZW50cmllcykge1xuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXMuZmluZChlID0+IGUuaXNJbnRlcnNlY3RpbmcpO1xuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1wcmVzc2lvbkVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmltcHJlc3Npb25FbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgICB0eXBlOiBhdC5XRUFUSEVSX0lNUFJFU1NJT04sXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTdG9wIG9ic2VydmluZyBzaW5jZSBlbGVtZW50IGhhcyBiZWVuIHNlZW5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW1wcmVzc2lvblNlZW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRXJyb3IoZW50cmllcykge1xuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXMuZmluZChlID0+IGUuaXNJbnRlcnNlY3RpbmcpO1xuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5vYnNlcnZlci51bm9ic2VydmUodGhpcy5lcnJvckVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LldFQVRIRVJfTE9BRF9FUlJPUixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN0b3Agb2JzZXJ2aW5nIHNpbmNlIGVsZW1lbnQgaGFzIGJlZW4gc2VlblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBlcnJvclNlZW46IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9wZW5Db250ZXh0TWVudShpc0tleUJvYXJkKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25VcGRhdGUodHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NvbnRleHRNZW51OiB0cnVlLFxuICAgICAgY29udGV4dE1lbnVLZXlib2FyZDogaXNLZXlCb2FyZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub3BlbkNvbnRleHRNZW51KGZhbHNlLCBldmVudCk7XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgfHwgZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMub3BlbkNvbnRleHRNZW51KHRydWUsIGV2ZW50KTtcbiAgICB9XG4gIH1cblxuICBvblVwZGF0ZShzaG93Q29udGV4dE1lbnUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZShzaG93Q29udGV4dE1lbnUpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0NvbnRleHRNZW51IH0pO1xuICB9XG5cbiAgb25Qcm92aWRlckNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9PUEVOX1BST1ZJREVSX1VSTCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHNvdXJjZTogXCJXRUFUSEVSXCIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgLy8gQ2hlY2sgaWYgd2VhdGhlciBzaG91bGQgYmUgcmVuZGVyZWRcbiAgICBjb25zdCBpc1dlYXRoZXJFbmFibGVkID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXNbXCJzeXN0ZW0uc2hvd1dlYXRoZXJcIl07XG5cbiAgICBpZiAoIWlzV2VhdGhlckVuYWJsZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLkFwcC5pc0ZvclN0YXJ0dXBDYWNoZS5XZWF0aGVyIHx8XG4gICAgICAhdGhpcy5wcm9wcy5XZWF0aGVyLmluaXRpYWxpemVkXG4gICAgKSB7XG4gICAgICByZXR1cm4gPFdlYXRoZXJQbGFjZWhvbGRlciAvPjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3dDb250ZXh0TWVudSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB7IGRpc3BhdGNoLCBQcmVmcywgV2VhdGhlciB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCBXRUFUSEVSX1NVR0dFU1RJT04gPSBXZWF0aGVyLnN1Z2dlc3Rpb25zPy5bMF07XG5cbiAgICBjb25zdCBvdXRlckNsYXNzTmFtZSA9IFtcIndlYXRoZXJcIiwgV2VhdGhlci5zZWFyY2hBY3RpdmUgJiYgXCJzZWFyY2hcIl1cbiAgICAgIC5maWx0ZXIodiA9PiB2KVxuICAgICAgLmpvaW4oXCIgXCIpO1xuXG4gICAgY29uc3Qgc2hvd0RldGFpbGVkVmlldyA9IFByZWZzLnZhbHVlc1tcIndlYXRoZXIuZGlzcGxheVwiXSA9PT0gXCJkZXRhaWxlZFwiO1xuXG4gICAgLy8gTm90ZTogVGhlIHRlbXBlcmF0dXJlIHVuaXRzL2Rpc3BsYXkgb3B0aW9ucyB3aWxsIGJlY29tZSBzZWNvbmRhcnkgbWVudSBpdGVtc1xuICAgIGNvbnN0IFdFQVRIRVJfU09VUkNFX0NPTlRFWFRfTUVOVV9PUFRJT05TID0gW1xuICAgICAgLi4uKFByZWZzLnZhbHVlc1tcIndlYXRoZXIubG9jYXRpb25TZWFyY2hFbmFibGVkXCJdXG4gICAgICAgID8gW1wiQ2hhbmdlV2VhdGhlckxvY2F0aW9uXCJdXG4gICAgICAgIDogW10pLFxuICAgICAgLi4uKFByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXSA9PT0gXCJmXCJcbiAgICAgICAgPyBbXCJDaGFuZ2VUZW1wVW5pdENlbHNpdXNcIl1cbiAgICAgICAgOiBbXCJDaGFuZ2VUZW1wVW5pdEZhaHJlbmhlaXRcIl0pLFxuICAgICAgLi4uKFByZWZzLnZhbHVlc1tcIndlYXRoZXIuZGlzcGxheVwiXSA9PT0gXCJzaW1wbGVcIlxuICAgICAgICA/IFtcIkNoYW5nZVdlYXRoZXJEaXNwbGF5RGV0YWlsZWRcIl1cbiAgICAgICAgOiBbXCJDaGFuZ2VXZWF0aGVyRGlzcGxheVNpbXBsZVwiXSksXG4gICAgICBcIkhpZGVXZWF0aGVyXCIsXG4gICAgICBcIk9wZW5MZWFybk1vcmVVUkxcIixcbiAgICBdO1xuICAgIGNvbnN0IFdFQVRIRVJfU09VUkNFX0VSUk9SX0NPTlRFWFRfTUVOVV9PUFRJT05TID0gW1xuICAgICAgLi4uKFByZWZzLnZhbHVlc1tcIndlYXRoZXIubG9jYXRpb25TZWFyY2hFbmFibGVkXCJdXG4gICAgICAgID8gW1wiQ2hhbmdlV2VhdGhlckxvY2F0aW9uXCJdXG4gICAgICAgIDogW10pLFxuICAgICAgXCJIaWRlV2VhdGhlclwiLFxuICAgICAgXCJPcGVuTGVhcm5Nb3JlVVJMXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRleHRNZW51ID0gY29udGV4dE9wdHMgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyQnV0dG9uQ29udGV4dE1lbnVXcmFwcGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLW1lbnUtc2VjdGlvbi10b29sdGlwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3ZWF0aGVyQnV0dG9uQ29udGV4dE1lbnVcIlxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dDb250ZXh0TWVudSA/IChcbiAgICAgICAgICAgIDxMaW5rTWVudVxuICAgICAgICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgICAgICAgIGluZGV4PXswfVxuICAgICAgICAgICAgICBzb3VyY2U9XCJXRUFUSEVSXCJcbiAgICAgICAgICAgICAgb25VcGRhdGU9e3RoaXMub25VcGRhdGV9XG4gICAgICAgICAgICAgIG9wdGlvbnM9e2NvbnRleHRPcHRzfVxuICAgICAgICAgICAgICBzaXRlPXt7XG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3VwcG9ydC5tb3ppbGxhLm9yZy9rYi9jdXN0b21pemUtaXRlbXMtb24tZmlyZWZveC1uZXctdGFiLXBhZ2VcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgbGluaz1cImh0dHBzOi8vc3VwcG9ydC5tb3ppbGxhLm9yZy9rYi9jdXN0b21pemUtaXRlbXMtb24tZmlyZWZveC1uZXctdGFiLXBhZ2VcIlxuICAgICAgICAgICAgICBzaG91bGRTZW5kSW1wcmVzc2lvblN0YXRzPXtmYWxzZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChXZWF0aGVyLnNlYXJjaEFjdGl2ZSkge1xuICAgICAgcmV0dXJuIDxMb2NhdGlvblNlYXJjaCBvdXRlckNsYXNzTmFtZT17b3V0ZXJDbGFzc05hbWV9IC8+O1xuICAgIH0gZWxzZSBpZiAoV0VBVEhFUl9TVUdHRVNUSU9OKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5zZXRJbXByZXNzaW9uUmVmfSBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJDYXJkXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItd2VhdGhlci1zZWUtZm9yZWNhc3RcIlxuICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz0ne1wicHJvdmlkZXJcIjogXCJBY2N1V2VhdGhlcsKuXCJ9J1xuICAgICAgICAgICAgICBocmVmPXtXRUFUSEVSX1NVR0dFU1RJT04uZm9yZWNhc3QudXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3ZWF0aGVySW5mb0xpbmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uUHJvdmlkZXJDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVySWNvbkNvbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3ZWF0aGVySWNvbiBpY29uSWQke1dFQVRIRVJfU1VHR0VTVElPTi5jdXJyZW50X2NvbmRpdGlvbnMuaWNvbl9pZH1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJUZXh0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyRm9yZWNhc3RSb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndlYXRoZXJUZW1wZXJhdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgV0VBVEhFUl9TVUdHRVNUSU9OLmN1cnJlbnRfY29uZGl0aW9ucy50ZW1wZXJhdHVyZVtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmZGVnO3tQcmVmcy52YWx1ZXNbXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIl19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyQ2l0eVJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2VhdGhlckNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAge1dlYXRoZXIubG9jYXRpb25EYXRhLmNpdHl9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3Nob3dEZXRhaWxlZFZpZXcgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJEZXRhaWxlZFN1bW1hcnlSb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVySGlnaExvd1RlbXBzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIExvdyBGb3JlY2FzdGVkIFRlbXBlcmF0dXJlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBXRUFUSEVSX1NVR0dFU1RJT04uZm9yZWNhc3QuaGlnaFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVmcy52YWx1ZXNbXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJmRlZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQcmVmcy52YWx1ZXNbXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIl19XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBTcGFjZXIgLyBCdWxsZXQgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+JmJ1bGw7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiBMb3cgRm9yZWNhc3RlZCBUZW1wZXJhdHVyZSAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV0VBVEhFUl9TVUdHRVNUSU9OLmZvcmVjYXN0Lmxvd1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmVmcy52YWx1ZXNbXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJmRlZztcbiAgICAgICAgICAgICAgICAgICAgICAgIHtQcmVmcy52YWx1ZXNbXCJ3ZWF0aGVyLnRlbXBlcmF0dXJlVW5pdHNcIl19XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2VhdGhlclRleHRTdW1tYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge1dFQVRIRVJfU1VHR0VTVElPTi5jdXJyZW50X2NvbmRpdGlvbnMuc3VtbWFyeX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge2NvbnRleHRNZW51KFdFQVRIRVJfU09VUkNFX0NPTlRFWFRfTUVOVV9PUFRJT05TKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZWF0aGVyU3BvbnNvclRleHRcIj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13ZWF0aGVyLXNwb25zb3JlZFwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPSd7XCJwcm92aWRlclwiOiBcIkFjY3VXZWF0aGVywq5cIn0nXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17dGhpcy5zZXRFcnJvclJlZn0gY2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlck5vdEF2YWlsYWJsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1pbmZvLXdhcm5pbmdcIiAvPntcIiBcIn1cbiAgICAgICAgICA8cCBkYXRhLWwxMG4taWQ9XCJuZXd0YWItd2VhdGhlci1lcnJvci1ub3QtYXZhaWxhYmxlXCI+PC9wPlxuICAgICAgICAgIHtjb250ZXh0TWVudShXRUFUSEVSX1NPVVJDRV9FUlJPUl9DT05URVhUX01FTlVfT1BUSU9OUyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV2VhdGhlciA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgQXBwOiBzdGF0ZS5BcHAsXG4gIFdlYXRoZXI6IHN0YXRlLldlYXRoZXIsXG4gIFByZWZzOiBzdGF0ZS5QcmVmcyxcbiAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6IGdsb2JhbFRoaXMuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIsXG4gIGRvY3VtZW50OiBnbG9iYWxUaGlzLmRvY3VtZW50LFxufSkpKF9XZWF0aGVyKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gRG93bmxvYWRNb2RhbFRvZ2dsZSh7IG9uQ2xpY2ssIGlzQWN0aXZlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Btb2JpbGUtZG93bmxvYWQtcHJvbW8gJHtpc0FjdGl2ZSA/IFwiIGlzLWFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24gaWNvbi1kZXZpY2UtcGhvbmVcIj48L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgRG93bmxvYWRNb2RhbFRvZ2dsZSB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFRodW1iVXBUaHVtYkRvd25Ub2FzdCh7IG9uRGlzbWlzc0NsaWNrLCBvbkFuaW1hdGlvbkVuZCB9KSB7XG4gIGNvbnN0IG1vek1lc3NhZ2VCYXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IG1vek1lc3NhZ2VCYXJFbGVtZW50IH0gPSBtb3pNZXNzYWdlQmFyUmVmO1xuXG4gICAgbW96TWVzc2FnZUJhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwibWVzc2FnZS1iYXI6dXNlci1kaXNtaXNzZWRcIixcbiAgICAgIG9uRGlzbWlzc0NsaWNrLFxuICAgICAge1xuICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbW96TWVzc2FnZUJhckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJtZXNzYWdlLWJhcjp1c2VyLWRpc21pc3NlZFwiLFxuICAgICAgICBvbkRpc21pc3NDbGlja1xuICAgICAgKTtcbiAgICB9O1xuICB9LCBbb25EaXNtaXNzQ2xpY2tdKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3otbWVzc2FnZS1iYXJcbiAgICAgIHR5cGU9XCJzdWNjZXNzXCJcbiAgICAgIGNsYXNzPVwibm90aWZpY2F0aW9uLWZlZWQtaXRlbVwiXG4gICAgICBkaXNtaXNzYWJsZT17dHJ1ZX1cbiAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi10b2FzdC10aHVtYnMtdXAtb3ItZG93bjJcIlxuICAgICAgcmVmPXttb3pNZXNzYWdlQmFyUmVmfVxuICAgICAgb25BbmltYXRpb25FbmQ9e29uQW5pbWF0aW9uRW5kfVxuICAgID48L21vei1tZXNzYWdlLWJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgVGh1bWJVcFRodW1iRG93blRvYXN0IH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gUmVwb3J0Q29udGVudFRvYXN0KHsgb25EaXNtaXNzQ2xpY2ssIG9uQW5pbWF0aW9uRW5kIH0pIHtcbiAgY29uc3QgbW96TWVzc2FnZUJhclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogbW96TWVzc2FnZUJhckVsZW1lbnQgfSA9IG1vek1lc3NhZ2VCYXJSZWY7XG5cbiAgICBtb3pNZXNzYWdlQmFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJtZXNzYWdlLWJhcjp1c2VyLWRpc21pc3NlZFwiLFxuICAgICAgb25EaXNtaXNzQ2xpY2ssXG4gICAgICB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb3pNZXNzYWdlQmFyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBcIm1lc3NhZ2UtYmFyOnVzZXItZGlzbWlzc2VkXCIsXG4gICAgICAgIG9uRGlzbWlzc0NsaWNrXG4gICAgICApO1xuICAgIH07XG4gIH0sIFtvbkRpc21pc3NDbGlja10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vei1tZXNzYWdlLWJhclxuICAgICAgdHlwZT1cInN1Y2Nlc3NcIlxuICAgICAgY2xhc3M9XCJub3RpZmljYXRpb24tZmVlZC1pdGVtXCJcbiAgICAgIGRpc21pc3NhYmxlPXt0cnVlfVxuICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXRvYXN0LXRoYW5rcy1mb3ItcmVwb3J0aW5nXCJcbiAgICAgIHJlZj17bW96TWVzc2FnZUJhclJlZn1cbiAgICAgIG9uQW5pbWF0aW9uRW5kPXtvbkFuaW1hdGlvbkVuZH1cbiAgICA+PC9tb3otbWVzc2FnZS1iYXI+XG4gICk7XG59XG5cbmV4cG9ydCB7IFJlcG9ydENvbnRlbnRUb2FzdCB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBUaHVtYlVwVGh1bWJEb3duVG9hc3QgfSBmcm9tIFwiLi9Ub2FzdHMvVGh1bWJVcFRodW1iRG93blRvYXN0XCI7XG5pbXBvcnQgeyBSZXBvcnRDb250ZW50VG9hc3QgfSBmcm9tIFwiLi9Ub2FzdHMvUmVwb3J0Q29udGVudFRvYXN0XCI7XG5cbmZ1bmN0aW9uIE5vdGlmaWNhdGlvbnMoeyBkaXNwYXRjaCB9KSB7XG4gIGNvbnN0IHRvYXN0UXVldWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5Ob3RpZmljYXRpb25zLnRvYXN0UXVldWUpO1xuICBjb25zdCB0b2FzdENvdW50ZXIgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5Ob3RpZmljYXRpb25zLnRvYXN0Q291bnRlcik7XG5cbiAgLyoqXG4gICAqIFN5bmNzIHtAbGluayB0b2FzdFF1ZXVlfSBhcnJheSBzbyBpdCBjYW4gYmUgdXNlZCB0b1xuICAgKiByZW1vdmUgdGhlIHRvYXN0cyB3cmFwcGVyIGlmIHRoZXJlIGFyZSBub25lIGFmdGVyIGFcbiAgICogdG9hc3QgaXMgYXV0by1oaWRkZW4gKGFuaW1hdGVkIG91dCkgdmlhIENTUy5cbiAgICovXG4gIGNvbnN0IHN5bmNIaWRkZW5Ub2FzdERhdGEgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgdG9hc3RJZCA9IHRvYXN0UXVldWVbdG9hc3RRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBxdWV1ZWRUb2FzdHMgPSBbLi4udG9hc3RRdWV1ZV0uc2xpY2UoMSk7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9PbmVDb250ZW50KFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogYXQuSElERV9UT0FTVF9NRVNTQUdFLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRvYXN0UXVldWU6IHF1ZXVlZFRvYXN0cyxcbiAgICAgICAgICAgIHRvYXN0Q291bnRlcjogcXVldWVkVG9hc3RzLmxlbmd0aCxcbiAgICAgICAgICAgIHRvYXN0SWQsXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uczogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgXCJBY3Rpdml0eVN0cmVhbTpDb250ZW50XCJcbiAgICAgIClcbiAgICApO1xuICB9LCBbZGlzcGF0Y2gsIHRvYXN0UXVldWVdKTtcblxuICBjb25zdCBnZXRUb2FzdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAvLyBOb3RlOiBUaGlzIGFyY2hpdGVjdHVyZSBjb3VsZCBleHBhbmQgdG8gc3VwcG9ydCBtdWx0aXBsZSB0b2FzdCBub3RpZmljYXRpb25zIGF0IG9uY2VcbiAgICBjb25zdCBsYXRlc3RUb2FzdEl0ZW0gPSB0b2FzdFF1ZXVlW3RvYXN0UXVldWUubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoIWxhdGVzdFRvYXN0SXRlbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdG9hc3QgZm91bmRcIik7XG4gICAgfVxuXG4gICAgc3dpdGNoIChsYXRlc3RUb2FzdEl0ZW0pIHtcbiAgICAgIGNhc2UgXCJyZXBvcnRTdWNjZXNzVG9hc3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UmVwb3J0Q29udGVudFRvYXN0XG4gICAgICAgICAgICBvbkRpc21pc3NDbGljaz17c3luY0hpZGRlblRvYXN0RGF0YX1cbiAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXtzeW5jSGlkZGVuVG9hc3REYXRhfVxuICAgICAgICAgICAga2V5PXt0b2FzdENvdW50ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJ0aHVtYnNVcFRvYXN0XCI6XG4gICAgICBjYXNlIFwidGh1bWJzRG93blRvYXN0XCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRodW1iVXBUaHVtYkRvd25Ub2FzdFxuICAgICAgICAgICAgb25EaXNtaXNzQ2xpY2s9e3N5bmNIaWRkZW5Ub2FzdERhdGF9XG4gICAgICAgICAgICBvbkFuaW1hdGlvbkVuZD17c3luY0hpZGRlblRvYXN0RGF0YX1cbiAgICAgICAgICAgIGtleT17dG9hc3RDb3VudGVyfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdG9hc3QgdHlwZTogJHtsYXRlc3RUb2FzdEl0ZW19YCk7XG4gICAgfVxuICB9LCBbc3luY0hpZGRlblRvYXN0RGF0YSwgdG9hc3RDb3VudGVyLCB0b2FzdFF1ZXVlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRUb2FzdCgpO1xuICB9LCBbdG9hc3RRdWV1ZSwgZ2V0VG9hc3RdKTtcblxuICByZXR1cm4gdG9hc3RRdWV1ZS5sZW5ndGggPyAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24td3JhcHBlclwiPntnZXRUb2FzdCgpfTwvZGl2PlxuICApIDogKFxuICAgIFwiXCJcbiAgKTtcbn1cblxuZXhwb3J0IHsgTm90aWZpY2F0aW9ucyB9O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjIH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRmVhdHVyZUhpZ2hsaWdodCh7XG4gIG1lc3NhZ2UsXG4gIGljb24sXG4gIHRvZ2dsZSxcbiAgYXJyb3dQb3NpdGlvbiA9IFwiXCIsXG4gIHBvc2l0aW9uID0gXCJ0b3AtbGVmdFwiLFxuICB2ZXJ0aWNhbFBvc2l0aW9uID0gXCJcIixcbiAgdGl0bGUsXG4gIGFyaWFMYWJlbCxcbiAgZmVhdHVyZSA9IFwiRkVBVFVSRV9ISUdITElHSFRfREVGQVVMVFwiLFxuICBkaXNwYXRjaCA9ICgpID0+IHt9LFxuICB3aW5kb3dPYmogPSBnbG9iYWwsXG4gIG9wZW5lZE92ZXJyaWRlID0gZmFsc2UsXG4gIHNob3dCdXR0b25JY29uID0gdHJ1ZSxcbiAgZGlzbWlzc0NhbGxiYWNrID0gKCkgPT4ge30sXG4gIG91dHNpZGVDbGlja0NhbGxiYWNrID0gKCkgPT4ge30sXG59KSB7XG4gIGNvbnN0IFtvcGVuZWQsIHNldE9wZW5lZF0gPSB1c2VTdGF0ZShvcGVuZWRPdmVycmlkZSk7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU91dHNpZGVDbGljayA9IGUgPT4ge1xuICAgICAgaWYgKCFyZWY/LmN1cnJlbnQ/LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgICBzZXRPcGVuZWQoZmFsc2UpO1xuICAgICAgICBvdXRzaWRlQ2xpY2tDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgb3V0c2lkZUNsaWNrQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93T2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIHdpbmRvd09iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93T2JqLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgICAgd2luZG93T2JqLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIH07XG4gIH0sIFt3aW5kb3dPYmosIG91dHNpZGVDbGlja0NhbGxiYWNrXSk7XG5cbiAgY29uc3Qgb25Ub2dnbGVDbGljayA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIW9wZW5lZCkge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkRpc2NvdmVyeVN0cmVhbVVzZXJFdmVudCh7XG4gICAgICAgICAgZXZlbnQ6IFwiQ0xJQ0tcIixcbiAgICAgICAgICBzb3VyY2U6IFwiRkVBVFVSRV9ISUdITElHSFRcIixcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgc2V0T3BlbmVkKCFvcGVuZWQpO1xuICB9LCBbZGlzcGF0Y2gsIGZlYXR1cmUsIG9wZW5lZF0pO1xuXG4gIGNvbnN0IG9uRGlzbWlzc0NsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldE9wZW5lZChmYWxzZSk7XG4gICAgZGlzbWlzc0NhbGxiYWNrKCk7XG4gIH0sIFtkaXNtaXNzQ2FsbGJhY2tdKTtcblxuICBjb25zdCBoaWRlQnV0dG9uQ2xhc3MgPSBzaG93QnV0dG9uSWNvbiA/IGBgIDogYGlzSGlkZGVuYDtcbiAgY29uc3Qgb3BlbmVkQ2xhc3NuYW1lID0gb3BlbmVkID8gYG9wZW5lZGAgOiBgY2xvc2VkYDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2BmZWF0dXJlLWhpZ2hsaWdodCAke3ZlcnRpY2FsUG9zaXRpb259YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBhcmlhLWxhYmVsPXthcmlhTGFiZWx9XG4gICAgICAgIGNsYXNzTmFtZT17YHRvZ2dsZS1idXR0b24gJHtoaWRlQnV0dG9uQ2xhc3N9YH1cbiAgICAgICAgb25DbGljaz17b25Ub2dnbGVDbGlja31cbiAgICAgID5cbiAgICAgICAge3RvZ2dsZX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BmZWF0dXJlLWhpZ2hsaWdodC1tb2RhbCAke3Bvc2l0aW9ufSAke2Fycm93UG9zaXRpb259ICR7b3BlbmVkQ2xhc3NuYW1lfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZS1pY29uXCI+e2ljb259PC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbnRlbnQtd3JhcHBlclwiPnttZXNzYWdlfTwvcD5cbiAgICAgICAgPG1vei1idXR0b25cbiAgICAgICAgICB0eXBlPVwiaWNvbiBnaG9zdFwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJmZWF0dXJlLWhpZ2hsaWdodC1kaXNtaXNzLWJ1dHRvblwiXG4gICAgICAgICAgaWNvbnNyYz1cImNocm9tZTovL2dsb2JhbC9za2luL2ljb25zL2Nsb3NlLnN2Z1wiXG4gICAgICAgICAgb25DbGljaz17b25EaXNtaXNzQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXtvbkRpc21pc3NDbGlja31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBGZWF0dXJlSGlnaGxpZ2h0IH0gZnJvbSBcIi4vRmVhdHVyZUhpZ2hsaWdodFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFBSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0EgPVxuICBcIm1vYmlsZURvd25sb2FkTW9kYWwudmFyaWFudC1hXCI7XG5jb25zdCBQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9CID1cbiAgXCJtb2JpbGVEb3dubG9hZE1vZGFsLnZhcmlhbnQtYlwiO1xuY29uc3QgUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQyA9XG4gIFwibW9iaWxlRG93bmxvYWRNb2RhbC52YXJpYW50LWNcIjtcblxuY29uc3QgRkVBVFVSRV9JRCA9IFwiRkVBVFVSRV9ET1dOTE9BRF9NT0JJTEVfUFJPTU9cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIERvd25sb2FkTW9iaWxlUHJvbW9IaWdobGlnaHQoe1xuICBwb3NpdGlvbixcbiAgZGlzcGF0Y2gsXG4gIGhhbmRsZURpc21pc3MsXG4gIGhhbmRsZUJsb2NrLFxuICBpc0ludGVyc2VjdGluZyxcbn0pIHtcbiAgY29uc3Qgb25EaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCBtYW51YWxseSBiZWNhdXNlIHRoZSBmZWF0dXJlIG1heSBiZSB0cmlnZ2VyZWQgb3V0c2lkZSB0aGUgT01DIGZsb3csXG4gICAgLy8gYW5kIG1heSBub3QgYmUgY2FwdHVyZWQgYnkgdGhlIG1lc3NhZ2luZy1zeXN0ZW3igJlzIGF1dG9tYXRpYyByZXBvcnRpbmcuXG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5EaXNjb3ZlcnlTdHJlYW1Vc2VyRXZlbnQoe1xuICAgICAgICBldmVudDogXCJGRUFUVVJFX0hJR0hMSUdIVF9ESVNNSVNTXCIsXG4gICAgICAgIHNvdXJjZTogXCJGRUFUVVJFX0hJR0hMSUdIVFwiLFxuICAgICAgICB2YWx1ZTogeyBmZWF0dXJlOiBGRUFUVVJFX0lEIH0sXG4gICAgICB9KVxuICAgICk7XG5cbiAgICBoYW5kbGVEaXNtaXNzKCk7XG4gICAgaGFuZGxlQmxvY2soKTtcbiAgfSwgW2Rpc3BhdGNoLCBoYW5kbGVEaXNtaXNzLCBoYW5kbGVCbG9ja10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAvLyBUaGlzIGV2ZW50IGlzIGVtaXR0ZWQgbWFudWFsbHkgYmVjYXVzZSB0aGUgZmVhdHVyZSBtYXkgYmUgdHJpZ2dlcmVkIG91dHNpZGUgdGhlIE9NQyBmbG93LFxuICAgICAgLy8gYW5kIG1heSBub3QgYmUgY2FwdHVyZWQgYnkgdGhlIG1lc3NhZ2luZy1zeXN0ZW3igJlzIGF1dG9tYXRpYyByZXBvcnRpbmcuXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50KHtcbiAgICAgICAgICBldmVudDogXCJGRUFUVVJFX0hJR0hMSUdIVF9JTVBSRVNTSU9OXCIsXG4gICAgICAgICAgc291cmNlOiBcIkZFQVRVUkVfSElHSExJR0hUXCIsXG4gICAgICAgICAgdmFsdWU6IHsgZmVhdHVyZTogRkVBVFVSRV9JRCB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgaXNJbnRlcnNlY3RpbmddKTtcblxuICBjb25zdCBwcmVmcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLlByZWZzLnZhbHVlcyk7XG4gIGNvbnN0IG1vYmlsZURvd25sb2FkUHJvbW9WYXJBID1cbiAgICBwcmVmc1tQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9BXTtcbiAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb1ZhckIgPVxuICAgIHByZWZzW1BSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0JdO1xuICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vVmFyQyA9XG4gICAgcHJlZnNbUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQ107XG5cbiAgZnVuY3Rpb24gZ2V0QWN0aXZlVmFyaWFudCgpIHtcbiAgICBpZiAobW9iaWxlRG93bmxvYWRQcm9tb1ZhckEpIHtcbiAgICAgIHJldHVybiBcIkFcIjtcbiAgICB9XG4gICAgaWYgKG1vYmlsZURvd25sb2FkUHJvbW9WYXJCKSB7XG4gICAgICByZXR1cm4gXCJCXCI7XG4gICAgfVxuICAgIGlmIChtb2JpbGVEb3dubG9hZFByb21vVmFyQykge1xuICAgICAgcmV0dXJuIFwiQ1wiO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhcmlhbnRRUkNvZGVJbWcoKSB7XG4gICAgY29uc3QgdmFyaWFudCA9IGdldEFjdGl2ZVZhcmlhbnQoKTtcbiAgICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgIHJldHVybiBcImNocm9tZTovL25ld3RhYi9jb250ZW50L2RhdGEvY29udGVudC9hc3NldHMvZG93bmxvYWQtcXItY29kZS12YXItYS5wbmdcIjtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICAgIHJldHVybiBcImNocm9tZTovL25ld3RhYi9jb250ZW50L2RhdGEvY29udGVudC9hc3NldHMvZG93bmxvYWQtcXItY29kZS12YXItYi5wbmdcIjtcbiAgICAgIGNhc2UgXCJDXCI6XG4gICAgICAgIHJldHVybiBcImNocm9tZTovL25ld3RhYi9jb250ZW50L2RhdGEvY29udGVudC9hc3NldHMvZG93bmxvYWQtcXItY29kZS12YXItYy5wbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFZhcmlhbnRDb3B5KCkge1xuICAgIGNvbnN0IHZhcmlhbnQgPSBnZXRBY3RpdmVWYXJpYW50KCk7XG4gICAgc3dpdGNoICh2YXJpYW50KSB7XG4gICAgICBjYXNlIFwiQVwiOlxuICAgICAgICByZXR1cm4gXCJuZXd0YWItZG93bmxvYWQtbW9iaWxlLWhpZ2hsaWdodC1ib2R5LXZhcmlhbnQtYVwiO1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgICAgcmV0dXJuIFwibmV3dGFiLWRvd25sb2FkLW1vYmlsZS1oaWdobGlnaHQtYm9keS12YXJpYW50LWJcIjtcbiAgICAgIGNhc2UgXCJDXCI6XG4gICAgICAgIHJldHVybiBcIm5ld3RhYi1kb3dubG9hZC1tb2JpbGUtaGlnaGxpZ2h0LWJvZHktdmFyaWFudC1jXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlyZWZveC1mZWF0dXJlLWhpZ2hsaWdodFwiPlxuICAgICAgPEZlYXR1cmVIaWdobGlnaHRcbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBmZWF0dXJlPXtGRUFUVVJFX0lEfVxuICAgICAgICBkaXNwYXRjaD17ZGlzcGF0Y2h9XG4gICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG93bmxvYWQtZmlyZWZveC1mZWF0dXJlLWhpZ2hsaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17Z2V0VmFyaWFudFFSQ29kZUltZygpfVxuICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItZG93bmxvYWQtbW9iaWxlLWhpZ2hsaWdodC1pbWFnZVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTIwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTkxXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1kb3dubG9hZC1tb2JpbGUtaGlnaGxpZ2h0LXRpdGxlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiIGRhdGEtbDEwbi1pZD17Z2V0VmFyaWFudENvcHkoKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICBvcGVuZWRPdmVycmlkZT17dHJ1ZX1cbiAgICAgICAgc2hvd0J1dHRvbkljb249e2ZhbHNlfVxuICAgICAgICBkaXNtaXNzQ2FsbGJhY2s9e29uRGlzbWlzc31cbiAgICAgICAgb3V0c2lkZUNsaWNrQ2FsbGJhY2s9e2hhbmRsZURpc21pc3N9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgRmVhdHVyZUhpZ2hsaWdodCB9IGZyb20gXCIuL0ZlYXR1cmVIaWdobGlnaHRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFdhbGxwYXBlckZlYXR1cmVIaWdobGlnaHQoe1xuICBwb3NpdGlvbixcbiAgZGlzcGF0Y2gsXG4gIGhhbmRsZURpc21pc3MsXG4gIGhhbmRsZUNsaWNrLFxuICBoYW5kbGVCbG9jayxcbn0pIHtcbiAgY29uc3Qgb25EaXNtaXNzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGhhbmRsZURpc21pc3MoKTtcbiAgICBoYW5kbGVCbG9jaygpO1xuICB9LCBbaGFuZGxlRGlzbWlzcywgaGFuZGxlQmxvY2tdKTtcblxuICBjb25zdCBvblRvZ2dsZUNsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgZWxlbWVudElkID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogYXQuU0hPV19QRVJTT05BTElaRSB9KTtcbiAgICAgIGRpc3BhdGNoKGFjLlVzZXJFdmVudCh7IGV2ZW50OiBcIlNIT1dfUEVSU09OQUxJWkVcIiB9KSk7XG4gICAgICBoYW5kbGVDbGljayhlbGVtZW50SWQpO1xuICAgICAgb25EaXNtaXNzKCk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIG9uRGlzbWlzcywgaGFuZGxlQ2xpY2tdXG4gICk7XG5cbiAgLy8gRXh0cmFjdCB0aGUgc3RyaW5ncyBhbmQgZmVhdHVyZSBJRCBmcm9tIE9NQ1xuICBjb25zdCB7IG1lc3NhZ2VEYXRhIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5NZXNzYWdlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxwYXBlci1mZWF0dXJlLWhpZ2hsaWdodFwiPlxuICAgICAgPEZlYXR1cmVIaWdobGlnaHRcbiAgICAgICAgcG9zaXRpb249e3Bvc2l0aW9ufVxuICAgICAgICBkYXRhLWwxMG4taWQ9XCJmZWF0dXJlLWhpZ2hsaWdodC13YWxscGFwZXJcIlxuICAgICAgICBmZWF0dXJlPXttZXNzYWdlRGF0YS5jb250ZW50LmZlYXR1cmV9XG4gICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxscGFwZXItZmVhdHVyZS1oaWdobGlnaHQtY29udGVudFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJjaHJvbWU6Ly9uZXd0YWIvY29udGVudC9kYXRhL2NvbnRlbnQvYXNzZXRzL2N1c3RvbS13cC1oaWdobGlnaHQucG5nXCJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIzMjBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOTVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlXCIgZGF0YS1sMTBuLWlkPXttZXNzYWdlRGF0YS5jb250ZW50LnRpdGxlfSAvPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VidGl0bGVcIlxuICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9e21lc3NhZ2VEYXRhLmNvbnRlbnQuc3VidGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPG1vei1idXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25Ub2dnbGVDbGljayhcIm9wZW4tY3VzdG9taXplLW1lbnVcIil9XG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXttZXNzYWdlRGF0YS5jb250ZW50LmN0YX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB0b2dnbGU9ezxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWhlbHBcIj48L2Rpdj59XG4gICAgICAgIG9wZW5lZE92ZXJyaWRlPXt0cnVlfVxuICAgICAgICBzaG93QnV0dG9uSWNvbj17ZmFsc2V9XG4gICAgICAgIGRpc21pc3NDYWxsYmFjaz17b25EaXNtaXNzfVxuICAgICAgICBvdXRzaWRlQ2xpY2tDYWxsYmFjaz17aGFuZGxlRGlzbWlzc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuLi8uLi9saWIvdXRpbHNcIjtcblxuLy8gTm90ZTogTWVzc2FnZVdyYXBwZXIgZW1pdHMgZXZlbnRzIHZpYSBzdWJtaXRHbGVhblBpbmdGb3JQaW5nKCkgaW4gdGhlIE9NQyBtZXNzYWdpbmctc3lzdGVtLlxuLy8gSWYgYSBmZWF0dXJlIGlzIHRyaWdnZXJlZCBvdXRzaWRlIG9mIHRoaXMgZmxvdyAoZS5nLiwgdGhlIE1vYmlsZSBEb3dubG9hZCBRUiBQcm9tbyksXG4vLyBpdCBzaG91bGQgZW1pdCBOZXcgVGFiLXNwZWNpZmljIEdsZWFuIGV2ZW50cyBpbmRlcGVuZGVudGx5LlxuXG5mdW5jdGlvbiBNZXNzYWdlV3JhcHBlcih7IGNoaWxkcmVuLCBkaXNwYXRjaCwgaGlkZGVuT3ZlcnJpZGUsIG9uRGlzbWlzcyB9KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5NZXNzYWdlcyk7XG4gIGNvbnN0IFtpc0ludGVyc2VjdGluZywgc2V0SXNJbnRlcnNlY3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdGFiSXNWaXNpYmxlLCBzZXRUYWJJc1Zpc2libGVdID0gdXNlU3RhdGUoXG4gICAgKCkgPT5cbiAgICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiXG4gICk7XG4gIGNvbnN0IFtoYXNSdW4sIHNldEhhc1J1bl0gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUludGVyc2VjdGlvbiA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRJc0ludGVyc2VjdGluZyh0cnVlKTtcbiAgICAvLyBvbmx5IHNlbmQgaW1wcmVzc2lvbiBpZiBtZXNzYWdlSWQgaXMgZGVmaW5lZCBhbmQgdGFiIGlzIHZpc2libGVcbiAgICBpZiAodGFiSXNWaXNpYmxlICYmIG1lc3NhZ2UubWVzc2FnZURhdGEuaWQgJiYgIWhhc1J1bikge1xuICAgICAgc2V0SGFzUnVuKHRydWUpO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0Lk1FU1NBR0VfSU1QUkVTU0lPTixcbiAgICAgICAgICBkYXRhOiBtZXNzYWdlLm1lc3NhZ2VEYXRhLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgbWVzc2FnZSwgdGFiSXNWaXNpYmxlLCBoYXNSdW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIHdlIGRvbnQgd2FudCB0byBkaXNwYXRjaCB0aGlzIGFjdGlvbiB1bmxlc3MgdGhlIGN1cnJlbnQgdGFiIGlzIG9wZW4gYW5kIHZpc2libGVcbiAgICBpZiAobWVzc2FnZS5pc1Zpc2libGUgJiYgdGFiSXNWaXNpYmxlKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuTUVTU0FHRV9OT1RJRllfVklTSUJJTElUWSxcbiAgICAgICAgICBkYXRhOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFttZXNzYWdlLCBkaXNwYXRjaCwgdGFiSXNWaXNpYmxlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgc2V0VGFiSXNWaXNpYmxlKGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCIpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHJlZiA9IHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGhhbmRsZUludGVyc2VjdGlvbik7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0ge1xuICAgICAgdHlwZTogYXQuTUVTU0FHRV9UT0dHTEVfVklTSUJJTElUWSxcbiAgICAgIGRhdGE6IGZhbHNlLCAvL2lzVmlzaWJsZVxuICAgIH07XG4gICAgaWYgKG1lc3NhZ2UucG9ydElEKSB7XG4gICAgICBkaXNwYXRjaChhYy5Pbmx5VG9PbmVDb250ZW50KGFjdGlvbiwgbWVzc2FnZS5wb3J0SUQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzcGF0Y2goYWMuQWxzb1RvTWFpbihhY3Rpb24pKTtcbiAgICB9XG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuTUVTU0FHRV9OT1RJRllfVklTSUJJTElUWSxcbiAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICB9KVxuICAgICk7XG4gICAgb25EaXNtaXNzPy4oKTtcbiAgfSwgW2Rpc3BhdGNoLCBtZXNzYWdlLCBvbkRpc21pc3NdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVEaXNtaXNzKCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IG1lc3NhZ2UubWVzc2FnZURhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuTUVTU0FHRV9ESVNNSVNTLFxuICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlRGF0YSB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUJsb2NrKCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IG1lc3NhZ2UubWVzc2FnZURhdGE7XG4gICAgaWYgKGlkKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuTUVTU0FHRV9CTE9DSyxcbiAgICAgICAgICBkYXRhOiBpZCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZWxlbWVudElkKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gbWVzc2FnZS5tZXNzYWdlRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5NRVNTQUdFX0NMSUNLLFxuICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogbWVzc2FnZS5tZXNzYWdlRGF0YSwgc291cmNlOiBlbGVtZW50SWQgfHwgXCJcIiB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW1lc3NhZ2UgfHwgKCFoaWRkZW5PdmVycmlkZSAmJiAhbWVzc2FnZS5pc1Zpc2libGUpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBvbmx5IGRpc3BsYXkgdGhlIG1lc3NhZ2UgaWYgYGlzVmlzaWJsZWAgaXMgdHJ1ZVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICByZWYuY3VycmVudCA9IFtlbF07XG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwibWVzc2FnZS13cmFwcGVyXCJcbiAgICA+XG4gICAgICB7UmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgIGlzSW50ZXJzZWN0aW5nLFxuICAgICAgICBoYW5kbGVEaXNtaXNzLFxuICAgICAgICBoYW5kbGVDbGljayxcbiAgICAgICAgaGFuZGxlQmxvY2ssXG4gICAgICAgIGhhbmRsZUNsb3NlLFxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCB7IE1lc3NhZ2VXcmFwcGVyIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBEaXNjb3ZlcnlTdHJlYW1BZG1pbiB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUFkbWluL0Rpc2NvdmVyeVN0cmVhbUFkbWluXCI7XG5pbXBvcnQgeyBDb25maXJtRGlhbG9nIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ29uZmlybURpYWxvZy9Db25maXJtRGlhbG9nXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS9FcnJvckJvdW5kYXJ5XCI7XG5pbXBvcnQgeyBDdXN0b21pemVNZW51IH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ3VzdG9taXplTWVudS9DdXN0b21pemVNZW51XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoXCI7XG5pbXBvcnQgeyBDb250ZXh0Y29sQUlJbnRlcmZhY2UgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Db250ZXh0Y29sQUlJbnRlcmZhY2UvQ29udGV4dGNvbEFJSW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvTG9nby9Mb2dvXCI7XG5pbXBvcnQgeyBXZWF0aGVyIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvV2VhdGhlci9XZWF0aGVyXCI7XG5pbXBvcnQgeyBEb3dubG9hZE1vZGFsVG9nZ2xlIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvRG93bmxvYWRNb2RhbFRvZ2dsZS9Eb3dubG9hZE1vZGFsVG9nZ2xlXCI7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvTm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBEb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvRmVhdHVyZUhpZ2hsaWdodC9Eb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0XCI7XG5pbXBvcnQgeyBXYWxscGFwZXJGZWF0dXJlSGlnaGxpZ2h0IH0gZnJvbSBcIi4uL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvRmVhdHVyZUhpZ2hsaWdodC9XYWxscGFwZXJGZWF0dXJlSGlnaGxpZ2h0XCI7XG5pbXBvcnQgeyBNZXNzYWdlV3JhcHBlciB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL01lc3NhZ2VXcmFwcGVyL01lc3NhZ2VXcmFwcGVyXCI7XG5cbmNvbnN0IFZJU0lCTEUgPSBcInZpc2libGVcIjtcbmNvbnN0IFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5UID0gXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7XG5jb25zdCBQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9TWVNURU0gPVxuICBcImRpc2NvdmVyeXN0cmVhbS5zZWN0aW9ucy5wZXJzb25hbGl6YXRpb24uaW5mZXJyZWQuZW5hYmxlZFwiO1xuY29uc3QgUFJFRl9JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fVVNFUiA9XG4gIFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLnBlcnNvbmFsaXphdGlvbi5pbmZlcnJlZC51c2VyLmVuYWJsZWRcIjtcblxuLy8gUmV0dXJucyBhIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGNvbnRpbnVvdXNseSB0cmlnZ2VyZWQgd2hlbiBjYWxsZWQuIFRoZVxuLy8gZnVuY3Rpb24gd2lsbCBiZSB0cmlnZ2VyZWQgaWYgY2FsbGVkIGFnYWluIGFmdGVyIGB3YWl0YCBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIGxldCB0aW1lcjtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHdha2VVcCA9ICgpID0+IHtcbiAgICAgIHRpbWVyID0gbnVsbDtcbiAgICB9O1xuXG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KHdha2VVcCwgd2FpdCk7XG4gICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIF9CYXNlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlOiB7fSxcbiAgICB9O1xuICAgIHRoaXMubm90aWZ5Q29udGVudCA9IHRoaXMubm90aWZ5Q29udGVudC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbm90aWZ5Q29udGVudChzdGF0ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVUaGVtZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZVRoZW1lKCk7XG4gIH1cblxuICB1cGRhdGVUaGVtZSgpIHtcbiAgICBjb25zdCBib2R5Q2xhc3NOYW1lID0gW1xuICAgICAgXCJhY3Rpdml0eS1zdHJlYW1cIixcbiAgICAgIC8vIElmIHdlIHNraXBwZWQgdGhlIGFib3V0OndlbGNvbWUgb3ZlcmxheSBhbmQgcmVtb3ZlZCB0aGUgQ1NTIGNsYXNzZXNcbiAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gYWRkIHRoZW0gYmFjayB0byB0aGUgQWN0aXZpdHkgU3RyZWFtIHZpZXdcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaW5saW5lLW9uYm9hcmRpbmdcIilcbiAgICAgICAgPyBcImlubGluZS1vbmJvYXJkaW5nXCJcbiAgICAgICAgOiBcIlwiLFxuICAgIF1cbiAgICAgIC5maWx0ZXIodiA9PiB2KVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBib2R5Q2xhc3NOYW1lO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBBcHAgfSA9IHByb3BzO1xuICAgIGNvbnN0IGlzRGV2dG9vbHNFbmFibGVkID0gcHJvcHMuUHJlZnMudmFsdWVzW1wiYXNyb3V0ZXIuZGV2dG9vbHNFbmFibGVkXCJdO1xuXG4gICAgaWYgKCFBcHAuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeSBjbGFzc05hbWU9XCJiYXNlLWNvbnRlbnQtZmFsbGJhY2tcIj5cbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIDxCYXNlQ29udGVudCB7Li4udGhpcy5wcm9wc30gYWRtaW5Db250ZW50PXt0aGlzLnN0YXRlfSAvPlxuICAgICAgICAgIHtpc0RldnRvb2xzRW5hYmxlZCA/IChcbiAgICAgICAgICAgIDxEaXNjb3ZlcnlTdHJlYW1BZG1pbiBub3RpZnlDb250ZW50PXt0aGlzLm5vdGlmeUNvbnRlbnR9IC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFzZUNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vcGVuUHJlZmVyZW5jZXMgPSB0aGlzLm9wZW5QcmVmZXJlbmNlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMub3BlbkN1c3RvbWl6YXRpb25NZW51ID0gdGhpcy5vcGVuQ3VzdG9taXphdGlvbk1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsb3NlQ3VzdG9taXphdGlvbk1lbnUgPSB0aGlzLmNsb3NlQ3VzdG9taXphdGlvbk1lbnUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZU9uS2V5RG93biA9IHRoaXMuaGFuZGxlT25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbldpbmRvd1Njcm9sbCA9IGRlYm91bmNlKHRoaXMub25XaW5kb3dTY3JvbGwuYmluZCh0aGlzKSwgNSk7XG4gICAgdGhpcy5zZXRQcmVmID0gdGhpcy5zZXRQcmVmLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG91bGRTaG93T01DSGlnaGxpZ2h0ID0gdGhpcy5zaG91bGRTaG93T01DSGlnaGxpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGVXYWxscGFwZXIgPSB0aGlzLnVwZGF0ZVdhbGxwYXBlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJlZmVyc0RhcmtRdWVyeSA9IG51bGw7XG4gICAgdGhpcy5oYW5kbGVDb2xvck1vZGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNvbG9yTW9kZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2hvdWxkRGlzcGxheVRvcGljU2VsZWN0aW9uTW9kYWwgPVxuICAgICAgdGhpcy5zaG91bGREaXNwbGF5VG9waWNTZWxlY3Rpb25Nb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlRG93bmxvYWRIaWdobGlnaHQgPSB0aGlzLnRvZ2dsZURvd25sb2FkSGlnaGxpZ2h0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVEaXNtaXNzRG93bmxvYWRIaWdobGlnaHQgPVxuICAgICAgdGhpcy5oYW5kbGVEaXNtaXNzRG93bmxvYWRIaWdobGlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlcldhbGxwYXBlckF0dHJpYnV0aW9uID1cbiAgICAgIHRoaXMucmVuZGVyV2FsbHBhcGVyQXR0cmlidXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFJUmVxdWVzdCA9IHRoaXMuaGFuZGxlQUlSZXF1ZXN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpeGVkU2VhcmNoOiBmYWxzZSxcbiAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcDogbnVsbCxcbiAgICAgIGNvbG9yTW9kZTogXCJcIixcbiAgICAgIGZpeGVkTmF2U3R5bGU6IHt9LFxuICAgICAgd2FsbHBhcGVyVGhlbWU6IFwiXCIsXG4gICAgICBzaG93RG93bmxvYWRIaWdobGlnaHRPdmVycmlkZTogbnVsbCxcbiAgICB9O1xuICB9XG5cbiAgc2V0Rmlyc3RWaXNpYmxlVGltZXN0YW1wKCkge1xuICAgIGlmICghdGhpcy5zdGF0ZS5maXJzdFZpc2libGVUaW1lc3RhbXApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXJzdFZpc2libGVUaW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVPbktleURvd24pO1xuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3Qgd2FsbHBhcGVyc0VuYWJsZWQgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMuZW5hYmxlZFwiXTtcbiAgICBpZiAodGhpcy5wcm9wcy5kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFZJU0lCTEUpIHtcbiAgICAgIHRoaXMuc2V0Rmlyc3RWaXNpYmxlVGltZXN0YW1wKCk7XG4gICAgICB0aGlzLnNob3VsZERpc3BsYXlUb3BpY1NlbGVjdGlvbk1vZGFsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBWSVNJQkxFKSB7XG4gICAgICAgICAgdGhpcy5zZXRGaXJzdFZpc2libGVUaW1lc3RhbXAoKTtcbiAgICAgICAgICB0aGlzLnNob3VsZERpc3BsYXlUb3BpY1NlbGVjdGlvbk1vZGFsKCk7XG4gICAgICAgICAgdGhpcy5wcm9wcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIHRyYWNrIGNoYW5nZSBldmVudCB0byBkYXJrL2xpZ2h0IG1vZGVcbiAgICB0aGlzLnByZWZlcnNEYXJrUXVlcnkgPSBnbG9iYWxUaGlzLm1hdGNoTWVkaWEoXG4gICAgICBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgICk7XG5cbiAgICB0aGlzLnByZWZlcnNEYXJrUXVlcnkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2hhbmdlXCIsXG4gICAgICB0aGlzLmhhbmRsZUNvbG9yTW9kZUNoYW5nZVxuICAgICk7XG4gICAgdGhpcy5oYW5kbGVDb2xvck1vZGVDaGFuZ2UoKTtcbiAgICBpZiAod2FsbHBhcGVyc0VuYWJsZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlV2FsbHBhcGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3Qgd2FsbHBhcGVyc0VuYWJsZWQgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMuZW5hYmxlZFwiXTtcbiAgICBpZiAod2FsbHBhcGVyc0VuYWJsZWQpIHtcbiAgICAgIC8vIGRlc3RydWN0dXJlIGN1cnJlbnQgYW5kIHByZXZpb3VzIHByb3BzIHdpdGggZmFsbGJhY2tzXG4gICAgICAvLyAocHJldmVudGluZyB1bmRlZmluZWQgZXJyb3JzKVxuICAgICAgY29uc3Qge1xuICAgICAgICBXYWxscGFwZXJzOiB7IHVwbG9hZGVkV2FsbHBhcGVyID0gbnVsbCwgd2FsbHBhcGVyTGlzdCA9IG51bGwgfSA9IHt9LFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgV2FsbHBhcGVyczoge1xuICAgICAgICAgIHVwbG9hZGVkV2FsbHBhcGVyOiBwcmV2VXBsb2FkZWRXYWxscGFwZXIgPSBudWxsLFxuICAgICAgICAgIHdhbGxwYXBlckxpc3Q6IHByZXZXYWxscGFwZXJMaXN0ID0gbnVsbCxcbiAgICAgICAgfSA9IHt9LFxuICAgICAgICBQcmVmczogeyB2YWx1ZXM6IHByZXZQcmVmcyA9IHt9IH0gPSB7fSxcbiAgICAgIH0gPSBwcmV2UHJvcHM7XG5cbiAgICAgIGNvbnN0IHNlbGVjdGVkV2FsbHBhcGVyID0gcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiXTtcbiAgICAgIGNvbnN0IHByZXZTZWxlY3RlZFdhbGxwYXBlciA9IHByZXZQcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCJdO1xuXG4gICAgICAvLyBkb24ndCB1cGRhdGUgd2FsbHBhcGVyIHVubGVzcyB0aGUgd2FsbHBhcGVyIGlzIGJlaW5nIGNoYW5nZWQuXG4gICAgICBpZiAoXG4gICAgICAgIHNlbGVjdGVkV2FsbHBhcGVyICE9PSBwcmV2U2VsZWN0ZWRXYWxscGFwZXIgfHwgLy8gc2VsZWN0aW5nIGEgbmV3IHdhbGxwYXBlclxuICAgICAgICB1cGxvYWRlZFdhbGxwYXBlciAhPT0gcHJldlVwbG9hZGVkV2FsbHBhcGVyIHx8IC8vIHVwbG9hZGluZyBhIG5ldyB3YWxscGFwZXJcbiAgICAgICAgd2FsbHBhcGVyTGlzdCAhPT0gcHJldldhbGxwYXBlckxpc3QgfHwgLy8gcmVtb3RlIHNldHRpbmdzIHdhbGxwYXBlciBsaXN0IHVwZGF0ZXNcbiAgICAgICAgdGhpcy5wcm9wcy5BcHAuaXNGb3JTdGFydHVwQ2FjaGUuV2FsbHBhcGVyICE9PVxuICAgICAgICAgIHByZXZQcm9wcy5BcHAuaXNGb3JTdGFydHVwQ2FjaGUuV2FsbHBhcGVyIC8vIFN0YXJ0dXAgY2FjaGVkIHBhZ2Ugd2FsbHBhcGVyIGlzIHVwZGF0aW5nXG4gICAgICApIHtcbiAgICAgICAgdGhpcy51cGRhdGVXYWxscGFwZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb2xvck1vZGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgY29sb3JNb2RlID0gdGhpcy5wcmVmZXJzRGFya1F1ZXJ5Py5tYXRjaGVzID8gXCJkYXJrXCIgOiBcImxpZ2h0XCI7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvbG9yTW9kZSB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucHJlZmVyc0RhcmtRdWVyeT8ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2hhbmdlXCIsXG4gICAgICB0aGlzLmhhbmRsZUNvbG9yTW9kZUNoYW5nZVxuICAgICk7XG4gICAgZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vbldpbmRvd1Njcm9sbCk7XG4gICAgZ2xvYmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlT25LZXlEb3duKTtcbiAgICBpZiAodGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25XaW5kb3dTY3JvbGwoKSB7XG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8PSA3MDApIHtcbiAgICAgIC8vIEJ1ZyAxOTM3Mjk2OiBPbmx5IGFwcGx5IGZpeGVkLXNlYXJjaCBsb2dpY1xuICAgICAgLy8gaWYgdGhlIHBhZ2UgaXMgdGFsbCBlbm91Z2ggdG8gc3VwcG9ydCBpdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmVmcyA9IHRoaXMucHJvcHMuUHJlZnMudmFsdWVzO1xuICAgIGNvbnN0IHsgc2hvd1NlYXJjaCB9ID0gcHJlZnM7XG5cbiAgICBpZiAoIXNob3dTZWFyY2gpIHtcbiAgICAgIC8vIEJ1ZyAxOTQ0NzE4OiBPbmx5IGFwcGx5IGZpeGVkLXNlYXJjaCBsb2dpY1xuICAgICAgLy8gaWYgc2VhcmNoIGlzIHZpc2libGUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbG9nb0Fsd2F5c1Zpc2libGUgPSBwcmVmc1tcImxvZ293b3JkbWFyay5hbHdheXNWaXNpYmxlXCJdO1xuXG4gICAgLyogQnVnIDE5MTc5Mzc6IFRoZSBsb2dpYyBwcmVzZW50ZWQgYmVsb3cgaXMgZnJhZ2lsZSBidXQgYWNjdXJhdGUgdG8gdGhlIHBpeGVsLiBBcyBuZXcgdGFiIGV4cGVyaW1lbnRzIHdpdGggbGF5b3V0cywgd2UgaGF2ZSBhIHRlY2ggZGVidCBvZiBjb21wZXRpbmcgc3R5bGVzIGFuZCBjbGFzc2VzIHRoZSBzbGlnaHRseSBtb2RpZnkgd2hlcmUgdGhlIHNlYXJjaCBiYXIgc2l0cyBvbiB0aGUgcGFnZS4gVGhlIGxhcmdlciBzb2x1dGlvbiBmb3IgdGhpcyBpcyB0byByZXBsYWNlIGV2ZXJ5dGhpbmcgd2l0aCBhbiBpbnRlcnNlY3Rpb24gb2JzZXJ2ZXIsIGJ1dCB3b3VsZCByZXF1aXJlIGEgbGFyZ2VyIHJlZmFjdG9yIG9mIHRoaXMgZmlsZS4gSW4gdGhlIGludGVyaW0sIHdlIGNhbiBwcm9ncmFtbWF0aWNhbGx5IGNhbGN1bGF0ZSB3aGVuIHRvIGZpcmUgdGhlIGZpeGVkLXNjcm9sbCBldmVudCBhbmQgYWNjb3VudCBmb3IgdGhlIG1vdmVkIGVsZW1lbnRzIHNvIHRoYXQgdG9wc2l0ZXMvZXRjIHN0YXlzIGluIHRoZSBzYW1lIHBsYWNlLiBUaGUgQ1NTIHRoaXMgcmVmZXJlbmNlcyBoYXMgYmVlbiBmbGFnZ2VkIHRvIHJlZmVyZW5jZSB0aGlzIGxvZ2ljIHNvIChob3BlZnVsbHkpIGtlZXAgdGhlbSBpbiBzeW5jLiAqL1xuXG4gICAgbGV0IFNDUk9MTF9USFJFU0hPTEQgPSAwOyAvLyBXaGVuIHRoZSBmaXhlZC1zY3JvbGwgZXZlbnQgZmlyZXNcbiAgICBsZXQgTUFJTl9PRkZTRVRfUEFERElORyA9IDA7IC8vIFRoZSBwYWRkaW5nIHRvIGNvbXBlbnNhdGUgZm9yIHRoZSBtb3ZlZCBlbGVtZW50c1xuXG4gICAgY29uc3QgQ1NTX1ZBUl9TUEFDRV9YWExBUkdFID0gMzIuMDQ7IC8vIEN1c3RvbSBBY29ybiB0aGVtZWQgdmFyaWFibGUgKDggKiAwLjI2N3JlbSk7XG5cbiAgICBsZXQgbGF5b3V0ID0ge1xuICAgICAgb3V0ZXJXcmFwcGVyUGFkZGluZ1RvcDogMjQsXG4gICAgICBzZWFyY2hXcmFwcGVyUGFkZGluZ1RvcDogMTYsXG4gICAgICBzZWFyY2hXcmFwcGVyUGFkZGluZ0JvdHRvbTogQ1NTX1ZBUl9TUEFDRV9YWExBUkdFLFxuICAgICAgc2VhcmNoV3JhcHBlckZpeGVkU2Nyb2xsUGFkZGluZ1RvcDogMjcsXG4gICAgICBzZWFyY2hXcmFwcGVyRml4ZWRTY3JvbGxQYWRkaW5nQm90dG9tOiAyNyxcbiAgICAgIHNlYXJjaElubmVyV3JhcHBlck1pbkhlaWdodDogNTIsXG4gICAgICBsb2dvQW5kV29yZG1hcmtXcmFwcGVySGVpZ2h0OiAwLFxuICAgICAgbG9nb0FuZFdvcmRtYXJrV3JhcHBlck1hcmdpbkJvdHRvbTogMCxcbiAgICB9O1xuXG4gICAgLy8gTG9nbyB2aXNpYmlsaXR5IGFwcGxpZXMgdG8gYWxsIGxheW91dHNcbiAgICBpZiAoIWxvZ29BbHdheXNWaXNpYmxlKSB7XG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlckhlaWdodCA9IDA7XG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlck1hcmdpbkJvdHRvbSA9IDA7XG4gICAgfVxuXG4gICAgU0NST0xMX1RIUkVTSE9MRCA9XG4gICAgICBsYXlvdXQub3V0ZXJXcmFwcGVyUGFkZGluZ1RvcCArXG4gICAgICBsYXlvdXQuc2VhcmNoV3JhcHBlclBhZGRpbmdUb3AgK1xuICAgICAgbGF5b3V0LmxvZ29BbmRXb3JkbWFya1dyYXBwZXJIZWlnaHQgK1xuICAgICAgbGF5b3V0LmxvZ29BbmRXb3JkbWFya1dyYXBwZXJNYXJnaW5Cb3R0b20gLVxuICAgICAgbGF5b3V0LnNlYXJjaFdyYXBwZXJGaXhlZFNjcm9sbFBhZGRpbmdUb3A7XG5cbiAgICBNQUlOX09GRlNFVF9QQURESU5HID1cbiAgICAgIGxheW91dC5zZWFyY2hXcmFwcGVyUGFkZGluZ1RvcCArXG4gICAgICBsYXlvdXQuc2VhcmNoV3JhcHBlclBhZGRpbmdCb3R0b20gK1xuICAgICAgbGF5b3V0LnNlYXJjaElubmVyV3JhcHBlck1pbkhlaWdodCArXG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlckhlaWdodCArXG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlck1hcmdpbkJvdHRvbTtcblxuICAgIC8vIEVkZ2UgY2FzZSBpZiBsb2dvIGFuZCB0aHVtcyBhcmUgdHVybmVkIG9mZiwgYnV0IFZhciBBIGlzIGVuYWJsZWRcbiAgICBpZiAoU0NST0xMX1RIUkVTSE9MRCA8IDEpIHtcbiAgICAgIFNDUk9MTF9USFJFU0hPTEQgPSAxO1xuICAgIH1cblxuICAgIGlmIChnbG9iYWwuc2Nyb2xsWSA+IFNDUk9MTF9USFJFU0hPTEQgJiYgIXRoaXMuc3RhdGUuZml4ZWRTZWFyY2gpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaXhlZFNlYXJjaDogdHJ1ZSxcbiAgICAgICAgZml4ZWROYXZTdHlsZTogeyBwYWRkaW5nQmxvY2tTdGFydDogYCR7TUFJTl9PRkZTRVRfUEFERElOR31weGAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLnNjcm9sbFkgPD0gU0NST0xMX1RIUkVTSE9MRCAmJiB0aGlzLnN0YXRlLmZpeGVkU2VhcmNoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZml4ZWRTZWFyY2g6IGZhbHNlLCBmaXhlZE5hdlN0eWxlOiB7fSB9KTtcbiAgICB9XG4gIH1cblxuICBvcGVuUHJlZmVyZW5jZXMoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5Pbmx5VG9NYWluKHsgdHlwZTogYXQuU0VUVElOR1NfT1BFTiB9KSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5Vc2VyRXZlbnQoeyBldmVudDogXCJPUEVOX05FV1RBQl9QUkVGU1wiIH0pKTtcbiAgfVxuXG4gIG9wZW5DdXN0b21pemF0aW9uTWVudSgpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogYXQuU0hPV19QRVJTT05BTElaRSB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlVzZXJFdmVudCh7IGV2ZW50OiBcIlNIT1dfUEVSU09OQUxJWkVcIiB9KSk7XG4gIH1cblxuICBjbG9zZUN1c3RvbWl6YXRpb25NZW51KCkge1xuICAgIGlmICh0aGlzLnByb3BzLkFwcC5jdXN0b21pemVNZW51VmlzaWJsZSkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6IGF0LkhJREVfUEVSU09OQUxJWkUgfSk7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlVzZXJFdmVudCh7IGV2ZW50OiBcIkhJREVfUEVSU09OQUxJWkVcIiB9KSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VDdXN0b21pemF0aW9uTWVudSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFByZWYocHJlZiwgdmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYocHJlZiwgdmFsdWUpKTtcbiAgfVxuXG4gIHJlbmRlcldhbGxwYXBlckF0dHJpYnV0aW9uKCkge1xuICAgIGNvbnN0IHsgd2FsbHBhcGVyTGlzdCB9ID0gdGhpcy5wcm9wcy5XYWxscGFwZXJzO1xuICAgIGNvbnN0IGFjdGl2ZVdhbGxwYXBlciA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tgbmV3dGFiV2FsbHBhcGVycy53YWxscGFwZXJgXTtcbiAgICBjb25zdCBzZWxlY3RlZCA9IHdhbGxwYXBlckxpc3QuZmluZCh3cCA9PiB3cC50aXRsZSA9PT0gYWN0aXZlV2FsbHBhcGVyKTtcbiAgICAvLyBtYWtlIHN1cmUgYSB3YWxscGFwZXIgaXMgc2VsZWN0ZWQgYW5kIHRoYXQgdGhlIGF0dHJpYnV0aW9uIGFsc28gZXhpc3RzXG4gICAgaWYgKCFzZWxlY3RlZD8uYXR0cmlidXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgbmFtZTogYXV0aG9yRGV0YWlscywgd2VicGFnZSB9ID0gc2VsZWN0ZWQuYXR0cmlidXRpb247XG4gICAgaWYgKGFjdGl2ZVdhbGxwYXBlciAmJiB3YWxscGFwZXJMaXN0ICYmIGF1dGhvckRldGFpbHMudXJsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT17YHdhbGxwYXBlci1hdHRyaWJ1dGlvbmB9XG4gICAgICAgICAga2V5PXthdXRob3JEZXRhaWxzLnN0cmluZ31cbiAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItd2FsbHBhcGVyLWF0dHJpYnV0aW9uXCJcbiAgICAgICAgICBkYXRhLWwxMG4tYXJncz17SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgYXV0aG9yX3N0cmluZzogYXV0aG9yRGV0YWlscy5zdHJpbmcsXG4gICAgICAgICAgICBhdXRob3JfdXJsOiBhdXRob3JEZXRhaWxzLnVybCxcbiAgICAgICAgICAgIHdlYnBhZ2Vfc3RyaW5nOiB3ZWJwYWdlLnN0cmluZyxcbiAgICAgICAgICAgIHdlYnBhZ2VfdXJsOiB3ZWJwYWdlLnVybCxcbiAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxhIGRhdGEtbDEwbi1uYW1lPVwibmFtZS1saW5rXCIgaHJlZj17YXV0aG9yRGV0YWlscy51cmx9PlxuICAgICAgICAgICAge2F1dGhvckRldGFpbHMuc3RyaW5nfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBkYXRhLWwxMG4tbmFtZT1cIndlYnBhZ2UtbGlua1wiIGhyZWY9e3dlYnBhZ2UudXJsfT5cbiAgICAgICAgICAgIHt3ZWJwYWdlLnN0cmluZ31cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlV2FsbHBhcGVyKCkge1xuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxscGFwZXIgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCJdO1xuICAgIGNvbnN0IHsgd2FsbHBhcGVyTGlzdCwgdXBsb2FkZWRXYWxscGFwZXI6IHVwbG9hZGVkV2FsbHBhcGVyVXJsIH0gPVxuICAgICAgdGhpcy5wcm9wcy5XYWxscGFwZXJzO1xuICAgIGxldCBsaWdodFdhbGxwYXBlciA9IHt9O1xuICAgIGxldCBkYXJrV2FsbHBhcGVyID0ge307XG5cbiAgICBpZiAoc2VsZWN0ZWRXYWxscGFwZXIgPT09IFwiY3VzdG9tXCIgJiYgdXBsb2FkZWRXYWxscGFwZXJVcmwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICBcIi0tbmV3dGFiLXdhbGxwYXBlclwiLFxuICAgICAgICAgIGB1cmwoJHt1cGxvYWRlZFdhbGxwYXBlclVybH0pYFxuICAgICAgICApO1xuXG4gICAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICBcIi0tbmV3dGFiLXdhbGxwYXBlci1jb2xvclwiLFxuICAgICAgICAgIFwidHJhbnNwYXJlbnRcIlxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEJhc2VkIG9uIHRoZSBjdXJyZW50IGNvbG9yTW9kZSwgYWRkIHRoZSBjb3JyZXNwb25kaW5nIGRhcmsvbGlnaHQgQ1NTIGNsYXNzZXNcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29sb3JNb2RlKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgICAgICAgIHdhbGxwYXBlclRoZW1lOiBwcmV2U3RhdGUuY29sb3JNb2RlLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh3YWxscGFwZXJMaXN0KSB7XG4gICAgICBsZXQgd2FsbHBhcGVyID0gd2FsbHBhcGVyTGlzdC5maW5kKHdwID0+IHdwLnRpdGxlID09PSBzZWxlY3RlZFdhbGxwYXBlcik7XG4gICAgICBpZiAoc2VsZWN0ZWRXYWxscGFwZXIgJiYgd2FsbHBhcGVyKSB7XG4gICAgICAgIC8vIGlmIHNlbGVjdGVkV2FsbHBhcGVyIGV4aXN0cyAtIHdlIG92ZXJyaWRlIHdoYXQgbGlnaHQgYW5kIGRhcmsgcHJlZnMgYXJlIHRvIG1hdGNoIHRoYXRcbiAgICAgICAgbGlnaHRXYWxscGFwZXIgPSB3YWxscGFwZXI7XG4gICAgICAgIGRhcmtXYWxscGFwZXIgPSB3YWxscGFwZXI7XG4gICAgICB9XG5cbiAgICAgIC8vIHNvbGlkLWNvbG9yLXBpY2tlci0jMDBkMTAwXG4gICAgICBjb25zdCByZWdleFJHQiA9IC8jKFthLWZBLUYwLTldezZ9KS87XG5cbiAgICAgIC8vIE92ZXJyaWRlIFJlbW90ZSBTZXR0aW5ncyB0byBzZXQgY3VzdG9tIEhFWCBiZyBjb2xvclxuICAgICAgaWYgKHNlbGVjdGVkV2FsbHBhcGVyLmluY2x1ZGVzKFwic29saWQtY29sb3ItcGlja2VyXCIpKSB7XG4gICAgICAgIHdhbGxwYXBlciA9IHtcbiAgICAgICAgICB0aGVtZTogd2FsbHBhcGVyPy50aGVtZSB8fCBcImxpZ2h0XCIsXG4gICAgICAgICAgdGl0bGU6IFwic29saWQtY29sb3ItcGlja2VyXCIsXG4gICAgICAgICAgY2F0ZWdvcnk6IFwic29saWQtY29sb3JzXCIsXG4gICAgICAgICAgc29saWRfY29sb3I6IHNlbGVjdGVkV2FsbHBhcGVyLm1hdGNoKHJlZ2V4UkdCKT8uWzBdLFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3YWxscGFwZXJDb2xvciA9IHdhbGxwYXBlcj8uc29saWRfY29sb3IgfHwgXCJcIjtcblxuICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tbmV3dGFiLXdhbGxwYXBlclwiLFxuICAgICAgICBgdXJsKCR7d2FsbHBhcGVyPy53YWxscGFwZXJVcmwgfHwgXCJcIn0pYFxuICAgICAgKTtcblxuICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICBcIi0tbmV3dGFiLXdhbGxwYXBlci1jb2xvclwiLFxuICAgICAgICB3YWxscGFwZXJDb2xvciB8fCBcInRyYW5zcGFyZW50XCJcbiAgICAgICk7XG5cbiAgICAgIGxldCB3YWxscGFwZXJUaGVtZSA9IFwiXCI7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSBzb2xpZCBjb2xvdXIgc2V0LCBsZXQncyBzZWUgaG93IGRhcmsgaXQgaXMuXG4gICAgICBpZiAod2FsbHBhcGVyQ29sb3IpIHtcbiAgICAgICAgY29uc3QgcmdiQ29sb3JzID0gdGhpcy5nZXRSR0JDb2xvcnMod2FsbHBhcGVyQ29sb3IpO1xuICAgICAgICBjb25zdCBpc0NvbG9yRGFyayA9IHRoaXMuaXNXYWxscGFwZXJDb2xvckRhcmsocmdiQ29sb3JzKTtcbiAgICAgICAgd2FsbHBhcGVyVGhlbWUgPSBpc0NvbG9yRGFyayA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gR3JhYiB0aGUgY29udHJhc3Qgb2YgdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgd2FsbHBhcGVyLlxuICAgICAgICBjb25zdCB7IHRoZW1lIH0gPVxuICAgICAgICAgIHRoaXMuc3RhdGUuY29sb3JNb2RlID09PSBcImxpZ2h0XCIgPyBsaWdodFdhbGxwYXBlciA6IGRhcmtXYWxscGFwZXI7XG5cbiAgICAgICAgaWYgKHRoZW1lKSB7XG4gICAgICAgICAgd2FsbHBhcGVyVGhlbWUgPSB0aGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKHsgd2FsbHBhcGVyVGhlbWUgfSk7XG4gICAgfVxuICB9XG5cbiAgc2hvdWxkU2hvd09NQ0hpZ2hsaWdodChjb21wb25lbnRJZCkge1xuICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gdGhpcy5wcm9wcy5NZXNzYWdlcz8ubWVzc2FnZURhdGE7XG4gICAgaWYgKCFtZXNzYWdlRGF0YSB8fCBPYmplY3Qua2V5cyhtZXNzYWdlRGF0YSkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlRGF0YT8uY29udGVudD8ubWVzc2FnZVR5cGUgPT09IGNvbXBvbmVudElkO1xuICB9XG5cbiAgdG9nZ2xlRG93bmxvYWRIaWdobGlnaHQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4ge1xuICAgICAgY29uc3Qgb3ZlcnJpZGUgPSAhKFxuICAgICAgICBwcmV2U3RhdGUuc2hvd0Rvd25sb2FkSGlnaGxpZ2h0T3ZlcnJpZGUgPz9cbiAgICAgICAgdGhpcy5zaG91bGRTaG93T01DSGlnaGxpZ2h0KFwiRG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodFwiKVxuICAgICAgKTtcblxuICAgICAgaWYgKG92ZXJyaWRlKSB7XG4gICAgICAgIC8vIEVtaXQgYW4gb3BlbiBldmVudCBtYW51YWxseSBzaW5jZSBPTUMgaXNuJ3QgaGFuZGxpbmcgaXRcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5EaXNjb3ZlcnlTdHJlYW1Vc2VyRXZlbnQoe1xuICAgICAgICAgICAgZXZlbnQ6IFwiRkVBVFVSRV9ISUdITElHSFRfT1BFTlwiLFxuICAgICAgICAgICAgc291cmNlOiBcIkZFQVRVUkVfSElHSExJR0hUXCIsXG4gICAgICAgICAgICB2YWx1ZTogeyBmZWF0dXJlOiBcIkZFQVRVUkVfRE9XTkxPQURfTU9CSUxFX1BST01PXCIgfSxcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzaG93RG93bmxvYWRIaWdobGlnaHRPdmVycmlkZTogb3ZlcnJpZGUsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRGlzbWlzc0Rvd25sb2FkSGlnaGxpZ2h0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RG93bmxvYWRIaWdobGlnaHRPdmVycmlkZTogZmFsc2UgfSk7XG4gIH1cblxuICBoYW5kbGVBSVJlcXVlc3QocmVxdWVzdCkge1xuICAgIGlmICghcmVxdWVzdCB8fCAhcmVxdWVzdC50cmltKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBZb3UgY291bGQgZGlzcGF0Y2ggYW4gYWN0aW9uIHRvIGhhbmRsZSB0aGUgQUkgcmVxdWVzdFxuICAgIC8vIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuT25seVRvTWFpbih7XG4gICAgLy8gICB0eXBlOiBhdC5BSV9BR0VOVF9SRVFVRVNULFxuICAgIC8vICAgZGF0YTogeyByZXF1ZXN0OiByZXF1ZXN0LnRyaW0oKSB9XG4gICAgLy8gfSkpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHRleHRhcmVhXG4gICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRleHRjb2wtYWktdGV4dGFyZWFcIik7XG4gICAgaWYgKHRleHRhcmVhKSB7XG4gICAgICB0ZXh0YXJlYS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgZ2V0UkdCQ29sb3JzKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gNykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHIgPSBwYXJzZUludChpbnB1dC5zdWJzdHIoMSwgMiksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoaW5wdXQuc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KGlucHV0LnN1YnN0cig1LCAyKSwgMTYpO1xuXG4gICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgfVxuXG4gIGlzV2FsbHBhcGVyQ29sb3JEYXJrKFtyLCBnLCBiXSkge1xuICAgIHJldHVybiAwLjIxMjUgKiByICsgMC43MTU0ICogZyArIDAuMDcyMSAqIGIgPD0gMTEwO1xuICB9XG5cbiAgc2hvdWxkRGlzcGxheVRvcGljU2VsZWN0aW9uTW9kYWwoKSB7XG4gICAgY29uc3QgcHJlZnMgPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlcztcbiAgICBjb25zdCBwb2NrZXRFbmFibGVkID1cbiAgICAgIHByZWZzW1wiZmVlZHMuc2VjdGlvbi50b3BzdG9yaWVzXCJdICYmIHByZWZzW1wiZmVlZHMuc3lzdGVtLnRvcHN0b3JpZXNcIl07XG4gICAgY29uc3QgdG9waWNTZWxlY3Rpb25PbmJvYXJkaW5nRW5hYmxlZCA9XG4gICAgICBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS50b3BpY1NlbGVjdGlvbi5vbmJvYXJkaW5nLmVuYWJsZWRcIl0gJiZcbiAgICAgIHBvY2tldEVuYWJsZWQ7XG4gICAgY29uc3QgbWF5YmVTaG93TW9kYWwgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5tYXliZURpc3BsYXlcIl07XG4gICAgY29uc3QgZGlzcGxheVRpbWVvdXQgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5kaXNwbGF5VGltZW91dFwiXTtcbiAgICBjb25zdCBsYXN0RGlzcGxheWVkID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcubGFzdERpc3BsYXllZFwiXTtcbiAgICBjb25zdCBkaXNwbGF5Q291bnQgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5kaXNwbGF5Q291bnRcIl07XG5cbiAgICBpZiAoXG4gICAgICAhbWF5YmVTaG93TW9kYWwgfHxcbiAgICAgICFwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS50b3BpY1NlbGVjdGlvbi5lbmFibGVkXCJdIHx8XG4gICAgICAhdG9waWNTZWxlY3Rpb25PbmJvYXJkaW5nRW5hYmxlZFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICBjb25zdCB0aW1lb3V0T2NjdXJlZCA9IG5vdyAtIHBhcnNlRmxvYXQobGFzdERpc3BsYXllZCkgPiBkaXNwbGF5VGltZW91dDtcbiAgICBpZiAoZGlzcGxheUNvdW50IDwgMykge1xuICAgICAgaWYgKGRpc3BsYXlDb3VudCA9PT0gMCB8fCB0aW1lb3V0T2NjdXJlZCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICAgIGFjLkJyb2FkY2FzdFRvQ29udGVudCh7IHR5cGU6IGF0LlRPUElDX1NFTEVDVElPTl9TUE9UTElHSFRfT1BFTiB9KVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFByZWYoXG4gICAgICAgICAgXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5kaXNwbGF5VGltZW91dFwiLFxuICAgICAgICAgIGRheVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50cywgY29tcGxleGl0eVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IEFwcCwgRGlzY292ZXJ5U3RyZWFtIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IGluaXRpYWxpemVkLCBjdXN0b21pemVNZW51VmlzaWJsZSB9ID0gQXBwO1xuICAgIGNvbnN0IHByZWZzID0gcHJvcHMuUHJlZnMudmFsdWVzO1xuXG4gICAgY29uc3QgYWN0aXZlV2FsbHBhcGVyID0gcHJlZnNbYG5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyYF07XG4gICAgY29uc3Qgd2FsbHBhcGVyc0VuYWJsZWQgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMuZW5hYmxlZFwiXTtcbiAgICBjb25zdCB3ZWF0aGVyRW5hYmxlZCA9IHByZWZzLnNob3dXZWF0aGVyO1xuICAgIGNvbnN0IHsgcG9ja2V0Q29uZmlnIH0gPSBwcmVmcztcblxuICAgIGNvbnN0IGlzRGlzY292ZXJ5U3RyZWFtID1cbiAgICAgIHByb3BzLkRpc2NvdmVyeVN0cmVhbS5jb25maWcgJiYgcHJvcHMuRGlzY292ZXJ5U3RyZWFtLmNvbmZpZy5lbmFibGVkO1xuICAgIGxldCBmaWx0ZXJlZFNlY3Rpb25zID0gcHJvcHMuU2VjdGlvbnMuZmlsdGVyKFxuICAgICAgc2VjdGlvbiA9PiBzZWN0aW9uLmlkICE9PSBcInRvcHN0b3JpZXNcIlxuICAgICk7XG5cbiAgICBsZXQgc3BvY01lc3NhZ2VWYXJpYW50ID0gXCJcIjtcbiAgICBpZiAoXG4gICAgICBwcm9wcy5BcHAubG9jYWxlPy5zdGFydHNXaXRoKFwiZW4tXCIpICYmXG4gICAgICBwb2NrZXRDb25maWc/LnNwb2NNZXNzYWdlVmFyaWFudCA9PT0gXCJ2YXJpYW50LWNcIlxuICAgICkge1xuICAgICAgc3BvY01lc3NhZ2VWYXJpYW50ID0gcG9ja2V0Q29uZmlnLnNwb2NNZXNzYWdlVmFyaWFudDtcbiAgICB9XG5cbiAgICBjb25zdCBwb2NrZXRFbmFibGVkID1cbiAgICAgIHByZWZzW1wiZmVlZHMuc2VjdGlvbi50b3BzdG9yaWVzXCJdICYmIHByZWZzW1wiZmVlZHMuc3lzdGVtLnRvcHN0b3JpZXNcIl07XG4gICAgY29uc3Qgbm9TZWN0aW9uc0VuYWJsZWQgPVxuICAgICAgIXByZWZzW1wiZmVlZHMudG9wc2l0ZXNcIl0gJiZcbiAgICAgICFwb2NrZXRFbmFibGVkICYmXG4gICAgICBmaWx0ZXJlZFNlY3Rpb25zLmZpbHRlcihzZWN0aW9uID0+IHNlY3Rpb24uZW5hYmxlZCkubGVuZ3RoID09PSAwO1xuICAgIGNvbnN0IHNlYXJjaEhhbmRvZmZFbmFibGVkID0gcHJlZnNbXCJpbXByb3Zlc2VhcmNoLmhhbmRvZmZUb0F3ZXNvbWViYXJcIl07XG4gICAgY29uc3QgZW5hYmxlZFNlY3Rpb25zID0ge1xuICAgICAgdG9wU2l0ZXNFbmFibGVkOiBwcmVmc1tcImZlZWRzLnRvcHNpdGVzXCJdLFxuICAgICAgcG9ja2V0RW5hYmxlZDogcHJlZnNbXCJmZWVkcy5zZWN0aW9uLnRvcHN0b3JpZXNcIl0sXG4gICAgICBzaG93SW5mZXJyZWRQZXJzb25hbGl6YXRpb25FbmFibGVkOlxuICAgICAgICBwcmVmc1tQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9VU0VSXSxcbiAgICAgIHRvcFNpdGVzUm93c0NvdW50OiBwcmVmcy50b3BTaXRlc1Jvd3MsXG4gICAgICB3ZWF0aGVyRW5hYmxlZDogcHJlZnMuc2hvd1dlYXRoZXIsXG4gICAgICB0cmVuZGluZ1NlYXJjaEVuYWJsZWQ6IHByZWZzW1widHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXSxcbiAgICB9O1xuXG4gICAgY29uc3QgcG9ja2V0UmVnaW9uID0gcHJlZnNbXCJmZWVkcy5zeXN0ZW0udG9wc3Rvcmllc1wiXTtcbiAgICBjb25zdCBtYXlIYXZlU3BvbnNvcmVkU3RvcmllcyA9IHByZWZzW1wic3lzdGVtLnNob3dTcG9uc29yZWRcIl07XG4gICAgY29uc3QgbWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uID1cbiAgICAgIHByZWZzW1BSRUZfSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1NZU1RFTV07XG4gICAgY29uc3QgbWF5SGF2ZVdlYXRoZXIgPSBwcmVmc1tcInN5c3RlbS5zaG93V2VhdGhlclwiXTtcbiAgICBjb25zdCB7IG1heUhhdmVTcG9uc29yZWRUb3BTaXRlcyB9ID0gcHJlZnM7XG5cbiAgICAvLyBXaWRnZXRzIGV4cGVyaW1lbnQgcHJlZiBjaGVja1xuICAgIGNvbnN0IG1heUhhdmVXaWRnZXRzID0gcHJlZnNbXCJ3aWRnZXRzLnN5c3RlbS5lbmFibGVkXCJdO1xuICAgIGNvbnN0IG1heUhhdmVMaXN0c1dpZGdldCA9IHByZWZzW1wid2lkZ2V0cy5zeXN0ZW0ubGlzdHMuZW5hYmxlZFwiXTtcbiAgICBjb25zdCBtYXlIYXZlVGltZXJXaWRnZXQgPSBwcmVmc1tcIndpZGdldHMuc3lzdGVtLmZvY3VzVGltZXIuZW5hYmxlZFwiXTtcblxuICAgIGNvbnN0IGVuYWJsZWRXaWRnZXRzID0ge1xuICAgICAgbGlzdHNFbmFibGVkOiBwcmVmc1tcIndpZGdldHMubGlzdHMuZW5hYmxlZFwiXSxcbiAgICAgIHRpbWVyRW5hYmxlZDogcHJlZnNbXCJ3aWRnZXRzLmZvY3VzVGltZXIuZW5hYmxlZFwiXSxcbiAgICAgIHRyZW5kaW5nU2VhcmNoRW5hYmxlZDogcHJlZnNbXCJ0cmVuZGluZ1NlYXJjaC5lbmFibGVkXCJdLFxuICAgICAgd2VhdGhlckVuYWJsZWQ6IHByZWZzLnNob3dXZWF0aGVyLFxuICAgIH07XG5cbiAgICAvLyBUcmVuZGluZyBTZWFyY2hlcyBleHBlcmltZW50IHByZWYgY2hlY2tcbiAgICBjb25zdCBtYXlIYXZlVHJlbmRpbmdTZWFyY2ggPVxuICAgICAgcHJlZnNbXCJzeXN0ZW0udHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXSAmJlxuICAgICAgcHJlZnNbXCJ0cmVuZGluZ1NlYXJjaC5kZWZhdWx0U2VhcmNoRW5naW5lXCJdLnRvTG93ZXJDYXNlKCkgPT09IFwiZ29vZ2xlXCI7XG5cbiAgICAvLyBNb2JpbGUgRG93bmxvYWQgUHJvbW8gUHJlZiBDaGVja3NcbiAgICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vRW5hYmxlZCA9IHByZWZzW1wibW9iaWxlRG93bmxvYWRNb2RhbC5lbmFibGVkXCJdO1xuICAgIGNvbnN0IG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QUVuYWJsZWQgPVxuICAgICAgcHJlZnNbXCJtb2JpbGVEb3dubG9hZE1vZGFsLnZhcmlhbnQtYVwiXTtcbiAgICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEJFbmFibGVkID1cbiAgICAgIHByZWZzW1wibW9iaWxlRG93bmxvYWRNb2RhbC52YXJpYW50LWJcIl07XG4gICAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRDRW5hYmxlZCA9XG4gICAgICBwcmVmc1tcIm1vYmlsZURvd25sb2FkTW9kYWwudmFyaWFudC1jXCJdO1xuICAgIGNvbnN0IG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QUJvckMgPVxuICAgICAgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRBRW5hYmxlZCB8fFxuICAgICAgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRCRW5hYmxlZCB8fFxuICAgICAgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRDRW5hYmxlZDtcbiAgICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vV3JhcHBlckhlaWdodE1vZGlmaWVyID1cbiAgICAgIHByZWZzW1wid2VhdGhlci5kaXNwbGF5XCJdID09PSBcImRldGFpbGVkXCIgJiZcbiAgICAgIHdlYXRoZXJFbmFibGVkICYmXG4gICAgICBtYXlIYXZlV2VhdGhlclxuICAgICAgICA/IFwiaXMtdGFsbFwiXG4gICAgICAgIDogXCJcIjtcblxuICAgIGNvbnN0IGhhc1RodW1ic1VwRG93bkxheW91dCA9XG4gICAgICBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS50aHVtYnNVcERvd24uc2VhcmNoVG9wc2l0ZXNDb21wYWN0XCJdO1xuICAgIGNvbnN0IGhhc1RodW1ic1VwRG93biA9IHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRodW1ic1VwRG93bi5lbmFibGVkXCJdO1xuICAgIGNvbnN0IHNlY3Rpb25zRW5hYmxlZCA9IHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmVuYWJsZWRcIl07XG4gICAgY29uc3QgdG9waWNMYWJlbHNFbmFibGVkID0gcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNMYWJlbHMuZW5hYmxlZFwiXTtcbiAgICBjb25zdCBzZWN0aW9uc0N1c3RvbWl6ZU1lbnVQYW5lbEVuYWJsZWQgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0uc2VjdGlvbnMuY3VzdG9taXplTWVudVBhbmVsLmVuYWJsZWRcIl07XG4gICAgY29uc3Qgc2VjdGlvbnNQZXJzb25hbGl6YXRpb25FbmFibGVkID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLnBlcnNvbmFsaXphdGlvbi5lbmFibGVkXCJdO1xuXG4gICAgLy8gTG9naWMgdG8gc2hvdyBmb2xsb3cvYmxvY2sgdG9waWMgbWdtdCBwYW5lbCBpbiBDdXN0b21pemUgcGFuZWxcbiAgICBjb25zdCBtYXlIYXZlUGVyc29uYWxpemVkVG9waWNTZWN0aW9ucyA9XG4gICAgICBzZWN0aW9uc1BlcnNvbmFsaXphdGlvbkVuYWJsZWQgJiZcbiAgICAgIHRvcGljTGFiZWxzRW5hYmxlZCAmJlxuICAgICAgc2VjdGlvbnNFbmFibGVkICYmXG4gICAgICBzZWN0aW9uc0N1c3RvbWl6ZU1lbnVQYW5lbEVuYWJsZWQgJiZcbiAgICAgIERpc2NvdmVyeVN0cmVhbS5mZWVkcy5sb2FkZWQ7XG5cbiAgICBjb25zdCBmZWF0dXJlQ2xhc3NOYW1lID0gW1xuICAgICAgbW9iaWxlRG93bmxvYWRQcm9tb0VuYWJsZWQgJiZcbiAgICAgICAgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRBQm9yQyAmJlxuICAgICAgICBcImhhcy1tb2JpbGUtZG93bmxvYWQtcHJvbW9cIiwgLy8gTW9iaWxlIGRvd25sb2FkIHByb21vIG1vZGFsIGlzIGVuYWJsZWQvdmlzaWJsZVxuICAgICAgd2VhdGhlckVuYWJsZWQgJiYgbWF5SGF2ZVdlYXRoZXIgJiYgXCJoYXMtd2VhdGhlclwiLCAvLyBXZWF0aGVyIHdpZGdldCBpcyBlbmFibGVkL3Zpc2libGVcbiAgICAgIHByZWZzLnNob3dTZWFyY2ggPyBcImhhcy1zZWFyY2hcIiA6IFwibm8tc2VhcmNoXCIsXG4gICAgICAvLyBsYXlvdXRzVmFyaWFudEFFbmFibGVkID8gXCJsYXlvdXQtdmFyaWFudC1hXCIgOiBcIlwiLCAvLyBMYXlvdXQgZXhwZXJpbWVudCB2YXJpYW50IEFcbiAgICAgIC8vIGxheW91dHNWYXJpYW50QkVuYWJsZWQgPyBcImxheW91dC12YXJpYW50LWJcIiA6IFwiXCIsIC8vIExheW91dCBleHBlcmltZW50IHZhcmlhbnQgQlxuICAgICAgcG9ja2V0RW5hYmxlZCA/IFwiaGFzLXJlY29tbWVuZGVkLXN0b3JpZXNcIiA6IFwibm8tcmVjb21tZW5kZWQtc3Rvcmllc1wiLFxuICAgICAgc2VjdGlvbnNFbmFibGVkID8gXCJoYXMtc2VjdGlvbnMtZ3JpZFwiIDogXCJcIixcbiAgICBdXG4gICAgICAuZmlsdGVyKHYgPT4gdilcbiAgICAgIC5qb2luKFwiIFwiKTtcblxuICAgIGNvbnN0IG91dGVyQ2xhc3NOYW1lID0gW1xuICAgICAgXCJvdXRlci13cmFwcGVyXCIsXG4gICAgICBpc0Rpc2NvdmVyeVN0cmVhbSAmJiBwb2NrZXRFbmFibGVkICYmIFwiZHMtb3V0ZXItd3JhcHBlci1zZWFyY2gtYWxpZ25tZW50XCIsXG4gICAgICBpc0Rpc2NvdmVyeVN0cmVhbSAmJiBcImRzLW91dGVyLXdyYXBwZXItYnJlYWtwb2ludC1vdmVycmlkZVwiLFxuICAgICAgcHJlZnMuc2hvd1NlYXJjaCAmJlxuICAgICAgICB0aGlzLnN0YXRlLmZpeGVkU2VhcmNoICYmXG4gICAgICAgICFub1NlY3Rpb25zRW5hYmxlZCAmJlxuICAgICAgICBcImZpeGVkLXNlYXJjaFwiLFxuICAgICAgcHJlZnMuc2hvd1NlYXJjaCAmJiBub1NlY3Rpb25zRW5hYmxlZCAmJiBcIm9ubHktc2VhcmNoXCIsXG4gICAgICBwcmVmc1tcImZlZWRzLnRvcHNpdGVzXCJdICYmXG4gICAgICAgICFwb2NrZXRFbmFibGVkICYmXG4gICAgICAgICFwcmVmcy5zaG93U2VhcmNoICYmXG4gICAgICAgIFwib25seS10b3BzaXRlc1wiLFxuICAgICAgbm9TZWN0aW9uc0VuYWJsZWQgJiYgXCJuby1zZWN0aW9uc1wiLFxuICAgICAgcHJlZnNbXCJsb2dvd29yZG1hcmsuYWx3YXlzVmlzaWJsZVwiXSAmJiBcInZpc2libGUtbG9nb1wiLFxuICAgICAgaGFzVGh1bWJzVXBEb3duTGF5b3V0ICYmIGhhc1RodW1ic1VwRG93biAmJiBcInRodW1icy11aS1jb21wYWN0XCIsXG4gICAgXVxuICAgICAgLmZpbHRlcih2ID0+IHYpXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgaWYgKHdhbGxwYXBlcnNFbmFibGVkKSB7XG4gICAgICAvLyBBZGQgaGVscGVyIGNsYXNzIHRvIGJvZHkgaWYgdXNlciBoYXMgYSB3YWxscGFwZXIgc2VsZWN0ZWRcbiAgICAgIGlmICh0aGlzLnN0YXRlLndhbGxwYXBlclRoZW1lID09PSBcImxpZ2h0XCIpIHtcbiAgICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsaWdodFdhbGxwYXBlclwiKTtcbiAgICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJkYXJrV2FsbHBhcGVyXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS53YWxscGFwZXJUaGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LmNsYXNzTGlzdC5hZGQoXCJkYXJrV2FsbHBhcGVyXCIpO1xuICAgICAgICBnbG9iYWwuZG9jdW1lbnQ/LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0V2FsbHBhcGVyXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIHN0YXRlLnNob3dEb3dubG9hZEhpZ2hsaWdodE92ZXJyaWRlIGhhcyB2YWx1ZSwgbGV0IGl0IG92ZXJyaWRlIHRoZSBsb2dpY1xuICAgIC8vIE90aGVyd2lzZSwgZGVmZXIgdG8gT01DIG1lc3NhZ2UgZGlzcGxheSBsb2dpY1xuICAgIGNvbnN0IHNob3VsZFNob3dEb3dubG9hZEhpZ2hsaWdodCA9XG4gICAgICB0aGlzLnN0YXRlLnNob3dEb3dubG9hZEhpZ2hsaWdodE92ZXJyaWRlID8/XG4gICAgICB0aGlzLnNob3VsZFNob3dPTUNIaWdobGlnaHQoXCJEb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0XCIpO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2Ugc2hvdWxkIHNob3cgdGhlIHNpbXBsaWZpZWQgQUkgQWdlbnQgaW50ZXJmYWNlXG4gICAgY29uc3Qgc2hvd1NpbXBsaWZpZWRJbnRlcmZhY2UgPSB0cnVlOyAvLyBBbHdheXMgc2hvdyBzaW1wbGlmaWVkIGludGVyZmFjZSBmb3IgQ29udGV4dGNvbFxuXG4gICAgaWYgKHNob3dTaW1wbGlmaWVkSW50ZXJmYWNlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29udGV4dGNvbEFJSW50ZXJmYWNlXG4gICAgICAgICAgd2FsbHBhcGVyc0VuYWJsZWQ9e3dhbGxwYXBlcnNFbmFibGVkfVxuICAgICAgICAgIHJlbmRlcldhbGxwYXBlckF0dHJpYnV0aW9uPXt0aGlzLnJlbmRlcldhbGxwYXBlckF0dHJpYnV0aW9ufVxuICAgICAgICAgIG9uQUlSZXF1ZXN0PXt0aGlzLmhhbmRsZUFJUmVxdWVzdH1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtmZWF0dXJlQ2xhc3NOYW1lfT5cbiAgICAgICAgey8qIEZsb2F0aW5nIG1lbnUgZm9yIGN1c3RvbWl6ZSBtZW51IHRvZ2dsZSAqL31cbiAgICAgICAgPG1lbnUgY2xhc3NOYW1lPVwicGVyc29uYWxpemVCdXR0b25XcmFwcGVyXCI+XG4gICAgICAgICAgPEN1c3RvbWl6ZU1lbnVcbiAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VDdXN0b21pemF0aW9uTWVudX1cbiAgICAgICAgICAgIG9uT3Blbj17dGhpcy5vcGVuQ3VzdG9taXphdGlvbk1lbnV9XG4gICAgICAgICAgICBvcGVuUHJlZmVyZW5jZXM9e3RoaXMub3BlblByZWZlcmVuY2VzfVxuICAgICAgICAgICAgc2V0UHJlZj17dGhpcy5zZXRQcmVmfVxuICAgICAgICAgICAgZW5hYmxlZFNlY3Rpb25zPXtlbmFibGVkU2VjdGlvbnN9XG4gICAgICAgICAgICBlbmFibGVkV2lkZ2V0cz17ZW5hYmxlZFdpZGdldHN9XG4gICAgICAgICAgICB3YWxscGFwZXJzRW5hYmxlZD17d2FsbHBhcGVyc0VuYWJsZWR9XG4gICAgICAgICAgICBhY3RpdmVXYWxscGFwZXI9e2FjdGl2ZVdhbGxwYXBlcn1cbiAgICAgICAgICAgIHBvY2tldFJlZ2lvbj17cG9ja2V0UmVnaW9ufVxuICAgICAgICAgICAgbWF5SGF2ZVRvcGljU2VjdGlvbnM9e21heUhhdmVQZXJzb25hbGl6ZWRUb3BpY1NlY3Rpb25zfVxuICAgICAgICAgICAgbWF5SGF2ZVNwb25zb3JlZFRvcFNpdGVzPXttYXlIYXZlU3BvbnNvcmVkVG9wU2l0ZXN9XG4gICAgICAgICAgICBtYXlIYXZlU3BvbnNvcmVkU3Rvcmllcz17bWF5SGF2ZVNwb25zb3JlZFN0b3JpZXN9XG4gICAgICAgICAgICBtYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb249e21heUhhdmVJbmZlcnJlZFBlcnNvbmFsaXphdGlvbn1cbiAgICAgICAgICAgIG1heUhhdmVXZWF0aGVyPXttYXlIYXZlV2VhdGhlcn1cbiAgICAgICAgICAgIG1heUhhdmVUcmVuZGluZ1NlYXJjaD17bWF5SGF2ZVRyZW5kaW5nU2VhcmNofVxuICAgICAgICAgICAgbWF5SGF2ZVdpZGdldHM9e21heUhhdmVXaWRnZXRzfVxuICAgICAgICAgICAgbWF5SGF2ZVRpbWVyV2lkZ2V0PXttYXlIYXZlVGltZXJXaWRnZXR9XG4gICAgICAgICAgICBtYXlIYXZlTGlzdHNXaWRnZXQ9e21heUhhdmVMaXN0c1dpZGdldH1cbiAgICAgICAgICAgIHNwb2NNZXNzYWdlVmFyaWFudD17c3BvY01lc3NhZ2VWYXJpYW50fVxuICAgICAgICAgICAgc2hvd2luZz17Y3VzdG9taXplTWVudVZpc2libGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGhpcy5zaG91bGRTaG93T01DSGlnaGxpZ2h0KFwiQ3VzdG9tV2FsbHBhcGVySGlnaGxpZ2h0XCIpICYmIChcbiAgICAgICAgICAgIDxNZXNzYWdlV3JhcHBlciBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH0+XG4gICAgICAgICAgICAgIDxXYWxscGFwZXJGZWF0dXJlSGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJpbnNldC1ibG9jay1zdGFydCBpbnNldC1pbmxpbmUtc3RhcnRcIlxuICAgICAgICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9NZXNzYWdlV3JhcHBlcj5cbiAgICAgICAgICApfVxuICAgICAgICA8L21lbnU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlcldyYXBwZXJcIj5cbiAgICAgICAgICB7d2VhdGhlckVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgIDxXZWF0aGVyIC8+XG4gICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2Btb2JpbGVEb3dubG9hZFByb21vV3JhcHBlciAke21vYmlsZURvd25sb2FkUHJvbW9XcmFwcGVySGVpZ2h0TW9kaWZpZXJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgIHttb2JpbGVEb3dubG9hZFByb21vRW5hYmxlZCAmJiBtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEFCb3JDICYmIChcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICA8RG93bmxvYWRNb2RhbFRvZ2dsZVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtzaG91bGRTaG93RG93bmxvYWRIaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVEb3dubG9hZEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3Nob3VsZFNob3dEb3dubG9hZEhpZ2hsaWdodCAmJiAoXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2VXcmFwcGVyXG4gICAgICAgICAgICAgICAgICBoaWRkZW5PdmVycmlkZT17c2hvdWxkU2hvd0Rvd25sb2FkSGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXt0aGlzLmhhbmRsZURpc21pc3NEb3dubG9hZEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPXtgaW5zZXQtaW5saW5lLXN0YXJ0IGluc2V0LWJsb2NrLWVuZGB9XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L01lc3NhZ2VXcmFwcGVyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cywganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5jbG9zZUN1c3RvbWl6YXRpb25NZW51fT5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJuZXd0YWItbWFpblwiIHN0eWxlPXt0aGlzLnN0YXRlLmZpeGVkTmF2U3R5bGV9PlxuICAgICAgICAgICAge3ByZWZzLnNob3dTZWFyY2ggJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vbi1jb2xsYXBzaWJsZS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgICAgICA8U2VhcmNoXG4gICAgICAgICAgICAgICAgICAgIHNob3dMb2dvPXtcbiAgICAgICAgICAgICAgICAgICAgICBub1NlY3Rpb25zRW5hYmxlZCB8fCBwcmVmc1tcImxvZ293b3JkbWFyay5hbHdheXNWaXNpYmxlXCJdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFuZG9mZkVuYWJsZWQ9e3NlYXJjaEhhbmRvZmZFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHMuU2VhcmNofVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHsvKiBCdWcgMTkxNDA1NTogU2hvdyBsb2dvIHJlZ2FyZGxlc3MgaWYgc2VhcmNoIGlzIGVuYWJsZWQgKi99XG4gICAgICAgICAgICB7LyogeyFwcmVmcy5zaG93U2VhcmNoICYmICFub1NlY3Rpb25zRW5hYmxlZCAmJiA8TG9nbyAvPn0gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJvZHktd3JhcHBlciR7aW5pdGlhbGl6ZWQgPyBcIiBvblwiIDogXCJcIn1gfT5cbiAgICAgICAgICAgICAgey8qIHtpc0Rpc2NvdmVyeVN0cmVhbSA/IChcbiAgICAgICAgICAgICAgICA8RXJyb3JCb3VuZGFyeSBjbGFzc05hbWU9XCJib3JkZXJsZXNzLWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICA8RGlzY292ZXJ5U3RyZWFtQmFzZVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e3Byb3BzLkFwcC5sb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgIG1heUhhdmVTcG9uc29yZWRTdG9yaWVzPXttYXlIYXZlU3BvbnNvcmVkU3Rvcmllc31cbiAgICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlVGltZXN0YW1wPXt0aGlzLnN0YXRlLmZpcnN0VmlzaWJsZVRpbWVzdGFtcH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxTZWN0aW9ucyAvPlxuICAgICAgICAgICAgICApfSAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPENvbmZpcm1EaWFsb2cgLz5cbiAgICAgICAgICAgIHt3YWxscGFwZXJzRW5hYmxlZCAmJiB0aGlzLnJlbmRlcldhbGxwYXBlckF0dHJpYnV0aW9uKCl9XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICAgIDxhc2lkZT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLk5vdGlmaWNhdGlvbnM/LnNob3dOb3RpZmljYXRpb25zICYmIChcbiAgICAgICAgICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbnMgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9IC8+XG4gICAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgICB7LyogT25seSBzaG93IHRoZSBtb2RhbCBvbiBjdXJyZW50bHkgdmlzaWJsZSBwYWdlcyAobm90IHByZWxvYWRlZCkgKi99XG4gICAgICAgICAgey8qIHttYXlTaG93VG9waWNTZWxlY3Rpb24gJiYgcG9ja2V0RW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8VG9waWNTZWxlY3Rpb24gc3VwcG9ydFVybD17c3VwcG9ydFVybH0gLz5cbiAgICAgICAgICApfSAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkJhc2VDb250ZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgZG9jdW1lbnQ6IGdsb2JhbC5kb2N1bWVudCxcbn07XG5cbmV4cG9ydCBjb25zdCBCYXNlID0gY29ubmVjdChzdGF0ZSA9PiAoe1xuICBBcHA6IHN0YXRlLkFwcCxcbiAgUHJlZnM6IHN0YXRlLlByZWZzLFxuICBTZWN0aW9uczogc3RhdGUuU2VjdGlvbnMsXG4gIERpc2NvdmVyeVN0cmVhbTogc3RhdGUuRGlzY292ZXJ5U3RyZWFtLFxuICBNZXNzYWdlczogc3RhdGUuTWVzc2FnZXMsXG4gIE5vdGlmaWNhdGlvbnM6IHN0YXRlLk5vdGlmaWNhdGlvbnMsXG4gIFNlYXJjaDogc3RhdGUuU2VhcmNoLFxuICBXYWxscGFwZXJzOiBzdGF0ZS5XYWxscGFwZXJzLFxuICBXZWF0aGVyOiBzdGF0ZS5XZWF0aGVyLFxufSkpKF9CYXNlKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmxldCB1c2FibGVQZXJmT2JqID0gd2luZG93LnBlcmZvcm1hbmNlO1xuXG5leHBvcnQgZnVuY3Rpb24gX1BlcmZTZXJ2aWNlKG9wdGlvbnMpIHtcbiAgLy8gRm9yIHRlc3RpbmcsIHNvIHRoYXQgd2UgY2FuIHVzZSBhIGZha2UgV2luZG93LnBlcmZvcm1hbmNlIG9iamVjdCB3aXRoXG4gIC8vIGtub3duIHN0YXRlLlxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnBlcmZvcm1hbmNlT2JqKSB7XG4gICAgdGhpcy5fcGVyZiA9IG9wdGlvbnMucGVyZm9ybWFuY2VPYmo7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5fcGVyZiA9IHVzYWJsZVBlcmZPYmo7XG4gIH1cbn1cblxuX1BlcmZTZXJ2aWNlLnByb3RvdHlwZSA9IHtcbiAgLyoqXG4gICAqIENhbGxzIHRoZSB1bmRlcmx5aW5nIG1hcmsoKSBtZXRob2Qgb24gdGhlIGFwcHJvcHJpYXRlIFdpbmRvdy5wZXJmb3JtYW5jZVxuICAgKiBvYmplY3QgdG8gYWRkIGEgbWFyayB3aXRoIHRoZSBnaXZlbiBuYW1lIHRvIHRoZSBhcHByb3ByaWF0ZSBwZXJmb3JtYW5jZVxuICAgKiB0aW1lbGluZS5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBuYW1lICB0aGUgbmFtZSB0byBnaXZlIHRoZSBjdXJyZW50IG1hcmtcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG1hcms6IGZ1bmN0aW9uIG1hcmsoc3RyKSB7XG4gICAgdGhpcy5fcGVyZi5tYXJrKHN0cik7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxzIHRoZSB1bmRlcmx5aW5nIGdldEVudHJpZXNCeU5hbWUgb24gdGhlIGFwcHJvcHJpYXRlIFdpbmRvdy5wZXJmb3JtYW5jZVxuICAgKiBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUgZWcgXCJtYXJrXCJcbiAgICogQHJldHVybiB7QXJyYXl9ICAgICAgIFBlcmZvcm1hbmNlKiBvYmplY3RzXG4gICAqL1xuICBnZXRFbnRyaWVzQnlOYW1lOiBmdW5jdGlvbiBnZXRFbnRyaWVzQnlOYW1lKGVudHJ5TmFtZSwgdHlwZSkge1xuICAgIHJldHVybiB0aGlzLl9wZXJmLmdldEVudHJpZXNCeU5hbWUoZW50cnlOYW1lLCB0eXBlKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHRpbWVPcmlnaW4gcHJvcGVydHkgZnJvbSB0aGUgYXBwcm9wcmlhdGUgcGVyZm9ybWFuY2Ugb2JqZWN0LlxuICAgKiBVc2VkIHRvIGVuc3VyZSB0aGF0IHRpbWVzdGFtcHMgZnJvbSB0aGUgYWRkLW9uIGNvZGUgYW5kIHRoZSBjb250ZW50IGNvZGVcbiAgICogYXJlIGNvbXBhcmFibGUuXG4gICAqXG4gICAqIEBub3RlIElmIHRoaXMgaXMgY2FsbGVkIGZyb20gYSBjb250ZXh0IHdpdGhvdXQgYSB3aW5kb3dcbiAgICogKGVnIGEgSlNNIGluIGNocm9tZSksIGl0IHdpbGwgcmV0dXJuIHRoZSB0aW1lT3JpZ2luIG9mIHRoZSBYVUwgaGlkZGVuXG4gICAqIHdpbmRvdywgd2hpY2ggYXBwZWFycyB0byBiZSB0aGUgZmlyc3QgY3JlYXRlZCB3aW5kb3cgKGFuZCB0aHVzXG4gICAqIHRpbWVPcmlnaW4pIGluIHRoZSBicm93c2VyLiAgTm90ZSBhbHNvLCBob3dldmVyLCB0aGVyZSBpcyBhbHNvIGEgcHJpdmF0ZVxuICAgKiBoaWRkZW4gd2luZG93LCBwcmVzdW1hYmx5IGZvciBwcml2YXRlIGJyb3dzaW5nLCB3aGljaCBhcHBlYXJzIHRvIGJlXG4gICAqIGNyZWF0ZWQgZHluYW1pY2FsbHkgbGF0ZXIuICBFeGFjdGx5IGhvdy93aGVuIHRoYXQgc2hvd3MgdXAgbmVlZHMgdG8gYmVcbiAgICogaW52ZXN0aWdhdGVkLlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IEEgZG91YmxlIG9mIG1pbGxpc2Vjb25kcyB3aXRoIGEgcHJlY2lzaW9uIG9mIDAuNXVzLlxuICAgKi9cbiAgZ2V0IHRpbWVPcmlnaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmYudGltZU9yaWdpbjtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgXCJhYnNvbHV0ZVwiIHZlcnNpb24gb2YgcGVyZm9ybWFuY2Uubm93KCksIGkuZS4gb25lIHRoYXRcbiAgICogc2hvdWxkIChbYnVnIDE0MDE0MDZdKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE0MDE0MDYpXG4gICAqIGJlIGNvbXBhcmFibGUgYWNyb3NzIGJvdGggY2hyb21lIGFuZCBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBhYnNOb3c6IGZ1bmN0aW9uIGFic05vdygpIHtcbiAgICByZXR1cm4gdGhpcy50aW1lT3JpZ2luICsgdGhpcy5fcGVyZi5ub3coKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyByZXR1cm5zIHRoZSBhYnNvbHV0ZSBzdGFydFRpbWUgZnJvbSB0aGUgbW9zdCByZWNlbnQgcGVyZm9ybWFuY2UubWFyaygpXG4gICAqIHdpdGggdGhlIGdpdmVuIG5hbWUuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgdGhlIG5hbWUgdG8gbG9va3VwIHRoZSBzdGFydCB0aW1lIGZvclxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9ICAgICAgIHRoZSByZXR1cm5lZCBzdGFydCB0aW1lLCBhcyBhIERPTUhpZ2hSZXNUaW1lU3RhbXBcbiAgICpcbiAgICogQHRocm93cyB7RXJyb3J9ICAgICAgICBcIk5vIE1hcmtzIHdpdGggdGhlIG5hbWUgLi4uXCIgaWYgbm9uZSBhcmUgYXZhaWxhYmxlXG4gICAqXG4gICAqIEBub3RlIEFsd2F5cyBzdXJyb3VuZCBjYWxscyB0byB0aGlzIGJ5IHRyeS9jYXRjaC4gIE90aGVyd2lzZSB5b3VyIGNvZGVcbiAgICogbWF5IGZhaWwgd2hlbiB0aGUgYHByaXZhY3kucmVzaXN0RmluZ2VycHJpbnRpbmdgIHByZWYgaXMgdHJ1ZS4gIFdoZW5cbiAgICogdGhpcyBwcmVmIGlzIHNldCwgYWxsIGF0dGVtcHRzIHRvIGdldCBtYXJrcyB3aWxsIGxpa2VseSBmYWlsLCB3aGljaCB3aWxsXG4gICAqIGNhdXNlIHRoaXMgbWV0aG9kIHRvIHRocm93LlxuICAgKlxuICAgKiBTZWUgW2J1ZyAxMzY5MzAzXShodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY5MzAzKVxuICAgKiBmb3IgbW9yZSBpbmZvLlxuICAgKi9cbiAgZ2V0TW9zdFJlY2VudEFic01hcmtTdGFydEJ5TmFtZShlbnRyeU5hbWUpIHtcbiAgICBsZXQgZW50cmllcyA9IHRoaXMuZ2V0RW50cmllc0J5TmFtZShlbnRyeU5hbWUsIFwibWFya1wiKTtcblxuICAgIGlmICghZW50cmllcy5sZW5ndGgpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gbWFya3Mgd2l0aCB0aGUgbmFtZSAke2VudHJ5TmFtZX1gKTtcbiAgICB9XG5cbiAgICBsZXQgbW9zdFJlY2VudEVudHJ5ID0gZW50cmllc1tlbnRyaWVzLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiB0aGlzLl9wZXJmLnRpbWVPcmlnaW4gKyBtb3N0UmVjZW50RW50cnkuc3RhcnRUaW1lO1xuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmZTZXJ2aWNlID0gbmV3IF9QZXJmU2VydmljZSgpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHtcbiAgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsXG4gIGFjdGlvblR5cGVzIGFzIGF0LFxufSBmcm9tIFwiLi4vLi4vY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBwZXJmU2VydmljZSBhcyBwZXJmU3ZjIH0gZnJvbSBcIi4vcGVyZi1zZXJ2aWNlLm1qc1wiO1xuXG5jb25zdCBWSVNJQkxFID0gXCJ2aXNpYmxlXCI7XG5jb25zdCBWSVNJQklMSVRZX0NIQU5HRV9FVkVOVCA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xuXG5leHBvcnQgY2xhc3MgRGV0ZWN0VXNlclNlc3Npb25TdGFydCB7XG4gIGNvbnN0cnVjdG9yKHN0b3JlLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLl9zdG9yZSA9IHN0b3JlO1xuICAgIC8vIE92ZXJyaWRlcyBmb3IgdGVzdGluZ1xuICAgIHRoaXMuZG9jdW1lbnQgPSBvcHRpb25zLmRvY3VtZW50IHx8IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4gICAgdGhpcy5fcGVyZlNlcnZpY2UgPSBvcHRpb25zLnBlcmZTZXJ2aWNlIHx8IHBlcmZTdmM7XG4gICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlID0gdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogc2VuZEV2ZW50T3JBZGRMaXN0ZW5lciAtIE5vdGlmeSBpbW1lZGlhdGVseSBpZiB0aGUgcGFnZSBpcyBhbHJlYWR5IHZpc2libGUsXG4gICAqICAgICAgICAgICAgICAgICAgICBvciBlbHNlIHNldCB1cCBhIGxpc3RlbmVyIGZvciB3aGVuIHZpc2liaWxpdHkgY2hhbmdlcy5cbiAgICogICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgbmVlZGVkIGZvciBhY2N1cmF0ZSBzZXNzaW9uIHRyYWNraW5nIGZvciB0ZWxlbWV0cnksXG4gICAqICAgICAgICAgICAgICAgICAgICBiZWNhdXNlIHRhYnMgYXJlIHByZS1sb2FkZWQuXG4gICAqL1xuICBzZW5kRXZlbnRPckFkZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLmRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gVklTSUJMRSkge1xuICAgICAgLy8gSWYgdGhlIGRvY3VtZW50IGlzIGFscmVhZHkgdmlzaWJsZSwgdG8gdGhlIHVzZXIsIHNlbmQgYSBub3RpZmljYXRpb25cbiAgICAgIC8vIGltbWVkaWF0ZWx5IHRoYXQgYSBzZXNzaW9uIGhhcyBzdGFydGVkLlxuICAgICAgdGhpcy5fc2VuZEV2ZW50KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBkb2N1bWVudCBpcyBub3QgdmlzaWJsZSwgbGlzdGVuIGZvciB3aGVuIGl0IGRvZXMgYmVjb21lIHZpc2libGUuXG4gICAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9zZW5kRXZlbnQgLSBTZW5kcyBhIG1lc3NhZ2UgdG8gdGhlIG1haW4gcHJvY2VzcyB0byBpbmRpY2F0ZSB0aGUgY3VycmVudFxuICAgKiAgICAgICAgICAgICAgdGFiIGlzIG5vdyB2aXNpYmxlIHRvIHRoZSB1c2VyLCBpbmNsdWRlcyB0aGVcbiAgICogICAgICAgICAgICAgIHZpc2liaWxpdHlfZXZlbnRfcmN2ZF90cyB0aW1lIGluIG1zIGZyb20gdGhlIFVOSVggZXBvY2guXG4gICAqL1xuICBfc2VuZEV2ZW50KCkge1xuICAgIHRoaXMuX3BlcmZTZXJ2aWNlLm1hcmsoXCJ2aXNpYmlsaXR5X2V2ZW50X3JjdmRfdHNcIik7XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHZpc2liaWxpdHlfZXZlbnRfcmN2ZF90cyA9XG4gICAgICAgIHRoaXMuX3BlcmZTZXJ2aWNlLmdldE1vc3RSZWNlbnRBYnNNYXJrU3RhcnRCeU5hbWUoXG4gICAgICAgICAgXCJ2aXNpYmlsaXR5X2V2ZW50X3JjdmRfdHNcIlxuICAgICAgICApO1xuXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuU0FWRV9TRVNTSU9OX1BFUkZfREFUQSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5X2V2ZW50X3JjdmRfdHMsXG4gICAgICAgICAgICB3aW5kb3dfaW5uZXJfd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICAgICAgd2luZG93X2lubmVyX2hlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAvLyBJZiB0aGlzIGZhaWxlZCwgaXQncyBsaWtlbHkgYmVjYXVzZSB0aGUgYHByaXZhY3kucmVzaXN0RmluZ2VycHJpbnRpbmdgXG4gICAgICAvLyBwcmVmIGlzIHRydWUuICBXZSBzaG91bGQgYXQgbGVhc3Qgbm90IGJsb3cgdXAuXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIF9vblZpc2liaWxpdHlDaGFuZ2UgLSBJZiB0aGUgdmlzaWJpbGl0eSBoYXMgY2hhbmdlZCB0byB2aXNpYmxlLCBzZW5kcyBhIG5vdGlmaWNhdGlvblxuICAgKiAgICAgICAgICAgICAgICAgICAgICBhbmQgcmVtb3ZlcyB0aGUgZXZlbnQgbGlzdGVuZXIuIFRoaXMgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIG9uY2UgcGVyIHRhYi5cbiAgICovXG4gIF9vblZpc2liaWxpdHlDaGFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBWSVNJQkxFKSB7XG4gICAgICB0aGlzLl9zZW5kRXZlbnQoKTtcbiAgICAgIHRoaXMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBSZWR1eDsiLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKiBlc2xpbnQtZW52IG1vemlsbGEvcmVtb3RlLXBhZ2UgKi9cblxuaW1wb3J0IHtcbiAgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsXG4gIGFjdGlvblR5cGVzIGFzIGF0LFxuICBhY3Rpb25VdGlscyBhcyBhdSxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9BY3Rpb25zLm1qc1wiO1xuLy8gV2UgZGlzYWJsZSBpbXBvcnQgY2hlY2tpbmcgaGVyZSBhcyByZWR1eCBpcyBpbnN0YWxsZWQgdmlhIHRoZSBucG0gcGFja2FnZXNcbi8vIGF0IHRoZSBuZXd0YWIgbGV2ZWwsIHJhdGhlciB0aGFuIGluIHRoZSB0b3AtbGV2ZWwgcGFja2FnZS5qc29uLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnJlc29sdmVkXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcblxuZXhwb3J0IGNvbnN0IE1FUkdFX1NUT1JFX0FDVElPTiA9IFwiTkVXX1RBQl9JTklUSUFMX1NUQVRFXCI7XG5leHBvcnQgY29uc3QgT1VUR09JTkdfTUVTU0FHRV9OQU1FID0gXCJBY3Rpdml0eVN0cmVhbTpDb250ZW50VG9NYWluXCI7XG5leHBvcnQgY29uc3QgSU5DT01JTkdfTUVTU0FHRV9OQU1FID0gXCJBY3Rpdml0eVN0cmVhbTpNYWluVG9Db250ZW50XCI7XG5cbi8qKlxuICogQSBoaWdoZXItb3JkZXIgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIHJlZHVjZXIgdGhhdCwgb24gTUVSR0VfU1RPUkUgYWN0aW9uLFxuICogd2lsbCByZXR1cm4gdGhlIGFjdGlvbi5kYXRhIG9iamVjdCBtZXJnZWQgaW50byB0aGUgcHJldmlvdXMgc3RhdGUuXG4gKlxuICogRm9yIGFsbCBvdGhlciBhY3Rpb25zLCBpdCBtZXJlbHkgY2FsbHMgbWFpblJlZHVjZXIuXG4gKlxuICogQmVjYXVzZSB3ZSB3YW50IHRoaXMgdG8gbWVyZ2UgdGhlIGVudGlyZSBzdGF0ZSBvYmplY3QsIGl0J3Mgd3JpdHRlbiBhcyBhXG4gKiBoaWdoZXIgb3JkZXIgZnVuY3Rpb24gd2hpY2ggdGFrZXMgdGhlIG1haW4gcmVkdWNlciAoaXRzZWxmIG9mdGVuIGEgY2FsbCB0b1xuICogY29tYmluZVJlZHVjZXJzKSBhcyBhIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gbWFpblJlZHVjZXIgcmVkdWNlciB0byBjYWxsIGlmIGFjdGlvbiAhPSBNRVJHRV9TVE9SRV9BQ1RJT05cbiAqIEByZXR1cm4ge2Z1bmN0aW9ufSAgICAgICAgICAgICBhIHJlZHVjZXIgdGhhdCwgb24gTUVSR0VfU1RPUkVfQUNUSU9OIGFjdGlvbixcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWxsIHJldHVybiB0aGUgYWN0aW9uLmRhdGEgb2JqZWN0IG1lcmdlZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludG8gdGhlIHByZXZpb3VzIHN0YXRlLCBhbmQgdGhlIHJlc3VsdFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9mIGNhbGxpbmcgbWFpblJlZHVjZXIgb3RoZXJ3aXNlLlxuICovXG5mdW5jdGlvbiBtZXJnZVN0YXRlUmVkdWNlcihtYWluUmVkdWNlcikge1xuICByZXR1cm4gKHByZXZTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBNRVJHRV9TVE9SRV9BQ1RJT04pIHtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgLi4uYWN0aW9uLmRhdGEgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWFpblJlZHVjZXIocHJldlN0YXRlLCBhY3Rpb24pO1xuICB9O1xufVxuXG4vKipcbiAqIG1lc3NhZ2VNaWRkbGV3YXJlIC0gTWlkZGxld2FyZSB0aGF0IGxvb2tzIGZvciBTZW50VG9NYWluIHR5cGUgYWN0aW9ucywgYW5kIHNlbmRzIHRoZW0gaWYgbmVjZXNzYXJ5XG4gKi9cbmNvbnN0IG1lc3NhZ2VNaWRkbGV3YXJlID0gKCkgPT4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICBjb25zdCBza2lwTG9jYWwgPSBhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5za2lwTG9jYWw7XG4gIGlmIChhdS5pc1NlbmRUb01haW4oYWN0aW9uKSkge1xuICAgIFJQTVNlbmRBc3luY01lc3NhZ2UoT1VUR09JTkdfTUVTU0FHRV9OQU1FLCBhY3Rpb24pO1xuICB9XG4gIGlmICghc2tpcExvY2FsKSB7XG4gICAgbmV4dChhY3Rpb24pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcmVoeWRyYXRpb25NaWRkbGV3YXJlID0gKHsgZ2V0U3RhdGUgfSkgPT4ge1xuICAvLyBOQjogVGhlIHBhcmFtZXRlciBoZXJlIGlzIE1pZGRsZXdhcmVBUEkgd2hpY2ggbG9va3MgbGlrZSBhIFN0b3JlIGFuZCBzaGFyZXNcbiAgLy8gdGhlIHNhbWUgZ2V0U3RhdGUsIHNvIGF0dGFjaGVkIHByb3BlcnRpZXMgYXJlIGFjY2Vzc2libGUgZnJvbSB0aGUgc3RvcmUuXG4gIGdldFN0YXRlLmRpZFJlaHlkcmF0ZSA9IGZhbHNlO1xuICBnZXRTdGF0ZS5kaWRSZXF1ZXN0SW5pdGlhbFN0YXRlID0gZmFsc2U7XG4gIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgaWYgKGdldFN0YXRlLmRpZFJlaHlkcmF0ZSB8fCB3aW5kb3cuX19GUk9NX1NUQVJUVVBfQ0FDSEVfXykge1xuICAgICAgLy8gU3RhcnR1cCBtZXNzYWdlcyBjYW4gYmUgc2FmZWx5IGlnbm9yZWQgYnkgdGhlIGFib3V0OmhvbWUgZG9jdW1lbnRcbiAgICAgIC8vIHN0b3JlZCBpbiB0aGUgc3RhcnR1cCBjYWNoZS5cbiAgICAgIGlmIChcbiAgICAgICAgd2luZG93Ll9fRlJPTV9TVEFSVFVQX0NBQ0hFX18gJiZcbiAgICAgICAgYWN0aW9uLm1ldGEgJiZcbiAgICAgICAgYWN0aW9uLm1ldGEuaXNTdGFydHVwXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGlzTWVyZ2VTdG9yZUFjdGlvbiA9IGFjdGlvbi50eXBlID09PSBNRVJHRV9TVE9SRV9BQ1RJT047XG4gICAgY29uc3QgaXNSZWh5ZHJhdGlvblJlcXVlc3QgPSBhY3Rpb24udHlwZSA9PT0gYXQuTkVXX1RBQl9TVEFURV9SRVFVRVNUO1xuXG4gICAgaWYgKGlzUmVoeWRyYXRpb25SZXF1ZXN0KSB7XG4gICAgICBnZXRTdGF0ZS5kaWRSZXF1ZXN0SW5pdGlhbFN0YXRlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgfVxuXG4gICAgaWYgKGlzTWVyZ2VTdG9yZUFjdGlvbikge1xuICAgICAgZ2V0U3RhdGUuZGlkUmVoeWRyYXRlID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gSWYgaW5pdCBoYXBwZW5lZCBhZnRlciBvdXIgcmVxdWVzdCB3YXMgbWFkZSwgd2UgbmVlZCB0byByZS1yZXF1ZXN0XG4gICAgaWYgKGdldFN0YXRlLmRpZFJlcXVlc3RJbml0aWFsU3RhdGUgJiYgYWN0aW9uLnR5cGUgPT09IGF0LklOSVQpIHtcbiAgICAgIHJldHVybiBuZXh0KGFjLkFsc29Ub01haW4oeyB0eXBlOiBhdC5ORVdfVEFCX1NUQVRFX1JFUVVFU1QgfSkpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGF1LmlzQnJvYWRjYXN0VG9Db250ZW50KGFjdGlvbikgfHxcbiAgICAgIGF1LmlzU2VuZFRvT25lQ29udGVudChhY3Rpb24pIHx8XG4gICAgICBhdS5pc1NlbmRUb1ByZWxvYWRlZChhY3Rpb24pXG4gICAgKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgYWN0aW9ucyByZWNlaXZlZCBiZWZvcmUgZGlkUmVoeWRyYXRlIHdpbGwgbm90IGJlIGRpc3BhdGNoZWRcbiAgICAgIC8vIGJlY2F1c2UgdGhpcyBjb3VsZCBuZWdhdGl2ZWx5IGFmZmVjdCBwcmVsb2FkaW5nIGFuZCB0aGUgdGhlIHN0YXRlXG4gICAgICAvLyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHJlaHlkcmF0aW9uIGFueXdheS5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XG4gIH07XG59O1xuXG4vKipcbiAqIGluaXRTdG9yZSAtIENyZWF0ZSBhIHN0b3JlIGFuZCBsaXN0ZW4gZm9yIGluY29taW5nIGFjdGlvbnNcbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IHJlZHVjZXJzIEFuIG9iamVjdCBjb250YWluaW5nIFJlZHV4IHJlZHVjZXJzXG4gKiBAcGFyYW0gIHtvYmplY3R9IGludGlhbFN0YXRlIChvcHRpb25hbCkgVGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHN0b3JlLCBpZiBkZXNpcmVkXG4gKiBAcmV0dXJuIHtvYmplY3R9ICAgICAgICAgIEEgcmVkdXggc3RvcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRTdG9yZShyZWR1Y2VycywgaW5pdGlhbFN0YXRlKSB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgbWVyZ2VTdGF0ZVJlZHVjZXIoY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSksXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGdsb2JhbFRoaXMuUlBNQWRkTWVzc2FnZUxpc3RlbmVyICYmXG4gICAgICBhcHBseU1pZGRsZXdhcmUocmVoeWRyYXRpb25NaWRkbGV3YXJlLCBtZXNzYWdlTWlkZGxld2FyZSlcbiAgKTtcblxuICBpZiAoZ2xvYmFsVGhpcy5SUE1BZGRNZXNzYWdlTGlzdGVuZXIpIHtcbiAgICBnbG9iYWxUaGlzLlJQTUFkZE1lc3NhZ2VMaXN0ZW5lcihJTkNPTUlOR19NRVNTQUdFX05BTUUsIG1zZyA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChtc2cuZGF0YSk7XG4gICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ29udGVudCBtc2c6XCIsIG1zZywgXCJEaXNwYXRjaCBlcnJvcjogXCIsIGV4KTtcbiAgICAgICAgZHVtcChcbiAgICAgICAgICBgQ29udGVudCBtc2c6ICR7SlNPTi5zdHJpbmdpZnkobXNnKX1cXG5EaXNwYXRjaCBlcnJvcjogJHtleH1cXG4ke1xuICAgICAgICAgICAgZXguc3RhY2tcbiAgICAgICAgICB9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHN0b3JlO1xufVxuIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IFJlYWN0RE9NOyIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmV4cG9ydCBjbGFzcyBEZWR1cGUge1xuICBjb25zdHJ1Y3RvcihjcmVhdGVLZXkpIHtcbiAgICB0aGlzLmNyZWF0ZUtleSA9IGNyZWF0ZUtleSB8fCB0aGlzLmRlZmF1bHRDcmVhdGVLZXk7XG4gIH1cblxuICBkZWZhdWx0Q3JlYXRlS2V5KGl0ZW0pIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWR1cGUgYW55IG51bWJlciBvZiBncm91cGVkIGVsZW1lbnRzIGZhdm9yaW5nIHRob3NlIGZyb20gZWFybGllciBncm91cHMuXG4gICAqXG4gICAqIEBwYXJhbSB7QXJyYXl9IGdyb3VwcyBDb250YWlucyBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mIGFycmF5cyBvZiBlbGVtZW50cy5cbiAgICogQHJldHVybnMge0FycmF5fSBBIG1hdGNoaW5nIGFycmF5IG9mIGVhY2ggcHJvdmlkZWQgZ3JvdXAgZGVkdXBlZC5cbiAgICovXG4gIGdyb3VwKC4uLmdyb3Vwcykge1xuICAgIGNvbnN0IGdsb2JhbEtleXMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChjb25zdCB2YWx1ZXMgb2YgZ3JvdXBzKSB7XG4gICAgICBjb25zdCB2YWx1ZU1hcCA9IG5ldyBNYXAoKTtcbiAgICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY3JlYXRlS2V5KHZhbHVlKTtcbiAgICAgICAgaWYgKCFnbG9iYWxLZXlzLmhhcyhrZXkpICYmICF2YWx1ZU1hcC5oYXMoa2V5KSkge1xuICAgICAgICAgIHZhbHVlTWFwLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWVNYXApO1xuICAgICAgdmFsdWVNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gZ2xvYmFsS2V5cy5hZGQoa2V5KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQubWFwKG0gPT4gQXJyYXkuZnJvbShtLnZhbHVlcygpKSk7XG4gIH1cbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmV4cG9ydCBjb25zdCBUT1BfU0lURVNfREVGQVVMVF9ST1dTID0gMTtcbmV4cG9ydCBjb25zdCBUT1BfU0lURVNfTUFYX1NJVEVTX1BFUl9ST1cgPSA4O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwicmVzb3VyY2U6Ly9uZXd0YWIvY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBEZWR1cGUgfSBmcm9tIFwicmVzb3VyY2U6Ly8vbW9kdWxlcy9EZWR1cGUuc3lzLm1qc1wiO1xuXG5leHBvcnQge1xuICBUT1BfU0lURVNfREVGQVVMVF9ST1dTLFxuICBUT1BfU0lURVNfTUFYX1NJVEVTX1BFUl9ST1csXG59IGZyb20gXCJyZXNvdXJjZTovLy9tb2R1bGVzL3RvcHNpdGVzL2NvbnN0YW50cy5tanNcIjtcblxuY29uc3QgZGVkdXBlID0gbmV3IERlZHVwZShzaXRlID0+IHNpdGUgJiYgc2l0ZS51cmwpO1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgQXBwOiB7XG4gICAgLy8gSGF2ZSB3ZSByZWNlaXZlZCByZWFsIGRhdGEgZnJvbSB0aGUgYXBwIHlldD9cbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgbG9jYWxlOiBcIlwiLFxuICAgIGlzRm9yU3RhcnR1cENhY2hlOiB7XG4gICAgICBBcHA6IGZhbHNlLFxuICAgICAgVG9wU2l0ZXM6IGZhbHNlLFxuICAgICAgRGlzY292ZXJ5U3RyZWFtOiBmYWxzZSxcbiAgICAgIFdlYXRoZXI6IGZhbHNlLFxuICAgICAgV2FsbHBhcGVyOiBmYWxzZSxcbiAgICB9LFxuICAgIGN1c3RvbWl6ZU1lbnVWaXNpYmxlOiBmYWxzZSxcbiAgfSxcbiAgQWRzOiB7XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGxhc3RVcGRhdGVkOiBudWxsLFxuICAgIHRpbGVzOiB7fSxcbiAgICBzcG9jczoge30sXG4gICAgc3BvY1BsYWNlbWVudHM6IHt9LFxuICB9LFxuICBUb3BTaXRlczoge1xuICAgIC8vIEhhdmUgd2UgcmVjZWl2ZWQgcmVhbCBkYXRhIGZyb20gaGlzdG9yeSB5ZXQ/XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIC8vIFRoZSBoaXN0b3J5IChhbmQgcG9zc2libHkgZGVmYXVsdCkgbGlua3NcbiAgICByb3dzOiBbXSxcbiAgICAvLyBVc2VkIGluIGNvbnRlbnQgb25seSB0byBkaXNwYXRjaCBhY3Rpb24gdG8gVG9wU2l0ZUZvcm0uXG4gICAgZWRpdEZvcm06IG51bGwsXG4gICAgLy8gVXNlZCBpbiBjb250ZW50IG9ubHkgdG8gb3BlbiB0aGUgU2VhcmNoU2hvcnRjdXRzRm9ybSBtb2RhbC5cbiAgICBzaG93U2VhcmNoU2hvcnRjdXRzRm9ybTogZmFsc2UsXG4gICAgLy8gVGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHNlYXJjaCBzaG9ydGN1dHMuXG4gICAgc2VhcmNoU2hvcnRjdXRzOiBbXSxcbiAgICAvLyBUaGUgXCJTaGFyZS1vZi1Wb2ljZVwiIGFsbG9jYXRpb25zIGdlbmVyYXRlZCBieSBUb3BTaXRlc0ZlZWRcbiAgICBzb3Y6IHtcbiAgICAgIHJlYWR5OiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uczogW1xuICAgICAgICAvLyB7cG9zaXRpb246IDAsIGFzc2lnbmVkUGFydG5lcjogXCJhbXBcIn0sXG4gICAgICAgIC8vIHtwb3NpdGlvbjogMSwgYXNzaWduZWRQYXJ0bmVyOiBcIm1vei1zYWxlc1wifSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgUHJlZnM6IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgdmFsdWVzOiB7IGZlYXR1cmVDb25maWc6IHt9IH0sXG4gIH0sXG4gIERpYWxvZzoge1xuICAgIHZpc2libGU6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICB9LFxuICBTZWN0aW9uczogW10sXG4gIFBvY2tldDoge1xuICAgIGlzVXNlckxvZ2dlZEluOiBudWxsLFxuICAgIHBvY2tldEN0YToge30sXG4gICAgd2FpdGluZ0ZvclNwb2M6IHRydWUsXG4gIH0sXG4gIC8vIFRoaXMgaXMgdGhlIG5ldyBwb2NrZXQgY29uZmlndXJhYmxlIGxheW91dCBzdGF0ZS5cbiAgRGlzY292ZXJ5U3RyZWFtOiB7XG4gICAgLy8gVGhpcyBpcyBhIEpTT04tcGFyc2VkIGNvcHkgb2YgdGhlIGRpc2NvdmVyeXN0cmVhbS5jb25maWcgcHJlZiB2YWx1ZS5cbiAgICBjb25maWc6IHsgZW5hYmxlZDogZmFsc2UgfSxcbiAgICBsYXlvdXQ6IFtdLFxuICAgIHRvcGljc0xvYWRpbmc6IGZhbHNlLFxuICAgIGZlZWRzOiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIC8vIFwiaHR0cHM6Ly9mb28uY29tL2ZlZWQxXCI6IHtsYXN0VXBkYXRlZDogMTIzLCBkYXRhOiBbXSwgcGVyc29uYWxpemVkOiBmYWxzZX1cbiAgICAgIH0sXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgIH0sXG4gICAgLy8gVXNlZCB0byBzaG93IGltcHJlc3Npb25zIGluIG5ld3RhYiBkZXZ0b29scy5cbiAgICBpbXByZXNzaW9uczoge1xuICAgICAgZmVlZDoge30sXG4gICAgfSxcbiAgICAvLyBVc2VkIHRvIHNob3cgYmxvY2tzIGluIG5ld3RhYiBkZXZ0b29scy5cbiAgICBibG9ja3M6IHt9LFxuICAgIHNwb2NzOiB7XG4gICAgICBzcG9jc19lbmRwb2ludDogXCJcIixcbiAgICAgIGxhc3RVcGRhdGVkOiBudWxsLFxuICAgICAgZGF0YToge1xuICAgICAgICAvLyBcInNwb2NzXCI6IHt0aXRsZTogXCJcIiwgY29udGV4dDogXCJcIiwgaXRlbXM6IFtdLCBwZXJzb25hbGl6ZWQ6IGZhbHNlfSxcbiAgICAgICAgLy8gXCJwbGFjZW1lbnQxXCI6IHt0aXRsZTogXCJcIiwgY29udGV4dDogXCJcIiwgaXRlbXM6IFtdLCBwZXJzb25hbGl6ZWQ6IGZhbHNlfSxcbiAgICAgIH0sXG4gICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgZnJlcXVlbmN5X2NhcHM6IFtdLFxuICAgICAgYmxvY2tlZDogW10sXG4gICAgICBwbGFjZW1lbnRzOiBbXSxcbiAgICB9LFxuICAgIGV4cGVyaW1lbnREYXRhOiB7XG4gICAgICB1dG1Tb3VyY2U6IFwicG9ja2V0LW5ld3RhYlwiLFxuICAgICAgdXRtQ2FtcGFpZ246IHVuZGVmaW5lZCxcbiAgICAgIHV0bUNvbnRlbnQ6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIGlzVXNlckxvZ2dlZEluOiBmYWxzZSxcbiAgICBzaG93VG9waWNTZWxlY3Rpb246IGZhbHNlLFxuICAgIHJlcG9ydDoge1xuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICB9LFxuICAgIHNlY3Rpb25QZXJzb25hbGl6YXRpb246IHt9LFxuICB9LFxuICAvLyBNZXNzYWdlcyByZWNlaXZlZCBmcm9tIEFTUm91dGVyIHRvIHJlbmRlciBpbiBuZXd0YWJcbiAgTWVzc2FnZXM6IHtcbiAgICAvLyBtZXNzYWdlcyByZWNlaXZlZCBmcm9tIEFTUm91dGVyIGFyZSBpbml0aWFsbHkgdmlzaWJsZVxuICAgIGlzVmlzaWJsZTogdHJ1ZSxcbiAgICAvLyBwb3J0SUQgZm9yIHRoYXQgdGFiIHRoYXQgd2FzIHNlbnQgdGhlIG1lc3NhZ2VcbiAgICBwb3J0SUQ6IFwiXCIsXG4gICAgLy8gUkVBRE9OTFkgTWVzc2FnZSBkYXRhIHJlY2VpdmVkIGZyb20gQVNSb3V0ZXJcbiAgICBtZXNzYWdlRGF0YToge30sXG4gIH0sXG4gIE5vdGlmaWNhdGlvbnM6IHtcbiAgICBzaG93Tm90aWZpY2F0aW9uczogZmFsc2UsXG4gICAgdG9hc3RDb3VudGVyOiAwLFxuICAgIHRvYXN0SWQ6IFwiXCIsXG4gICAgLy8gVGhpcyBxdWV1ZSBpcyByZXNldCBlYWNoIHRpbWUgU0hPV19UT0FTVF9NRVNTQUdFIGlzIHJhbi5cbiAgICAvLyBGb3IgY2FuIGJlIGEgcXVldWUgaW4gdGhlIGZ1dHVyZSwgYnV0IGZvciBub3cgaXMgb25lIGl0ZW1cbiAgICB0b2FzdFF1ZXVlOiBbXSxcbiAgfSxcbiAgUGVyc29uYWxpemF0aW9uOiB7XG4gICAgbGFzdFVwZGF0ZWQ6IG51bGwsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICB9LFxuICBJbmZlcnJlZFBlcnNvbmFsaXphdGlvbjoge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBsYXN0VXBkYXRlZDogbnVsbCxcbiAgICBpbmZlcnJlZEludHJlc3RzOiB7fSxcbiAgICBjb2Fyc2VJbmZlcnJlZEludGVyZXN0czoge30sXG4gICAgY29hcnNlUHJpdmF0ZUluZmVycmVkSW50ZXJlc3RzOiB7fSxcbiAgfSxcbiAgU2VhcmNoOiB7XG4gICAgLy8gV2hlbiBzZWFyY2ggaGFuZC1vZmYgaXMgZW5hYmxlZCwgd2UgcmVuZGVyIGEgYmlnIGJ1dHRvbiB0aGF0IGlzIHN0eWxlZCB0b1xuICAgIC8vIGxvb2sgbGlrZSBhIHNlYXJjaCB0ZXh0Ym94LiBJZiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQsIHdlIHN0eWxlXG4gICAgLy8gdGhlIGJ1dHRvbiBhcyBpZiBpdCB3YXMgYSBmb2N1c2VkIHNlYXJjaCBib3ggYW5kIHNob3cgYSBmYWtlIGN1cnNvciBidXRcbiAgICAvLyByZWFsbHkgZm9jdXMgdGhlIGF3ZXNvbWViYXIgd2l0aG91dCB0aGUgZm9jdXMgc3R5bGVzIChcImhpZGRlbiBmb2N1c1wiKS5cbiAgICBmYWtlRm9jdXM6IGZhbHNlLFxuICAgIC8vIEhpZGUgdGhlIHNlYXJjaCBib3ggYWZ0ZXIgaGFuZGluZyBvZmYgdG8gQXdlc29tZUJhciBhbmQgdXNlciBzdGFydHMgdHlwaW5nLlxuICAgIGhpZGU6IGZhbHNlLFxuICB9LFxuICBXYWxscGFwZXJzOiB7XG4gICAgd2FsbHBhcGVyTGlzdDogW10sXG4gICAgaGlnaGxpZ2h0U2VlbkNvdW50ZXI6IDAsXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgdXBsb2FkZWRXYWxscGFwZXI6IFwiXCIsXG4gIH0sXG4gIFdlYXRoZXI6IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWQ6IG51bGwsXG4gICAgcXVlcnk6IFwiXCIsXG4gICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgIGxvY2F0aW9uRGF0YToge1xuICAgICAgY2l0eTogXCJcIixcbiAgICAgIGFkbWluQXJlYTogXCJcIixcbiAgICAgIGNvdW50cnk6IFwiXCIsXG4gICAgfSxcbiAgICAvLyBEaXNwbGF5IHNlYXJjaCBpbnB1dCBpbiBXZWF0aGVyIHdpZGdldFxuICAgIHNlYXJjaEFjdGl2ZTogZmFsc2UsXG4gICAgbG9jYXRpb25TZWFyY2hTdHJpbmc6IFwiXCIsXG4gICAgc3VnZ2VzdGVkTG9jYXRpb25zOiBbXSxcbiAgfSxcbiAgVHJlbmRpbmdTZWFyY2g6IHtcbiAgICBzdWdnZXN0aW9uczogW10sXG4gICAgY29sbGFwc2VkOiBmYWxzZSxcbiAgfSxcbiAgLy8gV2lkZ2V0c1xuICBMaXN0c1dpZGdldDoge1xuICAgIC8vIHZhbHVlIHBvaW50aW5nIHRvIGxhc3Qgc2VsZWN0bGVkIGxpc3RcbiAgICBzZWxlY3RlZDogXCJ0YXNrTGlzdFwiLFxuICAgIC8vIERlZmF1bHQgc3RhdGUgb2YgYW4gZW1wdHkgdGFzayBsaXN0XG4gICAgbGlzdHM6IHtcbiAgICAgIHRhc2tMaXN0OiB7XG4gICAgICAgIGxhYmVsOiBcIlRhc2sgTGlzdFwiLFxuICAgICAgICB0YXNrczogW10sXG4gICAgICAgIGNvbXBsZXRlZDogW10sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIFRpbWVyV2lkZ2V0OiB7XG4gICAgLy8gVGhlIHRpbWVyIHdpbGwgaGF2ZSAyIHR5cGVzIG9mIHN0YXRlcywgZm9jdXMgYW5kIGJyZWFrLlxuICAgIC8vIEZvY3VzIHdpbGwgdGhlIGRlZmF1bHQgc3RhdGVcbiAgICB0aW1lclR5cGU6IFwiZm9jdXNcIixcbiAgICBmb2N1czoge1xuICAgICAgLy8gVGltZXIgZHVyYXRpb24gc2V0IGJ5IHVzZXI7IDI1IG1pbnMgYnkgZGVmYXVsdFxuICAgICAgZHVyYXRpb246IDI1ICogNjAsXG4gICAgICAvLyBJbml0aWFsIGR1cmF0aW9uIC0gYWxzbyBzZXQgYnkgdGhlIHVzZXI7IGRvZXMgbm90IHVwZGF0ZSB1bnRpbCB0aW1lciBlbmRzIG9yIHVzZXIgcmVzZXRzIHRpbWVyXG4gICAgICBpbml0aWFsRHVyYXRpb246IDI1ICogNjAsXG4gICAgICAvLyB0aGUgRGF0ZS5ub3coKSB2YWx1ZSB3aGVuIGEgdXNlciBzdGFydHMvcmVzdW1lcyBhIHRpbWVyXG4gICAgICBzdGFydFRpbWU6IG51bGwsXG4gICAgICAvLyBCb29sZWFuIGluZGljYXRpbmcgaWYgdGltZXIgaXMgY3VycmVudGx5IHJ1bm5pbmdcbiAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgfSxcbiAgICBicmVhazoge1xuICAgICAgZHVyYXRpb246IDUgKiA2MCxcbiAgICAgIGluaXRpYWxEdXJhdGlvbjogNSAqIDYwLFxuICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICB9LFxuICB9LFxufTtcblxuZnVuY3Rpb24gQXBwKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuQXBwLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuSU5JVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIGFjdGlvbi5kYXRhIHx8IHt9LCB7XG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgfSk7XG4gICAgY2FzZSBhdC5UT1BfU0lURVNfVVBEQVRFRDpcbiAgICAgIC8vIFRvZ2dsZSBgaXNGb3JTdGFydHVwQ2FjaGUuVG9wU2l0ZXNgIHdoZW4gcmVjZWl2aW5nIHRoZSBgVE9QX1NJVEVTX1VQREFURWAgYWN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHNwb25zb3JlZCB0aWxlcyBjYW4gYmUgcmVuZGVyZWQgYXMgdXN1YWwuIFNlZSBCdWcgMTgyNjM2MC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNGb3JTdGFydHVwQ2FjaGU6IHsgLi4ucHJldlN0YXRlLmlzRm9yU3RhcnR1cENhY2hlLCBUb3BTaXRlczogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1NQT0NTX1VQREFURTpcbiAgICAgIC8vIFRvZ2dsZSBgaXNGb3JTdGFydHVwQ2FjaGUuRGlzY292ZXJ5U3RyZWFtYCB3aGVuIHJlY2VpdmluZyB0aGUgYERJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfVVBEQVRFYCBhY3Rpb25cbiAgICAgIC8vIHNvIHRoYXQgc3BvYyBjYXJkcyBjYW4gYmUgcmVuZGVyZWQgYXMgdXN1YWwuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzRm9yU3RhcnR1cENhY2hlOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmlzRm9yU3RhcnR1cENhY2hlLFxuICAgICAgICAgIERpc2NvdmVyeVN0cmVhbTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0VBVEhFUl9VUERBVEU6XG4gICAgICAvLyBUb2dnbGUgYGlzRm9yU3RhcnR1cENhY2hlLldlYXRoZXJgIHdoZW4gcmVjZWl2aW5nIHRoZSBgV0VBVEhFUl9VUERBVEVgIGFjdGlvblxuICAgICAgLy8gc28gdGhhdCB3ZWF0aGVyIGNhbiBiZSByZW5kZXJlZCBhcyB1c3VhbC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNGb3JTdGFydHVwQ2FjaGU6IHsgLi4ucHJldlN0YXRlLmlzRm9yU3RhcnR1cENhY2hlLCBXZWF0aGVyOiBmYWxzZSB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldBTExQQVBFUlNfQ1VTVE9NX1NFVDpcbiAgICAgIC8vIFRvZ2dsZSBgaXNGb3JTdGFydHVwQ2FjaGUuV2FsbHBhcGVyYCB3aGVuIHJlY2VpdmluZyB0aGUgYFdBTExQQVBFUlNfQ1VTVE9NX1NFVGAgYWN0aW9uXG4gICAgICAvLyBzbyB0aGF0IGN1c3RvbSB3YWxscGFwZXIgY2FuIGJlIHJlbmRlcmVkIGFzIHVzdWFsLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc0ZvclN0YXJ0dXBDYWNoZTogeyAuLi5wcmV2U3RhdGUuaXNGb3JTdGFydHVwQ2FjaGUsIFdhbGxwYXBlcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5TSE9XX1BFUlNPTkFMSVpFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBjdXN0b21pemVNZW51VmlzaWJsZTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuSElERV9QRVJTT05BTElaRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgY3VzdG9taXplTWVudVZpc2libGU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gVG9wU2l0ZXMocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5Ub3BTaXRlcywgYWN0aW9uKSB7XG4gIGxldCBoYXNNYXRjaDtcbiAgbGV0IG5ld1Jvd3M7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19VUERBVEVEOlxuICAgICAgaWYgKCFhY3Rpb24uZGF0YSB8fCAhYWN0aW9uLmRhdGEubGlua3MpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgcHJldlN0YXRlLFxuICAgICAgICB7IGluaXRpYWxpemVkOiB0cnVlLCByb3dzOiBhY3Rpb24uZGF0YS5saW5rcyB9LFxuICAgICAgICBhY3Rpb24uZGF0YS5wcmVmID8geyBwcmVmOiBhY3Rpb24uZGF0YS5wcmVmIH0gOiB7fVxuICAgICAgKTtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19QUkVGU19VUERBVEVEOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyBwcmVmOiBhY3Rpb24uZGF0YS5wcmVmIH0pO1xuICAgIGNhc2UgYXQuVE9QX1NJVEVTX0VESVQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGVkaXRGb3JtOiB7XG4gICAgICAgICAgaW5kZXg6IGFjdGlvbi5kYXRhLmluZGV4LFxuICAgICAgICAgIHByZXZpZXdSZXNwb25zZTogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuVE9QX1NJVEVTX0NBTkNFTF9FRElUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyBlZGl0Rm9ybTogbnVsbCB9KTtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19PUEVOX1NFQVJDSF9TSE9SVENVVFNfTU9EQUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7IHNob3dTZWFyY2hTaG9ydGN1dHNGb3JtOiB0cnVlIH0pO1xuICAgIGNhc2UgYXQuVE9QX1NJVEVTX0NMT1NFX1NFQVJDSF9TSE9SVENVVFNfTU9EQUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7IHNob3dTZWFyY2hTaG9ydGN1dHNGb3JtOiBmYWxzZSB9KTtcbiAgICBjYXNlIGF0LlBSRVZJRVdfUkVTUE9OU0U6XG4gICAgICBpZiAoXG4gICAgICAgICFwcmV2U3RhdGUuZWRpdEZvcm0gfHxcbiAgICAgICAgYWN0aW9uLmRhdGEudXJsICE9PSBwcmV2U3RhdGUuZWRpdEZvcm0ucHJldmlld1VybFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGVkaXRGb3JtOiB7XG4gICAgICAgICAgaW5kZXg6IHByZXZTdGF0ZS5lZGl0Rm9ybS5pbmRleCxcbiAgICAgICAgICBwcmV2aWV3UmVzcG9uc2U6IGFjdGlvbi5kYXRhLnByZXZpZXcsXG4gICAgICAgICAgcHJldmlld1VybDogYWN0aW9uLmRhdGEudXJsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2FzZSBhdC5QUkVWSUVXX1JFUVVFU1Q6XG4gICAgICBpZiAoIXByZXZTdGF0ZS5lZGl0Rm9ybSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBlZGl0Rm9ybToge1xuICAgICAgICAgIGluZGV4OiBwcmV2U3RhdGUuZWRpdEZvcm0uaW5kZXgsXG4gICAgICAgICAgcHJldmlld1Jlc3BvbnNlOiBudWxsLFxuICAgICAgICAgIHByZXZpZXdVcmw6IGFjdGlvbi5kYXRhLnVybCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuUFJFVklFV19SRVFVRVNUX0NBTkNFTDpcbiAgICAgIGlmICghcHJldlN0YXRlLmVkaXRGb3JtKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGVkaXRGb3JtOiB7XG4gICAgICAgICAgaW5kZXg6IHByZXZTdGF0ZS5lZGl0Rm9ybS5pbmRleCxcbiAgICAgICAgICBwcmV2aWV3UmVzcG9uc2U6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICBjYXNlIGF0LlNDUkVFTlNIT1RfVVBEQVRFRDpcbiAgICAgIG5ld1Jvd3MgPSBwcmV2U3RhdGUucm93cy5tYXAocm93ID0+IHtcbiAgICAgICAgaWYgKHJvdyAmJiByb3cudXJsID09PSBhY3Rpb24uZGF0YS51cmwpIHtcbiAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJvdywgeyBzY3JlZW5zaG90OiBhY3Rpb24uZGF0YS5zY3JlZW5zaG90IH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3c7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBoYXNNYXRjaFxuICAgICAgICA/IE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyByb3dzOiBuZXdSb3dzIH0pXG4gICAgICAgIDogcHJldlN0YXRlO1xuICAgIGNhc2UgYXQuUExBQ0VTX0JPT0tNQVJLX0FEREVEOlxuICAgICAgaWYgKCFhY3Rpb24uZGF0YSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgbmV3Um93cyA9IHByZXZTdGF0ZS5yb3dzLm1hcChzaXRlID0+IHtcbiAgICAgICAgaWYgKHNpdGUgJiYgc2l0ZS51cmwgPT09IGFjdGlvbi5kYXRhLnVybCkge1xuICAgICAgICAgIGNvbnN0IHsgYm9va21hcmtHdWlkLCBib29rbWFya1RpdGxlLCBkYXRlQWRkZWQgfSA9IGFjdGlvbi5kYXRhO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzaXRlLCB7XG4gICAgICAgICAgICBib29rbWFya0d1aWQsXG4gICAgICAgICAgICBib29rbWFya1RpdGxlLFxuICAgICAgICAgICAgYm9va21hcmtEYXRlQ3JlYXRlZDogZGF0ZUFkZGVkLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXRlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7IHJvd3M6IG5ld1Jvd3MgfSk7XG4gICAgY2FzZSBhdC5QTEFDRVNfQk9PS01BUktTX1JFTU9WRUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICBuZXdSb3dzID0gcHJldlN0YXRlLnJvd3MubWFwKHNpdGUgPT4ge1xuICAgICAgICBpZiAoc2l0ZSAmJiBhY3Rpb24uZGF0YS51cmxzLmluY2x1ZGVzKHNpdGUudXJsKSkge1xuICAgICAgICAgIGNvbnN0IG5ld1NpdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzaXRlKTtcbiAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya0d1aWQ7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtUaXRsZTtcbiAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya0RhdGVDcmVhdGVkO1xuICAgICAgICAgIHJldHVybiBuZXdTaXRlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXRlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7IHJvd3M6IG5ld1Jvd3MgfSk7XG4gICAgY2FzZSBhdC5QTEFDRVNfTElOS1NfREVMRVRFRDpcbiAgICAgIGlmICghYWN0aW9uLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIG5ld1Jvd3MgPSBwcmV2U3RhdGUucm93cy5maWx0ZXIoXG4gICAgICAgIHNpdGUgPT4gIWFjdGlvbi5kYXRhLnVybHMuaW5jbHVkZXMoc2l0ZS51cmwpXG4gICAgICApO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyByb3dzOiBuZXdSb3dzIH0pO1xuICAgIGNhc2UgYXQuVVBEQVRFX1NFQVJDSF9TSE9SVENVVFM6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHNlYXJjaFNob3J0Y3V0czogYWN0aW9uLmRhdGEuc2VhcmNoU2hvcnRjdXRzIH07XG4gICAgY2FzZSBhdC5TT1ZfVVBEQVRFRDoge1xuICAgICAgY29uc3Qgc292ID0ge1xuICAgICAgICByZWFkeTogYWN0aW9uLmRhdGEucmVhZHksXG4gICAgICAgIHBvc2l0aW9uczogYWN0aW9uLmRhdGEucG9zaXRpb25zLFxuICAgICAgfTtcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc292IH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIERpYWxvZyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkRpYWxvZywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LkRJQUxPR19PUEVOOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2aXNpYmxlOiB0cnVlLCBkYXRhOiBhY3Rpb24uZGF0YSB9KTtcbiAgICBjYXNlIGF0LkRJQUxPR19DQU5DRUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7IHZpc2libGU6IGZhbHNlIH0pO1xuICAgIGNhc2UgYXQuRElBTE9HX0NMT1NFOlxuICAgICAgLy8gUmVzZXQgYW5kIGhpZGUgdGhlIGNvbmZpcm1hdGlvbiBkaWFsb2cgb25jZSB0aGUgYWN0aW9uIGlzIGNvbXBsZXRlLlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIElOSVRJQUxfU1RBVEUuRGlhbG9nKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQcmVmcyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLlByZWZzLCBhY3Rpb24pIHtcbiAgbGV0IG5ld1ZhbHVlcztcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuUFJFRlNfSU5JVElBTF9WQUxVRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgICB2YWx1ZXM6IGFjdGlvbi5kYXRhLFxuICAgICAgfSk7XG4gICAgY2FzZSBhdC5QUkVGX0NIQU5HRUQ6XG4gICAgICBuZXdWYWx1ZXMgPSBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUudmFsdWVzKTtcbiAgICAgIG5ld1ZhbHVlc1thY3Rpb24uZGF0YS5uYW1lXSA9IGFjdGlvbi5kYXRhLnZhbHVlO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBTZWN0aW9ucyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLlNlY3Rpb25zLCBhY3Rpb24pIHtcbiAgbGV0IGhhc01hdGNoO1xuICBsZXQgbmV3U3RhdGU7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LlNFQ1RJT05fREVSRUdJU1RFUjpcbiAgICAgIHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKHNlY3Rpb24gPT4gc2VjdGlvbi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xuICAgIGNhc2UgYXQuU0VDVElPTl9SRUdJU1RFUjpcbiAgICAgIC8vIElmIHNlY3Rpb24gZXhpc3RzIGluIHByZXZTdGF0ZSwgdXBkYXRlIGl0XG4gICAgICBuZXdTdGF0ZSA9IHByZXZTdGF0ZS5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgIGlmIChzZWN0aW9uICYmIHNlY3Rpb24uaWQgPT09IGFjdGlvbi5kYXRhLmlkKSB7XG4gICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzZWN0aW9uLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICB9KTtcbiAgICAgIC8vIE90aGVyd2lzZSwgYXBwZW5kIGl0XG4gICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgIGNvbnN0IGluaXRpYWxpemVkID0gISEoYWN0aW9uLmRhdGEucm93cyAmJiAhIWFjdGlvbi5kYXRhLnJvd3MubGVuZ3RoKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgeyB0aXRsZTogXCJcIiwgcm93czogW10sIGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgICAgICAgYWN0aW9uLmRhdGEsXG4gICAgICAgICAgeyBpbml0aWFsaXplZCB9XG4gICAgICAgICk7XG4gICAgICAgIG5ld1N0YXRlLnB1c2goc2VjdGlvbik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgY2FzZSBhdC5TRUNUSU9OX1VQREFURTpcbiAgICAgIG5ld1N0YXRlID0gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKHNlY3Rpb24gJiYgc2VjdGlvbi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgYWN0aW9uIGlzIHVwZGF0aW5nIHJvd3MsIHdlIHNob3VsZCBjb25zaWRlciBpbml0aWFsaXplZCB0byBiZSB0cnVlLlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGJlIG92ZXJyaWRkZW4gaWYgaW5pdGlhbGl6ZWQgaXMgZGVmaW5lZCBpbiB0aGUgYWN0aW9uLmRhdGFcbiAgICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9IGFjdGlvbi5kYXRhLnJvd3MgPyB7IGluaXRpYWxpemVkOiB0cnVlIH0gOiB7fTtcblxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSBwaW5uZWQgY2FyZHMgc3RheSBhdCB0aGVpciBjdXJyZW50IHBvc2l0aW9uIHdoZW4gcm93cyBhcmUgdXBkYXRlZC5cbiAgICAgICAgICAvLyBEaXNhYmxpbmcgYSBzZWN0aW9uIChTRUNUSU9OX1VQREFURSB3aXRoIGVtcHR5IHJvd3MpIGRvZXMgbm90IHJldGFpbiBwaW5uZWQgY2FyZHMuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgYWN0aW9uLmRhdGEucm93cyAmJlxuICAgICAgICAgICAgISFhY3Rpb24uZGF0YS5yb3dzLmxlbmd0aCAmJlxuICAgICAgICAgICAgc2VjdGlvbi5yb3dzLmZpbmQoY2FyZCA9PiBjYXJkLnBpbm5lZClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHJvd3MgPSBBcnJheS5mcm9tKGFjdGlvbi5kYXRhLnJvd3MpO1xuICAgICAgICAgICAgc2VjdGlvbi5yb3dzLmZvckVhY2goKGNhcmQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChjYXJkLnBpbm5lZCkge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIGl0IGlmIGl0J3Mgbm90IGFscmVhZHkgdGhlcmUuXG4gICAgICAgICAgICAgICAgaWYgKHJvd3NbaW5kZXhdLmd1aWQgIT09IGNhcmQuZ3VpZCkge1xuICAgICAgICAgICAgICAgICAgcm93cy5zcGxpY2UoaW5kZXgsIDAsIGNhcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgICAgIGluaXRpYWxpemVkLFxuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBhY3Rpb24uZGF0YSwgeyByb3dzIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzZWN0aW9uLCBpbml0aWFsaXplZCwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghYWN0aW9uLmRhdGEuZGVkdXBlQ29uZmlndXJhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgfVxuXG4gICAgICBhY3Rpb24uZGF0YS5kZWR1cGVDb25maWd1cmF0aW9ucy5mb3JFYWNoKGRlZHVwZUNvbmYgPT4ge1xuICAgICAgICBuZXdTdGF0ZSA9IG5ld1N0YXRlLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICBpZiAoc2VjdGlvbi5pZCA9PT0gZGVkdXBlQ29uZi5pZCkge1xuICAgICAgICAgICAgY29uc3QgZGVkdXBlZFJvd3MgPSBkZWR1cGVDb25mLmRlZHVwZUZyb20ucmVkdWNlKFxuICAgICAgICAgICAgICAocm93cywgZGVkdXBlU2VjdGlvbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVkdXBlU2VjdGlvbiA9IG5ld1N0YXRlLmZpbmQoXG4gICAgICAgICAgICAgICAgICBzID0+IHMuaWQgPT09IGRlZHVwZVNlY3Rpb25JZFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgY29uc3QgWywgbmV3Um93c10gPSBkZWR1cGUuZ3JvdXAoZGVkdXBlU2VjdGlvbi5yb3dzLCByb3dzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3Um93cztcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VjdGlvbi5yb3dzXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwgeyByb3dzOiBkZWR1cGVkUm93cyB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIGNhc2UgYXQuU0VDVElPTl9VUERBVEVfQ0FSRDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGUubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICBpZiAoc2VjdGlvbiAmJiBzZWN0aW9uLmlkID09PSBhY3Rpb24uZGF0YS5pZCAmJiBzZWN0aW9uLnJvd3MpIHtcbiAgICAgICAgICBjb25zdCBuZXdSb3dzID0gc2VjdGlvbi5yb3dzLm1hcChjYXJkID0+IHtcbiAgICAgICAgICAgIGlmIChjYXJkLnVybCA9PT0gYWN0aW9uLmRhdGEudXJsKSB7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjYXJkLCBhY3Rpb24uZGF0YS5vcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzZWN0aW9uLCB7IHJvd3M6IG5ld1Jvd3MgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICB9KTtcbiAgICBjYXNlIGF0LlBMQUNFU19CT09LTUFSS19BRERFRDpcbiAgICAgIGlmICghYWN0aW9uLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2U3RhdGUubWFwKHNlY3Rpb24gPT5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwge1xuICAgICAgICAgIHJvd3M6IHNlY3Rpb24ucm93cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBpdGVtIHdpdGhpbiB0aGUgcm93cyB0aGF0IGlzIGF0dGVtcHRlZCB0byBiZSBib29rbWFya2VkXG4gICAgICAgICAgICBpZiAoaXRlbS51cmwgPT09IGFjdGlvbi5kYXRhLnVybCkge1xuICAgICAgICAgICAgICBjb25zdCB7IGJvb2ttYXJrR3VpZCwgYm9va21hcmtUaXRsZSwgZGF0ZUFkZGVkIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgICBib29rbWFya0d1aWQsXG4gICAgICAgICAgICAgICAgYm9va21hcmtUaXRsZSxcbiAgICAgICAgICAgICAgICBib29rbWFya0RhdGVDcmVhdGVkOiBkYXRlQWRkZWQsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJib29rbWFya1wiLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBjYXNlIGF0LlBMQUNFU19CT09LTUFSS1NfUkVNT1ZFRDpcbiAgICAgIGlmICghYWN0aW9uLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2U3RhdGUubWFwKHNlY3Rpb24gPT5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwge1xuICAgICAgICAgIHJvd3M6IHNlY3Rpb24ucm93cy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAvLyBmaW5kIHRoZSBib29rbWFyayB3aXRoaW4gdGhlIHJvd3MgdGhhdCBpcyBhdHRlbXB0ZWQgdG8gYmUgcmVtb3ZlZFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5kYXRhLnVybHMuaW5jbHVkZXMoaXRlbS51cmwpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1NpdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtHdWlkO1xuICAgICAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya1RpdGxlO1xuICAgICAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya0RhdGVDcmVhdGVkO1xuICAgICAgICAgICAgICBpZiAoIW5ld1NpdGUudHlwZSB8fCBuZXdTaXRlLnR5cGUgPT09IFwiYm9va21hcmtcIikge1xuICAgICAgICAgICAgICAgIG5ld1NpdGUudHlwZSA9IFwiaGlzdG9yeVwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXdTaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGNhc2UgYXQuUExBQ0VTX0xJTktTX0RFTEVURUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlY3Rpb24sIHtcbiAgICAgICAgICByb3dzOiBzZWN0aW9uLnJvd3MuZmlsdGVyKFxuICAgICAgICAgICAgc2l0ZSA9PiAhYWN0aW9uLmRhdGEudXJscy5pbmNsdWRlcyhzaXRlLnVybClcbiAgICAgICAgICApLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBjYXNlIGF0LlBMQUNFU19MSU5LX0JMT0NLRUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlY3Rpb24sIHtcbiAgICAgICAgICByb3dzOiBzZWN0aW9uLnJvd3MuZmlsdGVyKHNpdGUgPT4gc2l0ZS51cmwgIT09IGFjdGlvbi5kYXRhLnVybCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIE1lc3NhZ2VzKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuTWVzc2FnZXMsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5NRVNTQUdFX1NFVDpcbiAgICAgIGlmIChwcmV2U3RhdGUubWVzc2FnZURhdGEubWVzc2FnZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgbWVzc2FnZURhdGE6IGFjdGlvbi5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIHBvcnRJRDogYWN0aW9uLmRhdGEucG9ydElEIHx8IFwiXCIsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuTUVTU0FHRV9UT0dHTEVfVklTSUJJTElUWTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgaXNWaXNpYmxlOiBhY3Rpb24uZGF0YSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFBvY2tldChwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLlBvY2tldCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LlBPQ0tFVF9XQUlUSU5HX0ZPUl9TUE9DOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCB3YWl0aW5nRm9yU3BvYzogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlIGF0LlBPQ0tFVF9MT0dHRURfSU46XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGlzVXNlckxvZ2dlZEluOiAhIWFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5QT0NLRVRfQ1RBOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBwb2NrZXRDdGE6IHtcbiAgICAgICAgICBjdGFCdXR0b246IGFjdGlvbi5kYXRhLmN0YV9idXR0b24sXG4gICAgICAgICAgY3RhVGV4dDogYWN0aW9uLmRhdGEuY3RhX3RleHQsXG4gICAgICAgICAgY3RhVXJsOiBhY3Rpb24uZGF0YS5jdGFfdXJsLFxuICAgICAgICAgIHVzZUN0YTogYWN0aW9uLmRhdGEudXNlX2N0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gUGVyc29uYWxpemF0aW9uKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuUGVyc29uYWxpemF0aW9uLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fTEFTVF9VUERBVEVEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLmRhdGEubGFzdFVwZGF0ZWQsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fSU5JVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fUkVTRVQ6XG4gICAgICByZXR1cm4geyAuLi5JTklUSUFMX1NUQVRFLlBlcnNvbmFsaXphdGlvbiB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIEluZmVycmVkUGVyc29uYWxpemF0aW9uKFxuICBwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkluZmVycmVkUGVyc29uYWxpemF0aW9uLFxuICBhY3Rpb25cbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgaW5mZXJyZWRJbnRlcmVzdHM6IGFjdGlvbi5kYXRhLmluZmVycmVkSW50ZXJlc3RzLFxuICAgICAgICBjb2Fyc2VJbmZlcnJlZEludGVyZXN0czogYWN0aW9uLmRhdGEuY29hcnNlSW5mZXJyZWRJbnRlcmVzdHMsXG4gICAgICAgIGNvYXJzZVByaXZhdGVJbmZlcnJlZEludGVyZXN0czpcbiAgICAgICAgICBhY3Rpb24uZGF0YS5jb2Fyc2VQcml2YXRlSW5mZXJyZWRJbnRlcmVzdHMsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24uZGF0YS5sYXN0VXBkYXRlZCxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fUkVTRVQ6XG4gICAgICByZXR1cm4geyAuLi5JTklUSUFMX1NUQVRFLkluZmVycmVkUGVyc29uYWxpemF0aW9uIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIERpc2NvdmVyeVN0cmVhbShwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkRpc2NvdmVyeVN0cmVhbSwgYWN0aW9uKSB7XG4gIC8vIFJldHVybiBpZiBhY3Rpb24gZGF0YSBpcyBlbXB0eSwgb3Igc3BvY3Mgb3IgZmVlZHMgZGF0YSBpcyBub3QgbG9hZGVkXG4gIGNvbnN0IGlzTm90UmVhZHkgPSAoKSA9PlxuICAgICFhY3Rpb24uZGF0YSB8fCAhcHJldlN0YXRlLnNwb2NzLmxvYWRlZCB8fCAhcHJldlN0YXRlLmZlZWRzLmxvYWRlZDtcblxuICBjb25zdCBoYW5kbGVQbGFjZW1lbnRzID0gaGFuZGxlU2l0ZXMgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSwgcGxhY2VtZW50cyB9ID0gcHJldlN0YXRlLnNwb2NzO1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuXG4gICAgY29uc3QgZm9yUGxhY2VtZW50ID0gcGxhY2VtZW50ID0+IHtcbiAgICAgIGNvbnN0IHBsYWNlbWVudFNwb2NzID0gZGF0YVtwbGFjZW1lbnQubmFtZV07XG5cbiAgICAgIGlmIChcbiAgICAgICAgIXBsYWNlbWVudFNwb2NzIHx8XG4gICAgICAgICFwbGFjZW1lbnRTcG9jcy5pdGVtcyB8fFxuICAgICAgICAhcGxhY2VtZW50U3BvY3MuaXRlbXMubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXN1bHRbcGxhY2VtZW50Lm5hbWVdID0ge1xuICAgICAgICAuLi5wbGFjZW1lbnRTcG9jcyxcbiAgICAgICAgaXRlbXM6IGhhbmRsZVNpdGVzKHBsYWNlbWVudFNwb2NzLml0ZW1zKSxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGlmICghcGxhY2VtZW50cyB8fCAhcGxhY2VtZW50cy5sZW5ndGgpIHtcbiAgICAgIFt7IG5hbWU6IFwic3BvY3NcIiB9XS5mb3JFYWNoKGZvclBsYWNlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYWNlbWVudHMuZm9yRWFjaChmb3JQbGFjZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IG5leHRTdGF0ZSA9IGhhbmRsZVNpdGVzID0+ICh7XG4gICAgLi4ucHJldlN0YXRlLFxuICAgIHNwb2NzOiB7XG4gICAgICAuLi5wcmV2U3RhdGUuc3BvY3MsXG4gICAgICBkYXRhOiBoYW5kbGVQbGFjZW1lbnRzKGhhbmRsZVNpdGVzKSxcbiAgICB9LFxuICAgIGZlZWRzOiB7XG4gICAgICAuLi5wcmV2U3RhdGUuZmVlZHMsXG4gICAgICBkYXRhOiBPYmplY3Qua2V5cyhwcmV2U3RhdGUuZmVlZHMuZGF0YSkucmVkdWNlKFxuICAgICAgICAoYWNjdW11bGF0b3IsIGZlZWRfdXJsKSA9PiB7XG4gICAgICAgICAgYWNjdW11bGF0b3JbZmVlZF91cmxdID0ge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAuLi5wcmV2U3RhdGUuZmVlZHMuZGF0YVtmZWVkX3VybF0uZGF0YSxcbiAgICAgICAgICAgICAgcmVjb21tZW5kYXRpb25zOiBoYW5kbGVTaXRlcyhcbiAgICAgICAgICAgICAgICBwcmV2U3RhdGUuZmVlZHMuZGF0YVtmZWVkX3VybF0uZGF0YS5yZWNvbW1lbmRhdGlvbnNcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApLFxuICAgIH0sXG4gIH0pO1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX0NIQU5HRTpcbiAgICAvLyBGYWxsIHRocm91Z2ggdG8gYSBzZXBhcmF0ZSBhY3Rpb24gaXMgc28gaXQgZG9lc24ndCB0cmlnZ2VyIGEgbGlzdGVuZXIgdXBkYXRlIG9uIGluaXRcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1NFVFVQOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBjb25maWc6IGFjdGlvbi5kYXRhIHx8IHt9IH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0VYUEVSSU1FTlRfREFUQTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgZXhwZXJpbWVudERhdGE6IGFjdGlvbi5kYXRhIHx8IHt9IH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0xBWU9VVF9VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGxheW91dDogYWN0aW9uLmRhdGEubGF5b3V0IHx8IFtdLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fVE9QSUNTX0xPQURJTkc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHRvcGljc0xvYWRpbmc6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fUFJFRlNfU0VUVVA6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHBvY2tldEJ1dHRvbkVuYWJsZWQ6IGFjdGlvbi5kYXRhLnBvY2tldEJ1dHRvbkVuYWJsZWQsXG4gICAgICAgIGhpZGVEZXNjcmlwdGlvbnM6IGFjdGlvbi5kYXRhLmhpZGVEZXNjcmlwdGlvbnMsXG4gICAgICAgIGNvbXBhY3RJbWFnZXM6IGFjdGlvbi5kYXRhLmNvbXBhY3RJbWFnZXMsXG4gICAgICAgIGltYWdlR3JhZGllbnQ6IGFjdGlvbi5kYXRhLmltYWdlR3JhZGllbnQsXG4gICAgICAgIG5ld1Nwb25zb3JlZExhYmVsOiBhY3Rpb24uZGF0YS5uZXdTcG9uc29yZWRMYWJlbCxcbiAgICAgICAgdGl0bGVMaW5lczogYWN0aW9uLmRhdGEudGl0bGVMaW5lcyxcbiAgICAgICAgZGVzY0xpbmVzOiBhY3Rpb24uZGF0YS5kZXNjTGluZXMsXG4gICAgICAgIHJlYWRUaW1lOiBhY3Rpb24uZGF0YS5yZWFkVGltZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1BPQ0tFVF9TVEFURV9TRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzVXNlckxvZ2dlZEluOiBhY3Rpb24uZGF0YS5pc1VzZXJMb2dnZWRJbixcbiAgICAgIH07XG4gICAgY2FzZSBhdC5TSE9XX1BSSVZBQ1lfSU5GTzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0xBWU9VVF9SRVNFVDpcbiAgICAgIHJldHVybiB7IC4uLklOSVRJQUxfU1RBVEUuRGlzY292ZXJ5U3RyZWFtLCBjb25maWc6IHByZXZTdGF0ZS5jb25maWcgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fRkVFRFNfVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBmZWVkczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5mZWVkcyxcbiAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9GRUVEX1VQREFURToge1xuICAgICAgY29uc3QgbmV3RGF0YSA9IHt9O1xuICAgICAgbmV3RGF0YVthY3Rpb24uZGF0YS51cmxdID0gYWN0aW9uLmRhdGEuZmVlZDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZmVlZHMsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLmRhdGEsXG4gICAgICAgICAgICAuLi5uZXdEYXRhLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fREVWX0lNUFJFU1NJT05TOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpbXByZXNzaW9uczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5pbXByZXNzaW9ucyxcbiAgICAgICAgICBmZWVkOiBhY3Rpb24uZGF0YSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9CTE9DS1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGJsb2NrczogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9TUE9DU19DQVBTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzcG9jczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5zcG9jcyxcbiAgICAgICAgICBmcmVxdWVuY3lfY2FwczogWy4uLnByZXZTdGF0ZS5zcG9jcy5mcmVxdWVuY3lfY2FwcywgLi4uYWN0aW9uLmRhdGFdLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfRU5EUE9JTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNwb2NzOiB7XG4gICAgICAgICAgLi4uSU5JVElBTF9TVEFURS5EaXNjb3ZlcnlTdHJlYW0uc3BvY3MsXG4gICAgICAgICAgc3BvY3NfZW5kcG9pbnQ6XG4gICAgICAgICAgICBhY3Rpb24uZGF0YS51cmwgfHxcbiAgICAgICAgICAgIElOSVRJQUxfU1RBVEUuRGlzY292ZXJ5U3RyZWFtLnNwb2NzLnNwb2NzX2VuZHBvaW50LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfUExBQ0VNRU5UUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc3BvY3M6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuc3BvY3MsXG4gICAgICAgICAgcGxhY2VtZW50czpcbiAgICAgICAgICAgIGFjdGlvbi5kYXRhLnBsYWNlbWVudHMgfHxcbiAgICAgICAgICAgIElOSVRJQUxfU1RBVEUuRGlzY292ZXJ5U3RyZWFtLnNwb2NzLnBsYWNlbWVudHMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9TUE9DU19VUERBVEU6XG4gICAgICBpZiAoYWN0aW9uLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgICAgc3BvY3M6IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5zcG9jcyxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24uZGF0YS5sYXN0VXBkYXRlZCxcbiAgICAgICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLnNwb2NzLFxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9TUE9DX0JMT0NLRUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNwb2NzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnNwb2NzLFxuICAgICAgICAgIGJsb2NrZWQ6IFsuLi5wcmV2U3RhdGUuc3BvY3MuYmxvY2tlZCwgYWN0aW9uLmRhdGEudXJsXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0xJTktfQkxPQ0tFRDpcbiAgICAgIHJldHVybiBpc05vdFJlYWR5KClcbiAgICAgICAgPyBwcmV2U3RhdGVcbiAgICAgICAgOiBuZXh0U3RhdGUoaXRlbXMgPT5cbiAgICAgICAgICAgIGl0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0udXJsICE9PSBhY3Rpb24uZGF0YS51cmwpXG4gICAgICAgICAgKTtcblxuICAgIGNhc2UgYXQuUExBQ0VTX0JPT0tNQVJLX0FEREVEOiB7XG4gICAgICBjb25zdCB1cGRhdGVCb29rbWFya0luZm8gPSBpdGVtID0+IHtcbiAgICAgICAgaWYgKGl0ZW0udXJsID09PSBhY3Rpb24uZGF0YS51cmwpIHtcbiAgICAgICAgICBjb25zdCB7IGJvb2ttYXJrR3VpZCwgYm9va21hcmtUaXRsZSwgZGF0ZUFkZGVkIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSwge1xuICAgICAgICAgICAgYm9va21hcmtHdWlkLFxuICAgICAgICAgICAgYm9va21hcmtUaXRsZSxcbiAgICAgICAgICAgIGJvb2ttYXJrRGF0ZUNyZWF0ZWQ6IGRhdGVBZGRlZCxcbiAgICAgICAgICAgIGNvbnRleHRfdHlwZTogXCJib29rbWFya1wiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBpc05vdFJlYWR5KClcbiAgICAgICAgPyBwcmV2U3RhdGVcbiAgICAgICAgOiBuZXh0U3RhdGUoaXRlbXMgPT4gaXRlbXMubWFwKHVwZGF0ZUJvb2ttYXJrSW5mbykpO1xuICAgIH1cbiAgICBjYXNlIGF0LlBMQUNFU19CT09LTUFSS1NfUkVNT1ZFRDoge1xuICAgICAgY29uc3QgcmVtb3ZlQm9va21hcmtJbmZvID0gaXRlbSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24uZGF0YS51cmxzLmluY2x1ZGVzKGl0ZW0udXJsKSkge1xuICAgICAgICAgIGNvbnN0IG5ld1NpdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpdGVtKTtcbiAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya0d1aWQ7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtUaXRsZTtcbiAgICAgICAgICBkZWxldGUgbmV3U2l0ZS5ib29rbWFya0RhdGVDcmVhdGVkO1xuICAgICAgICAgIGlmICghbmV3U2l0ZS5jb250ZXh0X3R5cGUgfHwgbmV3U2l0ZS5jb250ZXh0X3R5cGUgPT09IFwiYm9va21hcmtcIikge1xuICAgICAgICAgICAgbmV3U2l0ZS5jb250ZXh0X3R5cGUgPSBcInJlbW92ZWRCb29rbWFya1wiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3U2l0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gaXNOb3RSZWFkeSgpXG4gICAgICAgID8gcHJldlN0YXRlXG4gICAgICAgIDogbmV4dFN0YXRlKGl0ZW1zID0+IGl0ZW1zLm1hcChyZW1vdmVCb29rbWFya0luZm8pKTtcbiAgICB9XG4gICAgY2FzZSBhdC5UT1BJQ19TRUxFQ1RJT05fU1BPVExJR0hUX09QRU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNob3dUb3BpY1NlbGVjdGlvbjogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5UT1BJQ19TRUxFQ1RJT05fU1BPVExJR0hUX0NMT1NFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzaG93VG9waWNTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LlNFQ1RJT05fQkxPQ0tFRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvd0Jsb2NrU2VjdGlvbkNvbmZpcm1hdGlvbjogdHJ1ZSxcbiAgICAgICAgc2VjdGlvblBlcnNvbmFsaXphdGlvbjogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuUkVQT1JUX0FEX09QRU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHJlcG9ydDoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5yZXBvcnQsXG4gICAgICAgICAgY2FyZF90eXBlOiBhY3Rpb24uZGF0YT8uY2FyZF90eXBlLFxuICAgICAgICAgIHBvc2l0aW9uOiBhY3Rpb24uZGF0YT8ucG9zaXRpb24sXG4gICAgICAgICAgcGxhY2VtZW50X2lkOiBhY3Rpb24uZGF0YT8ucGxhY2VtZW50X2lkLFxuICAgICAgICAgIHJlcG9ydGluZ191cmw6IGFjdGlvbi5kYXRhPy5yZXBvcnRpbmdfdXJsLFxuICAgICAgICAgIHVybDogYWN0aW9uLmRhdGE/LnVybCxcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LlJFUE9SVF9DT05URU5UX09QRU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHJlcG9ydDoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5yZXBvcnQsXG4gICAgICAgICAgY2FyZF90eXBlOiBhY3Rpb24uZGF0YT8uY2FyZF90eXBlLFxuICAgICAgICAgIGNvcnB1c19pdGVtX2lkOiBhY3Rpb24uZGF0YT8uY29ycHVzX2l0ZW1faWQsXG4gICAgICAgICAgc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkOiBhY3Rpb24uZGF0YT8uc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IGFjdGlvbi5kYXRhPy5zZWN0aW9uX3Bvc2l0aW9uLFxuICAgICAgICAgIHNlY3Rpb246IGFjdGlvbi5kYXRhPy5zZWN0aW9uLFxuICAgICAgICAgIHRpdGxlOiBhY3Rpb24uZGF0YT8udGl0bGUsXG4gICAgICAgICAgdG9waWM6IGFjdGlvbi5kYXRhPy50b3BpYyxcbiAgICAgICAgICB1cmw6IGFjdGlvbi5kYXRhPy51cmwsXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5SRVBPUlRfQ0xPU0U6XG4gICAgY2FzZSBhdC5SRVBPUlRfQURfU1VCTUlUOlxuICAgIGNhc2UgYXQuUkVQT1JUX0NPTlRFTlRfU1VCTUlUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICByZXBvcnQ6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUucmVwb3J0LFxuICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1VQREFURTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc2VjdGlvblBlcnNvbmFsaXphdGlvbjogYWN0aW9uLmRhdGEgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBTZWFyY2gocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5TZWFyY2gsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5ESVNBQkxFX1NFQVJDSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgLi4ucHJldlN0YXRlLCBkaXNhYmxlOiB0cnVlIH0pO1xuICAgIGNhc2UgYXQuRkFLRV9GT0NVU19TRUFSQ0g6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IC4uLnByZXZTdGF0ZSwgZmFrZUZvY3VzOiB0cnVlIH0pO1xuICAgIGNhc2UgYXQuU0hPV19TRUFSQ0g6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IC4uLnByZXZTdGF0ZSwgZGlzYWJsZTogZmFsc2UsIGZha2VGb2N1czogZmFsc2UgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gV2FsbHBhcGVycyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLldhbGxwYXBlcnMsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5XQUxMUEFQRVJTX1NFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgd2FsbHBhcGVyTGlzdDogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0FMTFBBUEVSU19GRUFUVVJFX0hJR0hMSUdIVF9DT1VOVEVSX0lOQ1JFTUVOVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaGlnaGxpZ2h0U2VlbkNvdW50ZXI6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldBTExQQVBFUlNfQ0FURUdPUllfU0VUOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgYXQuV0FMTFBBUEVSU19DVVNUT01fU0VUOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCB1cGxvYWRlZFdhbGxwYXBlcjogYWN0aW9uLmRhdGEgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBOb3RpZmljYXRpb25zKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuTm90aWZpY2F0aW9ucywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LlNIT1dfVE9BU1RfTUVTU0FHRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnM6IGFjdGlvbi5kYXRhLnNob3dOb3RpZmljYXRpb25zLFxuICAgICAgICB0b2FzdENvdW50ZXI6IHByZXZTdGF0ZS50b2FzdENvdW50ZXIgKyAxLFxuICAgICAgICB0b2FzdElkOiBhY3Rpb24uZGF0YS50b2FzdElkLFxuICAgICAgICB0b2FzdFF1ZXVlOiBbYWN0aW9uLmRhdGEudG9hc3RJZF0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuSElERV9UT0FTVF9NRVNTQUdFOiB7XG4gICAgICBjb25zdCB7IHNob3dOb3RpZmljYXRpb25zLCB0b2FzdElkOiBoaWRkZW5Ub2FzdElkIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgIGNvbnN0IHF1ZXVlZFRvYXN0cyA9IFsuLi5wcmV2U3RhdGUudG9hc3RRdWV1ZV0uZmlsdGVyKFxuICAgICAgICB0b2FzdElkID0+IHRvYXN0SWQgIT09IGhpZGRlblRvYXN0SWRcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHRvYXN0Q291bnRlcjogcXVldWVkVG9hc3RzLmxlbmd0aCxcbiAgICAgICAgdG9hc3RRdWV1ZTogcXVldWVkVG9hc3RzLFxuICAgICAgICB0b2FzdElkOiBcIlwiLFxuICAgICAgICBzaG93Tm90aWZpY2F0aW9ucyxcbiAgICAgIH07XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFdlYXRoZXIocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5XZWF0aGVyLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuV0VBVEhFUl9VUERBVEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHN1Z2dlc3Rpb25zOiBhY3Rpb24uZGF0YS5zdWdnZXN0aW9ucyxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5kYXRhLmRhdGUsXG4gICAgICAgIGxvY2F0aW9uRGF0YTogYWN0aW9uLmRhdGEubG9jYXRpb25EYXRhIHx8IHByZXZTdGF0ZS5sb2NhdGlvbkRhdGEsXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldFQVRIRVJfU0VBUkNIX0FDVElWRTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc2VhcmNoQWN0aXZlOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgYXQuV0VBVEhFUl9MT0NBVElPTl9TRUFSQ0hfVVBEQVRFOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBsb2NhdGlvblNlYXJjaFN0cmluZzogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlIGF0LldFQVRIRVJfTE9DQVRJT05fU1VHR0VTVElPTlNfVVBEQVRFOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBzdWdnZXN0ZWRMb2NhdGlvbnM6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5XRUFUSEVSX0xPQ0FUSU9OX0RBVEFfVVBEQVRFOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBsb2NhdGlvbkRhdGE6IGFjdGlvbi5kYXRhIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gQWRzKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuQWRzLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuQURTX0lOSVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkFEU19VUERBVEVfVElMRVM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHRpbGVzOiBhY3Rpb24uZGF0YS50aWxlcyxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5BRFNfVVBEQVRFX1NQT0NTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzcG9jczogYWN0aW9uLmRhdGEuc3BvY3MsXG4gICAgICAgIHNwb2NQbGFjZW1lbnRzOiBhY3Rpb24uZGF0YS5zcG9jUGxhY2VtZW50cyxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5BRFNfUkVTRVQ6XG4gICAgICByZXR1cm4geyAuLi5JTklUSUFMX1NUQVRFLkFkcyB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyZW5kaW5nU2VhcmNoKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuVHJlbmRpbmdTZWFyY2gsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5UUkVORElOR19TRUFSQ0hfVVBEQVRFOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBzdWdnZXN0aW9uczogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlIGF0LlRSRU5ESU5HX1NFQVJDSF9UT0dHTEVfQ09MTEFQU0U6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGNvbGxhcHNlZDogYWN0aW9uLmRhdGEuY29sbGFwc2VkIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gVGltZXJXaWRnZXQocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5UaW1lcldpZGdldCwgYWN0aW9uKSB7XG4gIC8vIGZhbGxiYWNrIHRvIGN1cnJlbnQgdGltZXJUeXBlIGluIHN0YXRlIGlmIG5vdCBwcm92aWRlZCBpbiBhY3Rpb25cbiAgY29uc3QgdGltZXJUeXBlID0gYWN0aW9uLmRhdGE/LnRpbWVyVHlwZSB8fCBwcmV2U3RhdGUudGltZXJUeXBlO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5XSURHRVRTX1RJTUVSX1NFVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9TRVRfVFlQRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgdGltZXJUeXBlOiBhY3Rpb24uZGF0YS50aW1lclR5cGUsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9TRVRfRFVSQVRJT046XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIFt0aW1lclR5cGVdOiB7XG4gICAgICAgICAgLy8gc2V0dGluZyBhIGR5bmFtaWMga2V5IGFzc2lnbm1lbnQgdG8gbGV0IHVzIGR5bmFtaWNhbGx5IHVwZGF0ZSB0aW1lciB0eXBlJ3Mgc3RhdGUgYmFzZWQgb24gd2hhdCBpcyBzZXRcbiAgICAgICAgICBkdXJhdGlvbjogYWN0aW9uLmRhdGEuZHVyYXRpb24sXG4gICAgICAgICAgaW5pdGlhbER1cmF0aW9uOiBhY3Rpb24uZGF0YS5kdXJhdGlvbixcbiAgICAgICAgICBzdGFydFRpbWU6IG51bGwsXG4gICAgICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5XSURHRVRTX1RJTUVSX1BMQVk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIFt0aW1lclR5cGVdOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlW3RpbWVyVHlwZV0sXG4gICAgICAgICAgc3RhcnRUaW1lOiBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKSwgLy8gcmVmbGVjdGVkIGluIHNlY29uZHNcbiAgICAgICAgICBpc1J1bm5pbmc6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9QQVVTRTpcbiAgICAgIGlmIChwcmV2U3RhdGVbdGltZXJUeXBlXT8uaXNSdW5uaW5nKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIFt0aW1lclR5cGVdOiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGVbdGltZXJUeXBlXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBhY3Rpb24uZGF0YS5kdXJhdGlvbixcbiAgICAgICAgICAgIC8vIHNldHRpbmcgc3RhcnRUaW1lIHRvIG51bGwgb24gcGF1c2UgYmVjYXVzZSB3ZSBuZWVkIHRvIGNoZWNrIHRoZSBleGFjdCB0aW1lIHRoZSB1c2VyIHByZXNzZXMgcGxheSxcbiAgICAgICAgICAgIC8vIHdoZXRoZXIgaXQncyB3aGVuIHRoZSB1c2VyIHN0YXJ0cyBvciByZXN1bWVzIHRoZSB0aW1lci4gVGhpcyBoZWxwcyBnZXQgYWNjdXJhdGUgcmVzdWx0c1xuICAgICAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgICAgICAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICBjYXNlIGF0LldJREdFVFNfVElNRVJfUkVTRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIFt0aW1lclR5cGVdOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlW3RpbWVyVHlwZV0sXG4gICAgICAgICAgZHVyYXRpb246IGFjdGlvbi5kYXRhLmR1cmF0aW9uLFxuICAgICAgICAgIGluaXRpYWxEdXJhdGlvbjogYWN0aW9uLmRhdGEuZHVyYXRpb24sXG4gICAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9FTkQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIFt0aW1lclR5cGVdOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlW3RpbWVyVHlwZV0sXG4gICAgICAgICAgZHVyYXRpb246IGFjdGlvbi5kYXRhLmR1cmF0aW9uLFxuICAgICAgICAgIGluaXRpYWxEdXJhdGlvbjogYWN0aW9uLmRhdGEuZHVyYXRpb24sXG4gICAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIExpc3RzV2lkZ2V0KHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuTGlzdHNXaWRnZXQsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5XSURHRVRTX0xJU1RTX1NFVDpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgbGlzdHM6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5XSURHRVRTX0xJU1RTX1NFVF9TRUxFQ1RFRDpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc2VsZWN0ZWQ6IGFjdGlvbi5kYXRhIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJzID0ge1xuICBUb3BTaXRlcyxcbiAgQXBwLFxuICBBZHMsXG4gIFByZWZzLFxuICBEaWFsb2csXG4gIFNlY3Rpb25zLFxuICBNZXNzYWdlcyxcbiAgTm90aWZpY2F0aW9ucyxcbiAgUG9ja2V0LFxuICBQZXJzb25hbGl6YXRpb24sXG4gIEluZmVycmVkUGVyc29uYWxpemF0aW9uLFxuICBEaXNjb3ZlcnlTdHJlYW0sXG4gIFNlYXJjaCxcbiAgVGltZXJXaWRnZXQsXG4gIExpc3RzV2lkZ2V0LFxuICBUcmVuZGluZ1NlYXJjaCxcbiAgV2FsbHBhcGVycyxcbiAgV2VhdGhlcixcbn07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBCYXNlIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvQmFzZS9CYXNlXCI7XG5pbXBvcnQgeyBEZXRlY3RVc2VyU2Vzc2lvblN0YXJ0IH0gZnJvbSBcImNvbnRlbnQtc3JjL2xpYi9kZXRlY3QtdXNlci1zZXNzaW9uLXN0YXJ0XCI7XG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tIFwiY29udGVudC1zcmMvbGliL2luaXQtc3RvcmVcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgcmVkdWNlcnMgfSBmcm9tIFwiY29tbW9uL1JlZHVjZXJzLnN5cy5tanNcIjtcblxuZXhwb3J0IGNvbnN0IE5ld1RhYiA9ICh7IHN0b3JlIH0pID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEJhc2UgLz5cbiAgPC9Qcm92aWRlcj5cbik7XG5cbmZ1bmN0aW9uIGRvUmVxdWVzdFdoZW5SZWFkeSgpIHtcbiAgLy8gSWYgdGhpcyBkb2N1bWVudCBoYXMgYWxyZWFkeSBnb25lIGludG8gdGhlIGJhY2tncm91bmQgYnkgdGhlIHRpbWUgd2UndmUgcmVhY2hlZFxuICAvLyBoZXJlLCB3ZSBjYW4gZGVwcmlvcml0aXplIHRoZSByZXF1ZXN0IHVudGlsIHRoZSBldmVudCBsb29wXG4gIC8vIGZyZWVzIHVwLiBJZiwgaG93ZXZlciwgdGhlIHZpc2liaWxpdHkgY2hhbmdlcywgd2UgdGhlbiBzZW5kIHRoZSByZXF1ZXN0LlxuICBjb25zdCBkb1JlcXVlc3RQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgbGV0IGRpZFJlcXVlc3QgPSBmYWxzZTtcbiAgICBsZXQgcmVxdWVzdElkbGVDYWxsYmFja0lkID0gMDtcbiAgICBmdW5jdGlvbiBkb1JlcXVlc3QoKSB7XG4gICAgICBpZiAoIWRpZFJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3RJZGxlQ2FsbGJhY2tJZCkge1xuICAgICAgICAgIGNhbmNlbElkbGVDYWxsYmFjayhyZXF1ZXN0SWRsZUNhbGxiYWNrSWQpO1xuICAgICAgICB9XG4gICAgICAgIGRpZFJlcXVlc3QgPSB0cnVlO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgcmVxdWVzdElkbGVDYWxsYmFja0lkID0gcmVxdWVzdElkbGVDYWxsYmFjayhkb1JlcXVlc3QpO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcInZpc2liaWxpdHljaGFuZ2VcIiwgZG9SZXF1ZXN0LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkb1JlcXVlc3RQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2l0aG91dFN0YXRlKCkge1xuICBjb25zdCBzdG9yZSA9IGluaXRTdG9yZShyZWR1Y2Vycyk7XG4gIG5ldyBEZXRlY3RVc2VyU2Vzc2lvblN0YXJ0KHN0b3JlKS5zZW5kRXZlbnRPckFkZExpc3RlbmVyKCk7XG5cbiAgZG9SZXF1ZXN0V2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgLy8gSWYgc3RhdGUgZXZlbnRzIGhhcHBlbmVkIGJlZm9yZSB3ZSBnb3QgaGVyZSwgd2UgY2FuIHJlcXVlc3Qgc3RhdGUgYWdhaW4uXG4gICAgc3RvcmUuZGlzcGF0Y2goYWMuQWxzb1RvTWFpbih7IHR5cGU6IGF0Lk5FV19UQUJfU1RBVEVfUkVRVUVTVCB9KSk7XG4gICAgLy8gSWYgd2UgcmVuZGVyZWQgd2l0aG91dCBzdGF0ZSwgd2UgZG9uJ3QgbmVlZCB0aGUgc3RhcnR1cCBjYWNoZS5cbiAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oeyB0eXBlOiBhdC5ORVdfVEFCX1NUQVRFX1JFUVVFU1RfV0lUSE9VVF9TVEFSVFVQQ0FDSEUgfSlcbiAgICApO1xuICB9KTtcblxuICBSZWFjdERPTS5oeWRyYXRlKDxOZXdUYWIgc3RvcmU9e3N0b3JlfSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckNhY2hlKGluaXRpYWxTdGF0ZSkge1xuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgaW5pdGlhbFN0YXRlLkFwcC5pc0ZvclN0YXJ0dXBDYWNoZS5BcHAgPSBmYWxzZTtcbiAgfVxuICBjb25zdCBzdG9yZSA9IGluaXRTdG9yZShyZWR1Y2VycywgaW5pdGlhbFN0YXRlKTtcbiAgbmV3IERldGVjdFVzZXJTZXNzaW9uU3RhcnQoc3RvcmUpLnNlbmRFdmVudE9yQWRkTGlzdGVuZXIoKTtcblxuICBkb1JlcXVlc3RXaGVuUmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAvLyBJZiBzdGF0ZSBldmVudHMgaGFwcGVuZWQgYmVmb3JlIHdlIGdvdCBoZXJlLFxuICAgIC8vIHdlIGNhbiBub3RpZnkgbWFpbiB0aGF0IHdlIG5lZWQgdXBkYXRlcy5cbiAgICAvLyBUaGUgaW5kaXZpZHVhbCBmZWVkcyBrbm93IHdoYXQgc3RhdGUgaXMgbm90IGNhY2hlZC5cbiAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oeyB0eXBlOiBhdC5ORVdfVEFCX1NUQVRFX1JFUVVFU1RfU1RBUlRVUENBQ0hFIH0pXG4gICAgKTtcbiAgfSk7XG5cbiAgUmVhY3RET00uaHlkcmF0ZSg8TmV3VGFiIHN0b3JlPXtzdG9yZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaW1wbGVIYXNoUm91dGVyIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJvbkhhc2hDaGFuZ2UiLCJiaW5kIiwic3RhdGUiLCJoYXNoIiwiZ2xvYmFsVGhpcyIsImxvY2F0aW9uIiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVuZGVyIiwicm91dGVzIiwic3BsaXQiLCJjbG9uZUVsZW1lbnQiLCJjaGlsZHJlbiIsImFjdGlvbkNyZWF0b3JzIiwiYWMiLCJhY3Rpb25UeXBlcyIsImF0IiwiY29ubmVjdCIsIlBSRUZfQURfU0laRV9NRURJVU1fUkVDVEFOR0xFIiwiUFJFRl9BRF9TSVpFX0JJTExCT0FSRCIsIlBSRUZfQURfU0laRV9MRUFERVJCT0FSRCIsIlBSRUZfQ09OVEVYVFVBTF9DT05URU5UX1NFTEVDVEVEX0ZFRUQiLCJQUkVGX0NPTlRFWFRVQUxfQ09OVEVOVF9GRUVEUyIsIlBSRUZfU0VDVElPTlNfRU5BQkxFRCIsIlBSRUZfU1BPQ19QTEFDRU1FTlRTIiwiUFJFRl9TUE9DX0NPVU5UUyIsIlBSRUZfQ09OVEVYVFVBTF9BRFNfRU5BQkxFRCIsIlBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfUExBQ0VNRU5UUyIsIlBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfQ09VTlRTIiwiUm93IiwiY3JlYXRlRWxlbWVudCIsIl9leHRlbmRzIiwiY2xhc3NOYW1lIiwicmVsYXRpdmVUaW1lIiwidGltZXN0YW1wIiwic2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJtaW51dGVzIiwidG9Mb2NhbGVTdHJpbmciLCJUb2dnbGVTdG9yeUJ1dHRvbiIsImhhbmRsZUNsaWNrIiwib25DbGljayIsInN0b3J5IiwiVG9nZ2xlUHJlZkNoZWNrYm94Iiwib25DaGFuZ2UiLCJldmVudCIsInByZWYiLCJ0YXJnZXQiLCJjaGVja2VkIiwiRnJhZ21lbnQiLCJ0eXBlIiwiZGlzYWJsZWQiLCJQZXJzb25hbGl6YXRpb24iLCJ0b2dnbGVQZXJzb25hbGl6YXRpb24iLCJkaXNwYXRjaCIsIk9ubHlUb01haW4iLCJESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9UT0dHTEUiLCJsYXN0VXBkYXRlZCIsImluaXRpYWxpemVkIiwiY29sU3BhbiIsInBlcnNvbmFsaXplZCIsIkRpc2NvdmVyeVN0cmVhbUFkbWluVUkiLCJyZXN0b3JlUHJlZkRlZmF1bHRzIiwic2V0Q29uZmlnVmFsdWUiLCJleHBpcmVDYWNoZSIsInJlZnJlc2hDYWNoZSIsInNob3dQbGFjZWhvbGRlciIsImlkbGVEYWlseSIsInN5c3RlbVRpY2siLCJzeW5jUmVtb3RlU2V0dGluZ3MiLCJvblN0b3J5VG9nZ2xlIiwiaGFuZGxlV2VhdGhlclN1Ym1pdCIsImhhbmRsZVdlYXRoZXJVcGRhdGUiLCJyZXNldEJsb2NrcyIsInJlZnJlc2hJbmZlcnJlZFBlcnNvbmFsaXphdGlvbiIsInJlZnJlc2hUb3BpY1NlbGVjdGlvbkNhY2hlIiwidG9nZ2xlVEJSRmVlZCIsImhhbmRsZVNlY3Rpb25zVG9nZ2xlIiwidG9nZ2xlSUFCQmFubmVycyIsInRvZ2dsZWRTdG9yaWVzIiwid2VhdGhlclF1ZXJ5IiwiY29uZmlnTmFtZSIsImNvbmZpZ1ZhbHVlIiwiRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfU0VUX1ZBTFVFIiwiZGF0YSIsIm5hbWUiLCJ2YWx1ZSIsIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1JFU0VUX0RFRkFVTFRTIiwiY29uZmlnIiwiRGlzY292ZXJ5U3RyZWFtIiwiRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfQ0hBTkdFIiwiSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1JFRlJFU0giLCJTZXRQcmVmIiwiZGlzcGF0Y2hTaW1wbGVBY3Rpb24iLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9CTE9DS1NfUkVTRVQiLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9TWVNURU1fVElDSyIsIkRJU0NPVkVSWV9TVFJFQU1fREVWX0VYUElSRV9DQUNIRSIsIkRJU0NPVkVSWV9TVFJFQU1fREVWX1NIT1dfUExBQ0VIT0xERVIiLCJlIiwiZmVlZCIsInNlbGVjdGVkRmVlZCIsIkRJU0NPVkVSWV9TVFJFQU1fREVWX0lETEVfREFJTFkiLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9TWU5DX1JTIiwicHJldmVudERlZmF1bHQiLCJwcmVzc2VkIiwiaWQiLCJnZW5lcmF0ZVNwb2NQcmVmVmFsdWVzIiwicGxhY2VtZW50cyIsIm90aGVyUHJlZnMiLCJtYXAiLCJpdGVtIiwidHJpbSIsImZpbHRlciIsImNvdW50cyIsInN1cHBvcnRJQUJBZFR5cGVzIiwiY291bnRWYWx1ZSIsImluY2x1ZGVzIiwiRXJyb3IiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiam9pbiIsInJlbmRlckNvbXBvbmVudCIsIndpZHRoIiwiY29tcG9uZW50IiwicmVuZGVyRmVlZCIsInJlbmRlcldlYXRoZXJEYXRhIiwic3VnZ2VzdGlvbnMiLCJXZWF0aGVyIiwid2VhdGhlclRhYmxlIiwib25TdWJtaXQiLCJodG1sRm9yIiwibWluIiwibWF4Iiwic3VnZ2VzdGlvbiIsImtleSIsImNpdHlfbmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW5kZXJQZXJzb25hbGl6YXRpb25EYXRhIiwiaW5mZXJyZWRJbnRlcmVzdHMiLCJjb2Fyc2VJbmZlcnJlZEludGVyZXN0cyIsImNvYXJzZVByaXZhdGVJbmZlcnJlZEludGVyZXN0cyIsIkluZmVycmVkUGVyc29uYWxpemF0aW9uIiwicmVuZGVyRmVlZERhdGEiLCJ1cmwiLCJmZWVkcyIsInJlY29tbWVuZGF0aW9ucyIsInJlbmRlclN0b3J5RGF0YSIsInJlbmRlckZlZWRzRGF0YSIsIk9iamVjdCIsImtleXMiLCJyZW5kZXJJbXByZXNzaW9uc0RhdGEiLCJpbXByZXNzaW9ucyIsInJlbmRlckJsb2Nrc0RhdGEiLCJibG9ja3MiLCJyZW5kZXJTcG9jcyIsInNwb2NzIiwidW5pZmllZEFkc1Nwb2NzRW5hYmxlZCIsIlBSRUZfVU5JRklFRF9BRFNfQURTRkVFRF9FTkFCTEVEIiwiYWRzRmVlZEVuYWJsZWQiLCJ1bmlmaWVkQWRzRW5kcG9pbnQiLCJzcG9jc0RhdGEiLCJuZXd0YWJfc3BvY3MiLCJpdGVtcyIsInNwb2NzX2VuZHBvaW50Iiwic3BvYyIsImZyZXF1ZW5jeV9jYXBzIiwic3RvcnlEYXRhIiwicHJlZlRvZ2dsZXMiLCJsYXlvdXQiLCJzZWN0aW9uc0VuYWJsZWQiLCJUQlJGZWVkcyIsInMiLCJtZWRpdW1SZWN0YW5nbGVFbmFibGVkIiwiYmlsbGJvYXJkc0VuYWJsZWQiLCJsZWFkZXJib2FyZEVuYWJsZWQiLCJzcG9jUGxhY2VtZW50cyIsIm1lZGl1bVJlY3RhbmdsZUVuYWJsZWRQcmVzc2VkIiwiYmlsbGJvYXJkUHJlc3NlZCIsImxlYWRlcmJvYXJkUHJlc3NlZCIsIm9uVG9nZ2xlIiwibGFiZWwiLCJyb3ciLCJyb3dJbmRleCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRJbmRleCIsIkRpc2NvdmVyeVN0cmVhbUFkbWluSW5uZXIiLCJjb2xsYXBzZWQiLCJocmVmIiwiUHJlZnMiLCJ2YWx1ZXMiLCJDb2xsYXBzZVRvZ2dsZSIsIm9uQ29sbGFwc2VUb2dnbGUiLCJyZW5kZXJBZG1pbiIsInN0YXJ0c1dpdGgiLCJzZXRCb2R5Q2xhc3MiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImlzQ29sbGFwc2VkIiwidGl0bGUiLCJfRGlzY292ZXJ5U3RyZWFtQWRtaW4iLCJEaXNjb3ZlcnlTdHJlYW1BZG1pbiIsIlNlY3Rpb25zIiwiX0NvbmZpcm1EaWFsb2ciLCJfaGFuZGxlQ2FuY2VsQnRuIiwiX2hhbmRsZUNvbmZpcm1CdG4iLCJESUFMT0dfQ0FOQ0VMIiwiVXNlckV2ZW50Iiwic291cmNlIiwiZXZlbnRTb3VyY2UiLCJvbkNvbmZpcm0iLCJmb3JFYWNoIiwiX3JlbmRlck1vZGFsTWVzc2FnZSIsIm1lc3NhZ2VfYm9keSIsImJvZHlfc3RyaW5nX2lkIiwibXNnIiwidmlzaWJsZSIsInJvbGUiLCJpY29uIiwiY2FuY2VsX2J1dHRvbl9zdHJpbmdfaWQiLCJjb25maXJtX2J1dHRvbl9zdHJpbmdfaWQiLCJjb25maXJtX2J1dHRvbl9zdHJpbmdfYXJncyIsIkNvbmZpcm1EaWFsb2ciLCJEaWFsb2ciLCJBMTF5TGlua0J1dHRvbiIsIkVycm9yQm91bmRhcnlGYWxsYmFjayIsIndpbmRvd09iaiIsIndpbmRvdyIsInJlbG9hZCIsImRlZmF1bHRDbGFzcyIsImRlZmF1bHRQcm9wcyIsIkVycm9yQm91bmRhcnkiLCJoYXNFcnJvciIsImNvbXBvbmVudERpZENhdGNoIiwiRmFsbGJhY2tDb21wb25lbnQiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIkNTU1RyYW5zaXRpb24iLCJTZWN0aW9uc01nbXRQYW5lbCIsImV4aXRFdmVudEZpcmVkIiwic2hvd1BhbmVsIiwic2V0U2hvd1BhbmVsIiwic2VjdGlvblBlcnNvbmFsaXphdGlvbiIsImxheW91dENvbXBvbmVudHMiLCJzZWN0aW9ucyIsInNlY3Rpb25zRmVlZE5hbWUiLCJjYXJkR3JpZEVudHJ5IiwiZmluZCIsInNlY3Rpb25zTGlzdCIsInNlY3Rpb25zU3RhdGUiLCJzZXRTZWN0aW9uU3RhdGUiLCJmb2xsb3dlZFNlY3Rpb25zRGF0YSIsInNlY3Rpb25LZXkiLCJpc0ZvbGxvd2VkIiwiYmxvY2tlZFNlY3Rpb25zRGF0YSIsImlzQmxvY2tlZCIsInVwZGF0ZUNhY2hlZERhdGEiLCJvbkZvbGxvd0NsaWNrIiwicmVjZWl2ZWRSYW5rIiwiQWxzb1RvTWFpbiIsIlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVCIsImZvbGxvd2VkQXQiLCJ0b0lTT1N0cmluZyIsInNlY3Rpb24iLCJzZWN0aW9uX3Bvc2l0aW9uIiwiZXZlbnRfc291cmNlIiwib25CbG9ja0NsaWNrIiwib25VbmJsb2NrQ2xpY2siLCJ1cGRhdGVkU2VjdGlvbkRhdGEiLCJvblVuZm9sbG93Q2xpY2siLCJ0b2dnbGVQYW5lbCIsInByZXZTaG93UGFuZWwiLCJmb2xsb3dlZFNlY3Rpb25zTGlzdCIsImZvbGxvd2luZyIsImJsb2NrZWRTZWN0aW9uc0xpc3QiLCJibG9ja2VkIiwiaW4iLCJ0aW1lb3V0IiwiY2xhc3NOYW1lcyIsInVubW91bnRPbkV4aXQiLCJsZW5ndGgiLCJQUkVGX1dBTExQQVBFUl9VUExPQURFRF9QUkVWSU9VU0xZIiwiUFJFRl9XQUxMUEFQRVJfVVBMT0FEX01BWF9GSUxFX1NJWkUiLCJQUkVGX1dBTExQQVBFUl9VUExPQURfTUFYX0ZJTEVfU0laRV9FTkFCTEVEIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsInRpbWVyIiwiYXJncyIsIndha2VVcCIsInNldFRpbWVvdXQiLCJhcHBseSIsIl9XYWxscGFwZXJDYXRlZ29yaWVzIiwiaGFuZGxlQ29sb3JJbnB1dCIsImRlYm91bmNlZEhhbmRsZUNoYW5nZSIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVJlc2V0IiwiaGFuZGxlQ2F0ZWdvcnkiLCJoYW5kbGVVcGxvYWQiLCJoYW5kbGVCYWNrIiwiZ2V0UkdCQ29sb3JzIiwicHJlZmVyc0hpZ2hDb250cmFzdFF1ZXJ5IiwicHJlZmVyc0RhcmtRdWVyeSIsImNhdGVnb3J5UmVmIiwid2FsbHBhcGVyUmVmIiwiY3VzdG9tQ29sb3JQaWNrZXJSZWYiLCJjcmVhdGVSZWYiLCJjdXN0b21Db2xvcklucHV0IiwiYWN0aXZlQ2F0ZWdvcnkiLCJhY3RpdmVDYXRlZ29yeUZsdWVudElEIiwic2hvd0NvbG9yUGlja2VyIiwiaW5wdXRUeXBlIiwiYWN0aXZlSWQiLCJpc0N1c3RvbVdhbGxwYXBlckVycm9yIiwibWF0Y2hNZWRpYSIsInByZXZQcm9wcyIsInJnYkNvbG9ycyIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwidG9TdHJpbmciLCJjdXJyZW50IiwiY29sb3JJbnB1dEJhY2tncm91bmQiLCJpc0NvbG9yRGFyayIsImlzV2FsbHBhcGVyQ29sb3JEYXJrIiwic2V0UHJlZiIsInVwbG9hZGVkUHJldmlvdXNseSIsImhhbmRsZVVzZXJFdmVudCIsIldBTExQQVBFUl9DTElDSyIsInNlbGVjdGVkX3dhbGxwYXBlciIsImhhZF9wcmV2aW91c193YWxscGFwZXIiLCJhY3RpdmVXYWxscGFwZXIiLCJoYWRfdXBsb2FkZWRfcHJldmlvdXNseSIsImhhbmRsZUNhdGVnb3J5S2V5RG93biIsImNhdGVnb3J5IiwiZ2V0SW5kZXgiLCJmaW5kSW5kZXgiLCJjYXQiLCJpc1JUTCIsImRpciIsImV2ZW50S2V5IiwibmV4dEluZGV4IiwiZm9jdXMiLCJoYW5kbGVXYWxscGFwZXJLZXlEb3duIiwic2hpZnRLZXkiLCJiYWNrVG9NZW51QnV0dG9uIiwid2FsbHBhcGVyIiwiY29sdW1uQ291bnQiLCJ0YWJJbmRleCIsImNsaWNrIiwic2VsZWN0ZWRXYWxscGFwZXIiLCJXQUxMUEFQRVJfUkVNT1ZFX1VQTE9BRCIsIldBTExQQVBFUl9DQVRFR09SWV9DTElDSyIsImZsdWVudF9pZCIsIndhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplRW5hYmxlZCIsIndhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplIiwiZmlsZUlucHV0IiwiYWNjZXB0Iiwib25jYW5jZWwiLCJvbmNoYW5nZSIsImZpbGUiLCJmaWxlcyIsIm1heFNpemUiLCJzaXplIiwiY29uc29sZSIsImVycm9yIiwiV0FMTFBBUEVSX1VQTE9BRCIsInNldEFjdGl2ZUlkIiwiaW5wdXQiLCJyIiwicGFyc2VJbnQiLCJzdWJzdHIiLCJnIiwiYiIsInByZWZzIiwid2FsbHBhcGVyTGlzdCIsImNhdGVnb3JpZXMiLCJXYWxscGFwZXJzIiwiZmlsdGVyZWRXYWxscGFwZXJzIiwicmVkdWNlQ29sb3JzVG9GaXRDdXN0b21Db2xvcklucHV0IiwiYXJyIiwicG9wIiwid2FsbHBhcGVyQ3VzdG9tU29saWRDb2xvckhleCIsInJlZ2V4IiwibWF0Y2giLCJzdGFydGVyQ29sb3JIZXgiLCJtYXRjaGVzIiwiaW5pdFN0YXRlQ2xhc3NuYW1lIiwiY29sb3JQaWNrZXJJbnB1dCIsInJlZiIsIm9uSW5wdXQiLCJmaWx0ZXJlZExpc3QiLCJhY3RpdmVXYWxscGFwZXJPYmoiLCJ3cCIsInRodW1ibmFpbCIsIndhbGxwYXBlclVybCIsImJhY2tncm91bmRJbWFnZSIsInNvbGlkX2NvbG9yIiwiZWwiLCJvbktleURvd24iLCJ0aGVtZSIsIldhbGxwYXBlckNhdGVnb3JpZXMiLCJDb250ZW50U2VjdGlvbiIsIm9uUHJlZmVyZW5jZVNlbGVjdCIsInRvcFNpdGVzRHJhd2VyUmVmIiwicG9ja2V0RHJhd2VyUmVmIiwiaW5wdXRVc2VyRXZlbnQiLCJldmVudFZhbHVlIiwic3RhdHVzIiwibWVudV9zb3VyY2UiLCJwcmVmZXJlbmNlIiwiZGF0YXNldCIsIm5vZGVOYW1lIiwic2V0RHJhd2VyTWFyZ2lucyIsInNldERyYXdlck1hcmdpbiIsImVuYWJsZWRTZWN0aW9ucyIsInRvcFNpdGVzRW5hYmxlZCIsInBvY2tldEVuYWJsZWQiLCJkcmF3ZXJJRCIsImlzT3BlbiIsImRyYXdlclJlZiIsImRyYXdlckhlaWdodCIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiaGVpZ2h0IiwibWFyZ2luVG9wIiwiZW5hYmxlZFdpZGdldHMiLCJwb2NrZXRSZWdpb24iLCJtYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb24iLCJtYXlIYXZlV2VhdGhlciIsIm1heUhhdmVUcmVuZGluZ1NlYXJjaCIsIm1heUhhdmVXaWRnZXRzIiwibWF5SGF2ZVRpbWVyV2lkZ2V0IiwibWF5SGF2ZUxpc3RzV2lkZ2V0Iiwib3BlblByZWZlcmVuY2VzIiwid2FsbHBhcGVyc0VuYWJsZWQiLCJtYXlIYXZlVG9waWNTZWN0aW9ucyIsIndlYXRoZXJFbmFibGVkIiwidHJlbmRpbmdTZWFyY2hFbmFibGVkIiwic2hvd0luZmVycmVkUGVyc29uYWxpemF0aW9uRW5hYmxlZCIsInRvcFNpdGVzUm93c0NvdW50IiwidGltZXJFbmFibGVkIiwibGlzdHNFbmFibGVkIiwic2xvdCIsIl9DdXN0b21pemVNZW51Iiwib25FbnRlcmVkIiwib25FeGl0ZWQiLCJjbG9zZUJ1dHRvbiIsIm9wZW5CdXR0b24iLCJzaG93aW5nIiwiYXBwZWFyIiwib25PcGVuIiwiYyIsInNyYyIsIm9uQ2xvc2UiLCJpY29uc3JjIiwiQ3VzdG9taXplTWVudSIsIkxvZ28iLCJTYWZlQW5jaG9yIiwiYWx0S2V5IiwiYnV0dG9uIiwiY3RybEtleSIsIm1ldGFLZXkiLCJPUEVOX0xJTksiLCJyZWZlcnJlciIsImN1cnJlbnRUYXJnZXQiLCJpc19zcG9uc29yZWQiLCJpc1Nwb25zb3JlZCIsIm9uTGlua0NsaWNrIiwic2FmZVVSSSIsInByb3RvY29sIiwiVVJMIiwiaXNBbGxvd2VkIiwid2FybiIsImFuY2hvciIsInNldFJlZiIsIkNvbnRleHRNZW51IiwiaGlkZUNvbnRleHQiLCJvblNob3ciLCJvblVwZGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJpIiwiQ29udGV4dE1lbnVJdGVtIiwia2V5Ym9hcmRBY2Nlc3MiLCJfQ29udGV4dE1lbnVJdGVtIiwib25LZXlVcCIsImZvY3VzRmlyc3QiLCJmb2N1c1NpYmxpbmciLCJwYXJlbnROb2RlIiwiY2xvc2VzdFNpYmxpbmdTZWxlY3RvciIsImZpcnN0RWxlbWVudENoaWxkIiwiZmlyc3QiLCJsYXN0Iiwic3RyaW5nX2lkIiwiTGlua01lbnVPcHRpb25zIiwiREVGQVVMVF9TSVRFX01FTlVfT1BUSU9OUyIsIl9MaW5rTWVudSIsImdldE9wdGlvbnMiLCJzaXRlIiwiaXNQcml2YXRlQnJvd3NpbmdFbmFibGVkIiwic2l0ZUluZm8iLCJwbGF0Zm9ybSIsInNob3VsZFNlbmRJbXByZXNzaW9uU3RhdHMiLCJ1c2VyRXZlbnQiLCJwcm9wT3B0aW9ucyIsImlzRGVmYXVsdCIsInNlYXJjaFRvcFNpdGUiLCJzcG9uc29yZWRfcG9zaXRpb24iLCJsaW5rTWVudU9wdGlvbnMiLCJvIiwiYWN0aW9uIiwiaW1wcmVzc2lvbiIsImV2ZW50TmFtZSIsImFzc2lnbiIsImNhcmRfdHlwZSIsImNvcnB1c19pdGVtX2lkIiwiZmV0Y2hUaW1lc3RhbXAiLCJmaXJzdFZpc2libGVUaW1lc3RhbXAiLCJmb3JtYXQiLCJpc19saXN0X2NhcmQiLCJpc19zZWN0aW9uX2ZvbGxvd2VkIiwicmVjZWl2ZWRfcmFuayIsInJlY29tbWVuZGF0aW9uX2lkIiwicmVjb21tZW5kZWRfYXQiLCJzY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQiLCJzZWxlY3RlZF90b3BpY3MiLCJ0aWxlX2lkIiwidG9waWMiLCJmbGlnaHRfaWQiLCJ1c2VyRXZlbnREYXRhIiwiYWN0aW9uX3Bvc2l0aW9uIiwiZ2V0U3RhdGUiLCJMaW5rTWVudSIsInVzZVJlZiIsInVzZUludGVyc2VjdGlvbk9ic2VydmVyIiwiY2FsbGJhY2siLCJ0aHJlc2hvbGQiLCJlbGVtZW50c1JlZiIsInRyaWdnZXJlZEVsZW1lbnRzIiwiV2Vha1NldCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImhhcyIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwiZ2V0QWN0aXZlQ2FyZFNpemUiLCJzY3JlZW5XaWR0aCIsImZsaWdodElkIiwiYnJlYWtwb2ludHMiLCJjb2x1bW4iLCJjYXJkVHlwZXMiLCJjdXJyQ29sdW1uQ291bnQiLCJicCIsIkNPTkZFVFRJX1ZBUlMiLCJ1c2VDb25mZXR0aSIsImNvdW50Iiwic3ByZWFkIiwiUEkiLCJwcmVmZXJzUmVkdWNlZE1vdGlvbiIsImNvbG9ycyIsInN0eWxlcyIsImRvY3VtZW50RWxlbWVudCIsInZhcmlhYmxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImNhbnZhc1JlZiIsInBhcnRpY2xlc1JlZiIsImFuaW1hdGlvbkZyYW1lUmVmIiwiaW5pdGlhbGl6ZUNvbmZldHRpIiwiY2VudGVyWCIsImNlbnRlclkiLCJwb29sIiwiYW5nbGUiLCJyYW5kb20iLCJjb3MiLCJzaW4iLCJjb2xvciIsIngiLCJ5IiwidmVsb2NpdHkiLCJncmF2aXR5IiwiZGVjYXkiLCJsaWZlIiwibWF4TGlmZSIsInRpbHQiLCJ0aWx0U3BlZWQiLCJhbmltYXRlUGFydGljbGVzIiwiY2FudmFzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJjbGVhclJlY3QiLCJhbnlBbGl2ZSIsInBhcnRpY2xlIiwiYWxwaGFWYWx1ZSIsInNjYWxlWSIsImdsb2JhbEFscGhhIiwic2V0VHJhbnNmb3JtIiwicm90YXRlIiwic2NhbGUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZmlyZUNvbmZldHRpIiwiUFJFRl9UUkVORElOR19WQVJJQU5UIiwiUFJFRl9SRUZJTkVEX0NBUkRTX0xBWU9VVCIsIlRyZW5kaW5nU2VhcmNoZXMiLCJzaG93Q29udGV4dE1lbnUiLCJzZXRTaG93Q29udGV4dE1lbnUiLCJpc0tleWJvYXJkQWNjZXNzIiwic2V0SXNLZXlib2FyZEFjY2VzcyIsIlRyZW5kaW5nU2VhcmNoIiwidmFyaWFudCIsInJlZmluZWRDYXJkcyIsInJlc3VsdFJlZiIsImNvbnRleHRNZW51SG9zdCIsIlRSRU5ESU5HX1NFQVJDSF9DT05URVhUX01FTlVfT1BUSU9OUyIsIm9uQXJyb3dDbGljayIsIlRSRU5ESU5HX1NFQVJDSF9UT0dHTEVfQ09MTEFQU0UiLCJoYW5kbGVMaW5rT3BlbiIsIlRSRU5ESU5HX1NFQVJDSF9TVUdHRVNUSU9OX09QRU4iLCJoYW5kbGVDb250ZXh0TWVudVNob3ciLCJob3N0IiwiY2hlY2tSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWF4Qm91bmRzIiwiY2hlY2tCb3VuZHMiLCJsZWZ0IiwiaW5uZXJXaWR0aCIsInJpZ2h0IiwiaGFuZGxlQ29udGV4dE1lbnVVcGRhdGUiLCJ0b2dnbGVDb250ZXh0TWVudSIsImlzS2V5Qm9hcmQiLCJvbkNvbnRleHRNZW51Q2xpY2siLCJvbkNvbnRleHRNZW51S2V5RG93biIsImhhbmRsZVJlc3VsdEtleURvd24iLCJtYXhSZXN1bHRzIiwiaGFuZGxlSW50ZXJzZWN0aW9uIiwiVFJFTkRJTkdfU0VBUkNIX0lNUFJFU1NJT04iLCJyZXN1bHQiLCJzZWFyY2hVcmwiLCJsb3dlckNhc2VTdWdnZXN0aW9uIiwic2xpY2UiLCJhbHQiLCJkZXNjcmlwdGlvbiIsIklTX05FV1RBQiIsIl9TZWFyY2giLCJvblNlYXJjaENsaWNrIiwib25TZWFyY2hIYW5kb2ZmQ2xpY2siLCJvblNlYXJjaEhhbmRvZmZQYXN0ZSIsIm9uU2VhcmNoSGFuZG9mZkRyb3AiLCJvbklucHV0TW91bnQiLCJvbklucHV0TW91bnRIYW5kb2ZmIiwib25TZWFyY2hIYW5kb2ZmQnV0dG9uTW91bnQiLCJoYW5kbGVFdmVudCIsImRldGFpbCIsImdDb250ZW50U2VhcmNoQ29udHJvbGxlciIsInNlYXJjaCIsImRvU2VhcmNoSGFuZG9mZiIsInRleHQiLCJIQU5ET0ZGX1NFQVJDSF9UT19BV0VTT01FQkFSIiwiRkFLRV9GT0NVU19TRUFSQ0giLCJESVNBQkxFX1NFQVJDSCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZGF0YVRyYW5zZmVyIiwiY2FyZXQiLCJmYWtlQ2FyZXQiLCJjYXJldEJsaW5rQ291bnQiLCJjYXJldEJsaW5rVGltZSIsInNldFByb3BlcnR5IiwiaGVhbHRoUmVwb3J0S2V5IiwiQ29udGVudFNlYXJjaFVJQ29udHJvbGxlciIsIl9oYW5kb2ZmU2VhcmNoQ29udHJvbGxlciIsIkNvbnRlbnRTZWFyY2hIYW5kb2ZmVUlDb250cm9sbGVyIiwiX3NlYXJjaEhhbmRvZmZCdXR0b24iLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZGlzYWJsZSIsImZha2VGb2N1cyIsInYiLCJ0b0xvd2VyQ2FzZSIsInRyZW5kaW5nU2VhcmNoVmFyaWFudCIsInNob3dMb2dvIiwiaGFuZG9mZkVuYWJsZWQiLCJtYXhMZW5ndGgiLCJvbkRyb3AiLCJvblBhc3RlIiwiU2VhcmNoIiwiQ29udGV4dGNvbEFJSW50ZXJmYWNlIiwiaW5wdXRWYWx1ZSIsImlzRXhwYW5kZWQiLCJpc0RyYWdnaW5nIiwidGV4dGFyZWFSZWYiLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVJbnB1dENoYW5nZSIsImhhbmRsZUtleURvd24iLCJoYW5kbGVTdWJtaXQiLCJvbkFJUmVxdWVzdCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlQmx1ciIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsImhhbmRsZUZpbGVVcGxvYWQiLCJuZXdGaWxlcyIsIkFycmF5IiwiZnJvbSIsInByZXZTdGF0ZSIsImhhbmRsZVJlbW92ZUZpbGUiLCJfIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcm9wIiwiZHJvcHBlZEZpbGVzIiwib2JqZWN0Rml0Iiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uRHJhZ092ZXIiLCJvbkRyYWdMZWF2ZSIsInBsYWNlaG9sZGVyIiwicm93cyIsIkJvb2xlYW4iLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJyZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbiIsIm11bHRpcGxlIiwiZGlzcGxheSIsIkxvY2F0aW9uU2VhcmNoIiwib3V0ZXJDbGFzc05hbWUiLCJzZWxlY3RlZExvY2F0aW9uIiwic2V0U2VsZWN0ZWRMb2NhdGlvbiIsInN1Z2dlc3RlZExvY2F0aW9ucyIsImxvY2F0aW9uU2VhcmNoU3RyaW5nIiwidXNlcklucHV0Iiwic2V0VXNlcklucHV0IiwiaW5wdXRSZWYiLCJXRUFUSEVSX0xPQ0FUSU9OX0RBVEFfVVBEQVRFIiwiY2l0eSIsImxvY2FsaXplZF9uYW1lIiwiYWRtaW5OYW1lIiwiYWRtaW5pc3RyYXRpdmVfYXJlYSIsImNvdW50cnkiLCJCcm9hZGNhc3RUb0NvbnRlbnQiLCJXRUFUSEVSX1NFQVJDSF9BQ1RJVkUiLCJXRUFUSEVSX0xPQ0FUSU9OX1NVR0dFU1RJT05TX1VQREFURSIsIldFQVRIRVJfTE9DQVRJT05fU0VBUkNIX1VQREFURSIsImhhbmRsZUNsb3NlU2VhcmNoIiwibGlzdCIsImNsYXNzIiwiaWNvblNyYyIsIm1lcmlub0xjYXRpb24iLCJWSVNJQkxFIiwiVklTSUJJTElUWV9DSEFOR0VfRVZFTlQiLCJXZWF0aGVyUGxhY2Vob2xkZXIiLCJpc1NlZW4iLCJzZXRJc1NlZW4iLCJpc1NlZW5DbGFzc05hbWUiLCJfV2VhdGhlciIsImNvbnRleHRNZW51S2V5Ym9hcmQiLCJpbXByZXNzaW9uU2VlbiIsImVycm9yU2VlbiIsInNldEltcHJlc3Npb25SZWYiLCJlbGVtZW50IiwiaW1wcmVzc2lvbkVsZW1lbnQiLCJzZXRFcnJvclJlZiIsImVycm9yRWxlbWVudCIsIm9uUHJvdmlkZXJDbGljayIsInZpc2liaWxpdHlTdGF0ZSIsInNldEltcHJlc3Npb25PYnNlcnZlcnMiLCJfb25WaXNpYmlsaXR5Q2hhbmdlIiwib25JbXByZXNzaW9uIiwib25FcnJvciIsIldFQVRIRVJfSU1QUkVTU0lPTiIsIldFQVRIRVJfTE9BRF9FUlJPUiIsIm9wZW5Db250ZXh0TWVudSIsIldFQVRIRVJfT1BFTl9QUk9WSURFUl9VUkwiLCJpc1dlYXRoZXJFbmFibGVkIiwiQXBwIiwiaXNGb3JTdGFydHVwQ2FjaGUiLCJXRUFUSEVSX1NVR0dFU1RJT04iLCJzZWFyY2hBY3RpdmUiLCJzaG93RGV0YWlsZWRWaWV3IiwiV0VBVEhFUl9TT1VSQ0VfQ09OVEVYVF9NRU5VX09QVElPTlMiLCJXRUFUSEVSX1NPVVJDRV9FUlJPUl9DT05URVhUX01FTlVfT1BUSU9OUyIsImNvbnRleHRNZW51IiwiY29udGV4dE9wdHMiLCJsaW5rIiwiZm9yZWNhc3QiLCJjdXJyZW50X2NvbmRpdGlvbnMiLCJpY29uX2lkIiwidGVtcGVyYXR1cmUiLCJsb2NhdGlvbkRhdGEiLCJoaWdoIiwibG93Iiwic3VtbWFyeSIsIkRvd25sb2FkTW9kYWxUb2dnbGUiLCJpc0FjdGl2ZSIsIlRodW1iVXBUaHVtYkRvd25Ub2FzdCIsIm9uRGlzbWlzc0NsaWNrIiwib25BbmltYXRpb25FbmQiLCJtb3pNZXNzYWdlQmFyUmVmIiwibW96TWVzc2FnZUJhckVsZW1lbnQiLCJvbmNlIiwiZGlzbWlzc2FibGUiLCJSZXBvcnRDb250ZW50VG9hc3QiLCJOb3RpZmljYXRpb25zIiwidG9hc3RRdWV1ZSIsInRvYXN0Q291bnRlciIsInN5bmNIaWRkZW5Ub2FzdERhdGEiLCJ0b2FzdElkIiwicXVldWVkVG9hc3RzIiwiT25seVRvT25lQ29udGVudCIsIkhJREVfVE9BU1RfTUVTU0FHRSIsInNob3dOb3RpZmljYXRpb25zIiwiZ2V0VG9hc3QiLCJsYXRlc3RUb2FzdEl0ZW0iLCJGZWF0dXJlSGlnaGxpZ2h0IiwibWVzc2FnZSIsInRvZ2dsZSIsImFycm93UG9zaXRpb24iLCJwb3NpdGlvbiIsInZlcnRpY2FsUG9zaXRpb24iLCJhcmlhTGFiZWwiLCJmZWF0dXJlIiwiZ2xvYmFsIiwib3BlbmVkT3ZlcnJpZGUiLCJzaG93QnV0dG9uSWNvbiIsImRpc21pc3NDYWxsYmFjayIsIm91dHNpZGVDbGlja0NhbGxiYWNrIiwib3BlbmVkIiwic2V0T3BlbmVkIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwib25Ub2dnbGVDbGljayIsIkRpc2NvdmVyeVN0cmVhbVVzZXJFdmVudCIsImhpZGVCdXR0b25DbGFzcyIsIm9wZW5lZENsYXNzbmFtZSIsIlBSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0EiLCJQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9CIiwiUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQyIsIkZFQVRVUkVfSUQiLCJEb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0IiwiaGFuZGxlRGlzbWlzcyIsImhhbmRsZUJsb2NrIiwib25EaXNtaXNzIiwibW9iaWxlRG93bmxvYWRQcm9tb1ZhckEiLCJtb2JpbGVEb3dubG9hZFByb21vVmFyQiIsIm1vYmlsZURvd25sb2FkUHJvbW9WYXJDIiwiZ2V0QWN0aXZlVmFyaWFudCIsImdldFZhcmlhbnRRUkNvZGVJbWciLCJnZXRWYXJpYW50Q29weSIsIldhbGxwYXBlckZlYXR1cmVIaWdobGlnaHQiLCJlbGVtZW50SWQiLCJTSE9XX1BFUlNPTkFMSVpFIiwibWVzc2FnZURhdGEiLCJNZXNzYWdlcyIsImNvbnRlbnQiLCJzdWJ0aXRsZSIsImN0YSIsIk1lc3NhZ2VXcmFwcGVyIiwiaGlkZGVuT3ZlcnJpZGUiLCJzZXRJc0ludGVyc2VjdGluZyIsInRhYklzVmlzaWJsZSIsInNldFRhYklzVmlzaWJsZSIsImhhc1J1biIsInNldEhhc1J1biIsIk1FU1NBR0VfSU1QUkVTU0lPTiIsImlzVmlzaWJsZSIsIk1FU1NBR0VfTk9USUZZX1ZJU0lCSUxJVFkiLCJoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlIiwiaGFuZGxlQ2xvc2UiLCJNRVNTQUdFX1RPR0dMRV9WSVNJQklMSVRZIiwicG9ydElEIiwiTUVTU0FHRV9ESVNNSVNTIiwiTUVTU0FHRV9CTE9DSyIsIk1FU1NBR0VfQ0xJQ0siLCJQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9TWVNURU0iLCJQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9VU0VSIiwiX0Jhc2UiLCJub3RpZnlDb250ZW50IiwidXBkYXRlVGhlbWUiLCJjb21wb25lbnRXaWxsVXBkYXRlIiwiYm9keUNsYXNzTmFtZSIsImlzRGV2dG9vbHNFbmFibGVkIiwiQmFzZUNvbnRlbnQiLCJhZG1pbkNvbnRlbnQiLCJvcGVuQ3VzdG9taXphdGlvbk1lbnUiLCJjbG9zZUN1c3RvbWl6YXRpb25NZW51IiwiaGFuZGxlT25LZXlEb3duIiwib25XaW5kb3dTY3JvbGwiLCJzaG91bGRTaG93T01DSGlnaGxpZ2h0IiwidXBkYXRlV2FsbHBhcGVyIiwiaGFuZGxlQ29sb3JNb2RlQ2hhbmdlIiwic2hvdWxkRGlzcGxheVRvcGljU2VsZWN0aW9uTW9kYWwiLCJ0b2dnbGVEb3dubG9hZEhpZ2hsaWdodCIsImhhbmRsZURpc21pc3NEb3dubG9hZEhpZ2hsaWdodCIsImhhbmRsZUFJUmVxdWVzdCIsImZpeGVkU2VhcmNoIiwiY29sb3JNb2RlIiwiZml4ZWROYXZTdHlsZSIsIndhbGxwYXBlclRoZW1lIiwic2hvd0Rvd25sb2FkSGlnaGxpZ2h0T3ZlcnJpZGUiLCJzZXRGaXJzdFZpc2libGVUaW1lc3RhbXAiLCJ1cGxvYWRlZFdhbGxwYXBlciIsInByZXZVcGxvYWRlZFdhbGxwYXBlciIsInByZXZXYWxscGFwZXJMaXN0IiwicHJldlByZWZzIiwicHJldlNlbGVjdGVkV2FsbHBhcGVyIiwiV2FsbHBhcGVyIiwiaW5uZXJIZWlnaHQiLCJzaG93U2VhcmNoIiwibG9nb0Fsd2F5c1Zpc2libGUiLCJTQ1JPTExfVEhSRVNIT0xEIiwiTUFJTl9PRkZTRVRfUEFERElORyIsIkNTU19WQVJfU1BBQ0VfWFhMQVJHRSIsIm91dGVyV3JhcHBlclBhZGRpbmdUb3AiLCJzZWFyY2hXcmFwcGVyUGFkZGluZ1RvcCIsInNlYXJjaFdyYXBwZXJQYWRkaW5nQm90dG9tIiwic2VhcmNoV3JhcHBlckZpeGVkU2Nyb2xsUGFkZGluZ1RvcCIsInNlYXJjaFdyYXBwZXJGaXhlZFNjcm9sbFBhZGRpbmdCb3R0b20iLCJzZWFyY2hJbm5lcldyYXBwZXJNaW5IZWlnaHQiLCJsb2dvQW5kV29yZG1hcmtXcmFwcGVySGVpZ2h0IiwibG9nb0FuZFdvcmRtYXJrV3JhcHBlck1hcmdpbkJvdHRvbSIsInNjcm9sbFkiLCJwYWRkaW5nQmxvY2tTdGFydCIsIlNFVFRJTkdTX09QRU4iLCJjdXN0b21pemVNZW51VmlzaWJsZSIsIkhJREVfUEVSU09OQUxJWkUiLCJzZWxlY3RlZCIsImF0dHJpYnV0aW9uIiwiYXV0aG9yRGV0YWlscyIsIndlYnBhZ2UiLCJzdHJpbmciLCJhdXRob3Jfc3RyaW5nIiwiYXV0aG9yX3VybCIsIndlYnBhZ2Vfc3RyaW5nIiwid2VicGFnZV91cmwiLCJ1cGxvYWRlZFdhbGxwYXBlclVybCIsImxpZ2h0V2FsbHBhcGVyIiwiZGFya1dhbGxwYXBlciIsInJlZ2V4UkdCIiwid2FsbHBhcGVyQ29sb3IiLCJjb21wb25lbnRJZCIsIm1lc3NhZ2VUeXBlIiwib3ZlcnJpZGUiLCJyZXF1ZXN0IiwidGV4dGFyZWEiLCJxdWVyeVNlbGVjdG9yIiwidG9waWNTZWxlY3Rpb25PbmJvYXJkaW5nRW5hYmxlZCIsIm1heWJlU2hvd01vZGFsIiwiZGlzcGxheVRpbWVvdXQiLCJsYXN0RGlzcGxheWVkIiwiZGlzcGxheUNvdW50IiwiZGF5IiwiZ2V0VGltZSIsInRpbWVvdXRPY2N1cmVkIiwiVE9QSUNfU0VMRUNUSU9OX1NQT1RMSUdIVF9PUEVOIiwic2hvd1dlYXRoZXIiLCJwb2NrZXRDb25maWciLCJpc0Rpc2NvdmVyeVN0cmVhbSIsImVuYWJsZWQiLCJmaWx0ZXJlZFNlY3Rpb25zIiwic3BvY01lc3NhZ2VWYXJpYW50IiwibG9jYWxlIiwibm9TZWN0aW9uc0VuYWJsZWQiLCJzZWFyY2hIYW5kb2ZmRW5hYmxlZCIsInRvcFNpdGVzUm93cyIsIm1heUhhdmVTcG9uc29yZWRTdG9yaWVzIiwibWF5SGF2ZVNwb25zb3JlZFRvcFNpdGVzIiwibW9iaWxlRG93bmxvYWRQcm9tb0VuYWJsZWQiLCJtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEFFbmFibGVkIiwibW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRCRW5hYmxlZCIsIm1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50Q0VuYWJsZWQiLCJtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEFCb3JDIiwibW9iaWxlRG93bmxvYWRQcm9tb1dyYXBwZXJIZWlnaHRNb2RpZmllciIsImhhc1RodW1ic1VwRG93bkxheW91dCIsImhhc1RodW1ic1VwRG93biIsInRvcGljTGFiZWxzRW5hYmxlZCIsInNlY3Rpb25zQ3VzdG9taXplTWVudVBhbmVsRW5hYmxlZCIsInNlY3Rpb25zUGVyc29uYWxpemF0aW9uRW5hYmxlZCIsIm1heUhhdmVQZXJzb25hbGl6ZWRUb3BpY1NlY3Rpb25zIiwibG9hZGVkIiwiZmVhdHVyZUNsYXNzTmFtZSIsInNob3VsZFNob3dEb3dubG9hZEhpZ2hsaWdodCIsInNob3dTaW1wbGlmaWVkSW50ZXJmYWNlIiwiQmFzZSIsIkRldGVjdFVzZXJTZXNzaW9uU3RhcnQiLCJpbml0U3RvcmUiLCJQcm92aWRlciIsIlJlYWN0RE9NIiwicmVkdWNlcnMiLCJOZXdUYWIiLCJzdG9yZSIsImRvUmVxdWVzdFdoZW5SZWFkeSIsImRvUmVxdWVzdFByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImRpZFJlcXVlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrSWQiLCJkb1JlcXVlc3QiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJoaWRkZW4iLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwicmVuZGVyV2l0aG91dFN0YXRlIiwic2VuZEV2ZW50T3JBZGRMaXN0ZW5lciIsInRoZW4iLCJORVdfVEFCX1NUQVRFX1JFUVVFU1QiLCJORVdfVEFCX1NUQVRFX1JFUVVFU1RfV0lUSE9VVF9TVEFSVFVQQ0FDSEUiLCJoeWRyYXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXJDYWNoZSIsImluaXRpYWxTdGF0ZSIsIk5FV19UQUJfU1RBVEVfUkVRVUVTVF9TVEFSVFVQQ0FDSEUiXSwic291cmNlUm9vdCI6IiJ9