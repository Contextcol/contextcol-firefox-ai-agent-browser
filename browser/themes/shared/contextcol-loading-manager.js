/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * Contextcol Loading Manager
 * Handles the Contextcol-branded loading indicators throughout the browser
 */

class ContextcolLoadingManager {
  constructor() {
    this.loadingBar = null;
    this.init();
  }

  init() {
    // Create the global loading bar
    this.createLoadingBar();

    // Listen for page load events
    this.setupEventListeners();
  }

  createLoadingBar() {
    if (this.loadingBar) return;

    this.loadingBar = document.createElement("div");
    this.loadingBar.className = "contextcol-loading-bar";
    this.loadingBar.setAttribute("data-loading", "false");

    // Insert at the beginning of the body
    document.body.insertBefore(this.loadingBar, document.body.firstChild);
  }

  setupEventListeners() {
    // Listen for tab loading events
    window.addEventListener("TabAttrModified", this.handleTabEvent.bind(this));

    // Listen for browser loading events
    window.addEventListener("beforeunload", this.showLoading.bind(this));
    window.addEventListener("load", this.hideLoading.bind(this));

    // Listen for navigation events
    window.addEventListener("locationchange", this.showLoading.bind(this));

    // Progressive Web App events
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener(
        "message",
        this.handleServiceWorkerMessage.bind(this)
      );
    }
  }

  handleTabEvent(event) {
    const tab = event.target;
    if (!tab) return;

    if (tab.hasAttribute("busy")) {
      this.showLoading();
    } else {
      this.hideLoading();
    }
  }

  handleServiceWorkerMessage(event) {
    if (event.data && event.data.type === "LOADING_START") {
      this.showLoading();
    } else if (event.data && event.data.type === "LOADING_END") {
      this.hideLoading();
    }
  }

  showLoading() {
    if (!this.loadingBar) return;

    this.loadingBar.setAttribute("data-loading", "true");

    // Add subtle haptic feedback on supported devices
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  }

  hideLoading() {
    if (!this.loadingBar) return;

    this.loadingBar.setAttribute("data-loading", "complete");

    // Hide after animation completes
    setTimeout(() => {
      if (this.loadingBar) {
        this.loadingBar.setAttribute("data-loading", "false");
      }
    }, 500);
  }

  // Public API for manual control
  static show() {
    if (window.contextcolLoadingManager) {
      window.contextcolLoadingManager.showLoading();
    }
  }

  static hide() {
    if (window.contextcolLoadingManager) {
      window.contextcolLoadingManager.hideLoading();
    }
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.contextcolLoadingManager = new ContextcolLoadingManager();
  });
} else {
  window.contextcolLoadingManager = new ContextcolLoadingManager();
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = ContextcolLoadingManager;
}
