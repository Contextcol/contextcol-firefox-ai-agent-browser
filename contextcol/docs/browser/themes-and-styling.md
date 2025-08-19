# Firefox Theme System & Visual Customization

## Theme Architecture Overview

Firefox uses a sophisticated theming system that supports multiple platforms, color schemes, and customization levels. The system is designed for extensibility and performance.

## Theme Directory Structure

### Location: `./browser/themes/`

```
./browser/themes/
├── BuiltInThemes.sys.mjs      # Built-in theme management
├── BuiltInThemeConfig.sys.mjs # Theme configuration
├── ThemeVariableMap.sys.mjs   # CSS variable mapping
├── ToolbarIconColor.sys.mjs   # Dynamic icon coloring
├── addons/                    # Theme add-ons
│   ├── alpenglow/            # Alpenglow colorful theme
│   └── firefox-light-dark/   # System light/dark theme
├── shared/                   # Cross-platform styles
├── windows/                  # Windows-specific styles
├── osx/                      # macOS-specific styles
└── linux/                   # Linux-specific styles
```

## Cross-Platform Shared Styles

### Core Style Files (`./themes/shared/`)

#### 1. Base Browser Styles
- **browser-shared.css**: Core browser styling foundation
- **browser-colors.css**: Color scheme definitions
- **toolbarbuttons.css**: Toolbar button styles
- **toolbarbutton-icons.css**: Icon styling

#### 2. Component-Specific Styles
```
shared/
├── customizableui/           # UI customization styles
│   ├── customizeMode.css    # Customization mode interface
│   ├── panelUI-shared.css   # Panel UI components
│   └── density-*.svg        # Density mode icons
├── downloads/               # Download manager styles
│   ├── downloads.inc.css    # Base download styles
│   ├── contentAreaDownloadsView.css # Downloads view
│   └── progressmeter.css    # Progress indicators
├── places/                  # Bookmarks and history
│   ├── organizer-shared.css # Bookmark organizer
│   ├── sidebar.css          # Places sidebar
│   └── tree-icons.css       # Tree view icons
├── preferences/             # Settings interface
│   ├── preferences.css      # Main preferences styling
│   ├── dialog.css          # Dialog windows
│   └── containers.css       # Container tabs
├── tabbrowser/              # Tab system styles
│   ├── tabs.css            # Tab bar and individual tabs
│   ├── content-area.css    # Web content area
│   └── ctrlTab.css         # Ctrl+Tab switcher
└── sidebar/                 # Sidebar system
    └── sidebar.css          # Sidebar container styles
```

#### 3. Icon Management
```
shared/icons/
├── bookmark-*.svg           # Bookmark icons
├── history.svg             # History icon
├── menu.svg                # Hamburger menu
├── home.svg                # Home button
├── forward.svg, back.svg   # Navigation
├── reload-to-stop.svg      # Reload/stop animation
├── privateBrowsing.svg     # Private browsing
├── sync.svg                # Firefox Sync
├── screenshot.svg          # Screenshot tool
├── reader-mode.svg         # Reader mode
├── translations.svg        # Translation feature
└── firefox-view.svg        # Firefox View
```

## Platform-Specific Styling

### Windows Theme (`./themes/windows/`)
```
windows/
├── browser.css             # Windows-specific browser styles
├── customizableui/         # Windows UI customization
├── downloads/              # Windows download styling
├── places/                 # Windows bookmarks styling
└── preferences/            # Windows settings styling
```

**Windows-specific features**:
- **Acrylic/Mica effects**: Translucent window backgrounds
- **Windows 11 styling**: Rounded corners, updated spacing
- **High DPI support**: Scaling for different display densities
- **System theme integration**: Follows Windows light/dark mode

### macOS Theme (`./themes/osx/`)
```
osx/
├── browser.css             # macOS-specific browser styles
├── customizableui/         # macOS UI customization
├── downloads/              # macOS download styling
├── places/                 # macOS bookmarks styling
└── preferences/            # macOS settings styling
```

**macOS-specific features**:
- **Vibrancy effects**: Translucent sidebar and toolbar backgrounds
- **Native window controls**: Traffic light window buttons
- **Menu bar integration**: macOS menu bar support
- **Touch Bar support**: MacBook Pro Touch Bar integration

### Linux Theme (`./themes/linux/`)
```
linux/
├── browser.css             # Linux-specific browser styles
├── customizableui/         # Linux UI customization
├── downloads/              # Linux download styling
├── places/                 # Linux bookmarks styling
└── preferences/            # Linux settings styling
```

**Linux-specific features**:
- **GTK theme integration**: Follows system GTK theme
- **Desktop environment support**: GNOME, KDE, XFCE compatibility
- **Wayland support**: Modern Linux display protocol
- **Accessibility**: High contrast and screen reader support

## Built-In Theme System

### Theme Management (`BuiltInThemes.sys.mjs`)

Core theme functionality:
```javascript
class BuiltInThemes {
  static findActiveTheme() {
    // Determine currently active theme
  }
  
  static setActiveTheme(themeId) {
    // Switch to specified theme
  }
  
  static getAvailableThemes() {
    // Return list of available themes
  }
}
```

### Theme Configuration (`BuiltInThemeConfig.sys.mjs`)

Theme definitions:
```javascript
const BuiltInThemeConfig = {
  "default": {
    id: "default-theme@mozilla.org",
    name: "System theme — auto",
    description: "Follow the system setting for buttons, menus, and windows."
  },
  "light": {
    id: "firefox-compact-light@mozilla.org", 
    name: "Light",
    description: "A bright theme."
  },
  "dark": {
    id: "firefox-compact-dark@mozilla.org",
    name: "Dark", 
    description: "A dark theme."
  }
};
```

### CSS Variable System (`ThemeVariableMap.sys.mjs`)

Dynamic theming through CSS custom properties:
```javascript
const ThemeVariableMap = {
  // Toolbar colors
  "toolbar_color": "--toolbar-color",
  "toolbar_bgcolor": "--toolbar-bgcolor",
  
  // Tab colors  
  "tab_background_text": "--tab-text-color",
  "tab_background_separator": "--tab-separator-color",
  
  // Sidebar colors
  "sidebar_color": "--sidebar-text-color",
  "sidebar_bgcolor": "--sidebar-background-color",
  
  // Button colors
  "button_background_hover": "--button-hover-bgcolor",
  "button_background_active": "--button-active-bgcolor"
};
```

## Color Scheme Management

### Adaptive Colors
Firefox automatically adapts to system color preferences:

```css
/* Light mode default */
:root {
  --toolbar-bgcolor: #f9f9fa;
  --toolbar-color: #0c0c0d;
  --sidebar-bgcolor: #ffffff;
}

/* Dark mode override */
@media (prefers-color-scheme: dark) {
  :root {
    --toolbar-bgcolor: #2b2a33;
    --toolbar-color: #fbfbfe;
    --sidebar-bgcolor: #1c1b22;
  }
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  :root {
    --toolbar-bgcolor: #ffffff;
    --toolbar-color: #000000;
    --button-border: 2px solid #000000;
  }
}
```

## Icon Color Management (`ToolbarIconColor.sys.mjs`)

Dynamic icon coloring system:
```javascript
class ToolbarIconColor {
  static inferFromText(textColor) {
    // Determine optimal icon color based on text color
    // Returns "light" or "dark"
  }
  
  static updateForWindow(window) {
    // Update icon colors for specific window
    const iconColor = this.inferFromText(getComputedStyle(toolbar).color);
    window.document.documentElement.setAttribute("lwt-toolbar-icons", iconColor);
  }
}
```

## Theme Add-ons

### Alpenglow Theme (`./themes/addons/alpenglow/`)
**Colorful gradient theme with dynamic backgrounds**

```
alpenglow/
├── manifest.json           # Theme manifest
├── icon.svg               # Theme icon
├── preview.svg            # Theme preview
├── background-gradient.svg # Light mode background
├── background-gradient-dark.svg # Dark mode background
└── background-noodles-*.svg # Additional background elements
```

### Light/Dark System Theme (`./themes/addons/firefox-light-dark/`)
**Automatic light/dark theme switching**

```
firefox-light-dark/
├── manifest.json          # Theme manifest
├── light-icon.svg         # Light mode icon
├── light-preview.svg      # Light mode preview
├── dark-icon.svg          # Dark mode icon
└── dark-preview.svg       # Dark mode preview
```

## Creating Contextcol Theme

### 1. Theme Structure Setup
```bash
mkdir -p browser/themes/addons/contextcol-ai
```

### 2. Theme Manifest (`manifest.json`)
```json
{
  "manifest_version": 2,
  "name": "Contextcol AI Agent",
  "version": "1.0",
  "description": "Official Contextcol AI Agent Browser theme",
  
  "theme": {
    "colors": {
      "toolbar": "#1a1a2e",
      "toolbar_text": "#ffffff",
      "frame": "#16213e",
      "tab_background_text": "#ffffff",
      "tab_text": "#ffffff",
      "sidebar": "#0f3460", 
      "sidebar_text": "#ffffff",
      "popup": "#1a1a2e",
      "popup_text": "#ffffff"
    },
    
    "images": {
      "theme_frame": "background-ai.svg"
    },
    
    "properties": {
      "color_scheme": "dark",
      "content_color_scheme": "dark"
    }
  }
}
```

### 3. AI-Specific Styling
Create `contextcol-ai-styles.css`:
```css
/* AI Assistant Integration */
#contextcol-ai-button {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: white;
  border: none;
  padding: 8px 12px;
}

#contextcol-ai-button:hover {
  background: linear-gradient(45deg, #764ba2 0%, #667eea 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

/* AI Sidebar Styling */
#contextcol-ai-sidebar {
  background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
  border-right: 1px solid #667eea;
}

/* AI Status Indicator */
.contextcol-ai-active {
  position: relative;
}

.contextcol-ai-active::after {
  content: "";
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## Performance Considerations

### 1. CSS Loading Strategy
- **Critical styles first**: Load essential styles immediately
- **Progressive enhancement**: Add advanced styles after initial render
- **Platform detection**: Load only relevant platform styles

### 2. Icon Optimization
- **SVG icons**: Scalable and themeable
- **Icon fonts**: Efficient for large icon sets
- **Lazy loading**: Load icons when needed

### 3. Theme Switching Performance
- **CSS custom properties**: Fast theme switching
- **Minimal reflow**: Avoid layout changes during theme switch
- **Cached computations**: Pre-calculate color variations

## Accessibility in Themes

### 1. Color Contrast Requirements
- **WCAG compliance**: Minimum 4.5:1 contrast ratio
- **High contrast mode**: Enhanced contrast options
- **Color blindness**: Avoid color-only information

### 2. Motion and Animation
- **Reduced motion**: Respect system preferences
- **Essential animations only**: Minimize decorative animations
- **Focus indicators**: Clear keyboard navigation

### 3. Screen Reader Support
- **Semantic markup**: Proper HTML structure
- **ARIA labels**: Descriptive labels for complex UI
- **Theme announcements**: Notify of theme changes

This theming system provides comprehensive control over the visual appearance while maintaining performance and accessibility standards for the Contextcol AI Agent Browser.