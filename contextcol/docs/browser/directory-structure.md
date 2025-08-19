# Firefox Browser Directory Structure Analysis

## Complete `./browser` Directory Breakdown

### Top-Level Files
```
./browser/
├── LICENSE                     # Mozilla license file
├── Makefile.in                 # Build system makefile
├── app.mozbuild               # Application build configuration
├── build.mk                   # Build configuration
├── confvars.sh               # Build configuration variables
├── defs.mk                   # Build definitions
├── jsconfig.json             # JavaScript configuration
├── l10n-registry.manifest    # Localization registry
├── moz.build                 # Main build configuration
├── moz.configure             # Build configuration script
```

## Core Directory Structure

### 1. Application Entry Point (`./app/`)
**Purpose**: Browser application bootstrap and platform-specific code

```
./app/
├── BrowserDefines.h           # Browser-specific definitions
├── Makefile.in               # Build configuration
├── nsBrowserApp.cpp          # Main application entry point
├── firefox.exe.manifest      # Windows application manifest
├── module.ver                # Version information
├── permissions              # Permission configuration
├── profile/                  # Default profile settings
│   ├── channel-prefs.js     # Channel-specific preferences
│   └── firefox.js           # Default Firefox preferences
├── desktop-launcher/        # Windows desktop launcher
├── installation_dir_layout/ # Installation directory structure
├── macbuild/               # macOS-specific build files
├── nmhproxy/               # Native messaging host proxy
├── no-pie/                 # Position-independent executable handling
├── pbproxy/                # Private browsing proxy
├── splash.rc               # Windows splash screen
└── winlauncher/            # Windows launcher process
```

### 2. Base Browser UI (`./base/`)
**Purpose**: Core browser window and fundamental UI components

```
./base/
├── content/                   # Main browser UI content
│   ├── browser.xhtml         # Main browser window template
│   ├── browser.js            # Main browser window controller
│   ├── browser-*.js          # Feature-specific modules:
│   │   ├── browser-addons.js        # Add-on management
│   │   ├── browser-commands.js     # Browser commands
│   │   ├── browser-context.js      # Context menu handling
│   │   ├── browser-customization.js # UI customization
│   │   ├── browser-fullScreen*.js  # Fullscreen handling
│   │   ├── browser-places.js       # Bookmarks/history
│   │   ├── browser-profiles.js     # Profile management
│   │   ├── browser-siteIdentity.js # Site identity
│   │   ├── browser-sync.js         # Firefox Sync
│   │   └── browser-webrtc.js       # WebRTC handling
│   ├── *.inc.xhtml          # Reusable UI fragments
│   ├── about*.xhtml         # About dialog pages
│   ├── navigator-toolbox.inc.xhtml # Toolbar definition
│   ├── main-popupset.inc.xhtml    # Popup definitions
│   └── sanitize*.xhtml      # Data clearing dialogs
├── jar.mn                    # Resource packaging
├── moz.build                 # Build configuration
└── triage.json              # Bug triage configuration
```

### 3. Branding System (`./branding/`)
**Purpose**: Visual identity, icons, and brand-specific assets

```
./branding/
├── branding-common.mozbuild  # Common branding build rules
├── docs/                     # Branding documentation
├── moz.build                # Build configuration
├── official/                # Official Firefox branding
│   ├── configure.sh         # Branding configuration
│   ├── branding.nsi         # Windows installer branding
│   ├── firefox.icns         # macOS application icon
│   ├── firefox.ico          # Windows application icon
│   ├── default*.png         # Various icon sizes
│   ├── document.ico         # Document type icon
│   ├── PrivateBrowsing_*.png # Private browsing icons
│   ├── VisualElements_*.png  # Windows tile icons
│   ├── firefox.VisualElementsManifest.xml # Windows manifest
│   ├── wizHeader.bmp        # Installer header
│   └── content/             # Branding content files
├── nightly/                 # Nightly build branding (similar structure)
├── unofficial/              # Unofficial build branding (similar structure)
└── aurora/                  # Aurora channel branding (similar structure)
```

### 4. Components (`./components/`)
**Purpose**: Modular browser functionality and features

```
./components/
├── BrowserGlue.sys.mjs       # Main browser component coordination
├── BrowserComponents.manifest # Component registration
├── about/                    # About page redirector
├── aboutlogins/             # Password manager UI
├── aboutwelcome/            # Welcome/onboarding experience
├── asrouter/               # Activity Stream router (messaging)
├── attribution/            # Attribution tracking
├── backup/                 # Browser backup system
├── contextualidentity/     # Container tabs
├── customizableui/         # Toolbar customization
│   ├── CustomizableUI.sys.mjs    # Main customization system
│   ├── CustomizableWidgets.sys.mjs # Widget definitions
│   ├── CustomizeMode.sys.mjs     # Customization mode
│   └── PanelMultiView.sys.mjs    # Panel view system
├── downloads/              # Download management
├── enterprisepolicies/     # Enterprise policy system
├── extensions/             # Extension management
├── firefoxview/            # Firefox View feature
├── genai/                  # Generative AI features
├── migration/              # Browser data migration
├── newtab/                 # New tab page
├── pagedata/               # Page metadata extraction
├── places/                 # Bookmarks and history
├── preferences/            # Settings/preferences UI
├── privatebrowsing/        # Private browsing features
├── profiles/               # Profile management
├── protections/            # Privacy protections
├── screenshots/            # Screenshot functionality
├── search/                 # Search integration
├── sessionstore/           # Session management
├── shell/                  # OS integration
├── sidebar/                # Sidebar management
├── syncedtabs/            # Synced tabs display
├── tabbrowser/            # Tab management
└── taskbartabs/           # Taskbar tab integration
```

### 5. Themes (`./themes/`)
**Purpose**: Visual styling and platform-specific appearance

```
./themes/
├── BuiltInThemes.sys.mjs     # Built-in theme management
├── ThemeVariableMap.sys.mjs  # CSS variable mapping
├── ToolbarIconColor.sys.mjs  # Icon color management
├── addons/                   # Theme add-ons
│   ├── alpenglow/           # Alpenglow theme
│   └── firefox-light-dark/  # Light/dark theme
├── shared/                  # Cross-platform styles
│   ├── browser-shared.css   # Common browser styles
│   ├── customizableui/      # Customization UI styles
│   ├── downloads/           # Download UI styles
│   ├── places/              # Bookmarks/history styles
│   ├── preferences/         # Settings UI styles
│   ├── sidebar/             # Sidebar styles
│   ├── tabbrowser/          # Tab styles
│   └── icons/               # Icon assets
├── windows/                 # Windows-specific styles
├── osx/                     # macOS-specific styles
└── linux/                  # Linux-specific styles
```

### 6. Modules (`./modules/`)
**Purpose**: Shared JavaScript modules and utilities

```
./modules/
├── BrowserWindowTracker.sys.mjs  # Window management
├── BrowserUsageTelemetry.sys.mjs # Usage tracking
├── ExtensionsUI.sys.mjs          # Extension UI handling
├── HomePage.sys.mjs              # Home page management
├── PageActions.sys.mjs           # Page action management
├── PermissionUI.sys.mjs          # Permission dialogs
├── SitePermissions.sys.mjs       # Site permission management
├── Sanitizer.sys.mjs             # Data clearing
├── ZoomUI.sys.mjs                # Zoom functionality
└── webrtcUI.sys.mjs              # WebRTC UI components
```

### 7. Configuration (`./config/`)
**Purpose**: Build and version configuration

```
./config/
├── mozconfig                 # Build configuration
├── version.txt              # Version string (e.g., "144.0a1")
├── version_display.txt      # Display version
└── whats_new_page.yml      # What's new page configuration
```

### 8. Localization (`./locales/`)
**Purpose**: Internationalization and localization

```
./locales/
├── all-locales             # List of all supported locales
├── shipped-locales         # Locales shipped in releases
├── l10n.ini               # Localization configuration
├── l10n.toml              # Localization build config
├── jar.mn                 # Localization packaging
└── filter.py              # Localization filtering
```

### 9. Installation (`./installer/`)
**Purpose**: Installation and packaging

```
./installer/
├── package-manifest.in     # Package file manifest
├── removed-files.in       # Files to remove during updates
├── allowed-dupes.mn       # Allowed duplicate files
└── attribution.yml        # Attribution configuration
```

### 10. Documentation (`./docs/`)
**Purpose**: Browser-specific documentation

```
./docs/
├── BrowserStartup.md       # Browser startup process
├── BrowserUsageTelemetry.rst # Usage telemetry documentation
├── CategoryManagerIndirection.md # Component management
├── CommandLineParameters.rst # Command line options
├── FrontendCodeReviewBestPractices.md # Code review guidelines
├── index.rst              # Documentation index
└── overview.rst           # Browser overview
```

## Key File Types and Their Purposes

### Build Configuration Files
- **moz.build**: Mozilla's build system configuration
- **jar.mn**: Resource packaging configuration
- **components.conf**: Component registration
- **Makefile.in**: Traditional makefile configuration

### UI Definition Files
- **\*.xhtml**: XUL/HTML UI markup
- **\*.js**: JavaScript controllers and logic
- **\*.css**: Styling and theming
- **\*.inc.xhtml**: Reusable UI fragments

### Resource Files
- **\*.sys.mjs**: System JavaScript modules
- **\*.manifest**: Component and resource manifests
- **\*.ftl**: Fluent localization files

### Platform-Specific Files
- **\*.ico**: Windows icons
- **\*.icns**: macOS icons
- **\*.png**: Cross-platform images
- **\*.svg**: Scalable vector graphics

## Critical Files for Contextcol Customization

### High Priority - Core Identity
1. **./branding/\*/**: All branding assets and configuration
2. **./config/version\*.txt**: Version information
3. **./app/profile/firefox.js**: Default preferences
4. **./base/content/browser.xhtml**: Main window template

### Medium Priority - UI Customization
1. **./base/content/about\*.xhtml**: About dialogs
2. **./themes/shared/**: Cross-platform styling
3. **./components/preferences/**: Settings UI
4. **./components/newtab/**: New tab page

### Low Priority - Advanced Features
1. **./components/genai/**: AI-related components
2. **./components/sidebar/**: Sidebar system
3. **./modules/**: Utility modules
4. **./actors/**: Process communication

This directory structure provides a comprehensive map for understanding how Firefox browser UI is organized and where to make specific customizations for the Contextcol AI Agent Browser.