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
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktc3RyZWFtLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEIsWUFBWSxRQUFRO0FBQ3BCLFlBQVksTUFBTTtBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLEtBQUs7QUFDakIsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxR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U0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQSxrQkFBa0IseUNBQXlDO0FBQzNELGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBRTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTLFdBQUU7QUFDWDtBQUNBO0FBQ0E7QUFD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ekIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29tbW9uL0FjdGlvbnMubWpzIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL2V4dGVybmFsIHZhciBcIlJlYWN0UmVkdXhcIiIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy9leHRlcm5hbCB2YXIgXCJSZWFjdFwiIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9EaXNjb3ZlcnlTdHJlYW1BZG1pbi9TaW1wbGVIYXNoUm91dGVyLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQWRtaW4vRGlzY292ZXJ5U3RyZWFtQWRtaW4uanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nL0NvbmZpcm1EaWFsb2cuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9BMTF5TGlua0J1dHRvbi9BMTF5TGlua0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkvRXJyb3JCb3VuZGFyeS5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvZXh0ZXJuYWwgdmFyIFwiUmVhY3RUcmFuc2l0aW9uR3JvdXBcIiIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ3VzdG9taXplTWVudS9TZWN0aW9uc01nbXRQYW5lbC9TZWN0aW9uc01nbXRQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL1dhbGxwYXBlckNhdGVnb3JpZXMvV2FsbHBhcGVyQ2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0N1c3RvbWl6ZU1lbnUvQ29udGVudFNlY3Rpb24vQ29udGVudFNlY3Rpb24uanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9DdXN0b21pemVNZW51L0N1c3RvbWl6ZU1lbnUuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvbGliL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0xvZ28vTG9nby5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvU2FmZUFuY2hvci9TYWZlQW5jaG9yLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ29udGV4dE1lbnUvQ29udGV4dE1lbnUuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvbGliL2xpbmstbWVudS1vcHRpb25zLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvTGlua01lbnUvTGlua01lbnUuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvbGliL3V0aWxzLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQ29tcG9uZW50cy9UcmVuZGluZ1NlYXJjaGVzL1RyZW5kaW5nU2VhcmNoZXMuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9TZWFyY2gvU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvQ29udGV4dGNvbEFJSW50ZXJmYWNlL0NvbnRleHRjb2xBSUludGVyZmFjZS5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL1dlYXRoZXIvTG9jYXRpb25TZWFyY2guanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXIuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Eb3dubG9hZE1vZGFsVG9nZ2xlL0Rvd25sb2FkTW9kYWxUb2dnbGUuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL1RvYXN0cy9UaHVtYlVwVGh1bWJEb3duVG9hc3QuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL1RvYXN0cy9SZXBvcnRDb250ZW50VG9hc3QuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnMuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9EaXNjb3ZlcnlTdHJlYW1Db21wb25lbnRzL0ZlYXR1cmVIaWdobGlnaHQvRmVhdHVyZUhpZ2hsaWdodC5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvRmVhdHVyZUhpZ2hsaWdodC9Eb3dubG9hZE1vYmlsZVByb21vSGlnaGxpZ2h0LmpzeCIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQ29tcG9uZW50cy9GZWF0dXJlSGlnaGxpZ2h0L1dhbGxwYXBlckZlYXR1cmVIaWdobGlnaHQuanN4Iiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvY29tcG9uZW50cy9NZXNzYWdlV3JhcHBlci9NZXNzYWdlV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9jb21wb25lbnRzL0Jhc2UvQmFzZS5qc3giLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb250ZW50LXNyYy9saWIvcGVyZi1zZXJ2aWNlLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2xpYi9kZXRlY3QtdXNlci1zZXNzaW9uLXN0YXJ0Lm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy9leHRlcm5hbCB2YXIgXCJSZWR1eFwiIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzLy4vY29udGVudC1zcmMvbGliL2luaXQtc3RvcmUubWpzIiwid2VicGFjazovL05ld3RhYlJlbmRlclV0aWxzL2V4dGVybmFsIHZhciBcIlJlYWN0RE9NXCIiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi4vLi4vbW9kdWxlcy9EZWR1cGUuc3lzLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uLi8uLi9jb21wb25lbnRzL3RvcHNpdGVzL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vTmV3dGFiUmVuZGVyVXRpbHMvLi9jb21tb24vUmVkdWNlcnMuc3lzLm1qcyIsIndlYnBhY2s6Ly9OZXd0YWJSZW5kZXJVdGlscy8uL2NvbnRlbnQtc3JjL2FjdGl2aXR5LXN0cmVhbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLy8gVGhpcyBmaWxlIGlzIGFjY2Vzc2VkIGZyb20gYm90aCBjb250ZW50IGFuZCBzeXN0ZW0gc2NvcGVzLlxuXG5leHBvcnQgY29uc3QgTUFJTl9NRVNTQUdFX1RZUEUgPSBcIkFjdGl2aXR5U3RyZWFtOk1haW5cIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX01FU1NBR0VfVFlQRSA9IFwiQWN0aXZpdHlTdHJlYW06Q29udGVudFwiO1xuZXhwb3J0IGNvbnN0IFBSRUxPQURfTUVTU0FHRV9UWVBFID0gXCJBY3Rpdml0eVN0cmVhbTpQcmVsb2FkZWRCcm93c2VyXCI7XG5leHBvcnQgY29uc3QgVUlfQ09ERSA9IDE7XG5leHBvcnQgY29uc3QgQkFDS0dST1VORF9QUk9DRVNTID0gMjtcblxuLyoqXG4gKiBnbG9iYWxJbXBvcnRDb250ZXh0IC0gQXJlIHdlIGluIFVJIGNvZGUgKGkuZS4gcmVhY3QsIGEgZG9tKSBvciBzb21lIGtpbmQgb2YgYmFja2dyb3VuZCBwcm9jZXNzP1xuICogICAgICAgICAgICAgICAgICAgICAgIFVzZSB0aGlzIGluIGFjdGlvbiBjcmVhdG9ycyBpZiB5b3UgbmVlZCBkaWZmZXJlbnQgbG9naWNcbiAqICAgICAgICAgICAgICAgICAgICAgICBmb3IgdWkvYmFja2dyb3VuZCBwcm9jZXNzZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBnbG9iYWxJbXBvcnRDb250ZXh0ID1cbiAgdHlwZW9mIFdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IEJBQ0tHUk9VTkRfUFJPQ0VTUyA6IFVJX0NPREU7XG5cbi8vIENyZWF0ZSBhbiBvYmplY3QgdGhhdCBhdm9pZHMgYWNjaWRlbnRhbCBkaWZmZXJpbmcga2V5L3ZhbHVlIHBhaXJzOlxuLy8ge1xuLy8gICBJTklUOiBcIklOSVRcIixcbi8vICAgVU5JTklUOiBcIlVOSU5JVFwiXG4vLyB9XG5leHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7fTtcblxuZm9yIChjb25zdCB0eXBlIG9mIFtcbiAgXCJBQk9VVF9TUE9OU09SRURfVE9QX1NJVEVTXCIsXG4gIFwiQURET05TX0lORk9fUkVRVUVTVFwiLFxuICBcIkFERE9OU19JTkZPX1JFU1BPTlNFXCIsXG4gIFwiQURTX0ZFRURfVVBEQVRFXCIsXG4gIFwiQURTX0lOSVRcIixcbiAgXCJBRFNfUkVTRVRcIixcbiAgXCJBRFNfVVBEQVRFX1NQT0NTXCIsXG4gIFwiQURTX1VQREFURV9USUxFU1wiLFxuICBcIkJMT0NLX1NFQ1RJT05cIixcbiAgXCJCTE9DS19VUkxcIixcbiAgXCJCT09LTUFSS19VUkxcIixcbiAgXCJDQVJEX1NFQ1RJT05fSU1QUkVTU0lPTlwiLFxuICBcIkNMRUFSX1BSRUZcIixcbiAgXCJDT1BZX0RPV05MT0FEX0xJTktcIixcbiAgXCJERUxFVEVfQk9PS01BUktfQllfSURcIixcbiAgXCJERUxFVEVfSElTVE9SWV9VUkxcIixcbiAgXCJESUFMT0dfQ0FOQ0VMXCIsXG4gIFwiRElBTE9HX0NMT1NFXCIsXG4gIFwiRElBTE9HX09QRU5cIixcbiAgXCJESVNBQkxFX1NFQVJDSFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX0NIQU5HRVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1JFU0VUXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9DT05GSUdfUkVTRVRfREVGQVVMVFNcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19TRVRVUFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1NFVF9WQUxVRVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX0JMT0NLU1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX0JMT0NLU19SRVNFVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX0VYUElSRV9DQUNIRVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX0lETEVfREFJTFlcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9JTVBSRVNTSU9OU1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fREVWX1NIT1dfUExBQ0VIT0xERVJcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0RFVl9TWU5DX1JTXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lTVEVNX1RJQ0tcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0VYUEVSSU1FTlRfREFUQVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fRkVFRFNfVVBEQVRFXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9GRUVEX1VQREFURVwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fSU1QUkVTU0lPTl9TVEFUU1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fTEFZT1VUX1JFU0VUXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9MQVlPVVRfVVBEQVRFXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9MSU5LX0JMT0NLRURcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX0xPQURFRF9DT05URU5UXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fSU5JVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX0xBU1RfVVBEQVRFRFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX09WRVJSSURFXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fUkVTRVRcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9UT0dHTEVcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1BFUlNPTkFMSVpBVElPTl9VUERBVEVEXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9QT0NLRVRfU1RBVEVfSU5JVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUE9DS0VUX1NUQVRFX1NFVFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fUFJFRlNfU0VUVVBcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1JFVFJZX0ZFRURcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1NQT0NTX0NBUFNcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1NQT0NTX0VORFBPSU5UXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9TUE9DU19QTEFDRU1FTlRTXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9TUE9DU19VUERBVEVcIixcbiAgXCJESVNDT1ZFUllfU1RSRUFNX1NQT0NfQkxPQ0tFRFwiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fU1BPQ19JTVBSRVNTSU9OXCIsXG4gIFwiRElTQ09WRVJZX1NUUkVBTV9UT1BJQ1NfTE9BRElOR1wiLFxuICBcIkRJU0NPVkVSWV9TVFJFQU1fVVNFUl9FVkVOVFwiLFxuICBcIkRPV05MT0FEX0NIQU5HRURcIixcbiAgXCJGQUtFU1BPVF9DVEFfQ0xJQ0tcIixcbiAgXCJGQUtFU1BPVF9ESVNNSVNTXCIsXG4gIFwiRkFLRV9GT0NVU19TRUFSQ0hcIixcbiAgXCJGSUxMX1NFQVJDSF9URVJNXCIsXG4gIFwiRk9MTE9XX1NFQ1RJT05cIixcbiAgXCJIQU5ET0ZGX1NFQVJDSF9UT19BV0VTT01FQkFSXCIsXG4gIFwiSElERV9QRVJTT05BTElaRVwiLFxuICBcIkhJREVfVE9BU1RfTUVTU0FHRVwiLFxuICBcIklORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9NT0RFTF9VUERBVEVcIixcbiAgXCJJTkZFUlJFRF9QRVJTT05BTElaQVRJT05fUkVGUkVTSFwiLFxuICBcIklORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9SRVNFVFwiLFxuICBcIklORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9VUERBVEVcIixcbiAgXCJJTklUXCIsXG4gIFwiSU5MSU5FX1NFTEVDVElPTl9DTElDS1wiLFxuICBcIklOTElORV9TRUxFQ1RJT05fSU1QUkVTU0lPTlwiLFxuICBcIk1FU1NBR0VfQkxPQ0tcIixcbiAgXCJNRVNTQUdFX0NMSUNLXCIsXG4gIFwiTUVTU0FHRV9ESVNNSVNTXCIsXG4gIFwiTUVTU0FHRV9JTVBSRVNTSU9OXCIsXG4gIFwiTUVTU0FHRV9OT1RJRllfVklTSUJJTElUWVwiLFxuICBcIk1FU1NBR0VfU0VUXCIsXG4gIFwiTUVTU0FHRV9UT0dHTEVfVklTSUJJTElUWVwiLFxuICBcIk5FV19UQUJfSU5JVFwiLFxuICBcIk5FV19UQUJfSU5JVElBTF9TVEFURVwiLFxuICBcIk5FV19UQUJfTE9BRFwiLFxuICBcIk5FV19UQUJfUkVIWURSQVRFRFwiLFxuICBcIk5FV19UQUJfU1RBVEVfUkVRVUVTVFwiLFxuICBcIk5FV19UQUJfU1RBVEVfUkVRVUVTVF9TVEFSVFVQQ0FDSEVcIixcbiAgXCJORVdfVEFCX1NUQVRFX1JFUVVFU1RfV0lUSE9VVF9TVEFSVFVQQ0FDSEVcIixcbiAgXCJORVdfVEFCX1VOTE9BRFwiLFxuICBcIk9QRU5fQUJPVVRfRkFLRVNQT1RcIixcbiAgXCJPUEVOX0RPV05MT0FEX0ZJTEVcIixcbiAgXCJPUEVOX0xJTktcIixcbiAgXCJPUEVOX05FV19XSU5ET1dcIixcbiAgXCJPUEVOX1BSSVZBVEVfV0lORE9XXCIsXG4gIFwiT1BFTl9XRUJFWFRfU0VUVElOR1NcIixcbiAgXCJQQVJUTkVSX0xJTktfQVRUUklCVVRJT05cIixcbiAgXCJQTEFDRVNfQk9PS01BUktTX1JFTU9WRURcIixcbiAgXCJQTEFDRVNfQk9PS01BUktfQURERURcIixcbiAgXCJQTEFDRVNfSElTVE9SWV9DTEVBUkVEXCIsXG4gIFwiUExBQ0VTX0xJTktTX0NIQU5HRURcIixcbiAgXCJQTEFDRVNfTElOS1NfREVMRVRFRFwiLFxuICBcIlBMQUNFU19MSU5LX0JMT0NLRURcIixcbiAgXCJQT0NLRVRfQ1RBXCIsXG4gIFwiUE9DS0VUX0xPR0dFRF9JTlwiLFxuICBcIlBPQ0tFVF9USFVNQlNfRE9XTlwiLFxuICBcIlBPQ0tFVF9USFVNQlNfVVBcIixcbiAgXCJQT0NLRVRfV0FJVElOR19GT1JfU1BPQ1wiLFxuICBcIlBSRUZTX0lOSVRJQUxfVkFMVUVTXCIsXG4gIFwiUFJFRl9DSEFOR0VEXCIsXG4gIFwiUFJFVklFV19SRVFVRVNUXCIsXG4gIFwiUFJFVklFV19SRVFVRVNUX0NBTkNFTFwiLFxuICBcIlBSRVZJRVdfUkVTUE9OU0VcIixcbiAgXCJQUk9NT19DQVJEX0NMSUNLXCIsXG4gIFwiUFJPTU9fQ0FSRF9ESVNNSVNTXCIsXG4gIFwiUFJPTU9fQ0FSRF9JTVBSRVNTSU9OXCIsXG4gIFwiUkVNT1ZFX0RPV05MT0FEX0ZJTEVcIixcbiAgXCJSRVBPUlRfQURfT1BFTlwiLFxuICBcIlJFUE9SVF9BRF9TVUJNSVRcIixcbiAgXCJSRVBPUlRfQ0xPU0VcIixcbiAgXCJSRVBPUlRfQ09OVEVOVF9PUEVOXCIsXG4gIFwiUkVQT1JUX0NPTlRFTlRfU1VCTUlUXCIsXG4gIFwiUklDSF9JQ09OX01JU1NJTkdcIixcbiAgXCJTQVZFX1NFU1NJT05fUEVSRl9EQVRBXCIsXG4gIFwiU0NSRUVOU0hPVF9VUERBVEVEXCIsXG4gIFwiU0VDVElPTl9ERVJFR0lTVEVSXCIsXG4gIFwiU0VDVElPTl9ESVNBQkxFXCIsXG4gIFwiU0VDVElPTl9FTkFCTEVcIixcbiAgXCJTRUNUSU9OX09QVElPTlNfQ0hBTkdFRFwiLFxuICBcIlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVFwiLFxuICBcIlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1VQREFURVwiLFxuICBcIlNFQ1RJT05fUkVHSVNURVJcIixcbiAgXCJTRUNUSU9OX1VQREFURVwiLFxuICBcIlNFQ1RJT05fVVBEQVRFX0NBUkRcIixcbiAgXCJTRVRUSU5HU19DTE9TRVwiLFxuICBcIlNFVFRJTkdTX09QRU5cIixcbiAgXCJTRVRfUFJFRlwiLFxuICBcIlNIT1dfRE9XTkxPQURfRklMRVwiLFxuICBcIlNIT1dfRklSRUZPWF9BQ0NPVU5UU1wiLFxuICBcIlNIT1dfUEVSU09OQUxJWkVcIixcbiAgXCJTSE9XX1BSSVZBQ1lfSU5GT1wiLFxuICBcIlNIT1dfU0VBUkNIXCIsXG4gIFwiU0hPV19UT0FTVF9NRVNTQUdFXCIsXG4gIFwiU0tJUFBFRF9TSUdOSU5cIixcbiAgXCJTT1ZfVVBEQVRFRFwiLFxuICBcIlNVQk1JVF9FTUFJTFwiLFxuICBcIlNVQk1JVF9TSUdOSU5cIixcbiAgXCJTWVNURU1fVElDS1wiLFxuICBcIlRFTEVNRVRSWV9JTVBSRVNTSU9OX1NUQVRTXCIsXG4gIFwiVEVMRU1FVFJZX1VTRVJfRVZFTlRcIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fSU1QUkVTU0lPTlwiLFxuICBcIlRPUElDX1NFTEVDVElPTl9NQVlCRV9MQVRFUlwiLFxuICBcIlRPUElDX1NFTEVDVElPTl9TUE9UTElHSFRfQ0xPU0VcIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fU1BPVExJR0hUX09QRU5cIixcbiAgXCJUT1BJQ19TRUxFQ1RJT05fVVNFUl9ESVNNSVNTXCIsXG4gIFwiVE9QSUNfU0VMRUNUSU9OX1VTRVJfT1BFTlwiLFxuICBcIlRPUElDX1NFTEVDVElPTl9VU0VSX1NBVkVcIixcbiAgXCJUT1BfU0lURVNfQUREXCIsXG4gIFwiVE9QX1NJVEVTX0NBTkNFTF9FRElUXCIsXG4gIFwiVE9QX1NJVEVTX0NMT1NFX1NFQVJDSF9TSE9SVENVVFNfTU9EQUxcIixcbiAgXCJUT1BfU0lURVNfRURJVFwiLFxuICBcIlRPUF9TSVRFU19JTlNFUlRcIixcbiAgXCJUT1BfU0lURVNfT1BFTl9TRUFSQ0hfU0hPUlRDVVRTX01PREFMXCIsXG4gIFwiVE9QX1NJVEVTX09SR0FOSUNfSU1QUkVTU0lPTl9TVEFUU1wiLFxuICBcIlRPUF9TSVRFU19QSU5cIixcbiAgXCJUT1BfU0lURVNfUFJFRlNfVVBEQVRFRFwiLFxuICBcIlRPUF9TSVRFU19TUE9OU09SRURfSU1QUkVTU0lPTl9TVEFUU1wiLFxuICBcIlRPUF9TSVRFU19VTlBJTlwiLFxuICBcIlRPUF9TSVRFU19VUERBVEVEXCIsXG4gIFwiVE9UQUxfQk9PS01BUktTX1JFUVVFU1RcIixcbiAgXCJUT1RBTF9CT09LTUFSS1NfUkVTUE9OU0VcIixcbiAgXCJUUkVORElOR19TRUFSQ0hfSU1QUkVTU0lPTlwiLFxuICBcIlRSRU5ESU5HX1NFQVJDSF9TVUdHRVNUSU9OX09QRU5cIixcbiAgXCJUUkVORElOR19TRUFSQ0hfVE9HR0xFX0NPTExBUFNFXCIsXG4gIFwiVFJFTkRJTkdfU0VBUkNIX1VQREFURVwiLFxuICBcIlVOQkxPQ0tfU0VDVElPTlwiLFxuICBcIlVORk9MTE9XX1NFQ1RJT05cIixcbiAgXCJVTklOSVRcIixcbiAgXCJVUERBVEVfUElOTkVEX1NFQVJDSF9TSE9SVENVVFNcIixcbiAgXCJVUERBVEVfU0VBUkNIX1NIT1JUQ1VUU1wiLFxuICBcIldBTExQQVBFUlNfQ0FURUdPUllfU0VUXCIsXG4gIFwiV0FMTFBBUEVSU19DVVNUT01fU0VUXCIsXG4gIFwiV0FMTFBBUEVSU19GRUFUVVJFX0hJR0hMSUdIVF9DT1VOVEVSX0lOQ1JFTUVOVFwiLFxuICBcIldBTExQQVBFUlNfRkVBVFVSRV9ISUdITElHSFRfQ1RBX0NMSUNLRURcIixcbiAgXCJXQUxMUEFQRVJTX0ZFQVRVUkVfSElHSExJR0hUX0RJU01JU1NFRFwiLFxuICBcIldBTExQQVBFUlNfRkVBVFVSRV9ISUdITElHSFRfU0VFTlwiLFxuICBcIldBTExQQVBFUlNfU0VUXCIsXG4gIFwiV0FMTFBBUEVSX0NBVEVHT1JZX0NMSUNLXCIsXG4gIFwiV0FMTFBBUEVSX0NMSUNLXCIsXG4gIFwiV0FMTFBBUEVSX1JFTU9WRV9VUExPQURcIixcbiAgXCJXQUxMUEFQRVJfVVBMT0FEXCIsXG4gIFwiV0VBVEhFUl9JTVBSRVNTSU9OXCIsXG4gIFwiV0VBVEhFUl9MT0FEX0VSUk9SXCIsXG4gIFwiV0VBVEhFUl9MT0NBVElPTl9EQVRBX1VQREFURVwiLFxuICBcIldFQVRIRVJfTE9DQVRJT05fU0VBUkNIX1VQREFURVwiLFxuICBcIldFQVRIRVJfTE9DQVRJT05fU1VHR0VTVElPTlNfVVBEQVRFXCIsXG4gIFwiV0VBVEhFUl9PUEVOX1BST1ZJREVSX1VSTFwiLFxuICBcIldFQVRIRVJfUVVFUllfVVBEQVRFXCIsXG4gIFwiV0VBVEhFUl9TRUFSQ0hfQUNUSVZFXCIsXG4gIFwiV0VBVEhFUl9VUERBVEVcIixcbiAgXCJXRUJFWFRfQ0xJQ0tcIixcbiAgXCJXRUJFWFRfRElTTUlTU1wiLFxuICBcIldJREdFVFNfTElTVFNfQ0hBTkdFX1NFTEVDVEVEXCIsXG4gIFwiV0lER0VUU19MSVNUU19TRVRcIixcbiAgXCJXSURHRVRTX0xJU1RTX1NFVF9TRUxFQ1RFRFwiLFxuICBcIldJREdFVFNfTElTVFNfVVBEQVRFXCIsXG4gIFwiV0lER0VUU19MSVNUU19VU0VSX0VWRU5UXCIsXG4gIFwiV0lER0VUU19MSVNUU19VU0VSX0lNUFJFU1NJT05cIixcbiAgXCJXSURHRVRTX1RJTUVSX0VORFwiLFxuICBcIldJREdFVFNfVElNRVJfUEFVU0VcIixcbiAgXCJXSURHRVRTX1RJTUVSX1BMQVlcIixcbiAgXCJXSURHRVRTX1RJTUVSX1JFU0VUXCIsXG4gIFwiV0lER0VUU19USU1FUl9TRVRcIixcbiAgXCJXSURHRVRTX1RJTUVSX1NFVF9EVVJBVElPTlwiLFxuICBcIldJREdFVFNfVElNRVJfU0VUX1RZUEVcIixcbiAgXCJXSURHRVRTX1RJTUVSX1VTRVJfRVZFTlRcIixcbiAgXCJXSURHRVRTX1RJTUVSX1VTRVJfSU1QUkVTU0lPTlwiLFxuXSkge1xuICBhY3Rpb25UeXBlc1t0eXBlXSA9IHR5cGU7XG59XG5cbi8vIEhlbHBlciBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgcm91dGVkIGFjdGlvbnMgYmV0d2VlbiBjb250ZW50IGFuZCBtYWluXG4vLyBOb3QgaW50ZW5kZWQgdG8gYmUgdXNlZCBieSBjb25zdW1lcnNcbmZ1bmN0aW9uIF9Sb3V0ZU1lc3NhZ2UoYWN0aW9uLCBvcHRpb25zKSB7XG4gIGNvbnN0IG1ldGEgPSBhY3Rpb24ubWV0YSA/IHsgLi4uYWN0aW9uLm1ldGEgfSA6IHt9O1xuICBpZiAoIW9wdGlvbnMgfHwgIW9wdGlvbnMuZnJvbSB8fCAhb3B0aW9ucy50bykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiUm91dGVkIE1lc3NhZ2VzIG11c3QgaGF2ZSBvcHRpb25zIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyLCBhbmQgbXVzdCBhdCBsZWFzdCBpbmNsdWRlIGEgLmZyb20gYW5kIC50byBwcm9wZXJ0eS5cIlxuICAgICk7XG4gIH1cbiAgLy8gRm9yIGVhY2ggb2YgdGhlc2UgZmllbGRzLCBpZiB0aGV5IGFyZSBwYXNzZWQgYXMgYW4gb3B0aW9uLFxuICAvLyBhZGQgdGhlbSB0byB0aGUgYWN0aW9uLiBJZiB0aGV5IGFyZSBub3QgZGVmaW5lZCwgcmVtb3ZlIHRoZW0uXG4gIFtcImZyb21cIiwgXCJ0b1wiLCBcInRvVGFyZ2V0XCIsIFwiZnJvbVRhcmdldFwiLCBcInNraXBNYWluXCIsIFwic2tpcExvY2FsXCJdLmZvckVhY2goXG4gICAgbyA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnNbb10gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgbWV0YVtvXSA9IG9wdGlvbnNbb107XG4gICAgICB9IGVsc2UgaWYgKG1ldGFbb10pIHtcbiAgICAgICAgZGVsZXRlIG1ldGFbb107XG4gICAgICB9XG4gICAgfVxuICApO1xuICByZXR1cm4geyAuLi5hY3Rpb24sIG1ldGEgfTtcbn1cblxuLyoqXG4gKiBBbHNvVG9NYWluIC0gQ3JlYXRlcyBhIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIGRpc3BhdGNoZWQgbG9jYWxseSBhbmQgYWxzbyBzZW50IHRvIHRoZSBNYWluIHByb2Nlc3MuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb24gQW55IHJlZHV4IGFjdGlvbiAocmVxdWlyZWQpXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSAge2Jvb2x9ICAgc2tpcExvY2FsIFVzZWQgYnkgT25seVRvTWFpbiB0byBza2lwIHRoZSBtYWluIHJlZHVjZXJcbiAqIEBwYXJhbSAge3N0cmluZ30gZnJvbVRhcmdldCBUaGUgaWQgb2YgdGhlIGNvbnRlbnQgcG9ydCBmcm9tIHdoaWNoIHRoZSBhY3Rpb24gb3JpZ2luYXRlZC4gKG9wdGlvbmFsKVxuICogQHJldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24gd2l0aCBhZGRlZCAubWV0YSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIEFsc29Ub01haW4oYWN0aW9uLCBmcm9tVGFyZ2V0LCBza2lwTG9jYWwpIHtcbiAgcmV0dXJuIF9Sb3V0ZU1lc3NhZ2UoYWN0aW9uLCB7XG4gICAgZnJvbTogQ09OVEVOVF9NRVNTQUdFX1RZUEUsXG4gICAgdG86IE1BSU5fTUVTU0FHRV9UWVBFLFxuICAgIGZyb21UYXJnZXQsXG4gICAgc2tpcExvY2FsLFxuICB9KTtcbn1cblxuLyoqXG4gKiBPbmx5VG9NYWluIC0gQ3JlYXRlcyBhIG1lc3NhZ2UgdGhhdCB3aWxsIGJlIHNlbnQgdG8gdGhlIE1haW4gcHJvY2VzcyBhbmQgc2tpcCB0aGUgbG9jYWwgcmVkdWNlci5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbiBBbnkgcmVkdXggYWN0aW9uIChyZXF1aXJlZClcbiAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9uc1xuICogQHBhcmFtICB7c3RyaW5nfSBmcm9tVGFyZ2V0IFRoZSBpZCBvZiB0aGUgY29udGVudCBwb3J0IGZyb20gd2hpY2ggdGhlIGFjdGlvbiBvcmlnaW5hdGVkLiAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbiB3aXRoIGFkZGVkIC5tZXRhIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gT25seVRvTWFpbihhY3Rpb24sIGZyb21UYXJnZXQpIHtcbiAgcmV0dXJuIEFsc29Ub01haW4oYWN0aW9uLCBmcm9tVGFyZ2V0LCB0cnVlKTtcbn1cblxuLyoqXG4gKiBCcm9hZGNhc3RUb0NvbnRlbnQgLSBDcmVhdGVzIGEgbWVzc2FnZSB0aGF0IHdpbGwgYmUgZGlzcGF0Y2hlZCB0byBtYWluIGFuZCBzZW50IHRvIEFMTCBjb250ZW50IHByb2Nlc3Nlcy5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbiBBbnkgcmVkdXggYWN0aW9uIChyZXF1aXJlZClcbiAqIEBwYXJhbSAge29iamVjdH0gb3B0aW9ucyAob3B0aW9uYWwpXG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbiB3aXRoIGFkZGVkIC5tZXRhIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gQnJvYWRjYXN0VG9Db250ZW50KGFjdGlvbiwgb3B0aW9ucykge1xuICByZXR1cm4gX1JvdXRlTWVzc2FnZShhY3Rpb24sIHtcbiAgICBmcm9tOiBNQUlOX01FU1NBR0VfVFlQRSxcbiAgICB0bzogQ09OVEVOVF9NRVNTQUdFX1RZUEUsXG4gICAgLi4ub3B0aW9ucyxcbiAgfSk7XG59XG5cbi8qKlxuICogQWxzb1RvT25lQ29udGVudCAtIENyZWF0ZXMgYSBtZXNzYWdlIHRoYXQgd2lsbCBiZSB3aWxsIGJlIGRpc3BhdGNoZWQgdG8gdGhlIG1haW4gc3RvcmVcbiAqICAgICAgICAgICAgICAgICAgICBhbmQgYWxzbyBzZW50IHRvIGEgcGFydGljdWxhciBDb250ZW50IHByb2Nlc3MuXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBhY3Rpb24gQW55IHJlZHV4IGFjdGlvbiAocmVxdWlyZWQpXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHRhcmdldCBUaGUgaWQgb2YgYSBjb250ZW50IHBvcnRcbiAqIEBwYXJhbSAge2Jvb2x9IHNraXBNYWluIFVzZWQgYnkgT25seVRvT25lQ29udGVudCB0byBza2lwIHRoZSBtYWluIHByb2Nlc3NcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gYWN0aW9uIHdpdGggYWRkZWQgLm1ldGEgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBBbHNvVG9PbmVDb250ZW50KGFjdGlvbiwgdGFyZ2V0LCBza2lwTWFpbikge1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiWW91IG11c3QgcHJvdmlkZSBhIHRhcmdldCBJRCBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlciBvZiBBbHNvVG9PbmVDb250ZW50LiBJZiB5b3Ugd2FudCB0byBzZW5kIHRvIGFsbCBjb250ZW50IHByb2Nlc3NlcywgdXNlIEJyb2FkY2FzdFRvQ29udGVudFwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gX1JvdXRlTWVzc2FnZShhY3Rpb24sIHtcbiAgICBmcm9tOiBNQUlOX01FU1NBR0VfVFlQRSxcbiAgICB0bzogQ09OVEVOVF9NRVNTQUdFX1RZUEUsXG4gICAgdG9UYXJnZXQ6IHRhcmdldCxcbiAgICBza2lwTWFpbixcbiAgfSk7XG59XG5cbi8qKlxuICogT25seVRvT25lQ29udGVudCAtIENyZWF0ZXMgYSBtZXNzYWdlIHRoYXQgd2lsbCBiZSBzZW50IHRvIGEgcGFydGljdWxhciBDb250ZW50IHByb2Nlc3NcbiAqICAgICAgICAgICAgICAgICAgICBhbmQgc2tpcCB0aGUgbWFpbiByZWR1Y2VyLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gYWN0aW9uIEFueSByZWR1eCBhY3Rpb24gKHJlcXVpcmVkKVxuICogQHBhcmFtICB7c3RyaW5nfSB0YXJnZXQgVGhlIGlkIG9mIGEgY29udGVudCBwb3J0XG4gKiBAcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbiB3aXRoIGFkZGVkIC5tZXRhIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gT25seVRvT25lQ29udGVudChhY3Rpb24sIHRhcmdldCkge1xuICByZXR1cm4gQWxzb1RvT25lQ29udGVudChhY3Rpb24sIHRhcmdldCwgdHJ1ZSk7XG59XG5cbi8qKlxuICogQWxzb1RvUHJlbG9hZGVkIC0gQ3JlYXRlcyBhIG1lc3NhZ2UgdGhhdCBkaXNwYXRjaGVkIHRvIHRoZSBtYWluIHJlZHVjZXIgYW5kIGFsc28gc2VudCB0byB0aGUgcHJlbG9hZGVkIHRhYi5cbiAqXG4gKiBAcGFyYW0gIHtvYmplY3R9IGFjdGlvbiBBbnkgcmVkdXggYWN0aW9uIChyZXF1aXJlZClcbiAqIEByZXR1cm4ge29iamVjdH0gQW4gYWN0aW9uIHdpdGggYWRkZWQgLm1ldGEgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBBbHNvVG9QcmVsb2FkZWQoYWN0aW9uKSB7XG4gIHJldHVybiBfUm91dGVNZXNzYWdlKGFjdGlvbiwge1xuICAgIGZyb206IE1BSU5fTUVTU0FHRV9UWVBFLFxuICAgIHRvOiBQUkVMT0FEX01FU1NBR0VfVFlQRSxcbiAgfSk7XG59XG5cbi8qKlxuICogVXNlckV2ZW50IC0gQSB0ZWxlbWV0cnkgcGluZyBpbmRpY2F0aW5nIGEgdXNlciBhY3Rpb24uIFRoaXMgc2hvdWxkIG9ubHlcbiAqICAgICAgICAgICAgICAgICAgIGJlIHNlbnQgZnJvbSB0aGUgVUkgZHVyaW5nIGEgdXNlciBzZXNzaW9uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBGaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGluZyAoc291cmNlLCBldGMuKVxuICogQHJldHVybiB7b2JqZWN0fSBBbiBBbHNvVG9NYWluIGFjdGlvblxuICovXG5mdW5jdGlvbiBVc2VyRXZlbnQoZGF0YSkge1xuICByZXR1cm4gQWxzb1RvTWFpbih7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuVEVMRU1FVFJZX1VTRVJfRVZFTlQsXG4gICAgZGF0YSxcbiAgfSk7XG59XG5cbi8qKlxuICogRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50IC0gQSB0ZWxlbWV0cnkgcGluZyBpbmRpY2F0aW5nIGEgdXNlciBhY3Rpb24gZnJvbSBEaXNjb3ZlcnkgU3RyZWFtLiBUaGlzIHNob3VsZCBvbmx5XG4gKiAgICAgICAgICAgICAgICAgICAgIGJlIHNlbnQgZnJvbSB0aGUgVUkgZHVyaW5nIGEgdXNlciBzZXNzaW9uLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBGaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGluZyAoc291cmNlLCBldGMuKVxuICogQHJldHVybiB7b2JqZWN0fSBBbiBBbHNvVG9NYWluIGFjdGlvblxuICovXG5mdW5jdGlvbiBEaXNjb3ZlcnlTdHJlYW1Vc2VyRXZlbnQoZGF0YSkge1xuICByZXR1cm4gQWxzb1RvTWFpbih7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuRElTQ09WRVJZX1NUUkVBTV9VU0VSX0VWRU5ULFxuICAgIGRhdGEsXG4gIH0pO1xufVxuXG4vKipcbiAqIEltcHJlc3Npb25TdGF0cyAtIEEgdGVsZW1ldHJ5IHBpbmcgaW5kaWNhdGluZyBhbiBpbXByZXNzaW9uIHN0YXRzLlxuICpcbiAqIEBwYXJhbSAge29iamVjdH0gZGF0YSBGaWVsZHMgdG8gaW5jbHVkZSBpbiB0aGUgcGluZ1xuICogQHBhcmFtICB7aW50fSBpbXBvcnRDb250ZXh0IChGb3IgdGVzdGluZykgT3ZlcnJpZGUgdGhlIGltcG9ydCBjb250ZXh0IGZvciB0ZXN0aW5nLlxuICogI3JldHVybiB7b2JqZWN0fSBBbiBhY3Rpb24uIEZvciBVSSBjb2RlLCBhIEFsc29Ub01haW4gYWN0aW9uLlxuICovXG5mdW5jdGlvbiBJbXByZXNzaW9uU3RhdHMoZGF0YSwgaW1wb3J0Q29udGV4dCA9IGdsb2JhbEltcG9ydENvbnRleHQpIHtcbiAgY29uc3QgYWN0aW9uID0ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLlRFTEVNRVRSWV9JTVBSRVNTSU9OX1NUQVRTLFxuICAgIGRhdGEsXG4gIH07XG4gIHJldHVybiBpbXBvcnRDb250ZXh0ID09PSBVSV9DT0RFID8gQWxzb1RvTWFpbihhY3Rpb24pIDogYWN0aW9uO1xufVxuXG4vKipcbiAqIERpc2NvdmVyeVN0cmVhbUltcHJlc3Npb25TdGF0cyAtIEEgdGVsZW1ldHJ5IHBpbmcgaW5kaWNhdGluZyBhbiBpbXByZXNzaW9uIHN0YXRzIGluIERpc2NvdmVyeSBTdHJlYW0uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhIEZpZWxkcyB0byBpbmNsdWRlIGluIHRoZSBwaW5nXG4gKiBAcGFyYW0gIHtpbnR9IGltcG9ydENvbnRleHQgKEZvciB0ZXN0aW5nKSBPdmVycmlkZSB0aGUgaW1wb3J0IGNvbnRleHQgZm9yIHRlc3RpbmcuXG4gKiAjcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbi4gRm9yIFVJIGNvZGUsIGEgQWxzb1RvTWFpbiBhY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIERpc2NvdmVyeVN0cmVhbUltcHJlc3Npb25TdGF0cyhcbiAgZGF0YSxcbiAgaW1wb3J0Q29udGV4dCA9IGdsb2JhbEltcG9ydENvbnRleHRcbikge1xuICBjb25zdCBhY3Rpb24gPSB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuRElTQ09WRVJZX1NUUkVBTV9JTVBSRVNTSU9OX1NUQVRTLFxuICAgIGRhdGEsXG4gIH07XG4gIHJldHVybiBpbXBvcnRDb250ZXh0ID09PSBVSV9DT0RFID8gQWxzb1RvTWFpbihhY3Rpb24pIDogYWN0aW9uO1xufVxuXG4vKipcbiAqIERpc2NvdmVyeVN0cmVhbUxvYWRlZENvbnRlbnQgLSBBIHRlbGVtZXRyeSBwaW5nIGluZGljYXRpbmcgYSBjb250ZW50IGdldHMgbG9hZGVkIGluIERpc2NvdmVyeSBTdHJlYW0uXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSBkYXRhIEZpZWxkcyB0byBpbmNsdWRlIGluIHRoZSBwaW5nXG4gKiBAcGFyYW0gIHtpbnR9IGltcG9ydENvbnRleHQgKEZvciB0ZXN0aW5nKSBPdmVycmlkZSB0aGUgaW1wb3J0IGNvbnRleHQgZm9yIHRlc3RpbmcuXG4gKiAjcmV0dXJuIHtvYmplY3R9IEFuIGFjdGlvbi4gRm9yIFVJIGNvZGUsIGEgQWxzb1RvTWFpbiBhY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIERpc2NvdmVyeVN0cmVhbUxvYWRlZENvbnRlbnQoXG4gIGRhdGEsXG4gIGltcG9ydENvbnRleHQgPSBnbG9iYWxJbXBvcnRDb250ZXh0XG4pIHtcbiAgY29uc3QgYWN0aW9uID0ge1xuICAgIHR5cGU6IGFjdGlvblR5cGVzLkRJU0NPVkVSWV9TVFJFQU1fTE9BREVEX0NPTlRFTlQsXG4gICAgZGF0YSxcbiAgfTtcbiAgcmV0dXJuIGltcG9ydENvbnRleHQgPT09IFVJX0NPREUgPyBBbHNvVG9NYWluKGFjdGlvbikgOiBhY3Rpb247XG59XG5cbmZ1bmN0aW9uIFNldFByZWYocHJlZk5hbWUsIHZhbHVlLCBpbXBvcnRDb250ZXh0ID0gZ2xvYmFsSW1wb3J0Q29udGV4dCkge1xuICBjb25zdCBhY3Rpb24gPSB7XG4gICAgdHlwZTogYWN0aW9uVHlwZXMuU0VUX1BSRUYsXG4gICAgZGF0YTogeyBuYW1lOiBwcmVmTmFtZSwgdmFsdWUgfSxcbiAgfTtcbiAgcmV0dXJuIGltcG9ydENvbnRleHQgPT09IFVJX0NPREUgPyBBbHNvVG9NYWluKGFjdGlvbikgOiBhY3Rpb247XG59XG5cbmZ1bmN0aW9uIFdlYkV4dEV2ZW50KHR5cGUsIGRhdGEsIGltcG9ydENvbnRleHQgPSBnbG9iYWxJbXBvcnRDb250ZXh0KSB7XG4gIGlmICghZGF0YSB8fCAhZGF0YS5zb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnV2ViRXh0RXZlbnQgYWN0aW9ucyBzaG91bGQgaW5jbHVkZSBhIHByb3BlcnR5IFwic291cmNlXCIsIHRoZSBpZCBvZiB0aGUgd2ViZXh0ZW5zaW9uIHRoYXQgc2hvdWxkIHJlY2VpdmUgdGhlIGV2ZW50LidcbiAgICApO1xuICB9XG4gIGNvbnN0IGFjdGlvbiA9IHsgdHlwZSwgZGF0YSB9O1xuICByZXR1cm4gaW1wb3J0Q29udGV4dCA9PT0gVUlfQ09ERSA/IEFsc29Ub01haW4oYWN0aW9uKSA6IGFjdGlvbjtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbkNyZWF0b3JzID0ge1xuICBCcm9hZGNhc3RUb0NvbnRlbnQsXG4gIFVzZXJFdmVudCxcbiAgRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50LFxuICBJbXByZXNzaW9uU3RhdHMsXG4gIEFsc29Ub09uZUNvbnRlbnQsXG4gIE9ubHlUb09uZUNvbnRlbnQsXG4gIEFsc29Ub01haW4sXG4gIE9ubHlUb01haW4sXG4gIEFsc29Ub1ByZWxvYWRlZCxcbiAgU2V0UHJlZixcbiAgV2ViRXh0RXZlbnQsXG4gIERpc2NvdmVyeVN0cmVhbUltcHJlc3Npb25TdGF0cyxcbiAgRGlzY292ZXJ5U3RyZWFtTG9hZGVkQ29udGVudCxcbn07XG5cbi8vIFRoZXNlIGFyZSBoZWxwZXJzIHRvIHRlc3QgZm9yIGNlcnRhaW4ga2luZHMgb2YgYWN0aW9uc1xuZXhwb3J0IGNvbnN0IGFjdGlvblV0aWxzID0ge1xuICBpc1NlbmRUb01haW4oYWN0aW9uKSB7XG4gICAgaWYgKCFhY3Rpb24ubWV0YSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgYWN0aW9uLm1ldGEudG8gPT09IE1BSU5fTUVTU0FHRV9UWVBFICYmXG4gICAgICBhY3Rpb24ubWV0YS5mcm9tID09PSBDT05URU5UX01FU1NBR0VfVFlQRVxuICAgICk7XG4gIH0sXG4gIGlzQnJvYWRjYXN0VG9Db250ZW50KGFjdGlvbikge1xuICAgIGlmICghYWN0aW9uLm1ldGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5tZXRhLnRvID09PSBDT05URU5UX01FU1NBR0VfVFlQRSAmJiAhYWN0aW9uLm1ldGEudG9UYXJnZXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGlzU2VuZFRvT25lQ29udGVudChhY3Rpb24pIHtcbiAgICBpZiAoIWFjdGlvbi5tZXRhKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ubWV0YS50byA9PT0gQ09OVEVOVF9NRVNTQUdFX1RZUEUgJiYgYWN0aW9uLm1ldGEudG9UYXJnZXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG4gIGlzU2VuZFRvUHJlbG9hZGVkKGFjdGlvbikge1xuICAgIGlmICghYWN0aW9uLm1ldGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGFjdGlvbi5tZXRhLnRvID09PSBQUkVMT0FEX01FU1NBR0VfVFlQRSAmJlxuICAgICAgYWN0aW9uLm1ldGEuZnJvbSA9PT0gTUFJTl9NRVNTQUdFX1RZUEVcbiAgICApO1xuICB9LFxuICBpc0Zyb21NYWluKGFjdGlvbikge1xuICAgIGlmICghYWN0aW9uLm1ldGEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIGFjdGlvbi5tZXRhLmZyb20gPT09IE1BSU5fTUVTU0FHRV9UWVBFICYmXG4gICAgICBhY3Rpb24ubWV0YS50byA9PT0gQ09OVEVOVF9NRVNTQUdFX1RZUEVcbiAgICApO1xuICB9LFxuICBnZXRQb3J0SWRPZlNlbmRlcihhY3Rpb24pIHtcbiAgICByZXR1cm4gKGFjdGlvbi5tZXRhICYmIGFjdGlvbi5tZXRhLmZyb21UYXJnZXQpIHx8IG51bGw7XG4gIH0sXG4gIF9Sb3V0ZU1lc3NhZ2UsXG59O1xuIiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IFJlYWN0UmVkdXg7IiwiY29uc3QgX19XRUJQQUNLX05BTUVTUEFDRV9PQkpFQ1RfXyA9IFJlYWN0OyIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFNpbXBsZUhhc2hSb3V0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkhhc2hDaGFuZ2UgPSB0aGlzLm9uSGFzaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhhc2g6IGdsb2JhbFRoaXMubG9jYXRpb24uaGFzaCB9O1xuICB9XG5cbiAgb25IYXNoQ2hhbmdlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBoYXNoOiBnbG9iYWxUaGlzLmxvY2F0aW9uLmhhc2ggfSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCB0aGlzLm9uSGFzaENoYW5nZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRoaXMub25IYXNoQ2hhbmdlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBbLCAuLi5yb3V0ZXNdID0gdGhpcy5zdGF0ZS5oYXNoLnNwbGl0KFwiLVwiKTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGhhc2g6IHRoaXMuc3RhdGUuaGFzaCxcbiAgICAgICAgcm91dGVzLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU2ltcGxlSGFzaFJvdXRlciB9IGZyb20gXCIuL1NpbXBsZUhhc2hSb3V0ZXJcIjtcblxuLy8gUHJlZiBDb25zdGFudHNcbmNvbnN0IFBSRUZfQURfU0laRV9NRURJVU1fUkVDVEFOR0xFID0gXCJuZXd0YWJBZFNpemUubWVkaXVtUmVjdGFuZ2xlXCI7XG5jb25zdCBQUkVGX0FEX1NJWkVfQklMTEJPQVJEID0gXCJuZXd0YWJBZFNpemUuYmlsbGJvYXJkXCI7XG5jb25zdCBQUkVGX0FEX1NJWkVfTEVBREVSQk9BUkQgPSBcIm5ld3RhYkFkU2l6ZS5sZWFkZXJib2FyZFwiO1xuY29uc3QgUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfU0VMRUNURURfRkVFRCA9XG4gIFwiZGlzY292ZXJ5c3RyZWFtLmNvbnRleHR1YWxDb250ZW50LnNlbGVjdGVkRmVlZFwiO1xuY29uc3QgUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfRkVFRFMgPSBcImRpc2NvdmVyeXN0cmVhbS5jb250ZXh0dWFsQ29udGVudC5mZWVkc1wiO1xuY29uc3QgUFJFRl9TRUNUSU9OU19FTkFCTEVEID0gXCJkaXNjb3ZlcnlzdHJlYW0uc2VjdGlvbnMuZW5hYmxlZFwiO1xuY29uc3QgUFJFRl9TUE9DX1BMQUNFTUVOVFMgPSBcImRpc2NvdmVyeXN0cmVhbS5wbGFjZW1lbnRzLnNwb2NzXCI7XG5jb25zdCBQUkVGX1NQT0NfQ09VTlRTID0gXCJkaXNjb3ZlcnlzdHJlYW0ucGxhY2VtZW50cy5zcG9jcy5jb3VudHNcIjtcbmNvbnN0IFBSRUZfQ09OVEVYVFVBTF9BRFNfRU5BQkxFRCA9XG4gIFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmNvbnRleHR1YWxBZHMuZW5hYmxlZFwiO1xuY29uc3QgUFJFRl9DT05URVhUVUFMX0JBTk5FUl9QTEFDRU1FTlRTID1cbiAgXCJkaXNjb3ZlcnlzdHJlYW0ucGxhY2VtZW50cy5jb250ZXh0dWFsQmFubmVyc1wiO1xuY29uc3QgUFJFRl9DT05URVhUVUFMX0JBTk5FUl9DT1VOVFMgPVxuICBcImRpc2NvdmVyeXN0cmVhbS5wbGFjZW1lbnRzLmNvbnRleHR1YWxCYW5uZXJzLmNvdW50c1wiO1xuXG5jb25zdCBSb3cgPSBwcm9wcyA9PiAoXG4gIDx0ciBjbGFzc05hbWU9XCJtZXNzYWdlLWl0ZW1cIiB7Li4ucHJvcHN9PlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC90cj5cbik7XG5cbmZ1bmN0aW9uIHJlbGF0aXZlVGltZSh0aW1lc3RhbXApIHtcbiAgaWYgKCF0aW1lc3RhbXApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHRpbWVzdGFtcCkgLyAxMDAwKTtcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aW1lc3RhbXApIC8gNjAwMDApO1xuICBpZiAoc2Vjb25kcyA8IDIpIHtcbiAgICByZXR1cm4gXCJqdXN0IG5vd1wiO1xuICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgIHJldHVybiBgJHtzZWNvbmRzfSBzZWNvbmRzIGFnb2A7XG4gIH0gZWxzZSBpZiAobWludXRlcyA9PT0gMSkge1xuICAgIHJldHVybiBcIjEgbWludXRlIGFnb1wiO1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MDApIHtcbiAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlcyBhZ29gO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVTdG9yeUJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMuc3RvcnkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PmNvbGxhcHNlL29wZW48L2J1dHRvbj47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVByZWZDaGVja2JveCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMucHJlZiwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY2hlY2tlZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgIHt0aGlzLnByb3BzLnByZWZ9e1wiIFwifVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMudG9nZ2xlUGVyc29uYWxpemF0aW9uID0gdGhpcy50b2dnbGVQZXJzb25hbGl6YXRpb24uYmluZCh0aGlzKTtcbiAgfVxuXG4gIHRvZ2dsZVBlcnNvbmFsaXphdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX1RPR0dMRSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhc3RVcGRhdGVkLCBpbml0aWFsaXplZCB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5QZXJzb25hbGl6YXRpb247XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgIDxUb2dnbGVQcmVmQ2hlY2tib3hcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMucGVyc29uYWxpemVkfVxuICAgICAgICAgICAgICAgICAgcHJlZj1cInBlcnNvbmFsaXplZFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVQZXJzb25hbGl6YXRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPlBlcnNvbmFsaXphdGlvbiBMYXN0IFVwZGF0ZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e3JlbGF0aXZlVGltZShsYXN0VXBkYXRlZCkgfHwgXCIobm8gZGF0YSlcIn08L3RkPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWluXCI+UGVyc29uYWxpemF0aW9uIEluaXRpYWxpemVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntpbml0aWFsaXplZCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvdGQ+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXNjb3ZlcnlTdHJlYW1BZG1pblVJIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVzdG9yZVByZWZEZWZhdWx0cyA9IHRoaXMucmVzdG9yZVByZWZEZWZhdWx0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0Q29uZmlnVmFsdWUgPSB0aGlzLnNldENvbmZpZ1ZhbHVlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5leHBpcmVDYWNoZSA9IHRoaXMuZXhwaXJlQ2FjaGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hDYWNoZSA9IHRoaXMucmVmcmVzaENhY2hlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93UGxhY2Vob2xkZXIgPSB0aGlzLnNob3dQbGFjZWhvbGRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaWRsZURhaWx5ID0gdGhpcy5pZGxlRGFpbHkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN5c3RlbVRpY2sgPSB0aGlzLnN5c3RlbVRpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnN5bmNSZW1vdGVTZXR0aW5ncyA9IHRoaXMuc3luY1JlbW90ZVNldHRpbmdzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN0b3J5VG9nZ2xlID0gdGhpcy5vblN0b3J5VG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVXZWF0aGVyU3VibWl0ID0gdGhpcy5oYW5kbGVXZWF0aGVyU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVXZWF0aGVyVXBkYXRlID0gdGhpcy5oYW5kbGVXZWF0aGVyVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZXNldEJsb2NrcyA9IHRoaXMucmVzZXRCbG9ja3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlZnJlc2hJbmZlcnJlZFBlcnNvbmFsaXphdGlvbiA9XG4gICAgICB0aGlzLnJlZnJlc2hJbmZlcnJlZFBlcnNvbmFsaXphdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVmcmVzaFRvcGljU2VsZWN0aW9uQ2FjaGUgPVxuICAgICAgdGhpcy5yZWZyZXNoVG9waWNTZWxlY3Rpb25DYWNoZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlVEJSRmVlZCA9IHRoaXMudG9nZ2xlVEJSRmVlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2VjdGlvbnNUb2dnbGUgPSB0aGlzLmhhbmRsZVNlY3Rpb25zVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVJQUJCYW5uZXJzID0gdGhpcy50b2dnbGVJQUJCYW5uZXJzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRvZ2dsZWRTdG9yaWVzOiB7fSxcbiAgICAgIHdlYXRoZXJRdWVyeTogXCJcIixcbiAgICB9O1xuICB9XG5cbiAgc2V0Q29uZmlnVmFsdWUoY29uZmlnTmFtZSwgY29uZmlnVmFsdWUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1NFVF9WQUxVRSxcbiAgICAgICAgZGF0YTogeyBuYW1lOiBjb25maWdOYW1lLCB2YWx1ZTogY29uZmlnVmFsdWUgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc3RvcmVQcmVmRGVmYXVsdHMoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5ESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19SRVNFVF9ERUZBVUxUUyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hDYWNoZSgpIHtcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5ESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19DSEFOR0UsXG4gICAgICAgIGRhdGE6IGNvbmZpZyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlZnJlc2hJbmZlcnJlZFBlcnNvbmFsaXphdGlvbigpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LklORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9SRUZSRVNILFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcmVmcmVzaFRvcGljU2VsZWN0aW9uQ2FjaGUoKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLlNldFByZWYoXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5kaXNwbGF5Q291bnRcIiwgMClcbiAgICApO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5TZXRQcmVmKFwiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcubWF5YmVEaXNwbGF5XCIsIHRydWUpXG4gICAgKTtcbiAgfVxuXG4gIGRpc3BhdGNoU2ltcGxlQWN0aW9uKHR5cGUpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgIHR5cGUsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNldEJsb2NrcygpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LkRJU0NPVkVSWV9TVFJFQU1fREVWX0JMT0NLU19SRVNFVCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHN5c3RlbVRpY2soKSB7XG4gICAgdGhpcy5kaXNwYXRjaFNpbXBsZUFjdGlvbihhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9TWVNURU1fVElDSyk7XG4gIH1cblxuICBleHBpcmVDYWNoZSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoU2ltcGxlQWN0aW9uKGF0LkRJU0NPVkVSWV9TVFJFQU1fREVWX0VYUElSRV9DQUNIRSk7XG4gIH1cblxuICBzaG93UGxhY2Vob2xkZXIoKSB7XG4gICAgdGhpcy5kaXNwYXRjaFNpbXBsZUFjdGlvbihhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9TSE9XX1BMQUNFSE9MREVSKTtcbiAgfVxuXG4gIHRvZ2dsZVRCUkZlZWQoZSkge1xuICAgIGNvbnN0IGZlZWQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBzZWxlY3RlZEZlZWQgPSBQUkVGX0NPTlRFWFRVQUxfQ09OVEVOVF9TRUxFQ1RFRF9GRUVEO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihzZWxlY3RlZEZlZWQsIGZlZWQpKTtcbiAgfVxuXG4gIGlkbGVEYWlseSgpIHtcbiAgICB0aGlzLmRpc3BhdGNoU2ltcGxlQWN0aW9uKGF0LkRJU0NPVkVSWV9TVFJFQU1fREVWX0lETEVfREFJTFkpO1xuICB9XG5cbiAgc3luY1JlbW90ZVNldHRpbmdzKCkge1xuICAgIHRoaXMuZGlzcGF0Y2hTaW1wbGVBY3Rpb24oYXQuRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lOQ19SUyk7XG4gIH1cblxuICBoYW5kbGVXZWF0aGVyVXBkYXRlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgd2VhdGhlclF1ZXJ5OiBlLnRhcmdldC52YWx1ZSB8fCBcIlwiIH0pO1xuICB9XG5cbiAgaGFuZGxlV2VhdGhlclN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgd2VhdGhlclF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihcIndlYXRoZXIucXVlcnlcIiwgd2VhdGhlclF1ZXJ5KSk7XG4gIH1cblxuICB0b2dnbGVJQUJCYW5uZXJzKGUpIHtcbiAgICBjb25zdCB7IHByZXNzZWQsIGlkIH0gPSBlLnRhcmdldDtcblxuICAgIC8vIFNldCB0aGUgYWN0aXZlIHByZWYgdG8gdHJ1ZS9mYWxzZVxuICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgIGNhc2UgXCJuZXd0YWJfYmlsbGJvYXJkXCI6XG4gICAgICAgIC8vIFVwZGF0ZSBib29sZWFuIHByZWYgZm9yIGJpbGxib2FyZCBhZCBzaXplXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX0FEX1NJWkVfQklMTEJPQVJELCBwcmVzc2VkKSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibmV3dGFiX2xlYWRlcmJvYXJkXCI6XG4gICAgICAgIC8vIFVwZGF0ZSBib29sZWFuIHByZWYgZm9yIGJpbGxib2FyZCBhZCBzaXplXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX0FEX1NJWkVfTEVBREVSQk9BUkQsIHByZXNzZWQpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJuZXd0YWJfcmVjdGFuZ2xlXCI6XG4gICAgICAgIC8vIFVwZGF0ZSBib29sZWFuIHByZWYgZm9yIG1lZGl1bVJlY3RhbmdsZSAoTVJFQykgYWQgc2l6ZVxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9BRF9TSVpFX01FRElVTV9SRUNUQU5HTEUsIHByZXNzZWQpKTtcblxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBOb3RlOiBUaGUgY291bnRzIGFycmF5IGlzIHBhc3NpdmVseSB1cGRhdGVkIHdoZW5ldmVyIHRoZSBwbGFjZW1lbnRzIGFycmF5IGlzIHVwZGF0ZWQuXG4gICAgLy8gVGhlIGRlZmF1bHQgcHJlZiB2YWx1ZXMgZm9yIGVhY2ggYXJlOlxuICAgIC8vIFBSRUZfU1BPQ19QTEFDRU1FTlRTOiBcIm5ld3RhYl9zcG9jc1wiXG4gICAgLy8gUFJFRl9TUE9DX0NPVU5UUzogXCI2XCJcbiAgICBjb25zdCBnZW5lcmF0ZVNwb2NQcmVmVmFsdWVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGxhY2VtZW50cyA9XG4gICAgICAgIHRoaXMucHJvcHMub3RoZXJQcmVmc1tQUkVGX1NQT0NfUExBQ0VNRU5UU10/LnNwbGl0KFwiLFwiKVxuICAgICAgICAgIC5tYXAoaXRlbSA9PiBpdGVtLnRyaW0oKSlcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSkgfHwgW107XG5cbiAgICAgIGNvbnN0IGNvdW50cyA9XG4gICAgICAgIHRoaXMucHJvcHMub3RoZXJQcmVmc1tQUkVGX1NQT0NfQ09VTlRTXT8uc3BsaXQoXCIsXCIpXG4gICAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0udHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtKSB8fCBbXTtcblxuICAgICAgLy8gQ29uZmlybSB0aGF0IHRoZSBJQUIgdHlwZSB3aWxsIGhhdmUgYSBjb3VudCB2YWx1ZSBvZiBcIjFcIlxuICAgICAgY29uc3Qgc3VwcG9ydElBQkFkVHlwZXMgPSBbXG4gICAgICAgIFwibmV3dGFiX2xlYWRlcmJvYXJkXCIsXG4gICAgICAgIFwibmV3dGFiX3JlY3RhbmdsZVwiLFxuICAgICAgICBcIm5ld3RhYl9iaWxsYm9hcmRcIixcbiAgICAgIF07XG4gICAgICBsZXQgY291bnRWYWx1ZTtcbiAgICAgIGlmIChzdXBwb3J0SUFCQWRUeXBlcy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgY291bnRWYWx1ZSA9IFwiMVwiOyAvLyBEZWZhdWx0IGNvdW50IHZhbHVlIGZvciBhbGwgSUFCIGFkIHR5cGVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJQUIgYWQgdHlwZSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJlc3NlZCkge1xuICAgICAgICAvLyBJZiBwcmVzc2VkIGlzIHRydWUsIGFkZCB0aGUgaWQgdG8gdGhlIHBsYWNlbWVudHMgYXJyYXlcbiAgICAgICAgaWYgKCFwbGFjZW1lbnRzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgIHBsYWNlbWVudHMucHVzaChpZCk7XG4gICAgICAgICAgY291bnRzLnB1c2goY291bnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHByZXNzZWQgaXMgZmFsc2UsIHJlbW92ZSB0aGUgaWQgZnJvbSB0aGUgcGxhY2VtZW50cyBhcnJheVxuICAgICAgICBjb25zdCBpbmRleCA9IHBsYWNlbWVudHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBwbGFjZW1lbnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgY291bnRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGxhY2VtZW50czogcGxhY2VtZW50cy5qb2luKFwiLCBcIiksXG4gICAgICAgIGNvdW50czogY291bnRzLmpvaW4oXCIsIFwiKSxcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGNvbnN0IHsgcGxhY2VtZW50cywgY291bnRzIH0gPSBnZW5lcmF0ZVNwb2NQcmVmVmFsdWVzKCk7XG5cbiAgICAvLyBVcGRhdGUgcHJlZnMgd2l0aCBuZXcgdmFsdWVzXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfU1BPQ19QTEFDRU1FTlRTLCBwbGFjZW1lbnRzKSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfU1BPQ19DT1VOVFMsIGNvdW50cykpO1xuXG4gICAgLy8gSWYgY29udGV4dHVhbCBhZHMsIHNlY3Rpb25zLCBhbmQgb25lIG9mIHRoZSBiYW5uZXJzIGFyZSBlbmFibGVkXG4gICAgLy8gdXBkYXRlIHRoZSBjb250ZXh0dWFsQmFubmVyIHByZWZzIHRvIGluY2x1ZGUgdGhlIGJhbm5lciB2YWx1ZSBhbmQgY291bnRcbiAgICAvLyBFbHNlLCBjbGVhciB0aGUgcHJlZnNcbiAgICBpZiAoUFJFRl9DT05URVhUVUFMX0FEU19FTkFCTEVEICYmIFBSRUZfU0VDVElPTlNfRU5BQkxFRCkge1xuICAgICAgaWYgKFBSRUZfQURfU0laRV9CSUxMQk9BUkQgJiYgcGxhY2VtZW50cy5pbmNsdWRlcyhcIm5ld3RhYl9iaWxsYm9hcmRcIikpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5TZXRQcmVmKFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfUExBQ0VNRU5UUywgXCJuZXd0YWJfYmlsbGJvYXJkXCIpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX0NPVU5UUywgXCIxXCIpKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIFBSRUZfQURfU0laRV9MRUFERVJCT0FSRCAmJlxuICAgICAgICBwbGFjZW1lbnRzLmluY2x1ZGVzKFwibmV3dGFiX2xlYWRlcmJvYXJkXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5TZXRQcmVmKFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfUExBQ0VNRU5UUywgXCJuZXd0YWJfbGVhZGVyYm9hcmRcIilcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfQ09VTlRTLCBcIjFcIikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5TZXRQcmVmKFBSRUZfQ09OVEVYVFVBTF9CQU5ORVJfUExBQ0VNRU5UUywgXCJcIikpO1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9DT05URVhUVUFMX0JBTk5FUl9DT1VOVFMsIFwiXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYW5kbGVTZWN0aW9uc1RvZ2dsZShlKSB7XG4gICAgY29uc3QgeyBwcmVzc2VkIH0gPSBlLnRhcmdldDtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlNldFByZWYoUFJFRl9TRUNUSU9OU19FTkFCTEVELCBwcmVzc2VkKSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLlNldFByZWYoXCJkaXNjb3ZlcnlzdHJlYW0uc2VjdGlvbnMuY2FyZHMuZW5hYmxlZFwiLCBwcmVzc2VkKVxuICAgICk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLlNldFByZWYoXCJkaXNjb3ZlcnlzdHJlYW0uc2VjdGlvbnMuY2FyZHMudGh1bWJzVXBEb3duLmVuYWJsZWRcIiwgcHJlc3NlZClcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29tcG9uZW50KHdpZHRoLCBjb21wb25lbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5UeXBlPC90ZD5cbiAgICAgICAgICAgIDx0ZD57Y29tcG9uZW50LnR5cGV9PC90ZD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPldpZHRoPC90ZD5cbiAgICAgICAgICAgIDx0ZD57d2lkdGh9PC90ZD5cbiAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICB7Y29tcG9uZW50LmZlZWQgJiYgdGhpcy5yZW5kZXJGZWVkKGNvbXBvbmVudC5mZWVkKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcldlYXRoZXJEYXRhKCkge1xuICAgIGNvbnN0IHsgc3VnZ2VzdGlvbnMgfSA9IHRoaXMucHJvcHMuc3RhdGUuV2VhdGhlcjtcbiAgICBsZXQgd2VhdGhlclRhYmxlO1xuICAgIGlmIChzdWdnZXN0aW9ucykge1xuICAgICAgd2VhdGhlclRhYmxlID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXItc2VjdGlvblwiPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVdlYXRoZXJTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ3ZWF0aGVyLXF1ZXJ5XCI+V2VhdGhlciBxdWVyeTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBtaW49XCIzXCJcbiAgICAgICAgICAgICAgbWF4PVwiMTBcIlxuICAgICAgICAgICAgICBpZD1cIndlYXRoZXItcXVlcnlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVXZWF0aGVyVXBkYXRlfVxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy53ZWF0aGVyUXVlcnl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcChzdWdnZXN0aW9uID0+IChcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwibWVzc2FnZS1pdGVtXCIga2V5PXtzdWdnZXN0aW9uLmNpdHlfbmFtZX0+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWVzc2FnZS1pZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7c3VnZ2VzdGlvbi5jaXR5X25hbWV9IDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1lc3NhZ2Utc3VtbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICA8cHJlPntKU09OLnN0cmluZ2lmeShzdWdnZXN0aW9uLCBudWxsLCAyKX08L3ByZT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHdlYXRoZXJUYWJsZTtcbiAgfVxuXG4gIHJlbmRlclBlcnNvbmFsaXphdGlvbkRhdGEoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaW5mZXJyZWRJbnRlcmVzdHMsXG4gICAgICBjb2Fyc2VJbmZlcnJlZEludGVyZXN0cyxcbiAgICAgIGNvYXJzZVByaXZhdGVJbmZlcnJlZEludGVyZXN0cyxcbiAgICB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5JbmZlcnJlZFBlcnNvbmFsaXphdGlvbjtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1wiIFwifVxuICAgICAgICBJbmZlcnJlZCBJbnRlcmVzdHM6XG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGluZmVycmVkSW50ZXJlc3RzLCBudWxsLCAyKX08L3ByZT4gQ29hcnNlIEluZmVycmVkXG4gICAgICAgIEludGVyZXN0czpcbiAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY29hcnNlSW5mZXJyZWRJbnRlcmVzdHMsIG51bGwsIDIpfTwvcHJlPiBDb2Fyc2VcbiAgICAgICAgSW5mZXJyZWQgSW50ZXJlc3RzIFdpdGggRGlmZmVyZW50aWFsIFByaXZhY3k6XG4gICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvYXJzZVByaXZhdGVJbmZlcnJlZEludGVyZXN0cywgbnVsbCwgMil9PC9wcmU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRmVlZERhdGEodXJsKSB7XG4gICAgY29uc3QgeyBmZWVkcyB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgY29uc3QgZmVlZCA9IGZlZWRzLmRhdGFbdXJsXS5kYXRhO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxoND5GZWVkIHVybDoge3VybH08L2g0PlxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2ZlZWQucmVjb21tZW5kYXRpb25zPy5tYXAoc3RvcnkgPT4gdGhpcy5yZW5kZXJTdG9yeURhdGEoc3RvcnkpKX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRmVlZHNEYXRhKCkge1xuICAgIGNvbnN0IHsgZmVlZHMgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtPYmplY3Qua2V5cyhmZWVkcy5kYXRhKS5tYXAodXJsID0+IHRoaXMucmVuZGVyRmVlZERhdGEodXJsKSl9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJJbXByZXNzaW9uc0RhdGEoKSB7XG4gICAgY29uc3QgeyBpbXByZXNzaW9ucyB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoND5GZWVkIEltcHJlc3Npb25zPC9oND5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhpbXByZXNzaW9ucy5mZWVkKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3JlbGF0aXZlVGltZShpbXByZXNzaW9ucy5mZWVkW2tleV0pIHx8IFwiKG5vIGRhdGEpXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQmxvY2tzRGF0YSgpIHtcbiAgICBjb25zdCB7IGJsb2NrcyB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoND5CbG9ja3M8L2g0PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMucmVzZXRCbG9ja3N9PlxuICAgICAgICAgIFJlc2V0IEJsb2Nrc1xuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoYmxvY2tzKS5tYXAoa2V5ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Um93IGtleT17a2V5fT5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj57a2V5fTwvdGQ+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNwb2NzKCkge1xuICAgIGNvbnN0IHsgc3BvY3MgfSA9IHRoaXMucHJvcHMuc3RhdGUuRGlzY292ZXJ5U3RyZWFtO1xuXG4gICAgY29uc3QgdW5pZmllZEFkc1Nwb2NzRW5hYmxlZCA9XG4gICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbXCJ1bmlmaWVkQWRzLnNwb2NzLmVuYWJsZWRcIl07XG5cbiAgICAvLyBEZXRlcm1pbmUgd2hpY2ggbWVjaGFuaXNtIGlzIHF1ZXJ5aW5nIHRoZSBVQVBJIGFkcyBzZXJ2ZXJcbiAgICBjb25zdCBQUkVGX1VOSUZJRURfQURTX0FEU0ZFRURfRU5BQkxFRCA9IFwidW5pZmllZEFkcy5hZHNGZWVkLmVuYWJsZWRcIjtcbiAgICBjb25zdCBhZHNGZWVkRW5hYmxlZCA9XG4gICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9VTklGSUVEX0FEU19BRFNGRUVEX0VOQUJMRURdO1xuXG4gICAgY29uc3QgdW5pZmllZEFkc0VuZHBvaW50ID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1widW5pZmllZEFkcy5lbmRwb2ludFwiXTtcblxuICAgIGxldCBzcG9jc0RhdGEgPSBbXTtcblxuICAgIGlmIChcbiAgICAgIHNwb2NzLmRhdGEgJiZcbiAgICAgIHNwb2NzLmRhdGEubmV3dGFiX3Nwb2NzICYmXG4gICAgICBzcG9jcy5kYXRhLm5ld3RhYl9zcG9jcy5pdGVtc1xuICAgICkge1xuICAgICAgc3BvY3NEYXRhID0gc3BvY3MuZGF0YS5uZXd0YWJfc3BvY3MuaXRlbXMgfHwgW107XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5hZHNmZWVkIGVuYWJsZWQ8L3RkPlxuICAgICAgICAgICAgICA8dGQ+e2Fkc0ZlZWRFbmFibGVkID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC90ZD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPnNwb2NzX2VuZHBvaW50PC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIHt1bmlmaWVkQWRzU3BvY3NFbmFibGVkXG4gICAgICAgICAgICAgICAgICA/IHVuaWZpZWRBZHNFbmRwb2ludFxuICAgICAgICAgICAgICAgICAgOiBzcG9jcy5zcG9jc19lbmRwb2ludH1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPkRhdGEgbGFzdCBmZXRjaGVkPC90ZD5cbiAgICAgICAgICAgICAgPHRkPntyZWxhdGl2ZVRpbWUoc3BvY3MubGFzdFVwZGF0ZWQpfTwvdGQ+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8aDQ+U3BvYyBkYXRhPC9oND5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT57c3BvY3NEYXRhLm1hcChzcG9jID0+IHRoaXMucmVuZGVyU3RvcnlEYXRhKHNwb2MpKX08L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8aDQ+U3BvYyBmcmVxdWVuY3kgY2FwczwvaDQ+XG4gICAgICAgIDx0YWJsZT5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7c3BvY3MuZnJlcXVlbmN5X2NhcHMubWFwKHNwb2MgPT4gdGhpcy5yZW5kZXJTdG9yeURhdGEoc3BvYykpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICBvblN0b3J5VG9nZ2xlKHN0b3J5KSB7XG4gICAgY29uc3QgeyB0b2dnbGVkU3RvcmllcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZ2dsZWRTdG9yaWVzOiB7XG4gICAgICAgIC4uLnRvZ2dsZWRTdG9yaWVzLFxuICAgICAgICBbc3RvcnkuaWRdOiAhdG9nZ2xlZFN0b3JpZXNbc3RvcnkuaWRdLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlclN0b3J5RGF0YShzdG9yeSkge1xuICAgIGxldCBzdG9yeURhdGEgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLnRvZ2dsZWRTdG9yaWVzW3N0b3J5LmlkXSkge1xuICAgICAgc3RvcnlEYXRhID0gSlNPTi5zdHJpbmdpZnkoc3RvcnksIG51bGwsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGNsYXNzTmFtZT1cIm1lc3NhZ2UtaXRlbVwiIGtleT17c3RvcnkuaWR9PlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWVzc2FnZS1pZFwiPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3N0b3J5LmlkfSA8YnIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPFRvZ2dsZVN0b3J5QnV0dG9uIHN0b3J5PXtzdG9yeX0gb25DbGljaz17dGhpcy5vblN0b3J5VG9nZ2xlfSAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwibWVzc2FnZS1zdW1tYXJ5XCI+XG4gICAgICAgICAgPHByZT57c3RvcnlEYXRhfTwvcHJlPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyRmVlZChmZWVkKSB7XG4gICAgY29uc3QgeyBmZWVkcyB9ID0gdGhpcy5wcm9wcy5zdGF0ZS5EaXNjb3ZlcnlTdHJlYW07XG4gICAgaWYgKCFmZWVkLnVybCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIm1pblwiPkZlZWQgdXJsPC90ZD5cbiAgICAgICAgICA8dGQ+e2ZlZWQudXJsfTwvdGQ+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJtaW5cIj5EYXRhIGxhc3QgZmV0Y2hlZDwvdGQ+XG4gICAgICAgICAgPHRkPlxuICAgICAgICAgICAge3JlbGF0aXZlVGltZShcbiAgICAgICAgICAgICAgZmVlZHMuZGF0YVtmZWVkLnVybF0gPyBmZWVkcy5kYXRhW2ZlZWQudXJsXS5sYXN0VXBkYXRlZCA6IG51bGxcbiAgICAgICAgICAgICkgfHwgXCIobm8gZGF0YSlcIn1cbiAgICAgICAgICA8L3RkPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBwcmVmVG9nZ2xlcyA9IFwiZW5hYmxlZCBjb2xsYXBzaWJsZVwiLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCB7IGNvbmZpZywgbGF5b3V0IH0gPSB0aGlzLnByb3BzLnN0YXRlLkRpc2NvdmVyeVN0cmVhbTtcbiAgICBjb25zdCBwZXJzb25hbGl6ZWQgPVxuICAgICAgdGhpcy5wcm9wcy5vdGhlclByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnBlcnNvbmFsaXphdGlvbi5lbmFibGVkXCJdO1xuICAgIGNvbnN0IHNlbGVjdGVkRmVlZCA9XG4gICAgICB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfU0VMRUNURURfRkVFRF07XG4gICAgY29uc3Qgc2VjdGlvbnNFbmFibGVkID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfU0VDVElPTlNfRU5BQkxFRF07XG4gICAgY29uc3QgVEJSRmVlZHMgPSB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfRkVFRFNdLnNwbGl0KFxuICAgICAgXCIsXCJcbiAgICApXG4gICAgICAubWFwKHMgPT4gcy50cmltKCkpXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbSk7XG5cbiAgICAvLyBQcmVmcyBmb3IgSUFCIEJhbm5lcnNcbiAgICBjb25zdCBtZWRpdW1SZWN0YW5nbGVFbmFibGVkID1cbiAgICAgIHRoaXMucHJvcHMub3RoZXJQcmVmc1tQUkVGX0FEX1NJWkVfTUVESVVNX1JFQ1RBTkdMRV07XG4gICAgY29uc3QgYmlsbGJvYXJkc0VuYWJsZWQgPSB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9BRF9TSVpFX0JJTExCT0FSRF07XG4gICAgY29uc3QgbGVhZGVyYm9hcmRFbmFibGVkID0gdGhpcy5wcm9wcy5vdGhlclByZWZzW1BSRUZfQURfU0laRV9MRUFERVJCT0FSRF07XG4gICAgY29uc3Qgc3BvY1BsYWNlbWVudHMgPSB0aGlzLnByb3BzLm90aGVyUHJlZnNbUFJFRl9TUE9DX1BMQUNFTUVOVFNdO1xuICAgIGNvbnN0IG1lZGl1bVJlY3RhbmdsZUVuYWJsZWRQcmVzc2VkID1cbiAgICAgIG1lZGl1bVJlY3RhbmdsZUVuYWJsZWQgJiYgc3BvY1BsYWNlbWVudHMuaW5jbHVkZXMoXCJuZXd0YWJfcmVjdGFuZ2xlXCIpO1xuICAgIGNvbnN0IGJpbGxib2FyZFByZXNzZWQgPVxuICAgICAgYmlsbGJvYXJkc0VuYWJsZWQgJiYgc3BvY1BsYWNlbWVudHMuaW5jbHVkZXMoXCJuZXd0YWJfYmlsbGJvYXJkXCIpO1xuICAgIGNvbnN0IGxlYWRlcmJvYXJkUHJlc3NlZCA9XG4gICAgICBsZWFkZXJib2FyZEVuYWJsZWQgJiYgc3BvY1BsYWNlbWVudHMuaW5jbHVkZXMoXCJuZXd0YWJfbGVhZGVyYm9hcmRcIik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnJlc3RvcmVQcmVmRGVmYXVsdHN9PlxuICAgICAgICAgIFJlc3RvcmUgUHJlZiBEZWZhdWx0c1xuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5yZWZyZXNoQ2FjaGV9PlxuICAgICAgICAgIFJlZnJlc2ggQ2FjaGVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZXhwaXJlQ2FjaGV9PlxuICAgICAgICAgIEV4cGlyZSBDYWNoZVxuICAgICAgICA8L2J1dHRvbj57XCIgXCJ9XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zeXN0ZW1UaWNrfT5cbiAgICAgICAgICBUcmlnZ2VyIFN5c3RlbSBUaWNrXG4gICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmlkbGVEYWlseX0+XG4gICAgICAgICAgVHJpZ2dlciBJZGxlIERhaWx5XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5yZWZyZXNoSW5mZXJyZWRQZXJzb25hbGl6YXRpb259XG4gICAgICAgID5cbiAgICAgICAgICBSZWZyZXNoIEluZmVycmVkIFBlcnNvbmFsaXphdGlvblxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zeW5jUmVtb3RlU2V0dGluZ3N9PlxuICAgICAgICAgIFN5bmMgUmVtb3RlIFNldHRpbmdzXG4gICAgICAgIDwvYnV0dG9uPntcIiBcIn1cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hUb3BpY1NlbGVjdGlvbkNhY2hlfT5cbiAgICAgICAgICBSZWZyZXNoIFRvcGljIHNlbGVjdGlvbiBjb3VudFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaG93UGxhY2Vob2xkZXJ9PlxuICAgICAgICAgIFNob3cgUGxhY2Vob2xkZXIgQ2FyZHNcbiAgICAgICAgPC9idXR0b24+e1wiIFwifVxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy50b2dnbGVUQlJGZWVkfVxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZEZlZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7VEJSRmVlZHMubWFwKGZlZWQgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2ZlZWR9IHZhbHVlPXtmZWVkfT5cbiAgICAgICAgICAgICAge2ZlZWR9XG4gICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgaWQ9XCJzZWN0aW9ucy10b2dnbGVcIlxuICAgICAgICAgICAgcHJlc3NlZD17c2VjdGlvbnNFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVTZWN0aW9uc1RvZ2dsZX1cbiAgICAgICAgICAgIGxhYmVsPVwiVG9nZ2xlIERTIFNlY3Rpb25zXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIENvbGxhcHNpYmxlIFNlY3Rpb25zIGZvciBleHBlcmltZW50cyBmb3IgZWFzeSBvbi9vZmYgKi99XG4gICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cImRldGFpbHMtc2VjdGlvblwiPlxuICAgICAgICAgIDxzdW1tYXJ5PklBQiBCYW5uZXIgQWQgU2l6ZXM8L3N1bW1hcnk+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgaWQ9XCJuZXd0YWJfbGVhZGVyYm9hcmRcIlxuICAgICAgICAgICAgICBwcmVzc2VkPXtsZWFkZXJib2FyZFByZXNzZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMudG9nZ2xlSUFCQmFubmVyc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgSUFCIExlYWRlcmJvYXJkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgaWQ9XCJuZXd0YWJfYmlsbGJvYXJkXCJcbiAgICAgICAgICAgICAgcHJlc3NlZD17YmlsbGJvYXJkUHJlc3NlZCB8fCBudWxsfVxuICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy50b2dnbGVJQUJCYW5uZXJzfVxuICAgICAgICAgICAgICBsYWJlbD1cIkVuYWJsZSBJQUIgQmlsbGJvYXJkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtd3JhcHBlclwiPlxuICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgaWQ9XCJuZXd0YWJfcmVjdGFuZ2xlXCJcbiAgICAgICAgICAgICAgcHJlc3NlZD17bWVkaXVtUmVjdGFuZ2xlRW5hYmxlZFByZXNzZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMudG9nZ2xlSUFCQmFubmVyc31cbiAgICAgICAgICAgICAgbGFiZWw9XCJFbmFibGUgSUFCIE1lZGl1bSBSZWN0YW5nbGUgKE1SRUMpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgPHRhYmxlPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtwcmVmVG9nZ2xlcy5tYXAocHJlZiA9PiAoXG4gICAgICAgICAgICAgIDxSb3cga2V5PXtwcmVmfT5cbiAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICA8VG9nZ2xlUHJlZkNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbmZpZ1twcmVmXX1cbiAgICAgICAgICAgICAgICAgICAgcHJlZj17cHJlZn1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2V0Q29uZmlnVmFsdWV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPGgzPkxheW91dDwvaDM+XG4gICAgICAgIHtsYXlvdXQubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2Byb3ctJHtyb3dJbmRleH1gfT5cbiAgICAgICAgICAgIHtyb3cuY29tcG9uZW50cy5tYXAoKGNvbXBvbmVudCwgY29tcG9uZW50SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Bjb21wb25lbnQtJHtjb21wb25lbnRJbmRleH1gfSBjbGFzc05hbWU9XCJkcy1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDb21wb25lbnQocm93LndpZHRoLCBjb21wb25lbnQpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPGgzPlBlcnNvbmFsaXphdGlvbjwvaDM+XG4gICAgICAgIDxQZXJzb25hbGl6YXRpb25cbiAgICAgICAgICBwZXJzb25hbGl6ZWQ9e3BlcnNvbmFsaXplZH1cbiAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICBzdGF0ZT17e1xuICAgICAgICAgICAgUGVyc29uYWxpemF0aW9uOiB0aGlzLnByb3BzLnN0YXRlLlBlcnNvbmFsaXphdGlvbixcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aDM+U3BvY3M8L2gzPlxuICAgICAgICB7dGhpcy5yZW5kZXJTcG9jcygpfVxuICAgICAgICA8aDM+RmVlZHMgRGF0YTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFyZ2UtZGF0YS1jb250YWluZXJcIj57dGhpcy5yZW5kZXJGZWVkc0RhdGEoKX08L2Rpdj5cbiAgICAgICAgPGgzPkltcHJlc3Npb25zIERhdGE8L2gzPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlLWRhdGEtY29udGFpbmVyXCI+XG4gICAgICAgICAge3RoaXMucmVuZGVySW1wcmVzc2lvbnNEYXRhKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDM+QmxvY2tlZCBEYXRhPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsYXJnZS1kYXRhLWNvbnRhaW5lclwiPnt0aGlzLnJlbmRlckJsb2Nrc0RhdGEoKX08L2Rpdj5cbiAgICAgICAgPGgzPldlYXRoZXIgRGF0YTwvaDM+XG4gICAgICAgIHt0aGlzLnJlbmRlcldlYXRoZXJEYXRhKCl9XG4gICAgICAgIDxoMz5QZXJzb25hbGl6YXRpb24gRGF0YTwvaDM+XG4gICAgICAgIHt0aGlzLnJlbmRlclBlcnNvbmFsaXphdGlvbkRhdGEoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpc2NvdmVyeVN0cmVhbUFkbWluSW5uZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zZXRTdGF0ZSA9IHRoaXMuc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BkaXNjb3ZlcnlzdHJlYW0tYWRtaW4gJHtcbiAgICAgICAgICB0aGlzLnByb3BzLmNvbGxhcHNlZCA/IFwiY29sbGFwc2VkXCIgOiBcImV4cGFuZGVkXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW4tcGFuZWxcIj5cbiAgICAgICAgICA8aDE+RGlzY292ZXJ5IFN0cmVhbSBBZG1pbjwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWxwTGlua1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNtYWxsLXNwYWNlciBpY29uLWluZm9cIiAvPntcIiBcIn1cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICBOZWVkIHRvIGFjY2VzcyB0aGUgQVNSb3V0ZXIgQWRtaW4gZGV2IHRvb2xzP3tcIiBcIn1cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwiYWJvdXQ6YXNyb3V0ZXJcIj5cbiAgICAgICAgICAgICAgICBDbGljayBoZXJlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8RGlzY292ZXJ5U3RyZWFtQWRtaW5VSVxuICAgICAgICAgICAgICBzdGF0ZT17e1xuICAgICAgICAgICAgICAgIERpc2NvdmVyeVN0cmVhbTogdGhpcy5wcm9wcy5EaXNjb3ZlcnlTdHJlYW0sXG4gICAgICAgICAgICAgICAgUGVyc29uYWxpemF0aW9uOiB0aGlzLnByb3BzLlBlcnNvbmFsaXphdGlvbixcbiAgICAgICAgICAgICAgICBXZWF0aGVyOiB0aGlzLnByb3BzLldlYXRoZXIsXG4gICAgICAgICAgICAgICAgSW5mZXJyZWRQZXJzb25hbGl6YXRpb246IHRoaXMucHJvcHMuSW5mZXJyZWRQZXJzb25hbGl6YXRpb24sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIG90aGVyUHJlZnM9e3RoaXMucHJvcHMuUHJlZnMudmFsdWVzfVxuICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VUb2dnbGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5vbkNvbGxhcHNlVG9nZ2xlID0gdGhpcy5vbkNvbGxhcHNlVG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgY29sbGFwc2VkOiBmYWxzZSB9O1xuICB9XG5cbiAgZ2V0IHJlbmRlckFkbWluKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgcmV0dXJuIHByb3BzLmxvY2F0aW9uLmhhc2ggJiYgcHJvcHMubG9jYXRpb24uaGFzaC5zdGFydHNXaXRoKFwiI2RldnRvb2xzXCIpO1xuICB9XG5cbiAgb25Db2xsYXBzZVRvZ2dsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgY29sbGFwc2VkOiAhc3RhdGUuY29sbGFwc2VkIH0pKTtcbiAgfVxuXG4gIHNldEJvZHlDbGFzcygpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJBZG1pbiAmJiAhdGhpcy5zdGF0ZS5jb2xsYXBzZWQpIHtcbiAgICAgIGdsb2JhbFRoaXMuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibm8tc2Nyb2xsXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldEJvZHlDbGFzcygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc2V0Qm9keUNsYXNzKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBnbG9iYWxUaGlzLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcIm5vLXNjcm9sbFwiKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgcmVuZGVyQWRtaW4gfSA9IHRoaXM7XG4gICAgY29uc3QgaXNDb2xsYXBzZWQgPSB0aGlzLnN0YXRlLmNvbGxhcHNlZCB8fCAhcmVuZGVyQWRtaW47XG4gICAgY29uc3QgbGFiZWwgPSBgJHtpc0NvbGxhcHNlZCA/IFwiRXhwYW5kXCIgOiBcIkNvbGxhcHNlXCJ9IGRldnRvb2xzYDtcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCIjZGV2dG9vbHNcIlxuICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICBhcmlhLWxhYmVsPXtsYWJlbH1cbiAgICAgICAgICBjbGFzc05hbWU9e2BkaXNjb3ZlcnlzdHJlYW0tYWRtaW4tdG9nZ2xlICR7XG4gICAgICAgICAgICBpc0NvbGxhcHNlZCA/IFwiY29sbGFwc2VkXCIgOiBcImV4cGFuZGVkXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlbmRlckFkbWluID8gdGhpcy5vbkNvbGxhcHNlVG9nZ2xlIDogbnVsbH1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gaWNvbi1kZXZ0b29sc1wiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICAge3JlbmRlckFkbWluID8gKFxuICAgICAgICAgIDxEaXNjb3ZlcnlTdHJlYW1BZG1pbklubmVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjb2xsYXBzZWQ9e3RoaXMuc3RhdGUuY29sbGFwc2VkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IF9EaXNjb3ZlcnlTdHJlYW1BZG1pbiA9IHByb3BzID0+IChcbiAgPFNpbXBsZUhhc2hSb3V0ZXI+XG4gICAgPENvbGxhcHNlVG9nZ2xlIHsuLi5wcm9wc30gLz5cbiAgPC9TaW1wbGVIYXNoUm91dGVyPlxuKTtcblxuZXhwb3J0IGNvbnN0IERpc2NvdmVyeVN0cmVhbUFkbWluID0gY29ubmVjdChzdGF0ZSA9PiAoe1xuICBTZWN0aW9uczogc3RhdGUuU2VjdGlvbnMsXG4gIERpc2NvdmVyeVN0cmVhbTogc3RhdGUuRGlzY292ZXJ5U3RyZWFtLFxuICBQZXJzb25hbGl6YXRpb246IHN0YXRlLlBlcnNvbmFsaXphdGlvbixcbiAgSW5mZXJyZWRQZXJzb25hbGl6YXRpb246IHN0YXRlLkluZmVycmVkUGVyc29uYWxpemF0aW9uLFxuICBQcmVmczogc3RhdGUuUHJlZnMsXG4gIFdlYXRoZXI6IHN0YXRlLldlYXRoZXIsXG59KSkoX0Rpc2NvdmVyeVN0cmVhbUFkbWluKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyoqXG4gKiBDb25maXJtRGlhbG9nIGNvbXBvbmVudC5cbiAqIE9uZSBwcmltYXJ5IGFjdGlvbiBidXR0b24sIG9uZSBjYW5jZWwgYnV0dG9uLlxuICpcbiAqIENvbnRlbnQgZGlzcGxheWVkIGlzIGNvbnRyb2xsZWQgYnkgYGRhdGFgIHByb3AgdGhlIGNvbXBvbmVudCByZWNlaXZlcy5cbiAqIEV4YW1wbGU6XG4gKiBkYXRhOiB7XG4gKiAgIC8vIEFueSBzb3J0IG9mIGRhdGEgbmVlZGVkIHRvIGJlIHBhc3NlZCBhcm91bmQgYnkgYWN0aW9ucy5cbiAqICAgcGF5bG9hZDogc2l0ZS51cmwsXG4gKiAgIC8vIFByaW1hcnkgYnV0dG9uIEFsc29Ub01haW4gYWN0aW9uLlxuICogICBhY3Rpb246IFwiREVMRVRFX0hJU1RPUllfVVJMXCIsXG4gKiAgIC8vIFByaW1hcnkgYnV0dG9uIFVTZXJFdmVudCBhY3Rpb24uXG4gKiAgIHVzZXJFdmVudDogXCJERUxFVEVcIixcbiAqICAgLy8gQXJyYXkgb2YgbG9jYWxlIGlkcyB0byBkaXNwbGF5LlxuICogICBtZXNzYWdlX2JvZHk6IFtcImNvbmZpcm1faGlzdG9yeV9kZWxldGVfcDFcIiwgXCJjb25maXJtX2hpc3RvcnlfZGVsZXRlX25vdGljZV9wMlwiXSxcbiAqICAgLy8gVGV4dCBmb3IgcHJpbWFyeSBidXR0b24uXG4gKiAgIGNvbmZpcm1fYnV0dG9uX3N0cmluZ19pZDogXCJtZW51X2FjdGlvbl9kZWxldGVcIlxuICogfSxcbiAqL1xuZXhwb3J0IGNsYXNzIF9Db25maXJtRGlhbG9nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2hhbmRsZUNhbmNlbEJ0biA9IHRoaXMuX2hhbmRsZUNhbmNlbEJ0bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNvbmZpcm1CdG4gPSB0aGlzLl9oYW5kbGVDb25maXJtQnRuLmJpbmQodGhpcyk7XG4gIH1cblxuICBfaGFuZGxlQ2FuY2VsQnRuKCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiBhY3Rpb25UeXBlcy5ESUFMT0dfQ0FOQ0VMIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5Vc2VyRXZlbnQoe1xuICAgICAgICBldmVudDogYWN0aW9uVHlwZXMuRElBTE9HX0NBTkNFTCxcbiAgICAgICAgc291cmNlOiB0aGlzLnByb3BzLmRhdGEuZXZlbnRTb3VyY2UsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBfaGFuZGxlQ29uZmlybUJ0bigpIHtcbiAgICB0aGlzLnByb3BzLmRhdGEub25Db25maXJtLmZvckVhY2godGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gIH1cblxuICBfcmVuZGVyTW9kYWxNZXNzYWdlKCkge1xuICAgIGNvbnN0IG1lc3NhZ2VfYm9keSA9IHRoaXMucHJvcHMuZGF0YS5ib2R5X3N0cmluZ19pZDtcblxuICAgIGlmICghbWVzc2FnZV9ib2R5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIHttZXNzYWdlX2JvZHkubWFwKG1zZyA9PiAoXG4gICAgICAgICAgPHAga2V5PXttc2d9IGRhdGEtbDEwbi1pZD17bXNnfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25maXJtYXRpb24tZGlhbG9nXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDYW5jZWxCdG59XG4gICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtb2RhbC1tZXNzYWdlXCI+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmljb24gJiYgKFxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi1zcGFjZXIgaWNvbi0ke3RoaXMucHJvcHMuZGF0YS5pY29ufWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3RoaXMuX3JlbmRlck1vZGFsTWVzc2FnZSgpfVxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNhbmNlbEJ0bn1cbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXt0aGlzLnByb3BzLmRhdGEuY2FuY2VsX2J1dHRvbl9zdHJpbmdfaWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb25lXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5faGFuZGxlQ29uZmlybUJ0bn1cbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXt0aGlzLnByb3BzLmRhdGEuY29uZmlybV9idXR0b25fc3RyaW5nX2lkfVxuICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz17SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kYXRhLmNvbmZpcm1fYnV0dG9uX3N0cmluZ19hcmdzXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBDb25maXJtRGlhbG9nID0gY29ubmVjdChzdGF0ZSA9PiBzdGF0ZS5EaWFsb2cpKF9Db25maXJtRGlhbG9nKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEExMXlMaW5rQnV0dG9uKHByb3BzKSB7XG4gIC8vIGZ1bmN0aW9uIGZvciBtZXJnaW5nIGNsYXNzZXMsIGlmIG5lY2Vzc2FyeVxuICBsZXQgY2xhc3NOYW1lID0gXCJhMTF5LWxpbmstYnV0dG9uXCI7XG4gIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICBjbGFzc05hbWUgKz0gYCAke3Byb3BzLmNsYXNzTmFtZX1gO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgey4uLnByb3BzfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBBMTF5TGlua0J1dHRvbiB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0ExMXlMaW5rQnV0dG9uL0ExMXlMaW5rQnV0dG9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBFcnJvckJvdW5kYXJ5RmFsbGJhY2sgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy53aW5kb3dPYmogPSB0aGlzLnByb3BzLndpbmRvd09iaiB8fCB3aW5kb3c7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICAvKipcbiAgICogU2luY2Ugd2Ugb25seSBnZXQgaGVyZSBpZiBwYXJ0IG9mIHRoZSBwYWdlIGhhcyBjcmFzaGVkLCBkbyBhXG4gICAqIGZvcmNlZCByZWxvYWQgdG8gZ2l2ZSB1cyB0aGUgYmVzdCBjaGFuY2UgYXQgcmVjb3ZlcmluZy5cbiAgICovXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy53aW5kb3dPYmoubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRlZmF1bHRDbGFzcyA9IFwiYXMtZXJyb3ItZmFsbGJhY2tcIjtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChcImNsYXNzTmFtZVwiIGluIHRoaXMucHJvcHMpIHtcbiAgICAgIGNsYXNzTmFtZSA9IGAke3RoaXMucHJvcHMuY2xhc3NOYW1lfSAke2RlZmF1bHRDbGFzc31gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbGFzc05hbWUgPSBkZWZhdWx0Q2xhc3M7XG4gICAgfVxuXG4gICAgLy8gXCJBMTF5TGlua0J1dHRvblwiIHRvIGZvcmNlIG5vcm1hbCBsaW5rIHN0eWxpbmcgc3R1ZmYgKGVnIGN1cnNvciBvbiBob3ZlcilcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxkaXYgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWVycm9yLWZhbGxiYWNrLWluZm9cIiAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICA8QTExeUxpbmtCdXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbG9hZC1idXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5vbkNsaWNrfVxuICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWVycm9yLWZhbGxiYWNrLXJlZnJlc2gtbGlua1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuRXJyb3JCb3VuZGFyeUZhbGxiYWNrLmRlZmF1bHRQcm9wcyA9IHsgY2xhc3NOYW1lOiBcImFzLWVycm9yLWZhbGxiYWNrXCIgfTtcblxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IHRydWUgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9XG5cbiAgICByZXR1cm4gPHRoaXMucHJvcHMuRmFsbGJhY2tDb21wb25lbnQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gLz47XG4gIH1cbn1cblxuRXJyb3JCb3VuZGFyeS5kZWZhdWx0UHJvcHMgPSB7IEZhbGxiYWNrQ29tcG9uZW50OiBFcnJvckJvdW5kYXJ5RmFsbGJhY2sgfTtcbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBSZWFjdFRyYW5zaXRpb25Hcm91cDsiLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwXCI7XG5cbmZ1bmN0aW9uIFNlY3Rpb25zTWdtdFBhbmVsKHsgZXhpdEV2ZW50RmlyZWQgfSkge1xuICBjb25zdCBbc2hvd1BhbmVsLCBzZXRTaG93UGFuZWxdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBTdGF0ZSBtYW5hZ2VtZW50IHdpdGggdXNlU3RhdGVcbiAgY29uc3QgeyBzZWN0aW9uUGVyc29uYWxpemF0aW9uIH0gPSB1c2VTZWxlY3RvcihcbiAgICBzdGF0ZSA9PiBzdGF0ZS5EaXNjb3ZlcnlTdHJlYW1cbiAgKTtcbiAgY29uc3QgbGF5b3V0Q29tcG9uZW50cyA9IHVzZVNlbGVjdG9yKFxuICAgIHN0YXRlID0+IHN0YXRlLkRpc2NvdmVyeVN0cmVhbS5sYXlvdXRbMF0uY29tcG9uZW50c1xuICApO1xuICBjb25zdCBzZWN0aW9ucyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLkRpc2NvdmVyeVN0cmVhbS5mZWVkcy5kYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIC8vIFRPRE86IFdyYXAgc2VjdGlvbnNGZWVkTmFtZSAtPiBzZWN0aW9uc0xpc3QgbG9naWMgaW4gdHJ5Li4uY2F0Y2g/XG4gIGxldCBzZWN0aW9uc0ZlZWROYW1lO1xuXG4gIGNvbnN0IGNhcmRHcmlkRW50cnkgPSBsYXlvdXRDb21wb25lbnRzLmZpbmQoaXRlbSA9PiBpdGVtLnR5cGUgPT09IFwiQ2FyZEdyaWRcIik7XG5cbiAgaWYgKGNhcmRHcmlkRW50cnkpIHtcbiAgICBzZWN0aW9uc0ZlZWROYW1lID0gY2FyZEdyaWRFbnRyeS5mZWVkLnVybDtcbiAgfVxuXG4gIGxldCBzZWN0aW9uc0xpc3Q7XG5cbiAgaWYgKHNlY3Rpb25zRmVlZE5hbWUpIHtcbiAgICBzZWN0aW9uc0xpc3QgPSBzZWN0aW9uc1tzZWN0aW9uc0ZlZWROYW1lXS5kYXRhLnNlY3Rpb25zO1xuICB9XG5cbiAgY29uc3QgW3NlY3Rpb25zU3RhdGUsIHNldFNlY3Rpb25TdGF0ZV0gPSB1c2VTdGF0ZShzZWN0aW9uUGVyc29uYWxpemF0aW9uKTsgLy8gU3RhdGUgbWFuYWdlbWVudCB3aXRoIHVzZVN0YXRlXG5cbiAgbGV0IGZvbGxvd2VkU2VjdGlvbnNEYXRhID0gc2VjdGlvbnNMaXN0LmZpbHRlcihcbiAgICBpdGVtID0+IHNlY3Rpb25zU3RhdGVbaXRlbS5zZWN0aW9uS2V5XT8uaXNGb2xsb3dlZFxuICApO1xuXG4gIGxldCBibG9ja2VkU2VjdGlvbnNEYXRhID0gc2VjdGlvbnNMaXN0LmZpbHRlcihcbiAgICBpdGVtID0+IHNlY3Rpb25zU3RhdGVbaXRlbS5zZWN0aW9uS2V5XT8uaXNCbG9ja2VkXG4gICk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlQ2FjaGVkRGF0YSgpIHtcbiAgICAvLyBSZXNldCBjYWNoZWQgZm9sbG93ZWQvYmxvY2tlZCBsaXN0IGRhdGEgd2hpbGUgcGFuZWwgaXMgb3BlblxuICAgIHNldFNlY3Rpb25TdGF0ZShzZWN0aW9uUGVyc29uYWxpemF0aW9uKTtcblxuICAgIGZvbGxvd2VkU2VjdGlvbnNEYXRhID0gc2VjdGlvbnNMaXN0LmZpbHRlcihcbiAgICAgIGl0ZW0gPT4gc2VjdGlvbnNTdGF0ZVtpdGVtLnNlY3Rpb25LZXldPy5pc0ZvbGxvd2VkXG4gICAgKTtcblxuICAgIGJsb2NrZWRTZWN0aW9uc0RhdGEgPSBzZWN0aW9uc0xpc3QuZmlsdGVyKFxuICAgICAgaXRlbSA9PiBzZWN0aW9uc1N0YXRlW2l0ZW0uc2VjdGlvbktleV0/LmlzQmxvY2tlZFxuICAgICk7XG4gIH1cblxuICBjb25zdCBvbkZvbGxvd0NsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlY3Rpb25LZXksIHJlY2VpdmVkUmFuaykgPT4ge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVCxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAuLi5zZWN0aW9uUGVyc29uYWxpemF0aW9uLFxuICAgICAgICAgICAgW3NlY3Rpb25LZXldOiB7XG4gICAgICAgICAgICAgIGlzRm9sbG93ZWQ6IHRydWUsXG4gICAgICAgICAgICAgIGlzQmxvY2tlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGZvbGxvd2VkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICAvLyBUZWxlbWV0cnkgRXZlbnQgRGlzcGF0Y2hcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBcIkZPTExPV19TRUNUSU9OXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbktleSxcbiAgICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHJlY2VpdmVkUmFuayxcbiAgICAgICAgICAgIGV2ZW50X3NvdXJjZTogXCJDVVNUT01JWkVfUEFORUxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaCwgc2VjdGlvblBlcnNvbmFsaXphdGlvbl1cbiAgKTtcblxuICBjb25zdCBvbkJsb2NrQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKSA9PiB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuU0VDVElPTl9QRVJTT05BTElaQVRJT05fU0VULFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLnNlY3Rpb25QZXJzb25hbGl6YXRpb24sXG4gICAgICAgICAgICBbc2VjdGlvbktleV06IHtcbiAgICAgICAgICAgICAgaXNGb2xsb3dlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGlzQmxvY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIC8vIFRlbGVtZXRyeSBFdmVudCBEaXNwYXRjaFxuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgIHR5cGU6IFwiQkxPQ0tfU0VDVElPTlwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb25LZXksXG4gICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiByZWNlaXZlZFJhbmssXG4gICAgICAgICAgICBldmVudF9zb3VyY2U6IFwiQ1VTVE9NSVpFX1BBTkVMXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIHNlY3Rpb25QZXJzb25hbGl6YXRpb25dXG4gICk7XG5cbiAgY29uc3Qgb25VbmJsb2NrQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICAoc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVkU2VjdGlvbkRhdGEgPSB7IC4uLnNlY3Rpb25QZXJzb25hbGl6YXRpb24gfTtcbiAgICAgIGRlbGV0ZSB1cGRhdGVkU2VjdGlvbkRhdGFbc2VjdGlvbktleV07XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuU0VDVElPTl9QRVJTT05BTElaQVRJT05fU0VULFxuICAgICAgICAgIGRhdGE6IHVwZGF0ZWRTZWN0aW9uRGF0YSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgICAvLyBUZWxlbWV0cnkgRXZlbnQgRGlzcGF0Y2hcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBcIlVOQkxPQ0tfU0VDVElPTlwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHNlY3Rpb246IHNlY3Rpb25LZXksXG4gICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiByZWNlaXZlZFJhbmssXG4gICAgICAgICAgICBldmVudF9zb3VyY2U6IFwiQ1VTVE9NSVpFX1BBTkVMXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSxcbiAgICBbZGlzcGF0Y2gsIHNlY3Rpb25QZXJzb25hbGl6YXRpb25dXG4gICk7XG5cbiAgY29uc3Qgb25VbmZvbGxvd0NsaWNrID0gdXNlQ2FsbGJhY2soXG4gICAgKHNlY3Rpb25LZXksIHJlY2VpdmVkUmFuaykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZFNlY3Rpb25EYXRhID0geyAuLi5zZWN0aW9uUGVyc29uYWxpemF0aW9uIH07XG4gICAgICBkZWxldGUgdXBkYXRlZFNlY3Rpb25EYXRhW3NlY3Rpb25LZXldO1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LlNFQ1RJT05fUEVSU09OQUxJWkFUSU9OX1NFVCxcbiAgICAgICAgICBkYXRhOiB1cGRhdGVkU2VjdGlvbkRhdGEsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgICAgLy8gVGVsZW1ldHJ5IEV2ZW50IERpc3BhdGNoXG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgdHlwZTogXCJVTkZPTExPV19TRUNUSU9OXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgc2VjdGlvbjogc2VjdGlvbktleSxcbiAgICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHJlY2VpdmVkUmFuayxcbiAgICAgICAgICAgIGV2ZW50X3NvdXJjZTogXCJDVVNUT01JWkVfUEFORUxcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaCwgc2VjdGlvblBlcnNvbmFsaXphdGlvbl1cbiAgKTtcblxuICAvLyBDbG9zZSBmb2xsb3dlZC9ibG9ja2VkIHRvcGljIHN1YnBhbmVsIHdoZW4gcGFyZW50IG1lbnUgaXMgY2xvc2VkXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGV4aXRFdmVudEZpcmVkKSB7XG4gICAgICBzZXRTaG93UGFuZWwoZmFsc2UpO1xuICAgIH1cbiAgfSwgW2V4aXRFdmVudEZpcmVkXSk7XG5cbiAgY29uc3QgdG9nZ2xlUGFuZWwgPSAoKSA9PiB7XG4gICAgc2V0U2hvd1BhbmVsKHByZXZTaG93UGFuZWwgPT4gIXByZXZTaG93UGFuZWwpO1xuXG4gICAgLy8gRmlyZSB3aGVuIHRoZSBwYW5lbCBpcyBvcGVuXG4gICAgaWYgKCFzaG93UGFuZWwpIHtcbiAgICAgIHVwZGF0ZUNhY2hlZERhdGEoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZm9sbG93ZWRTZWN0aW9uc0xpc3QgPSBmb2xsb3dlZFNlY3Rpb25zRGF0YS5tYXAoXG4gICAgKHsgc2VjdGlvbktleSwgdGl0bGUsIHJlY2VpdmVkUmFuayB9KSA9PiB7XG4gICAgICBjb25zdCBmb2xsb3dpbmcgPSBzZWN0aW9uUGVyc29uYWxpemF0aW9uW3NlY3Rpb25LZXldPy5pc0ZvbGxvd2VkO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtzZWN0aW9uS2V5fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGZvbGxvdy10b3BpYy0ke3NlY3Rpb25LZXl9YH0+e3RpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgZm9sbG93aW5nID8gXCJzZWN0aW9uLWZvbGxvdyBmb2xsb3dpbmdcIiA6IFwic2VjdGlvbi1mb2xsb3dcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxtb3otYnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgZm9sbG93aW5nXG4gICAgICAgICAgICAgICAgICA/IG9uVW5mb2xsb3dDbGljayhzZWN0aW9uS2V5LCByZWNlaXZlZFJhbmspXG4gICAgICAgICAgICAgICAgICA6IG9uRm9sbG93Q2xpY2soc2VjdGlvbktleSwgcmVjZWl2ZWRSYW5rKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGU9e1wiZGVmYXVsdFwifVxuICAgICAgICAgICAgICBpbmRleD17cmVjZWl2ZWRSYW5rfVxuICAgICAgICAgICAgICBzZWN0aW9uPXtzZWN0aW9uS2V5fVxuICAgICAgICAgICAgICBpZD17YGZvbGxvdy10b3BpYy0ke3NlY3Rpb25LZXl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLWJ1dHRvbi1mb2xsb3ctdGV4dFwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tZm9sbG93LWJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1idXR0b24tZm9sbG93aW5nLXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLWZvbGxvd2luZy1idXR0b25cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlY3Rpb24tYnV0dG9uLXVuZm9sbG93LXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLXVuZm9sbG93LWJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L21vei1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICApO1xuICAgIH1cbiAgKTtcblxuICBjb25zdCBibG9ja2VkU2VjdGlvbnNMaXN0ID0gYmxvY2tlZFNlY3Rpb25zRGF0YS5tYXAoXG4gICAgKHsgc2VjdGlvbktleSwgdGl0bGUsIHJlY2VpdmVkUmFuayB9KSA9PiB7XG4gICAgICBjb25zdCBibG9ja2VkID0gc2VjdGlvblBlcnNvbmFsaXphdGlvbltzZWN0aW9uS2V5XT8uaXNCbG9ja2VkO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtzZWN0aW9uS2V5fT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17YGJsb2NrZWQtdG9waWMtJHtzZWN0aW9uS2V5fWB9Pnt0aXRsZX08L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtibG9ja2VkID8gXCJzZWN0aW9uLWJsb2NrIGJsb2NrZWRcIiA6IFwic2VjdGlvbi1ibG9ja1wifT5cbiAgICAgICAgICAgIDxtb3otYnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgYmxvY2tlZFxuICAgICAgICAgICAgICAgICAgPyBvblVuYmxvY2tDbGljayhzZWN0aW9uS2V5LCByZWNlaXZlZFJhbmspXG4gICAgICAgICAgICAgICAgICA6IG9uQmxvY2tDbGljayhzZWN0aW9uS2V5LCByZWNlaXZlZFJhbmspXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgICBpbmRleD17cmVjZWl2ZWRSYW5rfVxuICAgICAgICAgICAgICBzZWN0aW9uPXtzZWN0aW9uS2V5fVxuICAgICAgICAgICAgICBpZD17YGJsb2NrZWQtdG9waWMtJHtzZWN0aW9uS2V5fWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VjdGlvbi1idXR0b24tYmxvY2stdGV4dFwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tYmxvY2stYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLWJ1dHRvbi1ibG9ja2VkLXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLWJsb2NrZWQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWN0aW9uLWJ1dHRvbi11bmJsb2NrLXRleHRcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLXVuYmxvY2stYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbW96LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxtb3otYm94LWJ1dHRvblxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYW5lbH1cbiAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tbWFuYWdlLXRvcGljcy1idXR0b24tdjJcIlxuICAgICAgPjwvbW96LWJveC1idXR0b24+XG4gICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICBpbj17c2hvd1BhbmVsfVxuICAgICAgICB0aW1lb3V0PXszMDB9XG4gICAgICAgIGNsYXNzTmFtZXM9XCJzZWN0aW9ucy1tZ210LXBhbmVsXCJcbiAgICAgICAgdW5tb3VudE9uRXhpdD17dHJ1ZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9ucy1tZ210LXBhbmVsXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhcnJvdy1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVQYW5lbH0+XG4gICAgICAgICAgICA8aDEgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tbWFuZ2FnZS10b3BpY3MtdGl0bGVcIj48L2gxPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxoMyBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VjdGlvbi1tYW5nYWdlLXRvcGljcy1mb2xsb3dlZC10b3BpY3NcIj48L2gzPlxuICAgICAgICAgIHtmb2xsb3dlZFNlY3Rpb25zRGF0YS5sZW5ndGggPyAoXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidG9waWMtbGlzdFwiPntmb2xsb3dlZFNlY3Rpb25zTGlzdH08L3VsPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3BpYy1saXN0LWVtcHR5LXN0YXRlXCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tbWFuZ2FnZS10b3BpY3MtZm9sbG93ZWQtdG9waWNzLWVtcHR5LXN0YXRlXCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8aDMgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlY3Rpb24tbWFuZ2FnZS10b3BpY3MtYmxvY2tlZC10b3BpY3NcIj48L2gzPlxuICAgICAgICAgIHtibG9ja2VkU2VjdGlvbnNEYXRhLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0b3BpYy1saXN0XCI+e2Jsb2NrZWRTZWN0aW9uc0xpc3R9PC91bD5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9waWMtbGlzdC1lbXB0eS1zdGF0ZVwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZWN0aW9uLW1hbmdhZ2UtdG9waWNzLWJsb2NrZWQtdG9waWNzLWVtcHR5LXN0YXRlXCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCB7IFNlY3Rpb25zTWdtdFBhbmVsIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcblxuY29uc3QgUFJFRl9XQUxMUEFQRVJfVVBMT0FERURfUFJFVklPVVNMWSA9XG4gIFwibmV3dGFiV2FsbHBhcGVycy5jdXN0b21XYWxscGFwZXIudXBsb2FkZWRQcmV2aW91c2x5XCI7XG5cbmNvbnN0IFBSRUZfV0FMTFBBUEVSX1VQTE9BRF9NQVhfRklMRV9TSVpFID1cbiAgXCJuZXd0YWJXYWxscGFwZXJzLmN1c3RvbVdhbGxwYXBlci5maWxlU2l6ZVwiO1xuXG5jb25zdCBQUkVGX1dBTExQQVBFUl9VUExPQURfTUFYX0ZJTEVfU0laRV9FTkFCTEVEID1cbiAgXCJuZXd0YWJXYWxscGFwZXJzLmN1c3RvbVdhbGxwYXBlci5maWxlU2l6ZS5lbmFibGVkXCI7XG5cbi8vIFJldHVybnMgYSBmdW5jdGlvbiB3aWxsIG5vdCBiZSBjb250aW51b3VzbHkgdHJpZ2dlcmVkIHdoZW4gY2FsbGVkLiBUaGVcbi8vIGZ1bmN0aW9uIHdpbGwgYmUgdHJpZ2dlcmVkIGlmIGNhbGxlZCBhZ2FpbiBhZnRlciBgd2FpdGAgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCkge1xuICBsZXQgdGltZXI7XG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGlmICh0aW1lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB3YWtlVXAgPSAoKSA9PiB7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgfTtcblxuICAgIHRpbWVyID0gc2V0VGltZW91dCh3YWtlVXAsIHdhaXQpO1xuICAgIGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBfV2FsbHBhcGVyQ2F0ZWdvcmllcyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNvbG9ySW5wdXQgPSB0aGlzLmhhbmRsZUNvbG9ySW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlYm91bmNlZEhhbmRsZUNoYW5nZSA9IGRlYm91bmNlKHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyksIDk5OSk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUmVzZXQgPSB0aGlzLmhhbmRsZVJlc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDYXRlZ29yeSA9IHRoaXMuaGFuZGxlQ2F0ZWdvcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVVwbG9hZCA9IHRoaXMuaGFuZGxlVXBsb2FkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVCYWNrID0gdGhpcy5oYW5kbGVCYWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRSR0JDb2xvcnMgPSB0aGlzLmdldFJHQkNvbG9ycy5iaW5kKHRoaXMpO1xuICAgIHRoaXMucHJlZmVyc0hpZ2hDb250cmFzdFF1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLnByZWZlcnNEYXJrUXVlcnkgPSBudWxsO1xuICAgIHRoaXMuY2F0ZWdvcnlSZWYgPSBbXTsgLy8gc3RvcmUgcmVmZXJlbmNlcyBmb3Igd2FsbHBhcGVyIGNhdGVnb3J5IGxpc3RcbiAgICB0aGlzLndhbGxwYXBlclJlZiA9IFtdOyAvLyBzdG9yZSByZWZlcmVuY2UgZm9yIHdhbGxwYXBlciBzZWxlY3Rpb24gbGlzdFxuICAgIHRoaXMuY3VzdG9tQ29sb3JQaWNrZXJSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTsgLy8gVXNlZCB0byBkZXRlcm1pbmUgY29udHJhc3QgaWNvbiBjb2xvciBmb3IgY3VzdG9tIGNvbG9yIHBpY2tlclxuICAgIHRoaXMuY3VzdG9tQ29sb3JJbnB1dCA9IFJlYWN0LmNyZWF0ZVJlZigpOyAvLyBVc2VkIHRvIGRldGVybWluZSBjb250cmFzdCBpY29uIGNvbG9yIGZvciBjdXN0b20gY29sb3IgcGlja2VyXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUNhdGVnb3J5OiBudWxsLFxuICAgICAgYWN0aXZlQ2F0ZWdvcnlGbHVlbnRJRDogbnVsbCxcbiAgICAgIHNob3dDb2xvclBpY2tlcjogZmFsc2UsXG4gICAgICBpbnB1dFR5cGU6IFwicmFkaW9cIixcbiAgICAgIGFjdGl2ZUlkOiBudWxsLFxuICAgICAgaXNDdXN0b21XYWxscGFwZXJFcnJvcjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJlZmVyc0RhcmtRdWVyeSA9IGdsb2JhbFRoaXMubWF0Y2hNZWRpYShcbiAgICAgIFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBXYWxsbHBhcGVyIGNhdGVnb3J5IHN1YnBhbmVsIHNob3VsZCBjbG9zZSB3aGVuIHBhcmVudCBtZW51IGlzIGNsb3NlZFxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMuZXhpdEV2ZW50RmlyZWQgJiZcbiAgICAgIHRoaXMucHJvcHMuZXhpdEV2ZW50RmlyZWQgIT09IHByZXZQcm9wcy5leGl0RXZlbnRGaXJlZFxuICAgICkge1xuICAgICAgdGhpcy5oYW5kbGVCYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ29sb3JJbnB1dChldmVudCkge1xuICAgIGxldCB7IGlkIH0gPSBldmVudC50YXJnZXQ7XG4gICAgLy8gU2V0IElEIHRvIGluY2x1ZGUgaGV4IHZhbHVlIG9mIGN1c3RvbSBjb2xvclxuICAgIGlkID0gYHNvbGlkLWNvbG9yLXBpY2tlci0ke2V2ZW50LnRhcmdldC52YWx1ZX1gO1xuICAgIGNvbnN0IHJnYkNvbG9ycyA9IHRoaXMuZ2V0UkdCQ29sb3JzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cbiAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciB0byBjdXN0b20gY29sb3JcbiAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYigke3JnYkNvbG9ycy50b1N0cmluZygpfSlgO1xuXG4gICAgaWYgKHRoaXMuY3VzdG9tQ29sb3JQaWNrZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29sb3JJbnB1dEJhY2tncm91bmQgPVxuICAgICAgICB0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQuY2hpbGRyZW5bMF0uc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgICAgdGhpcy5jdXN0b21Db2xvclBpY2tlclJlZi5jdXJyZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgIGNvbG9ySW5wdXRCYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC8vIFNldCBpY29uIGNvbG9yIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBjb2xvclxuICAgIGNvbnN0IGlzQ29sb3JEYXJrID0gdGhpcy5pc1dhbGxwYXBlckNvbG9yRGFyayhyZ2JDb2xvcnMpO1xuICAgIGlmICh0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChpc0NvbG9yRGFyaykge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LmFkZChcImlzLWRhcmtcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLWRhcmtcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBhbnkgcG9zc2libGUgaW5pdGlhbCBjbGFzc2VzXG4gICAgICB0aGlzLmN1c3RvbUNvbG9yUGlja2VyUmVmLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgXCJjdXN0b20tY29sb3Itc2V0XCIsXG4gICAgICAgIFwiY3VzdG9tLWNvbG9yLWRhcmtcIixcbiAgICAgICAgXCJkZWZhdWx0LWNvbG9yLXNldFwiXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIFNldHRpbmcgdGhpcyBub3cgc28gd2hlbiB3ZSByZW1vdmUgdjEgd2UgZG9uJ3QgaGF2ZSB0byBtaWdyYXRlIHYxIHZhbHVlcy5cbiAgICB0aGlzLnByb3BzLnNldFByZWYoXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiLCBpZCk7XG4gIH1cblxuICAvLyBOb3RlOiBUaGVyZSdzIGEgc2VwYXJhdGUgZXZlbnQgKGRlYm91bmNlZEhhbmRsZUNoYW5nZSkgdGhhdCBmaXJlcyB0aGUgaGFuZGxlQ2hhbmdlXG4gIC8vIGV2ZW50IGJ1dCBpcyBkZWxheWVkIHNvIHRoYXQgaXQgZG9lc24ndCBmaXJlIG11bHRpcGxlIGV2ZW50cyB3aGVuIGEgdXNlclxuICAvLyBpcyBzZWxlY3RpbmcgYSBjdXN0b20gY29sb3IgYmFja2dyb3VuZFxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgeyBpZCB9ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgLy8gU2V0IElEIHRvIGluY2x1ZGUgaGV4IHZhbHVlIG9mIGN1c3RvbSBjb2xvclxuICAgIGlmIChpZCA9PT0gXCJzb2xpZC1jb2xvci1waWNrZXJcIikge1xuICAgICAgaWQgPSBgc29saWQtY29sb3ItcGlja2VyLSR7ZXZlbnQudGFyZ2V0LnZhbHVlfWA7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5zZXRQcmVmKFwibmV3dGFiV2FsbHBhcGVycy53YWxscGFwZXJcIiwgaWQpO1xuXG4gICAgY29uc3QgdXBsb2FkZWRQcmV2aW91c2x5ID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BREVEX1BSRVZJT1VTTFldO1xuXG4gICAgdGhpcy5oYW5kbGVVc2VyRXZlbnQoYXQuV0FMTFBBUEVSX0NMSUNLLCB7XG4gICAgICBzZWxlY3RlZF93YWxscGFwZXI6IGlkLFxuICAgICAgaGFkX3ByZXZpb3VzX3dhbGxwYXBlcjogISF0aGlzLnByb3BzLmFjdGl2ZVdhbGxwYXBlcixcbiAgICAgIGhhZF91cGxvYWRlZF9wcmV2aW91c2x5OiAhIXVwbG9hZGVkUHJldmlvdXNseSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGltcGxlbWVudGluZyBhcnJvdyBuYXZpZ2F0aW9uIGZvciB3YWxscGFwZXIgY2F0ZWdvcnkgc2VsZWN0aW9uXG4gIGhhbmRsZUNhdGVnb3J5S2V5RG93bihldmVudCwgY2F0ZWdvcnkpIHtcbiAgICBjb25zdCBnZXRJbmRleCA9IHRoaXMuY2F0ZWdvcnlSZWYuZmluZEluZGV4KGNhdCA9PiBjYXQuaWQgPT09IGNhdGVnb3J5KTtcbiAgICBpZiAoZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47IC8vIHByZXZlbnRzIGVycm9ycyBpZiB3YWxscGFwZXIgaW5kZXggaXNuJ3QgZm91bmQgd2hlbiBuYXZpZ2F0aW5nIHdpdGggYXJyb3cga2V5c1xuICAgIH1cblxuICAgIGNvbnN0IGlzUlRMID0gZG9jdW1lbnQuZGlyID09PSBcInJ0bFwiOyAvLyByZXR1cm5zIHRydWUgaWYgcGFnZSBsYW5ndWFnZSBpcyByaWdodC10by1sZWZ0XG4gICAgbGV0IGV2ZW50S2V5ID0gZXZlbnQua2V5O1xuXG4gICAgaWYgKGV2ZW50S2V5ID09PSBcIkFycm93UmlnaHRcIiB8fCBldmVudEtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgaWYgKGlzUlRMKSB7XG4gICAgICAgIGV2ZW50S2V5ID0gZXZlbnRLZXkgPT09IFwiQXJyb3dSaWdodFwiID8gXCJBcnJvd0xlZnRcIiA6IFwiQXJyb3dSaWdodFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBuZXh0SW5kZXggPSBnZXRJbmRleDtcblxuICAgIGlmIChldmVudEtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIG5leHRJbmRleCA9XG4gICAgICAgIGdldEluZGV4ICsgMSA8IHRoaXMuY2F0ZWdvcnlSZWYubGVuZ3RoID8gZ2V0SW5kZXggKyAxIDogZ2V0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChldmVudEtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbmV4dEluZGV4ID0gZ2V0SW5kZXggLSAxID49IDAgPyBnZXRJbmRleCAtIDEgOiBnZXRJbmRleDtcbiAgICB9XG5cbiAgICB0aGlzLmNhdGVnb3J5UmVmW25leHRJbmRleF0uZm9jdXMoKTtcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uIGltcGxlbWVudGluZyBhcnJvdyBuYXZpZ2F0aW9uIGZvciB3YWxscGFwZXIgc2VsZWN0aW9uXG4gIGhhbmRsZVdhbGxwYXBlcktleURvd24oZXZlbnQsIHRpdGxlKSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJUYWJcIikge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuYmFja1RvTWVudUJ1dHRvbj8uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgdGFiYmluZyB3aXRoaW4gd2FsbHBhcGVyIHNlbGVjdGlvbi4gV2Ugc2hvdWxkIG9ubHkgYmUgdXNpbmcgdGhlIFRhYiBrZXkgdG8gdGFiIGJldHdlZW4gZ3JvdXBzXG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaXNSVEwgPSBkb2N1bWVudC5kaXIgPT09IFwicnRsXCI7IC8vIHJldHVybnMgdHJ1ZSBpZiBwYWdlIGxhbmd1YWdlIGlzIHJpZ2h0LXRvLWxlZnRcbiAgICBsZXQgZXZlbnRLZXkgPSBldmVudC5rZXk7XG5cbiAgICBpZiAoZXZlbnRLZXkgPT09IFwiQXJyb3dSaWdodFwiIHx8IGV2ZW50S2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBpZiAoaXNSVEwpIHtcbiAgICAgICAgZXZlbnRLZXkgPSBldmVudEtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgPyBcIkFycm93TGVmdFwiIDogXCJBcnJvd1JpZ2h0XCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0SW5kZXggPSB0aGlzLndhbGxwYXBlclJlZi5maW5kSW5kZXgoXG4gICAgICB3YWxscGFwZXIgPT4gd2FsbHBhcGVyLmlkID09PSB0aXRsZVxuICAgICk7XG5cbiAgICBpZiAoZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm47IC8vIHByZXZlbnRzIGVycm9ycyBpZiB3YWxscGFwZXIgaW5kZXggaXNuJ3QgZm91bmQgd2hlbiBuYXZpZ2F0aW5nIHdpdGggYXJyb3cga2V5c1xuICAgIH1cblxuICAgIC8vIHRoZSBzZXQgbGF5b3V0IG9mIGNvbHVtbnMgcGVyIHJvdyBmb3IgdGhlIHdhbGxwYXBlciBzZWxlY3Rpb25cbiAgICBjb25zdCBjb2x1bW5Db3VudCA9IDM7XG4gICAgbGV0IG5leHRJbmRleCA9IGdldEluZGV4O1xuXG4gICAgaWYgKGV2ZW50S2V5ID09PSBcIkFycm93UmlnaHRcIikge1xuICAgICAgbmV4dEluZGV4ID1cbiAgICAgICAgZ2V0SW5kZXggKyAxIDwgdGhpcy53YWxscGFwZXJSZWYubGVuZ3RoID8gZ2V0SW5kZXggKyAxIDogZ2V0SW5kZXg7XG4gICAgfSBlbHNlIGlmIChldmVudEtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgbmV4dEluZGV4ID0gZ2V0SW5kZXggLSAxID49IDAgPyBnZXRJbmRleCAtIDEgOiBnZXRJbmRleDtcbiAgICB9IGVsc2UgaWYgKGV2ZW50S2V5ID09PSBcIkFycm93RG93blwiKSB7XG4gICAgICBuZXh0SW5kZXggPVxuICAgICAgICBnZXRJbmRleCArIGNvbHVtbkNvdW50IDwgdGhpcy53YWxscGFwZXJSZWYubGVuZ3RoXG4gICAgICAgICAgPyBnZXRJbmRleCArIGNvbHVtbkNvdW50XG4gICAgICAgICAgOiBnZXRJbmRleDtcbiAgICB9IGVsc2UgaWYgKGV2ZW50S2V5ID09PSBcIkFycm93VXBcIikge1xuICAgICAgbmV4dEluZGV4ID1cbiAgICAgICAgZ2V0SW5kZXggLSBjb2x1bW5Db3VudCA+PSAwID8gZ2V0SW5kZXggLSBjb2x1bW5Db3VudCA6IGdldEluZGV4O1xuICAgIH1cblxuICAgIHRoaXMud2FsbHBhcGVyUmVmW25leHRJbmRleF0udGFiSW5kZXggPSAwO1xuICAgIHRoaXMud2FsbHBhcGVyUmVmW2dldEluZGV4XS50YWJJbmRleCA9IC0xO1xuICAgIHRoaXMud2FsbHBhcGVyUmVmW25leHRJbmRleF0uZm9jdXMoKTtcbiAgICB0aGlzLndhbGxwYXBlclJlZltuZXh0SW5kZXhdLmNsaWNrKCk7XG4gIH1cblxuICBoYW5kbGVSZXNldCgpIHtcbiAgICBjb25zdCB1cGxvYWRlZFByZXZpb3VzbHkgPVxuICAgICAgdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXNbUFJFRl9XQUxMUEFQRVJfVVBMT0FERURfUFJFVklPVVNMWV07XG5cbiAgICBjb25zdCBzZWxlY3RlZFdhbGxwYXBlciA9XG4gICAgICB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCJdO1xuXG4gICAgLy8gSWYgYSBjdXN0b20gd2FsbHBhcGVyIGlzIHNldCwgcmVtb3ZlIGl0XG4gICAgaWYgKHNlbGVjdGVkV2FsbHBhcGVyID09PSBcImN1c3RvbVwiKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5XQUxMUEFQRVJfUkVNT1ZFX1VQTE9BRCxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gUmVzZXQgYWN0aXZlIHdhbGxwYXBlclxuICAgIHRoaXMucHJvcHMuc2V0UHJlZihcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCIsIFwiXCIpO1xuXG4gICAgLy8gRmlyZSBXQUxMUEFQRVJfQ0xJQ0sgdGVsZW1ldHJ5IGV2ZW50XG4gICAgdGhpcy5oYW5kbGVVc2VyRXZlbnQoYXQuV0FMTFBBUEVSX0NMSUNLLCB7XG4gICAgICBzZWxlY3RlZF93YWxscGFwZXI6IFwibm9uZVwiLFxuICAgICAgaGFkX3ByZXZpb3VzX3dhbGxwYXBlcjogISF0aGlzLnByb3BzLmFjdGl2ZVdhbGxwYXBlcixcbiAgICAgIGhhZF91cGxvYWRlZF9wcmV2aW91c2x5OiAhIXVwbG9hZGVkUHJldmlvdXNseSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNhdGVnb3J5ID0gZXZlbnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVDYXRlZ29yeTogZXZlbnQudGFyZ2V0LmlkIH0pO1xuXG4gICAgdGhpcy5oYW5kbGVVc2VyRXZlbnQoYXQuV0FMTFBBUEVSX0NBVEVHT1JZX0NMSUNLLCBldmVudC50YXJnZXQuaWQpO1xuXG4gICAgbGV0IGZsdWVudF9pZDtcbiAgICBzd2l0Y2ggKGV2ZW50LnRhcmdldC5pZCkge1xuICAgICAgY2FzZSBcImFic3RyYWN0c1wiOlxuICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItY2F0ZWdvcnktdGl0bGUtYWJzdHJhY3RcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY2VsZXN0aWFsXCI6XG4gICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci1jYXRlZ29yeS10aXRsZS1jZWxlc3RpYWxcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGhvdG9ncmFwaHNcIjpcbiAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLXBob3RvZ3JhcGhzXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNvbGlkLWNvbG9yc1wiOlxuICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItY2F0ZWdvcnktdGl0bGUtY29sb3JzXCI7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUNhdGVnb3J5Rmx1ZW50SUQ6IGZsdWVudF9pZCB9KTtcbiAgfTtcblxuICAvLyBDdXN0b20gd2FsbHBhcGVyIGltYWdlIHVwbG9hZFxuICBhc3luYyBoYW5kbGVVcGxvYWQoKSB7XG4gICAgY29uc3Qgd2FsbHBhcGVyVXBsb2FkTWF4RmlsZVNpemVFbmFibGVkID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BRF9NQVhfRklMRV9TSVpFX0VOQUJMRURdO1xuXG4gICAgY29uc3Qgd2FsbHBhcGVyVXBsb2FkTWF4RmlsZVNpemUgPVxuICAgICAgdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXNbUFJFRl9XQUxMUEFQRVJfVVBMT0FEX01BWF9GSUxFX1NJWkVdO1xuXG4gICAgY29uc3QgdXBsb2FkZWRQcmV2aW91c2x5ID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1BSRUZfV0FMTFBBUEVSX1VQTE9BREVEX1BSRVZJT1VTTFldO1xuXG4gICAgLy8gQ3JlYXRlIGEgZmlsZSBpbnB1dCBzaW5jZSBjYXRlZ29yeSBidXR0b25zIGFyZSByYWRpbyBpbnB1dHNcbiAgICBjb25zdCBmaWxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZmlsZUlucHV0LnR5cGUgPSBcImZpbGVcIjtcbiAgICBmaWxlSW5wdXQuYWNjZXB0ID0gXCJpbWFnZS8qXCI7IC8vIG9ubHkgYWxsb3cgaW1hZ2UgZmlsZXNcblxuICAgIC8vIENhdGNoIGNhbmNlbCBldmVudHNcbiAgICBmaWxlSW5wdXQub25jYW5jZWwgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNDdXN0b21XYWxscGFwZXJFcnJvcjogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIC8vIFJlc2V0IGVycm9yIHN0YXRlIHdoZW4gdXNlciBiZWdpbnMgZmlsZSBzZWxlY3Rpb25cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDdXN0b21XYWxscGFwZXJFcnJvcjogZmFsc2UgfSk7XG5cbiAgICAvLyBGaXJlIHdoZW4gdXNlciBzZWxlY3RzIGEgZmlsZVxuICAgIGZpbGVJbnB1dC5vbmNoYW5nZSA9IGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IFtmaWxlXSA9IGV2ZW50LnRhcmdldC5maWxlcztcblxuICAgICAgLy8gTGltaXQgaW1hZ2UgdXBsb2FkZWQgdG8gYSBtYXhpbXVtIGZpbGUgc2l6ZSBpZiBlbmFibGVkXG4gICAgICAvLyBOb3RlOiBUaGUgbWF4IGZpbGUgc2l6ZSBwcmVmIChjdXN0b21XYWxscGFwZXIuZmlsZVNpemUpIGlzIGNvbnZlcnRlZCB0byBtZWdhYnl0ZXMgKE1CKVxuICAgICAgLy8gRXhhbXBsZTogaWYgcHJlZiB2YWx1ZSBpcyA1LCBtYXggZmlsZSBzaXplIGlzIDUgTUJcbiAgICAgIGNvbnN0IG1heFNpemUgPSB3YWxscGFwZXJVcGxvYWRNYXhGaWxlU2l6ZSAqIDEwMjQgKiAxMDI0O1xuICAgICAgaWYgKHdhbGxwYXBlclVwbG9hZE1heEZpbGVTaXplRW5hYmxlZCAmJiBmaWxlICYmIGZpbGUuc2l6ZSA+IG1heFNpemUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZpbGUgc2l6ZSBleGNlZWRzIGxpbWl0XCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNDdXN0b21XYWxscGFwZXJFcnJvcjogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZmlsZSkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuV0FMTFBBUEVSX1VQTE9BRCxcbiAgICAgICAgICAgIGRhdGE6IGZpbGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBTZXQgYWN0aXZlIHdhbGxwYXBlciBJRCB0byBcImN1c3RvbVwiXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJlZihcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCIsIFwiY3VzdG9tXCIpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdXBsb2FkZWRQcmV2aW91c2x5IHByZWYgdG8gVFJVRVxuICAgICAgICAvLyBOb3RlOiB0aGlzIHByZWYgdXNlZCBmb3IgdGVsZW1ldHJ5LiBEbyBub3QgcmVzZXQgdG8gZmFsc2UuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0UHJlZihQUkVGX1dBTExQQVBFUl9VUExPQURFRF9QUkVWSU9VU0xZLCB0cnVlKTtcblxuICAgICAgICB0aGlzLmhhbmRsZVVzZXJFdmVudChhdC5XQUxMUEFQRVJfQ0xJQ0ssIHtcbiAgICAgICAgICBzZWxlY3RlZF93YWxscGFwZXI6IFwiY3VzdG9tXCIsXG4gICAgICAgICAgaGFkX3ByZXZpb3VzX3dhbGxwYXBlcjogISF0aGlzLnByb3BzLmFjdGl2ZVdhbGxwYXBlcixcbiAgICAgICAgICBoYWRfdXBsb2FkZWRfcHJldmlvdXNseTogISF1cGxvYWRlZFByZXZpb3VzbHksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmaWxlSW5wdXQuY2xpY2soKTtcbiAgfVxuXG4gIGhhbmRsZUJhY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUNhdGVnb3J5OiBudWxsIH0pO1xuICAgIHRoaXMuY2F0ZWdvcnlSZWZbMF0/LmZvY3VzKCk7XG4gIH1cblxuICAvLyBSZWNvcmQgdXNlciBpbnRlcmFjdGlvbiB3aGVuIGNoYW5naW5nIHdhbGxwYXBlciBhbmQgcmVzZXRpbmcgd2FsbHBhcGVyIHRvIGRlZmF1bHRcbiAgaGFuZGxlVXNlckV2ZW50KHR5cGUsIGRhdGEpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLk9ubHlUb01haW4oeyB0eXBlLCBkYXRhIH0pKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUlkID0gaWQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVJZDogaWQgfSk7IC8vIFNldCB0aGUgYWN0aXZlIElEXG4gIH07XG5cbiAgZ2V0UkdCQ29sb3JzKGlucHV0KSB7XG4gICAgaWYgKGlucHV0Lmxlbmd0aCAhPT0gNykge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHIgPSBwYXJzZUludChpbnB1dC5zdWJzdHIoMSwgMiksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoaW5wdXQuc3Vic3RyKDMsIDIpLCAxNik7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KGlucHV0LnN1YnN0cig1LCAyKSwgMTYpO1xuXG4gICAgcmV0dXJuIFtyLCBnLCBiXTtcbiAgfVxuXG4gIGlzV2FsbHBhcGVyQ29sb3JEYXJrKFtyLCBnLCBiXSkge1xuICAgIHJldHVybiAwLjIxMjUgKiByICsgMC43MTU0ICogZyArIDAuMDcyMSAqIGIgPD0gMTEwO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3QgeyB3YWxscGFwZXJMaXN0LCBjYXRlZ29yaWVzIH0gPSB0aGlzLnByb3BzLldhbGxwYXBlcnM7XG4gICAgY29uc3QgeyBhY3RpdmVXYWxscGFwZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY3RpdmVDYXRlZ29yeSwgc2hvd0NvbG9yUGlja2VyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgYWN0aXZlQ2F0ZWdvcnlGbHVlbnRJRCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgZmlsdGVyZWRXYWxscGFwZXJzID0gd2FsbHBhcGVyTGlzdC5maWx0ZXIoXG4gICAgICB3YWxscGFwZXIgPT4gd2FsbHBhcGVyLmNhdGVnb3J5ID09PSBhY3RpdmVDYXRlZ29yeVxuICAgICk7XG4gICAgY29uc3Qgd2FsbHBhcGVyVXBsb2FkTWF4RmlsZVNpemUgPVxuICAgICAgdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXNbUFJFRl9XQUxMUEFQRVJfVVBMT0FEX01BWF9GSUxFX1NJWkVdO1xuXG4gICAgZnVuY3Rpb24gcmVkdWNlQ29sb3JzVG9GaXRDdXN0b21Db2xvcklucHV0KGFycikge1xuICAgICAgLy8gUmVkdWNlIHRoZSBhbW91bnQgb2YgY3VzdG9tIGNvbG9ycyB0byBtYWtlIHNwYWNlIGZvciB0aGUgY3VzdG9tIGNvbG9yIHBpY2tlclxuICAgICAgd2hpbGUgKGFyci5sZW5ndGggJSAzICE9PSAyKSB7XG4gICAgICAgIGFyci5wb3AoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgbGV0IHdhbGxwYXBlckN1c3RvbVNvbGlkQ29sb3JIZXggPSBudWxsO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRXYWxscGFwZXIgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCJdO1xuXG4gICAgLy8gVXNlciBoYXMgcHJldmlvdXMgc2VsZWN0ZWQgYSBjdXN0b20gY29sb3JcbiAgICBpZiAoc2VsZWN0ZWRXYWxscGFwZXIuaW5jbHVkZXMoXCJzb2xpZC1jb2xvci1waWNrZXJcIikpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29sb3JQaWNrZXI6IHRydWUgfSk7XG4gICAgICBjb25zdCByZWdleCA9IC8jKFthLWZBLUYwLTldezZ9KS87XG4gICAgICBbd2FsbHBhcGVyQ3VzdG9tU29saWRDb2xvckhleF0gPSBzZWxlY3RlZFdhbGxwYXBlci5tYXRjaChyZWdleCk7XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIGN1c3RvbSBjb2xvciBzZWxlY3QgaWYgcHJlZidlZCBvblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd0NvbG9yUGlja2VyOiBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMuY3VzdG9tQ29sb3IuZW5hYmxlZFwiXSxcbiAgICB9KTtcblxuICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gb2Ygc29saWQgY29sb3JzIHRvIG1ha2Ugc3BhY2UgZm9yIGN1c3RvbSBjb2xvciBwaWNrZXJcbiAgICBpZiAoXG4gICAgICBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMuY3VzdG9tQ29sb3IuZW5hYmxlZFwiXSAmJlxuICAgICAgYWN0aXZlQ2F0ZWdvcnkgPT09IFwic29saWQtY29sb3JzXCJcbiAgICApIHtcbiAgICAgIGZpbHRlcmVkV2FsbHBhcGVycyA9XG4gICAgICAgIHJlZHVjZUNvbG9yc1RvRml0Q3VzdG9tQ29sb3JJbnB1dChmaWx0ZXJlZFdhbGxwYXBlcnMpO1xuICAgIH1cblxuICAgIC8vIEJ1ZyAxOTUzMDEyIC0gSWYgbm90aGluZyBzZWxlY3RlZCwgZGVmYXVsdCB0byBjb2xvciBvZiBjdXN0b21pemUgcGFuZWxcbiAgICAvLyAtLWNvbG9yLWJsdWUtNzAgOiAjMDU0MDk2XG4gICAgLy8gLS1jb2xvci1ibHVlLTA1IDogI2RlZWFmY1xuICAgIGNvbnN0IHN0YXJ0ZXJDb2xvckhleCA9IHRoaXMucHJlZmVyc0RhcmtRdWVyeT8ubWF0Y2hlc1xuICAgICAgPyBcIiMwNTQwOTZcIlxuICAgICAgOiBcIiNkZWVhZmNcIjtcblxuICAgIC8vIFNldCBpbml0aWFsIHN0YXRlIG9mIHRoZSBjb2xvciBwaWNrZXIgKGRlcGVuZGluZyBpZiB0aGUgdXNlciBoYXMgYWxyZWFkeSBzZXQgYSBjdXN0b20gY29sb3IpXG4gICAgbGV0IGluaXRTdGF0ZUNsYXNzbmFtZSA9IHdhbGxwYXBlckN1c3RvbVNvbGlkQ29sb3JIZXhcbiAgICAgID8gXCJjdXN0b20tY29sb3Itc2V0XCJcbiAgICAgIDogXCJkZWZhdWx0LWNvbG9yLXNldFwiO1xuXG4gICAgLy8gSWYgYSBjdXN0b20gY29sb3IgcGlja2VyIGlzIHNldCwgbWFrZSBzdXJlIHRoZSBpY29uIGhhcyB0aGUgY29ycmVjdCBjb250cmFzdFxuICAgIGlmICh3YWxscGFwZXJDdXN0b21Tb2xpZENvbG9ySGV4KSB7XG4gICAgICBjb25zdCByZ2JDb2xvcnMgPSB0aGlzLmdldFJHQkNvbG9ycyh3YWxscGFwZXJDdXN0b21Tb2xpZENvbG9ySGV4KTtcbiAgICAgIGNvbnN0IGlzQ29sb3JEYXJrID0gdGhpcy5pc1dhbGxwYXBlckNvbG9yRGFyayhyZ2JDb2xvcnMpO1xuICAgICAgaWYgKGlzQ29sb3JEYXJrKSB7XG4gICAgICAgIGluaXRTdGF0ZUNsYXNzbmFtZSArPSBcIiBjdXN0b20tY29sb3ItZGFya1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb2xvclBpY2tlcklucHV0ID1cbiAgICAgIHNob3dDb2xvclBpY2tlciAmJiBhY3RpdmVDYXRlZ29yeSA9PT0gXCJzb2xpZC1jb2xvcnNcIiA/IChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHRoZW1lLWN1c3RvbS1jb2xvci1waWNrZXIgJHtpbml0U3RhdGVDbGFzc25hbWV9YH1cbiAgICAgICAgICByZWY9e3RoaXMuY3VzdG9tQ29sb3JQaWNrZXJSZWZ9XG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuaGFuZGxlQ29sb3JJbnB1dH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmRlYm91bmNlZEhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0QWN0aXZlSWQoXCJzb2xpZC1jb2xvci1waWNrZXJcIil9IC8vXG4gICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgbmFtZT17YHdhbGxwYXBlci1zb2xpZC1jb2xvci1waWNrZXJgfVxuICAgICAgICAgICAgaWQ9XCJzb2xpZC1jb2xvci1waWNrZXJcIlxuICAgICAgICAgICAgLy8gYXJpYS1jaGVja2VkIGlzIG5vdCBhcHBsaWNhYmxlIGZvciBpbnB1dFt0eXBlPVwiY29sb3JcIl0gZWxlbWVudHNcbiAgICAgICAgICAgIGFyaWEtY3VycmVudD17dGhpcy5zdGF0ZS5hY3RpdmVJZCA9PT0gXCJzb2xpZC1jb2xvci1waWNrZXJcIn1cbiAgICAgICAgICAgIHZhbHVlPXt3YWxscGFwZXJDdXN0b21Tb2xpZENvbG9ySGV4IHx8IHN0YXJ0ZXJDb2xvckhleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHdhbGxwYXBlci1pbnB1dFxuICAgICAgICAgICAgICAke3RoaXMuc3RhdGUuYWN0aXZlSWQgPT09IFwic29saWQtY29sb3ItcGlja2VyXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1gfVxuICAgICAgICAgICAgcmVmPXt0aGlzLmN1c3RvbUNvbG9ySW5wdXR9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGh0bWxGb3I9XCJzb2xpZC1jb2xvci1waWNrZXJcIlxuICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXdhbGxwYXBlci1jdXN0b20tY29sb3JcIlxuICAgICAgICAgID48L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIFwiXCJcbiAgICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1oZWFkZXJcIj5cbiAgICAgICAgICA8aDIgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXdhbGxwYXBlci10aXRsZVwiPjwvaDI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2FsbHBhcGVycy1yZXNldFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlc2V0fVxuICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXdhbGxwYXBlci1yZXNldFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByb2xlPVwiZ3JpZFwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIldhbGxwYXBlciBjYXRlZ29yeSBzZWxlY3Rpb24uIFVzZSBhcnJvdyBrZXlzIHRvIG5hdmlnYXRlLlwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPVwiY2F0ZWdvcnktbGlzdFwiPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRMaXN0ID0gd2FsbHBhcGVyTGlzdC5maWx0ZXIoXG4gICAgICAgICAgICAgICAgd2FsbHBhcGVyID0+IHdhbGxwYXBlci5jYXRlZ29yeSA9PT0gY2F0ZWdvcnlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29uc3QgYWN0aXZlV2FsbHBhcGVyT2JqID1cbiAgICAgICAgICAgICAgICBhY3RpdmVXYWxscGFwZXIgJiZcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZExpc3QuZmluZCh3cCA9PiB3cC50aXRsZSA9PT0gYWN0aXZlV2FsbHBhcGVyKTtcbiAgICAgICAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gYWN0aXZlV2FsbHBhcGVyT2JqIHx8IGZpbHRlcmVkTGlzdFswXTtcbiAgICAgICAgICAgICAgbGV0IGZsdWVudF9pZDtcbiAgICAgICAgICAgICAgc3dpdGNoIChjYXRlZ29yeSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhYnN0cmFjdHNcIjpcbiAgICAgICAgICAgICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci1jYXRlZ29yeS10aXRsZS1hYnN0cmFjdFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNlbGVzdGlhbFwiOlxuICAgICAgICAgICAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLWNlbGVzdGlhbFwiO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImN1c3RvbS13YWxscGFwZXJcIjpcbiAgICAgICAgICAgICAgICAgIGZsdWVudF9pZCA9IFwibmV3dGFiLXdhbGxwYXBlci11cGxvYWQtaW1hZ2VcIjtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJwaG90b2dyYXBoc1wiOlxuICAgICAgICAgICAgICAgICAgZmx1ZW50X2lkID0gXCJuZXd0YWItd2FsbHBhcGVyLWNhdGVnb3J5LXRpdGxlLXBob3RvZ3JhcGhzXCI7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwic29saWQtY29sb3JzXCI6XG4gICAgICAgICAgICAgICAgICBmbHVlbnRfaWQgPSBcIm5ld3RhYi13YWxscGFwZXItY2F0ZWdvcnktdGl0bGUtY29sb3JzXCI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICAgIGlmICh0aHVtYm5haWw/LndhbGxwYXBlclVybCkge1xuICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aHVtYm5haWwud2FsbHBhcGVyVXJsfSlgO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRodW1ibmFpbD8uc29saWRfY29sb3IgfHwgXCJcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVJlZltpbmRleF0gPSBlbDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGlkPXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2UgPT4gdGhpcy5oYW5kbGVDYXRlZ29yeUtleURvd24oZSwgY2F0ZWdvcnkpfVxuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgb3ZlcnJpZGVzIGZvciBjdXN0b20gd2FsbHBhcGVyIHVwbG9hZCBVSVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSAhPT0gXCJjdXN0b20td2FsbHBhcGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5oYW5kbGVDYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhbmRsZVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkgIT09IFwiY3VzdG9tLXdhbGxwYXBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGB3YWxscGFwZXItaW5wdXRgXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGB3YWxscGFwZXItaW5wdXQgdGhlbWUtY3VzdG9tLXdhbGxwYXBlcmBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aW5kZXggPT09IDAgPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICAgIHsuLi4oY2F0ZWdvcnkgPT09IFwiY3VzdG9tLXdhbGxwYXBlclwiXG4gICAgICAgICAgICAgICAgICAgICAgPyB7IFwiYXJpYS1lcnJvcm1lc3NhZ2VcIjogXCJjdXN0b21XYWxscGFwZXJFcnJvclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICA6IHt9KX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y2F0ZWdvcnl9IGRhdGEtbDEwbi1pZD17Zmx1ZW50X2lkfT5cbiAgICAgICAgICAgICAgICAgICAge2ZsdWVudF9pZH1cbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmlzQ3VzdG9tV2FsbHBhcGVyRXJyb3IgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20td2FsbHBhcGVyLWVycm9yXCIgaWQ9XCJjdXN0b21XYWxscGFwZXJFcnJvclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpY29uIGljb24taW5mb1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItd2FsbHBhcGVyLWVycm9yLW1heC1maWxlLXNpemVcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPXtge1wiZmlsZV9zaXplXCI6ICR7d2FsbHBhcGVyVXBsb2FkTWF4RmlsZVNpemV9fWB9XG4gICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIGluPXshIWFjdGl2ZUNhdGVnb3J5fVxuICAgICAgICAgIHRpbWVvdXQ9ezMwMH1cbiAgICAgICAgICBjbGFzc05hbWVzPVwid2FsbHBhcGVyLWxpc3RcIlxuICAgICAgICAgIHVubW91bnRPbkV4aXQ9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYXRlZ29yeSB3YWxscGFwZXItbGlzdCBpZ25vcmUtY29sb3ItbW9kZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcnJvdy1idXR0b25cIlxuICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9e2FjdGl2ZUNhdGVnb3J5Rmx1ZW50SUR9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQmFja31cbiAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrVG9NZW51QnV0dG9uID0gZWw7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICByb2xlPVwiZ3JpZFwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJXYWxscGFwZXIgc2VsZWN0aW9uLiBVc2UgYXJyb3cga2V5cyB0byBuYXZpZ2F0ZS5cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkV2FsbHBhcGVycy5tYXAoXG4gICAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICAgIHsgdGl0bGUsIHRoZW1lLCBmbHVlbnRfaWQsIHNvbGlkX2NvbG9yLCB3YWxscGFwZXJVcmwgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdhbGxwYXBlclVybCkge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt3YWxscGFwZXJVcmx9KWA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc29saWRfY29sb3IgfHwgXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhbGxwYXBlclJlZltpbmRleF0gPSBlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHRoaXMuaGFuZGxlV2FsbHBhcGVyS2V5RG93bihlLCB0aXRsZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17YHdhbGxwYXBlci0ke3RpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aXRsZSA9PT0gYWN0aXZlV2FsbHBhcGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e3RpdGxlID09PSBhY3RpdmVXYWxscGFwZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHdhbGxwYXBlci1pbnB1dCB0aGVtZS0ke3RoZW1lfSAke3RoaXMuc3RhdGUuYWN0aXZlSWQgPT09IHRpdGxlID8gXCJhY3RpdmVcIiA6IFwiXCJ9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRBY3RpdmVJZCh0aXRsZSl9IC8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXtpbmRleCA9PT0gMCA/IDAgOiAtMX0gLy90aGUgZmlyc3Qgd2FsbHBhcGVyIGluIHRoZSBhcnJheSB3aWxsIGhhdmUgYSB0YWJpbmRleCBvZiAwIHNvIHdlIGNhbiB0YWIgaW50byBpdC4gVGhlIHJlc3Qgd2lsbCBoYXZlIGEgdGFiaW5kZXggb2YgLTFcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj17dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNyLW9ubHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9e2ZsdWVudF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2ZsdWVudF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7Y29sb3JQaWNrZXJJbnB1dH1cbiAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV2FsbHBhcGVyQ2F0ZWdvcmllcyA9IGNvbm5lY3Qoc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIFdhbGxwYXBlcnM6IHN0YXRlLldhbGxwYXBlcnMsXG4gICAgUHJlZnM6IHN0YXRlLlByZWZzLFxuICB9O1xufSkoX1dhbGxwYXBlckNhdGVnb3JpZXMpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBTZWN0aW9uc01nbXRQYW5lbCB9IGZyb20gXCIuLi9TZWN0aW9uc01nbXRQYW5lbC9TZWN0aW9uc01nbXRQYW5lbFwiO1xuaW1wb3J0IHsgV2FsbHBhcGVyQ2F0ZWdvcmllcyB9IGZyb20gXCIuLi8uLi9XYWxscGFwZXJDYXRlZ29yaWVzL1dhbGxwYXBlckNhdGVnb3JpZXNcIjtcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRTZWN0aW9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25QcmVmZXJlbmNlU2VsZWN0ID0gdGhpcy5vblByZWZlcmVuY2VTZWxlY3QuYmluZCh0aGlzKTtcblxuICAgIC8vIFJlZnMgYXJlIG5lY2Vzc2FyeSBmb3IgZHluYW1pY2FsbHkgbWVhc3VyaW5nIGRyYXdlciBoZWlnaHRzIGZvciBzbGlkZSBhbmltYXRpb25zXG4gICAgdGhpcy50b3BTaXRlc0RyYXdlclJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMucG9ja2V0RHJhd2VyUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBpbnB1dFVzZXJFdmVudChldmVudFNvdXJjZSwgZXZlbnRWYWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICBhYy5Vc2VyRXZlbnQoe1xuICAgICAgICBldmVudDogXCJQUkVGX0NIQU5HRURcIixcbiAgICAgICAgc291cmNlOiBldmVudFNvdXJjZSxcbiAgICAgICAgdmFsdWU6IHsgc3RhdHVzOiBldmVudFZhbHVlLCBtZW51X3NvdXJjZTogXCJDVVNUT01JWkVfTUVOVVwiIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblByZWZlcmVuY2VTZWxlY3QoZSkge1xuICAgIC8vIGV2ZW50U291cmNlOiBXRUFUSEVSIHwgVE9QX1NJVEVTIHwgVE9QX1NUT1JJRVNcbiAgICBjb25zdCB7IHByZWZlcmVuY2UsIGV2ZW50U291cmNlIH0gPSBlLnRhcmdldC5kYXRhc2V0O1xuICAgIGxldCB2YWx1ZTtcbiAgICBpZiAoZS50YXJnZXQubm9kZU5hbWUgPT09IFwiU0VMRUNUXCIpIHtcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09PSBcIklOUFVUXCIpIHtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgIGlmIChldmVudFNvdXJjZSkge1xuICAgICAgICB0aGlzLmlucHV0VXNlckV2ZW50KGV2ZW50U291cmNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gXCJNT1otVE9HR0xFXCIpIHtcbiAgICAgIHZhbHVlID0gZS50YXJnZXQucHJlc3NlZDtcbiAgICAgIGlmIChldmVudFNvdXJjZSkge1xuICAgICAgICB0aGlzLmlucHV0VXNlckV2ZW50KGV2ZW50U291cmNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJvcHMuc2V0UHJlZihwcmVmZXJlbmNlLCB2YWx1ZSk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldERyYXdlck1hcmdpbnMoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnNldERyYXdlck1hcmdpbnMoKTtcbiAgfVxuXG4gIHNldERyYXdlck1hcmdpbnMoKSB7XG4gICAgdGhpcy5zZXREcmF3ZXJNYXJnaW4oXG4gICAgICBgVE9QX1NJVEVTYCxcbiAgICAgIHRoaXMucHJvcHMuZW5hYmxlZFNlY3Rpb25zLnRvcFNpdGVzRW5hYmxlZFxuICAgICk7XG4gICAgdGhpcy5zZXREcmF3ZXJNYXJnaW4oXG4gICAgICBgVE9QX1NUT1JJRVNgLFxuICAgICAgdGhpcy5wcm9wcy5lbmFibGVkU2VjdGlvbnMucG9ja2V0RW5hYmxlZFxuICAgICk7XG4gIH1cblxuICBzZXREcmF3ZXJNYXJnaW4oZHJhd2VySUQsIGlzT3Blbikge1xuICAgIGxldCBkcmF3ZXJSZWY7XG5cbiAgICBpZiAoZHJhd2VySUQgPT09IGBUT1BfU0lURVNgKSB7XG4gICAgICBkcmF3ZXJSZWYgPSB0aGlzLnRvcFNpdGVzRHJhd2VyUmVmLmN1cnJlbnQ7XG4gICAgfSBlbHNlIGlmIChkcmF3ZXJJRCA9PT0gYFRPUF9TVE9SSUVTYCkge1xuICAgICAgZHJhd2VyUmVmID0gdGhpcy5wb2NrZXREcmF3ZXJSZWYuY3VycmVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChkcmF3ZXJSZWYpIHtcbiAgICAgIGxldCBkcmF3ZXJIZWlnaHQgPVxuICAgICAgICBwYXJzZUZsb2F0KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRyYXdlclJlZik/LmhlaWdodCkgfHwgMDtcblxuICAgICAgaWYgKGlzT3Blbikge1xuICAgICAgICBkcmF3ZXJSZWYuc3R5bGUubWFyZ2luVG9wID0gXCJ2YXIoLS1zcGFjZS1sYXJnZSlcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYXdlclJlZi5zdHlsZS5tYXJnaW5Ub3AgPSBgLSR7ZHJhd2VySGVpZ2h0ICsgM31weGA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGVuYWJsZWRTZWN0aW9ucyxcbiAgICAgIGVuYWJsZWRXaWRnZXRzLFxuICAgICAgcG9ja2V0UmVnaW9uLFxuICAgICAgbWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uLFxuICAgICAgbWF5SGF2ZVdlYXRoZXIsXG4gICAgICBtYXlIYXZlVHJlbmRpbmdTZWFyY2gsXG4gICAgICBtYXlIYXZlV2lkZ2V0cyxcbiAgICAgIG1heUhhdmVUaW1lcldpZGdldCxcbiAgICAgIG1heUhhdmVMaXN0c1dpZGdldCxcbiAgICAgIG9wZW5QcmVmZXJlbmNlcyxcbiAgICAgIHdhbGxwYXBlcnNFbmFibGVkLFxuICAgICAgYWN0aXZlV2FsbHBhcGVyLFxuICAgICAgc2V0UHJlZixcbiAgICAgIG1heUhhdmVUb3BpY1NlY3Rpb25zLFxuICAgICAgZXhpdEV2ZW50RmlyZWQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdG9wU2l0ZXNFbmFibGVkLFxuICAgICAgcG9ja2V0RW5hYmxlZCxcbiAgICAgIHdlYXRoZXJFbmFibGVkLFxuICAgICAgdHJlbmRpbmdTZWFyY2hFbmFibGVkLFxuICAgICAgc2hvd0luZmVycmVkUGVyc29uYWxpemF0aW9uRW5hYmxlZCxcbiAgICAgIHRvcFNpdGVzUm93c0NvdW50LFxuICAgIH0gPSBlbmFibGVkU2VjdGlvbnM7XG4gICAgY29uc3QgeyB0aW1lckVuYWJsZWQsIGxpc3RzRW5hYmxlZCB9ID0gZW5hYmxlZFdpZGdldHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXNlY3Rpb25cIj5cbiAgICAgICAge3dhbGxwYXBlcnNFbmFibGVkICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3YWxscGFwZXJzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPFdhbGxwYXBlckNhdGVnb3JpZXNcbiAgICAgICAgICAgICAgICBzZXRQcmVmPXtzZXRQcmVmfVxuICAgICAgICAgICAgICAgIGFjdGl2ZVdhbGxwYXBlcj17YWN0aXZlV2FsbHBhcGVyfVxuICAgICAgICAgICAgICAgIGV4aXRFdmVudEZpcmVkPXtleGl0RXZlbnRGaXJlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIElmIHdpZGdldHMgc2VjdGlvbiBpcyB2aXNpYmxlLCBoaWRlIHRoaXMgZGl2aWRlciAqL31cbiAgICAgICAgICAgIHshbWF5SGF2ZVdpZGdldHMgJiYgKFxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgcm9sZT1cInNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICAgIHttYXlIYXZlV2lkZ2V0cyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRzLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxoMiBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXdpZGdldC1zZWN0aW9uLXRpdGxlXCI+PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy13aWRnZXRzXCI+XG4gICAgICAgICAgICAgIHsvKiBXZWF0aGVyICovfVxuICAgICAgICAgICAgICB7bWF5SGF2ZVdlYXRoZXIgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ3ZWF0aGVyLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICBpZD1cIndlYXRoZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZD17d2VhdGhlckVuYWJsZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZlcmVuY2U9XCJzaG93V2VhdGhlclwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJXRUFUSEVSXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS13aWRnZXQtd2VhdGhlci10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogTGlzdHMgKi99XG4gICAgICAgICAgICAgIHttYXlIYXZlTGlzdHNXaWRnZXQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsaXN0cy13aWRnZXQtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGlzdHMtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgcHJlc3NlZD17bGlzdHNFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwid2lkZ2V0cy5saXN0cy5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1ldmVudFNvdXJjZT1cIldJREdFVF9MSVNUU1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20td2lkZ2V0LWxpc3RzLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIHsvKiBUaW1lciAqL31cbiAgICAgICAgICAgICAge21heUhhdmVUaW1lcldpZGdldCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpbWVyLXdpZGdldC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0aW1lci10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzc2VkPXt0aW1lckVuYWJsZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZlcmVuY2U9XCJ3aWRnZXRzLmZvY3VzVGltZXIuZW5hYmxlZFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJXSURHRVRfVElNRVJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXdpZGdldC10aW1lci10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7LyogVHJlbmRpbmcgU2VhcmNoICovfVxuICAgICAgICAgICAgICB7bWF5SGF2ZVRyZW5kaW5nU2VhcmNoICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidHJlbmRpbmctc2VhcmNoLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICBpZD1cInRyZW5kaW5nLXNlYXJjaC10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgICBwcmVzc2VkPXt0cmVuZGluZ1NlYXJjaEVuYWJsZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICBkYXRhLXByZWZlcmVuY2U9XCJ0cmVuZGluZ1NlYXJjaC5lbmFibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1ldmVudFNvdXJjZT1cIlRSRU5ESU5HX1NFQVJDSFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20td2lkZ2V0LXRyZW5kaW5nLXNlYXJjaC10b2dnbGVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGl2aWRlclwiIHJvbGU9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5ncy10b2dnbGVzXCI+XG4gICAgICAgICAgey8qIE5vdGU6IElmIHdpZGdldHMgYXJlIGVuYWJsZWQsIHRoZSB3ZWF0aGVyIHRvZ2dsZSB3aWxsIGJlIG1vdmVkIHVuZGVyIFdpZGdldHMgc3Vic2VjdGlvbiAqL31cbiAgICAgICAgICB7IW1heUhhdmVXaWRnZXRzICYmIG1heUhhdmVXZWF0aGVyICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3ZWF0aGVyLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxtb3otdG9nZ2xlXG4gICAgICAgICAgICAgICAgaWQ9XCJ3ZWF0aGVyLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgcHJlc3NlZD17d2VhdGhlckVuYWJsZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5vblByZWZlcmVuY2VTZWxlY3R9XG4gICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwic2hvd1dlYXRoZXJcIlxuICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJXRUFUSEVSXCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXdlYXRoZXItdG9nZ2xlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7LyogTm90ZTogSWYgd2lkZ2V0cyBhcmUgZW5hYmxlZCwgdGhlIHRyZW5kaW5nIHNlYXJjaCB0b2dnbGUgd2lsbCBiZSBtb3ZlZCB1bmRlciBXaWRnZXRzIHN1YnNlY3Rpb24gKi99XG4gICAgICAgICAgeyFtYXlIYXZlV2lkZ2V0cyAmJiBtYXlIYXZlVHJlbmRpbmdTZWFyY2ggJiYgKFxuICAgICAgICAgICAgPGRpdiBpZD1cInRyZW5kaW5nLXNlYXJjaC1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8bW96LXRvZ2dsZVxuICAgICAgICAgICAgICAgIGlkPVwidHJlbmRpbmctc2VhcmNoLXRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgcHJlc3NlZD17dHJlbmRpbmdTZWFyY2hFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgICAgb25Ub2dnbGU9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cInRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgIGRhdGEtZXZlbnRTb3VyY2U9XCJUUkVORElOR19TRUFSQ0hcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tdHJlbmRpbmctc2VhcmNoLXRvZ2dsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgPGRpdiBpZD1cInNob3J0Y3V0cy1zZWN0aW9uXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgaWQ9XCJzaG9ydGN1dHMtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgcHJlc3NlZD17dG9wU2l0ZXNFbmFibGVkIHx8IG51bGx9XG4gICAgICAgICAgICAgIG9uVG9nZ2xlPXt0aGlzLm9uUHJlZmVyZW5jZVNlbGVjdH1cbiAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwiZmVlZHMudG9wc2l0ZXNcIlxuICAgICAgICAgICAgICBkYXRhLWV2ZW50U291cmNlPVwiVE9QX1NJVEVTXCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS1zaG9ydGN1dHMtdG9nZ2xlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBzbG90PVwibmVzdGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tdG9wLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9yZS1pbmZvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy50b3BTaXRlc0RyYXdlclJlZn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicm93LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJvdy1jb3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwidG9wU2l0ZXNSb3dzXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dG9wU2l0ZXNSb3dzQ291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdG9wU2l0ZXNFbmFibGVkfVxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImN1c3RvbS1zaG9ydGN1dHMtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tcm93LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPSd7XCJudW1cIjogMX0nXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbS1yb3ctc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1sMTBuLWFyZ3M9J3tcIm51bVwiOiAyfSdcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXJvdy1zZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWwxMG4tYXJncz0ne1wibnVtXCI6IDN9J1xuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tcm93LXNlbGVjdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPSd7XCJudW1cIjogNH0nXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L21vei10b2dnbGU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cG9ja2V0UmVnaW9uICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwb2NrZXQtc2VjdGlvblwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPG1vei10b2dnbGVcbiAgICAgICAgICAgICAgICBpZD1cInBvY2tldC10b2dnbGVcIlxuICAgICAgICAgICAgICAgIHByZXNzZWQ9e3BvY2tldEVuYWJsZWQgfHwgbnVsbH1cbiAgICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5vblByZWZlcmVuY2VTZWxlY3R9XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImN1c3RvbS1wb2NrZXQtc3VidGl0bGVcIlxuICAgICAgICAgICAgICAgIGRhdGEtcHJlZmVyZW5jZT1cImZlZWRzLnNlY3Rpb24udG9wc3Rvcmllc1wiXG4gICAgICAgICAgICAgICAgZGF0YS1ldmVudFNvdXJjZT1cIlRPUF9TVE9SSUVTXCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9tLXN0b3JpZXMtdG9nZ2xlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm5lc3RlZFwiPlxuICAgICAgICAgICAgICAgICAgeyhtYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb24gfHwgbWF5SGF2ZVRvcGljU2VjdGlvbnMpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3JlLWluZm8tcG9ja2V0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3JlLWluZm9ybWF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dGhpcy5wb2NrZXREcmF3ZXJSZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge21heUhhdmVJbmZlcnJlZFBlcnNvbmFsaXphdGlvbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2std3JhcHBlclwiIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5mZXJyZWQtcGVyc29uYWxpemF0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbWl6ZS1tZW51LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcG9ja2V0RW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dJbmZlcnJlZFBlcnNvbmFsaXphdGlvbkVuYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmVmZXJlbmNlU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wcmVmZXJlbmNlPVwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLnBlcnNvbmFsaXphdGlvbi5pbmZlcnJlZC51c2VyLmVuYWJsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1ldmVudFNvdXJjZT1cIklORkVSUkVEX1BFUlNPTkFMSVpBVElPTlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbWl6ZS1tZW51LWNoZWNrYm94LWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJpbmZlcnJlZC1wZXJzb25hbGl6YXRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlY29tbWVuZGF0aW9ucyBpbmZlcnJlZCBmcm9tIHlvdXIgYWN0aXZpdHkgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlIGZlZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWF5SGF2ZVRvcGljU2VjdGlvbnMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbnNNZ210UGFuZWwgZXhpdEV2ZW50RmlyZWQ9e2V4aXRFdmVudEZpcmVkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L21vei10b2dnbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXZpZGVyXCIgcm9sZT1cInNlcGFyYXRvclwiPjwvc3Bhbj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGlkPVwic2V0dGluZ3MtbGlua1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJleHRlcm5hbC1saW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5QcmVmZXJlbmNlc31cbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tc2V0dGluZ3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgQ29udGVudFNlY3Rpb24gfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9DdXN0b21pemVNZW51L0NvbnRlbnRTZWN0aW9uL0NvbnRlbnRTZWN0aW9uXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2hhZG93XG5pbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIjtcblxuZXhwb3J0IGNsYXNzIF9DdXN0b21pemVNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25FbnRlcmVkID0gdGhpcy5vbkVudGVyZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRXhpdGVkID0gdGhpcy5vbkV4aXRlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleGl0RXZlbnRGaXJlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uRW50ZXJlZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXhpdEV2ZW50RmlyZWQ6IGZhbHNlIH0pO1xuICAgIGlmICh0aGlzLmNsb3NlQnV0dG9uKSB7XG4gICAgICB0aGlzLmNsb3NlQnV0dG9uLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgb25FeGl0ZWQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4aXRFdmVudEZpcmVkOiB0cnVlIH0pO1xuICAgIGlmICh0aGlzLm9wZW5CdXR0b24pIHtcbiAgICAgIHRoaXMub3BlbkJ1dHRvbi5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHNwYW4+XG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgICAgdGltZW91dD17MzAwfVxuICAgICAgICAgIGNsYXNzTmFtZXM9XCJwZXJzb25hbGl6ZS1hbmltYXRlXCJcbiAgICAgICAgICBpbj17IXRoaXMucHJvcHMuc2hvd2luZ31cbiAgICAgICAgICBhcHBlYXI9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJzb25hbGl6ZS1idXR0b25cIlxuICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWN1c3RvbWl6ZS1wYW5lbC1pY29uLWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uT3BlbigpfVxuICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IHtcbiAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uT3BlbigpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtjID0+ICh0aGlzLm9wZW5CdXR0b24gPSBjKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgICAgc3JjPVwiY2hyb21lOi8vZ2xvYmFsL3NraW4vaWNvbnMvZWRpdC1vdXRsaW5lLnN2Z1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxsYWJlbCBkYXRhLWwxMG4taWQ9XCJuZXd0YWItY3VzdG9taXplLXBhbmVsLWljb24tYnV0dG9uLWxhYmVsXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxuICAgICAgICAgIHRpbWVvdXQ9ezI1MH1cbiAgICAgICAgICBjbGFzc05hbWVzPVwiY3VzdG9taXplLWFuaW1hdGVcIlxuICAgICAgICAgIGluPXt0aGlzLnByb3BzLnNob3dpbmd9XG4gICAgICAgICAgb25FbnRlcmVkPXt0aGlzLm9uRW50ZXJlZH1cbiAgICAgICAgICBvbkV4aXRlZD17dGhpcy5vbkV4aXRlZH1cbiAgICAgICAgICBhcHBlYXI9e3RydWV9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b21pemUtbWVudVwiXG4gICAgICAgICAgICByb2xlPVwiZGlhbG9nXCJcbiAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1zZXR0aW5ncy1kaWFsb2ctbGFiZWxcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPG1vei1idXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xvc2UoKX1cbiAgICAgICAgICAgICAgICBpZD1cImNsb3NlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImljb24gZ2hvc3RcIlxuICAgICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1jdXN0b20tY2xvc2UtbWVudS1idXR0b25cIlxuICAgICAgICAgICAgICAgIGljb25zcmM9XCJjaHJvbWU6Ly9nbG9iYWwvc2tpbi9pY29ucy9jbG9zZS5zdmdcIlxuICAgICAgICAgICAgICAgIHJlZj17YyA9PiAodGhpcy5jbG9zZUJ1dHRvbiA9IGMpfVxuICAgICAgICAgICAgICA+PC9tb3otYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q29udGVudFNlY3Rpb25cbiAgICAgICAgICAgICAgb3BlblByZWZlcmVuY2VzPXt0aGlzLnByb3BzLm9wZW5QcmVmZXJlbmNlc31cbiAgICAgICAgICAgICAgc2V0UHJlZj17dGhpcy5wcm9wcy5zZXRQcmVmfVxuICAgICAgICAgICAgICBlbmFibGVkU2VjdGlvbnM9e3RoaXMucHJvcHMuZW5hYmxlZFNlY3Rpb25zfVxuICAgICAgICAgICAgICBlbmFibGVkV2lkZ2V0cz17dGhpcy5wcm9wcy5lbmFibGVkV2lkZ2V0c31cbiAgICAgICAgICAgICAgd2FsbHBhcGVyc0VuYWJsZWQ9e3RoaXMucHJvcHMud2FsbHBhcGVyc0VuYWJsZWR9XG4gICAgICAgICAgICAgIGFjdGl2ZVdhbGxwYXBlcj17dGhpcy5wcm9wcy5hY3RpdmVXYWxscGFwZXJ9XG4gICAgICAgICAgICAgIHBvY2tldFJlZ2lvbj17dGhpcy5wcm9wcy5wb2NrZXRSZWdpb259XG4gICAgICAgICAgICAgIG1heUhhdmVUb3BpY1NlY3Rpb25zPXt0aGlzLnByb3BzLm1heUhhdmVUb3BpY1NlY3Rpb25zfVxuICAgICAgICAgICAgICBtYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb249e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgbWF5SGF2ZVdlYXRoZXI9e3RoaXMucHJvcHMubWF5SGF2ZVdlYXRoZXJ9XG4gICAgICAgICAgICAgIG1heUhhdmVUcmVuZGluZ1NlYXJjaD17dGhpcy5wcm9wcy5tYXlIYXZlVHJlbmRpbmdTZWFyY2h9XG4gICAgICAgICAgICAgIG1heUhhdmVXaWRnZXRzPXt0aGlzLnByb3BzLm1heUhhdmVXaWRnZXRzfVxuICAgICAgICAgICAgICBtYXlIYXZlVGltZXJXaWRnZXQ9e3RoaXMucHJvcHMubWF5SGF2ZVRpbWVyV2lkZ2V0fVxuICAgICAgICAgICAgICBtYXlIYXZlTGlzdHNXaWRnZXQ9e3RoaXMucHJvcHMubWF5SGF2ZUxpc3RzV2lkZ2V0fVxuICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICAgICAgZXhpdEV2ZW50RmlyZWQ9e3RoaXMuc3RhdGUuZXhpdEV2ZW50RmlyZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ3VzdG9taXplTWVudSA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgRGlzY292ZXJ5U3RyZWFtOiBzdGF0ZS5EaXNjb3ZlcnlTdHJlYW0sXG59KSkoX0N1c3RvbWl6ZU1lbnUpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuZXhwb3J0IGNvbnN0IElTX05FV1RBQiA9XG4gIGdsb2JhbFRoaXMuZG9jdW1lbnQgJiYgZ2xvYmFsVGhpcy5kb2N1bWVudC5kb2N1bWVudFVSSSA9PT0gXCJhYm91dDpuZXd0YWJcIjtcbmV4cG9ydCBjb25zdCBORVdUQUJfREFSS19USEVNRSA9IHtcbiAgbnRwX2JhY2tncm91bmQ6IHtcbiAgICByOiA0MixcbiAgICBnOiA0MixcbiAgICBiOiA0NixcbiAgICBhOiAxLFxuICB9LFxuICBudHBfY2FyZF9iYWNrZ3JvdW5kOiB7XG4gICAgcjogNjYsXG4gICAgZzogNjUsXG4gICAgYjogNzcsXG4gICAgYTogMSxcbiAgfSxcbiAgbnRwX3RleHQ6IHtcbiAgICByOiAyNDksXG4gICAgZzogMjQ5LFxuICAgIGI6IDI1MCxcbiAgICBhOiAxLFxuICB9LFxuICBzaWRlYmFyOiB7XG4gICAgcjogNTYsXG4gICAgZzogNTYsXG4gICAgYjogNjEsXG4gICAgYTogMSxcbiAgfSxcbiAgc2lkZWJhcl90ZXh0OiB7XG4gICAgcjogMjQ5LFxuICAgIGc6IDI0OSxcbiAgICBiOiAyNTAsXG4gICAgYTogMSxcbiAgfSxcbn07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cImxvZ28tYW5kLXdvcmRtYXJrLXdyYXBwZXJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwibG9nby1hbmQtd29yZG1hcmtcIlxuICAgICAgICByb2xlPVwiaW1nXCJcbiAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWxvZ28tYW5kLXdvcmRtYXJrXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JkbWFya1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2gxPlxuICApO1xufVxuXG5leHBvcnQgeyBMb2dvIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBTYWZlQW5jaG9yIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIC8vIFVzZSBkaXNwYXRjaCBpbnN0ZWFkIG9mIG5vcm1hbCBsaW5rIGNsaWNrIGJlaGF2aW9yIHRvIGluY2x1ZGUgcmVmZXJyZXJcbiAgICBpZiAodGhpcy5wcm9wcy5kaXNwYXRjaCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHsgYWx0S2V5LCBidXR0b24sIGN0cmxLZXksIG1ldGFLZXksIHNoaWZ0S2V5IH0gPSBldmVudDtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0Lk9QRU5fTElOSyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBldmVudDogeyBhbHRLZXksIGJ1dHRvbiwgY3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXkgfSxcbiAgICAgICAgICAgIHJlZmVycmVyOlxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnJlZmVycmVyIHx8IFwiaHR0cHM6Ly9nZXRwb2NrZXQuY29tL3JlY29tbWVuZGF0aW9uc1wiLFxuICAgICAgICAgICAgLy8gVXNlIHRoZSBhbmNob3IncyB1cmwsIHdoaWNoIGNvdWxkIGhhdmUgYmVlbiBjbGVhbmVkIHVwXG4gICAgICAgICAgICB1cmw6IGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZixcbiAgICAgICAgICAgIGlzX3Nwb25zb3JlZDogdGhpcy5wcm9wcy5pc1Nwb25zb3JlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBQcm9wYWdhdGUgZXZlbnQgaWYgdGhlcmUncyBhIGhhbmRsZXJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxpbmtDbGljaykge1xuICAgICAgdGhpcy5wcm9wcy5vbkxpbmtDbGljayhldmVudCk7XG4gICAgfVxuICB9XG5cbiAgc2FmZVVSSSh1cmwpIHtcbiAgICBsZXQgcHJvdG9jb2wgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICBwcm90b2NvbCA9IG5ldyBVUkwodXJsKS5wcm90b2NvbDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICBjb25zdCBpc0FsbG93ZWQgPSBbXCJodHRwOlwiLCBcImh0dHBzOlwiXS5pbmNsdWRlcyhwcm90b2NvbCk7XG4gICAgaWYgKCFpc0FsbG93ZWQpIHtcbiAgICAgIGNvbnNvbGUud2FybihgJHt1cmx9IGlzIG5vdCBhbGxvd2VkIGZvciBhbmNob3IgdGFyZ2V0cy5gKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVybCwgY2xhc3NOYW1lLCB0aXRsZSwgaXNTcG9uc29yZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgYW5jaG9yID0gKFxuICAgICAgPGFcbiAgICAgICAgaHJlZj17dGhpcy5zYWZlVVJJKHVybCl9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgZGF0YS1pcy1zcG9uc29yZWQtbGluaz17ISFpc1Nwb25zb3JlZH1cbiAgICAgICAgey4uLih0aGlzLnByb3BzLnRhYkluZGV4ID09PSAwIHx8IHRoaXMucHJvcHMudGFiSW5kZXhcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcmVmOiB0aGlzLnByb3BzLnNldFJlZixcbiAgICAgICAgICAgICAgdGFiSW5kZXg6IHRoaXMucHJvcHMudGFiSW5kZXgsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSl9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9hPlxuICAgICk7XG5cbiAgICByZXR1cm4gYW5jaG9yO1xuICB9XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhpZGVDb250ZXh0ID0gdGhpcy5oaWRlQ29udGV4dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TaG93ID0gdGhpcy5vblNob3cuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhpZGVDb250ZXh0KCkge1xuICAgIHRoaXMucHJvcHMub25VcGRhdGUoZmFsc2UpO1xuICB9XG5cbiAgb25TaG93KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2hvdykge1xuICAgICAgdGhpcy5wcm9wcy5vblNob3coKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLm9uU2hvdygpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oaWRlQ29udGV4dCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBnbG9iYWxUaGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhpZGVDb250ZXh0KTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBFYXQgYWxsIGNsaWNrcyBvbiB0aGUgY29udGV4dCBtZW51IHNvIHRoZXkgZG9uJ3QgYnViYmxlIHVwIHRvIHdpbmRvdy5cbiAgICAvLyBUaGlzIHByZXZlbnRzIHRoZSBjb250ZXh0IG1lbnUgZnJvbSBjbG9zaW5nIHdoZW4gY2xpY2tpbmcgZGlzYWJsZWQgaXRlbXNcbiAgICAvLyBvciB0aGUgc2VwYXJhdG9ycy5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBEaXNhYmxpbmcgZm9jdXMgb24gdGhlIG1lbnUgc3BhbiBhbGxvd3MgdGhlIGZpcnN0IHRhYiB0byBmb2N1cyBvbiB0aGUgZmlyc3QgbWVudSBpdGVtIGluc3RlYWQgb2YgdGhlIHdyYXBwZXIuXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9pbnRlcmFjdGl2ZS1zdXBwb3J0cy1mb2N1c1xuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dC1tZW51XCI+XG4gICAgICAgIDx1bFxuICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uQ2xpY2t9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dC1tZW51LWxpc3RcIlxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT5cbiAgICAgICAgICAgIG9wdGlvbi50eXBlID09PSBcInNlcGFyYXRvclwiID8gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIiByb2xlPVwic2VwYXJhdG9yXCIgLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIG9wdGlvbi50eXBlICE9PSBcImVtcHR5XCIgJiYgKFxuICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudUl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbj17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgaGlkZUNvbnRleHQ9e3RoaXMuaGlkZUNvbnRleHR9XG4gICAgICAgICAgICAgICAgICBrZXlib2FyZEFjY2Vzcz17dGhpcy5wcm9wcy5rZXlib2FyZEFjY2Vzc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBfQ29udGV4dE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uS2V5VXAgPSB0aGlzLm9uS2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzRmlyc3QgPSB0aGlzLmZvY3VzRmlyc3QuYmluZCh0aGlzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhpZGVDb250ZXh0KCk7XG4gICAgdGhpcy5wcm9wcy5vcHRpb24ub25DbGljayhldmVudCk7XG4gIH1cblxuICAvLyBGb2N1cyB0aGUgZmlyc3QgbWVudSBpdGVtIGlmIHRoZSBtZW51IHdhcyBhY2Nlc3NlZCB2aWEgdGhlIGtleWJvYXJkLlxuICBmb2N1c0ZpcnN0KGJ1dHRvbikge1xuICAgIGlmICh0aGlzLnByb3BzLmtleWJvYXJkQWNjZXNzICYmIGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVGhpcyBzZWxlY3RzIHRoZSBjb3JyZWN0IG5vZGUgYmFzZWQgb24gdGhlIGtleSBwcmVzc2VkXG4gIGZvY3VzU2libGluZyh0YXJnZXQsIGtleSkge1xuICAgIGNvbnN0IHsgcGFyZW50Tm9kZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IGNsb3Nlc3RTaWJsaW5nU2VsZWN0b3IgPVxuICAgICAga2V5ID09PSBcIkFycm93VXBcIiA/IFwicHJldmlvdXNTaWJsaW5nXCIgOiBcIm5leHRTaWJsaW5nXCI7XG4gICAgaWYgKCFwYXJlbnROb2RlW2Nsb3Nlc3RTaWJsaW5nU2VsZWN0b3JdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwYXJlbnROb2RlW2Nsb3Nlc3RTaWJsaW5nU2VsZWN0b3JdLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICBwYXJlbnROb2RlW2Nsb3Nlc3RTaWJsaW5nU2VsZWN0b3JdLmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudE5vZGVbY2xvc2VzdFNpYmxpbmdTZWxlY3Rvcl1bXG4gICAgICAgIGNsb3Nlc3RTaWJsaW5nU2VsZWN0b3JcbiAgICAgIF0uZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZXZlbnQpIHtcbiAgICBjb25zdCB7IG9wdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIlRhYlwiOlxuICAgICAgICAvLyB0YWIgZ29lcyBkb3duIGluIGNvbnRleHQgbWVudSwgc2hpZnQgKyB0YWIgZ29lcyB1cCBpbiBjb250ZXh0IG1lbnVcbiAgICAgICAgLy8gaWYgd2UncmUgb24gdGhlIGxhc3QgaXRlbSwgb25lIG1vcmUgdGFiIHdpbGwgY2xvc2UgdGhlIGNvbnRleHQgbWVudVxuICAgICAgICAvLyBzaW1pbGFybHksIGlmIHdlJ3JlIG9uIHRoZSBmaXJzdCBpdGVtLCBvbmUgbW9yZSBzaGlmdCArIHRhYiB3aWxsIGNsb3NlIGl0XG4gICAgICAgIGlmIChcbiAgICAgICAgICAoZXZlbnQuc2hpZnRLZXkgJiYgb3B0aW9uLmZpcnN0KSB8fFxuICAgICAgICAgICghZXZlbnQuc2hpZnRLZXkgJiYgb3B0aW9uLmxhc3QpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMucHJvcHMuaGlkZUNvbnRleHQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZm9jdXNTaWJsaW5nKGV2ZW50LnRhcmdldCwgZXZlbnQua2V5KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRW50ZXJcIjpcbiAgICAgIGNhc2UgXCIgXCI6XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuaGlkZUNvbnRleHQoKTtcbiAgICAgICAgb3B0aW9uLm9uQ2xpY2soKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiRXNjYXBlXCI6XG4gICAgICAgIHRoaXMucHJvcHMuaGlkZUNvbnRleHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gUHJldmVudHMgdGhlIGRlZmF1bHQgYmVoYXZpb3Igb2Ygc3BhY2ViYXJcbiAgLy8gc2Nyb2xsaW5nIHRoZSBwYWdlICYgYXV0by10cmlnZ2VyaW5nIGJ1dHRvbnMuXG4gIG9uS2V5VXAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIiBcIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb24gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gW29wdGlvbi5kaXNhYmxlZCA/IFwiZGlzYWJsZWRcIiA6IFwiXCJdLmpvaW4oXCIgXCIpO1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzTmFtZT1cImNvbnRleHQtbWVudS1pdGVtXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICByb2xlPVwibWVudWl0ZW1cIlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgIG9uS2V5VXA9e3RoaXMub25LZXlVcH1cbiAgICAgICAgICByZWY9e29wdGlvbi5maXJzdCA/IHRoaXMuZm9jdXNGaXJzdCA6IG51bGx9XG4gICAgICAgICAgYXJpYS1oYXNwb3B1cD17XG4gICAgICAgICAgICBvcHRpb24uaWQgPT09IFwibmV3dGFiLW1lbnUtZWRpdC10b3BzaXRlc1wiID8gXCJkaWFsb2dcIiA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBkYXRhLWwxMG4taWQ9e29wdGlvbi5zdHJpbmdfaWQgfHwgb3B0aW9uLmlkfSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgQ29udGV4dE1lbnVJdGVtID0gY29ubmVjdChzdGF0ZSA9PiAoe1xuICBQcmVmczogc3RhdGUuUHJlZnMsXG59KSkoX0NvbnRleHRNZW51SXRlbSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQge1xuICBhY3Rpb25DcmVhdG9ycyBhcyBhYyxcbiAgYWN0aW9uVHlwZXMgYXMgYXQsXG59IGZyb20gXCIuLi8uLi9jb21tb24vQWN0aW9ucy5tanNcIjtcblxuY29uc3QgX09wZW5JblByaXZhdGVXaW5kb3cgPSBzaXRlID0+ICh7XG4gIGlkOiBcIm5ld3RhYi1tZW51LW9wZW4tbmV3LXByaXZhdGUtd2luZG93XCIsXG4gIGljb246IFwibmV3LXdpbmRvdy1wcml2YXRlXCIsXG4gIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgdHlwZTogYXQuT1BFTl9QUklWQVRFX1dJTkRPVyxcbiAgICBkYXRhOiB7XG4gICAgICB1cmw6IHNpdGUudXJsLFxuICAgICAgcmVmZXJyZXI6IHNpdGUucmVmZXJyZXIsXG4gICAgICBldmVudF9zb3VyY2U6IFwiQ09OVEVYVF9NRU5VXCIsXG4gICAgfSxcbiAgfSksXG4gIHVzZXJFdmVudDogXCJPUEVOX1BSSVZBVEVfV0lORE9XXCIsXG59KTtcblxuLyoqXG4gKiBMaXN0IG9mIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBpdGVtcyB0aGF0IGNhbiBiZSBpbmNsdWRlZCBhcyBtZW51IG9wdGlvbnMgaW4gYVxuICogTGlua01lbnUuIEFsbCBmdW5jdGlvbnMgdGFrZSB0aGUgc2l0ZSBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyLCBhbmQgb3B0aW9uYWxseVxuICogdGhlIGluZGV4IG9mIHRoZSBzaXRlLlxuICovXG5leHBvcnQgY29uc3QgTGlua01lbnVPcHRpb25zID0ge1xuICBTZXBhcmF0b3I6ICgpID0+ICh7IHR5cGU6IFwic2VwYXJhdG9yXCIgfSksXG4gIEVtcHR5SXRlbTogKCkgPT4gKHsgdHlwZTogXCJlbXB0eVwiIH0pLFxuICBTaG93UHJpdmFjeUluZm86ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtc2hvdy1wcml2YWN5LWluZm9cIixcbiAgICBpY29uOiBcImluZm9cIixcbiAgICBhY3Rpb246IHtcbiAgICAgIHR5cGU6IGF0LlNIT1dfUFJJVkFDWV9JTkZPLFxuICAgIH0sXG4gICAgdXNlckV2ZW50OiBcIlNIT1dfUFJJVkFDWV9JTkZPXCIsXG4gIH0pLFxuICBBYm91dFNwb25zb3JlZDogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXNob3ctcHJpdmFjeS1pbmZvXCIsXG4gICAgaWNvbjogXCJpbmZvXCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LkFCT1VUX1NQT05TT1JFRF9UT1BfU0lURVMsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGFkdmVydGlzZXJfbmFtZTogKHNpdGUubGFiZWwgfHwgc2l0ZS5ob3N0bmFtZSkudG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgcG9zaXRpb246IHNpdGUuc3BvbnNvcmVkX3Bvc2l0aW9uLFxuICAgICAgICB0aWxlX2lkOiBzaXRlLnNwb25zb3JlZF90aWxlX2lkLFxuICAgICAgICBibG9ja19rZXk6IHNpdGUuYmxvY2tfa2V5LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiVE9QU0lURV9TUE9OU09SX0lORk9cIixcbiAgfSksXG4gIFJlbW92ZUJvb2ttYXJrOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtcmVtb3ZlLWJvb2ttYXJrXCIsXG4gICAgaWNvbjogXCJib29rbWFyay1hZGRlZFwiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5ERUxFVEVfQk9PS01BUktfQllfSUQsXG4gICAgICBkYXRhOiBzaXRlLmJvb2ttYXJrR3VpZCxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiQk9PS01BUktfREVMRVRFXCIsXG4gIH0pLFxuICBBZGRCb29rbWFyazogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWJvb2ttYXJrXCIsXG4gICAgaWNvbjogXCJib29rbWFyay1ob2xsb3dcIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuQk9PS01BUktfVVJMLFxuICAgICAgZGF0YTogeyB1cmw6IHNpdGUudXJsLCB0aXRsZTogc2l0ZS50aXRsZSwgdHlwZTogc2l0ZS50eXBlIH0sXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIkJPT0tNQVJLX0FERFwiLFxuICB9KSxcbiAgT3BlbkluTmV3V2luZG93OiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtb3Blbi1uZXctd2luZG93XCIsXG4gICAgaWNvbjogXCJuZXctd2luZG93XCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0Lk9QRU5fTkVXX1dJTkRPVyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY2FyZF90eXBlOiBzaXRlLmNhcmRfdHlwZSxcbiAgICAgICAgcmVmZXJyZXI6IHNpdGUucmVmZXJyZXIsXG4gICAgICAgIHR5cGVkQm9udXM6IHNpdGUudHlwZWRCb251cyxcbiAgICAgICAgdXJsOiBzaXRlLnVybCxcbiAgICAgICAgaXNfc3BvbnNvcmVkOiAhIXNpdGUuc3BvbnNvcmVkX3RpbGVfaWQsXG4gICAgICAgIGV2ZW50X3NvdXJjZTogXCJDT05URVhUX01FTlVcIixcbiAgICAgICAgdG9waWM6IHNpdGUudG9waWMsXG4gICAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcDogc2l0ZS5maXJzdFZpc2libGVUaW1lc3RhbXAsXG4gICAgICAgIHRpbGVfaWQ6IHNpdGUudGlsZV9pZCxcbiAgICAgICAgcmVjb21tZW5kYXRpb25faWQ6IHNpdGUucmVjb21tZW5kYXRpb25faWQsXG4gICAgICAgIHNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZDogc2l0ZS5zY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQsXG4gICAgICAgIGNvcnB1c19pdGVtX2lkOiBzaXRlLmNvcnB1c19pdGVtX2lkLFxuICAgICAgICByZWNlaXZlZF9yYW5rOiBzaXRlLnJlY2VpdmVkX3JhbmssXG4gICAgICAgIHJlY29tbWVuZGVkX2F0OiBzaXRlLnJlY29tbWVuZGVkX2F0LFxuICAgICAgICBmb3JtYXQ6IHNpdGUuZm9ybWF0LFxuICAgICAgICAuLi4oc2l0ZS5mbGlnaHRfaWQgPyB7IGZsaWdodF9pZDogc2l0ZS5mbGlnaHRfaWQgfSA6IHt9KSxcbiAgICAgICAgaXNfcG9ja2V0X2NhcmQ6IHNpdGUudHlwZSA9PT0gXCJDYXJkR3JpZFwiLFxuICAgICAgICBpc19saXN0X2NhcmQ6IHNpdGUuaXNfbGlzdF9jYXJkLFxuICAgICAgICAuLi4oc2l0ZS5zZWN0aW9uXG4gICAgICAgICAgPyB7XG4gICAgICAgICAgICAgIHNlY3Rpb246IHNpdGUuc2VjdGlvbixcbiAgICAgICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogc2l0ZS5zZWN0aW9uX3Bvc2l0aW9uLFxuICAgICAgICAgICAgICBpc19zZWN0aW9uX2ZvbGxvd2VkOiBzaXRlLmlzX3NlY3Rpb25fZm9sbG93ZWQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgOiB7fSksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHVzZXJFdmVudDogXCJPUEVOX05FV19XSU5ET1dcIixcbiAgfSksXG5cbiAgLy8gVGhpcyBibG9ja3MgdGhlIHVybCBmb3IgcmVndWxhciBzdG9yaWVzLFxuICAvLyBidXQgYWxzbyBzZW5kcyBhIG1lc3NhZ2UgdG8gRGlzY292ZXJ5U3RyZWFtIHdpdGggZmxpZ2h0X2lkLlxuICAvLyBJZiBEaXNjb3ZlcnlTdHJlYW0gc2VlcyB0aGlzIG1lc3NhZ2UgZm9yIGEgZmxpZ2h0X2lkXG4gIC8vIGl0IGFsc28gYmxvY2tzIGl0IG9uIHRoZSBmbGlnaHRfaWQuXG4gIEJsb2NrVXJsOiAoc2l0ZSwgaW5kZXgsIGV2ZW50U291cmNlKSA9PiB7XG4gICAgcmV0dXJuIExpbmtNZW51T3B0aW9ucy5CbG9ja1VybHMoW3NpdGVdLCBpbmRleCwgZXZlbnRTb3VyY2UpO1xuICB9LFxuICAvLyBTYW1lIGFzIEJsb2NrVXJsLCBleGNlcHQgY2FuIHdvcmsgb24gYW4gYXJyYXkgb2Ygc2l0ZXMuXG4gIEJsb2NrVXJsczogKHRpbGVzLCBwb3MsIGV2ZW50U291cmNlKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWRpc21pc3NcIixcbiAgICBpY29uOiBcImRpc21pc3NcIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuQkxPQ0tfVVJMLFxuICAgICAgc291cmNlOiBldmVudFNvdXJjZSxcbiAgICAgIGRhdGE6IHRpbGVzLm1hcChzaXRlID0+ICh7XG4gICAgICAgIHVybDogc2l0ZS5vcmlnaW5hbF91cmwgfHwgc2l0ZS5vcGVuX3VybCB8fCBzaXRlLnVybCxcbiAgICAgICAgLy8gcG9ja2V0X2lkIGlzIG9ubHkgZm9yIHBvY2tldCBzdG9yaWVzIGJlaW5nIGluIGhpZ2hsaWdodHMsIGFuZCB0aGVuIGRpc21pc3NlZC5cbiAgICAgICAgcG9ja2V0X2lkOiBzaXRlLnBvY2tldF9pZCxcbiAgICAgICAgdGlsZV9pZDogc2l0ZS50aWxlX2lkLFxuICAgICAgICAuLi4oc2l0ZS5ibG9ja19rZXkgPyB7IGJsb2NrX2tleTogc2l0ZS5ibG9ja19rZXkgfSA6IHt9KSxcbiAgICAgICAgcmVjb21tZW5kYXRpb25faWQ6IHNpdGUucmVjb21tZW5kYXRpb25faWQsXG4gICAgICAgIHNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZDogc2l0ZS5zY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQsXG4gICAgICAgIGNvcnB1c19pdGVtX2lkOiBzaXRlLmNvcnB1c19pdGVtX2lkLFxuICAgICAgICByZWNlaXZlZF9yYW5rOiBzaXRlLnJlY2VpdmVkX3JhbmssXG4gICAgICAgIHJlY29tbWVuZGVkX2F0OiBzaXRlLnJlY29tbWVuZGVkX2F0LFxuICAgICAgICAvLyB1c2VkIGJ5IFBsYWNlc0ZlZWQgYW5kIFRvcFNpdGVzRmVlZCBmb3Igc3BvbnNvcmVkIHRvcCBzaXRlcyBibG9ja2luZy5cbiAgICAgICAgaXNTcG9uc29yZWRUb3BTaXRlOiBzaXRlLnNwb25zb3JlZF9wb3NpdGlvbixcbiAgICAgICAgdHlwZTogc2l0ZS50eXBlLFxuICAgICAgICBjYXJkX3R5cGU6IHNpdGUuY2FyZF90eXBlLFxuICAgICAgICAuLi4oc2l0ZS5zaGltICYmIHNpdGUuc2hpbS5kZWxldGUgPyB7IHNoaW06IHNpdGUuc2hpbS5kZWxldGUgfSA6IHt9KSxcbiAgICAgICAgLi4uKHNpdGUuZmxpZ2h0X2lkID8geyBmbGlnaHRfaWQ6IHNpdGUuZmxpZ2h0X2lkIH0gOiB7fSksXG4gICAgICAgIC8vIElmIG5vdCBzcG9uc29yZWQsIGhvc3RuYW1lIGNvdWxkIGJlIGFueXRoaW5nIChDYXQzIERhdGEhKS5cbiAgICAgICAgLy8gU28gb25seSBwdXQgaW4gYWR2ZXJ0aXNlcl9uYW1lIGZvciBzcG9uc29yZWQgdG9wc2l0ZXMuXG4gICAgICAgIC4uLihzaXRlLnNwb25zb3JlZF9wb3NpdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBhZHZlcnRpc2VyX25hbWU6IChcbiAgICAgICAgICAgICAgICBzaXRlLmxhYmVsIHx8IHNpdGUuaG9zdG5hbWVcbiAgICAgICAgICAgICAgKT8udG9Mb2NhbGVMb3dlckNhc2UoKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IHt9KSxcbiAgICAgICAgcG9zaXRpb246IHBvcyxcbiAgICAgICAgLi4uKHNpdGUuc3BvbnNvcmVkX3RpbGVfaWQgPyB7IHRpbGVfaWQ6IHNpdGUuc3BvbnNvcmVkX3RpbGVfaWQgfSA6IHt9KSxcbiAgICAgICAgaXNfcG9ja2V0X2NhcmQ6IHNpdGUudHlwZSA9PT0gXCJDYXJkR3JpZFwiLFxuICAgICAgICBpc19saXN0X2NhcmQ6IHNpdGUuaXNfbGlzdF9jYXJkLFxuICAgICAgICAuLi4oc2l0ZS5mb3JtYXQgPyB7IGZvcm1hdDogc2l0ZS5mb3JtYXQgfSA6IHt9KSxcbiAgICAgICAgLi4uKHNpdGUuc2VjdGlvblxuICAgICAgICAgID8ge1xuICAgICAgICAgICAgICBzZWN0aW9uOiBzaXRlLnNlY3Rpb24sXG4gICAgICAgICAgICAgIHNlY3Rpb25fcG9zaXRpb246IHNpdGUuc2VjdGlvbl9wb3NpdGlvbixcbiAgICAgICAgICAgICAgaXNfc2VjdGlvbl9mb2xsb3dlZDogc2l0ZS5pc19zZWN0aW9uX2ZvbGxvd2VkLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDoge30pLFxuICAgICAgfSkpLFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLkltcHJlc3Npb25TdGF0cyh7XG4gICAgICBzb3VyY2U6IGV2ZW50U291cmNlLFxuICAgICAgYmxvY2s6IDAsXG4gICAgICB0aWxlczogdGlsZXMubWFwKChzaXRlLCBpbmRleCkgPT4gKHtcbiAgICAgICAgaWQ6IHNpdGUuZ3VpZCxcbiAgICAgICAgcG9zOiBwb3MgKyBpbmRleCxcbiAgICAgICAgLi4uKHNpdGUuc2hpbSAmJiBzaXRlLnNoaW0uZGVsZXRlID8geyBzaGltOiBzaXRlLnNoaW0uZGVsZXRlIH0gOiB7fSksXG4gICAgICB9KSksXG4gICAgfSksXG4gICAgdXNlckV2ZW50OiBcIkJMT0NLXCIsXG4gIH0pLFxuXG4gIC8vIFRoaXMgaXMgdGhlIFwiRGlzbWlzc1wiIGFjdGlvbiBmb3IgbGVhZGVyYm9hcmQvYmlsbGJvYXJkIGFkcy5cbiAgQmxvY2tBZFVybDogKHNpdGUsIHBvcywgZXZlbnRTb3VyY2UpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtZGlzbWlzc1wiLFxuICAgIGljb246IFwiZGlzbWlzc1wiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5CTE9DS19VUkwsXG4gICAgICBkYXRhOiBbc2l0ZV0sXG4gICAgfSksXG4gICAgaW1wcmVzc2lvbjogYWMuSW1wcmVzc2lvblN0YXRzKHtcbiAgICAgIHNvdXJjZTogZXZlbnRTb3VyY2UsXG4gICAgICBibG9jazogMCxcbiAgICAgIHRpbGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogc2l0ZS5ndWlkLFxuICAgICAgICAgIHBvcyxcbiAgICAgICAgICAuLi4oc2l0ZS5zaGltICYmIHNpdGUuc2hpbS5zYXZlID8geyBzaGltOiBzaXRlLnNoaW0uc2F2ZSB9IDoge30pLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiQkxPQ0tcIixcbiAgfSksXG5cbiAgLy8gVGhpcyBpcyBhbiBvcHRpb24gZm9yIHdlYiBleHRlbnRpb25zIHdoaWNoIHdpbGwgcmVzdWx0IGluIHJlbW92ZSBpdGVtcyBmcm9tXG4gIC8vIG1lbW9yeSBhbmQgbm90aWZ5IHRoZSB3ZWIgZXh0ZW5pb24sIHJhdGhlciB0aGFuIHVzaW5nIHRoZSBidWlsdC1pbiBibG9jayBsaXN0LlxuICBXZWJFeHREaXNtaXNzOiAoc2l0ZSwgaW5kZXgsIGV2ZW50U291cmNlKSA9PiAoe1xuICAgIGlkOiBcIm1lbnVfYWN0aW9uX3dlYmV4dF9kaXNtaXNzXCIsXG4gICAgc3RyaW5nX2lkOiBcIm5ld3RhYi1tZW51LWRpc21pc3NcIixcbiAgICBpY29uOiBcImRpc21pc3NcIixcbiAgICBhY3Rpb246IGFjLldlYkV4dEV2ZW50KGF0LldFQkVYVF9ESVNNSVNTLCB7XG4gICAgICBzb3VyY2U6IGV2ZW50U291cmNlLFxuICAgICAgdXJsOiBzaXRlLnVybCxcbiAgICAgIGFjdGlvbl9wb3NpdGlvbjogaW5kZXgsXG4gICAgfSksXG4gIH0pLFxuICBEZWxldGVVcmw6IChzaXRlLCBpbmRleCwgZXZlbnRTb3VyY2UsIGlzRW5hYmxlZCwgc2l0ZUluZm8pID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtZGVsZXRlLWhpc3RvcnlcIixcbiAgICBpY29uOiBcImRlbGV0ZVwiLFxuICAgIGFjdGlvbjoge1xuICAgICAgdHlwZTogYXQuRElBTE9HX09QRU4sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9uQ29uZmlybTogW1xuICAgICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuREVMRVRFX0hJU1RPUllfVVJMLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB1cmw6IHNpdGUudXJsLFxuICAgICAgICAgICAgICBwb2NrZXRfaWQ6IHNpdGUucG9ja2V0X2lkLFxuICAgICAgICAgICAgICBmb3JjZUJsb2NrOiBzaXRlLmJvb2ttYXJrR3VpZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgYWMuVXNlckV2ZW50KFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAgeyBldmVudDogXCJERUxFVEVcIiwgc291cmNlOiBldmVudFNvdXJjZSwgYWN0aW9uX3Bvc2l0aW9uOiBpbmRleCB9LFxuICAgICAgICAgICAgICBzaXRlSW5mb1xuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgLy8gQWxzbyBicm9hZGNhc3QgdGhhdCB0aGlzIHVybCBoYXMgYmVlbiBkZWxldGVkIHNvIHRoYXRcbiAgICAgICAgICAvLyB0aGUgY29uZmlybWF0aW9uIGRpYWxvZyBrbm93cyBpdCBuZWVkcyB0byBkaXNhcHBlYXIgbm93LlxuICAgICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuRElBTE9HX0NMT1NFLFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBldmVudFNvdXJjZSxcbiAgICAgICAgYm9keV9zdHJpbmdfaWQ6IFtcbiAgICAgICAgICBcIm5ld3RhYi1jb25maXJtLWRlbGV0ZS1oaXN0b3J5LXAxXCIsXG4gICAgICAgICAgXCJuZXd0YWItY29uZmlybS1kZWxldGUtaGlzdG9yeS1wMlwiLFxuICAgICAgICBdLFxuICAgICAgICBjb25maXJtX2J1dHRvbl9zdHJpbmdfaWQ6IFwibmV3dGFiLXRvcHNpdGVzLWRlbGV0ZS1oaXN0b3J5LWJ1dHRvblwiLFxuICAgICAgICBjYW5jZWxfYnV0dG9uX3N0cmluZ19pZDogXCJuZXd0YWItdG9wc2l0ZXMtY2FuY2VsLWJ1dHRvblwiLFxuICAgICAgICBpY29uOiBcIm1vZGFsLWRlbGV0ZVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHVzZXJFdmVudDogXCJESUFMT0dfT1BFTlwiLFxuICB9KSxcbiAgU2hvd0ZpbGU6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1zaG93LWZpbGVcIixcbiAgICBpY29uOiBcInNlYXJjaFwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TSE9XX0RPV05MT0FEX0ZJTEUsXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgfSksXG4gIE9wZW5GaWxlOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtb3Blbi1maWxlXCIsXG4gICAgaWNvbjogXCJvcGVuLWZpbGVcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuT1BFTl9ET1dOTE9BRF9GSUxFLFxuICAgICAgZGF0YTogeyB1cmw6IHNpdGUudXJsIH0sXG4gICAgfSksXG4gIH0pLFxuICBDb3B5RG93bmxvYWRMaW5rOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtY29weS1kb3dubG9hZC1saW5rXCIsXG4gICAgaWNvbjogXCJjb3B5XCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LkNPUFlfRE9XTkxPQURfTElOSyxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnVybCB9LFxuICAgIH0pLFxuICB9KSxcbiAgR29Ub0Rvd25sb2FkUGFnZTogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWdvLXRvLWRvd25sb2FkLXBhZ2VcIixcbiAgICBpY29uOiBcImRvd25sb2FkXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0Lk9QRU5fTElOSyxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnJlZmVycmVyIH0sXG4gICAgfSksXG4gICAgZGlzYWJsZWQ6ICFzaXRlLnJlZmVycmVyLFxuICB9KSxcbiAgUmVtb3ZlRG93bmxvYWQ6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1yZW1vdmUtZG93bmxvYWRcIixcbiAgICBpY29uOiBcImRlbGV0ZVwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5SRU1PVkVfRE9XTkxPQURfRklMRSxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnVybCB9LFxuICAgIH0pLFxuICB9KSxcbiAgUGluVG9wU2l0ZTogKHNpdGUsIGluZGV4KSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXBpblwiLFxuICAgIGljb246IFwicGluXCIsXG4gICAgYWN0aW9uOiBhYy5BbHNvVG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlRPUF9TSVRFU19QSU4sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHNpdGUsXG4gICAgICAgIGluZGV4LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB1c2VyRXZlbnQ6IFwiUElOXCIsXG4gIH0pLFxuICBVbnBpblRvcFNpdGU6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS11bnBpblwiLFxuICAgIGljb246IFwidW5waW5cIixcbiAgICBhY3Rpb246IGFjLkFsc29Ub01haW4oe1xuICAgICAgdHlwZTogYXQuVE9QX1NJVEVTX1VOUElOLFxuICAgICAgZGF0YTogeyBzaXRlOiB7IHVybDogc2l0ZS51cmwgfSB9LFxuICAgIH0pLFxuICAgIHVzZXJFdmVudDogXCJVTlBJTlwiLFxuICB9KSxcbiAgRWRpdFRvcFNpdGU6IChzaXRlLCBpbmRleCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1lZGl0LXRvcHNpdGVzXCIsXG4gICAgaWNvbjogXCJlZGl0XCIsXG4gICAgYWN0aW9uOiB7XG4gICAgICB0eXBlOiBhdC5UT1BfU0lURVNfRURJVCxcbiAgICAgIGRhdGE6IHsgaW5kZXggfSxcbiAgICB9LFxuICB9KSxcbiAgQ2hlY2tCb29rbWFyazogc2l0ZSA9PlxuICAgIHNpdGUuYm9va21hcmtHdWlkXG4gICAgICA/IExpbmtNZW51T3B0aW9ucy5SZW1vdmVCb29rbWFyayhzaXRlKVxuICAgICAgOiBMaW5rTWVudU9wdGlvbnMuQWRkQm9va21hcmsoc2l0ZSksXG4gIENoZWNrUGluVG9wU2l0ZTogKHNpdGUsIGluZGV4KSA9PlxuICAgIHNpdGUuaXNQaW5uZWRcbiAgICAgID8gTGlua01lbnVPcHRpb25zLlVucGluVG9wU2l0ZShzaXRlKVxuICAgICAgOiBMaW5rTWVudU9wdGlvbnMuUGluVG9wU2l0ZShzaXRlLCBpbmRleCksXG4gIE9wZW5JblByaXZhdGVXaW5kb3c6IChzaXRlLCBpbmRleCwgZXZlbnRTb3VyY2UsIGlzRW5hYmxlZCkgPT5cbiAgICBpc0VuYWJsZWQgPyBfT3BlbkluUHJpdmF0ZVdpbmRvdyhzaXRlKSA6IExpbmtNZW51T3B0aW9ucy5FbXB0eUl0ZW0oKSxcbiAgQ2hhbmdlV2VhdGhlckxvY2F0aW9uOiAoKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi13ZWF0aGVyLW1lbnUtY2hhbmdlLWxvY2F0aW9uXCIsXG4gICAgYWN0aW9uOiBhYy5Ccm9hZGNhc3RUb0NvbnRlbnQoe1xuICAgICAgdHlwZTogYXQuV0VBVEhFUl9TRUFSQ0hfQUNUSVZFLFxuICAgICAgZGF0YTogdHJ1ZSxcbiAgICB9KSxcbiAgfSksXG4gIENoYW5nZVdlYXRoZXJEaXNwbGF5U2ltcGxlOiAoKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi13ZWF0aGVyLW1lbnUtY2hhbmdlLXdlYXRoZXItZGlzcGxheS1zaW1wbGVcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuU0VUX1BSRUYsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IFwid2VhdGhlci5kaXNwbGF5XCIsXG4gICAgICAgIHZhbHVlOiBcInNpbXBsZVwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIENoYW5nZVdlYXRoZXJEaXNwbGF5RGV0YWlsZWQ6ICgpID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLXdlYXRoZXItbWVudS1jaGFuZ2Utd2VhdGhlci1kaXNwbGF5LWRldGFpbGVkXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIndlYXRoZXIuZGlzcGxheVwiLFxuICAgICAgICB2YWx1ZTogXCJkZXRhaWxlZFwiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSksXG4gIENoYW5nZVRlbXBVbml0RmFocmVuaGVpdDogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWNoYW5nZS10ZW1wZXJhdHVyZS11bml0cy1mYWhyZW5oZWl0XCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiLFxuICAgICAgICB2YWx1ZTogXCJmXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbiAgQ2hhbmdlVGVtcFVuaXRDZWxzaXVzOiAoKSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi13ZWF0aGVyLW1lbnUtY2hhbmdlLXRlbXBlcmF0dXJlLXVuaXRzLWNlbHNpdXNcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuU0VUX1BSRUYsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IFwid2VhdGhlci50ZW1wZXJhdHVyZVVuaXRzXCIsXG4gICAgICAgIHZhbHVlOiBcImNcIixcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pLFxuICBIaWRlV2VhdGhlcjogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItd2VhdGhlci1tZW51LWhpZGUtd2VhdGhlclwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TRVRfUFJFRixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogXCJzaG93V2VhdGhlclwiLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbiAgT3BlbkxlYXJuTW9yZVVSTDogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi13ZWF0aGVyLW1lbnUtbGVhcm4tbW9yZVwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgfSksXG4gIEZha2VzcG90RGlzbWlzczogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1kaXNtaXNzXCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlNFVF9QUkVGLFxuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBcImRpc2NvdmVyeXN0cmVhbS5jb250ZXh0dWFsQ29udGVudC5mYWtlc3BvdC5lbmFibGVkXCIsXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgaW1wcmVzc2lvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5GQUtFU1BPVF9ESVNNSVNTLFxuICAgIH0pLFxuICB9KSxcbiAgQWJvdXRGYWtlc3BvdDogc2l0ZSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LWFib3V0LWZha2VzcG90XCIsXG4gICAgYWN0aW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0Lk9QRU5fTElOSyxcbiAgICAgIGRhdGE6IHsgdXJsOiBzaXRlLnVybCB9LFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuT1BFTl9BQk9VVF9GQUtFU1BPVCxcbiAgICB9KSxcbiAgfSksXG4gIFNlY3Rpb25CbG9jazogKHtcbiAgICBzZWN0aW9uUGVyc29uYWxpemF0aW9uLFxuICAgIHNlY3Rpb25LZXksXG4gICAgc2VjdGlvblBvc2l0aW9uLFxuICAgIHRpdGxlLFxuICB9KSA9PiAoe1xuICAgIGlkOiBcIm5ld3RhYi1tZW51LXNlY3Rpb24tYmxvY2tcIixcbiAgICBpY29uOiBcImRlbGV0ZVwiLFxuICAgIGFjdGlvbjoge1xuICAgICAgLy8gT3BlbiB0aGUgY29uZmlybWF0aW9uIGRpYWxvZyB0byBibG9jayBhIHNlY3Rpb24uXG4gICAgICB0eXBlOiBhdC5ESUFMT0dfT1BFTixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb25Db25maXJtOiBbXG4gICAgICAgICAgLy8gT25jZSB0aGUgdXNlciBjb25maXJtZWQgdGhlaXIgaW50ZW50aW9uIHRvIGJsb2NrIHRoaXMgc2VjdGlvbixcbiAgICAgICAgICAvLyB1cGRhdGUgdGhlaXIgcHJlZmVyZW5jZXMuXG4gICAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgICB0eXBlOiBhdC5TRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVQsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIC4uLnNlY3Rpb25QZXJzb25hbGl6YXRpb24sXG4gICAgICAgICAgICAgIFtzZWN0aW9uS2V5XToge1xuICAgICAgICAgICAgICAgIGlzQmxvY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0ZvbGxvd2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gVGVsZW1ldHJ5XG4gICAgICAgICAgYWMuT25seVRvTWFpbih7XG4gICAgICAgICAgICB0eXBlOiBhdC5CTE9DS19TRUNUSU9OLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBzZWN0aW9uOiBzZWN0aW9uS2V5LFxuICAgICAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiBzZWN0aW9uUG9zaXRpb24sXG4gICAgICAgICAgICAgIGV2ZW50X3NvdXJjZTogXCJDT05URVhUX01FTlVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gQWxzbyBicm9hZGNhc3QgdGhhdCB0aGlzIHNlY3Rpb24gaGFzIGJlZW4gYmxvY2tlZCBzbyB0aGF0XG4gICAgICAgICAgLy8gdGhlIGNvbmZpcm1hdGlvbiBkaWFsb2cga25vd3MgaXQgbmVlZHMgdG8gZGlzYXBwZWFyIG5vdy5cbiAgICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LkRJQUxPR19DTE9TRSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gUGFzcyBGbHVlbnQgc3RyaW5ncyB0byBDb25maXJtRGlhbG9nIGNvbXBvbmVudCBmb3IgdGhlIGNvcHlcbiAgICAgICAgLy8gb2YgdGhlIHByb21wdCB0byBibG9jayBzZWN0aW9ucy5cbiAgICAgICAgYm9keV9zdHJpbmdfaWQ6IFtcbiAgICAgICAgICBcIm5ld3RhYi1zZWN0aW9uLWNvbmZpcm0tYmxvY2stdG9waWMtcDFcIixcbiAgICAgICAgICBcIm5ld3RhYi1zZWN0aW9uLWNvbmZpcm0tYmxvY2stdG9waWMtcDJcIixcbiAgICAgICAgXSxcbiAgICAgICAgY29uZmlybV9idXR0b25fc3RyaW5nX2lkOiBcIm5ld3RhYi1zZWN0aW9uLWJsb2NrLXRvcGljLWJ1dHRvblwiLFxuICAgICAgICBjb25maXJtX2J1dHRvbl9zdHJpbmdfYXJnczogeyB0b3BpYzogdGl0bGUgfSxcbiAgICAgICAgY2FuY2VsX2J1dHRvbl9zdHJpbmdfaWQ6IFwibmV3dGFiLXNlY3Rpb24tY2FuY2VsLWJ1dHRvblwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHVzZXJFdmVudDogXCJESUFMT0dfT1BFTlwiLFxuICB9KSxcbiAgU2VjdGlvblVuZm9sbG93OiAoe1xuICAgIHNlY3Rpb25QZXJzb25hbGl6YXRpb24sXG4gICAgc2VjdGlvbktleSxcbiAgICBzZWN0aW9uUG9zaXRpb24sXG4gIH0pID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLW1lbnUtc2VjdGlvbi11bmZvbGxvd1wiLFxuICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICB0eXBlOiBhdC5TRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVQsXG4gICAgICBkYXRhOiAoKHsgc2VjdGlvbktleTogX3NlY3Rpb25LZXksIC4uLnJlbWFpbmluZyB9KSA9PiByZW1haW5pbmcpKFxuICAgICAgICBzZWN0aW9uUGVyc29uYWxpemF0aW9uXG4gICAgICApLFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuVU5GT0xMT1dfU0VDVElPTixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2VjdGlvbjogc2VjdGlvbktleSxcbiAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogc2VjdGlvblBvc2l0aW9uLFxuICAgICAgICBldmVudF9zb3VyY2U6IFwiQ09OVEVYVF9NRU5VXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbiAgTWFuYWdlU3BvbnNvcmVkQ29udGVudDogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1tYW5hZ2Utc3BvbnNvcmVkLWNvbnRlbnRcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oeyB0eXBlOiBhdC5TRVRUSU5HU19PUEVOIH0pLFxuICAgIHVzZXJFdmVudDogXCJPUEVOX05FV1RBQl9QUkVGU1wiLFxuICB9KSxcbiAgT3VyU3BvbnNvcnNBbmRZb3VyUHJpdmFjeTogKCkgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItbWVudS1vdXItc3BvbnNvcnMtYW5kLXlvdXItcHJpdmFjeVwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVybDogXCJodHRwczovL3N1cHBvcnQubW96aWxsYS5vcmcva2IvcG9ja2V0LXNwb25zb3JlZC1zdG9yaWVzLW5ldy10YWJzXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHVzZXJFdmVudDogXCJDTElDS19QUklWQUNZX0lORk9cIixcbiAgfSksXG4gIFJlcG9ydEFkOiBzaXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IFwibmV3dGFiLW1lbnUtcmVwb3J0LXRoaXMtYWRcIixcbiAgICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LlJFUE9SVF9BRF9PUEVOLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2FyZF90eXBlOiBzaXRlLmNhcmRfdHlwZSxcbiAgICAgICAgICBwb3NpdGlvbjogc2l0ZS5wb3NpdGlvbixcbiAgICAgICAgICByZXBvcnRpbmdfdXJsOiBzaXRlLnNoaW0ucmVwb3J0LFxuICAgICAgICAgIHVybDogc2l0ZS51cmwsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICB9O1xuICB9LFxuXG4gIFJlcG9ydENvbnRlbnQ6IHNpdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogXCJuZXd0YWItbWVudS1yZXBvcnRcIixcbiAgICAgIGFjdGlvbjogYWMuQWxzb1RvTWFpbih7XG4gICAgICAgIHR5cGU6IGF0LlJFUE9SVF9DT05URU5UX09QRU4sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjYXJkX3R5cGU6IHNpdGUuY2FyZF90eXBlLFxuICAgICAgICAgIGNvcnB1c19pdGVtX2lkOiBzaXRlLmNvcnB1c19pdGVtX2lkLFxuICAgICAgICAgIHNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZDogc2l0ZS5zY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQsXG4gICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbjogc2l0ZS5zZWN0aW9uX3Bvc2l0aW9uLFxuICAgICAgICAgIHNlY3Rpb246IHNpdGUuc2VjdGlvbixcbiAgICAgICAgICB0aXRsZTogc2l0ZS50aXRsZSxcbiAgICAgICAgICB0b3BpYzogc2l0ZS50b3BpYyxcbiAgICAgICAgICB1cmw6IHNpdGUudXJsLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfTtcbiAgfSxcbiAgVHJlbmRpbmdTZWFyY2hMZWFybk1vcmU6IHNpdGUgPT4gKHtcbiAgICBpZDogXCJuZXd0YWItdHJlbmRpbmctc2VhcmNoZXMtbGVhcm4tbW9yZVwiLFxuICAgIGFjdGlvbjogYWMuT25seVRvTWFpbih7XG4gICAgICB0eXBlOiBhdC5PUEVOX0xJTkssXG4gICAgICBkYXRhOiB7IHVybDogc2l0ZS51cmwgfSxcbiAgICB9KSxcbiAgICBpbXByZXNzaW9uOiBhYy5Pbmx5VG9NYWluKHtcbiAgICAgIHR5cGU6IGF0LlRSRU5ESU5HX1NFQVJDSF9MRUFSTl9NT1JFLFxuICAgICAgZGF0YToge1xuICAgICAgICB2YXJpYW50OiBzaXRlLnZhcmlhbnQsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KSxcbiAgVHJlbmRpbmdTZWFyY2hEaXNtaXNzOiBzaXRlID0+ICh7XG4gICAgaWQ6IFwibmV3dGFiLXRyZW5kaW5nLXNlYXJjaGVzLWRpc21pc3NcIixcbiAgICBhY3Rpb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuU0VUX1BSRUYsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IFwidHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGltcHJlc3Npb246IGFjLk9ubHlUb01haW4oe1xuICAgICAgdHlwZTogYXQuVFJFTkRJTkdfU0VBUkNIX0RJU01JU1MsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHZhcmlhbnQ6IHNpdGUudmFyaWFudCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pLFxufTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjIH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQ29udGV4dE1lbnUgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Db250ZXh0TWVudS9Db250ZXh0TWVudVwiO1xuaW1wb3J0IHsgTGlua01lbnVPcHRpb25zIH0gZnJvbSBcImNvbnRlbnQtc3JjL2xpYi9saW5rLW1lbnUtb3B0aW9uc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBERUZBVUxUX1NJVEVfTUVOVV9PUFRJT05TID0gW1xuICBcIkNoZWNrUGluVG9wU2l0ZVwiLFxuICBcIkVkaXRUb3BTaXRlXCIsXG4gIFwiU2VwYXJhdG9yXCIsXG4gIFwiT3BlbkluTmV3V2luZG93XCIsXG4gIFwiT3BlbkluUHJpdmF0ZVdpbmRvd1wiLFxuICBcIlNlcGFyYXRvclwiLFxuICBcIkJsb2NrVXJsXCIsXG5dO1xuXG5leHBvcnQgY2xhc3MgX0xpbmtNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGdldE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB7XG4gICAgICBzaXRlLFxuICAgICAgaW5kZXgsXG4gICAgICBzb3VyY2UsXG4gICAgICBpc1ByaXZhdGVCcm93c2luZ0VuYWJsZWQsXG4gICAgICBzaXRlSW5mbyxcbiAgICAgIHBsYXRmb3JtLFxuICAgICAgZGlzcGF0Y2gsXG4gICAgICBvcHRpb25zLFxuICAgICAgc2hvdWxkU2VuZEltcHJlc3Npb25TdGF0cyxcbiAgICAgIHVzZXJFdmVudCA9IGFjLlVzZXJFdmVudCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICAvLyBIYW5kbGUgc3BlY2lhbCBjYXNlIG9mIGRlZmF1bHQgc2l0ZVxuICAgIGNvbnN0IHByb3BPcHRpb25zID1cbiAgICAgIHNpdGUuaXNEZWZhdWx0ICYmICFzaXRlLnNlYXJjaFRvcFNpdGUgJiYgIXNpdGUuc3BvbnNvcmVkX3Bvc2l0aW9uXG4gICAgICAgID8gREVGQVVMVF9TSVRFX01FTlVfT1BUSU9OU1xuICAgICAgICA6IG9wdGlvbnM7XG5cbiAgICBjb25zdCBsaW5rTWVudU9wdGlvbnMgPSBwcm9wT3B0aW9uc1xuICAgICAgLm1hcChvID0+XG4gICAgICAgIExpbmtNZW51T3B0aW9uc1tvXShcbiAgICAgICAgICBzaXRlLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICBpc1ByaXZhdGVCcm93c2luZ0VuYWJsZWQsXG4gICAgICAgICAgc2l0ZUluZm8sXG4gICAgICAgICAgcGxhdGZvcm1cbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLm1hcChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCB7IGFjdGlvbiwgaW1wcmVzc2lvbiwgaWQsIHR5cGUsIHVzZXJFdmVudDogZXZlbnROYW1lIH0gPSBvcHRpb247XG4gICAgICAgIGlmICghdHlwZSAmJiBpZCkge1xuICAgICAgICAgIG9wdGlvbi5vbkNsaWNrID0gKGV2ZW50ID0ge30pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgY3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXksIGJ1dHRvbiB9ID0gZXZlbnQ7XG4gICAgICAgICAgICAvLyBPbmx5IHNlbmQgYWxvbmcgZXZlbnQgaW5mbyBpZiB0aGVyZSdzIHNvbWV0aGluZyBub24tZGVmYXVsdCB0byBzZW5kXG4gICAgICAgICAgICBpZiAoY3RybEtleSB8fCBtZXRhS2V5IHx8IHNoaWZ0S2V5IHx8IGJ1dHRvbiA9PT0gMSkge1xuICAgICAgICAgICAgICBhY3Rpb24uZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXZlbnQ6IHsgY3RybEtleSwgbWV0YUtleSwgc2hpZnRLZXksIGJ1dHRvbiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWN0aW9uLmRhdGFcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgICAgICAgLy8gQnVnIDE5NTgxMzU6IFBhc3MgYWRkaXRpb25hbCBpbmZvIHRvIGFjLk9QRU5fTkVXX1dJTkRPVyBldmVudFxuICAgICAgICAgICAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiT1BFTl9ORVdfV0lORE9XXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICBjYXJkX3R5cGUsXG4gICAgICAgICAgICAgICAgICBjb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgICAgICAgICAgIGV2ZW50X3NvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGZldGNoVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgaXNfbGlzdF9jYXJkLFxuICAgICAgICAgICAgICAgICAgaXNfc2VjdGlvbl9mb2xsb3dlZCxcbiAgICAgICAgICAgICAgICAgIHJlY2VpdmVkX3JhbmssXG4gICAgICAgICAgICAgICAgICByZWNvbW1lbmRhdGlvbl9pZCxcbiAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGVkX2F0LFxuICAgICAgICAgICAgICAgICAgc2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkLFxuICAgICAgICAgICAgICAgICAgc2VjdGlvbl9wb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZF90b3BpY3MsXG4gICAgICAgICAgICAgICAgICB0aWxlX2lkLFxuICAgICAgICAgICAgICAgICAgdG9waWMsXG4gICAgICAgICAgICAgICAgfSA9IGFjdGlvbi5kYXRhO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgICBjYXJkX3R5cGUsXG4gICAgICAgICAgICAgICAgICBjb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgICAgICAgICAgIGV2ZW50X3NvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGZldGNoVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgZmlyc3RWaXNpYmxlVGltZXN0YW1wLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgaXNfbGlzdF9jYXJkLFxuICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRfcmFuayxcbiAgICAgICAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uX2lkLFxuICAgICAgICAgICAgICAgICAgcmVjb21tZW5kZWRfYXQsXG4gICAgICAgICAgICAgICAgICBzY2hlZHVsZWRfY29ycHVzX2l0ZW1faWQsXG4gICAgICAgICAgICAgICAgICAuLi4oc2VjdGlvblxuICAgICAgICAgICAgICAgICAgICA/IHsgaXNfc2VjdGlvbl9mb2xsb3dlZCwgc2VjdGlvbl9wb3NpdGlvbiwgc2VjdGlvbiB9XG4gICAgICAgICAgICAgICAgICAgIDoge30pLFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdG9waWNzOiBzZWxlY3RlZF90b3BpY3MgPyBzZWxlY3RlZF90b3BpY3MgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgdGlsZV9pZCxcbiAgICAgICAgICAgICAgICAgIHRvcGljLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7IGNhcmRfdHlwZTogc2l0ZS5mbGlnaHRfaWQgPyBcInNwb2NcIiA6IFwib3JnYW5pY1wiIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY29uc3QgdXNlckV2ZW50RGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgIHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgIGFjdGlvbl9wb3NpdGlvbjogaW5kZXgsXG4gICAgICAgICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNpdGVJbmZvXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJFdmVudCh1c2VyRXZlbnREYXRhKSk7XG4gICAgICAgICAgICAgIGlmIChpbXByZXNzaW9uICYmIHNob3VsZFNlbmRJbXByZXNzaW9uU3RhdHMpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChpbXByZXNzaW9uKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgIH0pO1xuXG4gICAgLy8gVGhpcyBpcyBmb3IgYWNjZXNzaWJpbGl0eSB0byBzdXBwb3J0IG1ha2luZyBlYWNoIGl0ZW0gdGFiYmFibGUuXG4gICAgLy8gV2Ugd2FudCB0byBrbm93IHdoaWNoIGl0ZW0gaXMgdGhlIGZpcnN0IGFuZCB3aGljaCBpdGVtXG4gICAgLy8gaXMgdGhlIGxhc3QsIHNvIHdlIGNhbiBjbG9zZSB0aGUgY29udGV4dCBtZW51IGFjY29yZGluZ2x5LlxuICAgIGxpbmtNZW51T3B0aW9uc1swXS5maXJzdCA9IHRydWU7XG4gICAgbGlua01lbnVPcHRpb25zW2xpbmtNZW51T3B0aW9ucy5sZW5ndGggLSAxXS5sYXN0ID0gdHJ1ZTtcbiAgICByZXR1cm4gbGlua01lbnVPcHRpb25zO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGV4dE1lbnVcbiAgICAgICAgb25VcGRhdGU9e3RoaXMucHJvcHMub25VcGRhdGV9XG4gICAgICAgIG9uU2hvdz17dGhpcy5wcm9wcy5vblNob3d9XG4gICAgICAgIG9wdGlvbnM9e3RoaXMuZ2V0T3B0aW9ucygpfVxuICAgICAgICBrZXlib2FyZEFjY2Vzcz17dGhpcy5wcm9wcy5rZXlib2FyZEFjY2Vzc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBnZXRTdGF0ZSA9IHN0YXRlID0+ICh7XG4gIGlzUHJpdmF0ZUJyb3dzaW5nRW5hYmxlZDogc3RhdGUuUHJlZnMudmFsdWVzLmlzUHJpdmF0ZUJyb3dzaW5nRW5hYmxlZCxcbiAgcGxhdGZvcm06IHN0YXRlLlByZWZzLnZhbHVlcy5wbGF0Zm9ybSxcbn0pO1xuZXhwb3J0IGNvbnN0IExpbmtNZW51ID0gY29ubmVjdChnZXRTdGF0ZSkoX0xpbmtNZW51KTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8qKlxuICogQSBjdXN0b20gcmVhY3QgaG9vayB0aGF0IHNldHMgdXAgYW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgdG8gb2JzZXJ2ZSBhIHNpbmdsZVxuICogb3IgbGlzdCBvZiBlbGVtZW50cyBhbmQgdHJpZ2dlcnMgYSBjYWxsYmFjayB3aGVuIHRoZSBlbGVtZW50IGNvbWVzIGludG8gdGhlIHZpZXdwb3J0XG4gKiBOb3RlOiBUaGUgcmVmcyB1c2VkIHNob3VsZCBiZSBhbiBhcnJheSB0eXBlXG4gKiBAZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhbiBlbGVtZW50IGNvbWVzIGludG8gdGhlIHZpZXdwb3J0XG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIE9wdGlvbnMgb2JqZWN0IHBhc3NlZCB0byBJbnRlcnNlY3Rpb24gT2JzZXJ2ZXI6XG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIjb3B0aW9uc1xuICogQHBhcmFtIHtCb29sZWFufSBbaXNTaW5nbGUgPSBmYWxzZV0gQm9vbGVhbiBpZiB0aGUgZWxlbWVudHMgYXJlIGFuIGFycmF5IG9yIHNpbmdsZSBlbGVtZW50XG4gKlxuICogQHJldHVybnMge1JlYWN0Lk11dGFibGVSZWZPYmplY3R9IGEgcmVmIGNvbnRhaW5pbmcgYW4gYXJyYXkgb2YgZWxlbWVudHMgb3Igc2luZ2xlIGVsZW1lbnRcbiAqXG4gKlxuICpcbiAqL1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIHRocmVzaG9sZCA9IDAuMykge1xuICBjb25zdCBlbGVtZW50c1JlZiA9IHVzZVJlZihbXSk7XG4gIGNvbnN0IHRyaWdnZXJlZEVsZW1lbnRzID0gdXNlUmVmKG5ldyBXZWFrU2V0KCkpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgICAgZW50cmllcyA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZW50cnkuaXNJbnRlcnNlY3RpbmcgJiZcbiAgICAgICAgICAgICF0cmlnZ2VyZWRFbGVtZW50cy5jdXJyZW50LmhhcyhlbnRyeS50YXJnZXQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0cmlnZ2VyZWRFbGVtZW50cy5jdXJyZW50LmFkZChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY2FsbGJhY2soZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgeyB0aHJlc2hvbGQgfVxuICAgICk7XG5cbiAgICBlbGVtZW50c1JlZi5jdXJyZW50LmZvckVhY2goZWwgPT4ge1xuICAgICAgaWYgKGVsICYmICF0cmlnZ2VyZWRFbGVtZW50cy5jdXJyZW50LmhhcyhlbCkpIHtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDbGVhbnVwIGZ1bmN0aW9uIHRvIGRpc2Nvbm5lY3Qgb2JzZXJ2ZXIgb24gdW5tb3VudFxuICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIH0sIFtjYWxsYmFjaywgdGhyZXNob2xkXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzUmVmO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIGFjdGl2ZSBjYXJkIHNpemUgKFwic21hbGxcIiwgXCJtZWRpdW1cIiwgb3IgXCJsYXJnZVwiKSBiYXNlZCBvbiB0aGUgc2NyZWVuIHdpZHRoXG4gKiBhbmQgY2xhc3MgbmFtZXMgYXBwbGllZCB0byB0aGUgY2FyZCBlbGVtZW50IGF0IHRoZSB0aW1lIG9mIGFuIGV2ZW50IChleGFtcGxlOiBjbGljaylcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc2NyZWVuV2lkdGggLSBUaGUgY3VycmVudCB3aW5kb3cgd2lkdGggKGluIHBpeGVscykuXG4gKiBAcGFyYW0ge3N0cmluZyB8IHN0cmluZ1tdfSBjbGFzc05hbWVzIC0gQSBzdHJpbmcgb3IgYXJyYXkgb2YgY2xhc3MgbmFtZXMgYXBwbGllZCB0byB0aGUgc2VjdGlvbnMgY2FyZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbltdfSBzZWN0aW9uc0VuYWJsZWQgLSBJZiBzZWN0aW9ucyBpcyBub3QgZW5hYmxlZCwgYWxsIGNhcmRzIGFyZSBgbWVkaXVtLWNhcmRgXG4gKiBAcGFyYW0ge251bWJlcn0gZmxpZ2h0SWQgLSBFcnJvciBlZ2UgY2FzZTogVGhpcyBmdW5jdGlvbiBzaG91bGQgbm90IGJlIGNhbGxlZCBvbiBzcG9jcywgd2hpY2ggaGF2ZSBmbGlnaHRJZFxuICogQHJldHVybnMge1wic21hbGwtY2FyZFwiIHwgXCJtZWRpdW0tY2FyZFwiIHwgXCJsYXJnZS1jYXJkXCIgfCBudWxsfSBUaGUgYWN0aXZlIGNhcmQgdHlwZSwgb3IgbnVsbCBpZiBub25lIGlzIG1hdGNoZWQuXG4gKi9cbmZ1bmN0aW9uIGdldEFjdGl2ZUNhcmRTaXplKHNjcmVlbldpZHRoLCBjbGFzc05hbWVzLCBzZWN0aW9uc0VuYWJsZWQsIGZsaWdodElkKSB7XG4gIC8vIE9ubHkgYXBwbGllcyB0byBzcG9uc29yZWQgY29udGVudFxuICBpZiAoZmxpZ2h0SWQpIHtcbiAgICByZXR1cm4gXCJzcG9jXCI7XG4gIH1cblxuICAvLyBEZWZhdWx0IGxheW91dCBvbmx5IHN1cHBvcnRzIGBtZWRpdW0tY2FyZGBcbiAgaWYgKCFzZWN0aW9uc0VuYWJsZWQpIHtcbiAgICAvLyBNaXNzaW5nIGFyZ3VtZW50c1xuICAgIHJldHVybiBcIm1lZGl1bS1jYXJkXCI7XG4gIH1cblxuICAvLyBSZXR1cm4gbnVsbCBpZiBubyB2YWx1ZXMgYXJlIGF2YWlsYWJsZVxuICBpZiAoIXNjcmVlbldpZHRoIHx8ICFjbGFzc05hbWVzKSB7XG4gICAgLy8gTWlzc2luZyBhcmd1bWVudHNcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGNsYXNzTGlzdCA9IGNsYXNzTmFtZXMuc3BsaXQoXCIgXCIpO1xuXG4gIC8vIEVhY2ggYnJlYWtwb2ludCBjb3JyZXNwb25kcyB0byBhIG1pbmltdW0gc2NyZWVuIHdpZHRoIGFuZCBpdHMgYXNzb2NpYXRlZCBjb2x1bW4gY2xhc3NcbiAgY29uc3QgYnJlYWtwb2ludHMgPSBbXG4gICAgeyBtaW46IDEzNzQsIGNvbHVtbjogXCJjb2wtNFwiIH0sIC8vICRicmVhay1wb2ludC1zZWN0aW9ucy12YXJpYW50XG4gICAgeyBtaW46IDExMjIsIGNvbHVtbjogXCJjb2wtM1wiIH0sIC8vICRicmVhay1wb2ludC13aWRlc3RcbiAgICB7IG1pbjogNzI0LCBjb2x1bW46IFwiY29sLTJcIiB9LCAvLyAkYnJlYWstcG9pbnQtbGF5b3V0LXZhcmlhbnRcbiAgICB7IG1pbjogMCwgY29sdW1uOiBcImNvbC0xXCIgfSwgLy8gKGRlZmF1bHQgbGF5b3V0KVxuICBdO1xuXG4gIGNvbnN0IGNhcmRUeXBlcyA9IFtcInNtYWxsXCIsIFwibWVkaXVtXCIsIFwibGFyZ2VcIl07XG5cbiAgLy8gRGV0ZXJtaW5lIHdoaWNoIGNvbHVtbiBpcyBhY3RpdmUgYmFzZWQgb24gdGhlIGN1cnJlbnQgc2NyZWVuIHdpZHRoXG4gIGNvbnN0IGN1cnJDb2x1bW5Db3VudCA9IGJyZWFrcG9pbnRzLmZpbmQoYnAgPT4gc2NyZWVuV2lkdGggPj0gYnAubWluKS5jb2x1bW47XG5cbiAgLy8gTWF0Y2ggdGhlIGNhcmQgdHlwZSBmb3IgdGhhdCBjb2x1bW4gY291bnRcbiAgZm9yIChsZXQgdHlwZSBvZiBjYXJkVHlwZXMpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBgJHtjdXJyQ29sdW1uQ291bnR9LSR7dHlwZX1gO1xuICAgIGlmIChjbGFzc0xpc3QuaW5jbHVkZXMoY2xhc3NOYW1lKSkge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlOiBiZWxvdyAkYnJlYWstcG9pbnQtbWVkaXVtICg2MTBweCksIHJlcG9ydCBgY29sLTEtc21hbGxgIGFzIG1lZGl1bVxuICAgICAgaWYgKFxuICAgICAgICBzY3JlZW5XaWR0aCA8IDYxMCAmJlxuICAgICAgICBjdXJyQ29sdW1uQ291bnQgPT09IFwiY29sLTFcIiAmJlxuICAgICAgICB0eXBlID09PSBcInNtYWxsXCJcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gXCJtZWRpdW0tY2FyZFwiO1xuICAgICAgfVxuICAgICAgLy8gV2lsbCBiZSBlaXRoZXIgXCJzbWFsbC1jYXJkXCIsIFwibWVkaXVtLWNhcmRcIiwgb3IgXCJsYXJnZS1jYXJkXCJcbiAgICAgIHJldHVybiBgJHt0eXBlfS1jYXJkYDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuY29uc3QgQ09ORkVUVElfVkFSUyA9IFtcbiAgXCItLWNvbG9yLXJlZC00MFwiLFxuICBcIi0tY29sb3IteWVsbG93LTQwXCIsXG4gIFwiLS1jb2xvci1wdXJwbGUtNDBcIixcbiAgXCItLWNvbG9yLWJsdWUtNDBcIixcbiAgXCItLWNvbG9yLWdyZWVuLTQwXCIsXG5dO1xuXG4vKipcbiAqIEN1c3RvbSBob29rIHRvIGFuaW1hdGUgYSBjb25mZXR0aSBidXJzdC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgICBOdW1iZXIgb2YgcGFydGljbGVzXG4gKiBAcGFyYW0ge251bWJlcn0gc3ByZWFkICBzcHJlYWQgb2YgY29uZmV0dGlcbiAqIEByZXR1cm5zIHtbUmVhY3QuUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PiwgKCkgPT4gdm9pZF19XG4gKi9cbmZ1bmN0aW9uIHVzZUNvbmZldHRpKGNvdW50ID0gODAsIHNwcmVhZCA9IE1hdGguUEkgLyAzKSB7XG4gIC8vIGF2b2lkIGVycm9ycyBmcm9tIGFib3V0OmhvbWUgY2FjaGVcbiAgY29uc3QgcHJlZmVyc1JlZHVjZWRNb3Rpb24gPVxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSlcIikubWF0Y2hlcztcblxuICBsZXQgY29sb3JzO1xuICAvLyBpZiBpbiBhYm91dGhvbWUgY2FjaGUsIGdldENvbXB1dGVkU3R5bGUgd2lsbCBub3QgYmUgYXZhaWxhYmxlXG4gIGlmICh0eXBlb2YgZ2V0Q29tcHV0ZWRTdHlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIGNvbG9ycyA9IENPTkZFVFRJX1ZBUlMubWFwKHZhcmlhYmxlID0+XG4gICAgICBzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSh2YXJpYWJsZSkudHJpbSgpXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb2xvcnMgPSBbXCIjZmE1ZTc1XCIsIFwiI2RlOTYwMFwiLCBcIiNjNjcxZWJcIiwgXCIjM2Y5NGZmXCIsIFwiIzM3Yjg0N1wiXTtcbiAgfVxuXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgcGFydGljbGVzUmVmID0gdXNlUmVmKFtdKTtcbiAgY29uc3QgYW5pbWF0aW9uRnJhbWVSZWYgPSB1c2VSZWYoMCk7XG5cbiAgLy8gaW5pdGlhbGl6ZS9yZXNldCBwb29sXG4gIGNvbnN0IGluaXRpYWxpemVDb25mZXR0aSA9IHVzZUNhbGxiYWNrKFxuICAgICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICBjb25zdCBjZW50ZXJYID0gd2lkdGggLyAyO1xuICAgICAgY29uc3QgY2VudGVyWSA9IGhlaWdodDtcbiAgICAgIGNvbnN0IHBvb2wgPSBwYXJ0aWNsZXNSZWYuY3VycmVudDtcblxuICAgICAgLy8gQ3JlYXRlIG9yIG92ZXJ3cml0ZSBlYWNoIHBhcnRpY2xl4oCZcyBpbml0aWFsIHN0YXRlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLlBJIC8gMiArIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwcmVhZDtcbiAgICAgICAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICBjb25zdCBzaW4gPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gY29sb3JzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpXTtcblxuICAgICAgICBwb29sW2ldID0ge1xuICAgICAgICAgIHg6IGNlbnRlclggKyAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0MCxcbiAgICAgICAgICB5OiBjZW50ZXJZLFxuICAgICAgICAgIGNvcyxcbiAgICAgICAgICBzaW4sXG4gICAgICAgICAgdmVsb2NpdHk6IE1hdGgucmFuZG9tKCkgKiA2ICsgNixcbiAgICAgICAgICBncmF2aXR5OiAwLjMsXG4gICAgICAgICAgZGVjYXk6IDAuOTYsXG4gICAgICAgICAgc2l6ZTogOCxcbiAgICAgICAgICBjb2xvcixcbiAgICAgICAgICBsaWZlOiAwLFxuICAgICAgICAgIG1heExpZmU6IDEwMCxcbiAgICAgICAgICB0aWx0OiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgdGlsdFNwZWVkOiBNYXRoLnJhbmRvbSgpICogMC4yICsgMC4wNSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFtjb3VudCwgc3ByZWFkLCBjb2xvcnNdXG4gICk7XG5cbiAgLy8gQ29yZSBhbmltYXRpb24gbG9vcCDigJQgdXBkYXRlcyBwaHlzaWNzICYgcmVuZGVycyBlYWNoIGZyYW1lXG4gIGNvbnN0IGFuaW1hdGVQYXJ0aWNsZXMgPSB1c2VDYWxsYmFjayhjYW52YXMgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gY2FudmFzO1xuICAgIGNvbnN0IHBvb2wgPSBwYXJ0aWNsZXNSZWYuY3VycmVudDtcblxuICAgIC8vIENsZWFyIHRoZSBlbnRpcmUgY2FudmFzIGVhY2ggZnJhbWVcbiAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGxldCBhbnlBbGl2ZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IHBhcnRpY2xlIG9mIHBvb2wpIHtcbiAgICAgIGlmIChwYXJ0aWNsZS5saWZlIDwgcGFydGljbGUubWF4TGlmZSkge1xuICAgICAgICBhbnlBbGl2ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gdXBkYXRlIGVhY2ggcGFydGljbGVzIHBoeXNpY3M6IHBvc2l0aW9uLCB2ZWxvY2l0eSBkZWNheSwgZ3Jhdml0eSwgdGlsdCwgbGlmZXNwYW5cbiAgICAgICAgcGFydGljbGUudmVsb2NpdHkgKj0gcGFydGljbGUuZGVjYXk7XG4gICAgICAgIHBhcnRpY2xlLnggKz0gcGFydGljbGUuY29zICogcGFydGljbGUudmVsb2NpdHk7XG4gICAgICAgIHBhcnRpY2xlLnkgLT0gcGFydGljbGUuc2luICogcGFydGljbGUudmVsb2NpdHk7XG4gICAgICAgIHBhcnRpY2xlLnkgKz0gcGFydGljbGUuZ3Jhdml0eTtcbiAgICAgICAgcGFydGljbGUudGlsdCArPSBwYXJ0aWNsZS50aWx0U3BlZWQ7XG4gICAgICAgIHBhcnRpY2xlLmxpZmUgKz0gMTtcbiAgICAgIH1cblxuICAgICAgLy8gRHJhdzogYXBwbHkgYWxwaGEsIHRyYW5zZm9ybSAmIGRyYXcgYSByb3RhdGVkLCBzY2FsZWQgc3F1YXJlXG4gICAgICBjb25zdCBhbHBoYVZhbHVlID0gMSAtIHBhcnRpY2xlLmxpZmUgLyBwYXJ0aWNsZS5tYXhMaWZlO1xuICAgICAgY29uc3Qgc2NhbGVZID0gTWF0aC5zaW4ocGFydGljbGUudGlsdCk7XG5cbiAgICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYVZhbHVlO1xuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgcGFydGljbGUueCwgcGFydGljbGUueSk7XG4gICAgICBjb250ZXh0LnJvdGF0ZShNYXRoLlBJIC8gNCk7XG4gICAgICBjb250ZXh0LnNjYWxlKDEsIHNjYWxlWSk7XG5cbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gcGFydGljbGUuY29sb3I7XG4gICAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgICAtcGFydGljbGUuc2l6ZSAvIDIsXG4gICAgICAgIC1wYXJ0aWNsZS5zaXplIC8gMixcbiAgICAgICAgcGFydGljbGUuc2l6ZSxcbiAgICAgICAgcGFydGljbGUuc2l6ZVxuICAgICAgKTtcblxuICAgICAgLy8gcmVzZXQgZWFjaCBwYXJ0aWNsZVxuICAgICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICBjb250ZXh0Lmdsb2JhbEFscGhhID0gMTtcbiAgICB9XG5cbiAgICBpZiAoYW55QWxpdmUpIHtcbiAgICAgIC8vIGNvbnRpbnVlIHRoZSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbkZyYW1lUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICBhbmltYXRlUGFydGljbGVzKGNhbnZhcyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVSZWYuY3VycmVudCk7XG4gICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBSZXNldHMgYW5kIHN0YXJ0cyBhIG5ldyBjb25mZXR0aSBhbmltYXRpb25cbiAgY29uc3QgZmlyZUNvbmZldHRpID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChwcmVmZXJzUmVkdWNlZE1vdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWY/LmN1cnJlbnQ7XG4gICAgaWYgKGNhbnZhcykge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVSZWYuY3VycmVudCk7XG4gICAgICBpbml0aWFsaXplQ29uZmV0dGkoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgIGFuaW1hdGVQYXJ0aWNsZXMoY2FudmFzKTtcbiAgICB9XG4gIH0sIFtpbml0aWFsaXplQ29uZmV0dGksIGFuaW1hdGVQYXJ0aWNsZXMsIHByZWZlcnNSZWR1Y2VkTW90aW9uXSk7XG5cbiAgcmV0dXJuIFtjYW52YXNSZWYsIGZpcmVDb25mZXR0aV07XG59XG5cbmV4cG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyLCBnZXRBY3RpdmVDYXJkU2l6ZSwgdXNlQ29uZmV0dGkgfTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgU2FmZUFuY2hvciB9IGZyb20gXCIuLi9TYWZlQW5jaG9yL1NhZmVBbmNob3JcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IExpbmtNZW51IH0gZnJvbSBcIi4uLy4uL0xpbmtNZW51L0xpbmtNZW51XCI7XG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciB9IGZyb20gXCIuLi8uLi8uLi9saWIvdXRpbHNcIjtcblxuY29uc3QgUFJFRl9UUkVORElOR19WQVJJQU5UID0gXCJ0cmVuZGluZ1NlYXJjaC52YXJpYW50XCI7XG5jb25zdCBQUkVGX1JFRklORURfQ0FSRFNfTEFZT1VUID0gXCJkaXNjb3ZlcnlzdHJlYW0ucmVmaW5lZENhcmRzTGF5b3V0LmVuYWJsZWRcIjtcblxuZnVuY3Rpb24gVHJlbmRpbmdTZWFyY2hlcygpIHtcbiAgY29uc3QgW3Nob3dDb250ZXh0TWVudSwgc2V0U2hvd0NvbnRleHRNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy8gVGhlIGtleWJvYXJkIGFjY2VzcyBwYXJhbWV0ZXIgaXMgcGFzc2VkIGRvd24gdG8gTGlua01lbnUgY29tcG9uZW50XG4gIC8vIHRoYXQgdXNlcyBpdCB0byBmb2N1cyBvbiB0aGUgZmlyc3QgY29udGV4dCBtZW51IG9wdGlvbiBmb3IgYWNjZXNzaWJpbGl0eS5cbiAgY29uc3QgW2lzS2V5Ym9hcmRBY2Nlc3MsIHNldElzS2V5Ym9hcmRBY2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgVHJlbmRpbmdTZWFyY2gsIFByZWZzIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZSk7XG4gIGNvbnN0IHsgdmFsdWVzOiBwcmVmcyB9ID0gUHJlZnM7XG4gIGNvbnN0IHsgc3VnZ2VzdGlvbnMsIGNvbGxhcHNlZCB9ID0gVHJlbmRpbmdTZWFyY2g7XG4gIGNvbnN0IHZhcmlhbnQgPSBwcmVmc1tQUkVGX1RSRU5ESU5HX1ZBUklBTlRdO1xuICBjb25zdCByZWZpbmVkQ2FyZHMgPSBwcmVmc1tQUkVGX1JFRklORURfQ0FSRFNfTEFZT1VUXTtcbiAgbGV0IHJlc3VsdFJlZiA9IHVzZVJlZihbXSk7XG4gIGxldCBjb250ZXh0TWVudUhvc3QgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgVFJFTkRJTkdfU0VBUkNIX0NPTlRFWFRfTUVOVV9PUFRJT05TID0gW1xuICAgIFwiVHJlbmRpbmdTZWFyY2hEaXNtaXNzXCIsXG4gICAgXCJUcmVuZGluZ1NlYXJjaExlYXJuTW9yZVwiLFxuICBdO1xuXG4gIGZ1bmN0aW9uIG9uQXJyb3dDbGljaygpIHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICB0eXBlOiBhdC5UUkVORElOR19TRUFSQ0hfVE9HR0xFX0NPTExBUFNFLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY29sbGFwc2VkOiAhY29sbGFwc2VkLFxuICAgICAgICAgIHZhcmlhbnQsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVMaW5rT3BlbigpIHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICB0eXBlOiBhdC5UUkVORElOR19TRUFSQ0hfU1VHR0VTVElPTl9PUEVOLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdmFyaWFudCxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIElmIHRoZSB3aW5kb3cgaXMgc21hbGwsIHRoZSBjb250ZXh0IG1lbnUgaW4gdmFyaWFudCBCIHdpbGwgbW92ZSBjbG9zZXIgdG8gdGhlIGNhcmRcbiAgLy8gc28gdGhhdCBpdCBkb2Vzbid0IGN1dCBvZmZcbiAgY29uc3QgaGFuZGxlQ29udGV4dE1lbnVTaG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvc3QgPSBjb250ZXh0TWVudUhvc3QuY3VycmVudDtcbiAgICBjb25zdCBpc1JUTCA9IGRvY3VtZW50LmRpciA9PT0gXCJydGxcIjsgLy8gcmV0dXJucyB0cnVlIGlmIHBhZ2UgbGFuZ3VhZ2UgaXMgcmlnaHQtdG8tbGVmdFxuICAgIGNvbnN0IGNoZWNrUmVjdCA9IGhvc3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgbWF4Qm91bmRzID0gMjAwO1xuXG4gICAgLy8gQWRkcyB0aGUgY2xhc3Mgb2YgXCJsYXN0LWl0ZW1cIiBpZiB0aGUgY2FyZCBpcyBuZWFyIHRoZSBlZGdlIG9mIHRoZSB3aW5kb3dcbiAgICBjb25zdCBjaGVja0JvdW5kcyA9IGlzUlRMXG4gICAgICA/IGNoZWNrUmVjdC5sZWZ0IDw9IG1heEJvdW5kc1xuICAgICAgOiB3aW5kb3cuaW5uZXJXaWR0aCAtIGNoZWNrUmVjdC5yaWdodCA8PSBtYXhCb3VuZHM7XG5cbiAgICBpZiAoY2hlY2tCb3VuZHMpIHtcbiAgICAgIGhvc3QuY2xhc3NMaXN0LmFkZChcImxhc3QtaXRlbVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29udGV4dE1lbnVVcGRhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgaG9zdCA9IGNvbnRleHRNZW51SG9zdC5jdXJyZW50O1xuICAgIGlmICghaG9zdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhvc3QuY2xhc3NMaXN0LnJlbW92ZShcImxhc3QtaXRlbVwiKTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVDb250ZXh0TWVudSA9IGlzS2V5Qm9hcmQgPT4ge1xuICAgIHNldFNob3dDb250ZXh0TWVudSghc2hvd0NvbnRleHRNZW51KTtcbiAgICBzZXRJc0tleWJvYXJkQWNjZXNzKGlzS2V5Qm9hcmQpO1xuXG4gICAgaWYgKCFzaG93Q29udGV4dE1lbnUpIHtcbiAgICAgIGhhbmRsZUNvbnRleHRNZW51U2hvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVDb250ZXh0TWVudVVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBvbkNvbnRleHRNZW51Q2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0b2dnbGVDb250ZXh0TWVudShmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbnRleHRNZW51S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgfHwgZS5rZXkgPT09IFwiIFwiKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVDb250ZXh0TWVudSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblVwZGF0ZSgpIHtcbiAgICBzZXRTaG93Q29udGV4dE1lbnUoIXNob3dDb250ZXh0TWVudSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSZXN1bHRLZXlEb3duKGV2ZW50LCBpbmRleCkge1xuICAgIGNvbnN0IG1heFJlc3VsdHMgPSBzdWdnZXN0aW9ucy5sZW5ndGg7XG4gICAgbGV0IG5leHRJbmRleCA9IGluZGV4O1xuXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd0Rvd25cIikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChpbmRleCA8IG1heFJlc3VsdHMgLSAxKSB7XG4gICAgICAgIG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgIG5leHRJbmRleCA9IGluZGV4IC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXN1bHRSZWYuY3VycmVudFtpbmRleF0udGFiSW5kZXggPSAtMTtcbiAgICByZXN1bHRSZWYuY3VycmVudFtuZXh0SW5kZXhdLnRhYkluZGV4ID0gMDtcbiAgICByZXN1bHRSZWYuY3VycmVudFtuZXh0SW5kZXhdLmZvY3VzKCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVJbnRlcnNlY3Rpb24gPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgdHlwZTogYXQuVFJFTkRJTkdfU0VBUkNIX0lNUFJFU1NJT04sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB2YXJpYW50LFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9LCBbZGlzcGF0Y2gsIHZhcmlhbnRdKTtcblxuICBjb25zdCByZWYgPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcihoYW5kbGVJbnRlcnNlY3Rpb24pO1xuICBpZiAoIXN1Z2dlc3Rpb25zPy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSBlbHNlIGlmICh2YXJpYW50ID09PSBcImFcIiB8fCB2YXJpYW50ID09PSBcImNcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8c2VjdGlvblxuICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICByZWYuY3VycmVudCA9IFtlbF07XG4gICAgICAgIH19XG4gICAgICAgIC8vIFZhcmlhbnQgQyBtYXRjaGVzIHRoZSBkZXNpZ24gb2YgdmFyaWFudCBBIGJ1dCBzaG91bGQgb25seVxuICAgICAgICAvLyBhcHBlYXIgb24gaG92ZXJcbiAgICAgICAgY2xhc3NOYW1lPXtgdHJlbmRpbmctc2VhcmNoZXMtcGlsbC13cmFwcGVyICR7dmFyaWFudCA9PT0gXCJjXCIgPyBcImhvdmVyLW9ubHlcIiA6IFwiXCJ9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1zZWFyY2hlcy10aXRsZS13cmFwcGVyXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtaWNvbiBpY29uIGljb24tYXJyb3ctdHJlbmRpbmdcIj48L3NwYW4+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmVuZGluZy1zZWFyY2hlcy10aXRsZVwiXG4gICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItdHJlbmRpbmctc2VhcmNoZXMtdGl0bGVcIlxuICAgICAgICAgID48L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xvc2Utb3Blbi10cmVuZGluZy1zZWFyY2hlc1wiPlxuICAgICAgICAgICAgPG1vei1idXR0b25cbiAgICAgICAgICAgICAgaWNvbnNyYz17YGNocm9tZTovL2dsb2JhbC9za2luL2ljb25zL2Fycm93LSR7Y29sbGFwc2VkID8gXCJkb3duXCIgOiBcInVwXCJ9LnN2Z2B9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQXJyb3dDbGlja31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaWNvbiBpY29uLWFycm93aGVhZC11cGB9XG4gICAgICAgICAgICAgIHR5cGU9XCJpY29uIGdob3N0XCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPXtgbmV3dGFiLXRyZW5kaW5nLXNlYXJjaGVzLSR7Y29sbGFwc2VkID8gXCJzaG93XCIgOiBcImhpZGVcIn0tdHJlbmRpbmdgfVxuICAgICAgICAgICAgPjwvbW96LWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshY29sbGFwc2VkICYmIChcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtbGlzdFwiPlxuICAgICAgICAgICAge3N1Z2dlc3Rpb25zLm1hcCgocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAga2V5PXtyZXN1bHQuc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaC1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBoYW5kbGVSZXN1bHRLZXlEb3duKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U2FmZUFuY2hvclxuICAgICAgICAgICAgICAgICAgICB1cmw9e3Jlc3VsdC5zZWFyY2hVcmx9XG4gICAgICAgICAgICAgICAgICAgIG9uTGlua0NsaWNrPXtoYW5kbGVMaW5rT3Blbn1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Jlc3VsdC5zdWdnZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBzZXRSZWY9e2l0ZW0gPT4gKHJlc3VsdFJlZi5jdXJyZW50W2luZGV4XSA9IGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17aW5kZXggPT09IDAgPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubG93ZXJDYXNlU3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIDwvU2FmZUFuY2hvcj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgKX1cbiAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xuICB9IGVsc2UgaWYgKHZhcmlhbnQgPT09IFwiYlwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgcmVmLmN1cnJlbnQgPSBbZWxdO1xuICAgICAgICAgIGNvbnRleHRNZW51SG9zdC5jdXJyZW50ID0gZWw7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cInRyZW5kaW5nLXNlYXJjaGVzLWxpc3Qtdmlld1wiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtbGlzdC12aWV3LWhlYWRlclwiPlxuICAgICAgICAgIDxoMyBkYXRhLWwxMG4taWQ9XCJuZXd0YWItdHJlbmRpbmctc2VhcmNoZXMtdGl0bGVcIj48L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtY29udGV4dC1tZW51LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJlbmRpbmctc2VhcmNoZXMtY29udGV4dC1tZW51ICR7c2hvd0NvbnRleHRNZW51ID8gXCJjb250ZXh0LW1lbnUtb3BlblwiIDogXCJcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJpY29uIGdob3N0XCJcbiAgICAgICAgICAgICAgICBzaXplPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLW1lbnUtc2VjdGlvbi10b29sdGlwXCJcbiAgICAgICAgICAgICAgICBpY29uc3JjPVwiY2hyb21lOi8vZ2xvYmFsL3NraW4vaWNvbnMvbW9yZS5zdmdcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ29udGV4dE1lbnVDbGlja31cbiAgICAgICAgICAgICAgICBvbktleURvd249e29uQ29udGV4dE1lbnVLZXlEb3dufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7c2hvd0NvbnRleHRNZW51ICYmIChcbiAgICAgICAgICAgICAgICA8TGlua01lbnVcbiAgICAgICAgICAgICAgICAgIG9uVXBkYXRlPXtvblVwZGF0ZX1cbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAgIGtleWJvYXJkQWNjZXNzPXtpc0tleWJvYXJkQWNjZXNzfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17VFJFTkRJTkdfU0VBUkNIX0NPTlRFWFRfTUVOVV9PUFRJT05TfVxuICAgICAgICAgICAgICAgICAgc2hvdWxkU2VuZEltcHJlc3Npb25TdGF0cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgIHNpdGU9e3tcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3VwcG9ydC5tb3ppbGxhLm9yZy8xL2ZpcmVmb3gvJVZFUlNJT04lLyVPUyUvJUxPQ0FMRSUvdHJlbmRpbmctc2VhcmNoZXMtbmV3LXRhYlwiLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidHJlbmRpbmctc2VhcmNoZXMtbGlzdC1pdGVtc1wiPlxuICAgICAgICAgIHtzdWdnZXN0aW9ucy5zbGljZSgwLCA2KS5tYXAoKHJlc3VsdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGtleT17cmVzdWx0LnN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdHJlbmRpbmctc2VhcmNoZXMtbGlzdC1pdGVtICR7cmVmaW5lZENhcmRzID8gXCJjb21wYWN0XCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgICAgb25LZXlEb3duPXtlID0+IGhhbmRsZVJlc3VsdEtleURvd24oZSwgaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNhZmVBbmNob3JcbiAgICAgICAgICAgICAgICAgIHVybD17cmVzdWx0LnNlYXJjaFVybH1cbiAgICAgICAgICAgICAgICAgIG9uTGlua0NsaWNrPXtoYW5kbGVMaW5rT3Blbn1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtyZXN1bHQuc3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgIHNldFJlZj17aXRlbSA9PiAocmVzdWx0UmVmLmN1cnJlbnRbaW5kZXhdID0gaXRlbSl9XG4gICAgICAgICAgICAgICAgICB0YWJJbmRleD17aW5kZXggPT09IDAgPyAwIDogLTF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc3VsdC5pY29uID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWljb24td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXN1bHQuaWNvbn0gYWx0PVwiXCIgY2xhc3NOYW1lPVwidHJlbmRpbmctaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXN1bHQubG93ZXJDYXNlU3VnZ2VzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD57cmVzdWx0LmRlc2NyaXB0aW9ufTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmVuZGluZy1zZWFyY2hlcy1pY29uIGljb24gaWNvbi1hcnJvdy10cmVuZGluZ1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVzdWx0Lmxvd2VyQ2FzZVN1Z2dlc3Rpb259XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L1NhZmVBbmNob3I+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBUcmVuZGluZ1NlYXJjaGVzIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG4vKiBnbG9iYWxzIENvbnRlbnRTZWFyY2hVSUNvbnRyb2xsZXIsIENvbnRlbnRTZWFyY2hIYW5kb2ZmVUlDb250cm9sbGVyICovXG5cbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IElTX05FV1RBQiB9IGZyb20gXCJjb250ZW50LXNyYy9saWIvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvTG9nby9Mb2dvXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUcmVuZGluZ1NlYXJjaGVzIH0gZnJvbSBcIi4uL0Rpc2NvdmVyeVN0cmVhbUNvbXBvbmVudHMvVHJlbmRpbmdTZWFyY2hlcy9UcmVuZGluZ1NlYXJjaGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBfU2VhcmNoIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub25TZWFyY2hDbGljayA9IHRoaXMub25TZWFyY2hDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWFyY2hIYW5kb2ZmQ2xpY2sgPSB0aGlzLm9uU2VhcmNoSGFuZG9mZkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlYXJjaEhhbmRvZmZQYXN0ZSA9IHRoaXMub25TZWFyY2hIYW5kb2ZmUGFzdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2VhcmNoSGFuZG9mZkRyb3AgPSB0aGlzLm9uU2VhcmNoSGFuZG9mZkRyb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uSW5wdXRNb3VudCA9IHRoaXMub25JbnB1dE1vdW50LmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbklucHV0TW91bnRIYW5kb2ZmID0gdGhpcy5vbklucHV0TW91bnRIYW5kb2ZmLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlYXJjaEhhbmRvZmZCdXR0b25Nb3VudCA9XG4gICAgICB0aGlzLm9uU2VhcmNoSGFuZG9mZkJ1dHRvbk1vdW50LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVFdmVudChldmVudCkge1xuICAgIC8vIEFsc28gdHJhY2sgc2VhcmNoIGV2ZW50cyB3aXRoIG91ciBvd24gdGVsZW1ldHJ5XG4gICAgaWYgKGV2ZW50LmRldGFpbC50eXBlID09PSBcIlNlYXJjaFwiKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlVzZXJFdmVudCh7IGV2ZW50OiBcIlNFQVJDSFwiIH0pKTtcbiAgICB9XG4gIH1cblxuICBvblNlYXJjaENsaWNrKGV2ZW50KSB7XG4gICAgd2luZG93LmdDb250ZW50U2VhcmNoQ29udHJvbGxlci5zZWFyY2goZXZlbnQpO1xuICB9XG5cbiAgZG9TZWFyY2hIYW5kb2ZmKHRleHQpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgYWMuT25seVRvTWFpbih7IHR5cGU6IGF0LkhBTkRPRkZfU0VBUkNIX1RPX0FXRVNPTUVCQVIsIGRhdGE6IHsgdGV4dCB9IH0pXG4gICAgKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogYXQuRkFLRV9GT0NVU19TRUFSQ0ggfSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhYy5Vc2VyRXZlbnQoeyBldmVudDogXCJTRUFSQ0hfSEFORE9GRlwiIH0pKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh7IHR5cGU6IGF0LkRJU0FCTEVfU0VBUkNIIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoSGFuZG9mZkNsaWNrKGV2ZW50KSB7XG4gICAgLy8gV2hlbiBzZWFyY2ggaGFuZC1vZmYgaXMgZW5hYmxlZCwgd2UgcmVuZGVyIGEgYmlnIGJ1dHRvbiB0aGF0IGlzIHN0eWxlZCB0b1xuICAgIC8vIGxvb2sgbGlrZSBhIHNlYXJjaCB0ZXh0Ym94LiBJZiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQsIHdlIHN0eWxlXG4gICAgLy8gdGhlIGJ1dHRvbiBhcyBpZiBpdCB3YXMgYSBmb2N1c2VkIHNlYXJjaCBib3ggYW5kIHNob3cgYSBmYWtlIGN1cnNvciBidXRcbiAgICAvLyByZWFsbHkgZm9jdXMgdGhlIGF3ZXNvbWViYXIgd2l0aG91dCB0aGUgZm9jdXMgc3R5bGVzIChcImhpZGRlbiBmb2N1c1wiKS5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZG9TZWFyY2hIYW5kb2ZmKCk7XG4gIH1cblxuICBvblNlYXJjaEhhbmRvZmZQYXN0ZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kb1NlYXJjaEhhbmRvZmYoZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwiVGV4dFwiKSk7XG4gIH1cblxuICBvblNlYXJjaEhhbmRvZmZEcm9wKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdGV4dCA9IGV2ZW50LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwidGV4dFwiKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgdGhpcy5kb1NlYXJjaEhhbmRvZmYodGV4dCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgY2FyZXQgPSB0aGlzLmZha2VDYXJldDtcbiAgICBjb25zdCB7IGNhcmV0QmxpbmtDb3VudCwgY2FyZXRCbGlua1RpbWUgfSA9IHRoaXMucHJvcHMuUHJlZnMudmFsdWVzO1xuXG4gICAgaWYgKGNhcmV0KSB7XG4gICAgICAvLyBJZiBjYXJldCBibGluayBjb3VudCBpc24ndCBkZWZpbmVkLCB1c2UgdGhlIGRlZmF1bHQgaW5maW5pdGUgYmVoYXZpb3IgZm9yIGFuaW1hdGlvblxuICAgICAgY2FyZXQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiLS1jYXJldC1ibGluay1jb3VudFwiLFxuICAgICAgICBjYXJldEJsaW5rQ291bnQgPiAtMSA/IGNhcmV0QmxpbmtDb3VudCA6IFwiaW5maW5pdGVcIlxuICAgICAgKTtcblxuICAgICAgLy8gQXBwbHkgY3VzdG9tIGJsaW5rIHJhdGUgaWYgc2V0LCBlbHNlIGZhbGxiYWNrIHRvIGRlZmF1bHQgKDU2N21zIG9uL29mZiAtLT4gMTEzNG1zIHRvdGFsKVxuICAgICAgY2FyZXQuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgIFwiLS1jYXJldC1ibGluay10aW1lXCIsXG4gICAgICAgIGNhcmV0QmxpbmtUaW1lID4gMCA/IGAke2NhcmV0QmxpbmtUaW1lICogMn1tc2AgOiBgJHsxMTM0fW1zYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkZWxldGUgd2luZG93LmdDb250ZW50U2VhcmNoQ29udHJvbGxlcjtcbiAgfVxuXG4gIG9uSW5wdXRNb3VudChpbnB1dCkge1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8gVGhlIFwiaGVhbHRoUmVwb3J0S2V5XCIgYW5kIG5lZWRzIHRvIGJlIFwibmV3dGFiXCIgb3IgXCJhYm91dGhvbWVcIiBzbyB0aGF0XG4gICAgICAvLyBCcm93c2VyVXNhZ2VUZWxlbWV0cnkuc3lzLm1qcyBrbm93cyB0byBoYW5kbGUgZXZlbnRzIHdpdGggdGhpcyBuYW1lLCBhbmRcbiAgICAgIC8vIGNhbiBhZGQgdGhlIGFwcHJvcHJpYXRlIHRlbGVtZXRyeSBwcm9iZXMgZm9yIHNlYXJjaC4gV2l0aG91dCB0aGUgY29ycmVjdFxuICAgICAgLy8gbmFtZSwgY2VydGFpbiB0ZXN0cyBsaWtlIGJyb3dzZXJfVXNhZ2VUZWxlbWV0cnlfY29udGVudC5qcyB3aWxsIGZhaWxcbiAgICAgIC8vIChTZWUgZ2l0aHViIHRpY2tldCAjMjM0OCBmb3IgbW9yZSBkZXRhaWxzKVxuICAgICAgY29uc3QgaGVhbHRoUmVwb3J0S2V5ID0gSVNfTkVXVEFCID8gXCJuZXd0YWJcIiA6IFwiYWJvdXRob21lXCI7XG5cbiAgICAgIC8vIGdDb250ZW50U2VhcmNoQ29udHJvbGxlciBuZWVkcyB0byBleGlzdCBhcyBhIGdsb2JhbCBzbyB0aGF0IHRlc3RzIGZvclxuICAgICAgLy8gdGhlIGV4aXN0aW5nIGFib3V0OmhvbWUgY2FuIGZpbmQgaXQ7IGFuZCBzbyBpdCBhbGxvd3MgdGhlc2UgdGVzdHMgdG8gcGFzcy5cbiAgICAgIC8vIEluIHRoZSBmdXR1cmUsIHdoZW4gYWN0aXZpdHkgc3RyZWFtIGlzIGRlZmF1bHQgYWJvdXQ6aG9tZSwgdGhpcyBjYW4gYmUgcmVuYW1lZFxuICAgICAgd2luZG93LmdDb250ZW50U2VhcmNoQ29udHJvbGxlciA9IG5ldyBDb250ZW50U2VhcmNoVUlDb250cm9sbGVyKFxuICAgICAgICBpbnB1dCxcbiAgICAgICAgaW5wdXQucGFyZW50Tm9kZSxcbiAgICAgICAgaGVhbHRoUmVwb3J0S2V5XG4gICAgICApO1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcIkNvbnRlbnRTZWFyY2hDbGllbnRcIiwgdGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5nQ29udGVudFNlYXJjaENvbnRyb2xsZXIgPSBudWxsO1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkNvbnRlbnRTZWFyY2hDbGllbnRcIiwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dE1vdW50SGFuZG9mZihpbnB1dCkge1xuICAgIGlmIChpbnB1dCkge1xuICAgICAgLy8gVGhlIGhhbmRvZmYgVUkgY29udHJvbGxlciBoZWxwcyB1cyBzZXQgdGhlIHNlYXJjaCBpY29uIGFuZCByZWFjdHMgdG9cbiAgICAgIC8vIGNoYW5nZXMgdG8gZGVmYXVsdCBlbmdpbmUgdG8ga2VlcCBldmVyeXRoaW5nIGluIHN5bmMuXG4gICAgICB0aGlzLl9oYW5kb2ZmU2VhcmNoQ29udHJvbGxlciA9IG5ldyBDb250ZW50U2VhcmNoSGFuZG9mZlVJQ29udHJvbGxlcigpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoSGFuZG9mZkJ1dHRvbk1vdW50KGJ1dHRvbikge1xuICAgIC8vIEtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIGJ1dHRvbiBmb3IgdXNlIGR1cmluZyBcInBhc3RlXCIgZXZlbnQgaGFuZGxpbmcuXG4gICAgdGhpcy5fc2VhcmNoSGFuZG9mZkJ1dHRvbiA9IGJ1dHRvbjtcbiAgfVxuXG4gIC8qXG4gICAqIERvIG5vdCBjaGFuZ2UgdGhlIElEIG9uIHRoZSBpbnB1dCBmaWVsZCwgYXMgbGVnYWN5IG5ld3RhYiBjb2RlXG4gICAqIHNwZWNpZmljYWxseSBsb29rcyBmb3IgdGhlIGlkICduZXd0YWItc2VhcmNoLXRleHQnIG9uIGlucHV0IGZpZWxkc1xuICAgKiBpbiBvcmRlciB0byBleGVjdXRlIHNlYXJjaGVzIGluIHZhcmlvdXMgdGVzdHNcbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3NOYW1lID0gW1xuICAgICAgXCJzZWFyY2gtd3JhcHBlclwiLFxuICAgICAgdGhpcy5wcm9wcy5kaXNhYmxlICYmIFwic2VhcmNoLWRpc2FibGVkXCIsXG4gICAgICB0aGlzLnByb3BzLmZha2VGb2N1cyAmJiBcImZha2UtZm9jdXNcIixcbiAgICBdXG4gICAgICAuZmlsdGVyKHYgPT4gdilcbiAgICAgIC5qb2luKFwiIFwiKTtcbiAgICBjb25zdCBwcmVmcyA9IHRoaXMucHJvcHMuUHJlZnMudmFsdWVzO1xuXG4gICAgY29uc3QgdHJlbmRpbmdTZWFyY2hFbmFibGVkID1cbiAgICAgIHByZWZzW1widHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXSAmJlxuICAgICAgcHJlZnNbXCJzeXN0ZW0udHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXSAmJlxuICAgICAgcHJlZnNbXCJ0cmVuZGluZ1NlYXJjaC5kZWZhdWx0U2VhcmNoRW5naW5lXCJdPy50b0xvd2VyQ2FzZSgpID09PSBcImdvb2dsZVwiO1xuXG4gICAgY29uc3QgdHJlbmRpbmdTZWFyY2hWYXJpYW50ID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW1widHJlbmRpbmdTZWFyY2gudmFyaWFudFwiXTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlckNsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuc2hvd0xvZ28gJiYgPExvZ28gLz59XG4gICAgICAgICAgeyF0aGlzLnByb3BzLmhhbmRvZmZFbmFibGVkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlubmVyLXdyYXBwZXIgbm8taGFuZG9mZlwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cIm5ld3RhYi1zZWFyY2gtdGV4dFwiXG4gICAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXNlYXJjaC1ib3gtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG1heExlbmd0aD1cIjI1NlwiXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm9uSW5wdXRNb3VudH1cbiAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoU3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItc2VhcmNoLWJveC1zZWFyY2gtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLm9uU2VhcmNoQ2xpY2t9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0cmVuZGluZ1NlYXJjaEVuYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAodHJlbmRpbmdTZWFyY2hWYXJpYW50ID09PSBcImFcIiB8fFxuICAgICAgICAgICAgICAgICAgdHJlbmRpbmdTZWFyY2hWYXJpYW50ID09PSBcImNcIikgJiYgPFRyZW5kaW5nU2VhcmNoZXMgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHt0aGlzLnByb3BzLmhhbmRvZmZFbmFibGVkICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWlubmVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1oYW5kb2ZmLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgcmVmPXt0aGlzLm9uU2VhcmNoSGFuZG9mZkJ1dHRvbk1vdW50fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25TZWFyY2hIYW5kb2ZmQ2xpY2t9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZha2UtdGV4dGJveFwiIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZha2UtZWRpdGFibGVcIlxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25Ecm9wPXt0aGlzLm9uU2VhcmNoSGFuZG9mZkRyb3B9XG4gICAgICAgICAgICAgICAgICBvblBhc3RlPXt0aGlzLm9uU2VhcmNoSGFuZG9mZlBhc3RlfVxuICAgICAgICAgICAgICAgICAgcmVmPXt0aGlzLm9uSW5wdXRNb3VudEhhbmRvZmZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWtlLWNhcmV0XCJcbiAgICAgICAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZha2VDYXJldCA9IGVsO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAge3RyZW5kaW5nU2VhcmNoRW5hYmxlZCAmJlxuICAgICAgICAgICAgICAgICh0cmVuZGluZ1NlYXJjaFZhcmlhbnQgPT09IFwiYVwiIHx8XG4gICAgICAgICAgICAgICAgICB0cmVuZGluZ1NlYXJjaFZhcmlhbnQgPT09IFwiY1wiKSAmJiA8VHJlbmRpbmdTZWFyY2hlcyAvPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU2VhcmNoID0gY29ubmVjdChzdGF0ZSA9PiAoe1xuICBQcmVmczogc3RhdGUuUHJlZnMsXG59KSkoX1NlYXJjaCk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBDb250ZXh0Y29sQUlJbnRlcmZhY2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0VmFsdWU6IFwiXCIsXG4gICAgICBpc0V4cGFuZGVkOiBmYWxzZSxcbiAgICAgIGlzRHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgZmlsZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy50ZXh0YXJlYVJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMuZmlsZUlucHV0UmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IGUgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVLZXlEb3duID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgIWUuc2hpZnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuaGFuZGxlU3VibWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlucHV0VmFsdWUsIGZpbGVzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChpbnB1dFZhbHVlLnRyaW0oKSB8fCBmaWxlcy5sZW5ndGgpIHtcbiAgICAgIC8vIEhhbmRsZSBBSSByZXF1ZXN0IHN1Ym1pc3Npb25cbiAgICAgIC8vIExvZyBBSSByZXF1ZXN0IGZvciBkZXZlbG9wbWVudFxuICAgICAgLy8gY29uc29sZS5sb2coXCJBSSBSZXF1ZXN0OlwiLCB7IHRleHQ6IGlucHV0VmFsdWUsIGZpbGVzIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkFJUmVxdWVzdD8uKGlucHV0VmFsdWUsIGZpbGVzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlOiBcIlwiLCBmaWxlczogW10gfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZvY3VzID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0V4cGFuZGVkOiB0cnVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZUJsdXIgPSBlID0+IHtcbiAgICAvLyBPbmx5IGNvbGxhcHNlIGlmIGNsaWNraW5nIG91dHNpZGUgdGhlIGVudGlyZSBjb21wb25lbnRcbiAgICBpZiAoIWUuY3VycmVudFRhcmdldC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFeHBhbmRlZDogZmFsc2UgfSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZUZpbGVVcGxvYWQgPSBlID0+IHtcbiAgICBjb25zdCBuZXdGaWxlcyA9IEFycmF5LmZyb20oZS50YXJnZXQuZmlsZXMpO1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBmaWxlczogWy4uLnByZXZTdGF0ZS5maWxlcywgLi4ubmV3RmlsZXNdLFxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVSZW1vdmVGaWxlID0gaW5kZXggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBmaWxlczogcHJldlN0YXRlLmZpbGVzLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpLFxuICAgIH0pKTtcbiAgfTtcblxuICBoYW5kbGVEcmFnT3ZlciA9IGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEcmFnZ2luZzogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVEcmFnTGVhdmUgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRHJhZ2dpbmc6IGZhbHNlIH0pO1xuICB9O1xuXG4gIGhhbmRsZURyb3AgPSBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRHJhZ2dpbmc6IGZhbHNlIH0pO1xuXG4gICAgY29uc3QgZHJvcHBlZEZpbGVzID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGZpbGVzOiBbLi4ucHJldlN0YXRlLmZpbGVzLCAuLi5kcm9wcGVkRmlsZXNdLFxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpbnB1dFZhbHVlLCBpc0V4cGFuZGVkLCBpc0RyYWdnaW5nLCBmaWxlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHdhbGxwYXBlcnNFbmFibGVkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1haS1pbnRlcmZhY2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWJhY2tkcm9wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgey8qIExvZ28gU2VjdGlvbiAtIFVuaXF1ZSBDb250ZXh0Y29sIEJyYW5kaW5nICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWxvZ28tc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jb250ZXh0Y29sLmNvbS9hc3NldHMvY29udGV4dGNvbC5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNvbnRleHRjb2xcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHRjb2wtbG9nb1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIE1haW4gQ1RBIFNlY3Rpb24gKi99XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbnRleHRjb2wtY3RhLWNvbnRhaW5lciAke2lzRXhwYW5kZWQgPyBcImV4cGFuZGVkXCIgOiBcIlwifSAke2lzRHJhZ2dpbmcgPyBcImRyYWdnaW5nXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXN9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICBvbkRyYWdPdmVyPXt0aGlzLmhhbmRsZURyYWdPdmVyfVxuICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17dGhpcy5oYW5kbGVEcmFnTGVhdmV9XG4gICAgICAgICAgICAgIG9uRHJvcD17dGhpcy5oYW5kbGVEcm9wfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRleHRjb2wtY3RhLWJhY2tkcm9wXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWlucHV0LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICByZWY9e3RoaXMudGV4dGFyZWFSZWZ9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLmhhbmRsZUtleURvd259XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCB5b3Ugd2FudCBDb250ZXh0Y29sIEFJIGFnZW50IHRvIGRvIGZvciB5b3Ugb24gQnJvd3Nlcj9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0Y29sLW1haW4taW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICByb3dzPXtpc0V4cGFuZGVkID8gNCA6IDJ9XG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICB7LyogRmlsZSBEaXNwbGF5ICovfVxuICAgICAgICAgICAgICAgICAge0Jvb2xlYW4oZmlsZXMubGVuZ3RoKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1maWxlcy1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2ZpbGVzLm1hcCgoZmlsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiY29udGV4dGNvbC1maWxlLWNoaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29udGV4dGNvbC1maWxlLWljb25cIj7wn5OOPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWZpbGUtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWxlLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlRmlsZShpbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1maWxlLXJlbW92ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlJlbW92ZSBmaWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOXXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b25zICovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLXNlY29uZGFyeS1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5maWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRleHRjb2wtYWN0aW9uLWJ0biBjb250ZXh0Y29sLWZpbGUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVXBsb2FkIGZpbGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNCwySDZBMiwyIDAgMCwwIDQsNFYyMEEyLDIgMCAwLDAgNiwyMkgxOEEyLDIgMCAwLDAgMjAsMjBWOEwxNCwyTTE4LDIwSDZWNEgxM1Y5SDE4VjIwWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWFjdGlvbi1idG4gY29udGV4dGNvbC1saW5rLWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCBsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zLjksMTJDMy45LDEwLjI5IDUuMjksOC45IDcsOC45SDExVjdIN0E1LDUgMCAwLDAgMiwxMkE1LDUgMCAwLDAgNywxN0gxMVYxNS4xSDdDNS4yOSwxNS4xIDMuOSwxMy43MSAzLjksMTJNOCwxM0gxNlYxMUg4VjEzTTE3LDdIMTNWOC45SDE3QzE4LjcxLDguOSAyMC4xLDEwLjI5IDIwLjEsMTJDMjAuMSwxMy43MSAxOC43MSwxNS4xIDE3LDE1LjFIMTNWMTdIMTdBNSw1IDAgMCwwIDIyLDEyQTUsNSAwIDAsMCAxNyw3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWFjdGlvbi1idG4gY29udGV4dGNvbC12b2ljZS1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb2ljZSBpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIsMkEzLDMgMCAwLDEgMTUsNVYxMUEzLDMgMCAwLDEgMTIsMTRBMywzIDAgMCwxIDksMTFWNUEzLDMgMCAwLDEgMTIsMk0xOSwxMUMxOSwxNC41MyAxNi4zOSwxNy40NCAxMywxNy45M1YyMUgxMVYxNy45M0M3LjYxLDE3LjQ0IDUsMTQuNTMgNSwxMUg3QTUsNSAwIDAsMCAxMiwxNkE1LDUgMCAwLDAgMTcsMTFIMTlaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1wcmltYXJ5LWJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpbnB1dFZhbHVlLnRyaW0oKSAmJiAhZmlsZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNCwxMVYxM0gxNkwxMC41LDE4LjVMMTEuOTIsMTkuOTJMMTkuODQsMTJMMTEuOTIsNC4wOEwxMC41LDUuNUwxNiwxMUg0WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LyogRHJhZyBPdmVybGF5ICovfVxuICAgICAgICAgICAgICAgIHtpc0RyYWdnaW5nICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGV4dGNvbC1kcmFnLW92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZXh0Y29sLWRyYWctY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDJINkEyLDIgMCAwLDAgNCw0VjIwQTIsMiAwIDAsMCA2LDIySDE4QTIsMiAwIDAsMCAyMCwyMFY4TDE0LDJNMTgsMjBINlY0SDEzVjlIMThWMjBaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICA8cD5Ecm9wIGZpbGVzIGhlcmUgdG8gdXBsb2FkPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBXYWxscGFwZXIgQXR0cmlidXRpb24gKi99XG4gICAgICAgICAgICB7d2FsbHBhcGVyc0VuYWJsZWQgJiYgdGhpcy5wcm9wcy5yZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbj8uKCl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHsvKiBIaWRkZW4gRmlsZSBJbnB1dCAqL31cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXt0aGlzLmZpbGVJbnB1dFJlZn1cbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgbXVsdGlwbGU9e3RydWV9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsZVVwbG9hZH1cbiAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5cbmZ1bmN0aW9uIExvY2F0aW9uU2VhcmNoKHsgb3V0ZXJDbGFzc05hbWUgfSkge1xuICAvLyBzaG91bGQgYmUgdGhlIGxvY2F0aW9uIG9iamVjdCBmcm9tIHN1Z2dlc3RlZExvY2F0aW9uc1xuICBjb25zdCBbc2VsZWN0ZWRMb2NhdGlvbiwgc2V0U2VsZWN0ZWRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgc3VnZ2VzdGVkTG9jYXRpb25zID0gdXNlU2VsZWN0b3IoXG4gICAgc3RhdGUgPT4gc3RhdGUuV2VhdGhlci5zdWdnZXN0ZWRMb2NhdGlvbnNcbiAgKTtcbiAgY29uc3QgbG9jYXRpb25TZWFyY2hTdHJpbmcgPSB1c2VTZWxlY3RvcihcbiAgICBzdGF0ZSA9PiBzdGF0ZS5XZWF0aGVyLmxvY2F0aW9uU2VhcmNoU3RyaW5nXG4gICk7XG4gIGNvbnN0IFt1c2VySW5wdXQsIHNldFVzZXJJbnB1dF0gPSB1c2VTdGF0ZShsb2NhdGlvblNlYXJjaFN0cmluZyB8fCBcIlwiKTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkTG9jYXRpb24pIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5XRUFUSEVSX0xPQ0FUSU9OX0RBVEFfVVBEQVRFLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNpdHk6IHNlbGVjdGVkTG9jYXRpb24ubG9jYWxpemVkX25hbWUsXG4gICAgICAgICAgICBhZG1pbk5hbWU6IHNlbGVjdGVkTG9jYXRpb24uYWRtaW5pc3RyYXRpdmVfYXJlYSxcbiAgICAgICAgICAgIGNvdW50cnk6IHNlbGVjdGVkTG9jYXRpb24uY291bnRyeSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICAgIGRpc3BhdGNoKGFjLlNldFByZWYoXCJ3ZWF0aGVyLnF1ZXJ5XCIsIHNlbGVjdGVkTG9jYXRpb24ua2V5KSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQnJvYWRjYXN0VG9Db250ZW50KHtcbiAgICAgICAgICB0eXBlOiBhdC5XRUFUSEVSX1NFQVJDSF9BQ1RJVkUsXG4gICAgICAgICAgZGF0YTogZmFsc2UsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSwgW3NlbGVjdGVkTG9jYXRpb24sIGRpc3BhdGNoXSk7XG5cbiAgLy8gd2hlbiBjb21wb25lbnQgbW91bnRzLCBzZXQgZm9jdXMgdG8gaW5wdXRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbnB1dFJlZj8uY3VycmVudD8uZm9jdXMoKTtcbiAgfSwgW2lucHV0UmVmXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldFVzZXJJbnB1dCh2YWx1ZSk7XG4gICAgLy8gaWYgdGhlIHVzZXIgaW5wdXQgY29udGFpbnMgbGVzcyB0aGFuIHRocmVlIGNoYXJhY3RlcnMgYW5kIHN1Z2dlc3RlZExvY2F0aW9ucyBpcyBub3QgYW4gZW1wdHkgYXJyYXksXG4gICAgLy8gcmVzZXQgc3VnZ2VzdGVkTG9jYXRpb25zIHRvIFtdIHNvIHRoZXJlIGFyZW50IGluY29ycmVjdCBpdGVtcyBpbiB0aGUgZGF0YWxpc3RcbiAgICBpZiAodmFsdWUubGVuZ3RoIDwgMyAmJiBzdWdnZXN0ZWRMb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9MT0NBVElPTl9TVUdHRVNUSU9OU19VUERBVEUsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICAvLyBmaW5kIG1hdGNoIGluIHN1Z2dlc3RlZExvY2F0aW9uIGFycmF5XG4gICAgY29uc3QgbWF0Y2ggPSBzdWdnZXN0ZWRMb2NhdGlvbnM/LmZpbmQoKHsga2V5IH0pID0+IGtleSA9PT0gdmFsdWUpO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgc2V0U2VsZWN0ZWRMb2NhdGlvbihtYXRjaCk7XG4gICAgICBzZXRVc2VySW5wdXQoXG4gICAgICAgIGAke21hdGNoLmxvY2FsaXplZF9uYW1lfSwgJHttYXRjaC5hZG1pbmlzdHJhdGl2ZV9hcmVhLmxvY2FsaXplZF9uYW1lfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPj0gMyAmJiAhbWF0Y2gpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5XRUFUSEVSX0xPQ0FUSU9OX1NFQVJDSF9VUERBVEUsXG4gICAgICAgICAgZGF0YTogdmFsdWUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlU2VhcmNoKCkge1xuICAgIGRpc3BhdGNoKFxuICAgICAgYWMuQnJvYWRjYXN0VG9Db250ZW50KHtcbiAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9TRUFSQ0hfQUNUSVZFLFxuICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBzZXRVc2VySW5wdXQoXCJcIik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGhhbmRsZUNsb3NlU2VhcmNoKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7b3V0ZXJDbGFzc05hbWV9IGxvY2F0aW9uLXNlYXJjaGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhdGlvbi1pbnB1dC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWljb25cIiAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZWY9e2lucHV0UmVmfVxuICAgICAgICAgIGxpc3Q9XCJtZXJpbm8tbG9jYXRpb24tbGlzdFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13ZWF0aGVyLWNoYW5nZS1sb2NhdGlvbi1zZWFyY2gtaW5wdXQtcGxhY2Vob2xkZXJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgdmFsdWU9e3VzZXJJbnB1dH1cbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleURvd259XG4gICAgICAgIC8+XG4gICAgICAgIDxtb3otYnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJjbG9zZS1pY29uXCJcbiAgICAgICAgICB0eXBlPVwiaWNvbiBnaG9zdFwiXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICBpY29uU3JjPVwiY2hyb21lOi8vZ2xvYmFsL3NraW4vaWNvbnMvY2xvc2Uuc3ZnXCJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZVNlYXJjaH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRhdGFsaXN0IGlkPVwibWVyaW5vLWxvY2F0aW9uLWxpc3RcIj5cbiAgICAgICAgICB7KHN1Z2dlc3RlZExvY2F0aW9ucyB8fCBbXSkubWFwKG1lcmlub0xjYXRpb24gPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17bWVyaW5vTGNhdGlvbi5rZXl9IGtleT17bWVyaW5vTGNhdGlvbi5rZXl9PlxuICAgICAgICAgICAgICB7bWVyaW5vTGNhdGlvbi5sb2NhbGl6ZWRfbmFtZX0se1wiIFwifVxuICAgICAgICAgICAgICB7bWVyaW5vTGNhdGlvbi5hZG1pbmlzdHJhdGl2ZV9hcmVhLmxvY2FsaXplZF9uYW1lfVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgTG9jYXRpb25TZWFyY2ggfTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IExpbmtNZW51IH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvTGlua01lbnUvTGlua01lbnVcIjtcbmltcG9ydCB7IExvY2F0aW9uU2VhcmNoIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvV2VhdGhlci9Mb2NhdGlvblNlYXJjaFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfSBmcm9tIFwiLi4vLi4vbGliL3V0aWxzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgVklTSUJMRSA9IFwidmlzaWJsZVwiO1xuY29uc3QgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQgPSBcInZpc2liaWxpdHljaGFuZ2VcIjtcblxuZnVuY3Rpb24gV2VhdGhlclBsYWNlaG9sZGVyKCkge1xuICBjb25zdCBbaXNTZWVuLCBzZXRJc1NlZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIFdlIGFyZSBzZXR0aW5nIHVwIGEgdmlzaWJpbGl0eSBhbmQgaW50ZXJzZWN0aW9uIGV2ZW50XG4gIC8vIHNvIGFuaW1hdGlvbnMgZG9uJ3QgaGFwcGVuIHdpdGggaGVhZGxlc3MgYXV0b21hdGlvbi5cbiAgLy8gVGhlIGFuaW1hdGlvbnMgY2F1c2VzIHRlc3RzIHRvIGZhaWwgYmVhdXNlIHRoZXkgbmV2ZXIgc3RvcCxcbiAgLy8gYW5kIG1hbnkgdGVzdHMgd2FpdCB1bnRpbCBldmVyeXRoaW5nIGhhcyBzdG9wcGVkIGJlZm9yZSBwYXNzaW5nLlxuICBjb25zdCByZWYgPSB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcigoKSA9PiBzZXRJc1NlZW4odHJ1ZSksIDEpO1xuXG4gIGNvbnN0IGlzU2VlbkNsYXNzTmFtZSA9IGlzU2VlbiA/IGBwbGFjZWhvbGRlci1zZWVuYCA6IGBgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgd2VhdGhlciB3ZWF0aGVyLXBsYWNlaG9sZGVyICR7aXNTZWVuQ2xhc3NOYW1lfWB9XG4gICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgcmVmLmN1cnJlbnQgPSBbZWxdO1xuICAgICAgfX1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyLWltYWdlIHBsYWNlaG9sZGVyLWZpbGxcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlci1jb250ZXh0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxhY2Vob2xkZXItaGVhZGVyIHBsYWNlaG9sZGVyLWZpbGxcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyLWRlc2NyaXB0aW9uIHBsYWNlaG9sZGVyLWZpbGxcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjbGFzcyBfV2VhdGhlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29udGV4dE1lbnVLZXlib2FyZDogZmFsc2UsXG4gICAgICBzaG93Q29udGV4dE1lbnU6IGZhbHNlLFxuICAgICAgdXJsOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIGltcHJlc3Npb25TZWVuOiBmYWxzZSxcbiAgICAgIGVycm9yU2VlbjogZmFsc2UsXG4gICAgfTtcbiAgICB0aGlzLnNldEltcHJlc3Npb25SZWYgPSBlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuaW1wcmVzc2lvbkVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH07XG4gICAgdGhpcy5zZXRFcnJvclJlZiA9IGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5lcnJvckVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH07XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25VcGRhdGUgPSB0aGlzLm9uVXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblByb3ZpZGVyQ2xpY2sgPSB0aGlzLm9uUHJvdmlkZXJDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcblxuICAgIGlmICghcHJvcHMuZGlzcGF0Y2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcHMuZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBWSVNJQkxFKSB7XG4gICAgICAvLyBTZXR1cCB0aGUgaW1wcmVzc2lvbiBvYnNlcnZlciBvbmNlIHRoZSBwYWdlIGlzIHZpc2libGUuXG4gICAgICB0aGlzLnNldEltcHJlc3Npb25PYnNlcnZlcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgZXZlciBzZW5kIHRoZSBsYXRlc3QgaW1wcmVzc2lvbiBzdGF0cyBwaW5nLCBzbyByZW1vdmUgYW55XG4gICAgICAvLyBvbGRlciBsaXN0ZW5lcnMuXG4gICAgICBpZiAodGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlKSB7XG4gICAgICAgIHByb3BzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLmRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gVklTSUJMRSkge1xuICAgICAgICAgIC8vIFNldHVwIHRoZSBpbXByZXNzaW9uIG9ic2VydmVyIG9uY2UgdGhlIHBhZ2UgaXMgdmlzaWJsZS5cbiAgICAgICAgICB0aGlzLnNldEltcHJlc3Npb25PYnNlcnZlcnMoKTtcbiAgICAgICAgICBwcm9wcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcHJvcHMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBSZW1vdmUgb2JzZXJ2ZXJzIG9uIHVubW91bnRcbiAgICBpZiAodGhpcy5vYnNlcnZlciAmJiB0aGlzLmltcHJlc3Npb25FbGVtZW50KSB7XG4gICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmltcHJlc3Npb25FbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHRoaXMub2JzZXJ2ZXIgJiYgdGhpcy5lcnJvckVsZW1lbnQpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuZXJyb3JFbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBWSVNJQklMSVRZX0NIQU5HRV9FVkVOVCxcbiAgICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNldEltcHJlc3Npb25PYnNlcnZlcnMoKSB7XG4gICAgaWYgKHRoaXMuaW1wcmVzc2lvbkVsZW1lbnQpIHtcbiAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5vbkltcHJlc3Npb24uYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5pbXByZXNzaW9uRWxlbWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVycm9yRWxlbWVudCkge1xuICAgICAgdGhpcy5vYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcih0aGlzLm9uRXJyb3IuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLm9ic2VydmVyLm9ic2VydmUodGhpcy5lcnJvckVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uSW1wcmVzc2lvbihlbnRyaWVzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllcy5maW5kKGUgPT4gZS5pc0ludGVyc2VjdGluZyk7XG5cbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAodGhpcy5pbXByZXNzaW9uRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMub2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuaW1wcmVzc2lvbkVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICAgIHR5cGU6IGF0LldFQVRIRVJfSU1QUkVTU0lPTixcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFN0b3Agb2JzZXJ2aW5nIHNpbmNlIGVsZW1lbnQgaGFzIGJlZW4gc2VlblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbXByZXNzaW9uU2VlbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25FcnJvcihlbnRyaWVzKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgIGNvbnN0IGVudHJ5ID0gZW50cmllcy5maW5kKGUgPT4gZS5pc0ludGVyc2VjdGluZyk7XG5cbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAodGhpcy5lcnJvckVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLm9ic2VydmVyLnVub2JzZXJ2ZSh0aGlzLmVycm9yRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKFxuICAgICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgICAgdHlwZTogYXQuV0VBVEhFUl9MT0FEX0VSUk9SLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gU3RvcCBvYnNlcnZpbmcgc2luY2UgZWxlbWVudCBoYXMgYmVlbiBzZWVuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGVycm9yU2VlbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3BlbkNvbnRleHRNZW51KGlzS2V5Qm9hcmQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblVwZGF0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblVwZGF0ZSh0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93Q29udGV4dE1lbnU6IHRydWUsXG4gICAgICBjb250ZXh0TWVudUtleWJvYXJkOiBpc0tleUJvYXJkLFxuICAgIH0pO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5vcGVuQ29udGV4dE1lbnUoZmFsc2UsIGV2ZW50KTtcbiAgfVxuXG4gIG9uS2V5RG93bihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiB8fCBldmVudC5rZXkgPT09IFwiIFwiKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5vcGVuQ29udGV4dE1lbnUodHJ1ZSwgZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIG9uVXBkYXRlKHNob3dDb250ZXh0TWVudSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVXBkYXRlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uVXBkYXRlKHNob3dDb250ZXh0TWVudSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29udGV4dE1lbnUgfSk7XG4gIH1cblxuICBvblByb3ZpZGVyQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICB0eXBlOiBhdC5XRUFUSEVSX09QRU5fUFJPVklERVJfVVJMLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc291cmNlOiBcIldFQVRIRVJcIixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBDaGVjayBpZiB3ZWF0aGVyIHNob3VsZCBiZSByZW5kZXJlZFxuICAgIGNvbnN0IGlzV2VhdGhlckVuYWJsZWQgPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlc1tcInN5c3RlbS5zaG93V2VhdGhlclwiXTtcblxuICAgIGlmICghaXNXZWF0aGVyRW5hYmxlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIHRoaXMucHJvcHMuQXBwLmlzRm9yU3RhcnR1cENhY2hlLldlYXRoZXIgfHxcbiAgICAgICF0aGlzLnByb3BzLldlYXRoZXIuaW5pdGlhbGl6ZWRcbiAgICApIHtcbiAgICAgIHJldHVybiA8V2VhdGhlclBsYWNlaG9sZGVyIC8+O1xuICAgIH1cblxuICAgIGNvbnN0IHsgc2hvd0NvbnRleHRNZW51IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcblxuICAgIGNvbnN0IHsgZGlzcGF0Y2gsIFByZWZzLCBXZWF0aGVyIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IFdFQVRIRVJfU1VHR0VTVElPTiA9IFdlYXRoZXIuc3VnZ2VzdGlvbnM/LlswXTtcblxuICAgIGNvbnN0IG91dGVyQ2xhc3NOYW1lID0gW1wid2VhdGhlclwiLCBXZWF0aGVyLnNlYXJjaEFjdGl2ZSAmJiBcInNlYXJjaFwiXVxuICAgICAgLmZpbHRlcih2ID0+IHYpXG4gICAgICAuam9pbihcIiBcIik7XG5cbiAgICBjb25zdCBzaG93RGV0YWlsZWRWaWV3ID0gUHJlZnMudmFsdWVzW1wid2VhdGhlci5kaXNwbGF5XCJdID09PSBcImRldGFpbGVkXCI7XG5cbiAgICAvLyBOb3RlOiBUaGUgdGVtcGVyYXR1cmUgdW5pdHMvZGlzcGxheSBvcHRpb25zIHdpbGwgYmVjb21lIHNlY29uZGFyeSBtZW51IGl0ZW1zXG4gICAgY29uc3QgV0VBVEhFUl9TT1VSQ0VfQ09OVEVYVF9NRU5VX09QVElPTlMgPSBbXG4gICAgICAuLi4oUHJlZnMudmFsdWVzW1wid2VhdGhlci5sb2NhdGlvblNlYXJjaEVuYWJsZWRcIl1cbiAgICAgICAgPyBbXCJDaGFuZ2VXZWF0aGVyTG9jYXRpb25cIl1cbiAgICAgICAgOiBbXSksXG4gICAgICAuLi4oUHJlZnMudmFsdWVzW1wid2VhdGhlci50ZW1wZXJhdHVyZVVuaXRzXCJdID09PSBcImZcIlxuICAgICAgICA/IFtcIkNoYW5nZVRlbXBVbml0Q2Vsc2l1c1wiXVxuICAgICAgICA6IFtcIkNoYW5nZVRlbXBVbml0RmFocmVuaGVpdFwiXSksXG4gICAgICAuLi4oUHJlZnMudmFsdWVzW1wid2VhdGhlci5kaXNwbGF5XCJdID09PSBcInNpbXBsZVwiXG4gICAgICAgID8gW1wiQ2hhbmdlV2VhdGhlckRpc3BsYXlEZXRhaWxlZFwiXVxuICAgICAgICA6IFtcIkNoYW5nZVdlYXRoZXJEaXNwbGF5U2ltcGxlXCJdKSxcbiAgICAgIFwiSGlkZVdlYXRoZXJcIixcbiAgICAgIFwiT3BlbkxlYXJuTW9yZVVSTFwiLFxuICAgIF07XG4gICAgY29uc3QgV0VBVEhFUl9TT1VSQ0VfRVJST1JfQ09OVEVYVF9NRU5VX09QVElPTlMgPSBbXG4gICAgICAuLi4oUHJlZnMudmFsdWVzW1wid2VhdGhlci5sb2NhdGlvblNlYXJjaEVuYWJsZWRcIl1cbiAgICAgICAgPyBbXCJDaGFuZ2VXZWF0aGVyTG9jYXRpb25cIl1cbiAgICAgICAgOiBbXSksXG4gICAgICBcIkhpZGVXZWF0aGVyXCIsXG4gICAgICBcIk9wZW5MZWFybk1vcmVVUkxcIixcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGV4dE1lbnUgPSBjb250ZXh0T3B0cyA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJCdXR0b25Db250ZXh0TWVudVdyYXBwZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICBvbktleURvd249e3RoaXMub25LZXlEb3dufVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25DbGlja31cbiAgICAgICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItbWVudS1zZWN0aW9uLXRvb2x0aXBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIndlYXRoZXJCdXR0b25Db250ZXh0TWVudVwiXG4gICAgICAgID5cbiAgICAgICAgICB7c2hvd0NvbnRleHRNZW51ID8gKFxuICAgICAgICAgICAgPExpbmtNZW51XG4gICAgICAgICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgICAgICAgaW5kZXg9ezB9XG4gICAgICAgICAgICAgIHNvdXJjZT1cIldFQVRIRVJcIlxuICAgICAgICAgICAgICBvblVwZGF0ZT17dGhpcy5vblVwZGF0ZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17Y29udGV4dE9wdHN9XG4gICAgICAgICAgICAgIHNpdGU9e3tcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdXBwb3J0Lm1vemlsbGEub3JnL2tiL2N1c3RvbWl6ZS1pdGVtcy1vbi1maXJlZm94LW5ldy10YWItcGFnZVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly9zdXBwb3J0Lm1vemlsbGEub3JnL2tiL2N1c3RvbWl6ZS1pdGVtcy1vbi1maXJlZm94LW5ldy10YWItcGFnZVwiXG4gICAgICAgICAgICAgIHNob3VsZFNlbmRJbXByZXNzaW9uU3RhdHM9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgaWYgKFdlYXRoZXIuc2VhcmNoQWN0aXZlKSB7XG4gICAgICByZXR1cm4gPExvY2F0aW9uU2VhcmNoIG91dGVyQ2xhc3NOYW1lPXtvdXRlckNsYXNzTmFtZX0gLz47XG4gICAgfSBlbHNlIGlmIChXRUFUSEVSX1NVR0dFU1RJT04pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLnNldEltcHJlc3Npb25SZWZ9IGNsYXNzTmFtZT17b3V0ZXJDbGFzc05hbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlckNhcmRcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13ZWF0aGVyLXNlZS1mb3JlY2FzdFwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPSd7XCJwcm92aWRlclwiOiBcIkFjY3VXZWF0aGVywq5cIn0nXG4gICAgICAgICAgICAgIGhyZWY9e1dFQVRIRVJfU1VHR0VTVElPTi5mb3JlY2FzdC51cmx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndlYXRoZXJJbmZvTGlua1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25Qcm92aWRlckNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJJY29uQ29sXCI+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHdlYXRoZXJJY29uIGljb25JZCR7V0VBVEhFUl9TVUdHRVNUSU9OLmN1cnJlbnRfY29uZGl0aW9ucy5pY29uX2lkfWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlclRleHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJGb3JlY2FzdFJvd1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2VhdGhlclRlbXBlcmF0dXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBXRUFUSEVSX1NVR0dFU1RJT04uY3VycmVudF9jb25kaXRpb25zLnRlbXBlcmF0dXJlW1xuICAgICAgICAgICAgICAgICAgICAgICAgUHJlZnMudmFsdWVzW1wid2VhdGhlci50ZW1wZXJhdHVyZVVuaXRzXCJdXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICZkZWc7e1ByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJDaXR5Um93XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZWF0aGVyQ2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICB7V2VhdGhlci5sb2NhdGlvbkRhdGEuY2l0eX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7c2hvd0RldGFpbGVkVmlldyA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VhdGhlckRldGFpbGVkU3VtbWFyeVJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJIaWdoTG93VGVtcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogTG93IEZvcmVjYXN0ZWQgVGVtcGVyYXR1cmUgKi99XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFdFQVRIRVJfU1VHR0VTVElPTi5mb3JlY2FzdC5oaWdoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmZGVnO1xuICAgICAgICAgICAgICAgICAgICAgICAge1ByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIFNwYWNlciAvIEJ1bGxldCAqL31cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4mYnVsbDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIExvdyBGb3JlY2FzdGVkIFRlbXBlcmF0dXJlICovfVxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBXRUFUSEVSX1NVR0dFU1RJT04uZm9yZWNhc3QubG93W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAmZGVnO1xuICAgICAgICAgICAgICAgICAgICAgICAge1ByZWZzLnZhbHVlc1tcIndlYXRoZXIudGVtcGVyYXR1cmVVbml0c1wiXX1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3ZWF0aGVyVGV4dFN1bW1hcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7V0VBVEhFUl9TVUdHRVNUSU9OLmN1cnJlbnRfY29uZGl0aW9ucy5zdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB7Y29udGV4dE1lbnUoV0VBVEhFUl9TT1VSQ0VfQ09OVEVYVF9NRU5VX09QVElPTlMpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndlYXRoZXJTcG9uc29yVGV4dFwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXdlYXRoZXItc3BvbnNvcmVkXCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWFyZ3M9J3tcInByb3ZpZGVyXCI6IFwiQWNjdVdlYXRoZXLCrlwifSdcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXt0aGlzLnNldEVycm9yUmVmfSBjbGFzc05hbWU9e291dGVyQ2xhc3NOYW1lfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWF0aGVyTm90QXZhaWxhYmxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaWNvbiBpY29uLWluZm8td2FybmluZ1wiIC8+e1wiIFwifVxuICAgICAgICAgIDxwIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13ZWF0aGVyLWVycm9yLW5vdC1hdmFpbGFibGVcIj48L3A+XG4gICAgICAgICAge2NvbnRleHRNZW51KFdFQVRIRVJfU09VUkNFX0VSUk9SX0NPTlRFWFRfTUVOVV9PUFRJT05TKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXZWF0aGVyID0gY29ubmVjdChzdGF0ZSA9PiAoe1xuICBBcHA6IHN0YXRlLkFwcCxcbiAgV2VhdGhlcjogc3RhdGUuV2VhdGhlcixcbiAgUHJlZnM6IHN0YXRlLlByZWZzLFxuICBJbnRlcnNlY3Rpb25PYnNlcnZlcjogZ2xvYmFsVGhpcy5JbnRlcnNlY3Rpb25PYnNlcnZlcixcbiAgZG9jdW1lbnQ6IGdsb2JhbFRoaXMuZG9jdW1lbnQsXG59KSkoX1dlYXRoZXIpO1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBEb3dubG9hZE1vZGFsVG9nZ2xlKHsgb25DbGljaywgaXNBY3RpdmUgfSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YG1vYmlsZS1kb3dubG9hZC1wcm9tbyAke2lzQWN0aXZlID8gXCIgaXMtYWN0aXZlXCIgOiBcIlwifWB9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWRldmljZS1waG9uZVwiPjwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5leHBvcnQgeyBEb3dubG9hZE1vZGFsVG9nZ2xlIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gVGh1bWJVcFRodW1iRG93blRvYXN0KHsgb25EaXNtaXNzQ2xpY2ssIG9uQW5pbWF0aW9uRW5kIH0pIHtcbiAgY29uc3QgbW96TWVzc2FnZUJhclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogbW96TWVzc2FnZUJhckVsZW1lbnQgfSA9IG1vek1lc3NhZ2VCYXJSZWY7XG5cbiAgICBtb3pNZXNzYWdlQmFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJtZXNzYWdlLWJhcjp1c2VyLWRpc21pc3NlZFwiLFxuICAgICAgb25EaXNtaXNzQ2xpY2ssXG4gICAgICB7XG4gICAgICAgIG9uY2U6IHRydWUsXG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBtb3pNZXNzYWdlQmFyRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICBcIm1lc3NhZ2UtYmFyOnVzZXItZGlzbWlzc2VkXCIsXG4gICAgICAgIG9uRGlzbWlzc0NsaWNrXG4gICAgICApO1xuICAgIH07XG4gIH0sIFtvbkRpc21pc3NDbGlja10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vei1tZXNzYWdlLWJhclxuICAgICAgdHlwZT1cInN1Y2Nlc3NcIlxuICAgICAgY2xhc3M9XCJub3RpZmljYXRpb24tZmVlZC1pdGVtXCJcbiAgICAgIGRpc21pc3NhYmxlPXt0cnVlfVxuICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLXRvYXN0LXRodW1icy11cC1vci1kb3duMlwiXG4gICAgICByZWY9e21vek1lc3NhZ2VCYXJSZWZ9XG4gICAgICBvbkFuaW1hdGlvbkVuZD17b25BbmltYXRpb25FbmR9XG4gICAgPjwvbW96LW1lc3NhZ2UtYmFyPlxuICApO1xufVxuXG5leHBvcnQgeyBUaHVtYlVwVGh1bWJEb3duVG9hc3QgfTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBSZXBvcnRDb250ZW50VG9hc3QoeyBvbkRpc21pc3NDbGljaywgb25BbmltYXRpb25FbmQgfSkge1xuICBjb25zdCBtb3pNZXNzYWdlQmFyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBtb3pNZXNzYWdlQmFyRWxlbWVudCB9ID0gbW96TWVzc2FnZUJhclJlZjtcblxuICAgIG1vek1lc3NhZ2VCYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcIm1lc3NhZ2UtYmFyOnVzZXItZGlzbWlzc2VkXCIsXG4gICAgICBvbkRpc21pc3NDbGljayxcbiAgICAgIHtcbiAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG1vek1lc3NhZ2VCYXJFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFwibWVzc2FnZS1iYXI6dXNlci1kaXNtaXNzZWRcIixcbiAgICAgICAgb25EaXNtaXNzQ2xpY2tcbiAgICAgICk7XG4gICAgfTtcbiAgfSwgW29uRGlzbWlzc0NsaWNrXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bW96LW1lc3NhZ2UtYmFyXG4gICAgICB0eXBlPVwic3VjY2Vzc1wiXG4gICAgICBjbGFzcz1cIm5vdGlmaWNhdGlvbi1mZWVkLWl0ZW1cIlxuICAgICAgZGlzbWlzc2FibGU9e3RydWV9XG4gICAgICBkYXRhLWwxMG4taWQ9XCJuZXd0YWItdG9hc3QtdGhhbmtzLWZvci1yZXBvcnRpbmdcIlxuICAgICAgcmVmPXttb3pNZXNzYWdlQmFyUmVmfVxuICAgICAgb25BbmltYXRpb25FbmQ9e29uQW5pbWF0aW9uRW5kfVxuICAgID48L21vei1tZXNzYWdlLWJhcj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgUmVwb3J0Q29udGVudFRvYXN0IH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IFRodW1iVXBUaHVtYkRvd25Ub2FzdCB9IGZyb20gXCIuL1RvYXN0cy9UaHVtYlVwVGh1bWJEb3duVG9hc3RcIjtcbmltcG9ydCB7IFJlcG9ydENvbnRlbnRUb2FzdCB9IGZyb20gXCIuL1RvYXN0cy9SZXBvcnRDb250ZW50VG9hc3RcIjtcblxuZnVuY3Rpb24gTm90aWZpY2F0aW9ucyh7IGRpc3BhdGNoIH0pIHtcbiAgY29uc3QgdG9hc3RRdWV1ZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLk5vdGlmaWNhdGlvbnMudG9hc3RRdWV1ZSk7XG4gIGNvbnN0IHRvYXN0Q291bnRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLk5vdGlmaWNhdGlvbnMudG9hc3RDb3VudGVyKTtcblxuICAvKipcbiAgICogU3luY3Mge0BsaW5rIHRvYXN0UXVldWV9IGFycmF5IHNvIGl0IGNhbiBiZSB1c2VkIHRvXG4gICAqIHJlbW92ZSB0aGUgdG9hc3RzIHdyYXBwZXIgaWYgdGhlcmUgYXJlIG5vbmUgYWZ0ZXIgYVxuICAgKiB0b2FzdCBpcyBhdXRvLWhpZGRlbiAoYW5pbWF0ZWQgb3V0KSB2aWEgQ1NTLlxuICAgKi9cbiAgY29uc3Qgc3luY0hpZGRlblRvYXN0RGF0YSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCB0b2FzdElkID0gdG9hc3RRdWV1ZVt0b2FzdFF1ZXVlLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHF1ZXVlZFRvYXN0cyA9IFsuLi50b2FzdFF1ZXVlXS5zbGljZSgxKTtcbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLk9ubHlUb09uZUNvbnRlbnQoXG4gICAgICAgIHtcbiAgICAgICAgICB0eXBlOiBhdC5ISURFX1RPQVNUX01FU1NBR0UsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdG9hc3RRdWV1ZTogcXVldWVkVG9hc3RzLFxuICAgICAgICAgICAgdG9hc3RDb3VudGVyOiBxdWV1ZWRUb2FzdHMubGVuZ3RoLFxuICAgICAgICAgICAgdG9hc3RJZCxcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBcIkFjdGl2aXR5U3RyZWFtOkNvbnRlbnRcIlxuICAgICAgKVxuICAgICk7XG4gIH0sIFtkaXNwYXRjaCwgdG9hc3RRdWV1ZV0pO1xuXG4gIGNvbnN0IGdldFRvYXN0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIC8vIE5vdGU6IFRoaXMgYXJjaGl0ZWN0dXJlIGNvdWxkIGV4cGFuZCB0byBzdXBwb3J0IG11bHRpcGxlIHRvYXN0IG5vdGlmaWNhdGlvbnMgYXQgb25jZVxuICAgIGNvbnN0IGxhdGVzdFRvYXN0SXRlbSA9IHRvYXN0UXVldWVbdG9hc3RRdWV1ZS5sZW5ndGggLSAxXTtcblxuICAgIGlmICghbGF0ZXN0VG9hc3RJdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyB0b2FzdCBmb3VuZFwiKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGxhdGVzdFRvYXN0SXRlbSkge1xuICAgICAgY2FzZSBcInJlcG9ydFN1Y2Nlc3NUb2FzdFwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZXBvcnRDb250ZW50VG9hc3RcbiAgICAgICAgICAgIG9uRGlzbWlzc0NsaWNrPXtzeW5jSGlkZGVuVG9hc3REYXRhfVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9e3N5bmNIaWRkZW5Ub2FzdERhdGF9XG4gICAgICAgICAgICBrZXk9e3RvYXN0Q291bnRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcInRodW1ic1VwVG9hc3RcIjpcbiAgICAgIGNhc2UgXCJ0aHVtYnNEb3duVG9hc3RcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGh1bWJVcFRodW1iRG93blRvYXN0XG4gICAgICAgICAgICBvbkRpc21pc3NDbGljaz17c3luY0hpZGRlblRvYXN0RGF0YX1cbiAgICAgICAgICAgIG9uQW5pbWF0aW9uRW5kPXtzeW5jSGlkZGVuVG9hc3REYXRhfVxuICAgICAgICAgICAga2V5PXt0b2FzdENvdW50ZXJ9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCB0b2FzdCB0eXBlOiAke2xhdGVzdFRvYXN0SXRlbX1gKTtcbiAgICB9XG4gIH0sIFtzeW5jSGlkZGVuVG9hc3REYXRhLCB0b2FzdENvdW50ZXIsIHRvYXN0UXVldWVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFRvYXN0KCk7XG4gIH0sIFt0b2FzdFF1ZXVlLCBnZXRUb2FzdF0pO1xuXG4gIHJldHVybiB0b2FzdFF1ZXVlLmxlbmd0aCA/IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi13cmFwcGVyXCI+e2dldFRvYXN0KCl9PC9kaXY+XG4gICkgOiAoXG4gICAgXCJcIlxuICApO1xufVxuXG5leHBvcnQgeyBOb3RpZmljYXRpb25zIH07XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBGZWF0dXJlSGlnaGxpZ2h0KHtcbiAgbWVzc2FnZSxcbiAgaWNvbixcbiAgdG9nZ2xlLFxuICBhcnJvd1Bvc2l0aW9uID0gXCJcIixcbiAgcG9zaXRpb24gPSBcInRvcC1sZWZ0XCIsXG4gIHZlcnRpY2FsUG9zaXRpb24gPSBcIlwiLFxuICB0aXRsZSxcbiAgYXJpYUxhYmVsLFxuICBmZWF0dXJlID0gXCJGRUFUVVJFX0hJR0hMSUdIVF9ERUZBVUxUXCIsXG4gIGRpc3BhdGNoID0gKCkgPT4ge30sXG4gIHdpbmRvd09iaiA9IGdsb2JhbCxcbiAgb3BlbmVkT3ZlcnJpZGUgPSBmYWxzZSxcbiAgc2hvd0J1dHRvbkljb24gPSB0cnVlLFxuICBkaXNtaXNzQ2FsbGJhY2sgPSAoKSA9PiB7fSxcbiAgb3V0c2lkZUNsaWNrQ2FsbGJhY2sgPSAoKSA9PiB7fSxcbn0pIHtcbiAgY29uc3QgW29wZW5lZCwgc2V0T3BlbmVkXSA9IHVzZVN0YXRlKG9wZW5lZE92ZXJyaWRlKTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gZSA9PiB7XG4gICAgICBpZiAoIXJlZj8uY3VycmVudD8uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgIHNldE9wZW5lZChmYWxzZSk7XG4gICAgICAgIG91dHNpZGVDbGlja0NhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSBlID0+IHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBvdXRzaWRlQ2xpY2tDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3dPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgd2luZG93T2JqLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3dPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgICB3aW5kb3dPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgfTtcbiAgfSwgW3dpbmRvd09iaiwgb3V0c2lkZUNsaWNrQ2FsbGJhY2tdKTtcblxuICBjb25zdCBvblRvZ2dsZUNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghb3BlbmVkKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50KHtcbiAgICAgICAgICBldmVudDogXCJDTElDS1wiLFxuICAgICAgICAgIHNvdXJjZTogXCJGRUFUVVJFX0hJR0hMSUdIVFwiLFxuICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBzZXRPcGVuZWQoIW9wZW5lZCk7XG4gIH0sIFtkaXNwYXRjaCwgZmVhdHVyZSwgb3BlbmVkXSk7XG5cbiAgY29uc3Qgb25EaXNtaXNzQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgc2V0T3BlbmVkKGZhbHNlKTtcbiAgICBkaXNtaXNzQ2FsbGJhY2soKTtcbiAgfSwgW2Rpc21pc3NDYWxsYmFja10pO1xuXG4gIGNvbnN0IGhpZGVCdXR0b25DbGFzcyA9IHNob3dCdXR0b25JY29uID8gYGAgOiBgaXNIaWRkZW5gO1xuICBjb25zdCBvcGVuZWRDbGFzc25hbWUgPSBvcGVuZWQgPyBgb3BlbmVkYCA6IGBjbG9zZWRgO1xuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT17YGZlYXR1cmUtaGlnaGxpZ2h0ICR7dmVydGljYWxQb3NpdGlvbn1gfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9e2FyaWFMYWJlbH1cbiAgICAgICAgY2xhc3NOYW1lPXtgdG9nZ2xlLWJ1dHRvbiAke2hpZGVCdXR0b25DbGFzc31gfVxuICAgICAgICBvbkNsaWNrPXtvblRvZ2dsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICB7dG9nZ2xlfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZlYXR1cmUtaGlnaGxpZ2h0LW1vZGFsICR7cG9zaXRpb259ICR7YXJyb3dQb3NpdGlvbn0gJHtvcGVuZWRDbGFzc25hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlLWljb25cIj57aWNvbn08L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudC13cmFwcGVyXCI+e21lc3NhZ2V9PC9wPlxuICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJpY29uIGdob3N0XCJcbiAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgIGRhdGEtbDEwbi1pZD1cImZlYXR1cmUtaGlnaGxpZ2h0LWRpc21pc3MtYnV0dG9uXCJcbiAgICAgICAgICBpY29uc3JjPVwiY2hyb21lOi8vZ2xvYmFsL3NraW4vaWNvbnMvY2xvc2Uuc3ZnXCJcbiAgICAgICAgICBvbkNsaWNrPXtvbkRpc21pc3NDbGlja31cbiAgICAgICAgICBvbktleURvd249e29uRGlzbWlzc0NsaWNrfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYyB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IEZlYXR1cmVIaWdobGlnaHQgfSBmcm9tIFwiLi9GZWF0dXJlSGlnaGxpZ2h0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuY29uc3QgUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQSA9XG4gIFwibW9iaWxlRG93bmxvYWRNb2RhbC52YXJpYW50LWFcIjtcbmNvbnN0IFBSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0IgPVxuICBcIm1vYmlsZURvd25sb2FkTW9kYWwudmFyaWFudC1iXCI7XG5jb25zdCBQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9DID1cbiAgXCJtb2JpbGVEb3dubG9hZE1vZGFsLnZhcmlhbnQtY1wiO1xuXG5jb25zdCBGRUFUVVJFX0lEID0gXCJGRUFUVVJFX0RPV05MT0FEX01PQklMRV9QUk9NT1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gRG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodCh7XG4gIHBvc2l0aW9uLFxuICBkaXNwYXRjaCxcbiAgaGFuZGxlRGlzbWlzcyxcbiAgaGFuZGxlQmxvY2ssXG4gIGlzSW50ZXJzZWN0aW5nLFxufSkge1xuICBjb25zdCBvbkRpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gVGhpcyBldmVudCBpcyBlbWl0dGVkIG1hbnVhbGx5IGJlY2F1c2UgdGhlIGZlYXR1cmUgbWF5IGJlIHRyaWdnZXJlZCBvdXRzaWRlIHRoZSBPTUMgZmxvdyxcbiAgICAvLyBhbmQgbWF5IG5vdCBiZSBjYXB0dXJlZCBieSB0aGUgbWVzc2FnaW5nLXN5c3RlbeKAmXMgYXV0b21hdGljIHJlcG9ydGluZy5cbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLkRpc2NvdmVyeVN0cmVhbVVzZXJFdmVudCh7XG4gICAgICAgIGV2ZW50OiBcIkZFQVRVUkVfSElHSExJR0hUX0RJU01JU1NcIixcbiAgICAgICAgc291cmNlOiBcIkZFQVRVUkVfSElHSExJR0hUXCIsXG4gICAgICAgIHZhbHVlOiB7IGZlYXR1cmU6IEZFQVRVUkVfSUQgfSxcbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGhhbmRsZURpc21pc3MoKTtcbiAgICBoYW5kbGVCbG9jaygpO1xuICB9LCBbZGlzcGF0Y2gsIGhhbmRsZURpc21pc3MsIGhhbmRsZUJsb2NrXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgIC8vIFRoaXMgZXZlbnQgaXMgZW1pdHRlZCBtYW51YWxseSBiZWNhdXNlIHRoZSBmZWF0dXJlIG1heSBiZSB0cmlnZ2VyZWQgb3V0c2lkZSB0aGUgT01DIGZsb3csXG4gICAgICAvLyBhbmQgbWF5IG5vdCBiZSBjYXB0dXJlZCBieSB0aGUgbWVzc2FnaW5nLXN5c3RlbeKAmXMgYXV0b21hdGljIHJlcG9ydGluZy5cbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5EaXNjb3ZlcnlTdHJlYW1Vc2VyRXZlbnQoe1xuICAgICAgICAgIGV2ZW50OiBcIkZFQVRVUkVfSElHSExJR0hUX0lNUFJFU1NJT05cIixcbiAgICAgICAgICBzb3VyY2U6IFwiRkVBVFVSRV9ISUdITElHSFRcIixcbiAgICAgICAgICB2YWx1ZTogeyBmZWF0dXJlOiBGRUFUVVJFX0lEIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCBpc0ludGVyc2VjdGluZ10pO1xuXG4gIGNvbnN0IHByZWZzID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuUHJlZnMudmFsdWVzKTtcbiAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb1ZhckEgPVxuICAgIHByZWZzW1BSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0FdO1xuICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vVmFyQiA9XG4gICAgcHJlZnNbUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQl07XG4gIGNvbnN0IG1vYmlsZURvd25sb2FkUHJvbW9WYXJDID1cbiAgICBwcmVmc1tQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9DXTtcblxuICBmdW5jdGlvbiBnZXRBY3RpdmVWYXJpYW50KCkge1xuICAgIGlmIChtb2JpbGVEb3dubG9hZFByb21vVmFyQSkge1xuICAgICAgcmV0dXJuIFwiQVwiO1xuICAgIH1cbiAgICBpZiAobW9iaWxlRG93bmxvYWRQcm9tb1ZhckIpIHtcbiAgICAgIHJldHVybiBcIkJcIjtcbiAgICB9XG4gICAgaWYgKG1vYmlsZURvd25sb2FkUHJvbW9WYXJDKSB7XG4gICAgICByZXR1cm4gXCJDXCI7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFyaWFudFFSQ29kZUltZygpIHtcbiAgICBjb25zdCB2YXJpYW50ID0gZ2V0QWN0aXZlVmFyaWFudCgpO1xuICAgIHN3aXRjaCAodmFyaWFudCkge1xuICAgICAgY2FzZSBcIkFcIjpcbiAgICAgICAgcmV0dXJuIFwiY2hyb21lOi8vbmV3dGFiL2NvbnRlbnQvZGF0YS9jb250ZW50L2Fzc2V0cy9kb3dubG9hZC1xci1jb2RlLXZhci1hLnBuZ1wiO1xuICAgICAgY2FzZSBcIkJcIjpcbiAgICAgICAgcmV0dXJuIFwiY2hyb21lOi8vbmV3dGFiL2NvbnRlbnQvZGF0YS9jb250ZW50L2Fzc2V0cy9kb3dubG9hZC1xci1jb2RlLXZhci1iLnBuZ1wiO1xuICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgcmV0dXJuIFwiY2hyb21lOi8vbmV3dGFiL2NvbnRlbnQvZGF0YS9jb250ZW50L2Fzc2V0cy9kb3dubG9hZC1xci1jb2RlLXZhci1jLnBuZ1wiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFyaWFudENvcHkoKSB7XG4gICAgY29uc3QgdmFyaWFudCA9IGdldEFjdGl2ZVZhcmlhbnQoKTtcbiAgICBzd2l0Y2ggKHZhcmlhbnQpIHtcbiAgICAgIGNhc2UgXCJBXCI6XG4gICAgICAgIHJldHVybiBcIm5ld3RhYi1kb3dubG9hZC1tb2JpbGUtaGlnaGxpZ2h0LWJvZHktdmFyaWFudC1hXCI7XG4gICAgICBjYXNlIFwiQlwiOlxuICAgICAgICByZXR1cm4gXCJuZXd0YWItZG93bmxvYWQtbW9iaWxlLWhpZ2hsaWdodC1ib2R5LXZhcmlhbnQtYlwiO1xuICAgICAgY2FzZSBcIkNcIjpcbiAgICAgICAgcmV0dXJuIFwibmV3dGFiLWRvd25sb2FkLW1vYmlsZS1oaWdobGlnaHQtYm9keS12YXJpYW50LWNcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZC1maXJlZm94LWZlYXR1cmUtaGlnaGxpZ2h0XCI+XG4gICAgICA8RmVhdHVyZUhpZ2hsaWdodFxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGZlYXR1cmU9e0ZFQVRVUkVfSUR9XG4gICAgICAgIGRpc3BhdGNoPXtkaXNwYXRjaH1cbiAgICAgICAgbWVzc2FnZT17XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3dubG9hZC1maXJlZm94LWZlYXR1cmUtaGlnaGxpZ2h0LWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtnZXRWYXJpYW50UVJDb2RlSW1nKCl9XG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi1kb3dubG9hZC1tb2JpbGUtaGlnaGxpZ2h0LWltYWdlXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMjBcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxOTFcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgZGF0YS1sMTBuLWlkPVwibmV3dGFiLWRvd25sb2FkLW1vYmlsZS1oaWdobGlnaHQtdGl0bGVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCIgZGF0YS1sMTBuLWlkPXtnZXRWYXJpYW50Q29weSgpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIG9wZW5lZE92ZXJyaWRlPXt0cnVlfVxuICAgICAgICBzaG93QnV0dG9uSWNvbj17ZmFsc2V9XG4gICAgICAgIGRpc21pc3NDYWxsYmFjaz17b25EaXNtaXNzfVxuICAgICAgICBvdXRzaWRlQ2xpY2tDYWxsYmFjaz17aGFuZGxlRGlzbWlzc31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycyBhcyBhYywgYWN0aW9uVHlwZXMgYXMgYXQgfSBmcm9tIFwiY29tbW9uL0FjdGlvbnMubWpzXCI7XG5pbXBvcnQgeyBGZWF0dXJlSGlnaGxpZ2h0IH0gZnJvbSBcIi4vRmVhdHVyZUhpZ2hsaWdodFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gV2FsbHBhcGVyRmVhdHVyZUhpZ2hsaWdodCh7XG4gIHBvc2l0aW9uLFxuICBkaXNwYXRjaCxcbiAgaGFuZGxlRGlzbWlzcyxcbiAgaGFuZGxlQ2xpY2ssXG4gIGhhbmRsZUJsb2NrLFxufSkge1xuICBjb25zdCBvbkRpc21pc3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaGFuZGxlRGlzbWlzcygpO1xuICAgIGhhbmRsZUJsb2NrKCk7XG4gIH0sIFtoYW5kbGVEaXNtaXNzLCBoYW5kbGVCbG9ja10pO1xuXG4gIGNvbnN0IG9uVG9nZ2xlQ2xpY2sgPSB1c2VDYWxsYmFjayhcbiAgICBlbGVtZW50SWQgPT4ge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBhdC5TSE9XX1BFUlNPTkFMSVpFIH0pO1xuICAgICAgZGlzcGF0Y2goYWMuVXNlckV2ZW50KHsgZXZlbnQ6IFwiU0hPV19QRVJTT05BTElaRVwiIH0pKTtcbiAgICAgIGhhbmRsZUNsaWNrKGVsZW1lbnRJZCk7XG4gICAgICBvbkRpc21pc3MoKTtcbiAgICB9LFxuICAgIFtkaXNwYXRjaCwgb25EaXNtaXNzLCBoYW5kbGVDbGlja11cbiAgKTtcblxuICAvLyBFeHRyYWN0IHRoZSBzdHJpbmdzIGFuZCBmZWF0dXJlIElEIGZyb20gT01DXG4gIGNvbnN0IHsgbWVzc2FnZURhdGEgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLk1lc3NhZ2VzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid2FsbHBhcGVyLWZlYXR1cmUtaGlnaGxpZ2h0XCI+XG4gICAgICA8RmVhdHVyZUhpZ2hsaWdodFxuICAgICAgICBwb3NpdGlvbj17cG9zaXRpb259XG4gICAgICAgIGRhdGEtbDEwbi1pZD1cImZlYXR1cmUtaGlnaGxpZ2h0LXdhbGxwYXBlclwiXG4gICAgICAgIGZlYXR1cmU9e21lc3NhZ2VEYXRhLmNvbnRlbnQuZmVhdHVyZX1cbiAgICAgICAgZGlzcGF0Y2g9e2Rpc3BhdGNofVxuICAgICAgICBtZXNzYWdlPXtcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndhbGxwYXBlci1mZWF0dXJlLWhpZ2hsaWdodC1jb250ZW50XCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz1cImNocm9tZTovL25ld3RhYi9jb250ZW50L2RhdGEvY29udGVudC9hc3NldHMvY3VzdG9tLXdwLWhpZ2hsaWdodC5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjMyMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE5NVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGl0bGVcIiBkYXRhLWwxMG4taWQ9e21lc3NhZ2VEYXRhLmNvbnRlbnQudGl0bGV9IC8+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiXG4gICAgICAgICAgICAgIGRhdGEtbDEwbi1pZD17bWVzc2FnZURhdGEuY29udGVudC5zdWJ0aXRsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidXR0b24td3JhcHBlclwiPlxuICAgICAgICAgICAgICA8bW96LWJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRvZ2dsZUNsaWNrKFwib3Blbi1jdXN0b21pemUtbWVudVwiKX1cbiAgICAgICAgICAgICAgICBkYXRhLWwxMG4taWQ9e21lc3NhZ2VEYXRhLmNvbnRlbnQuY3RhfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHRvZ2dsZT17PGRpdiBjbGFzc05hbWU9XCJpY29uIGljb24taGVscFwiPjwvZGl2Pn1cbiAgICAgICAgb3BlbmVkT3ZlcnJpZGU9e3RydWV9XG4gICAgICAgIHNob3dCdXR0b25JY29uPXtmYWxzZX1cbiAgICAgICAgZGlzbWlzc0NhbGxiYWNrPXtvbkRpc21pc3N9XG4gICAgICAgIG91dHNpZGVDbGlja0NhbGxiYWNrPXtoYW5kbGVEaXNtaXNzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSBcIi4uLy4uL2xpYi91dGlsc1wiO1xuXG4vLyBOb3RlOiBNZXNzYWdlV3JhcHBlciBlbWl0cyBldmVudHMgdmlhIHN1Ym1pdEdsZWFuUGluZ0ZvclBpbmcoKSBpbiB0aGUgT01DIG1lc3NhZ2luZy1zeXN0ZW0uXG4vLyBJZiBhIGZlYXR1cmUgaXMgdHJpZ2dlcmVkIG91dHNpZGUgb2YgdGhpcyBmbG93IChlLmcuLCB0aGUgTW9iaWxlIERvd25sb2FkIFFSIFByb21vKSxcbi8vIGl0IHNob3VsZCBlbWl0IE5ldyBUYWItc3BlY2lmaWMgR2xlYW4gZXZlbnRzIGluZGVwZW5kZW50bHkuXG5cbmZ1bmN0aW9uIE1lc3NhZ2VXcmFwcGVyKHsgY2hpbGRyZW4sIGRpc3BhdGNoLCBoaWRkZW5PdmVycmlkZSwgb25EaXNtaXNzIH0pIHtcbiAgY29uc3QgbWVzc2FnZSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLk1lc3NhZ2VzKTtcbiAgY29uc3QgW2lzSW50ZXJzZWN0aW5nLCBzZXRJc0ludGVyc2VjdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFt0YWJJc1Zpc2libGUsIHNldFRhYklzVmlzaWJsZV0gPSB1c2VTdGF0ZShcbiAgICAoKSA9PlxuICAgICAgdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gXCJ2aXNpYmxlXCJcbiAgKTtcbiAgY29uc3QgW2hhc1J1biwgc2V0SGFzUnVuXSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlSW50ZXJzZWN0aW9uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldElzSW50ZXJzZWN0aW5nKHRydWUpO1xuICAgIC8vIG9ubHkgc2VuZCBpbXByZXNzaW9uIGlmIG1lc3NhZ2VJZCBpcyBkZWZpbmVkIGFuZCB0YWIgaXMgdmlzaWJsZVxuICAgIGlmICh0YWJJc1Zpc2libGUgJiYgbWVzc2FnZS5tZXNzYWdlRGF0YS5pZCAmJiAhaGFzUnVuKSB7XG4gICAgICBzZXRIYXNSdW4odHJ1ZSk7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgYWMuQWxzb1RvTWFpbih7XG4gICAgICAgICAgdHlwZTogYXQuTUVTU0FHRV9JTVBSRVNTSU9OLFxuICAgICAgICAgIGRhdGE6IG1lc3NhZ2UubWVzc2FnZURhdGEsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSwgW2Rpc3BhdGNoLCBtZXNzYWdlLCB0YWJJc1Zpc2libGUsIGhhc1J1bl0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gd2UgZG9udCB3YW50IHRvIGRpc3BhdGNoIHRoaXMgYWN0aW9uIHVubGVzcyB0aGUgY3VycmVudCB0YWIgaXMgb3BlbiBhbmQgdmlzaWJsZVxuICAgIGlmIChtZXNzYWdlLmlzVmlzaWJsZSAmJiB0YWJJc1Zpc2libGUpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5BbHNvVG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5NRVNTQUdFX05PVElGWV9WSVNJQklMSVRZLFxuICAgICAgICAgIGRhdGE6IHRydWUsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSwgW21lc3NhZ2UsIGRpc3BhdGNoLCB0YWJJc1Zpc2libGVdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBzZXRUYWJJc1Zpc2libGUoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID09PSBcInZpc2libGVcIik7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBoYW5kbGVWaXNpYmlsaXR5Q2hhbmdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVmID0gdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoaGFuZGxlSW50ZXJzZWN0aW9uKTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSB7XG4gICAgICB0eXBlOiBhdC5NRVNTQUdFX1RPR0dMRV9WSVNJQklMSVRZLFxuICAgICAgZGF0YTogZmFsc2UsIC8vaXNWaXNpYmxlXG4gICAgfTtcbiAgICBpZiAobWVzc2FnZS5wb3J0SUQpIHtcbiAgICAgIGRpc3BhdGNoKGFjLk9ubHlUb09uZUNvbnRlbnQoYWN0aW9uLCBtZXNzYWdlLnBvcnRJRCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwYXRjaChhYy5BbHNvVG9NYWluKGFjdGlvbikpO1xuICAgIH1cbiAgICBkaXNwYXRjaChcbiAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICB0eXBlOiBhdC5NRVNTQUdFX05PVElGWV9WSVNJQklMSVRZLFxuICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBvbkRpc21pc3M/LigpO1xuICB9LCBbZGlzcGF0Y2gsIG1lc3NhZ2UsIG9uRGlzbWlzc10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZURpc21pc3MoKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gbWVzc2FnZS5tZXNzYWdlRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5NRVNTQUdFX0RJU01JU1MsXG4gICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2VEYXRhIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBoYW5kbGVDbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQmxvY2soKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gbWVzc2FnZS5tZXNzYWdlRGF0YTtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBhYy5Pbmx5VG9NYWluKHtcbiAgICAgICAgICB0eXBlOiBhdC5NRVNTQUdFX0JMT0NLLFxuICAgICAgICAgIGRhdGE6IGlkLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDbGljayhlbGVtZW50SWQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBtZXNzYWdlLm1lc3NhZ2VEYXRhO1xuICAgIGlmIChpZCkge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGFjLk9ubHlUb01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0Lk1FU1NBR0VfQ0xJQ0ssXG4gICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiBtZXNzYWdlLm1lc3NhZ2VEYXRhLCBzb3VyY2U6IGVsZW1lbnRJZCB8fCBcIlwiIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGlmICghbWVzc2FnZSB8fCAoIWhpZGRlbk92ZXJyaWRlICYmICFtZXNzYWdlLmlzVmlzaWJsZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIG9ubHkgZGlzcGxheSB0aGUgbWVzc2FnZSBpZiBgaXNWaXNpYmxlYCBpcyB0cnVlXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gW2VsXTtcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJtZXNzYWdlLXdyYXBwZXJcIlxuICAgID5cbiAgICAgIHtSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcbiAgICAgICAgaXNJbnRlcnNlY3RpbmcsXG4gICAgICAgIGhhbmRsZURpc21pc3MsXG4gICAgICAgIGhhbmRsZUNsaWNrLFxuICAgICAgICBoYW5kbGVCbG9jayxcbiAgICAgICAgaGFuZGxlQ2xvc2UsXG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IHsgTWVzc2FnZVdyYXBwZXIgfTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGFjdGlvbkNyZWF0b3JzIGFzIGFjLCBhY3Rpb25UeXBlcyBhcyBhdCB9IGZyb20gXCJjb21tb24vQWN0aW9ucy5tanNcIjtcbmltcG9ydCB7IERpc2NvdmVyeVN0cmVhbUFkbWluIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvRGlzY292ZXJ5U3RyZWFtQWRtaW4vRGlzY292ZXJ5U3RyZWFtQWRtaW5cIjtcbmltcG9ydCB7IENvbmZpcm1EaWFsb2cgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Db25maXJtRGlhbG9nL0NvbmZpcm1EaWFsb2dcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5L0Vycm9yQm91bmRhcnlcIjtcbmltcG9ydCB7IEN1c3RvbWl6ZU1lbnUgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9DdXN0b21pemVNZW51L0N1c3RvbWl6ZU1lbnVcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL1NlYXJjaC9TZWFyY2hcIjtcbmltcG9ydCB7IENvbnRleHRjb2xBSUludGVyZmFjZSB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0NvbnRleHRjb2xBSUludGVyZmFjZS9Db250ZXh0Y29sQUlJbnRlcmZhY2VcIjtcbmltcG9ydCB7IExvZ28gfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Mb2dvL0xvZ29cIjtcbmltcG9ydCB7IFdlYXRoZXIgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9XZWF0aGVyL1dlYXRoZXJcIjtcbmltcG9ydCB7IERvd25sb2FkTW9kYWxUb2dnbGUgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Eb3dubG9hZE1vZGFsVG9nZ2xlL0Rvd25sb2FkTW9kYWxUb2dnbGVcIjtcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiY29udGVudC1zcmMvY29tcG9uZW50cy9Ob3RpZmljYXRpb25zL05vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IERvd25sb2FkTW9iaWxlUHJvbW9IaWdobGlnaHQgfSBmcm9tIFwiLi4vRGlzY292ZXJ5U3RyZWFtQ29tcG9uZW50cy9GZWF0dXJlSGlnaGxpZ2h0L0Rvd25sb2FkTW9iaWxlUHJvbW9IaWdobGlnaHRcIjtcbmltcG9ydCB7IFdhbGxwYXBlckZlYXR1cmVIaWdobGlnaHQgfSBmcm9tIFwiLi4vRGlzY292ZXJ5U3RyZWFtQ29tcG9uZW50cy9GZWF0dXJlSGlnaGxpZ2h0L1dhbGxwYXBlckZlYXR1cmVIaWdobGlnaHRcIjtcbmltcG9ydCB7IE1lc3NhZ2VXcmFwcGVyIH0gZnJvbSBcImNvbnRlbnQtc3JjL2NvbXBvbmVudHMvTWVzc2FnZVdyYXBwZXIvTWVzc2FnZVdyYXBwZXJcIjtcblxuY29uc3QgVklTSUJMRSA9IFwidmlzaWJsZVwiO1xuY29uc3QgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQgPSBcInZpc2liaWxpdHljaGFuZ2VcIjtcbmNvbnN0IFBSRUZfSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1NZU1RFTSA9XG4gIFwiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLnBlcnNvbmFsaXphdGlvbi5pbmZlcnJlZC5lbmFibGVkXCI7XG5jb25zdCBQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9VU0VSID1cbiAgXCJkaXNjb3ZlcnlzdHJlYW0uc2VjdGlvbnMucGVyc29uYWxpemF0aW9uLmluZmVycmVkLnVzZXIuZW5hYmxlZFwiO1xuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24gd2lsbCBub3QgYmUgY29udGludW91c2x5IHRyaWdnZXJlZCB3aGVuIGNhbGxlZC4gVGhlXG4vLyBmdW5jdGlvbiB3aWxsIGJlIHRyaWdnZXJlZCBpZiBjYWxsZWQgYWdhaW4gYWZ0ZXIgYHdhaXRgIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQpIHtcbiAgbGV0IHRpbWVyO1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBpZiAodGltZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgd2FrZVVwID0gKCkgPT4ge1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgIH07XG5cbiAgICB0aW1lciA9IHNldFRpbWVvdXQod2FrZVVwLCB3YWl0KTtcbiAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgX0Jhc2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2U6IHt9LFxuICAgIH07XG4gICAgdGhpcy5ub3RpZnlDb250ZW50ID0gdGhpcy5ub3RpZnlDb250ZW50LmJpbmQodGhpcyk7XG4gIH1cblxuICBub3RpZnlDb250ZW50KHN0YXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnVwZGF0ZVRoZW1lKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlVGhlbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZVRoZW1lKCkge1xuICAgIGNvbnN0IGJvZHlDbGFzc05hbWUgPSBbXG4gICAgICBcImFjdGl2aXR5LXN0cmVhbVwiLFxuICAgICAgLy8gSWYgd2Ugc2tpcHBlZCB0aGUgYWJvdXQ6d2VsY29tZSBvdmVybGF5IGFuZCByZW1vdmVkIHRoZSBDU1MgY2xhc3Nlc1xuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBhZGQgdGhlbSBiYWNrIHRvIHRoZSBBY3Rpdml0eSBTdHJlYW0gdmlld1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoXCJpbmxpbmUtb25ib2FyZGluZ1wiKVxuICAgICAgICA/IFwiaW5saW5lLW9uYm9hcmRpbmdcIlxuICAgICAgICA6IFwiXCIsXG4gICAgXVxuICAgICAgLmZpbHRlcih2ID0+IHYpXG4gICAgICAuam9pbihcIiBcIik7XG4gICAgZ2xvYmFsVGhpcy5kb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGJvZHlDbGFzc05hbWU7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB7IEFwcCB9ID0gcHJvcHM7XG4gICAgY29uc3QgaXNEZXZ0b29sc0VuYWJsZWQgPSBwcm9wcy5QcmVmcy52YWx1ZXNbXCJhc3JvdXRlci5kZXZ0b29sc0VuYWJsZWRcIl07XG5cbiAgICBpZiAoIUFwcC5pbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5IGNsYXNzTmFtZT1cImJhc2UtY29udGVudC1mYWxsYmFja1wiPlxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgPEJhc2VDb250ZW50IHsuLi50aGlzLnByb3BzfSBhZG1pbkNvbnRlbnQ9e3RoaXMuc3RhdGV9IC8+XG4gICAgICAgICAge2lzRGV2dG9vbHNFbmFibGVkID8gKFxuICAgICAgICAgICAgPERpc2NvdmVyeVN0cmVhbUFkbWluIG5vdGlmeUNvbnRlbnQ9e3RoaXMubm90aWZ5Q29udGVudH0gLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCYXNlQ29udGVudCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm9wZW5QcmVmZXJlbmNlcyA9IHRoaXMub3BlblByZWZlcmVuY2VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vcGVuQ3VzdG9taXphdGlvbk1lbnUgPSB0aGlzLm9wZW5DdXN0b21pemF0aW9uTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VDdXN0b21pemF0aW9uTWVudSA9IHRoaXMuY2xvc2VDdXN0b21pemF0aW9uTWVudS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlT25LZXlEb3duID0gdGhpcy5oYW5kbGVPbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uV2luZG93U2Nyb2xsID0gZGVib3VuY2UodGhpcy5vbldpbmRvd1Njcm9sbC5iaW5kKHRoaXMpLCA1KTtcbiAgICB0aGlzLnNldFByZWYgPSB0aGlzLnNldFByZWYuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3VsZFNob3dPTUNIaWdobGlnaHQgPSB0aGlzLnNob3VsZFNob3dPTUNIaWdobGlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZVdhbGxwYXBlciA9IHRoaXMudXBkYXRlV2FsbHBhcGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5wcmVmZXJzRGFya1F1ZXJ5ID0gbnVsbDtcbiAgICB0aGlzLmhhbmRsZUNvbG9yTW9kZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ29sb3JNb2RlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG91bGREaXNwbGF5VG9waWNTZWxlY3Rpb25Nb2RhbCA9XG4gICAgICB0aGlzLnNob3VsZERpc3BsYXlUb3BpY1NlbGVjdGlvbk1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVEb3dubG9hZEhpZ2hsaWdodCA9IHRoaXMudG9nZ2xlRG93bmxvYWRIaWdobGlnaHQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZURpc21pc3NEb3dubG9hZEhpZ2hsaWdodCA9XG4gICAgICB0aGlzLmhhbmRsZURpc21pc3NEb3dubG9hZEhpZ2hsaWdodC5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyV2FsbHBhcGVyQXR0cmlidXRpb24gPVxuICAgICAgdGhpcy5yZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQUlSZXF1ZXN0ID0gdGhpcy5oYW5kbGVBSVJlcXVlc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZml4ZWRTZWFyY2g6IGZhbHNlLFxuICAgICAgZmlyc3RWaXNpYmxlVGltZXN0YW1wOiBudWxsLFxuICAgICAgY29sb3JNb2RlOiBcIlwiLFxuICAgICAgZml4ZWROYXZTdHlsZToge30sXG4gICAgICB3YWxscGFwZXJUaGVtZTogXCJcIixcbiAgICAgIHNob3dEb3dubG9hZEhpZ2hsaWdodE92ZXJyaWRlOiBudWxsLFxuICAgIH07XG4gIH1cblxuICBzZXRGaXJzdFZpc2libGVUaW1lc3RhbXAoKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmZpcnN0VmlzaWJsZVRpbWVzdGFtcCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcDogRGF0ZS5ub3coKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25XaW5kb3dTY3JvbGwpO1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmhhbmRsZU9uS2V5RG93bik7XG4gICAgY29uc3QgcHJlZnMgPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlcztcbiAgICBjb25zdCB3YWxscGFwZXJzRW5hYmxlZCA9IHByZWZzW1wibmV3dGFiV2FsbHBhcGVycy5lbmFibGVkXCJdO1xuICAgIGlmICh0aGlzLnByb3BzLmRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gVklTSUJMRSkge1xuICAgICAgdGhpcy5zZXRGaXJzdFZpc2libGVUaW1lc3RhbXAoKTtcbiAgICAgIHRoaXMuc2hvdWxkRGlzcGxheVRvcGljU2VsZWN0aW9uTW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFZJU0lCTEUpIHtcbiAgICAgICAgICB0aGlzLnNldEZpcnN0VmlzaWJsZVRpbWVzdGFtcCgpO1xuICAgICAgICAgIHRoaXMuc2hvdWxkRGlzcGxheVRvcGljU2VsZWN0aW9uTW9kYWwoKTtcbiAgICAgICAgICB0aGlzLnByb3BzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBWSVNJQklMSVRZX0NIQU5HRV9FVkVOVCxcbiAgICAgICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMucHJvcHMuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgKTtcbiAgICB9XG4gICAgLy8gdHJhY2sgY2hhbmdlIGV2ZW50IHRvIGRhcmsvbGlnaHQgbW9kZVxuICAgIHRoaXMucHJlZmVyc0RhcmtRdWVyeSA9IGdsb2JhbFRoaXMubWF0Y2hNZWRpYShcbiAgICAgIFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiXG4gICAgKTtcblxuICAgIHRoaXMucHJlZmVyc0RhcmtRdWVyeS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJjaGFuZ2VcIixcbiAgICAgIHRoaXMuaGFuZGxlQ29sb3JNb2RlQ2hhbmdlXG4gICAgKTtcbiAgICB0aGlzLmhhbmRsZUNvbG9yTW9kZUNoYW5nZSgpO1xuICAgIGlmICh3YWxscGFwZXJzRW5hYmxlZCkge1xuICAgICAgdGhpcy51cGRhdGVXYWxscGFwZXIoKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgcHJlZnMgPSB0aGlzLnByb3BzLlByZWZzLnZhbHVlcztcbiAgICBjb25zdCB3YWxscGFwZXJzRW5hYmxlZCA9IHByZWZzW1wibmV3dGFiV2FsbHBhcGVycy5lbmFibGVkXCJdO1xuICAgIGlmICh3YWxscGFwZXJzRW5hYmxlZCkge1xuICAgICAgLy8gZGVzdHJ1Y3R1cmUgY3VycmVudCBhbmQgcHJldmlvdXMgcHJvcHMgd2l0aCBmYWxsYmFja3NcbiAgICAgIC8vIChwcmV2ZW50aW5nIHVuZGVmaW5lZCBlcnJvcnMpXG4gICAgICBjb25zdCB7XG4gICAgICAgIFdhbGxwYXBlcnM6IHsgdXBsb2FkZWRXYWxscGFwZXIgPSBudWxsLCB3YWxscGFwZXJMaXN0ID0gbnVsbCB9ID0ge30sXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgY29uc3Qge1xuICAgICAgICBXYWxscGFwZXJzOiB7XG4gICAgICAgICAgdXBsb2FkZWRXYWxscGFwZXI6IHByZXZVcGxvYWRlZFdhbGxwYXBlciA9IG51bGwsXG4gICAgICAgICAgd2FsbHBhcGVyTGlzdDogcHJldldhbGxwYXBlckxpc3QgPSBudWxsLFxuICAgICAgICB9ID0ge30sXG4gICAgICAgIFByZWZzOiB7IHZhbHVlczogcHJldlByZWZzID0ge30gfSA9IHt9LFxuICAgICAgfSA9IHByZXZQcm9wcztcblxuICAgICAgY29uc3Qgc2VsZWN0ZWRXYWxscGFwZXIgPSBwcmVmc1tcIm5ld3RhYldhbGxwYXBlcnMud2FsbHBhcGVyXCJdO1xuICAgICAgY29uc3QgcHJldlNlbGVjdGVkV2FsbHBhcGVyID0gcHJldlByZWZzW1wibmV3dGFiV2FsbHBhcGVycy53YWxscGFwZXJcIl07XG5cbiAgICAgIC8vIGRvbid0IHVwZGF0ZSB3YWxscGFwZXIgdW5sZXNzIHRoZSB3YWxscGFwZXIgaXMgYmVpbmcgY2hhbmdlZC5cbiAgICAgIGlmIChcbiAgICAgICAgc2VsZWN0ZWRXYWxscGFwZXIgIT09IHByZXZTZWxlY3RlZFdhbGxwYXBlciB8fCAvLyBzZWxlY3RpbmcgYSBuZXcgd2FsbHBhcGVyXG4gICAgICAgIHVwbG9hZGVkV2FsbHBhcGVyICE9PSBwcmV2VXBsb2FkZWRXYWxscGFwZXIgfHwgLy8gdXBsb2FkaW5nIGEgbmV3IHdhbGxwYXBlclxuICAgICAgICB3YWxscGFwZXJMaXN0ICE9PSBwcmV2V2FsbHBhcGVyTGlzdCB8fCAvLyByZW1vdGUgc2V0dGluZ3Mgd2FsbHBhcGVyIGxpc3QgdXBkYXRlc1xuICAgICAgICB0aGlzLnByb3BzLkFwcC5pc0ZvclN0YXJ0dXBDYWNoZS5XYWxscGFwZXIgIT09XG4gICAgICAgICAgcHJldlByb3BzLkFwcC5pc0ZvclN0YXJ0dXBDYWNoZS5XYWxscGFwZXIgLy8gU3RhcnR1cCBjYWNoZWQgcGFnZSB3YWxscGFwZXIgaXMgdXBkYXRpbmdcbiAgICAgICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVdhbGxwYXBlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNvbG9yTW9kZUNoYW5nZSgpIHtcbiAgICBjb25zdCBjb2xvck1vZGUgPSB0aGlzLnByZWZlcnNEYXJrUXVlcnk/Lm1hdGNoZXMgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29sb3JNb2RlIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5wcmVmZXJzRGFya1F1ZXJ5Py5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgXCJjaGFuZ2VcIixcbiAgICAgIHRoaXMuaGFuZGxlQ29sb3JNb2RlQ2hhbmdlXG4gICAgKTtcbiAgICBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uV2luZG93U2Nyb2xsKTtcbiAgICBnbG9iYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVPbktleURvd24pO1xuICAgIGlmICh0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMuZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQsXG4gICAgICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvbldpbmRvd1Njcm9sbCgpIHtcbiAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IDw9IDcwMCkge1xuICAgICAgLy8gQnVnIDE5MzcyOTY6IE9ubHkgYXBwbHkgZml4ZWQtc2VhcmNoIGxvZ2ljXG4gICAgICAvLyBpZiB0aGUgcGFnZSBpcyB0YWxsIGVub3VnaCB0byBzdXBwb3J0IGl0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3QgeyBzaG93U2VhcmNoIH0gPSBwcmVmcztcblxuICAgIGlmICghc2hvd1NlYXJjaCkge1xuICAgICAgLy8gQnVnIDE5NDQ3MTg6IE9ubHkgYXBwbHkgZml4ZWQtc2VhcmNoIGxvZ2ljXG4gICAgICAvLyBpZiBzZWFyY2ggaXMgdmlzaWJsZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBsb2dvQWx3YXlzVmlzaWJsZSA9IHByZWZzW1wibG9nb3dvcmRtYXJrLmFsd2F5c1Zpc2libGVcIl07XG5cbiAgICAvKiBCdWcgMTkxNzkzNzogVGhlIGxvZ2ljIHByZXNlbnRlZCBiZWxvdyBpcyBmcmFnaWxlIGJ1dCBhY2N1cmF0ZSB0byB0aGUgcGl4ZWwuIEFzIG5ldyB0YWIgZXhwZXJpbWVudHMgd2l0aCBsYXlvdXRzLCB3ZSBoYXZlIGEgdGVjaCBkZWJ0IG9mIGNvbXBldGluZyBzdHlsZXMgYW5kIGNsYXNzZXMgdGhlIHNsaWdodGx5IG1vZGlmeSB3aGVyZSB0aGUgc2VhcmNoIGJhciBzaXRzIG9uIHRoZSBwYWdlLiBUaGUgbGFyZ2VyIHNvbHV0aW9uIGZvciB0aGlzIGlzIHRvIHJlcGxhY2UgZXZlcnl0aGluZyB3aXRoIGFuIGludGVyc2VjdGlvbiBvYnNlcnZlciwgYnV0IHdvdWxkIHJlcXVpcmUgYSBsYXJnZXIgcmVmYWN0b3Igb2YgdGhpcyBmaWxlLiBJbiB0aGUgaW50ZXJpbSwgd2UgY2FuIHByb2dyYW1tYXRpY2FsbHkgY2FsY3VsYXRlIHdoZW4gdG8gZmlyZSB0aGUgZml4ZWQtc2Nyb2xsIGV2ZW50IGFuZCBhY2NvdW50IGZvciB0aGUgbW92ZWQgZWxlbWVudHMgc28gdGhhdCB0b3BzaXRlcy9ldGMgc3RheXMgaW4gdGhlIHNhbWUgcGxhY2UuIFRoZSBDU1MgdGhpcyByZWZlcmVuY2VzIGhhcyBiZWVuIGZsYWdnZWQgdG8gcmVmZXJlbmNlIHRoaXMgbG9naWMgc28gKGhvcGVmdWxseSkga2VlcCB0aGVtIGluIHN5bmMuICovXG5cbiAgICBsZXQgU0NST0xMX1RIUkVTSE9MRCA9IDA7IC8vIFdoZW4gdGhlIGZpeGVkLXNjcm9sbCBldmVudCBmaXJlc1xuICAgIGxldCBNQUlOX09GRlNFVF9QQURESU5HID0gMDsgLy8gVGhlIHBhZGRpbmcgdG8gY29tcGVuc2F0ZSBmb3IgdGhlIG1vdmVkIGVsZW1lbnRzXG5cbiAgICBjb25zdCBDU1NfVkFSX1NQQUNFX1hYTEFSR0UgPSAzMi4wNDsgLy8gQ3VzdG9tIEFjb3JuIHRoZW1lZCB2YXJpYWJsZSAoOCAqIDAuMjY3cmVtKTtcblxuICAgIGxldCBsYXlvdXQgPSB7XG4gICAgICBvdXRlcldyYXBwZXJQYWRkaW5nVG9wOiAyNCxcbiAgICAgIHNlYXJjaFdyYXBwZXJQYWRkaW5nVG9wOiAxNixcbiAgICAgIHNlYXJjaFdyYXBwZXJQYWRkaW5nQm90dG9tOiBDU1NfVkFSX1NQQUNFX1hYTEFSR0UsXG4gICAgICBzZWFyY2hXcmFwcGVyRml4ZWRTY3JvbGxQYWRkaW5nVG9wOiAyNyxcbiAgICAgIHNlYXJjaFdyYXBwZXJGaXhlZFNjcm9sbFBhZGRpbmdCb3R0b206IDI3LFxuICAgICAgc2VhcmNoSW5uZXJXcmFwcGVyTWluSGVpZ2h0OiA1MixcbiAgICAgIGxvZ29BbmRXb3JkbWFya1dyYXBwZXJIZWlnaHQ6IDAsXG4gICAgICBsb2dvQW5kV29yZG1hcmtXcmFwcGVyTWFyZ2luQm90dG9tOiAwLFxuICAgIH07XG5cbiAgICAvLyBMb2dvIHZpc2liaWxpdHkgYXBwbGllcyB0byBhbGwgbGF5b3V0c1xuICAgIGlmICghbG9nb0Fsd2F5c1Zpc2libGUpIHtcbiAgICAgIGxheW91dC5sb2dvQW5kV29yZG1hcmtXcmFwcGVySGVpZ2h0ID0gMDtcbiAgICAgIGxheW91dC5sb2dvQW5kV29yZG1hcmtXcmFwcGVyTWFyZ2luQm90dG9tID0gMDtcbiAgICB9XG5cbiAgICBTQ1JPTExfVEhSRVNIT0xEID1cbiAgICAgIGxheW91dC5vdXRlcldyYXBwZXJQYWRkaW5nVG9wICtcbiAgICAgIGxheW91dC5zZWFyY2hXcmFwcGVyUGFkZGluZ1RvcCArXG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlckhlaWdodCArXG4gICAgICBsYXlvdXQubG9nb0FuZFdvcmRtYXJrV3JhcHBlck1hcmdpbkJvdHRvbSAtXG4gICAgICBsYXlvdXQuc2VhcmNoV3JhcHBlckZpeGVkU2Nyb2xsUGFkZGluZ1RvcDtcblxuICAgIE1BSU5fT0ZGU0VUX1BBRERJTkcgPVxuICAgICAgbGF5b3V0LnNlYXJjaFdyYXBwZXJQYWRkaW5nVG9wICtcbiAgICAgIGxheW91dC5zZWFyY2hXcmFwcGVyUGFkZGluZ0JvdHRvbSArXG4gICAgICBsYXlvdXQuc2VhcmNoSW5uZXJXcmFwcGVyTWluSGVpZ2h0ICtcbiAgICAgIGxheW91dC5sb2dvQW5kV29yZG1hcmtXcmFwcGVySGVpZ2h0ICtcbiAgICAgIGxheW91dC5sb2dvQW5kV29yZG1hcmtXcmFwcGVyTWFyZ2luQm90dG9tO1xuXG4gICAgLy8gRWRnZSBjYXNlIGlmIGxvZ28gYW5kIHRodW1zIGFyZSB0dXJuZWQgb2ZmLCBidXQgVmFyIEEgaXMgZW5hYmxlZFxuICAgIGlmIChTQ1JPTExfVEhSRVNIT0xEIDwgMSkge1xuICAgICAgU0NST0xMX1RIUkVTSE9MRCA9IDE7XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbC5zY3JvbGxZID4gU0NST0xMX1RIUkVTSE9MRCAmJiAhdGhpcy5zdGF0ZS5maXhlZFNlYXJjaCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpeGVkU2VhcmNoOiB0cnVlLFxuICAgICAgICBmaXhlZE5hdlN0eWxlOiB7IHBhZGRpbmdCbG9ja1N0YXJ0OiBgJHtNQUlOX09GRlNFVF9QQURESU5HfXB4YCB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChnbG9iYWwuc2Nyb2xsWSA8PSBTQ1JPTExfVEhSRVNIT0xEICYmIHRoaXMuc3RhdGUuZml4ZWRTZWFyY2gpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXhlZFNlYXJjaDogZmFsc2UsIGZpeGVkTmF2U3R5bGU6IHt9IH0pO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5QcmVmZXJlbmNlcygpIHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLk9ubHlUb01haW4oeyB0eXBlOiBhdC5TRVRUSU5HU19PUEVOIH0pKTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLlVzZXJFdmVudCh7IGV2ZW50OiBcIk9QRU5fTkVXVEFCX1BSRUZTXCIgfSkpO1xuICB9XG5cbiAgb3BlbkN1c3RvbWl6YXRpb25NZW51KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goeyB0eXBlOiBhdC5TSE9XX1BFUlNPTkFMSVpFIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuVXNlckV2ZW50KHsgZXZlbnQ6IFwiU0hPV19QRVJTT05BTElaRVwiIH0pKTtcbiAgfVxuXG4gIGNsb3NlQ3VzdG9taXphdGlvbk1lbnUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuQXBwLmN1c3RvbWl6ZU1lbnVWaXNpYmxlKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHsgdHlwZTogYXQuSElERV9QRVJTT05BTElaRSB9KTtcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuVXNlckV2ZW50KHsgZXZlbnQ6IFwiSElERV9QRVJTT05BTElaRVwiIH0pKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPbktleURvd24oZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZUN1c3RvbWl6YXRpb25NZW51KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UHJlZihwcmVmLCB2YWx1ZSkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWMuU2V0UHJlZihwcmVmLCB2YWx1ZSkpO1xuICB9XG5cbiAgcmVuZGVyV2FsbHBhcGVyQXR0cmlidXRpb24oKSB7XG4gICAgY29uc3QgeyB3YWxscGFwZXJMaXN0IH0gPSB0aGlzLnByb3BzLldhbGxwYXBlcnM7XG4gICAgY29uc3QgYWN0aXZlV2FsbHBhcGVyID1cbiAgICAgIHRoaXMucHJvcHMuUHJlZnMudmFsdWVzW2BuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlcmBdO1xuICAgIGNvbnN0IHNlbGVjdGVkID0gd2FsbHBhcGVyTGlzdC5maW5kKHdwID0+IHdwLnRpdGxlID09PSBhY3RpdmVXYWxscGFwZXIpO1xuICAgIC8vIG1ha2Ugc3VyZSBhIHdhbGxwYXBlciBpcyBzZWxlY3RlZCBhbmQgdGhhdCB0aGUgYXR0cmlidXRpb24gYWxzbyBleGlzdHNcbiAgICBpZiAoIXNlbGVjdGVkPy5hdHRyaWJ1dGlvbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBuYW1lOiBhdXRob3JEZXRhaWxzLCB3ZWJwYWdlIH0gPSBzZWxlY3RlZC5hdHRyaWJ1dGlvbjtcbiAgICBpZiAoYWN0aXZlV2FsbHBhcGVyICYmIHdhbGxwYXBlckxpc3QgJiYgYXV0aG9yRGV0YWlscy51cmwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3NOYW1lPXtgd2FsbHBhcGVyLWF0dHJpYnV0aW9uYH1cbiAgICAgICAgICBrZXk9e2F1dGhvckRldGFpbHMuc3RyaW5nfVxuICAgICAgICAgIGRhdGEtbDEwbi1pZD1cIm5ld3RhYi13YWxscGFwZXItYXR0cmlidXRpb25cIlxuICAgICAgICAgIGRhdGEtbDEwbi1hcmdzPXtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBhdXRob3Jfc3RyaW5nOiBhdXRob3JEZXRhaWxzLnN0cmluZyxcbiAgICAgICAgICAgIGF1dGhvcl91cmw6IGF1dGhvckRldGFpbHMudXJsLFxuICAgICAgICAgICAgd2VicGFnZV9zdHJpbmc6IHdlYnBhZ2Uuc3RyaW5nLFxuICAgICAgICAgICAgd2VicGFnZV91cmw6IHdlYnBhZ2UudXJsLFxuICAgICAgICAgIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgey8qIDxhIGRhdGEtbDEwbi1uYW1lPVwibmFtZS1saW5rXCIgaHJlZj17YXV0aG9yRGV0YWlscy51cmx9PlxuICAgICAgICAgICAge2F1dGhvckRldGFpbHMuc3RyaW5nfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBkYXRhLWwxMG4tbmFtZT1cIndlYnBhZ2UtbGlua1wiIGhyZWY9e3dlYnBhZ2UudXJsfT5cbiAgICAgICAgICAgIHt3ZWJwYWdlLnN0cmluZ31cbiAgICAgICAgICA8L2E+ICovfVxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVdhbGxwYXBlcigpIHtcbiAgICBjb25zdCBwcmVmcyA9IHRoaXMucHJvcHMuUHJlZnMudmFsdWVzO1xuICAgIGNvbnN0IHNlbGVjdGVkV2FsbHBhcGVyID0gcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlclwiXTtcbiAgICBjb25zdCB7IHdhbGxwYXBlckxpc3QsIHVwbG9hZGVkV2FsbHBhcGVyOiB1cGxvYWRlZFdhbGxwYXBlclVybCB9ID1cbiAgICAgIHRoaXMucHJvcHMuV2FsbHBhcGVycztcbiAgICBsZXQgbGlnaHRXYWxscGFwZXIgPSB7fTtcbiAgICBsZXQgZGFya1dhbGxwYXBlciA9IHt9O1xuXG4gICAgaWYgKHNlbGVjdGVkV2FsbHBhcGVyID09PSBcImN1c3RvbVwiICYmIHVwbG9hZGVkV2FsbHBhcGVyVXJsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBnbG9iYWwuZG9jdW1lbnQ/LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgXCItLW5ld3RhYi13YWxscGFwZXJcIixcbiAgICAgICAgICBgdXJsKCR7dXBsb2FkZWRXYWxscGFwZXJVcmx9KWBcbiAgICAgICAgKTtcblxuICAgICAgICBnbG9iYWwuZG9jdW1lbnQ/LmJvZHkuc3R5bGUuc2V0UHJvcGVydHkoXG4gICAgICAgICAgXCItLW5ld3RhYi13YWxscGFwZXItY29sb3JcIixcbiAgICAgICAgICBcInRyYW5zcGFyZW50XCJcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBCYXNlZCBvbiB0aGUgY3VycmVudCBjb2xvck1vZGUsIGFkZCB0aGUgY29ycmVzcG9uZGluZyBkYXJrL2xpZ2h0IENTUyBjbGFzc2VzXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmNvbG9yTW9kZSkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICAgICAgICB3YWxscGFwZXJUaGVtZTogcHJldlN0YXRlLmNvbG9yTW9kZSxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2FsbHBhcGVyTGlzdCkge1xuICAgICAgbGV0IHdhbGxwYXBlciA9IHdhbGxwYXBlckxpc3QuZmluZCh3cCA9PiB3cC50aXRsZSA9PT0gc2VsZWN0ZWRXYWxscGFwZXIpO1xuICAgICAgaWYgKHNlbGVjdGVkV2FsbHBhcGVyICYmIHdhbGxwYXBlcikge1xuICAgICAgICAvLyBpZiBzZWxlY3RlZFdhbGxwYXBlciBleGlzdHMgLSB3ZSBvdmVycmlkZSB3aGF0IGxpZ2h0IGFuZCBkYXJrIHByZWZzIGFyZSB0byBtYXRjaCB0aGF0XG4gICAgICAgIGxpZ2h0V2FsbHBhcGVyID0gd2FsbHBhcGVyO1xuICAgICAgICBkYXJrV2FsbHBhcGVyID0gd2FsbHBhcGVyO1xuICAgICAgfVxuXG4gICAgICAvLyBzb2xpZC1jb2xvci1waWNrZXItIzAwZDEwMFxuICAgICAgY29uc3QgcmVnZXhSR0IgPSAvIyhbYS1mQS1GMC05XXs2fSkvO1xuXG4gICAgICAvLyBPdmVycmlkZSBSZW1vdGUgU2V0dGluZ3MgdG8gc2V0IGN1c3RvbSBIRVggYmcgY29sb3JcbiAgICAgIGlmIChzZWxlY3RlZFdhbGxwYXBlci5pbmNsdWRlcyhcInNvbGlkLWNvbG9yLXBpY2tlclwiKSkge1xuICAgICAgICB3YWxscGFwZXIgPSB7XG4gICAgICAgICAgdGhlbWU6IHdhbGxwYXBlcj8udGhlbWUgfHwgXCJsaWdodFwiLFxuICAgICAgICAgIHRpdGxlOiBcInNvbGlkLWNvbG9yLXBpY2tlclwiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcInNvbGlkLWNvbG9yc1wiLFxuICAgICAgICAgIHNvbGlkX2NvbG9yOiBzZWxlY3RlZFdhbGxwYXBlci5tYXRjaChyZWdleFJHQik/LlswXSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgd2FsbHBhcGVyQ29sb3IgPSB3YWxscGFwZXI/LnNvbGlkX2NvbG9yIHx8IFwiXCI7XG5cbiAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgXCItLW5ld3RhYi13YWxscGFwZXJcIixcbiAgICAgICAgYHVybCgke3dhbGxwYXBlcj8ud2FsbHBhcGVyVXJsIHx8IFwiXCJ9KWBcbiAgICAgICk7XG5cbiAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgXCItLW5ld3RhYi13YWxscGFwZXItY29sb3JcIixcbiAgICAgICAgd2FsbHBhcGVyQ29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiXG4gICAgICApO1xuXG4gICAgICBsZXQgd2FsbHBhcGVyVGhlbWUgPSBcIlwiO1xuXG4gICAgICAvLyBJZiB3ZSBoYXZlIGEgc29saWQgY29sb3VyIHNldCwgbGV0J3Mgc2VlIGhvdyBkYXJrIGl0IGlzLlxuICAgICAgaWYgKHdhbGxwYXBlckNvbG9yKSB7XG4gICAgICAgIGNvbnN0IHJnYkNvbG9ycyA9IHRoaXMuZ2V0UkdCQ29sb3JzKHdhbGxwYXBlckNvbG9yKTtcbiAgICAgICAgY29uc3QgaXNDb2xvckRhcmsgPSB0aGlzLmlzV2FsbHBhcGVyQ29sb3JEYXJrKHJnYkNvbG9ycyk7XG4gICAgICAgIHdhbGxwYXBlclRoZW1lID0gaXNDb2xvckRhcmsgPyBcImRhcmtcIiA6IFwibGlnaHRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEdyYWIgdGhlIGNvbnRyYXN0IG9mIHRoZSBjdXJyZW50bHkgZGlzcGxheWVkIHdhbGxwYXBlci5cbiAgICAgICAgY29uc3QgeyB0aGVtZSB9ID1cbiAgICAgICAgICB0aGlzLnN0YXRlLmNvbG9yTW9kZSA9PT0gXCJsaWdodFwiID8gbGlnaHRXYWxscGFwZXIgOiBkYXJrV2FsbHBhcGVyO1xuXG4gICAgICAgIGlmICh0aGVtZSkge1xuICAgICAgICAgIHdhbGxwYXBlclRoZW1lID0gdGhlbWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdhbGxwYXBlclRoZW1lIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNob3VsZFNob3dPTUNIaWdobGlnaHQoY29tcG9uZW50SWQpIHtcbiAgICBjb25zdCBtZXNzYWdlRGF0YSA9IHRoaXMucHJvcHMuTWVzc2FnZXM/Lm1lc3NhZ2VEYXRhO1xuICAgIGlmICghbWVzc2FnZURhdGEgfHwgT2JqZWN0LmtleXMobWVzc2FnZURhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZURhdGE/LmNvbnRlbnQ/Lm1lc3NhZ2VUeXBlID09PSBjb21wb25lbnRJZDtcbiAgfVxuXG4gIHRvZ2dsZURvd25sb2FkSGlnaGxpZ2h0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+IHtcbiAgICAgIGNvbnN0IG92ZXJyaWRlID0gIShcbiAgICAgICAgcHJldlN0YXRlLnNob3dEb3dubG9hZEhpZ2hsaWdodE92ZXJyaWRlID8/XG4gICAgICAgIHRoaXMuc2hvdWxkU2hvd09NQ0hpZ2hsaWdodChcIkRvd25sb2FkTW9iaWxlUHJvbW9IaWdobGlnaHRcIilcbiAgICAgICk7XG5cbiAgICAgIGlmIChvdmVycmlkZSkge1xuICAgICAgICAvLyBFbWl0IGFuIG9wZW4gZXZlbnQgbWFudWFsbHkgc2luY2UgT01DIGlzbid0IGhhbmRsaW5nIGl0XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgICAgYWMuRGlzY292ZXJ5U3RyZWFtVXNlckV2ZW50KHtcbiAgICAgICAgICAgIGV2ZW50OiBcIkZFQVRVUkVfSElHSExJR0hUX09QRU5cIixcbiAgICAgICAgICAgIHNvdXJjZTogXCJGRUFUVVJFX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgdmFsdWU6IHsgZmVhdHVyZTogXCJGRUFUVVJFX0RPV05MT0FEX01PQklMRV9QUk9NT1wiIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd0Rvd25sb2FkSGlnaGxpZ2h0T3ZlcnJpZGU6IG92ZXJyaWRlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURpc21pc3NEb3dubG9hZEhpZ2hsaWdodCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0Rvd25sb2FkSGlnaGxpZ2h0T3ZlcnJpZGU6IGZhbHNlIH0pO1xuICB9XG5cbiAgaGFuZGxlQUlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBpZiAoIXJlcXVlc3QgfHwgIXJlcXVlc3QudHJpbSgpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gWW91IGNvdWxkIGRpc3BhdGNoIGFuIGFjdGlvbiB0byBoYW5kbGUgdGhlIEFJIHJlcXVlc3RcbiAgICAvLyB0aGlzLnByb3BzLmRpc3BhdGNoKGFjLk9ubHlUb01haW4oe1xuICAgIC8vICAgdHlwZTogYXQuQUlfQUdFTlRfUkVRVUVTVCxcbiAgICAvLyAgIGRhdGE6IHsgcmVxdWVzdDogcmVxdWVzdC50cmltKCkgfVxuICAgIC8vIH0pKTtcblxuICAgIC8vIENsZWFyIHRoZSB0ZXh0YXJlYVxuICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZXh0Y29sLWFpLXRleHRhcmVhXCIpO1xuICAgIGlmICh0ZXh0YXJlYSkge1xuICAgICAgdGV4dGFyZWEudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfVxuXG4gIGdldFJHQkNvbG9ycyhpbnB1dCkge1xuICAgIGlmIChpbnB1dC5sZW5ndGggIT09IDcpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCByID0gcGFyc2VJbnQoaW5wdXQuc3Vic3RyKDEsIDIpLCAxNik7XG4gICAgY29uc3QgZyA9IHBhcnNlSW50KGlucHV0LnN1YnN0cigzLCAyKSwgMTYpO1xuICAgIGNvbnN0IGIgPSBwYXJzZUludChpbnB1dC5zdWJzdHIoNSwgMiksIDE2KTtcblxuICAgIHJldHVybiBbciwgZywgYl07XG4gIH1cblxuICBpc1dhbGxwYXBlckNvbG9yRGFyayhbciwgZywgYl0pIHtcbiAgICByZXR1cm4gMC4yMTI1ICogciArIDAuNzE1NCAqIGcgKyAwLjA3MjEgKiBiIDw9IDExMDtcbiAgfVxuXG4gIHNob3VsZERpc3BsYXlUb3BpY1NlbGVjdGlvbk1vZGFsKCkge1xuICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5QcmVmcy52YWx1ZXM7XG4gICAgY29uc3QgcG9ja2V0RW5hYmxlZCA9XG4gICAgICBwcmVmc1tcImZlZWRzLnNlY3Rpb24udG9wc3Rvcmllc1wiXSAmJiBwcmVmc1tcImZlZWRzLnN5c3RlbS50b3BzdG9yaWVzXCJdO1xuICAgIGNvbnN0IHRvcGljU2VsZWN0aW9uT25ib2FyZGluZ0VuYWJsZWQgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24ub25ib2FyZGluZy5lbmFibGVkXCJdICYmXG4gICAgICBwb2NrZXRFbmFibGVkO1xuICAgIGNvbnN0IG1heWJlU2hvd01vZGFsID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcubWF5YmVEaXNwbGF5XCJdO1xuICAgIGNvbnN0IGRpc3BsYXlUaW1lb3V0ID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcuZGlzcGxheVRpbWVvdXRcIl07XG4gICAgY29uc3QgbGFzdERpc3BsYXllZCA9XG4gICAgICBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS50b3BpY1NlbGVjdGlvbi5vbmJvYXJkaW5nLmxhc3REaXNwbGF5ZWRcIl07XG4gICAgY29uc3QgZGlzcGxheUNvdW50ID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcuZGlzcGxheUNvdW50XCJdO1xuXG4gICAgaWYgKFxuICAgICAgIW1heWJlU2hvd01vZGFsIHx8XG4gICAgICAhcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udG9waWNTZWxlY3Rpb24uZW5hYmxlZFwiXSB8fFxuICAgICAgIXRvcGljU2VsZWN0aW9uT25ib2FyZGluZ0VuYWJsZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBkYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgY29uc3QgdGltZW91dE9jY3VyZWQgPSBub3cgLSBwYXJzZUZsb2F0KGxhc3REaXNwbGF5ZWQpID4gZGlzcGxheVRpbWVvdXQ7XG4gICAgaWYgKGRpc3BsYXlDb3VudCA8IDMpIHtcbiAgICAgIGlmIChkaXNwbGF5Q291bnQgPT09IDAgfHwgdGltZW91dE9jY3VyZWQpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChcbiAgICAgICAgICBhYy5Ccm9hZGNhc3RUb0NvbnRlbnQoeyB0eXBlOiBhdC5UT1BJQ19TRUxFQ1RJT05fU1BPVExJR0hUX09QRU4gfSlcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRQcmVmKFxuICAgICAgICAgIFwiZGlzY292ZXJ5c3RyZWFtLnRvcGljU2VsZWN0aW9uLm9uYm9hcmRpbmcuZGlzcGxheVRpbWVvdXRcIixcbiAgICAgICAgICBkYXlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHMsIGNvbXBsZXhpdHlcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBBcHAsIERpc2NvdmVyeVN0cmVhbSB9ID0gcHJvcHM7XG4gICAgY29uc3QgeyBpbml0aWFsaXplZCwgY3VzdG9taXplTWVudVZpc2libGUgfSA9IEFwcDtcbiAgICBjb25zdCBwcmVmcyA9IHByb3BzLlByZWZzLnZhbHVlcztcblxuICAgIGNvbnN0IGFjdGl2ZVdhbGxwYXBlciA9IHByZWZzW2BuZXd0YWJXYWxscGFwZXJzLndhbGxwYXBlcmBdO1xuICAgIGNvbnN0IHdhbGxwYXBlcnNFbmFibGVkID0gcHJlZnNbXCJuZXd0YWJXYWxscGFwZXJzLmVuYWJsZWRcIl07XG4gICAgY29uc3Qgd2VhdGhlckVuYWJsZWQgPSBwcmVmcy5zaG93V2VhdGhlcjtcbiAgICBjb25zdCB7IHBvY2tldENvbmZpZyB9ID0gcHJlZnM7XG5cbiAgICBjb25zdCBpc0Rpc2NvdmVyeVN0cmVhbSA9XG4gICAgICBwcm9wcy5EaXNjb3ZlcnlTdHJlYW0uY29uZmlnICYmIHByb3BzLkRpc2NvdmVyeVN0cmVhbS5jb25maWcuZW5hYmxlZDtcbiAgICBsZXQgZmlsdGVyZWRTZWN0aW9ucyA9IHByb3BzLlNlY3Rpb25zLmZpbHRlcihcbiAgICAgIHNlY3Rpb24gPT4gc2VjdGlvbi5pZCAhPT0gXCJ0b3BzdG9yaWVzXCJcbiAgICApO1xuXG4gICAgbGV0IHNwb2NNZXNzYWdlVmFyaWFudCA9IFwiXCI7XG4gICAgaWYgKFxuICAgICAgcHJvcHMuQXBwLmxvY2FsZT8uc3RhcnRzV2l0aChcImVuLVwiKSAmJlxuICAgICAgcG9ja2V0Q29uZmlnPy5zcG9jTWVzc2FnZVZhcmlhbnQgPT09IFwidmFyaWFudC1jXCJcbiAgICApIHtcbiAgICAgIHNwb2NNZXNzYWdlVmFyaWFudCA9IHBvY2tldENvbmZpZy5zcG9jTWVzc2FnZVZhcmlhbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcG9ja2V0RW5hYmxlZCA9XG4gICAgICBwcmVmc1tcImZlZWRzLnNlY3Rpb24udG9wc3Rvcmllc1wiXSAmJiBwcmVmc1tcImZlZWRzLnN5c3RlbS50b3BzdG9yaWVzXCJdO1xuICAgIGNvbnN0IG5vU2VjdGlvbnNFbmFibGVkID1cbiAgICAgICFwcmVmc1tcImZlZWRzLnRvcHNpdGVzXCJdICYmXG4gICAgICAhcG9ja2V0RW5hYmxlZCAmJlxuICAgICAgZmlsdGVyZWRTZWN0aW9ucy5maWx0ZXIoc2VjdGlvbiA9PiBzZWN0aW9uLmVuYWJsZWQpLmxlbmd0aCA9PT0gMDtcbiAgICBjb25zdCBzZWFyY2hIYW5kb2ZmRW5hYmxlZCA9IHByZWZzW1wiaW1wcm92ZXNlYXJjaC5oYW5kb2ZmVG9Bd2Vzb21lYmFyXCJdO1xuICAgIGNvbnN0IGVuYWJsZWRTZWN0aW9ucyA9IHtcbiAgICAgIHRvcFNpdGVzRW5hYmxlZDogcHJlZnNbXCJmZWVkcy50b3BzaXRlc1wiXSxcbiAgICAgIHBvY2tldEVuYWJsZWQ6IHByZWZzW1wiZmVlZHMuc2VjdGlvbi50b3BzdG9yaWVzXCJdLFxuICAgICAgc2hvd0luZmVycmVkUGVyc29uYWxpemF0aW9uRW5hYmxlZDpcbiAgICAgICAgcHJlZnNbUFJFRl9JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fVVNFUl0sXG4gICAgICB0b3BTaXRlc1Jvd3NDb3VudDogcHJlZnMudG9wU2l0ZXNSb3dzLFxuICAgICAgd2VhdGhlckVuYWJsZWQ6IHByZWZzLnNob3dXZWF0aGVyLFxuICAgICAgdHJlbmRpbmdTZWFyY2hFbmFibGVkOiBwcmVmc1tcInRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIl0sXG4gICAgfTtcblxuICAgIGNvbnN0IHBvY2tldFJlZ2lvbiA9IHByZWZzW1wiZmVlZHMuc3lzdGVtLnRvcHN0b3JpZXNcIl07XG4gICAgY29uc3QgbWF5SGF2ZVNwb25zb3JlZFN0b3JpZXMgPSBwcmVmc1tcInN5c3RlbS5zaG93U3BvbnNvcmVkXCJdO1xuICAgIGNvbnN0IG1heUhhdmVJbmZlcnJlZFBlcnNvbmFsaXphdGlvbiA9XG4gICAgICBwcmVmc1tQUkVGX0lORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9TWVNURU1dO1xuICAgIGNvbnN0IG1heUhhdmVXZWF0aGVyID0gcHJlZnNbXCJzeXN0ZW0uc2hvd1dlYXRoZXJcIl07XG4gICAgY29uc3QgeyBtYXlIYXZlU3BvbnNvcmVkVG9wU2l0ZXMgfSA9IHByZWZzO1xuXG4gICAgLy8gV2lkZ2V0cyBleHBlcmltZW50IHByZWYgY2hlY2tcbiAgICBjb25zdCBtYXlIYXZlV2lkZ2V0cyA9IHByZWZzW1wid2lkZ2V0cy5zeXN0ZW0uZW5hYmxlZFwiXTtcbiAgICBjb25zdCBtYXlIYXZlTGlzdHNXaWRnZXQgPSBwcmVmc1tcIndpZGdldHMuc3lzdGVtLmxpc3RzLmVuYWJsZWRcIl07XG4gICAgY29uc3QgbWF5SGF2ZVRpbWVyV2lkZ2V0ID0gcHJlZnNbXCJ3aWRnZXRzLnN5c3RlbS5mb2N1c1RpbWVyLmVuYWJsZWRcIl07XG5cbiAgICBjb25zdCBlbmFibGVkV2lkZ2V0cyA9IHtcbiAgICAgIGxpc3RzRW5hYmxlZDogcHJlZnNbXCJ3aWRnZXRzLmxpc3RzLmVuYWJsZWRcIl0sXG4gICAgICB0aW1lckVuYWJsZWQ6IHByZWZzW1wid2lkZ2V0cy5mb2N1c1RpbWVyLmVuYWJsZWRcIl0sXG4gICAgICB0cmVuZGluZ1NlYXJjaEVuYWJsZWQ6IHByZWZzW1widHJlbmRpbmdTZWFyY2guZW5hYmxlZFwiXSxcbiAgICAgIHdlYXRoZXJFbmFibGVkOiBwcmVmcy5zaG93V2VhdGhlcixcbiAgICB9O1xuXG4gICAgLy8gVHJlbmRpbmcgU2VhcmNoZXMgZXhwZXJpbWVudCBwcmVmIGNoZWNrXG4gICAgY29uc3QgbWF5SGF2ZVRyZW5kaW5nU2VhcmNoID1cbiAgICAgIHByZWZzW1wic3lzdGVtLnRyZW5kaW5nU2VhcmNoLmVuYWJsZWRcIl0gJiZcbiAgICAgIHByZWZzW1widHJlbmRpbmdTZWFyY2guZGVmYXVsdFNlYXJjaEVuZ2luZVwiXS50b0xvd2VyQ2FzZSgpID09PSBcImdvb2dsZVwiO1xuXG4gICAgLy8gTW9iaWxlIERvd25sb2FkIFByb21vIFByZWYgQ2hlY2tzXG4gICAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb0VuYWJsZWQgPSBwcmVmc1tcIm1vYmlsZURvd25sb2FkTW9kYWwuZW5hYmxlZFwiXTtcbiAgICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEFFbmFibGVkID1cbiAgICAgIHByZWZzW1wibW9iaWxlRG93bmxvYWRNb2RhbC52YXJpYW50LWFcIl07XG4gICAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRCRW5hYmxlZCA9XG4gICAgICBwcmVmc1tcIm1vYmlsZURvd25sb2FkTW9kYWwudmFyaWFudC1iXCJdO1xuICAgIGNvbnN0IG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50Q0VuYWJsZWQgPVxuICAgICAgcHJlZnNbXCJtb2JpbGVEb3dubG9hZE1vZGFsLnZhcmlhbnQtY1wiXTtcbiAgICBjb25zdCBtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudEFCb3JDID1cbiAgICAgIG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QUVuYWJsZWQgfHxcbiAgICAgIG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QkVuYWJsZWQgfHxcbiAgICAgIG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50Q0VuYWJsZWQ7XG4gICAgY29uc3QgbW9iaWxlRG93bmxvYWRQcm9tb1dyYXBwZXJIZWlnaHRNb2RpZmllciA9XG4gICAgICBwcmVmc1tcIndlYXRoZXIuZGlzcGxheVwiXSA9PT0gXCJkZXRhaWxlZFwiICYmXG4gICAgICB3ZWF0aGVyRW5hYmxlZCAmJlxuICAgICAgbWF5SGF2ZVdlYXRoZXJcbiAgICAgICAgPyBcImlzLXRhbGxcIlxuICAgICAgICA6IFwiXCI7XG5cbiAgICBjb25zdCBoYXNUaHVtYnNVcERvd25MYXlvdXQgPVxuICAgICAgcHJlZnNbXCJkaXNjb3ZlcnlzdHJlYW0udGh1bWJzVXBEb3duLnNlYXJjaFRvcHNpdGVzQ29tcGFjdFwiXTtcbiAgICBjb25zdCBoYXNUaHVtYnNVcERvd24gPSBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS50aHVtYnNVcERvd24uZW5hYmxlZFwiXTtcbiAgICBjb25zdCBzZWN0aW9uc0VuYWJsZWQgPSBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS5zZWN0aW9ucy5lbmFibGVkXCJdO1xuICAgIGNvbnN0IHRvcGljTGFiZWxzRW5hYmxlZCA9IHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnRvcGljTGFiZWxzLmVuYWJsZWRcIl07XG4gICAgY29uc3Qgc2VjdGlvbnNDdXN0b21pemVNZW51UGFuZWxFbmFibGVkID1cbiAgICAgIHByZWZzW1wiZGlzY292ZXJ5c3RyZWFtLnNlY3Rpb25zLmN1c3RvbWl6ZU1lbnVQYW5lbC5lbmFibGVkXCJdO1xuICAgIGNvbnN0IHNlY3Rpb25zUGVyc29uYWxpemF0aW9uRW5hYmxlZCA9XG4gICAgICBwcmVmc1tcImRpc2NvdmVyeXN0cmVhbS5zZWN0aW9ucy5wZXJzb25hbGl6YXRpb24uZW5hYmxlZFwiXTtcblxuICAgIC8vIExvZ2ljIHRvIHNob3cgZm9sbG93L2Jsb2NrIHRvcGljIG1nbXQgcGFuZWwgaW4gQ3VzdG9taXplIHBhbmVsXG4gICAgY29uc3QgbWF5SGF2ZVBlcnNvbmFsaXplZFRvcGljU2VjdGlvbnMgPVxuICAgICAgc2VjdGlvbnNQZXJzb25hbGl6YXRpb25FbmFibGVkICYmXG4gICAgICB0b3BpY0xhYmVsc0VuYWJsZWQgJiZcbiAgICAgIHNlY3Rpb25zRW5hYmxlZCAmJlxuICAgICAgc2VjdGlvbnNDdXN0b21pemVNZW51UGFuZWxFbmFibGVkICYmXG4gICAgICBEaXNjb3ZlcnlTdHJlYW0uZmVlZHMubG9hZGVkO1xuXG4gICAgY29uc3QgZmVhdHVyZUNsYXNzTmFtZSA9IFtcbiAgICAgIG1vYmlsZURvd25sb2FkUHJvbW9FbmFibGVkICYmXG4gICAgICAgIG1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QUJvckMgJiZcbiAgICAgICAgXCJoYXMtbW9iaWxlLWRvd25sb2FkLXByb21vXCIsIC8vIE1vYmlsZSBkb3dubG9hZCBwcm9tbyBtb2RhbCBpcyBlbmFibGVkL3Zpc2libGVcbiAgICAgIHdlYXRoZXJFbmFibGVkICYmIG1heUhhdmVXZWF0aGVyICYmIFwiaGFzLXdlYXRoZXJcIiwgLy8gV2VhdGhlciB3aWRnZXQgaXMgZW5hYmxlZC92aXNpYmxlXG4gICAgICBwcmVmcy5zaG93U2VhcmNoID8gXCJoYXMtc2VhcmNoXCIgOiBcIm5vLXNlYXJjaFwiLFxuICAgICAgLy8gbGF5b3V0c1ZhcmlhbnRBRW5hYmxlZCA/IFwibGF5b3V0LXZhcmlhbnQtYVwiIDogXCJcIiwgLy8gTGF5b3V0IGV4cGVyaW1lbnQgdmFyaWFudCBBXG4gICAgICAvLyBsYXlvdXRzVmFyaWFudEJFbmFibGVkID8gXCJsYXlvdXQtdmFyaWFudC1iXCIgOiBcIlwiLCAvLyBMYXlvdXQgZXhwZXJpbWVudCB2YXJpYW50IEJcbiAgICAgIHBvY2tldEVuYWJsZWQgPyBcImhhcy1yZWNvbW1lbmRlZC1zdG9yaWVzXCIgOiBcIm5vLXJlY29tbWVuZGVkLXN0b3JpZXNcIixcbiAgICAgIHNlY3Rpb25zRW5hYmxlZCA/IFwiaGFzLXNlY3Rpb25zLWdyaWRcIiA6IFwiXCIsXG4gICAgXVxuICAgICAgLmZpbHRlcih2ID0+IHYpXG4gICAgICAuam9pbihcIiBcIik7XG5cbiAgICBjb25zdCBvdXRlckNsYXNzTmFtZSA9IFtcbiAgICAgIFwib3V0ZXItd3JhcHBlclwiLFxuICAgICAgaXNEaXNjb3ZlcnlTdHJlYW0gJiYgcG9ja2V0RW5hYmxlZCAmJiBcImRzLW91dGVyLXdyYXBwZXItc2VhcmNoLWFsaWdubWVudFwiLFxuICAgICAgaXNEaXNjb3ZlcnlTdHJlYW0gJiYgXCJkcy1vdXRlci13cmFwcGVyLWJyZWFrcG9pbnQtb3ZlcnJpZGVcIixcbiAgICAgIHByZWZzLnNob3dTZWFyY2ggJiZcbiAgICAgICAgdGhpcy5zdGF0ZS5maXhlZFNlYXJjaCAmJlxuICAgICAgICAhbm9TZWN0aW9uc0VuYWJsZWQgJiZcbiAgICAgICAgXCJmaXhlZC1zZWFyY2hcIixcbiAgICAgIHByZWZzLnNob3dTZWFyY2ggJiYgbm9TZWN0aW9uc0VuYWJsZWQgJiYgXCJvbmx5LXNlYXJjaFwiLFxuICAgICAgcHJlZnNbXCJmZWVkcy50b3BzaXRlc1wiXSAmJlxuICAgICAgICAhcG9ja2V0RW5hYmxlZCAmJlxuICAgICAgICAhcHJlZnMuc2hvd1NlYXJjaCAmJlxuICAgICAgICBcIm9ubHktdG9wc2l0ZXNcIixcbiAgICAgIG5vU2VjdGlvbnNFbmFibGVkICYmIFwibm8tc2VjdGlvbnNcIixcbiAgICAgIHByZWZzW1wibG9nb3dvcmRtYXJrLmFsd2F5c1Zpc2libGVcIl0gJiYgXCJ2aXNpYmxlLWxvZ29cIixcbiAgICAgIGhhc1RodW1ic1VwRG93bkxheW91dCAmJiBoYXNUaHVtYnNVcERvd24gJiYgXCJ0aHVtYnMtdWktY29tcGFjdFwiLFxuICAgIF1cbiAgICAgIC5maWx0ZXIodiA9PiB2KVxuICAgICAgLmpvaW4oXCIgXCIpO1xuICAgIGlmICh3YWxscGFwZXJzRW5hYmxlZCkge1xuICAgICAgLy8gQWRkIGhlbHBlciBjbGFzcyB0byBib2R5IGlmIHVzZXIgaGFzIGEgd2FsbHBhcGVyIHNlbGVjdGVkXG4gICAgICBpZiAodGhpcy5zdGF0ZS53YWxscGFwZXJUaGVtZSA9PT0gXCJsaWdodFwiKSB7XG4gICAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5jbGFzc0xpc3QuYWRkKFwibGlnaHRXYWxscGFwZXJcIik7XG4gICAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiZGFya1dhbGxwYXBlclwiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc3RhdGUud2FsbHBhcGVyVGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgICAgIGdsb2JhbC5kb2N1bWVudD8uYm9keS5jbGFzc0xpc3QuYWRkKFwiZGFya1dhbGxwYXBlclwiKTtcbiAgICAgICAgZ2xvYmFsLmRvY3VtZW50Py5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsaWdodFdhbGxwYXBlclwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiBzdGF0ZS5zaG93RG93bmxvYWRIaWdobGlnaHRPdmVycmlkZSBoYXMgdmFsdWUsIGxldCBpdCBvdmVycmlkZSB0aGUgbG9naWNcbiAgICAvLyBPdGhlcndpc2UsIGRlZmVyIHRvIE9NQyBtZXNzYWdlIGRpc3BsYXkgbG9naWNcbiAgICBjb25zdCBzaG91bGRTaG93RG93bmxvYWRIaWdobGlnaHQgPVxuICAgICAgdGhpcy5zdGF0ZS5zaG93RG93bmxvYWRIaWdobGlnaHRPdmVycmlkZSA/P1xuICAgICAgdGhpcy5zaG91bGRTaG93T01DSGlnaGxpZ2h0KFwiRG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodFwiKTtcblxuICAgIC8vIENoZWNrIGlmIHdlIHNob3VsZCBzaG93IHRoZSBzaW1wbGlmaWVkIEFJIEFnZW50IGludGVyZmFjZVxuICAgIGNvbnN0IHNob3dTaW1wbGlmaWVkSW50ZXJmYWNlID0gdHJ1ZTsgLy8gQWx3YXlzIHNob3cgc2ltcGxpZmllZCBpbnRlcmZhY2UgZm9yIENvbnRleHRjb2xcblxuICAgIGlmIChzaG93U2ltcGxpZmllZEludGVyZmFjZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRleHRjb2xBSUludGVyZmFjZVxuICAgICAgICAgIHdhbGxwYXBlcnNFbmFibGVkPXt3YWxscGFwZXJzRW5hYmxlZH1cbiAgICAgICAgICByZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbj17dGhpcy5yZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbn1cbiAgICAgICAgICBvbkFJUmVxdWVzdD17dGhpcy5oYW5kbGVBSVJlcXVlc3R9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZmVhdHVyZUNsYXNzTmFtZX0+XG4gICAgICAgIHsvKiBGbG9hdGluZyBtZW51IGZvciBjdXN0b21pemUgbWVudSB0b2dnbGUgKi99XG4gICAgICAgIDxtZW51IGNsYXNzTmFtZT1cInBlcnNvbmFsaXplQnV0dG9uV3JhcHBlclwiPlxuICAgICAgICAgIDxDdXN0b21pemVNZW51XG4gICAgICAgICAgICBvbkNsb3NlPXt0aGlzLmNsb3NlQ3VzdG9taXphdGlvbk1lbnV9XG4gICAgICAgICAgICBvbk9wZW49e3RoaXMub3BlbkN1c3RvbWl6YXRpb25NZW51fVxuICAgICAgICAgICAgb3BlblByZWZlcmVuY2VzPXt0aGlzLm9wZW5QcmVmZXJlbmNlc31cbiAgICAgICAgICAgIHNldFByZWY9e3RoaXMuc2V0UHJlZn1cbiAgICAgICAgICAgIGVuYWJsZWRTZWN0aW9ucz17ZW5hYmxlZFNlY3Rpb25zfVxuICAgICAgICAgICAgZW5hYmxlZFdpZGdldHM9e2VuYWJsZWRXaWRnZXRzfVxuICAgICAgICAgICAgd2FsbHBhcGVyc0VuYWJsZWQ9e3dhbGxwYXBlcnNFbmFibGVkfVxuICAgICAgICAgICAgYWN0aXZlV2FsbHBhcGVyPXthY3RpdmVXYWxscGFwZXJ9XG4gICAgICAgICAgICBwb2NrZXRSZWdpb249e3BvY2tldFJlZ2lvbn1cbiAgICAgICAgICAgIG1heUhhdmVUb3BpY1NlY3Rpb25zPXttYXlIYXZlUGVyc29uYWxpemVkVG9waWNTZWN0aW9uc31cbiAgICAgICAgICAgIG1heUhhdmVTcG9uc29yZWRUb3BTaXRlcz17bWF5SGF2ZVNwb25zb3JlZFRvcFNpdGVzfVxuICAgICAgICAgICAgbWF5SGF2ZVNwb25zb3JlZFN0b3JpZXM9e21heUhhdmVTcG9uc29yZWRTdG9yaWVzfVxuICAgICAgICAgICAgbWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uPXttYXlIYXZlSW5mZXJyZWRQZXJzb25hbGl6YXRpb259XG4gICAgICAgICAgICBtYXlIYXZlV2VhdGhlcj17bWF5SGF2ZVdlYXRoZXJ9XG4gICAgICAgICAgICBtYXlIYXZlVHJlbmRpbmdTZWFyY2g9e21heUhhdmVUcmVuZGluZ1NlYXJjaH1cbiAgICAgICAgICAgIG1heUhhdmVXaWRnZXRzPXttYXlIYXZlV2lkZ2V0c31cbiAgICAgICAgICAgIG1heUhhdmVUaW1lcldpZGdldD17bWF5SGF2ZVRpbWVyV2lkZ2V0fVxuICAgICAgICAgICAgbWF5SGF2ZUxpc3RzV2lkZ2V0PXttYXlIYXZlTGlzdHNXaWRnZXR9XG4gICAgICAgICAgICBzcG9jTWVzc2FnZVZhcmlhbnQ9e3Nwb2NNZXNzYWdlVmFyaWFudH1cbiAgICAgICAgICAgIHNob3dpbmc9e2N1c3RvbWl6ZU1lbnVWaXNpYmxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge3RoaXMuc2hvdWxkU2hvd09NQ0hpZ2hsaWdodChcIkN1c3RvbVdhbGxwYXBlckhpZ2hsaWdodFwiKSAmJiAoXG4gICAgICAgICAgICA8TWVzc2FnZVdyYXBwZXIgZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9PlxuICAgICAgICAgICAgICA8V2FsbHBhcGVyRmVhdHVyZUhpZ2hsaWdodFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiaW5zZXQtYmxvY2stc3RhcnQgaW5zZXQtaW5saW5lLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTWVzc2FnZVdyYXBwZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tZW51PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlYXRoZXJXcmFwcGVyXCI+XG4gICAgICAgICAge3dlYXRoZXJFbmFibGVkICYmIChcbiAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICA8V2VhdGhlciAvPlxuICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgbW9iaWxlRG93bmxvYWRQcm9tb1dyYXBwZXIgJHttb2JpbGVEb3dubG9hZFByb21vV3JhcHBlckhlaWdodE1vZGlmaWVyfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7bW9iaWxlRG93bmxvYWRQcm9tb0VuYWJsZWQgJiYgbW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRBQm9yQyAmJiAoXG4gICAgICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICAgPERvd25sb2FkTW9kYWxUb2dnbGVcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17c2hvdWxkU2hvd0Rvd25sb2FkSGlnaGxpZ2h0fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRG93bmxvYWRIaWdobGlnaHR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtzaG91bGRTaG93RG93bmxvYWRIaWdobGlnaHQgJiYgKFxuICAgICAgICAgICAgICAgIDxNZXNzYWdlV3JhcHBlclxuICAgICAgICAgICAgICAgICAgaGlkZGVuT3ZlcnJpZGU9e3Nob3VsZFNob3dEb3dubG9hZEhpZ2hsaWdodH1cbiAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17dGhpcy5oYW5kbGVEaXNtaXNzRG93bmxvYWRIaWdobGlnaHR9XG4gICAgICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17YGluc2V0LWlubGluZS1zdGFydCBpbnNldC1ibG9jay1lbmRgfVxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5wcm9wcy5kaXNwYXRjaH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlV3JhcHBlcj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17b3V0ZXJDbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuY2xvc2VDdXN0b21pemF0aW9uTWVudX0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibmV3dGFiLW1haW5cIiBzdHlsZT17dGhpcy5zdGF0ZS5maXhlZE5hdlN0eWxlfT5cbiAgICAgICAgICAgIHtwcmVmcy5zaG93U2VhcmNoICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub24tY29sbGFwc2libGUtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICAgICAgPFNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBzaG93TG9nbz17XG4gICAgICAgICAgICAgICAgICAgICAgbm9TZWN0aW9uc0VuYWJsZWQgfHwgcHJlZnNbXCJsb2dvd29yZG1hcmsuYWx3YXlzVmlzaWJsZVwiXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRvZmZFbmFibGVkPXtzZWFyY2hIYW5kb2ZmRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzLlNlYXJjaH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7LyogQnVnIDE5MTQwNTU6IFNob3cgbG9nbyByZWdhcmRsZXNzIGlmIHNlYXJjaCBpcyBlbmFibGVkICovfVxuICAgICAgICAgICAgey8qIHshcHJlZnMuc2hvd1NlYXJjaCAmJiAhbm9TZWN0aW9uc0VuYWJsZWQgJiYgPExvZ28gLz59ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bib2R5LXdyYXBwZXIke2luaXRpYWxpemVkID8gXCIgb25cIiA6IFwiXCJ9YH0+XG4gICAgICAgICAgICAgIHsvKiB7aXNEaXNjb3ZlcnlTdHJlYW0gPyAoXG4gICAgICAgICAgICAgICAgPEVycm9yQm91bmRhcnkgY2xhc3NOYW1lPVwiYm9yZGVybGVzcy1lcnJvclwiPlxuICAgICAgICAgICAgICAgICAgPERpc2NvdmVyeVN0cmVhbUJhc2VcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtwcm9wcy5BcHAubG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBtYXlIYXZlU3BvbnNvcmVkU3Rvcmllcz17bWF5SGF2ZVNwb25zb3JlZFN0b3JpZXN9XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0VmlzaWJsZVRpbWVzdGFtcD17dGhpcy5zdGF0ZS5maXJzdFZpc2libGVUaW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8U2VjdGlvbnMgLz5cbiAgICAgICAgICAgICAgKX0gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb25maXJtRGlhbG9nIC8+XG4gICAgICAgICAgICB7d2FsbHBhcGVyc0VuYWJsZWQgJiYgdGhpcy5yZW5kZXJXYWxscGFwZXJBdHRyaWJ1dGlvbigpfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgICA8YXNpZGU+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5Ob3RpZmljYXRpb25zPy5zaG93Tm90aWZpY2F0aW9ucyAmJiAoXG4gICAgICAgICAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zIGRpc3BhdGNoPXt0aGlzLnByb3BzLmRpc3BhdGNofSAvPlxuICAgICAgICAgICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYXNpZGU+XG4gICAgICAgICAgey8qIE9ubHkgc2hvdyB0aGUgbW9kYWwgb24gY3VycmVudGx5IHZpc2libGUgcGFnZXMgKG5vdCBwcmVsb2FkZWQpICovfVxuICAgICAgICAgIHsvKiB7bWF5U2hvd1RvcGljU2VsZWN0aW9uICYmIHBvY2tldEVuYWJsZWQgJiYgKFxuICAgICAgICAgICAgPFRvcGljU2VsZWN0aW9uIHN1cHBvcnRVcmw9e3N1cHBvcnRVcmx9IC8+XG4gICAgICAgICAgKX0gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5CYXNlQ29udGVudC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRvY3VtZW50OiBnbG9iYWwuZG9jdW1lbnQsXG59O1xuXG5leHBvcnQgY29uc3QgQmFzZSA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgQXBwOiBzdGF0ZS5BcHAsXG4gIFByZWZzOiBzdGF0ZS5QcmVmcyxcbiAgU2VjdGlvbnM6IHN0YXRlLlNlY3Rpb25zLFxuICBEaXNjb3ZlcnlTdHJlYW06IHN0YXRlLkRpc2NvdmVyeVN0cmVhbSxcbiAgTWVzc2FnZXM6IHN0YXRlLk1lc3NhZ2VzLFxuICBOb3RpZmljYXRpb25zOiBzdGF0ZS5Ob3RpZmljYXRpb25zLFxuICBTZWFyY2g6IHN0YXRlLlNlYXJjaCxcbiAgV2FsbHBhcGVyczogc3RhdGUuV2FsbHBhcGVycyxcbiAgV2VhdGhlcjogc3RhdGUuV2VhdGhlcixcbn0pKShfQmFzZSk7XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5sZXQgdXNhYmxlUGVyZk9iaiA9IHdpbmRvdy5wZXJmb3JtYW5jZTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9QZXJmU2VydmljZShvcHRpb25zKSB7XG4gIC8vIEZvciB0ZXN0aW5nLCBzbyB0aGF0IHdlIGNhbiB1c2UgYSBmYWtlIFdpbmRvdy5wZXJmb3JtYW5jZSBvYmplY3Qgd2l0aFxuICAvLyBrbm93biBzdGF0ZS5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wZXJmb3JtYW5jZU9iaikge1xuICAgIHRoaXMuX3BlcmYgPSBvcHRpb25zLnBlcmZvcm1hbmNlT2JqO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3BlcmYgPSB1c2FibGVQZXJmT2JqO1xuICB9XG59XG5cbl9QZXJmU2VydmljZS5wcm90b3R5cGUgPSB7XG4gIC8qKlxuICAgKiBDYWxscyB0aGUgdW5kZXJseWluZyBtYXJrKCkgbWV0aG9kIG9uIHRoZSBhcHByb3ByaWF0ZSBXaW5kb3cucGVyZm9ybWFuY2VcbiAgICogb2JqZWN0IHRvIGFkZCBhIG1hcmsgd2l0aCB0aGUgZ2l2ZW4gbmFtZSB0byB0aGUgYXBwcm9wcmlhdGUgcGVyZm9ybWFuY2VcbiAgICogdGltZWxpbmUuXG4gICAqXG4gICAqIEBwYXJhbSAge1N0cmluZ30gbmFtZSAgdGhlIG5hbWUgdG8gZ2l2ZSB0aGUgY3VycmVudCBtYXJrXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBtYXJrOiBmdW5jdGlvbiBtYXJrKHN0cikge1xuICAgIHRoaXMuX3BlcmYubWFyayhzdHIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxscyB0aGUgdW5kZXJseWluZyBnZXRFbnRyaWVzQnlOYW1lIG9uIHRoZSBhcHByb3ByaWF0ZSBXaW5kb3cucGVyZm9ybWFuY2VcbiAgICogb2JqZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAgICogQHBhcmFtICB7U3RyaW5nfSB0eXBlIGVnIFwibWFya1wiXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICBQZXJmb3JtYW5jZSogb2JqZWN0c1xuICAgKi9cbiAgZ2V0RW50cmllc0J5TmFtZTogZnVuY3Rpb24gZ2V0RW50cmllc0J5TmFtZShlbnRyeU5hbWUsIHR5cGUpIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyZi5nZXRFbnRyaWVzQnlOYW1lKGVudHJ5TmFtZSwgdHlwZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSB0aW1lT3JpZ2luIHByb3BlcnR5IGZyb20gdGhlIGFwcHJvcHJpYXRlIHBlcmZvcm1hbmNlIG9iamVjdC5cbiAgICogVXNlZCB0byBlbnN1cmUgdGhhdCB0aW1lc3RhbXBzIGZyb20gdGhlIGFkZC1vbiBjb2RlIGFuZCB0aGUgY29udGVudCBjb2RlXG4gICAqIGFyZSBjb21wYXJhYmxlLlxuICAgKlxuICAgKiBAbm90ZSBJZiB0aGlzIGlzIGNhbGxlZCBmcm9tIGEgY29udGV4dCB3aXRob3V0IGEgd2luZG93XG4gICAqIChlZyBhIEpTTSBpbiBjaHJvbWUpLCBpdCB3aWxsIHJldHVybiB0aGUgdGltZU9yaWdpbiBvZiB0aGUgWFVMIGhpZGRlblxuICAgKiB3aW5kb3csIHdoaWNoIGFwcGVhcnMgdG8gYmUgdGhlIGZpcnN0IGNyZWF0ZWQgd2luZG93IChhbmQgdGh1c1xuICAgKiB0aW1lT3JpZ2luKSBpbiB0aGUgYnJvd3Nlci4gIE5vdGUgYWxzbywgaG93ZXZlciwgdGhlcmUgaXMgYWxzbyBhIHByaXZhdGVcbiAgICogaGlkZGVuIHdpbmRvdywgcHJlc3VtYWJseSBmb3IgcHJpdmF0ZSBicm93c2luZywgd2hpY2ggYXBwZWFycyB0byBiZVxuICAgKiBjcmVhdGVkIGR5bmFtaWNhbGx5IGxhdGVyLiAgRXhhY3RseSBob3cvd2hlbiB0aGF0IHNob3dzIHVwIG5lZWRzIHRvIGJlXG4gICAqIGludmVzdGlnYXRlZC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSBBIGRvdWJsZSBvZiBtaWxsaXNlY29uZHMgd2l0aCBhIHByZWNpc2lvbiBvZiAwLjV1cy5cbiAgICovXG4gIGdldCB0aW1lT3JpZ2luKCkge1xuICAgIHJldHVybiB0aGlzLl9wZXJmLnRpbWVPcmlnaW47XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFwiYWJzb2x1dGVcIiB2ZXJzaW9uIG9mIHBlcmZvcm1hbmNlLm5vdygpLCBpLmUuIG9uZSB0aGF0XG4gICAqIHNob3VsZCAoW2J1ZyAxNDAxNDA2XShodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDAxNDA2KVxuICAgKiBiZSBjb21wYXJhYmxlIGFjcm9zcyBib3RoIGNocm9tZSBhbmQgY29udGVudC5cbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfVxuICAgKi9cbiAgYWJzTm93OiBmdW5jdGlvbiBhYnNOb3coKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZU9yaWdpbiArIHRoaXMuX3BlcmYubm93KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgcmV0dXJucyB0aGUgYWJzb2x1dGUgc3RhcnRUaW1lIGZyb20gdGhlIG1vc3QgcmVjZW50IHBlcmZvcm1hbmNlLm1hcmsoKVxuICAgKiB3aXRoIHRoZSBnaXZlbiBuYW1lLlxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWUgIHRoZSBuYW1lIHRvIGxvb2t1cCB0aGUgc3RhcnQgdGltZSBmb3JcbiAgICpcbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICB0aGUgcmV0dXJuZWQgc3RhcnQgdGltZSwgYXMgYSBET01IaWdoUmVzVGltZVN0YW1wXG4gICAqXG4gICAqIEB0aHJvd3Mge0Vycm9yfSAgICAgICAgXCJObyBNYXJrcyB3aXRoIHRoZSBuYW1lIC4uLlwiIGlmIG5vbmUgYXJlIGF2YWlsYWJsZVxuICAgKlxuICAgKiBAbm90ZSBBbHdheXMgc3Vycm91bmQgY2FsbHMgdG8gdGhpcyBieSB0cnkvY2F0Y2guICBPdGhlcndpc2UgeW91ciBjb2RlXG4gICAqIG1heSBmYWlsIHdoZW4gdGhlIGBwcml2YWN5LnJlc2lzdEZpbmdlcnByaW50aW5nYCBwcmVmIGlzIHRydWUuICBXaGVuXG4gICAqIHRoaXMgcHJlZiBpcyBzZXQsIGFsbCBhdHRlbXB0cyB0byBnZXQgbWFya3Mgd2lsbCBsaWtlbHkgZmFpbCwgd2hpY2ggd2lsbFxuICAgKiBjYXVzZSB0aGlzIG1ldGhvZCB0byB0aHJvdy5cbiAgICpcbiAgICogU2VlIFtidWcgMTM2OTMwM10oaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2OTMwMylcbiAgICogZm9yIG1vcmUgaW5mby5cbiAgICovXG4gIGdldE1vc3RSZWNlbnRBYnNNYXJrU3RhcnRCeU5hbWUoZW50cnlOYW1lKSB7XG4gICAgbGV0IGVudHJpZXMgPSB0aGlzLmdldEVudHJpZXNCeU5hbWUoZW50cnlOYW1lLCBcIm1hcmtcIik7XG5cbiAgICBpZiAoIWVudHJpZXMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG1hcmtzIHdpdGggdGhlIG5hbWUgJHtlbnRyeU5hbWV9YCk7XG4gICAgfVxuXG4gICAgbGV0IG1vc3RSZWNlbnRFbnRyeSA9IGVudHJpZXNbZW50cmllcy5sZW5ndGggLSAxXTtcbiAgICByZXR1cm4gdGhpcy5fcGVyZi50aW1lT3JpZ2luICsgbW9zdFJlY2VudEVudHJ5LnN0YXJ0VGltZTtcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBwZXJmU2VydmljZSA9IG5ldyBfUGVyZlNlcnZpY2UoKTtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXMgZmlsZSxcbiAqIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7XG4gIGFjdGlvbkNyZWF0b3JzIGFzIGFjLFxuICBhY3Rpb25UeXBlcyBhcyBhdCxcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgcGVyZlNlcnZpY2UgYXMgcGVyZlN2YyB9IGZyb20gXCIuL3BlcmYtc2VydmljZS5tanNcIjtcblxuY29uc3QgVklTSUJMRSA9IFwidmlzaWJsZVwiO1xuY29uc3QgVklTSUJJTElUWV9DSEFOR0VfRVZFTlQgPSBcInZpc2liaWxpdHljaGFuZ2VcIjtcblxuZXhwb3J0IGNsYXNzIERldGVjdFVzZXJTZXNzaW9uU3RhcnQge1xuICBjb25zdHJ1Y3RvcihzdG9yZSwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5fc3RvcmUgPSBzdG9yZTtcbiAgICAvLyBPdmVycmlkZXMgZm9yIHRlc3RpbmdcbiAgICB0aGlzLmRvY3VtZW50ID0gb3B0aW9ucy5kb2N1bWVudCB8fCBnbG9iYWxUaGlzLmRvY3VtZW50O1xuICAgIHRoaXMuX3BlcmZTZXJ2aWNlID0gb3B0aW9ucy5wZXJmU2VydmljZSB8fCBwZXJmU3ZjO1xuICAgIHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZSA9IHRoaXMuX29uVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNlbmRFdmVudE9yQWRkTGlzdGVuZXIgLSBOb3RpZnkgaW1tZWRpYXRlbHkgaWYgdGhlIHBhZ2UgaXMgYWxyZWFkeSB2aXNpYmxlLFxuICAgKiAgICAgICAgICAgICAgICAgICAgb3IgZWxzZSBzZXQgdXAgYSBsaXN0ZW5lciBmb3Igd2hlbiB2aXNpYmlsaXR5IGNoYW5nZXMuXG4gICAqICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIG5lZWRlZCBmb3IgYWNjdXJhdGUgc2Vzc2lvbiB0cmFja2luZyBmb3IgdGVsZW1ldHJ5LFxuICAgKiAgICAgICAgICAgICAgICAgICAgYmVjYXVzZSB0YWJzIGFyZSBwcmUtbG9hZGVkLlxuICAgKi9cbiAgc2VuZEV2ZW50T3JBZGRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5kb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFZJU0lCTEUpIHtcbiAgICAgIC8vIElmIHRoZSBkb2N1bWVudCBpcyBhbHJlYWR5IHZpc2libGUsIHRvIHRoZSB1c2VyLCBzZW5kIGEgbm90aWZpY2F0aW9uXG4gICAgICAvLyBpbW1lZGlhdGVseSB0aGF0IGEgc2Vzc2lvbiBoYXMgc3RhcnRlZC5cbiAgICAgIHRoaXMuX3NlbmRFdmVudCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgZG9jdW1lbnQgaXMgbm90IHZpc2libGUsIGxpc3RlbiBmb3Igd2hlbiBpdCBkb2VzIGJlY29tZSB2aXNpYmxlLlxuICAgICAgdGhpcy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBWSVNJQklMSVRZX0NIQU5HRV9FVkVOVCxcbiAgICAgICAgdGhpcy5fb25WaXNpYmlsaXR5Q2hhbmdlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfc2VuZEV2ZW50IC0gU2VuZHMgYSBtZXNzYWdlIHRvIHRoZSBtYWluIHByb2Nlc3MgdG8gaW5kaWNhdGUgdGhlIGN1cnJlbnRcbiAgICogICAgICAgICAgICAgIHRhYiBpcyBub3cgdmlzaWJsZSB0byB0aGUgdXNlciwgaW5jbHVkZXMgdGhlXG4gICAqICAgICAgICAgICAgICB2aXNpYmlsaXR5X2V2ZW50X3JjdmRfdHMgdGltZSBpbiBtcyBmcm9tIHRoZSBVTklYIGVwb2NoLlxuICAgKi9cbiAgX3NlbmRFdmVudCgpIHtcbiAgICB0aGlzLl9wZXJmU2VydmljZS5tYXJrKFwidmlzaWJpbGl0eV9ldmVudF9yY3ZkX3RzXCIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGxldCB2aXNpYmlsaXR5X2V2ZW50X3JjdmRfdHMgPVxuICAgICAgICB0aGlzLl9wZXJmU2VydmljZS5nZXRNb3N0UmVjZW50QWJzTWFya1N0YXJ0QnlOYW1lKFxuICAgICAgICAgIFwidmlzaWJpbGl0eV9ldmVudF9yY3ZkX3RzXCJcbiAgICAgICAgKTtcblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGFjLkFsc29Ub01haW4oe1xuICAgICAgICAgIHR5cGU6IGF0LlNBVkVfU0VTU0lPTl9QRVJGX0RBVEEsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdmlzaWJpbGl0eV9ldmVudF9yY3ZkX3RzLFxuICAgICAgICAgICAgd2luZG93X2lubmVyX3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICAgIHdpbmRvd19pbm5lcl9oZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgLy8gSWYgdGhpcyBmYWlsZWQsIGl0J3MgbGlrZWx5IGJlY2F1c2UgdGhlIGBwcml2YWN5LnJlc2lzdEZpbmdlcnByaW50aW5nYFxuICAgICAgLy8gcHJlZiBpcyB0cnVlLiAgV2Ugc2hvdWxkIGF0IGxlYXN0IG5vdCBibG93IHVwLlxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBfb25WaXNpYmlsaXR5Q2hhbmdlIC0gSWYgdGhlIHZpc2liaWxpdHkgaGFzIGNoYW5nZWQgdG8gdmlzaWJsZSwgc2VuZHMgYSBub3RpZmljYXRpb25cbiAgICogICAgICAgICAgICAgICAgICAgICAgYW5kIHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVyLiBUaGlzIHNob3VsZCBvbmx5IGJlIGNhbGxlZCBvbmNlIHBlciB0YWIuXG4gICAqL1xuICBfb25WaXNpYmlsaXR5Q2hhbmdlKCkge1xuICAgIGlmICh0aGlzLmRvY3VtZW50LnZpc2liaWxpdHlTdGF0ZSA9PT0gVklTSUJMRSkge1xuICAgICAgdGhpcy5fc2VuZEV2ZW50KCk7XG4gICAgICB0aGlzLmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIFZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5ULFxuICAgICAgICB0aGlzLl9vblZpc2liaWxpdHlDaGFuZ2VcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJjb25zdCBfX1dFQlBBQ0tfTkFNRVNQQUNFX09CSkVDVF9fID0gUmVkdXg7IiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuLyogZXNsaW50LWVudiBtb3ppbGxhL3JlbW90ZS1wYWdlICovXG5cbmltcG9ydCB7XG4gIGFjdGlvbkNyZWF0b3JzIGFzIGFjLFxuICBhY3Rpb25UeXBlcyBhcyBhdCxcbiAgYWN0aW9uVXRpbHMgYXMgYXUsXG59IGZyb20gXCIuLi8uLi9jb21tb24vQWN0aW9ucy5tanNcIjtcbi8vIFdlIGRpc2FibGUgaW1wb3J0IGNoZWNraW5nIGhlcmUgYXMgcmVkdXggaXMgaW5zdGFsbGVkIHZpYSB0aGUgbnBtIHBhY2thZ2VzXG4vLyBhdCB0aGUgbmV3dGFiIGxldmVsLCByYXRoZXIgdGhhbiBpbiB0aGUgdG9wLWxldmVsIHBhY2thZ2UuanNvbi5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5cbmV4cG9ydCBjb25zdCBNRVJHRV9TVE9SRV9BQ1RJT04gPSBcIk5FV19UQUJfSU5JVElBTF9TVEFURVwiO1xuZXhwb3J0IGNvbnN0IE9VVEdPSU5HX01FU1NBR0VfTkFNRSA9IFwiQWN0aXZpdHlTdHJlYW06Q29udGVudFRvTWFpblwiO1xuZXhwb3J0IGNvbnN0IElOQ09NSU5HX01FU1NBR0VfTkFNRSA9IFwiQWN0aXZpdHlTdHJlYW06TWFpblRvQ29udGVudFwiO1xuXG4vKipcbiAqIEEgaGlnaGVyLW9yZGVyIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSByZWR1Y2VyIHRoYXQsIG9uIE1FUkdFX1NUT1JFIGFjdGlvbixcbiAqIHdpbGwgcmV0dXJuIHRoZSBhY3Rpb24uZGF0YSBvYmplY3QgbWVyZ2VkIGludG8gdGhlIHByZXZpb3VzIHN0YXRlLlxuICpcbiAqIEZvciBhbGwgb3RoZXIgYWN0aW9ucywgaXQgbWVyZWx5IGNhbGxzIG1haW5SZWR1Y2VyLlxuICpcbiAqIEJlY2F1c2Ugd2Ugd2FudCB0aGlzIHRvIG1lcmdlIHRoZSBlbnRpcmUgc3RhdGUgb2JqZWN0LCBpdCdzIHdyaXR0ZW4gYXMgYVxuICogaGlnaGVyIG9yZGVyIGZ1bmN0aW9uIHdoaWNoIHRha2VzIHRoZSBtYWluIHJlZHVjZXIgKGl0c2VsZiBvZnRlbiBhIGNhbGwgdG9cbiAqIGNvbWJpbmVSZWR1Y2VycykgYXMgYSBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtICB7ZnVuY3Rpb259IG1haW5SZWR1Y2VyIHJlZHVjZXIgdG8gY2FsbCBpZiBhY3Rpb24gIT0gTUVSR0VfU1RPUkVfQUNUSU9OXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gICAgICAgICAgICAgYSByZWR1Y2VyIHRoYXQsIG9uIE1FUkdFX1NUT1JFX0FDVElPTiBhY3Rpb24sXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCByZXR1cm4gdGhlIGFjdGlvbi5kYXRhIG9iamVjdCBtZXJnZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRvIHRoZSBwcmV2aW91cyBzdGF0ZSwgYW5kIHRoZSByZXN1bHRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZiBjYWxsaW5nIG1haW5SZWR1Y2VyIG90aGVyd2lzZS5cbiAqL1xuZnVuY3Rpb24gbWVyZ2VTdGF0ZVJlZHVjZXIobWFpblJlZHVjZXIpIHtcbiAgcmV0dXJuIChwcmV2U3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gTUVSR0VfU1RPUkVfQUNUSU9OKSB7XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIC4uLmFjdGlvbi5kYXRhIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1haW5SZWR1Y2VyKHByZXZTdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBtZXNzYWdlTWlkZGxld2FyZSAtIE1pZGRsZXdhcmUgdGhhdCBsb29rcyBmb3IgU2VudFRvTWFpbiB0eXBlIGFjdGlvbnMsIGFuZCBzZW5kcyB0aGVtIGlmIG5lY2Vzc2FyeVxuICovXG5jb25zdCBtZXNzYWdlTWlkZGxld2FyZSA9ICgpID0+IG5leHQgPT4gYWN0aW9uID0+IHtcbiAgY29uc3Qgc2tpcExvY2FsID0gYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuc2tpcExvY2FsO1xuICBpZiAoYXUuaXNTZW5kVG9NYWluKGFjdGlvbikpIHtcbiAgICBSUE1TZW5kQXN5bmNNZXNzYWdlKE9VVEdPSU5HX01FU1NBR0VfTkFNRSwgYWN0aW9uKTtcbiAgfVxuICBpZiAoIXNraXBMb2NhbCkge1xuICAgIG5leHQoYWN0aW9uKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHJlaHlkcmF0aW9uTWlkZGxld2FyZSA9ICh7IGdldFN0YXRlIH0pID0+IHtcbiAgLy8gTkI6IFRoZSBwYXJhbWV0ZXIgaGVyZSBpcyBNaWRkbGV3YXJlQVBJIHdoaWNoIGxvb2tzIGxpa2UgYSBTdG9yZSBhbmQgc2hhcmVzXG4gIC8vIHRoZSBzYW1lIGdldFN0YXRlLCBzbyBhdHRhY2hlZCBwcm9wZXJ0aWVzIGFyZSBhY2Nlc3NpYmxlIGZyb20gdGhlIHN0b3JlLlxuICBnZXRTdGF0ZS5kaWRSZWh5ZHJhdGUgPSBmYWxzZTtcbiAgZ2V0U3RhdGUuZGlkUmVxdWVzdEluaXRpYWxTdGF0ZSA9IGZhbHNlO1xuICByZXR1cm4gbmV4dCA9PiBhY3Rpb24gPT4ge1xuICAgIGlmIChnZXRTdGF0ZS5kaWRSZWh5ZHJhdGUgfHwgd2luZG93Ll9fRlJPTV9TVEFSVFVQX0NBQ0hFX18pIHtcbiAgICAgIC8vIFN0YXJ0dXAgbWVzc2FnZXMgY2FuIGJlIHNhZmVseSBpZ25vcmVkIGJ5IHRoZSBhYm91dDpob21lIGRvY3VtZW50XG4gICAgICAvLyBzdG9yZWQgaW4gdGhlIHN0YXJ0dXAgY2FjaGUuXG4gICAgICBpZiAoXG4gICAgICAgIHdpbmRvdy5fX0ZST01fU1RBUlRVUF9DQUNIRV9fICYmXG4gICAgICAgIGFjdGlvbi5tZXRhICYmXG4gICAgICAgIGFjdGlvbi5tZXRhLmlzU3RhcnR1cFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICB9XG5cbiAgICBjb25zdCBpc01lcmdlU3RvcmVBY3Rpb24gPSBhY3Rpb24udHlwZSA9PT0gTUVSR0VfU1RPUkVfQUNUSU9OO1xuICAgIGNvbnN0IGlzUmVoeWRyYXRpb25SZXF1ZXN0ID0gYWN0aW9uLnR5cGUgPT09IGF0Lk5FV19UQUJfU1RBVEVfUkVRVUVTVDtcblxuICAgIGlmIChpc1JlaHlkcmF0aW9uUmVxdWVzdCkge1xuICAgICAgZ2V0U3RhdGUuZGlkUmVxdWVzdEluaXRpYWxTdGF0ZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgIH1cblxuICAgIGlmIChpc01lcmdlU3RvcmVBY3Rpb24pIHtcbiAgICAgIGdldFN0YXRlLmRpZFJlaHlkcmF0ZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIElmIGluaXQgaGFwcGVuZWQgYWZ0ZXIgb3VyIHJlcXVlc3Qgd2FzIG1hZGUsIHdlIG5lZWQgdG8gcmUtcmVxdWVzdFxuICAgIGlmIChnZXRTdGF0ZS5kaWRSZXF1ZXN0SW5pdGlhbFN0YXRlICYmIGFjdGlvbi50eXBlID09PSBhdC5JTklUKSB7XG4gICAgICByZXR1cm4gbmV4dChhYy5BbHNvVG9NYWluKHsgdHlwZTogYXQuTkVXX1RBQl9TVEFURV9SRVFVRVNUIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBhdS5pc0Jyb2FkY2FzdFRvQ29udGVudChhY3Rpb24pIHx8XG4gICAgICBhdS5pc1NlbmRUb09uZUNvbnRlbnQoYWN0aW9uKSB8fFxuICAgICAgYXUuaXNTZW5kVG9QcmVsb2FkZWQoYWN0aW9uKVxuICAgICkge1xuICAgICAgLy8gTm90ZSB0aGF0IGFjdGlvbnMgcmVjZWl2ZWQgYmVmb3JlIGRpZFJlaHlkcmF0ZSB3aWxsIG5vdCBiZSBkaXNwYXRjaGVkXG4gICAgICAvLyBiZWNhdXNlIHRoaXMgY291bGQgbmVnYXRpdmVseSBhZmZlY3QgcHJlbG9hZGluZyBhbmQgdGhlIHRoZSBzdGF0ZVxuICAgICAgLy8gd2lsbCBiZSByZXBsYWNlZCBieSByZWh5ZHJhdGlvbiBhbnl3YXkuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xuICB9O1xufTtcblxuLyoqXG4gKiBpbml0U3RvcmUgLSBDcmVhdGUgYSBzdG9yZSBhbmQgbGlzdGVuIGZvciBpbmNvbWluZyBhY3Rpb25zXG4gKlxuICogQHBhcmFtICB7b2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3QgY29udGFpbmluZyBSZWR1eCByZWR1Y2Vyc1xuICogQHBhcmFtICB7b2JqZWN0fSBpbnRpYWxTdGF0ZSAob3B0aW9uYWwpIFRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSBzdG9yZSwgaWYgZGVzaXJlZFxuICogQHJldHVybiB7b2JqZWN0fSAgICAgICAgICBBIHJlZHV4IHN0b3JlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIG1lcmdlU3RhdGVSZWR1Y2VyKGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2VycykpLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBnbG9iYWxUaGlzLlJQTUFkZE1lc3NhZ2VMaXN0ZW5lciAmJlxuICAgICAgYXBwbHlNaWRkbGV3YXJlKHJlaHlkcmF0aW9uTWlkZGxld2FyZSwgbWVzc2FnZU1pZGRsZXdhcmUpXG4gICk7XG5cbiAgaWYgKGdsb2JhbFRoaXMuUlBNQWRkTWVzc2FnZUxpc3RlbmVyKSB7XG4gICAgZ2xvYmFsVGhpcy5SUE1BZGRNZXNzYWdlTGlzdGVuZXIoSU5DT01JTkdfTUVTU0FHRV9OQU1FLCBtc2cgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2gobXNnLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvbnRlbnQgbXNnOlwiLCBtc2csIFwiRGlzcGF0Y2ggZXJyb3I6IFwiLCBleCk7XG4gICAgICAgIGR1bXAoXG4gICAgICAgICAgYENvbnRlbnQgbXNnOiAke0pTT04uc3RyaW5naWZ5KG1zZyl9XFxuRGlzcGF0Y2ggZXJyb3I6ICR7ZXh9XFxuJHtcbiAgICAgICAgICAgIGV4LnN0YWNrXG4gICAgICAgICAgfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzdG9yZTtcbn1cbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSBSZWFjdERPTTsiLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIGZpbGUsXG4gKiBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5leHBvcnQgY2xhc3MgRGVkdXBlIHtcbiAgY29uc3RydWN0b3IoY3JlYXRlS2V5KSB7XG4gICAgdGhpcy5jcmVhdGVLZXkgPSBjcmVhdGVLZXkgfHwgdGhpcy5kZWZhdWx0Q3JlYXRlS2V5O1xuICB9XG5cbiAgZGVmYXVsdENyZWF0ZUtleShpdGVtKSB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH1cblxuICAvKipcbiAgICogRGVkdXBlIGFueSBudW1iZXIgb2YgZ3JvdXBlZCBlbGVtZW50cyBmYXZvcmluZyB0aG9zZSBmcm9tIGVhcmxpZXIgZ3JvdXBzLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBncm91cHMgQ29udGFpbnMgYW4gYXJiaXRyYXJ5IG51bWJlciBvZiBhcnJheXMgb2YgZWxlbWVudHMuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gQSBtYXRjaGluZyBhcnJheSBvZiBlYWNoIHByb3ZpZGVkIGdyb3VwIGRlZHVwZWQuXG4gICAqL1xuICBncm91cCguLi5ncm91cHMpIHtcbiAgICBjb25zdCBnbG9iYWxLZXlzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAoY29uc3QgdmFsdWVzIG9mIGdyb3Vwcykge1xuICAgICAgY29uc3QgdmFsdWVNYXAgPSBuZXcgTWFwKCk7XG4gICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNyZWF0ZUtleSh2YWx1ZSk7XG4gICAgICAgIGlmICghZ2xvYmFsS2V5cy5oYXMoa2V5KSAmJiAhdmFsdWVNYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICB2YWx1ZU1hcC5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlTWFwKTtcbiAgICAgIHZhbHVlTWFwLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IGdsb2JhbEtleXMuYWRkKGtleSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lm1hcChtID0+IEFycmF5LmZyb20obS52YWx1ZXMoKSkpO1xuICB9XG59XG4iLCIvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gKiBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLiAqL1xuXG5leHBvcnQgY29uc3QgVE9QX1NJVEVTX0RFRkFVTFRfUk9XUyA9IDE7XG5leHBvcnQgY29uc3QgVE9QX1NJVEVTX01BWF9TSVRFU19QRVJfUk9XID0gODtcbiIsIi8qIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbiAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG5cbmltcG9ydCB7IGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcInJlc291cmNlOi8vbmV3dGFiL2NvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgRGVkdXBlIH0gZnJvbSBcInJlc291cmNlOi8vL21vZHVsZXMvRGVkdXBlLnN5cy5tanNcIjtcblxuZXhwb3J0IHtcbiAgVE9QX1NJVEVTX0RFRkFVTFRfUk9XUyxcbiAgVE9QX1NJVEVTX01BWF9TSVRFU19QRVJfUk9XLFxufSBmcm9tIFwicmVzb3VyY2U6Ly8vbW9kdWxlcy90b3BzaXRlcy9jb25zdGFudHMubWpzXCI7XG5cbmNvbnN0IGRlZHVwZSA9IG5ldyBEZWR1cGUoc2l0ZSA9PiBzaXRlICYmIHNpdGUudXJsKTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIEFwcDoge1xuICAgIC8vIEhhdmUgd2UgcmVjZWl2ZWQgcmVhbCBkYXRhIGZyb20gdGhlIGFwcCB5ZXQ/XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGxvY2FsZTogXCJcIixcbiAgICBpc0ZvclN0YXJ0dXBDYWNoZToge1xuICAgICAgQXBwOiBmYWxzZSxcbiAgICAgIFRvcFNpdGVzOiBmYWxzZSxcbiAgICAgIERpc2NvdmVyeVN0cmVhbTogZmFsc2UsXG4gICAgICBXZWF0aGVyOiBmYWxzZSxcbiAgICAgIFdhbGxwYXBlcjogZmFsc2UsXG4gICAgfSxcbiAgICBjdXN0b21pemVNZW51VmlzaWJsZTogZmFsc2UsXG4gIH0sXG4gIEFkczoge1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBsYXN0VXBkYXRlZDogbnVsbCxcbiAgICB0aWxlczoge30sXG4gICAgc3BvY3M6IHt9LFxuICAgIHNwb2NQbGFjZW1lbnRzOiB7fSxcbiAgfSxcbiAgVG9wU2l0ZXM6IHtcbiAgICAvLyBIYXZlIHdlIHJlY2VpdmVkIHJlYWwgZGF0YSBmcm9tIGhpc3RvcnkgeWV0P1xuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAvLyBUaGUgaGlzdG9yeSAoYW5kIHBvc3NpYmx5IGRlZmF1bHQpIGxpbmtzXG4gICAgcm93czogW10sXG4gICAgLy8gVXNlZCBpbiBjb250ZW50IG9ubHkgdG8gZGlzcGF0Y2ggYWN0aW9uIHRvIFRvcFNpdGVGb3JtLlxuICAgIGVkaXRGb3JtOiBudWxsLFxuICAgIC8vIFVzZWQgaW4gY29udGVudCBvbmx5IHRvIG9wZW4gdGhlIFNlYXJjaFNob3J0Y3V0c0Zvcm0gbW9kYWwuXG4gICAgc2hvd1NlYXJjaFNob3J0Y3V0c0Zvcm06IGZhbHNlLFxuICAgIC8vIFRoZSBsaXN0IG9mIGF2YWlsYWJsZSBzZWFyY2ggc2hvcnRjdXRzLlxuICAgIHNlYXJjaFNob3J0Y3V0czogW10sXG4gICAgLy8gVGhlIFwiU2hhcmUtb2YtVm9pY2VcIiBhbGxvY2F0aW9ucyBnZW5lcmF0ZWQgYnkgVG9wU2l0ZXNGZWVkXG4gICAgc292OiB7XG4gICAgICByZWFkeTogZmFsc2UsXG4gICAgICBwb3NpdGlvbnM6IFtcbiAgICAgICAgLy8ge3Bvc2l0aW9uOiAwLCBhc3NpZ25lZFBhcnRuZXI6IFwiYW1wXCJ9LFxuICAgICAgICAvLyB7cG9zaXRpb246IDEsIGFzc2lnbmVkUGFydG5lcjogXCJtb3otc2FsZXNcIn0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG4gIFByZWZzOiB7XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIHZhbHVlczogeyBmZWF0dXJlQ29uZmlnOiB7fSB9LFxuICB9LFxuICBEaWFsb2c6IHtcbiAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICBkYXRhOiB7fSxcbiAgfSxcbiAgU2VjdGlvbnM6IFtdLFxuICBQb2NrZXQ6IHtcbiAgICBpc1VzZXJMb2dnZWRJbjogbnVsbCxcbiAgICBwb2NrZXRDdGE6IHt9LFxuICAgIHdhaXRpbmdGb3JTcG9jOiB0cnVlLFxuICB9LFxuICAvLyBUaGlzIGlzIHRoZSBuZXcgcG9ja2V0IGNvbmZpZ3VyYWJsZSBsYXlvdXQgc3RhdGUuXG4gIERpc2NvdmVyeVN0cmVhbToge1xuICAgIC8vIFRoaXMgaXMgYSBKU09OLXBhcnNlZCBjb3B5IG9mIHRoZSBkaXNjb3ZlcnlzdHJlYW0uY29uZmlnIHByZWYgdmFsdWUuXG4gICAgY29uZmlnOiB7IGVuYWJsZWQ6IGZhbHNlIH0sXG4gICAgbGF5b3V0OiBbXSxcbiAgICB0b3BpY3NMb2FkaW5nOiBmYWxzZSxcbiAgICBmZWVkczoge1xuICAgICAgZGF0YToge1xuICAgICAgICAvLyBcImh0dHBzOi8vZm9vLmNvbS9mZWVkMVwiOiB7bGFzdFVwZGF0ZWQ6IDEyMywgZGF0YTogW10sIHBlcnNvbmFsaXplZDogZmFsc2V9XG4gICAgICB9LFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICB9LFxuICAgIC8vIFVzZWQgdG8gc2hvdyBpbXByZXNzaW9ucyBpbiBuZXd0YWIgZGV2dG9vbHMuXG4gICAgaW1wcmVzc2lvbnM6IHtcbiAgICAgIGZlZWQ6IHt9LFxuICAgIH0sXG4gICAgLy8gVXNlZCB0byBzaG93IGJsb2NrcyBpbiBuZXd0YWIgZGV2dG9vbHMuXG4gICAgYmxvY2tzOiB7fSxcbiAgICBzcG9jczoge1xuICAgICAgc3BvY3NfZW5kcG9pbnQ6IFwiXCIsXG4gICAgICBsYXN0VXBkYXRlZDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLy8gXCJzcG9jc1wiOiB7dGl0bGU6IFwiXCIsIGNvbnRleHQ6IFwiXCIsIGl0ZW1zOiBbXSwgcGVyc29uYWxpemVkOiBmYWxzZX0sXG4gICAgICAgIC8vIFwicGxhY2VtZW50MVwiOiB7dGl0bGU6IFwiXCIsIGNvbnRleHQ6IFwiXCIsIGl0ZW1zOiBbXSwgcGVyc29uYWxpemVkOiBmYWxzZX0sXG4gICAgICB9LFxuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgIGZyZXF1ZW5jeV9jYXBzOiBbXSxcbiAgICAgIGJsb2NrZWQ6IFtdLFxuICAgICAgcGxhY2VtZW50czogW10sXG4gICAgfSxcbiAgICBleHBlcmltZW50RGF0YToge1xuICAgICAgdXRtU291cmNlOiBcInBvY2tldC1uZXd0YWJcIixcbiAgICAgIHV0bUNhbXBhaWduOiB1bmRlZmluZWQsXG4gICAgICB1dG1Db250ZW50OiB1bmRlZmluZWQsXG4gICAgfSxcbiAgICBpc1VzZXJMb2dnZWRJbjogZmFsc2UsXG4gICAgc2hvd1RvcGljU2VsZWN0aW9uOiBmYWxzZSxcbiAgICByZXBvcnQ6IHtcbiAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgfSxcbiAgICBzZWN0aW9uUGVyc29uYWxpemF0aW9uOiB7fSxcbiAgfSxcbiAgLy8gTWVzc2FnZXMgcmVjZWl2ZWQgZnJvbSBBU1JvdXRlciB0byByZW5kZXIgaW4gbmV3dGFiXG4gIE1lc3NhZ2VzOiB7XG4gICAgLy8gbWVzc2FnZXMgcmVjZWl2ZWQgZnJvbSBBU1JvdXRlciBhcmUgaW5pdGlhbGx5IHZpc2libGVcbiAgICBpc1Zpc2libGU6IHRydWUsXG4gICAgLy8gcG9ydElEIGZvciB0aGF0IHRhYiB0aGF0IHdhcyBzZW50IHRoZSBtZXNzYWdlXG4gICAgcG9ydElEOiBcIlwiLFxuICAgIC8vIFJFQURPTkxZIE1lc3NhZ2UgZGF0YSByZWNlaXZlZCBmcm9tIEFTUm91dGVyXG4gICAgbWVzc2FnZURhdGE6IHt9LFxuICB9LFxuICBOb3RpZmljYXRpb25zOiB7XG4gICAgc2hvd05vdGlmaWNhdGlvbnM6IGZhbHNlLFxuICAgIHRvYXN0Q291bnRlcjogMCxcbiAgICB0b2FzdElkOiBcIlwiLFxuICAgIC8vIFRoaXMgcXVldWUgaXMgcmVzZXQgZWFjaCB0aW1lIFNIT1dfVE9BU1RfTUVTU0FHRSBpcyByYW4uXG4gICAgLy8gRm9yIGNhbiBiZSBhIHF1ZXVlIGluIHRoZSBmdXR1cmUsIGJ1dCBmb3Igbm93IGlzIG9uZSBpdGVtXG4gICAgdG9hc3RRdWV1ZTogW10sXG4gIH0sXG4gIFBlcnNvbmFsaXphdGlvbjoge1xuICAgIGxhc3RVcGRhdGVkOiBudWxsLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgfSxcbiAgSW5mZXJyZWRQZXJzb25hbGl6YXRpb246IHtcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWQ6IG51bGwsXG4gICAgaW5mZXJyZWRJbnRyZXN0czoge30sXG4gICAgY29hcnNlSW5mZXJyZWRJbnRlcmVzdHM6IHt9LFxuICAgIGNvYXJzZVByaXZhdGVJbmZlcnJlZEludGVyZXN0czoge30sXG4gIH0sXG4gIFNlYXJjaDoge1xuICAgIC8vIFdoZW4gc2VhcmNoIGhhbmQtb2ZmIGlzIGVuYWJsZWQsIHdlIHJlbmRlciBhIGJpZyBidXR0b24gdGhhdCBpcyBzdHlsZWQgdG9cbiAgICAvLyBsb29rIGxpa2UgYSBzZWFyY2ggdGV4dGJveC4gSWYgdGhlIGJ1dHRvbiBpcyBjbGlja2VkLCB3ZSBzdHlsZVxuICAgIC8vIHRoZSBidXR0b24gYXMgaWYgaXQgd2FzIGEgZm9jdXNlZCBzZWFyY2ggYm94IGFuZCBzaG93IGEgZmFrZSBjdXJzb3IgYnV0XG4gICAgLy8gcmVhbGx5IGZvY3VzIHRoZSBhd2Vzb21lYmFyIHdpdGhvdXQgdGhlIGZvY3VzIHN0eWxlcyAoXCJoaWRkZW4gZm9jdXNcIikuXG4gICAgZmFrZUZvY3VzOiBmYWxzZSxcbiAgICAvLyBIaWRlIHRoZSBzZWFyY2ggYm94IGFmdGVyIGhhbmRpbmcgb2ZmIHRvIEF3ZXNvbWVCYXIgYW5kIHVzZXIgc3RhcnRzIHR5cGluZy5cbiAgICBoaWRlOiBmYWxzZSxcbiAgfSxcbiAgV2FsbHBhcGVyczoge1xuICAgIHdhbGxwYXBlckxpc3Q6IFtdLFxuICAgIGhpZ2hsaWdodFNlZW5Db3VudGVyOiAwLFxuICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgIHVwbG9hZGVkV2FsbHBhcGVyOiBcIlwiLFxuICB9LFxuICBXZWF0aGVyOiB7XG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGxhc3RVcGRhdGVkOiBudWxsLFxuICAgIHF1ZXJ5OiBcIlwiLFxuICAgIHN1Z2dlc3Rpb25zOiBbXSxcbiAgICBsb2NhdGlvbkRhdGE6IHtcbiAgICAgIGNpdHk6IFwiXCIsXG4gICAgICBhZG1pbkFyZWE6IFwiXCIsXG4gICAgICBjb3VudHJ5OiBcIlwiLFxuICAgIH0sXG4gICAgLy8gRGlzcGxheSBzZWFyY2ggaW5wdXQgaW4gV2VhdGhlciB3aWRnZXRcbiAgICBzZWFyY2hBY3RpdmU6IGZhbHNlLFxuICAgIGxvY2F0aW9uU2VhcmNoU3RyaW5nOiBcIlwiLFxuICAgIHN1Z2dlc3RlZExvY2F0aW9uczogW10sXG4gIH0sXG4gIFRyZW5kaW5nU2VhcmNoOiB7XG4gICAgc3VnZ2VzdGlvbnM6IFtdLFxuICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gIH0sXG4gIC8vIFdpZGdldHNcbiAgTGlzdHNXaWRnZXQ6IHtcbiAgICAvLyB2YWx1ZSBwb2ludGluZyB0byBsYXN0IHNlbGVjdGxlZCBsaXN0XG4gICAgc2VsZWN0ZWQ6IFwidGFza0xpc3RcIixcbiAgICAvLyBEZWZhdWx0IHN0YXRlIG9mIGFuIGVtcHR5IHRhc2sgbGlzdFxuICAgIGxpc3RzOiB7XG4gICAgICB0YXNrTGlzdDoge1xuICAgICAgICBsYWJlbDogXCJUYXNrIExpc3RcIixcbiAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICBjb21wbGV0ZWQ6IFtdLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBUaW1lcldpZGdldDoge1xuICAgIC8vIFRoZSB0aW1lciB3aWxsIGhhdmUgMiB0eXBlcyBvZiBzdGF0ZXMsIGZvY3VzIGFuZCBicmVhay5cbiAgICAvLyBGb2N1cyB3aWxsIHRoZSBkZWZhdWx0IHN0YXRlXG4gICAgdGltZXJUeXBlOiBcImZvY3VzXCIsXG4gICAgZm9jdXM6IHtcbiAgICAgIC8vIFRpbWVyIGR1cmF0aW9uIHNldCBieSB1c2VyOyAyNSBtaW5zIGJ5IGRlZmF1bHRcbiAgICAgIGR1cmF0aW9uOiAyNSAqIDYwLFxuICAgICAgLy8gSW5pdGlhbCBkdXJhdGlvbiAtIGFsc28gc2V0IGJ5IHRoZSB1c2VyOyBkb2VzIG5vdCB1cGRhdGUgdW50aWwgdGltZXIgZW5kcyBvciB1c2VyIHJlc2V0cyB0aW1lclxuICAgICAgaW5pdGlhbER1cmF0aW9uOiAyNSAqIDYwLFxuICAgICAgLy8gdGhlIERhdGUubm93KCkgdmFsdWUgd2hlbiBhIHVzZXIgc3RhcnRzL3Jlc3VtZXMgYSB0aW1lclxuICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgLy8gQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHRpbWVyIGlzIGN1cnJlbnRseSBydW5uaW5nXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgIH0sXG4gICAgYnJlYWs6IHtcbiAgICAgIGR1cmF0aW9uOiA1ICogNjAsXG4gICAgICBpbml0aWFsRHVyYXRpb246IDUgKiA2MCxcbiAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn07XG5cbmZ1bmN0aW9uIEFwcChwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkFwcCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LklOSVQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCBhY3Rpb24uZGF0YSB8fCB7fSwge1xuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuVE9QX1NJVEVTX1VQREFURUQ6XG4gICAgICAvLyBUb2dnbGUgYGlzRm9yU3RhcnR1cENhY2hlLlRvcFNpdGVzYCB3aGVuIHJlY2VpdmluZyB0aGUgYFRPUF9TSVRFU19VUERBVEVgIGFjdGlvblxuICAgICAgLy8gc28gdGhhdCBzcG9uc29yZWQgdGlsZXMgY2FuIGJlIHJlbmRlcmVkIGFzIHVzdWFsLiBTZWUgQnVnIDE4MjYzNjAuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzRm9yU3RhcnR1cENhY2hlOiB7IC4uLnByZXZTdGF0ZS5pc0ZvclN0YXJ0dXBDYWNoZSwgVG9wU2l0ZXM6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9TUE9DU19VUERBVEU6XG4gICAgICAvLyBUb2dnbGUgYGlzRm9yU3RhcnR1cENhY2hlLkRpc2NvdmVyeVN0cmVhbWAgd2hlbiByZWNlaXZpbmcgdGhlIGBESVNDT1ZFUllfU1RSRUFNX1NQT0NTX1VQREFURWAgYWN0aW9uXG4gICAgICAvLyBzbyB0aGF0IHNwb2MgY2FyZHMgY2FuIGJlIHJlbmRlcmVkIGFzIHVzdWFsLlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc0ZvclN0YXJ0dXBDYWNoZToge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5pc0ZvclN0YXJ0dXBDYWNoZSxcbiAgICAgICAgICBEaXNjb3ZlcnlTdHJlYW06IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldFQVRIRVJfVVBEQVRFOlxuICAgICAgLy8gVG9nZ2xlIGBpc0ZvclN0YXJ0dXBDYWNoZS5XZWF0aGVyYCB3aGVuIHJlY2VpdmluZyB0aGUgYFdFQVRIRVJfVVBEQVRFYCBhY3Rpb25cbiAgICAgIC8vIHNvIHRoYXQgd2VhdGhlciBjYW4gYmUgcmVuZGVyZWQgYXMgdXN1YWwuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGlzRm9yU3RhcnR1cENhY2hlOiB7IC4uLnByZXZTdGF0ZS5pc0ZvclN0YXJ0dXBDYWNoZSwgV2VhdGhlcjogZmFsc2UgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5XQUxMUEFQRVJTX0NVU1RPTV9TRVQ6XG4gICAgICAvLyBUb2dnbGUgYGlzRm9yU3RhcnR1cENhY2hlLldhbGxwYXBlcmAgd2hlbiByZWNlaXZpbmcgdGhlIGBXQUxMUEFQRVJTX0NVU1RPTV9TRVRgIGFjdGlvblxuICAgICAgLy8gc28gdGhhdCBjdXN0b20gd2FsbHBhcGVyIGNhbiBiZSByZW5kZXJlZCBhcyB1c3VhbC5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaXNGb3JTdGFydHVwQ2FjaGU6IHsgLi4ucHJldlN0YXRlLmlzRm9yU3RhcnR1cENhY2hlLCBXYWxscGFwZXI6IGZhbHNlIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuU0hPV19QRVJTT05BTElaRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgY3VzdG9taXplTWVudVZpc2libGU6IHRydWUsXG4gICAgICB9KTtcbiAgICBjYXNlIGF0LkhJREVfUEVSU09OQUxJWkU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGN1c3RvbWl6ZU1lbnVWaXNpYmxlOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRvcFNpdGVzKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuVG9wU2l0ZXMsIGFjdGlvbikge1xuICBsZXQgaGFzTWF0Y2g7XG4gIGxldCBuZXdSb3dzO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5UT1BfU0lURVNfVVBEQVRFRDpcbiAgICAgIGlmICghYWN0aW9uLmRhdGEgfHwgIWFjdGlvbi5kYXRhLmxpbmtzKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHByZXZTdGF0ZSxcbiAgICAgICAgeyBpbml0aWFsaXplZDogdHJ1ZSwgcm93czogYWN0aW9uLmRhdGEubGlua3MgfSxcbiAgICAgICAgYWN0aW9uLmRhdGEucHJlZiA/IHsgcHJlZjogYWN0aW9uLmRhdGEucHJlZiB9IDoge31cbiAgICAgICk7XG4gICAgY2FzZSBhdC5UT1BfU0lURVNfUFJFRlNfVVBEQVRFRDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgcHJlZjogYWN0aW9uLmRhdGEucHJlZiB9KTtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19FRElUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBlZGl0Rm9ybToge1xuICAgICAgICAgIGluZGV4OiBhY3Rpb24uZGF0YS5pbmRleCxcbiAgICAgICAgICBwcmV2aWV3UmVzcG9uc2U6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19DQU5DRUxfRURJVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgZWRpdEZvcm06IG51bGwgfSk7XG4gICAgY2FzZSBhdC5UT1BfU0lURVNfT1BFTl9TRUFSQ0hfU0hPUlRDVVRTX01PREFMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyBzaG93U2VhcmNoU2hvcnRjdXRzRm9ybTogdHJ1ZSB9KTtcbiAgICBjYXNlIGF0LlRPUF9TSVRFU19DTE9TRV9TRUFSQ0hfU0hPUlRDVVRTX01PREFMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyBzaG93U2VhcmNoU2hvcnRjdXRzRm9ybTogZmFsc2UgfSk7XG4gICAgY2FzZSBhdC5QUkVWSUVXX1JFU1BPTlNFOlxuICAgICAgaWYgKFxuICAgICAgICAhcHJldlN0YXRlLmVkaXRGb3JtIHx8XG4gICAgICAgIGFjdGlvbi5kYXRhLnVybCAhPT0gcHJldlN0YXRlLmVkaXRGb3JtLnByZXZpZXdVcmxcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBlZGl0Rm9ybToge1xuICAgICAgICAgIGluZGV4OiBwcmV2U3RhdGUuZWRpdEZvcm0uaW5kZXgsXG4gICAgICAgICAgcHJldmlld1Jlc3BvbnNlOiBhY3Rpb24uZGF0YS5wcmV2aWV3LFxuICAgICAgICAgIHByZXZpZXdVcmw6IGFjdGlvbi5kYXRhLnVybCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuUFJFVklFV19SRVFVRVNUOlxuICAgICAgaWYgKCFwcmV2U3RhdGUuZWRpdEZvcm0pIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHtcbiAgICAgICAgZWRpdEZvcm06IHtcbiAgICAgICAgICBpbmRleDogcHJldlN0YXRlLmVkaXRGb3JtLmluZGV4LFxuICAgICAgICAgIHByZXZpZXdSZXNwb25zZTogbnVsbCxcbiAgICAgICAgICBwcmV2aWV3VXJsOiBhY3Rpb24uZGF0YS51cmwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICBjYXNlIGF0LlBSRVZJRVdfUkVRVUVTVF9DQU5DRUw6XG4gICAgICBpZiAoIXByZXZTdGF0ZS5lZGl0Rm9ybSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBlZGl0Rm9ybToge1xuICAgICAgICAgIGluZGV4OiBwcmV2U3RhdGUuZWRpdEZvcm0uaW5kZXgsXG4gICAgICAgICAgcHJldmlld1Jlc3BvbnNlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgY2FzZSBhdC5TQ1JFRU5TSE9UX1VQREFURUQ6XG4gICAgICBuZXdSb3dzID0gcHJldlN0YXRlLnJvd3MubWFwKHJvdyA9PiB7XG4gICAgICAgIGlmIChyb3cgJiYgcm93LnVybCA9PT0gYWN0aW9uLmRhdGEudXJsKSB7XG4gICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByb3csIHsgc2NyZWVuc2hvdDogYWN0aW9uLmRhdGEuc2NyZWVuc2hvdCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaGFzTWF0Y2hcbiAgICAgICAgPyBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgcm93czogbmV3Um93cyB9KVxuICAgICAgICA6IHByZXZTdGF0ZTtcbiAgICBjYXNlIGF0LlBMQUNFU19CT09LTUFSS19BRERFRDpcbiAgICAgIGlmICghYWN0aW9uLmRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICAgIH1cbiAgICAgIG5ld1Jvd3MgPSBwcmV2U3RhdGUucm93cy5tYXAoc2l0ZSA9PiB7XG4gICAgICAgIGlmIChzaXRlICYmIHNpdGUudXJsID09PSBhY3Rpb24uZGF0YS51cmwpIHtcbiAgICAgICAgICBjb25zdCB7IGJvb2ttYXJrR3VpZCwgYm9va21hcmtUaXRsZSwgZGF0ZUFkZGVkIH0gPSBhY3Rpb24uZGF0YTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2l0ZSwge1xuICAgICAgICAgICAgYm9va21hcmtHdWlkLFxuICAgICAgICAgICAgYm9va21hcmtUaXRsZSxcbiAgICAgICAgICAgIGJvb2ttYXJrRGF0ZUNyZWF0ZWQ6IGRhdGVBZGRlZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l0ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyByb3dzOiBuZXdSb3dzIH0pO1xuICAgIGNhc2UgYXQuUExBQ0VTX0JPT0tNQVJLU19SRU1PVkVEOlxuICAgICAgaWYgKCFhY3Rpb24uZGF0YSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgbmV3Um93cyA9IHByZXZTdGF0ZS5yb3dzLm1hcChzaXRlID0+IHtcbiAgICAgICAgaWYgKHNpdGUgJiYgYWN0aW9uLmRhdGEudXJscy5pbmNsdWRlcyhzaXRlLnVybCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdTaXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc2l0ZSk7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtHdWlkO1xuICAgICAgICAgIGRlbGV0ZSBuZXdTaXRlLmJvb2ttYXJrVGl0bGU7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtEYXRlQ3JlYXRlZDtcbiAgICAgICAgICByZXR1cm4gbmV3U2l0ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2l0ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyByb3dzOiBuZXdSb3dzIH0pO1xuICAgIGNhc2UgYXQuUExBQ0VTX0xJTktTX0RFTEVURUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICBuZXdSb3dzID0gcHJldlN0YXRlLnJvd3MuZmlsdGVyKFxuICAgICAgICBzaXRlID0+ICFhY3Rpb24uZGF0YS51cmxzLmluY2x1ZGVzKHNpdGUudXJsKVxuICAgICAgKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgcm93czogbmV3Um93cyB9KTtcbiAgICBjYXNlIGF0LlVQREFURV9TRUFSQ0hfU0hPUlRDVVRTOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBzZWFyY2hTaG9ydGN1dHM6IGFjdGlvbi5kYXRhLnNlYXJjaFNob3J0Y3V0cyB9O1xuICAgIGNhc2UgYXQuU09WX1VQREFURUQ6IHtcbiAgICAgIGNvbnN0IHNvdiA9IHtcbiAgICAgICAgcmVhZHk6IGFjdGlvbi5kYXRhLnJlYWR5LFxuICAgICAgICBwb3NpdGlvbnM6IGFjdGlvbi5kYXRhLnBvc2l0aW9ucyxcbiAgICAgIH07XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHNvdiB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBEaWFsb2cocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5EaWFsb2csIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5ESUFMT0dfT1BFTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgdmlzaWJsZTogdHJ1ZSwgZGF0YTogYWN0aW9uLmRhdGEgfSk7XG4gICAgY2FzZSBhdC5ESUFMT0dfQ0FOQ0VMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwgeyB2aXNpYmxlOiBmYWxzZSB9KTtcbiAgICBjYXNlIGF0LkRJQUxPR19DTE9TRTpcbiAgICAgIC8vIFJlc2V0IGFuZCBoaWRlIHRoZSBjb25maXJtYXRpb24gZGlhbG9nIG9uY2UgdGhlIGFjdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBJTklUSUFMX1NUQVRFLkRpYWxvZyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gUHJlZnMocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5QcmVmcywgYWN0aW9uKSB7XG4gIGxldCBuZXdWYWx1ZXM7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LlBSRUZTX0lOSVRJQUxfVkFMVUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgdmFsdWVzOiBhY3Rpb24uZGF0YSxcbiAgICAgIH0pO1xuICAgIGNhc2UgYXQuUFJFRl9DSEFOR0VEOlxuICAgICAgbmV3VmFsdWVzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJldlN0YXRlLnZhbHVlcyk7XG4gICAgICBuZXdWYWx1ZXNbYWN0aW9uLmRhdGEubmFtZV0gPSBhY3Rpb24uZGF0YS52YWx1ZTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcmV2U3RhdGUsIHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gU2VjdGlvbnMocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5TZWN0aW9ucywgYWN0aW9uKSB7XG4gIGxldCBoYXNNYXRjaDtcbiAgbGV0IG5ld1N0YXRlO1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5TRUNUSU9OX0RFUkVHSVNURVI6XG4gICAgICByZXR1cm4gcHJldlN0YXRlLmZpbHRlcihzZWN0aW9uID0+IHNlY3Rpb24uaWQgIT09IGFjdGlvbi5kYXRhKTtcbiAgICBjYXNlIGF0LlNFQ1RJT05fUkVHSVNURVI6XG4gICAgICAvLyBJZiBzZWN0aW9uIGV4aXN0cyBpbiBwcmV2U3RhdGUsIHVwZGF0ZSBpdFxuICAgICAgbmV3U3RhdGUgPSBwcmV2U3RhdGUubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICBpZiAoc2VjdGlvbiAmJiBzZWN0aW9uLmlkID09PSBhY3Rpb24uZGF0YS5pZCkge1xuICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfSk7XG4gICAgICAvLyBPdGhlcndpc2UsIGFwcGVuZCBpdFxuICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9ICEhKGFjdGlvbi5kYXRhLnJvd3MgJiYgISFhY3Rpb24uZGF0YS5yb3dzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgIHsgdGl0bGU6IFwiXCIsIHJvd3M6IFtdLCBlbmFibGVkOiBmYWxzZSB9LFxuICAgICAgICAgIGFjdGlvbi5kYXRhLFxuICAgICAgICAgIHsgaW5pdGlhbGl6ZWQgfVxuICAgICAgICApO1xuICAgICAgICBuZXdTdGF0ZS5wdXNoKHNlY3Rpb24pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgIGNhc2UgYXQuU0VDVElPTl9VUERBVEU6XG4gICAgICBuZXdTdGF0ZSA9IHByZXZTdGF0ZS5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgIGlmIChzZWN0aW9uICYmIHNlY3Rpb24uaWQgPT09IGFjdGlvbi5kYXRhLmlkKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGFjdGlvbiBpcyB1cGRhdGluZyByb3dzLCB3ZSBzaG91bGQgY29uc2lkZXIgaW5pdGlhbGl6ZWQgdG8gYmUgdHJ1ZS5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBiZSBvdmVycmlkZGVuIGlmIGluaXRpYWxpemVkIGlzIGRlZmluZWQgaW4gdGhlIGFjdGlvbi5kYXRhXG4gICAgICAgICAgY29uc3QgaW5pdGlhbGl6ZWQgPSBhY3Rpb24uZGF0YS5yb3dzID8geyBpbml0aWFsaXplZDogdHJ1ZSB9IDoge307XG5cbiAgICAgICAgICAvLyBNYWtlIHN1cmUgcGlubmVkIGNhcmRzIHN0YXkgYXQgdGhlaXIgY3VycmVudCBwb3NpdGlvbiB3aGVuIHJvd3MgYXJlIHVwZGF0ZWQuXG4gICAgICAgICAgLy8gRGlzYWJsaW5nIGEgc2VjdGlvbiAoU0VDVElPTl9VUERBVEUgd2l0aCBlbXB0eSByb3dzKSBkb2VzIG5vdCByZXRhaW4gcGlubmVkIGNhcmRzLlxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFjdGlvbi5kYXRhLnJvd3MgJiZcbiAgICAgICAgICAgICEhYWN0aW9uLmRhdGEucm93cy5sZW5ndGggJiZcbiAgICAgICAgICAgIHNlY3Rpb24ucm93cy5maW5kKGNhcmQgPT4gY2FyZC5waW5uZWQpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gQXJyYXkuZnJvbShhY3Rpb24uZGF0YS5yb3dzKTtcbiAgICAgICAgICAgIHNlY3Rpb24ucm93cy5mb3JFYWNoKChjYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2FyZC5waW5uZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCBpdCBpZiBpdCdzIG5vdCBhbHJlYWR5IHRoZXJlLlxuICAgICAgICAgICAgICAgIGlmIChyb3dzW2luZGV4XS5ndWlkICE9PSBjYXJkLmd1aWQpIHtcbiAgICAgICAgICAgICAgICAgIHJvd3Muc3BsaWNlKGluZGV4LCAwLCBjYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBzZWN0aW9uLFxuICAgICAgICAgICAgICBpbml0aWFsaXplZCxcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLmRhdGEsIHsgcm93cyB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwgaW5pdGlhbGl6ZWQsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWFjdGlvbi5kYXRhLmRlZHVwZUNvbmZpZ3VyYXRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cblxuICAgICAgYWN0aW9uLmRhdGEuZGVkdXBlQ29uZmlndXJhdGlvbnMuZm9yRWFjaChkZWR1cGVDb25mID0+IHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZS5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgaWYgKHNlY3Rpb24uaWQgPT09IGRlZHVwZUNvbmYuaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZHVwZWRSb3dzID0gZGVkdXBlQ29uZi5kZWR1cGVGcm9tLnJlZHVjZShcbiAgICAgICAgICAgICAgKHJvd3MsIGRlZHVwZVNlY3Rpb25JZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZHVwZVNlY3Rpb24gPSBuZXdTdGF0ZS5maW5kKFxuICAgICAgICAgICAgICAgICAgcyA9PiBzLmlkID09PSBkZWR1cGVTZWN0aW9uSWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIG5ld1Jvd3NdID0gZGVkdXBlLmdyb3VwKGRlZHVwZVNlY3Rpb24ucm93cywgcm93cyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Jvd3M7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNlY3Rpb24ucm93c1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNlY3Rpb24sIHsgcm93czogZGVkdXBlZFJvd3MgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICBjYXNlIGF0LlNFQ1RJT05fVVBEQVRFX0NBUkQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKHNlY3Rpb24gJiYgc2VjdGlvbi5pZCA9PT0gYWN0aW9uLmRhdGEuaWQgJiYgc2VjdGlvbi5yb3dzKSB7XG4gICAgICAgICAgY29uc3QgbmV3Um93cyA9IHNlY3Rpb24ucm93cy5tYXAoY2FyZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2FyZC51cmwgPT09IGFjdGlvbi5kYXRhLnVybCkge1xuICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY2FyZCwgYWN0aW9uLmRhdGEub3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2VjdGlvbiwgeyByb3dzOiBuZXdSb3dzIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgICAgfSk7XG4gICAgY2FzZSBhdC5QTEFDRVNfQk9PS01BUktfQURERUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlY3Rpb24sIHtcbiAgICAgICAgICByb3dzOiBzZWN0aW9uLnJvd3MubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gZmluZCB0aGUgaXRlbSB3aXRoaW4gdGhlIHJvd3MgdGhhdCBpcyBhdHRlbXB0ZWQgdG8gYmUgYm9va21hcmtlZFxuICAgICAgICAgICAgaWYgKGl0ZW0udXJsID09PSBhY3Rpb24uZGF0YS51cmwpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyBib29rbWFya0d1aWQsIGJvb2ttYXJrVGl0bGUsIGRhdGVBZGRlZCB9ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgICAgYm9va21hcmtHdWlkLFxuICAgICAgICAgICAgICAgIGJvb2ttYXJrVGl0bGUsXG4gICAgICAgICAgICAgICAgYm9va21hcmtEYXRlQ3JlYXRlZDogZGF0ZUFkZGVkLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiYm9va21hcmtcIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgY2FzZSBhdC5QTEFDRVNfQk9PS01BUktTX1JFTU9WRUQ6XG4gICAgICBpZiAoIWFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldlN0YXRlLm1hcChzZWN0aW9uID0+XG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHNlY3Rpb24sIHtcbiAgICAgICAgICByb3dzOiBzZWN0aW9uLnJvd3MubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gZmluZCB0aGUgYm9va21hcmsgd2l0aGluIHRoZSByb3dzIHRoYXQgaXMgYXR0ZW1wdGVkIHRvIGJlIHJlbW92ZWRcbiAgICAgICAgICAgIGlmIChhY3Rpb24uZGF0YS51cmxzLmluY2x1ZGVzKGl0ZW0udXJsKSkge1xuICAgICAgICAgICAgICBjb25zdCBuZXdTaXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgICAgIGRlbGV0ZSBuZXdTaXRlLmJvb2ttYXJrR3VpZDtcbiAgICAgICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtUaXRsZTtcbiAgICAgICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtEYXRlQ3JlYXRlZDtcbiAgICAgICAgICAgICAgaWYgKCFuZXdTaXRlLnR5cGUgfHwgbmV3U2l0ZS50eXBlID09PSBcImJvb2ttYXJrXCIpIHtcbiAgICAgICAgICAgICAgICBuZXdTaXRlLnR5cGUgPSBcImhpc3RvcnlcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3U2l0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBjYXNlIGF0LlBMQUNFU19MSU5LU19ERUxFVEVEOlxuICAgICAgaWYgKCFhY3Rpb24uZGF0YSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZTdGF0ZS5tYXAoc2VjdGlvbiA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBzZWN0aW9uLCB7XG4gICAgICAgICAgcm93czogc2VjdGlvbi5yb3dzLmZpbHRlcihcbiAgICAgICAgICAgIHNpdGUgPT4gIWFjdGlvbi5kYXRhLnVybHMuaW5jbHVkZXMoc2l0ZS51cmwpXG4gICAgICAgICAgKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgY2FzZSBhdC5QTEFDRVNfTElOS19CTE9DS0VEOlxuICAgICAgaWYgKCFhY3Rpb24uZGF0YSkge1xuICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZTdGF0ZS5tYXAoc2VjdGlvbiA9PlxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBzZWN0aW9uLCB7XG4gICAgICAgICAgcm93czogc2VjdGlvbi5yb3dzLmZpbHRlcihzaXRlID0+IHNpdGUudXJsICE9PSBhY3Rpb24uZGF0YS51cmwpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBNZXNzYWdlcyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLk1lc3NhZ2VzLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuTUVTU0FHRV9TRVQ6XG4gICAgICBpZiAocHJldlN0YXRlLm1lc3NhZ2VEYXRhLm1lc3NhZ2VUeXBlKSB7XG4gICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIG1lc3NhZ2VEYXRhOiBhY3Rpb24uZGF0YS5tZXNzYWdlLFxuICAgICAgICBwb3J0SUQ6IGFjdGlvbi5kYXRhLnBvcnRJRCB8fCBcIlwiLFxuICAgICAgfTtcbiAgICBjYXNlIGF0Lk1FU1NBR0VfVE9HR0xFX1ZJU0lCSUxJVFk6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGlzVmlzaWJsZTogYWN0aW9uLmRhdGEgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBQb2NrZXQocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5Qb2NrZXQsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5QT0NLRVRfV0FJVElOR19GT1JfU1BPQzpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgd2FpdGluZ0ZvclNwb2M6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5QT0NLRVRfTE9HR0VEX0lOOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBpc1VzZXJMb2dnZWRJbjogISFhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgYXQuUE9DS0VUX0NUQTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgcG9ja2V0Q3RhOiB7XG4gICAgICAgICAgY3RhQnV0dG9uOiBhY3Rpb24uZGF0YS5jdGFfYnV0dG9uLFxuICAgICAgICAgIGN0YVRleHQ6IGFjdGlvbi5kYXRhLmN0YV90ZXh0LFxuICAgICAgICAgIGN0YVVybDogYWN0aW9uLmRhdGEuY3RhX3VybCxcbiAgICAgICAgICB1c2VDdGE6IGFjdGlvbi5kYXRhLnVzZV9jdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFBlcnNvbmFsaXphdGlvbihwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLlBlcnNvbmFsaXphdGlvbiwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX0xBU1RfVVBEQVRFRDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgbGFzdFVwZGF0ZWQ6IGFjdGlvbi5kYXRhLmxhc3RVcGRhdGVkLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX0lOSVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGluaXRpYWxpemVkOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fUEVSU09OQUxJWkFUSU9OX1JFU0VUOlxuICAgICAgcmV0dXJuIHsgLi4uSU5JVElBTF9TVEFURS5QZXJzb25hbGl6YXRpb24gfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBJbmZlcnJlZFBlcnNvbmFsaXphdGlvbihcbiAgcHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5JbmZlcnJlZFBlcnNvbmFsaXphdGlvbixcbiAgYWN0aW9uXG4pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1VQREFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IHRydWUsXG4gICAgICAgIGluZmVycmVkSW50ZXJlc3RzOiBhY3Rpb24uZGF0YS5pbmZlcnJlZEludGVyZXN0cyxcbiAgICAgICAgY29hcnNlSW5mZXJyZWRJbnRlcmVzdHM6IGFjdGlvbi5kYXRhLmNvYXJzZUluZmVycmVkSW50ZXJlc3RzLFxuICAgICAgICBjb2Fyc2VQcml2YXRlSW5mZXJyZWRJbnRlcmVzdHM6XG4gICAgICAgICAgYWN0aW9uLmRhdGEuY29hcnNlUHJpdmF0ZUluZmVycmVkSW50ZXJlc3RzLFxuICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLmRhdGEubGFzdFVwZGF0ZWQsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuSU5GRVJSRURfUEVSU09OQUxJWkFUSU9OX1JFU0VUOlxuICAgICAgcmV0dXJuIHsgLi4uSU5JVElBTF9TVEFURS5JbmZlcnJlZFBlcnNvbmFsaXphdGlvbiB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBEaXNjb3ZlcnlTdHJlYW0ocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5EaXNjb3ZlcnlTdHJlYW0sIGFjdGlvbikge1xuICAvLyBSZXR1cm4gaWYgYWN0aW9uIGRhdGEgaXMgZW1wdHksIG9yIHNwb2NzIG9yIGZlZWRzIGRhdGEgaXMgbm90IGxvYWRlZFxuICBjb25zdCBpc05vdFJlYWR5ID0gKCkgPT5cbiAgICAhYWN0aW9uLmRhdGEgfHwgIXByZXZTdGF0ZS5zcG9jcy5sb2FkZWQgfHwgIXByZXZTdGF0ZS5mZWVkcy5sb2FkZWQ7XG5cbiAgY29uc3QgaGFuZGxlUGxhY2VtZW50cyA9IGhhbmRsZVNpdGVzID0+IHtcbiAgICBjb25zdCB7IGRhdGEsIHBsYWNlbWVudHMgfSA9IHByZXZTdGF0ZS5zcG9jcztcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcblxuICAgIGNvbnN0IGZvclBsYWNlbWVudCA9IHBsYWNlbWVudCA9PiB7XG4gICAgICBjb25zdCBwbGFjZW1lbnRTcG9jcyA9IGRhdGFbcGxhY2VtZW50Lm5hbWVdO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFwbGFjZW1lbnRTcG9jcyB8fFxuICAgICAgICAhcGxhY2VtZW50U3BvY3MuaXRlbXMgfHxcbiAgICAgICAgIXBsYWNlbWVudFNwb2NzLml0ZW1zLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzdWx0W3BsYWNlbWVudC5uYW1lXSA9IHtcbiAgICAgICAgLi4ucGxhY2VtZW50U3BvY3MsXG4gICAgICAgIGl0ZW1zOiBoYW5kbGVTaXRlcyhwbGFjZW1lbnRTcG9jcy5pdGVtcyksXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBpZiAoIXBsYWNlbWVudHMgfHwgIXBsYWNlbWVudHMubGVuZ3RoKSB7XG4gICAgICBbeyBuYW1lOiBcInNwb2NzXCIgfV0uZm9yRWFjaChmb3JQbGFjZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwbGFjZW1lbnRzLmZvckVhY2goZm9yUGxhY2VtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBuZXh0U3RhdGUgPSBoYW5kbGVTaXRlcyA9PiAoe1xuICAgIC4uLnByZXZTdGF0ZSxcbiAgICBzcG9jczoge1xuICAgICAgLi4ucHJldlN0YXRlLnNwb2NzLFxuICAgICAgZGF0YTogaGFuZGxlUGxhY2VtZW50cyhoYW5kbGVTaXRlcyksXG4gICAgfSxcbiAgICBmZWVkczoge1xuICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLFxuICAgICAgZGF0YTogT2JqZWN0LmtleXMocHJldlN0YXRlLmZlZWRzLmRhdGEpLnJlZHVjZShcbiAgICAgICAgKGFjY3VtdWxhdG9yLCBmZWVkX3VybCkgPT4ge1xuICAgICAgICAgIGFjY3VtdWxhdG9yW2ZlZWRfdXJsXSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLmRhdGFbZmVlZF91cmxdLmRhdGEsXG4gICAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uczogaGFuZGxlU2l0ZXMoXG4gICAgICAgICAgICAgICAgcHJldlN0YXRlLmZlZWRzLmRhdGFbZmVlZF91cmxdLmRhdGEucmVjb21tZW5kYXRpb25zXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9LFxuICAgICAgICB7fVxuICAgICAgKSxcbiAgICB9LFxuICB9KTtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19DSEFOR0U6XG4gICAgLy8gRmFsbCB0aHJvdWdoIHRvIGEgc2VwYXJhdGUgYWN0aW9uIGlzIHNvIGl0IGRvZXNuJ3QgdHJpZ2dlciBhIGxpc3RlbmVyIHVwZGF0ZSBvbiBpbml0XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19TRVRVUDpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgY29uZmlnOiBhY3Rpb24uZGF0YSB8fCB7fSB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9FWFBFUklNRU5UX0RBVEE6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGV4cGVyaW1lbnREYXRhOiBhY3Rpb24uZGF0YSB8fCB7fSB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9MQVlPVVRfVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBsYXlvdXQ6IGFjdGlvbi5kYXRhLmxheW91dCB8fCBbXSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1RPUElDU19MT0FESU5HOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB0b3BpY3NMb2FkaW5nOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1BSRUZTX1NFVFVQOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBwb2NrZXRCdXR0b25FbmFibGVkOiBhY3Rpb24uZGF0YS5wb2NrZXRCdXR0b25FbmFibGVkLFxuICAgICAgICBoaWRlRGVzY3JpcHRpb25zOiBhY3Rpb24uZGF0YS5oaWRlRGVzY3JpcHRpb25zLFxuICAgICAgICBjb21wYWN0SW1hZ2VzOiBhY3Rpb24uZGF0YS5jb21wYWN0SW1hZ2VzLFxuICAgICAgICBpbWFnZUdyYWRpZW50OiBhY3Rpb24uZGF0YS5pbWFnZUdyYWRpZW50LFxuICAgICAgICBuZXdTcG9uc29yZWRMYWJlbDogYWN0aW9uLmRhdGEubmV3U3BvbnNvcmVkTGFiZWwsXG4gICAgICAgIHRpdGxlTGluZXM6IGFjdGlvbi5kYXRhLnRpdGxlTGluZXMsXG4gICAgICAgIGRlc2NMaW5lczogYWN0aW9uLmRhdGEuZGVzY0xpbmVzLFxuICAgICAgICByZWFkVGltZTogYWN0aW9uLmRhdGEucmVhZFRpbWUsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9QT0NLRVRfU1RBVEVfU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpc1VzZXJMb2dnZWRJbjogYWN0aW9uLmRhdGEuaXNVc2VyTG9nZ2VkSW4sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuU0hPV19QUklWQUNZX0lORk86XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9MQVlPVVRfUkVTRVQ6XG4gICAgICByZXR1cm4geyAuLi5JTklUSUFMX1NUQVRFLkRpc2NvdmVyeVN0cmVhbSwgY29uZmlnOiBwcmV2U3RhdGUuY29uZmlnIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0ZFRURTX1VQREFURTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgZmVlZHM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuZmVlZHMsXG4gICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fRkVFRF9VUERBVEU6IHtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcbiAgICAgIG5ld0RhdGFbYWN0aW9uLmRhdGEudXJsXSA9IGFjdGlvbi5kYXRhLmZlZWQ7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGZlZWRzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLmZlZWRzLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZS5mZWVkcy5kYXRhLFxuICAgICAgICAgICAgLi4ubmV3RGF0YSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX0RFVl9JTVBSRVNTSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgaW1wcmVzc2lvbnM6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuaW1wcmVzc2lvbnMsXG4gICAgICAgICAgZmVlZDogYWN0aW9uLmRhdGEsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9ERVZfQkxPQ0tTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBibG9ja3M6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfQ0FQUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc3BvY3M6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuc3BvY3MsXG4gICAgICAgICAgZnJlcXVlbmN5X2NhcHM6IFsuLi5wcmV2U3RhdGUuc3BvY3MuZnJlcXVlbmN5X2NhcHMsIC4uLmFjdGlvbi5kYXRhXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1NQT0NTX0VORFBPSU5UOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzcG9jczoge1xuICAgICAgICAgIC4uLklOSVRJQUxfU1RBVEUuRGlzY292ZXJ5U3RyZWFtLnNwb2NzLFxuICAgICAgICAgIHNwb2NzX2VuZHBvaW50OlxuICAgICAgICAgICAgYWN0aW9uLmRhdGEudXJsIHx8XG4gICAgICAgICAgICBJTklUSUFMX1NUQVRFLkRpc2NvdmVyeVN0cmVhbS5zcG9jcy5zcG9jc19lbmRwb2ludCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5ESVNDT1ZFUllfU1RSRUFNX1NQT0NTX1BMQUNFTUVOVFM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNwb2NzOiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnNwb2NzLFxuICAgICAgICAgIHBsYWNlbWVudHM6XG4gICAgICAgICAgICBhY3Rpb24uZGF0YS5wbGFjZW1lbnRzIHx8XG4gICAgICAgICAgICBJTklUSUFMX1NUQVRFLkRpc2NvdmVyeVN0cmVhbS5zcG9jcy5wbGFjZW1lbnRzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fU1BPQ1NfVVBEQVRFOlxuICAgICAgaWYgKGFjdGlvbi5kYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICAgIHNwb2NzOiB7XG4gICAgICAgICAgICAuLi5wcmV2U3RhdGUuc3BvY3MsXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogYWN0aW9uLmRhdGEubGFzdFVwZGF0ZWQsXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YS5zcG9jcyxcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICBjYXNlIGF0LkRJU0NPVkVSWV9TVFJFQU1fU1BPQ19CTE9DS0VEOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzcG9jczoge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZS5zcG9jcyxcbiAgICAgICAgICBibG9ja2VkOiBbLi4ucHJldlN0YXRlLnNwb2NzLmJsb2NrZWQsIGFjdGlvbi5kYXRhLnVybF0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuRElTQ09WRVJZX1NUUkVBTV9MSU5LX0JMT0NLRUQ6XG4gICAgICByZXR1cm4gaXNOb3RSZWFkeSgpXG4gICAgICAgID8gcHJldlN0YXRlXG4gICAgICAgIDogbmV4dFN0YXRlKGl0ZW1zID0+XG4gICAgICAgICAgICBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnVybCAhPT0gYWN0aW9uLmRhdGEudXJsKVxuICAgICAgICAgICk7XG5cbiAgICBjYXNlIGF0LlBMQUNFU19CT09LTUFSS19BRERFRDoge1xuICAgICAgY29uc3QgdXBkYXRlQm9va21hcmtJbmZvID0gaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnVybCA9PT0gYWN0aW9uLmRhdGEudXJsKSB7XG4gICAgICAgICAgY29uc3QgeyBib29rbWFya0d1aWQsIGJvb2ttYXJrVGl0bGUsIGRhdGVBZGRlZCB9ID0gYWN0aW9uLmRhdGE7XG4gICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGl0ZW0sIHtcbiAgICAgICAgICAgIGJvb2ttYXJrR3VpZCxcbiAgICAgICAgICAgIGJvb2ttYXJrVGl0bGUsXG4gICAgICAgICAgICBib29rbWFya0RhdGVDcmVhdGVkOiBkYXRlQWRkZWQsXG4gICAgICAgICAgICBjb250ZXh0X3R5cGU6IFwiYm9va21hcmtcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gaXNOb3RSZWFkeSgpXG4gICAgICAgID8gcHJldlN0YXRlXG4gICAgICAgIDogbmV4dFN0YXRlKGl0ZW1zID0+IGl0ZW1zLm1hcCh1cGRhdGVCb29rbWFya0luZm8pKTtcbiAgICB9XG4gICAgY2FzZSBhdC5QTEFDRVNfQk9PS01BUktTX1JFTU9WRUQ6IHtcbiAgICAgIGNvbnN0IHJlbW92ZUJvb2ttYXJrSW5mbyA9IGl0ZW0gPT4ge1xuICAgICAgICBpZiAoYWN0aW9uLmRhdGEudXJscy5pbmNsdWRlcyhpdGVtLnVybCkpIHtcbiAgICAgICAgICBjb25zdCBuZXdTaXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaXRlbSk7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtHdWlkO1xuICAgICAgICAgIGRlbGV0ZSBuZXdTaXRlLmJvb2ttYXJrVGl0bGU7XG4gICAgICAgICAgZGVsZXRlIG5ld1NpdGUuYm9va21hcmtEYXRlQ3JlYXRlZDtcbiAgICAgICAgICBpZiAoIW5ld1NpdGUuY29udGV4dF90eXBlIHx8IG5ld1NpdGUuY29udGV4dF90eXBlID09PSBcImJvb2ttYXJrXCIpIHtcbiAgICAgICAgICAgIG5ld1NpdGUuY29udGV4dF90eXBlID0gXCJyZW1vdmVkQm9va21hcmtcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ld1NpdGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGlzTm90UmVhZHkoKVxuICAgICAgICA/IHByZXZTdGF0ZVxuICAgICAgICA6IG5leHRTdGF0ZShpdGVtcyA9PiBpdGVtcy5tYXAocmVtb3ZlQm9va21hcmtJbmZvKSk7XG4gICAgfVxuICAgIGNhc2UgYXQuVE9QSUNfU0VMRUNUSU9OX1NQT1RMSUdIVF9PUEVOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzaG93VG9waWNTZWxlY3Rpb246IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuVE9QSUNfU0VMRUNUSU9OX1NQT1RMSUdIVF9DTE9TRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc2hvd1RvcGljU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5TRUNUSU9OX0JMT0NLRUQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNob3dCbG9ja1NlY3Rpb25Db25maXJtYXRpb246IHRydWUsXG4gICAgICAgIHNlY3Rpb25QZXJzb25hbGl6YXRpb246IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LlJFUE9SVF9BRF9PUEVOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICByZXBvcnQ6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUucmVwb3J0LFxuICAgICAgICAgIGNhcmRfdHlwZTogYWN0aW9uLmRhdGE/LmNhcmRfdHlwZSxcbiAgICAgICAgICBwb3NpdGlvbjogYWN0aW9uLmRhdGE/LnBvc2l0aW9uLFxuICAgICAgICAgIHBsYWNlbWVudF9pZDogYWN0aW9uLmRhdGE/LnBsYWNlbWVudF9pZCxcbiAgICAgICAgICByZXBvcnRpbmdfdXJsOiBhY3Rpb24uZGF0YT8ucmVwb3J0aW5nX3VybCxcbiAgICAgICAgICB1cmw6IGFjdGlvbi5kYXRhPy51cmwsXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5SRVBPUlRfQ09OVEVOVF9PUEVOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICByZXBvcnQ6IHtcbiAgICAgICAgICAuLi5wcmV2U3RhdGUucmVwb3J0LFxuICAgICAgICAgIGNhcmRfdHlwZTogYWN0aW9uLmRhdGE/LmNhcmRfdHlwZSxcbiAgICAgICAgICBjb3JwdXNfaXRlbV9pZDogYWN0aW9uLmRhdGE/LmNvcnB1c19pdGVtX2lkLFxuICAgICAgICAgIHNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZDogYWN0aW9uLmRhdGE/LnNjaGVkdWxlZF9jb3JwdXNfaXRlbV9pZCxcbiAgICAgICAgICBzZWN0aW9uX3Bvc2l0aW9uOiBhY3Rpb24uZGF0YT8uc2VjdGlvbl9wb3NpdGlvbixcbiAgICAgICAgICBzZWN0aW9uOiBhY3Rpb24uZGF0YT8uc2VjdGlvbixcbiAgICAgICAgICB0aXRsZTogYWN0aW9uLmRhdGE/LnRpdGxlLFxuICAgICAgICAgIHRvcGljOiBhY3Rpb24uZGF0YT8udG9waWMsXG4gICAgICAgICAgdXJsOiBhY3Rpb24uZGF0YT8udXJsLFxuICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuUkVQT1JUX0NMT1NFOlxuICAgIGNhc2UgYXQuUkVQT1JUX0FEX1NVQk1JVDpcbiAgICBjYXNlIGF0LlJFUE9SVF9DT05URU5UX1NVQk1JVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgcmVwb3J0OiB7XG4gICAgICAgICAgLi4ucHJldlN0YXRlLnJlcG9ydCxcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5TRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9VUERBVEU6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHNlY3Rpb25QZXJzb25hbGl6YXRpb246IGFjdGlvbi5kYXRhIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gU2VhcmNoKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuU2VhcmNoLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuRElTQUJMRV9TRUFSQ0g6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7IC4uLnByZXZTdGF0ZSwgZGlzYWJsZTogdHJ1ZSB9KTtcbiAgICBjYXNlIGF0LkZBS0VfRk9DVVNfU0VBUkNIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAuLi5wcmV2U3RhdGUsIGZha2VGb2N1czogdHJ1ZSB9KTtcbiAgICBjYXNlIGF0LlNIT1dfU0VBUkNIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyAuLi5wcmV2U3RhdGUsIGRpc2FibGU6IGZhbHNlLCBmYWtlRm9jdXM6IGZhbHNlIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFdhbGxwYXBlcnMocHJldlN0YXRlID0gSU5JVElBTF9TVEFURS5XYWxscGFwZXJzLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuV0FMTFBBUEVSU19TRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHdhbGxwYXBlckxpc3Q6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldBTExQQVBFUlNfRkVBVFVSRV9ISUdITElHSFRfQ09VTlRFUl9JTkNSRU1FTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIGhpZ2hsaWdodFNlZW5Db3VudGVyOiBhY3Rpb24uZGF0YSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5XQUxMUEFQRVJTX0NBVEVHT1JZX1NFVDpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgY2F0ZWdvcmllczogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlIGF0LldBTExQQVBFUlNfQ1VTVE9NX1NFVDpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgdXBsb2FkZWRXYWxscGFwZXI6IGFjdGlvbi5kYXRhIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gTm90aWZpY2F0aW9ucyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLk5vdGlmaWNhdGlvbnMsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhdC5TSE9XX1RPQVNUX01FU1NBR0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHNob3dOb3RpZmljYXRpb25zOiBhY3Rpb24uZGF0YS5zaG93Tm90aWZpY2F0aW9ucyxcbiAgICAgICAgdG9hc3RDb3VudGVyOiBwcmV2U3RhdGUudG9hc3RDb3VudGVyICsgMSxcbiAgICAgICAgdG9hc3RJZDogYWN0aW9uLmRhdGEudG9hc3RJZCxcbiAgICAgICAgdG9hc3RRdWV1ZTogW2FjdGlvbi5kYXRhLnRvYXN0SWRdLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LkhJREVfVE9BU1RfTUVTU0FHRToge1xuICAgICAgY29uc3QgeyBzaG93Tm90aWZpY2F0aW9ucywgdG9hc3RJZDogaGlkZGVuVG9hc3RJZCB9ID0gYWN0aW9uLmRhdGE7XG4gICAgICBjb25zdCBxdWV1ZWRUb2FzdHMgPSBbLi4ucHJldlN0YXRlLnRvYXN0UXVldWVdLmZpbHRlcihcbiAgICAgICAgdG9hc3RJZCA9PiB0b2FzdElkICE9PSBoaWRkZW5Ub2FzdElkXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB0b2FzdENvdW50ZXI6IHF1ZXVlZFRvYXN0cy5sZW5ndGgsXG4gICAgICAgIHRvYXN0UXVldWU6IHF1ZXVlZFRvYXN0cyxcbiAgICAgICAgdG9hc3RJZDogXCJcIixcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbnMsXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBXZWF0aGVyKHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuV2VhdGhlciwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LldFQVRIRVJfVVBEQVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBzdWdnZXN0aW9uczogYWN0aW9uLmRhdGEuc3VnZ2VzdGlvbnMsXG4gICAgICAgIGxhc3RVcGRhdGVkOiBhY3Rpb24uZGF0YS5kYXRlLFxuICAgICAgICBsb2NhdGlvbkRhdGE6IGFjdGlvbi5kYXRhLmxvY2F0aW9uRGF0YSB8fCBwcmV2U3RhdGUubG9jYXRpb25EYXRhLFxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5XRUFUSEVSX1NFQVJDSF9BQ1RJVkU6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHNlYXJjaEFjdGl2ZTogYWN0aW9uLmRhdGEgfTtcbiAgICBjYXNlIGF0LldFQVRIRVJfTE9DQVRJT05fU0VBUkNIX1VQREFURTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgbG9jYXRpb25TZWFyY2hTdHJpbmc6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5XRUFUSEVSX0xPQ0FUSU9OX1NVR0dFU1RJT05TX1VQREFURTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc3VnZ2VzdGVkTG9jYXRpb25zOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgYXQuV0VBVEhFUl9MT0NBVElPTl9EQVRBX1VQREFURTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgbG9jYXRpb25EYXRhOiBhY3Rpb24uZGF0YSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFkcyhwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkFkcywgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGF0LkFEU19JTklUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBpbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBhdC5BRFNfVVBEQVRFX1RJTEVTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICB0aWxlczogYWN0aW9uLmRhdGEudGlsZXMsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuQURTX1VQREFURV9TUE9DUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgc3BvY3M6IGFjdGlvbi5kYXRhLnNwb2NzLFxuICAgICAgICBzcG9jUGxhY2VtZW50czogYWN0aW9uLmRhdGEuc3BvY1BsYWNlbWVudHMsXG4gICAgICB9O1xuICAgIGNhc2UgYXQuQURTX1JFU0VUOlxuICAgICAgcmV0dXJuIHsgLi4uSU5JVElBTF9TVEFURS5BZHMgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBUcmVuZGluZ1NlYXJjaChwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLlRyZW5kaW5nU2VhcmNoLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuVFJFTkRJTkdfU0VBUkNIX1VQREFURTpcbiAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgc3VnZ2VzdGlvbnM6IGFjdGlvbi5kYXRhIH07XG4gICAgY2FzZSBhdC5UUkVORElOR19TRUFSQ0hfVE9HR0xFX0NPTExBUFNFOlxuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBjb2xsYXBzZWQ6IGFjdGlvbi5kYXRhLmNvbGxhcHNlZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRpbWVyV2lkZ2V0KHByZXZTdGF0ZSA9IElOSVRJQUxfU1RBVEUuVGltZXJXaWRnZXQsIGFjdGlvbikge1xuICAvLyBmYWxsYmFjayB0byBjdXJyZW50IHRpbWVyVHlwZSBpbiBzdGF0ZSBpZiBub3QgcHJvdmlkZWQgaW4gYWN0aW9uXG4gIGNvbnN0IHRpbWVyVHlwZSA9IGFjdGlvbi5kYXRhPy50aW1lclR5cGUgfHwgcHJldlN0YXRlLnRpbWVyVHlwZTtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9TRVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIC4uLmFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldJREdFVFNfVElNRVJfU0VUX1RZUEU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHRpbWVyVHlwZTogYWN0aW9uLmRhdGEudGltZXJUeXBlLFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldJREdFVFNfVElNRVJfU0VUX0RVUkFUSU9OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGltZXJUeXBlXToge1xuICAgICAgICAgIC8vIHNldHRpbmcgYSBkeW5hbWljIGtleSBhc3NpZ25tZW50IHRvIGxldCB1cyBkeW5hbWljYWxseSB1cGRhdGUgdGltZXIgdHlwZSdzIHN0YXRlIGJhc2VkIG9uIHdoYXQgaXMgc2V0XG4gICAgICAgICAgZHVyYXRpb246IGFjdGlvbi5kYXRhLmR1cmF0aW9uLFxuICAgICAgICAgIGluaXRpYWxEdXJhdGlvbjogYWN0aW9uLmRhdGEuZHVyYXRpb24sXG4gICAgICAgICAgc3RhcnRUaW1lOiBudWxsLFxuICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19USU1FUl9QTEFZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGltZXJUeXBlXToge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZVt0aW1lclR5cGVdLFxuICAgICAgICAgIHN0YXJ0VGltZTogTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCksIC8vIHJlZmxlY3RlZCBpbiBzZWNvbmRzXG4gICAgICAgICAgaXNSdW5uaW5nOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldJREdFVFNfVElNRVJfUEFVU0U6XG4gICAgICBpZiAocHJldlN0YXRlW3RpbWVyVHlwZV0/LmlzUnVubmluZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICBbdGltZXJUeXBlXToge1xuICAgICAgICAgICAgLi4ucHJldlN0YXRlW3RpbWVyVHlwZV0sXG4gICAgICAgICAgICBkdXJhdGlvbjogYWN0aW9uLmRhdGEuZHVyYXRpb24sXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHN0YXJ0VGltZSB0byBudWxsIG9uIHBhdXNlIGJlY2F1c2Ugd2UgbmVlZCB0byBjaGVjayB0aGUgZXhhY3QgdGltZSB0aGUgdXNlciBwcmVzc2VzIHBsYXksXG4gICAgICAgICAgICAvLyB3aGV0aGVyIGl0J3Mgd2hlbiB0aGUgdXNlciBzdGFydHMgb3IgcmVzdW1lcyB0aGUgdGltZXIuIFRoaXMgaGVscHMgZ2V0IGFjY3VyYXRlIHJlc3VsdHNcbiAgICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgY2FzZSBhdC5XSURHRVRTX1RJTUVSX1JFU0VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGltZXJUeXBlXToge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZVt0aW1lclR5cGVdLFxuICAgICAgICAgIGR1cmF0aW9uOiBhY3Rpb24uZGF0YS5kdXJhdGlvbixcbiAgICAgICAgICBpbml0aWFsRHVyYXRpb246IGFjdGlvbi5kYXRhLmR1cmF0aW9uLFxuICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIGF0LldJREdFVFNfVElNRVJfRU5EOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJldlN0YXRlLFxuICAgICAgICBbdGltZXJUeXBlXToge1xuICAgICAgICAgIC4uLnByZXZTdGF0ZVt0aW1lclR5cGVdLFxuICAgICAgICAgIGR1cmF0aW9uOiBhY3Rpb24uZGF0YS5kdXJhdGlvbixcbiAgICAgICAgICBpbml0aWFsRHVyYXRpb246IGFjdGlvbi5kYXRhLmR1cmF0aW9uLFxuICAgICAgICAgIHN0YXJ0VGltZTogbnVsbCxcbiAgICAgICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBMaXN0c1dpZGdldChwcmV2U3RhdGUgPSBJTklUSUFMX1NUQVRFLkxpc3RzV2lkZ2V0LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYXQuV0lER0VUU19MSVNUU19TRVQ6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGxpc3RzOiBhY3Rpb24uZGF0YSB9O1xuICAgIGNhc2UgYXQuV0lER0VUU19MSVNUU19TRVRfU0VMRUNURUQ6XG4gICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIHNlbGVjdGVkOiBhY3Rpb24uZGF0YSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcHJldlN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VycyA9IHtcbiAgVG9wU2l0ZXMsXG4gIEFwcCxcbiAgQWRzLFxuICBQcmVmcyxcbiAgRGlhbG9nLFxuICBTZWN0aW9ucyxcbiAgTWVzc2FnZXMsXG4gIE5vdGlmaWNhdGlvbnMsXG4gIFBvY2tldCxcbiAgUGVyc29uYWxpemF0aW9uLFxuICBJbmZlcnJlZFBlcnNvbmFsaXphdGlvbixcbiAgRGlzY292ZXJ5U3RyZWFtLFxuICBTZWFyY2gsXG4gIFRpbWVyV2lkZ2V0LFxuICBMaXN0c1dpZGdldCxcbiAgVHJlbmRpbmdTZWFyY2gsXG4gIFdhbGxwYXBlcnMsXG4gIFdlYXRoZXIsXG59O1xuIiwiLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpcyBmaWxlLFxuICogWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cblxuaW1wb3J0IHsgYWN0aW9uQ3JlYXRvcnMgYXMgYWMsIGFjdGlvblR5cGVzIGFzIGF0IH0gZnJvbSBcImNvbW1vbi9BY3Rpb25zLm1qc1wiO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gXCJjb250ZW50LXNyYy9jb21wb25lbnRzL0Jhc2UvQmFzZVwiO1xuaW1wb3J0IHsgRGV0ZWN0VXNlclNlc3Npb25TdGFydCB9IGZyb20gXCJjb250ZW50LXNyYy9saWIvZGV0ZWN0LXVzZXItc2Vzc2lvbi1zdGFydFwiO1xuaW1wb3J0IHsgaW5pdFN0b3JlIH0gZnJvbSBcImNvbnRlbnQtc3JjL2xpYi9pbml0LXN0b3JlXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IHJlZHVjZXJzIH0gZnJvbSBcImNvbW1vbi9SZWR1Y2Vycy5zeXMubWpzXCI7XG5cbmV4cG9ydCBjb25zdCBOZXdUYWIgPSAoeyBzdG9yZSB9KSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxCYXNlIC8+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5mdW5jdGlvbiBkb1JlcXVlc3RXaGVuUmVhZHkoKSB7XG4gIC8vIElmIHRoaXMgZG9jdW1lbnQgaGFzIGFscmVhZHkgZ29uZSBpbnRvIHRoZSBiYWNrZ3JvdW5kIGJ5IHRoZSB0aW1lIHdlJ3ZlIHJlYWNoZWRcbiAgLy8gaGVyZSwgd2UgY2FuIGRlcHJpb3JpdGl6ZSB0aGUgcmVxdWVzdCB1bnRpbCB0aGUgZXZlbnQgbG9vcFxuICAvLyBmcmVlcyB1cC4gSWYsIGhvd2V2ZXIsIHRoZSB2aXNpYmlsaXR5IGNoYW5nZXMsIHdlIHRoZW4gc2VuZCB0aGUgcmVxdWVzdC5cbiAgY29uc3QgZG9SZXF1ZXN0UHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIGxldCBkaWRSZXF1ZXN0ID0gZmFsc2U7XG4gICAgbGV0IHJlcXVlc3RJZGxlQ2FsbGJhY2tJZCA9IDA7XG4gICAgZnVuY3Rpb24gZG9SZXF1ZXN0KCkge1xuICAgICAgaWYgKCFkaWRSZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0SWRsZUNhbGxiYWNrSWQpIHtcbiAgICAgICAgICBjYW5jZWxJZGxlQ2FsbGJhY2socmVxdWVzdElkbGVDYWxsYmFja0lkKTtcbiAgICAgICAgfVxuICAgICAgICBkaWRSZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2tJZCA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soZG9SZXF1ZXN0KTtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsIGRvUmVxdWVzdCwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZG9SZXF1ZXN0UHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldpdGhvdXRTdGF0ZSgpIHtcbiAgY29uc3Qgc3RvcmUgPSBpbml0U3RvcmUocmVkdWNlcnMpO1xuICBuZXcgRGV0ZWN0VXNlclNlc3Npb25TdGFydChzdG9yZSkuc2VuZEV2ZW50T3JBZGRMaXN0ZW5lcigpO1xuXG4gIGRvUmVxdWVzdFdoZW5SZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgIC8vIElmIHN0YXRlIGV2ZW50cyBoYXBwZW5lZCBiZWZvcmUgd2UgZ290IGhlcmUsIHdlIGNhbiByZXF1ZXN0IHN0YXRlIGFnYWluLlxuICAgIHN0b3JlLmRpc3BhdGNoKGFjLkFsc29Ub01haW4oeyB0eXBlOiBhdC5ORVdfVEFCX1NUQVRFX1JFUVVFU1QgfSkpO1xuICAgIC8vIElmIHdlIHJlbmRlcmVkIHdpdGhvdXQgc3RhdGUsIHdlIGRvbid0IG5lZWQgdGhlIHN0YXJ0dXAgY2FjaGUuXG4gICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9NYWluKHsgdHlwZTogYXQuTkVXX1RBQl9TVEFURV9SRVFVRVNUX1dJVEhPVVRfU1RBUlRVUENBQ0hFIH0pXG4gICAgKTtcbiAgfSk7XG5cbiAgUmVhY3RET00uaHlkcmF0ZSg8TmV3VGFiIHN0b3JlPXtzdG9yZX0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDYWNoZShpbml0aWFsU3RhdGUpIHtcbiAgaWYgKGluaXRpYWxTdGF0ZSkge1xuICAgIGluaXRpYWxTdGF0ZS5BcHAuaXNGb3JTdGFydHVwQ2FjaGUuQXBwID0gZmFsc2U7XG4gIH1cbiAgY29uc3Qgc3RvcmUgPSBpbml0U3RvcmUocmVkdWNlcnMsIGluaXRpYWxTdGF0ZSk7XG4gIG5ldyBEZXRlY3RVc2VyU2Vzc2lvblN0YXJ0KHN0b3JlKS5zZW5kRXZlbnRPckFkZExpc3RlbmVyKCk7XG5cbiAgZG9SZXF1ZXN0V2hlblJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgLy8gSWYgc3RhdGUgZXZlbnRzIGhhcHBlbmVkIGJlZm9yZSB3ZSBnb3QgaGVyZSxcbiAgICAvLyB3ZSBjYW4gbm90aWZ5IG1haW4gdGhhdCB3ZSBuZWVkIHVwZGF0ZXMuXG4gICAgLy8gVGhlIGluZGl2aWR1YWwgZmVlZHMga25vdyB3aGF0IHN0YXRlIGlzIG5vdCBjYWNoZWQuXG4gICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICBhYy5Pbmx5VG9NYWluKHsgdHlwZTogYXQuTkVXX1RBQl9TVEFURV9SRVFVRVNUX1NUQVJUVVBDQUNIRSB9KVxuICAgICk7XG4gIH0pO1xuXG4gIFJlYWN0RE9NLmh5ZHJhdGUoPE5ld1RhYiBzdG9yZT17c3RvcmV9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2ltcGxlSGFzaFJvdXRlciIsIlB1cmVDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwib25IYXNoQ2hhbmdlIiwiYmluZCIsInN0YXRlIiwiaGFzaCIsImdsb2JhbFRoaXMiLCJsb2NhdGlvbiIsInNldFN0YXRlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsInJvdXRlcyIsInNwbGl0IiwiY2xvbmVFbGVtZW50IiwiY2hpbGRyZW4iLCJhY3Rpb25DcmVhdG9ycyIsImFjIiwiYWN0aW9uVHlwZXMiLCJhdCIsImNvbm5lY3QiLCJQUkVGX0FEX1NJWkVfTUVESVVNX1JFQ1RBTkdMRSIsIlBSRUZfQURfU0laRV9CSUxMQk9BUkQiLCJQUkVGX0FEX1NJWkVfTEVBREVSQk9BUkQiLCJQUkVGX0NPTlRFWFRVQUxfQ09OVEVOVF9TRUxFQ1RFRF9GRUVEIiwiUFJFRl9DT05URVhUVUFMX0NPTlRFTlRfRkVFRFMiLCJQUkVGX1NFQ1RJT05TX0VOQUJMRUQiLCJQUkVGX1NQT0NfUExBQ0VNRU5UUyIsIlBSRUZfU1BPQ19DT1VOVFMiLCJQUkVGX0NPTlRFWFRVQUxfQURTX0VOQUJMRUQiLCJQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX1BMQUNFTUVOVFMiLCJQUkVGX0NPTlRFWFRVQUxfQkFOTkVSX0NPVU5UUyIsIlJvdyIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzTmFtZSIsInJlbGF0aXZlVGltZSIsInRpbWVzdGFtcCIsInNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwibWludXRlcyIsInRvTG9jYWxlU3RyaW5nIiwiVG9nZ2xlU3RvcnlCdXR0b24iLCJoYW5kbGVDbGljayIsIm9uQ2xpY2siLCJzdG9yeSIsIlRvZ2dsZVByZWZDaGVja2JveCIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJwcmVmIiwidGFyZ2V0IiwiY2hlY2tlZCIsIkZyYWdtZW50IiwidHlwZSIsImRpc2FibGVkIiwiUGVyc29uYWxpemF0aW9uIiwidG9nZ2xlUGVyc29uYWxpemF0aW9uIiwiZGlzcGF0Y2giLCJPbmx5VG9NYWluIiwiRElTQ09WRVJZX1NUUkVBTV9QRVJTT05BTElaQVRJT05fVE9HR0xFIiwibGFzdFVwZGF0ZWQiLCJpbml0aWFsaXplZCIsImNvbFNwYW4iLCJwZXJzb25hbGl6ZWQiLCJEaXNjb3ZlcnlTdHJlYW1BZG1pblVJIiwicmVzdG9yZVByZWZEZWZhdWx0cyIsInNldENvbmZpZ1ZhbHVlIiwiZXhwaXJlQ2FjaGUiLCJyZWZyZXNoQ2FjaGUiLCJzaG93UGxhY2Vob2xkZXIiLCJpZGxlRGFpbHkiLCJzeXN0ZW1UaWNrIiwic3luY1JlbW90ZVNldHRpbmdzIiwib25TdG9yeVRvZ2dsZSIsImhhbmRsZVdlYXRoZXJTdWJtaXQiLCJoYW5kbGVXZWF0aGVyVXBkYXRlIiwicmVzZXRCbG9ja3MiLCJyZWZyZXNoSW5mZXJyZWRQZXJzb25hbGl6YXRpb24iLCJyZWZyZXNoVG9waWNTZWxlY3Rpb25DYWNoZSIsInRvZ2dsZVRCUkZlZWQiLCJoYW5kbGVTZWN0aW9uc1RvZ2dsZSIsInRvZ2dsZUlBQkJhbm5lcnMiLCJ0b2dnbGVkU3RvcmllcyIsIndlYXRoZXJRdWVyeSIsImNvbmZpZ05hbWUiLCJjb25maWdWYWx1ZSIsIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX1NFVF9WQUxVRSIsImRhdGEiLCJuYW1lIiwidmFsdWUiLCJESVNDT1ZFUllfU1RSRUFNX0NPTkZJR19SRVNFVF9ERUZBVUxUUyIsImNvbmZpZyIsIkRpc2NvdmVyeVN0cmVhbSIsIkRJU0NPVkVSWV9TVFJFQU1fQ09ORklHX0NIQU5HRSIsIklORkVSUkVEX1BFUlNPTkFMSVpBVElPTl9SRUZSRVNIIiwiU2V0UHJlZiIsImRpc3BhdGNoU2ltcGxlQWN0aW9uIiwiRElTQ09WRVJZX1NUUkVBTV9ERVZfQkxPQ0tTX1JFU0VUIiwiRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lTVEVNX1RJQ0siLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9FWFBJUkVfQ0FDSEUiLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9TSE9XX1BMQUNFSE9MREVSIiwiZSIsImZlZWQiLCJzZWxlY3RlZEZlZWQiLCJESVNDT1ZFUllfU1RSRUFNX0RFVl9JRExFX0RBSUxZIiwiRElTQ09WRVJZX1NUUkVBTV9ERVZfU1lOQ19SUyIsInByZXZlbnREZWZhdWx0IiwicHJlc3NlZCIsImlkIiwiZ2VuZXJhdGVTcG9jUHJlZlZhbHVlcyIsInBsYWNlbWVudHMiLCJvdGhlclByZWZzIiwibWFwIiwiaXRlbSIsInRyaW0iLCJmaWx0ZXIiLCJjb3VudHMiLCJzdXBwb3J0SUFCQWRUeXBlcyIsImNvdW50VmFsdWUiLCJpbmNsdWRlcyIsIkVycm9yIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImpvaW4iLCJyZW5kZXJDb21wb25lbnQiLCJ3aWR0aCIsImNvbXBvbmVudCIsInJlbmRlckZlZWQiLCJyZW5kZXJXZWF0aGVyRGF0YSIsInN1Z2dlc3Rpb25zIiwiV2VhdGhlciIsIndlYXRoZXJUYWJsZSIsIm9uU3VibWl0IiwiaHRtbEZvciIsIm1pbiIsIm1heCIsInN1Z2dlc3Rpb24iLCJrZXkiLCJjaXR5X25hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwicmVuZGVyUGVyc29uYWxpemF0aW9uRGF0YSIsImluZmVycmVkSW50ZXJlc3RzIiwiY29hcnNlSW5mZXJyZWRJbnRlcmVzdHMiLCJjb2Fyc2VQcml2YXRlSW5mZXJyZWRJbnRlcmVzdHMiLCJJbmZlcnJlZFBlcnNvbmFsaXphdGlvbiIsInJlbmRlckZlZWREYXRhIiwidXJsIiwiZmVlZHMiLCJyZWNvbW1lbmRhdGlvbnMiLCJyZW5kZXJTdG9yeURhdGEiLCJyZW5kZXJGZWVkc0RhdGEiLCJPYmplY3QiLCJrZXlzIiwicmVuZGVySW1wcmVzc2lvbnNEYXRhIiwiaW1wcmVzc2lvbnMiLCJyZW5kZXJCbG9ja3NEYXRhIiwiYmxvY2tzIiwicmVuZGVyU3BvY3MiLCJzcG9jcyIsInVuaWZpZWRBZHNTcG9jc0VuYWJsZWQiLCJQUkVGX1VOSUZJRURfQURTX0FEU0ZFRURfRU5BQkxFRCIsImFkc0ZlZWRFbmFibGVkIiwidW5pZmllZEFkc0VuZHBvaW50Iiwic3BvY3NEYXRhIiwibmV3dGFiX3Nwb2NzIiwiaXRlbXMiLCJzcG9jc19lbmRwb2ludCIsInNwb2MiLCJmcmVxdWVuY3lfY2FwcyIsInN0b3J5RGF0YSIsInByZWZUb2dnbGVzIiwibGF5b3V0Iiwic2VjdGlvbnNFbmFibGVkIiwiVEJSRmVlZHMiLCJzIiwibWVkaXVtUmVjdGFuZ2xlRW5hYmxlZCIsImJpbGxib2FyZHNFbmFibGVkIiwibGVhZGVyYm9hcmRFbmFibGVkIiwic3BvY1BsYWNlbWVudHMiLCJtZWRpdW1SZWN0YW5nbGVFbmFibGVkUHJlc3NlZCIsImJpbGxib2FyZFByZXNzZWQiLCJsZWFkZXJib2FyZFByZXNzZWQiLCJvblRvZ2dsZSIsImxhYmVsIiwicm93Iiwicm93SW5kZXgiLCJjb21wb25lbnRzIiwiY29tcG9uZW50SW5kZXgiLCJEaXNjb3ZlcnlTdHJlYW1BZG1pbklubmVyIiwiY29sbGFwc2VkIiwiaHJlZiIsIlByZWZzIiwidmFsdWVzIiwiQ29sbGFwc2VUb2dnbGUiLCJvbkNvbGxhcHNlVG9nZ2xlIiwicmVuZGVyQWRtaW4iLCJzdGFydHNXaXRoIiwic2V0Qm9keUNsYXNzIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJpc0NvbGxhcHNlZCIsInRpdGxlIiwiX0Rpc2NvdmVyeVN0cmVhbUFkbWluIiwiRGlzY292ZXJ5U3RyZWFtQWRtaW4iLCJTZWN0aW9ucyIsIl9Db25maXJtRGlhbG9nIiwiX2hhbmRsZUNhbmNlbEJ0biIsIl9oYW5kbGVDb25maXJtQnRuIiwiRElBTE9HX0NBTkNFTCIsIlVzZXJFdmVudCIsInNvdXJjZSIsImV2ZW50U291cmNlIiwib25Db25maXJtIiwiZm9yRWFjaCIsIl9yZW5kZXJNb2RhbE1lc3NhZ2UiLCJtZXNzYWdlX2JvZHkiLCJib2R5X3N0cmluZ19pZCIsIm1zZyIsInZpc2libGUiLCJyb2xlIiwiaWNvbiIsImNhbmNlbF9idXR0b25fc3RyaW5nX2lkIiwiY29uZmlybV9idXR0b25fc3RyaW5nX2lkIiwiY29uZmlybV9idXR0b25fc3RyaW5nX2FyZ3MiLCJDb25maXJtRGlhbG9nIiwiRGlhbG9nIiwiQTExeUxpbmtCdXR0b24iLCJFcnJvckJvdW5kYXJ5RmFsbGJhY2siLCJ3aW5kb3dPYmoiLCJ3aW5kb3ciLCJyZWxvYWQiLCJkZWZhdWx0Q2xhc3MiLCJkZWZhdWx0UHJvcHMiLCJFcnJvckJvdW5kYXJ5IiwiaGFzRXJyb3IiLCJjb21wb25lbnREaWRDYXRjaCIsIkZhbGxiYWNrQ29tcG9uZW50IiwidXNlU3RhdGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJDU1NUcmFuc2l0aW9uIiwiU2VjdGlvbnNNZ210UGFuZWwiLCJleGl0RXZlbnRGaXJlZCIsInNob3dQYW5lbCIsInNldFNob3dQYW5lbCIsInNlY3Rpb25QZXJzb25hbGl6YXRpb24iLCJsYXlvdXRDb21wb25lbnRzIiwic2VjdGlvbnMiLCJzZWN0aW9uc0ZlZWROYW1lIiwiY2FyZEdyaWRFbnRyeSIsImZpbmQiLCJzZWN0aW9uc0xpc3QiLCJzZWN0aW9uc1N0YXRlIiwic2V0U2VjdGlvblN0YXRlIiwiZm9sbG93ZWRTZWN0aW9uc0RhdGEiLCJzZWN0aW9uS2V5IiwiaXNGb2xsb3dlZCIsImJsb2NrZWRTZWN0aW9uc0RhdGEiLCJpc0Jsb2NrZWQiLCJ1cGRhdGVDYWNoZWREYXRhIiwib25Gb2xsb3dDbGljayIsInJlY2VpdmVkUmFuayIsIkFsc29Ub01haW4iLCJTRUNUSU9OX1BFUlNPTkFMSVpBVElPTl9TRVQiLCJmb2xsb3dlZEF0IiwidG9JU09TdHJpbmciLCJzZWN0aW9uIiwic2VjdGlvbl9wb3NpdGlvbiIsImV2ZW50X3NvdXJjZSIsIm9uQmxvY2tDbGljayIsIm9uVW5ibG9ja0NsaWNrIiwidXBkYXRlZFNlY3Rpb25EYXRhIiwib25VbmZvbGxvd0NsaWNrIiwidG9nZ2xlUGFuZWwiLCJwcmV2U2hvd1BhbmVsIiwiZm9sbG93ZWRTZWN0aW9uc0xpc3QiLCJmb2xsb3dpbmciLCJibG9ja2VkU2VjdGlvbnNMaXN0IiwiYmxvY2tlZCIsImluIiwidGltZW91dCIsImNsYXNzTmFtZXMiLCJ1bm1vdW50T25FeGl0IiwibGVuZ3RoIiwiUFJFRl9XQUxMUEFQRVJfVVBMT0FERURfUFJFVklPVVNMWSIsIlBSRUZfV0FMTFBBUEVSX1VQTE9BRF9NQVhfRklMRV9TSVpFIiwiUFJFRl9XQUxMUEFQRVJfVVBMT0FEX01BWF9GSUxFX1NJWkVfRU5BQkxFRCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lciIsImFyZ3MiLCJ3YWtlVXAiLCJzZXRUaW1lb3V0IiwiYXBwbHkiLCJfV2FsbHBhcGVyQ2F0ZWdvcmllcyIsImhhbmRsZUNvbG9ySW5wdXQiLCJkZWJvdW5jZWRIYW5kbGVDaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVSZXNldCIsImhhbmRsZUNhdGVnb3J5IiwiaGFuZGxlVXBsb2FkIiwiaGFuZGxlQmFjayIsImdldFJHQkNvbG9ycyIsInByZWZlcnNIaWdoQ29udHJhc3RRdWVyeSIsInByZWZlcnNEYXJrUXVlcnkiLCJjYXRlZ29yeVJlZiIsIndhbGxwYXBlclJlZiIsImN1c3RvbUNvbG9yUGlja2VyUmVmIiwiY3JlYXRlUmVmIiwiY3VzdG9tQ29sb3JJbnB1dCIsImFjdGl2ZUNhdGVnb3J5IiwiYWN0aXZlQ2F0ZWdvcnlGbHVlbnRJRCIsInNob3dDb2xvclBpY2tlciIsImlucHV0VHlwZSIsImFjdGl2ZUlkIiwiaXNDdXN0b21XYWxscGFwZXJFcnJvciIsIm1hdGNoTWVkaWEiLCJwcmV2UHJvcHMiLCJyZ2JDb2xvcnMiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInRvU3RyaW5nIiwiY3VycmVudCIsImNvbG9ySW5wdXRCYWNrZ3JvdW5kIiwiaXNDb2xvckRhcmsiLCJpc1dhbGxwYXBlckNvbG9yRGFyayIsInNldFByZWYiLCJ1cGxvYWRlZFByZXZpb3VzbHkiLCJoYW5kbGVVc2VyRXZlbnQiLCJXQUxMUEFQRVJfQ0xJQ0siLCJzZWxlY3RlZF93YWxscGFwZXIiLCJoYWRfcHJldmlvdXNfd2FsbHBhcGVyIiwiYWN0aXZlV2FsbHBhcGVyIiwiaGFkX3VwbG9hZGVkX3ByZXZpb3VzbHkiLCJoYW5kbGVDYXRlZ29yeUtleURvd24iLCJjYXRlZ29yeSIsImdldEluZGV4IiwiZmluZEluZGV4IiwiY2F0IiwiaXNSVEwiLCJkaXIiLCJldmVudEtleSIsIm5leHRJbmRleCIsImZvY3VzIiwiaGFuZGxlV2FsbHBhcGVyS2V5RG93biIsInNoaWZ0S2V5IiwiYmFja1RvTWVudUJ1dHRvbiIsIndhbGxwYXBlciIsImNvbHVtbkNvdW50IiwidGFiSW5kZXgiLCJjbGljayIsInNlbGVjdGVkV2FsbHBhcGVyIiwiV0FMTFBBUEVSX1JFTU9WRV9VUExPQUQiLCJXQUxMUEFQRVJfQ0FURUdPUllfQ0xJQ0siLCJmbHVlbnRfaWQiLCJ3YWxscGFwZXJVcGxvYWRNYXhGaWxlU2l6ZUVuYWJsZWQiLCJ3YWxscGFwZXJVcGxvYWRNYXhGaWxlU2l6ZSIsImZpbGVJbnB1dCIsImFjY2VwdCIsIm9uY2FuY2VsIiwib25jaGFuZ2UiLCJmaWxlIiwiZmlsZXMiLCJtYXhTaXplIiwic2l6ZSIsImNvbnNvbGUiLCJlcnJvciIsIldBTExQQVBFUl9VUExPQUQiLCJzZXRBY3RpdmVJZCIsImlucHV0IiwiciIsInBhcnNlSW50Iiwic3Vic3RyIiwiZyIsImIiLCJwcmVmcyIsIndhbGxwYXBlckxpc3QiLCJjYXRlZ29yaWVzIiwiV2FsbHBhcGVycyIsImZpbHRlcmVkV2FsbHBhcGVycyIsInJlZHVjZUNvbG9yc1RvRml0Q3VzdG9tQ29sb3JJbnB1dCIsImFyciIsInBvcCIsIndhbGxwYXBlckN1c3RvbVNvbGlkQ29sb3JIZXgiLCJyZWdleCIsIm1hdGNoIiwic3RhcnRlckNvbG9ySGV4IiwibWF0Y2hlcyIsImluaXRTdGF0ZUNsYXNzbmFtZSIsImNvbG9yUGlja2VySW5wdXQiLCJyZWYiLCJvbklucHV0IiwiZmlsdGVyZWRMaXN0IiwiYWN0aXZlV2FsbHBhcGVyT2JqIiwid3AiLCJ0aHVtYm5haWwiLCJ3YWxscGFwZXJVcmwiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzb2xpZF9jb2xvciIsImVsIiwib25LZXlEb3duIiwidGhlbWUiLCJXYWxscGFwZXJDYXRlZ29yaWVzIiwiQ29udGVudFNlY3Rpb24iLCJvblByZWZlcmVuY2VTZWxlY3QiLCJ0b3BTaXRlc0RyYXdlclJlZiIsInBvY2tldERyYXdlclJlZiIsImlucHV0VXNlckV2ZW50IiwiZXZlbnRWYWx1ZSIsInN0YXR1cyIsIm1lbnVfc291cmNlIiwicHJlZmVyZW5jZSIsImRhdGFzZXQiLCJub2RlTmFtZSIsInNldERyYXdlck1hcmdpbnMiLCJzZXREcmF3ZXJNYXJnaW4iLCJlbmFibGVkU2VjdGlvbnMiLCJ0b3BTaXRlc0VuYWJsZWQiLCJwb2NrZXRFbmFibGVkIiwiZHJhd2VySUQiLCJpc09wZW4iLCJkcmF3ZXJSZWYiLCJkcmF3ZXJIZWlnaHQiLCJwYXJzZUZsb2F0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodCIsIm1hcmdpblRvcCIsImVuYWJsZWRXaWRnZXRzIiwicG9ja2V0UmVnaW9uIiwibWF5SGF2ZUluZmVycmVkUGVyc29uYWxpemF0aW9uIiwibWF5SGF2ZVdlYXRoZXIiLCJtYXlIYXZlVHJlbmRpbmdTZWFyY2giLCJtYXlIYXZlV2lkZ2V0cyIsIm1heUhhdmVUaW1lcldpZGdldCIsIm1heUhhdmVMaXN0c1dpZGdldCIsIm9wZW5QcmVmZXJlbmNlcyIsIndhbGxwYXBlcnNFbmFibGVkIiwibWF5SGF2ZVRvcGljU2VjdGlvbnMiLCJ3ZWF0aGVyRW5hYmxlZCIsInRyZW5kaW5nU2VhcmNoRW5hYmxlZCIsInNob3dJbmZlcnJlZFBlcnNvbmFsaXphdGlvbkVuYWJsZWQiLCJ0b3BTaXRlc1Jvd3NDb3VudCIsInRpbWVyRW5hYmxlZCIsImxpc3RzRW5hYmxlZCIsInNsb3QiLCJfQ3VzdG9taXplTWVudSIsIm9uRW50ZXJlZCIsIm9uRXhpdGVkIiwiY2xvc2VCdXR0b24iLCJvcGVuQnV0dG9uIiwic2hvd2luZyIsImFwcGVhciIsIm9uT3BlbiIsImMiLCJzcmMiLCJvbkNsb3NlIiwiaWNvbnNyYyIsIkN1c3RvbWl6ZU1lbnUiLCJMb2dvIiwiU2FmZUFuY2hvciIsImFsdEtleSIsImJ1dHRvbiIsImN0cmxLZXkiLCJtZXRhS2V5IiwiT1BFTl9MSU5LIiwicmVmZXJyZXIiLCJjdXJyZW50VGFyZ2V0IiwiaXNfc3BvbnNvcmVkIiwiaXNTcG9uc29yZWQiLCJvbkxpbmtDbGljayIsInNhZmVVUkkiLCJwcm90b2NvbCIsIlVSTCIsImlzQWxsb3dlZCIsIndhcm4iLCJhbmNob3IiLCJzZXRSZWYiLCJDb250ZXh0TWVudSIsImhpZGVDb250ZXh0Iiwib25TaG93Iiwib25VcGRhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcHRpb25zIiwib3B0aW9uIiwiaSIsIkNvbnRleHRNZW51SXRlbSIsImtleWJvYXJkQWNjZXNzIiwiX0NvbnRleHRNZW51SXRlbSIsIm9uS2V5VXAiLCJmb2N1c0ZpcnN0IiwiZm9jdXNTaWJsaW5nIiwicGFyZW50Tm9kZSIsImNsb3Nlc3RTaWJsaW5nU2VsZWN0b3IiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImZpcnN0IiwibGFzdCIsInN0cmluZ19pZCIsIkxpbmtNZW51T3B0aW9ucyIsIkRFRkFVTFRfU0lURV9NRU5VX09QVElPTlMiLCJfTGlua01lbnUiLCJnZXRPcHRpb25zIiwic2l0ZSIsImlzUHJpdmF0ZUJyb3dzaW5nRW5hYmxlZCIsInNpdGVJbmZvIiwicGxhdGZvcm0iLCJzaG91bGRTZW5kSW1wcmVzc2lvblN0YXRzIiwidXNlckV2ZW50IiwicHJvcE9wdGlvbnMiLCJpc0RlZmF1bHQiLCJzZWFyY2hUb3BTaXRlIiwic3BvbnNvcmVkX3Bvc2l0aW9uIiwibGlua01lbnVPcHRpb25zIiwibyIsImFjdGlvbiIsImltcHJlc3Npb24iLCJldmVudE5hbWUiLCJhc3NpZ24iLCJjYXJkX3R5cGUiLCJjb3JwdXNfaXRlbV9pZCIsImZldGNoVGltZXN0YW1wIiwiZmlyc3RWaXNpYmxlVGltZXN0YW1wIiwiZm9ybWF0IiwiaXNfbGlzdF9jYXJkIiwiaXNfc2VjdGlvbl9mb2xsb3dlZCIsInJlY2VpdmVkX3JhbmsiLCJyZWNvbW1lbmRhdGlvbl9pZCIsInJlY29tbWVuZGVkX2F0Iiwic2NoZWR1bGVkX2NvcnB1c19pdGVtX2lkIiwic2VsZWN0ZWRfdG9waWNzIiwidGlsZV9pZCIsInRvcGljIiwiZmxpZ2h0X2lkIiwidXNlckV2ZW50RGF0YSIsImFjdGlvbl9wb3NpdGlvbiIsImdldFN0YXRlIiwiTGlua01lbnUiLCJ1c2VSZWYiLCJ1c2VJbnRlcnNlY3Rpb25PYnNlcnZlciIsImNhbGxiYWNrIiwidGhyZXNob2xkIiwiZWxlbWVudHNSZWYiLCJ0cmlnZ2VyZWRFbGVtZW50cyIsIldlYWtTZXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJoYXMiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsImdldEFjdGl2ZUNhcmRTaXplIiwic2NyZWVuV2lkdGgiLCJmbGlnaHRJZCIsImJyZWFrcG9pbnRzIiwiY29sdW1uIiwiY2FyZFR5cGVzIiwiY3VyckNvbHVtbkNvdW50IiwiYnAiLCJDT05GRVRUSV9WQVJTIiwidXNlQ29uZmV0dGkiLCJjb3VudCIsInNwcmVhZCIsIlBJIiwicHJlZmVyc1JlZHVjZWRNb3Rpb24iLCJjb2xvcnMiLCJzdHlsZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJ2YXJpYWJsZSIsImdldFByb3BlcnR5VmFsdWUiLCJjYW52YXNSZWYiLCJwYXJ0aWNsZXNSZWYiLCJhbmltYXRpb25GcmFtZVJlZiIsImluaXRpYWxpemVDb25mZXR0aSIsImNlbnRlclgiLCJjZW50ZXJZIiwicG9vbCIsImFuZ2xlIiwicmFuZG9tIiwiY29zIiwic2luIiwiY29sb3IiLCJ4IiwieSIsInZlbG9jaXR5IiwiZ3Jhdml0eSIsImRlY2F5IiwibGlmZSIsIm1heExpZmUiLCJ0aWx0IiwidGlsdFNwZWVkIiwiYW5pbWF0ZVBhcnRpY2xlcyIsImNhbnZhcyIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiY2xlYXJSZWN0IiwiYW55QWxpdmUiLCJwYXJ0aWNsZSIsImFscGhhVmFsdWUiLCJzY2FsZVkiLCJnbG9iYWxBbHBoYSIsInNldFRyYW5zZm9ybSIsInJvdGF0ZSIsInNjYWxlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImZpcmVDb25mZXR0aSIsIlBSRUZfVFJFTkRJTkdfVkFSSUFOVCIsIlBSRUZfUkVGSU5FRF9DQVJEU19MQVlPVVQiLCJUcmVuZGluZ1NlYXJjaGVzIiwic2hvd0NvbnRleHRNZW51Iiwic2V0U2hvd0NvbnRleHRNZW51IiwiaXNLZXlib2FyZEFjY2VzcyIsInNldElzS2V5Ym9hcmRBY2Nlc3MiLCJUcmVuZGluZ1NlYXJjaCIsInZhcmlhbnQiLCJyZWZpbmVkQ2FyZHMiLCJyZXN1bHRSZWYiLCJjb250ZXh0TWVudUhvc3QiLCJUUkVORElOR19TRUFSQ0hfQ09OVEVYVF9NRU5VX09QVElPTlMiLCJvbkFycm93Q2xpY2siLCJUUkVORElOR19TRUFSQ0hfVE9HR0xFX0NPTExBUFNFIiwiaGFuZGxlTGlua09wZW4iLCJUUkVORElOR19TRUFSQ0hfU1VHR0VTVElPTl9PUEVOIiwiaGFuZGxlQ29udGV4dE1lbnVTaG93IiwiaG9zdCIsImNoZWNrUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIm1heEJvdW5kcyIsImNoZWNrQm91bmRzIiwibGVmdCIsImlubmVyV2lkdGgiLCJyaWdodCIsImhhbmRsZUNvbnRleHRNZW51VXBkYXRlIiwidG9nZ2xlQ29udGV4dE1lbnUiLCJpc0tleUJvYXJkIiwib25Db250ZXh0TWVudUNsaWNrIiwib25Db250ZXh0TWVudUtleURvd24iLCJoYW5kbGVSZXN1bHRLZXlEb3duIiwibWF4UmVzdWx0cyIsImhhbmRsZUludGVyc2VjdGlvbiIsIlRSRU5ESU5HX1NFQVJDSF9JTVBSRVNTSU9OIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwibG93ZXJDYXNlU3VnZ2VzdGlvbiIsInNsaWNlIiwiYWx0IiwiZGVzY3JpcHRpb24iLCJJU19ORVdUQUIiLCJfU2VhcmNoIiwib25TZWFyY2hDbGljayIsIm9uU2VhcmNoSGFuZG9mZkNsaWNrIiwib25TZWFyY2hIYW5kb2ZmUGFzdGUiLCJvblNlYXJjaEhhbmRvZmZEcm9wIiwib25JbnB1dE1vdW50Iiwib25JbnB1dE1vdW50SGFuZG9mZiIsIm9uU2VhcmNoSGFuZG9mZkJ1dHRvbk1vdW50IiwiaGFuZGxlRXZlbnQiLCJkZXRhaWwiLCJnQ29udGVudFNlYXJjaENvbnRyb2xsZXIiLCJzZWFyY2giLCJkb1NlYXJjaEhhbmRvZmYiLCJ0ZXh0IiwiSEFORE9GRl9TRUFSQ0hfVE9fQVdFU09NRUJBUiIsIkZBS0VfRk9DVVNfU0VBUkNIIiwiRElTQUJMRV9TRUFSQ0giLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImRhdGFUcmFuc2ZlciIsImNhcmV0IiwiZmFrZUNhcmV0IiwiY2FyZXRCbGlua0NvdW50IiwiY2FyZXRCbGlua1RpbWUiLCJzZXRQcm9wZXJ0eSIsImhlYWx0aFJlcG9ydEtleSIsIkNvbnRlbnRTZWFyY2hVSUNvbnRyb2xsZXIiLCJfaGFuZG9mZlNlYXJjaENvbnRyb2xsZXIiLCJDb250ZW50U2VhcmNoSGFuZG9mZlVJQ29udHJvbGxlciIsIl9zZWFyY2hIYW5kb2ZmQnV0dG9uIiwid3JhcHBlckNsYXNzTmFtZSIsImRpc2FibGUiLCJmYWtlRm9jdXMiLCJ2IiwidG9Mb3dlckNhc2UiLCJ0cmVuZGluZ1NlYXJjaFZhcmlhbnQiLCJzaG93TG9nbyIsImhhbmRvZmZFbmFibGVkIiwibWF4TGVuZ3RoIiwib25Ecm9wIiwib25QYXN0ZSIsIlNlYXJjaCIsIkNvbnRleHRjb2xBSUludGVyZmFjZSIsImlucHV0VmFsdWUiLCJpc0V4cGFuZGVkIiwiaXNEcmFnZ2luZyIsInRleHRhcmVhUmVmIiwiZmlsZUlucHV0UmVmIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVLZXlEb3duIiwiaGFuZGxlU3VibWl0Iiwib25BSVJlcXVlc3QiLCJoYW5kbGVGb2N1cyIsImhhbmRsZUJsdXIiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJoYW5kbGVGaWxlVXBsb2FkIiwibmV3RmlsZXMiLCJBcnJheSIsImZyb20iLCJwcmV2U3RhdGUiLCJoYW5kbGVSZW1vdmVGaWxlIiwiXyIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJvcCIsImRyb3BwZWRGaWxlcyIsIm9iamVjdEZpdCIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvbkRyYWdPdmVyIiwib25EcmFnTGVhdmUiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJCb29sZWFuIiwidmlld0JveCIsImZpbGwiLCJkIiwicmVuZGVyV2FsbHBhcGVyQXR0cmlidXRpb24iLCJtdWx0aXBsZSIsImRpc3BsYXkiLCJMb2NhdGlvblNlYXJjaCIsIm91dGVyQ2xhc3NOYW1lIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJzdWdnZXN0ZWRMb2NhdGlvbnMiLCJsb2NhdGlvblNlYXJjaFN0cmluZyIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsImlucHV0UmVmIiwiV0VBVEhFUl9MT0NBVElPTl9EQVRBX1VQREFURSIsImNpdHkiLCJsb2NhbGl6ZWRfbmFtZSIsImFkbWluTmFtZSIsImFkbWluaXN0cmF0aXZlX2FyZWEiLCJjb3VudHJ5IiwiQnJvYWRjYXN0VG9Db250ZW50IiwiV0VBVEhFUl9TRUFSQ0hfQUNUSVZFIiwiV0VBVEhFUl9MT0NBVElPTl9TVUdHRVNUSU9OU19VUERBVEUiLCJXRUFUSEVSX0xPQ0FUSU9OX1NFQVJDSF9VUERBVEUiLCJoYW5kbGVDbG9zZVNlYXJjaCIsImxpc3QiLCJjbGFzcyIsImljb25TcmMiLCJtZXJpbm9MY2F0aW9uIiwiVklTSUJMRSIsIlZJU0lCSUxJVFlfQ0hBTkdFX0VWRU5UIiwiV2VhdGhlclBsYWNlaG9sZGVyIiwiaXNTZWVuIiwic2V0SXNTZWVuIiwiaXNTZWVuQ2xhc3NOYW1lIiwiX1dlYXRoZXIiLCJjb250ZXh0TWVudUtleWJvYXJkIiwiaW1wcmVzc2lvblNlZW4iLCJlcnJvclNlZW4iLCJzZXRJbXByZXNzaW9uUmVmIiwiZWxlbWVudCIsImltcHJlc3Npb25FbGVtZW50Iiwic2V0RXJyb3JSZWYiLCJlcnJvckVsZW1lbnQiLCJvblByb3ZpZGVyQ2xpY2siLCJ2aXNpYmlsaXR5U3RhdGUiLCJzZXRJbXByZXNzaW9uT2JzZXJ2ZXJzIiwiX29uVmlzaWJpbGl0eUNoYW5nZSIsIm9uSW1wcmVzc2lvbiIsIm9uRXJyb3IiLCJXRUFUSEVSX0lNUFJFU1NJT04iLCJXRUFUSEVSX0xPQURfRVJST1IiLCJvcGVuQ29udGV4dE1lbnUiLCJXRUFUSEVSX09QRU5fUFJPVklERVJfVVJMIiwiaXNXZWF0aGVyRW5hYmxlZCIsIkFwcCIsImlzRm9yU3RhcnR1cENhY2hlIiwiV0VBVEhFUl9TVUdHRVNUSU9OIiwic2VhcmNoQWN0aXZlIiwic2hvd0RldGFpbGVkVmlldyIsIldFQVRIRVJfU09VUkNFX0NPTlRFWFRfTUVOVV9PUFRJT05TIiwiV0VBVEhFUl9TT1VSQ0VfRVJST1JfQ09OVEVYVF9NRU5VX09QVElPTlMiLCJjb250ZXh0TWVudSIsImNvbnRleHRPcHRzIiwibGluayIsImZvcmVjYXN0IiwiY3VycmVudF9jb25kaXRpb25zIiwiaWNvbl9pZCIsInRlbXBlcmF0dXJlIiwibG9jYXRpb25EYXRhIiwiaGlnaCIsImxvdyIsInN1bW1hcnkiLCJEb3dubG9hZE1vZGFsVG9nZ2xlIiwiaXNBY3RpdmUiLCJUaHVtYlVwVGh1bWJEb3duVG9hc3QiLCJvbkRpc21pc3NDbGljayIsIm9uQW5pbWF0aW9uRW5kIiwibW96TWVzc2FnZUJhclJlZiIsIm1vek1lc3NhZ2VCYXJFbGVtZW50Iiwib25jZSIsImRpc21pc3NhYmxlIiwiUmVwb3J0Q29udGVudFRvYXN0IiwiTm90aWZpY2F0aW9ucyIsInRvYXN0UXVldWUiLCJ0b2FzdENvdW50ZXIiLCJzeW5jSGlkZGVuVG9hc3REYXRhIiwidG9hc3RJZCIsInF1ZXVlZFRvYXN0cyIsIk9ubHlUb09uZUNvbnRlbnQiLCJISURFX1RPQVNUX01FU1NBR0UiLCJzaG93Tm90aWZpY2F0aW9ucyIsImdldFRvYXN0IiwibGF0ZXN0VG9hc3RJdGVtIiwiRmVhdHVyZUhpZ2hsaWdodCIsIm1lc3NhZ2UiLCJ0b2dnbGUiLCJhcnJvd1Bvc2l0aW9uIiwicG9zaXRpb24iLCJ2ZXJ0aWNhbFBvc2l0aW9uIiwiYXJpYUxhYmVsIiwiZmVhdHVyZSIsImdsb2JhbCIsIm9wZW5lZE92ZXJyaWRlIiwic2hvd0J1dHRvbkljb24iLCJkaXNtaXNzQ2FsbGJhY2siLCJvdXRzaWRlQ2xpY2tDYWxsYmFjayIsIm9wZW5lZCIsInNldE9wZW5lZCIsImhhbmRsZU91dHNpZGVDbGljayIsIm9uVG9nZ2xlQ2xpY2siLCJEaXNjb3ZlcnlTdHJlYW1Vc2VyRXZlbnQiLCJoaWRlQnV0dG9uQ2xhc3MiLCJvcGVuZWRDbGFzc25hbWUiLCJQUkVGX01PQklMRV9ET1dOTE9BRF9ISUdITElHSFRfVkFSSUFOVF9BIiwiUFJFRl9NT0JJTEVfRE9XTkxPQURfSElHSExJR0hUX1ZBUklBTlRfQiIsIlBSRUZfTU9CSUxFX0RPV05MT0FEX0hJR0hMSUdIVF9WQVJJQU5UX0MiLCJGRUFUVVJFX0lEIiwiRG93bmxvYWRNb2JpbGVQcm9tb0hpZ2hsaWdodCIsImhhbmRsZURpc21pc3MiLCJoYW5kbGVCbG9jayIsIm9uRGlzbWlzcyIsIm1vYmlsZURvd25sb2FkUHJvbW9WYXJBIiwibW9iaWxlRG93bmxvYWRQcm9tb1ZhckIiLCJtb2JpbGVEb3dubG9hZFByb21vVmFyQyIsImdldEFjdGl2ZVZhcmlhbnQiLCJnZXRWYXJpYW50UVJDb2RlSW1nIiwiZ2V0VmFyaWFudENvcHkiLCJXYWxscGFwZXJGZWF0dXJlSGlnaGxpZ2h0IiwiZWxlbWVudElkIiwiU0hPV19QRVJTT05BTElaRSIsIm1lc3NhZ2VEYXRhIiwiTWVzc2FnZXMiLCJjb250ZW50Iiwic3VidGl0bGUiLCJjdGEiLCJNZXNzYWdlV3JhcHBlciIsImhpZGRlbk92ZXJyaWRlIiwic2V0SXNJbnRlcnNlY3RpbmciLCJ0YWJJc1Zpc2libGUiLCJzZXRUYWJJc1Zpc2libGUiLCJoYXNSdW4iLCJzZXRIYXNSdW4iLCJNRVNTQUdFX0lNUFJFU1NJT04iLCJpc1Zpc2libGUiLCJNRVNTQUdFX05PVElGWV9WSVNJQklMSVRZIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImhhbmRsZUNsb3NlIiwiTUVTU0FHRV9UT0dHTEVfVklTSUJJTElUWSIsInBvcnRJRCIsIk1FU1NBR0VfRElTTUlTUyIsIk1FU1NBR0VfQkxPQ0siLCJNRVNTQUdFX0NMSUNLIiwiUFJFRl9JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fU1lTVEVNIiwiUFJFRl9JTkZFUlJFRF9QRVJTT05BTElaQVRJT05fVVNFUiIsIl9CYXNlIiwibm90aWZ5Q29udGVudCIsInVwZGF0ZVRoZW1lIiwiY29tcG9uZW50V2lsbFVwZGF0ZSIsImJvZHlDbGFzc05hbWUiLCJpc0RldnRvb2xzRW5hYmxlZCIsIkJhc2VDb250ZW50IiwiYWRtaW5Db250ZW50Iiwib3BlbkN1c3RvbWl6YXRpb25NZW51IiwiY2xvc2VDdXN0b21pemF0aW9uTWVudSIsImhhbmRsZU9uS2V5RG93biIsIm9uV2luZG93U2Nyb2xsIiwic2hvdWxkU2hvd09NQ0hpZ2hsaWdodCIsInVwZGF0ZVdhbGxwYXBlciIsImhhbmRsZUNvbG9yTW9kZUNoYW5nZSIsInNob3VsZERpc3BsYXlUb3BpY1NlbGVjdGlvbk1vZGFsIiwidG9nZ2xlRG93bmxvYWRIaWdobGlnaHQiLCJoYW5kbGVEaXNtaXNzRG93bmxvYWRIaWdobGlnaHQiLCJoYW5kbGVBSVJlcXVlc3QiLCJmaXhlZFNlYXJjaCIsImNvbG9yTW9kZSIsImZpeGVkTmF2U3R5bGUiLCJ3YWxscGFwZXJUaGVtZSIsInNob3dEb3dubG9hZEhpZ2hsaWdodE92ZXJyaWRlIiwic2V0Rmlyc3RWaXNpYmxlVGltZXN0YW1wIiwidXBsb2FkZWRXYWxscGFwZXIiLCJwcmV2VXBsb2FkZWRXYWxscGFwZXIiLCJwcmV2V2FsbHBhcGVyTGlzdCIsInByZXZQcmVmcyIsInByZXZTZWxlY3RlZFdhbGxwYXBlciIsIldhbGxwYXBlciIsImlubmVySGVpZ2h0Iiwic2hvd1NlYXJjaCIsImxvZ29BbHdheXNWaXNpYmxlIiwiU0NST0xMX1RIUkVTSE9MRCIsIk1BSU5fT0ZGU0VUX1BBRERJTkciLCJDU1NfVkFSX1NQQUNFX1hYTEFSR0UiLCJvdXRlcldyYXBwZXJQYWRkaW5nVG9wIiwic2VhcmNoV3JhcHBlclBhZGRpbmdUb3AiLCJzZWFyY2hXcmFwcGVyUGFkZGluZ0JvdHRvbSIsInNlYXJjaFdyYXBwZXJGaXhlZFNjcm9sbFBhZGRpbmdUb3AiLCJzZWFyY2hXcmFwcGVyRml4ZWRTY3JvbGxQYWRkaW5nQm90dG9tIiwic2VhcmNoSW5uZXJXcmFwcGVyTWluSGVpZ2h0IiwibG9nb0FuZFdvcmRtYXJrV3JhcHBlckhlaWdodCIsImxvZ29BbmRXb3JkbWFya1dyYXBwZXJNYXJnaW5Cb3R0b20iLCJzY3JvbGxZIiwicGFkZGluZ0Jsb2NrU3RhcnQiLCJTRVRUSU5HU19PUEVOIiwiY3VzdG9taXplTWVudVZpc2libGUiLCJISURFX1BFUlNPTkFMSVpFIiwic2VsZWN0ZWQiLCJhdHRyaWJ1dGlvbiIsImF1dGhvckRldGFpbHMiLCJ3ZWJwYWdlIiwic3RyaW5nIiwiYXV0aG9yX3N0cmluZyIsImF1dGhvcl91cmwiLCJ3ZWJwYWdlX3N0cmluZyIsIndlYnBhZ2VfdXJsIiwidXBsb2FkZWRXYWxscGFwZXJVcmwiLCJsaWdodFdhbGxwYXBlciIsImRhcmtXYWxscGFwZXIiLCJyZWdleFJHQiIsIndhbGxwYXBlckNvbG9yIiwiY29tcG9uZW50SWQiLCJtZXNzYWdlVHlwZSIsIm92ZXJyaWRlIiwicmVxdWVzdCIsInRleHRhcmVhIiwicXVlcnlTZWxlY3RvciIsInRvcGljU2VsZWN0aW9uT25ib2FyZGluZ0VuYWJsZWQiLCJtYXliZVNob3dNb2RhbCIsImRpc3BsYXlUaW1lb3V0IiwibGFzdERpc3BsYXllZCIsImRpc3BsYXlDb3VudCIsImRheSIsImdldFRpbWUiLCJ0aW1lb3V0T2NjdXJlZCIsIlRPUElDX1NFTEVDVElPTl9TUE9UTElHSFRfT1BFTiIsInNob3dXZWF0aGVyIiwicG9ja2V0Q29uZmlnIiwiaXNEaXNjb3ZlcnlTdHJlYW0iLCJlbmFibGVkIiwiZmlsdGVyZWRTZWN0aW9ucyIsInNwb2NNZXNzYWdlVmFyaWFudCIsImxvY2FsZSIsIm5vU2VjdGlvbnNFbmFibGVkIiwic2VhcmNoSGFuZG9mZkVuYWJsZWQiLCJ0b3BTaXRlc1Jvd3MiLCJtYXlIYXZlU3BvbnNvcmVkU3RvcmllcyIsIm1heUhhdmVTcG9uc29yZWRUb3BTaXRlcyIsIm1vYmlsZURvd25sb2FkUHJvbW9FbmFibGVkIiwibW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRBRW5hYmxlZCIsIm1vYmlsZURvd25sb2FkUHJvbW9WYXJpYW50QkVuYWJsZWQiLCJtb2JpbGVEb3dubG9hZFByb21vVmFyaWFudENFbmFibGVkIiwibW9iaWxlRG93bmxvYWRQcm9tb1ZhcmlhbnRBQm9yQyIsIm1vYmlsZURvd25sb2FkUHJvbW9XcmFwcGVySGVpZ2h0TW9kaWZpZXIiLCJoYXNUaHVtYnNVcERvd25MYXlvdXQiLCJoYXNUaHVtYnNVcERvd24iLCJ0b3BpY0xhYmVsc0VuYWJsZWQiLCJzZWN0aW9uc0N1c3RvbWl6ZU1lbnVQYW5lbEVuYWJsZWQiLCJzZWN0aW9uc1BlcnNvbmFsaXphdGlvbkVuYWJsZWQiLCJtYXlIYXZlUGVyc29uYWxpemVkVG9waWNTZWN0aW9ucyIsImxvYWRlZCIsImZlYXR1cmVDbGFzc05hbWUiLCJzaG91bGRTaG93RG93bmxvYWRIaWdobGlnaHQiLCJzaG93U2ltcGxpZmllZEludGVyZmFjZSIsIkJhc2UiLCJEZXRlY3RVc2VyU2Vzc2lvblN0YXJ0IiwiaW5pdFN0b3JlIiwiUHJvdmlkZXIiLCJSZWFjdERPTSIsInJlZHVjZXJzIiwiTmV3VGFiIiwic3RvcmUiLCJkb1JlcXVlc3RXaGVuUmVhZHkiLCJkb1JlcXVlc3RQcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJkaWRSZXF1ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFja0lkIiwiZG9SZXF1ZXN0IiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiaGlkZGVuIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInJlbmRlcldpdGhvdXRTdGF0ZSIsInNlbmRFdmVudE9yQWRkTGlzdGVuZXIiLCJ0aGVuIiwiTkVXX1RBQl9TVEFURV9SRVFVRVNUIiwiTkVXX1RBQl9TVEFURV9SRVFVRVNUX1dJVEhPVVRfU1RBUlRVUENBQ0hFIiwiaHlkcmF0ZSIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyQ2FjaGUiLCJpbml0aWFsU3RhdGUiLCJORVdfVEFCX1NUQVRFX1JFUVVFU1RfU1RBUlRVUENBQ0hFIl0sInNvdXJjZVJvb3QiOiIifQ==