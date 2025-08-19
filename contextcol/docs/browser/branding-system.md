# Firefox Branding System & Contextcol Customization Guide

## Branding System Overview

Firefox uses a sophisticated branding system that allows different build variants (official, nightly, unofficial, aurora) to have distinct visual identities while sharing the same codebase.

## Branding Directory Structure

### Location: `./browser/branding/`

```
./browser/branding/
├── branding-common.mozbuild  # Shared branding build logic
├── docs/                     # Branding documentation
├── moz.build                # Main branding build config
├── official/                # Official Firefox release branding
├── nightly/                 # Firefox Nightly branding
├── unofficial/              # Developer/custom build branding
└── aurora/                  # Aurora channel branding
```

## Branding Variant Analysis

### 1. Common Structure (All Variants)
Each branding variant contains:

```
[variant]/
├── moz.build               # Build configuration
├── configure.sh            # Branding configuration script
├── branding.nsi           # Windows installer branding
├── content/               # Content resources
│   ├── jar.mn            # Resource packaging
│   ├── about.png         # About dialog logo
│   ├── aboutDialog.css   # About dialog styling
│   └── identity-icons-brand.svg # Brand identity icons
├── locales/              # Localized branding content
├── pref/                 # Brand-specific preferences
│   └── firefox-branding.js # Branding preferences
└── [Icon Files]          # Platform-specific icons
```

### 2. Icon Assets (Platform-Specific)

#### Windows Icons
- `firefox.ico` - Main application icon (16x16 to 256x256)
- `firefox64.ico` - 64-bit specific icon
- `document.ico` - Document association icon
- `document_pdf.ico` - PDF document icon
- `newtab.ico` - New tab icon
- `newwindow.ico` - New window icon
- `pbmode.ico` - Private browsing icon

#### macOS Icons
- `firefox.icns` - Main application bundle icon
- `disk.icns` - Disk image icon
- `document.icns` - Document icon
- `dsstore` - Finder settings

#### Cross-Platform PNG Icons
- `default16.png` through `default256.png` - Various sizes
- `PrivateBrowsing_70.png`, `PrivateBrowsing_150.png` - Private browsing
- `VisualElements_70.png`, `VisualElements_150.png` - Windows tiles
- `background.png` - Background image

#### Windows-Specific Files
- `firefox.VisualElementsManifest.xml` - Windows 8+ tile manifest
- `private_browsing.VisualElementsManifest.xml` - Private browsing tile
- `wizHeader.bmp`, `wizHeaderRTL.bmp` - Installer headers
- `wizWatermark.bmp` - Installer watermark

## Branding Configuration System

### 1. Build Configuration (`branding-common.mozbuild`)

```python
@template
def FirefoxBranding():
    if CONFIG["MOZ_BRANDING_DIRECTORY"] == "browser/branding/official":
        JS_PREFERENCE_PP_FILES += ["pref/firefox-branding.js"]
    else:
        JS_PREFERENCE_FILES += ["pref/firefox-branding.js"]
    
    # Platform-specific file handling
    if CONFIG["MOZ_WIDGET_TOOLKIT"] == "windows":
        FINAL_TARGET_FILES[".."] += [
            "firefox.VisualElementsManifest.xml",
            "private_browsing.VisualElementsManifest.xml",
        ]
        FINAL_TARGET_FILES.VisualElements += [
            "PrivateBrowsing_150.png",
            "PrivateBrowsing_70.png",
            "VisualElements_150.png",
            "VisualElements_70.png",
        ]
```

### 2. Branding Preferences (`pref/firefox-branding.js`)

Key branding preferences that need customization:

```javascript
// Browser identification
pref("app.vendorURL", "https://www.mozilla.org/");
pref("app.privacyURL", "https://www.mozilla.org/privacy/firefox/");

// Update and support URLs
pref("app.releaseNotesURL", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/releasenotes/");
pref("app.update.url", "https://aus5.mozilla.org/update/6/%PRODUCT%/%VERSION%/%BUILD_ID%/%BUILD_TARGET%/%LOCALE%/%CHANNEL%/%OS_VERSION%/%SYSTEM_CAPABILITIES%/%DISTRIBUTION%/%DISTRIBUTION_VERSION%/update.xml");

// Support and feedback URLs  
pref("app.support.baseURL", "https://support.mozilla.org/1/firefox/%VERSION%/%OS%/%LOCALE%/");
pref("app.feedback.baseURL", "https://input.mozilla.org/%LOCALE%/feedback/firefox/%VERSION%/");

// Browser name and vendor
pref("startup.homepage_override_url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/firstrun/");
pref("startup.homepage_welcome_url", "https://www.mozilla.org/%LOCALE%/firefox/%VERSION%/firstrun/");
```

### 3. Content Resources (`content/`)

The content directory contains:
- **about.png**: Logo displayed in about dialog
- **aboutDialog.css**: Styling for about dialog
- **identity-icons-brand.svg**: Brand-specific identity icons
- **jar.mn**: Resource packaging configuration

## Creating Contextcol Branding

### Step 1: Create Branding Directory

```bash
mkdir -p browser/branding/contextcol
```

### Step 2: Copy Base Structure
Start with nightly branding as template:

```bash
cp -r browser/branding/nightly/* browser/branding/contextcol/
```

### Step 3: Customize Configuration Files

#### A. Update `moz.build`
```python
# -*- Mode: python; indent-tabs-mode: nil; tab-width: 40 -*-
# vim: set filetype=python:

DIRS += ["content", "locales"]

DIST_SUBDIR = "browser"
export("DIST_SUBDIR")

include("../branding-common.mozbuild")
FirefoxBranding()  # Consider renaming to ContextcolBranding()
```

#### B. Update `configure.sh`
```bash
# Contextcol AI Agent Browser branding
MOZ_BRANDING_DIRECTORY=browser/branding/contextcol
MOZ_OFFICIAL_BRANDING_DIRECTORY=browser/branding/contextcol
export MOZ_BRANDING_DIRECTORY
export MOZ_OFFICIAL_BRANDING_DIRECTORY
```

#### C. Customize `pref/firefox-branding.js`
```javascript
// Contextcol AI Agent Browser branding preferences
pref("app.vendorURL", "https://contextcol.com/");
pref("app.privacyURL", "https://contextcol.com/privacy/");
pref("app.releaseNotesURL", "https://contextcol.com/releases/%VERSION%/");
pref("app.support.baseURL", "https://support.contextcol.com/");
pref("app.feedback.baseURL", "https://feedback.contextcol.com/");
pref("startup.homepage_override_url", "https://contextcol.com/welcome/");
pref("startup.homepage_welcome_url", "https://contextcol.com/welcome/");

// AI Agent specific preferences
pref("contextcol.ai.enabled", true);
pref("contextcol.ai.model", "default");
pref("contextcol.features.aiAssistant", true);
```

### Step 4: Replace Visual Assets

#### Icon Requirements by Platform

**Windows Icons** (ICO format):
- Main application: 16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256
- Private browsing variant
- Document association icons

**macOS Icons** (ICNS format):
- Application bundle icon with multiple resolutions
- Document type icons

**Cross-Platform PNG**:
- Various sizes from 16x16 to 256x256
- High-DPI variants (@2x)
- Windows tile images (70x70, 150x150)

#### Asset Creation Guidelines
1. **Maintain aspect ratios** - Keep consistent proportions across sizes
2. **High contrast** - Ensure visibility on different backgrounds  
3. **Simple design** - Icons should be recognizable at small sizes
4. **Brand consistency** - Use consistent colors and design language

### Step 5: Update Build Configuration

#### Modify `browser/moz.configure`
Add Contextcol branding option:

```python
option('--enable-official-branding',
       help='Enable Official Contextcol branding')

@depends('--enable-official-branding')
def contextcol_branding(branding):
    if branding:
        return 'browser/branding/contextcol'
    else:
        return 'browser/branding/unofficial'
```

## Files Requiring Name Changes

### High Priority - Core Branding
1. **All icon files** - Replace with Contextcol branding
2. **pref/firefox-branding.js** - Update all URLs and preferences
3. **content/about.png** - About dialog logo
4. **content/aboutDialog.css** - Styling updates
5. **branding.nsi** - Windows installer strings

### Medium Priority - Build System
1. **configure.sh** - Branding directory references
2. **moz.build** - Build configuration
3. **Visual manifest files** - Windows tile configuration

### Version and Application Configuration
1. **browser/config/version.txt** - Version string
2. **browser/config/version_display.txt** - Display version
3. **Application name constants** - Throughout codebase

## Testing Branding Changes

### Build Commands
```bash
# Configure with Contextcol branding
./mach configure --enable-official-branding

# Build browser
./mach build

# Test branding
./mach run
```

### Verification Points
1. **Application icon** - Correct in taskbar, window title
2. **About dialog** - Shows Contextcol branding and logo
3. **Window titles** - Display "Contextcol" instead of "Firefox"
4. **Default preferences** - Point to Contextcol URLs
5. **Installer** - Uses Contextcol branding and icons

## Advanced Branding Customization

### Dynamic Branding
For AI agent features, consider:
- **Context-aware icons** - Icons that change based on AI state
- **Themed variations** - Different icons for different AI modes
- **Adaptive branding** - Icons that adapt to user preferences

### Integration Points
- **Toolbar icons** - AI-specific toolbar elements
- **Sidebar branding** - AI assistant interface branding
- **Status indicators** - AI agent activity indicators

This branding system provides complete control over the visual identity while maintaining the robust Firefox codebase underneath.