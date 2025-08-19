# Contextcol Media Assets & Branding Guide

## Overview

This comprehensive guide documents all media files, images, and visual assets that need to be replaced or modified to transform Firefox into the Contextcol AI Agent Browser. The analysis covers **552+ image files** across branding and themes directories.

## 🎯 Critical Branding Assets (High Priority)

### 1. Application Icons & Core Branding

#### **Location**: `browser/branding/nightly/` → `browser/branding/contextcol/`

Replace ALL files in this directory with Contextcol equivalents:

#### **Windows Application Icons** (.ico format)
```
firefox.ico          → contextcol.ico          # Main application icon (16-256px)
firefox64.ico         → contextcol64.ico       # 64-bit application icon
document.ico          → contextcol-document.ico # File association icon
document_pdf.ico      → contextcol-pdf.ico     # PDF association icon
newtab.ico           → contextcol-newtab.ico   # New tab icon
newwindow.ico        → contextcol-newwindow.ico # New window icon
pbmode.ico           → contextcol-private.ico  # Private browsing icon
```

**Icon Specifications**:
- **Sizes Required**: 16x16, 24x24, 32x32, 48x48, 64x64, 128x128, 256x256
- **Format**: ICO with multiple embedded sizes
- **Color Depth**: 32-bit with alpha channel
- **Style**: Windows 11 compatible (rounded corners, modern design)

#### **macOS Application Icons** (.icns format)
```
firefox.icns         → contextcol.icns         # Main application bundle icon
disk.icns           → contextcol-disk.icns     # Disk image icon
document.icns       → contextcol-document.icns # Document icon
```

**Icon Specifications**:
- **Sizes Required**: 16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024
- **Format**: ICNS with @2x retina variants
- **Style**: macOS Big Sur/Monterey compatible design
- **Shadow**: Include proper drop shadow for dock

#### **Cross-Platform PNG Icons**
```
default16.png through default256.png    # Various application icon sizes
background.png                          # Background image
PrivateBrowsing_70.png                 # Private browsing (70x70)
PrivateBrowsing_150.png                # Private browsing (150x150)
VisualElements_70.png                  # Windows tile (70x70)
VisualElements_150.png                 # Windows tile (150x150)
```

### 2. About Dialog & Splash Screen Assets

#### **Location**: `browser/branding/nightly/content/`

```
about.png              → contextcol-about.png        # Main about dialog logo
about-logo.png         → contextcol-logo.png         # Logo (standard DPI)
about-logo@2x.png      → contextcol-logo@2x.png      # Logo (high DPI)
about-logo.svg         → contextcol-logo.svg         # Scalable logo
about-logo-private.png → contextcol-private.png      # Private browsing logo
about-logo-private@2x.png → contextcol-private@2x.png # Private browsing (high DPI)
firefox-wordmark.svg   → contextcol-wordmark.svg     # Text logo/wordmark
about-wordmark.svg     → contextcol-wordmark.svg     # About dialog wordmark
```

**Specifications**:
- **about.png**: 256x256px, PNG with transparency
- **Logo variants**: Maintain aspect ratio, provide @2x versions
- **SVG files**: Scalable, use `context-fill` for theme adaptation
- **Private browsing**: Darker variant for private mode

### 3. Windows Installer Assets

#### **Location**: `browser/branding/nightly/`

```
wizHeader.bmp         → contextcol-header.bmp        # Installer header (498x58px)
wizHeaderRTL.bmp      → contextcol-header-rtl.bmp    # Right-to-left header
wizWatermark.bmp      → contextcol-watermark.bmp     # Installer watermark (164x312px)
```

**Location**: `browser/branding/nightly/stubinstaller/`
```
bgstub.jpg           → contextcol-stub-bg.jpg        # Stub installer background
```

**Specifications**:
- **wizHeader.bmp**: 498x58px, 24-bit BMP
- **wizWatermark.bmp**: 164x312px, 24-bit BMP
- **Style**: Professional, business-oriented design
- **Colors**: Match Contextcol brand palette

### 4. Windows Store (MSIX) Assets

#### **Location**: `browser/branding/nightly/msix/Assets/`

```
Square44x44Logo.scale-200.png           # App icon 88x88
Square44x44Logo.targetsize-256.png      # App icon 256x256
Square44x44Logo.altform-unplated_targetsize-256.png
Square44x44Logo.altform-lightunplated_targetsize-256.png
Square150x150Logo.scale-200.png         # Large tile 300x300
Wide310x150Logo.scale-200.png           # Wide tile 620x300
LargeTile.scale-200.png                  # Large tile 620x620
SmallTile.scale-200.png                  # Small tile 142x142
StoreLogo.scale-200.png                  # Store logo 100x100
Document44x44.png                        # Document icon 44x44
```

**Windows Store Specifications**:
- **Scale factors**: 100%, 125%, 150%, 200%, 400%
- **Format**: PNG with transparency
- **Style**: Flat design, Windows 11 Fluent Design
- **Background**: Transparent or solid brand color

### 5. Visual Elements Manifests

#### **Update XML Files**:
```xml
<!-- firefox.VisualElementsManifest.xml → contextcol.VisualElementsManifest.xml -->
<Application>
  <VisualElements
    ShowNameOnSquare150x150Logo="on"
    Square150x150Logo="VisualElements_150.png"
    Square70x70Logo="VisualElements_70.png"
    ForegroundText="light"
    BackgroundColor="#1a1a2e"/>
</Application>
```

## 🎨 Theme Assets (Medium Priority)

### 1. UI Component Icons

#### **Location**: `browser/themes/shared/icons/`

**Firefox-specific icons to replace**:
```
firefox-view.svg      → contextcol-view.svg        # Firefox View feature
logo-android.svg      → contextcol-android.svg     # Android logo
logo-ios.svg          → contextcol-ios.svg         # iOS logo
```

**AI-specific icons to add**:
```
ai-assistant.svg      # AI assistant icon
ai-chat.svg          # Chat interface icon
ai-analysis.svg      # Page analysis icon
ai-processing.svg    # AI processing indicator
contextcol-ai.svg    # Contextcol AI brand icon
```

### 2. Sidebar Icons

#### **Location**: `browser/themes/shared/sidebar/`

```
firefox.svg          → contextcol.svg             # Sidebar Firefox icon
```

**Additional AI sidebar icons**:
```
ai-assistant.svg     # AI assistant sidebar icon
business-tools.svg   # Business tools icon
smart-analysis.svg   # Smart analysis icon
```

### 3. Preference/Settings Icons

#### **Location**: `browser/themes/shared/preferences/`

**Mozilla-specific logos to replace or remove**:
```
mozilla-logo.svg     → Remove or replace with Contextcol
relay-logo.svg       → Remove (Firefox Relay)
monitor-logo.svg     → Remove (Firefox Monitor)
vpn-logo.svg         → Remove (Mozilla VPN)
mdn-logo.svg         → Keep (external service)
solo-ai-logo.svg     → Evaluate for relevance
```

### 4. Theme Add-ons

#### **Location**: `browser/themes/addons/`

**Firefox Light/Dark Theme**: `browser/themes/addons/firefox-light-dark/`
```
light-icon.svg       → contextcol-light-icon.svg
dark-icon.svg        → contextcol-dark-icon.svg
light-preview.svg    → contextcol-light-preview.svg
dark-preview.svg     → contextcol-dark-preview.svg
manifest.json        → Update theme name and description
```

**Create Contextcol AI Theme**: `browser/themes/addons/contextcol-ai/`
```
manifest.json        # New theme manifest
icon.svg            # Contextcol AI theme icon
preview.svg         # Theme preview
background-ai.svg   # AI-themed background
ai-gradient.svg     # AI color gradient elements
```

## 📱 Platform-Specific Assets

### Windows Platform

#### **High DPI Support**
- Provide @125%, @150%, @200%, @400% scale factors
- Use PNG format with transparency
- Follow Windows 11 design guidelines

#### **File Explorer Integration**
```
document.ico         → contextcol-document.ico     # File association
document_pdf.ico     → contextcol-pdf.ico          # PDF files
```

### macOS Platform

#### **Retina Display Support**
- Provide @2x and @3x variants for all PNG assets
- Use ICNS format for application icons
- Follow macOS Human Interface Guidelines

#### **Dock and Finder Integration**
```
firefox.icns         → contextcol.icns             # Application bundle
document.icns        → contextcol-document.icns    # Document types
disk.icns           → contextcol-disk.icns         # DMG disk image
```

### Linux Platform

#### **Desktop Environment Integration**
```
default16.png        → contextcol16.png            # Various sizes
default22.png        → contextcol22.png            # for different
default24.png        → contextcol24.png            # desktop environments
default32.png        → contextcol32.png
default48.png        → contextcol48.png
default64.png        → contextcol64.png
default128.png       → contextcol128.png
default256.png       → contextcol256.png
```

## 🎨 Contextcol Brand Guidelines

### Color Palette
```css
Primary Colors:
--contextcol-primary: #667eea     /* Main brand blue */
--contextcol-secondary: #764ba2   /* Purple accent */
--contextcol-dark: #1a1a2e        /* Dark background */
--contextcol-medium: #16213e      /* Medium background */
--contextcol-accent: #0f3460      /* Sidebar accent */

AI-Specific Colors:
--ai-active: #4caf50             /* AI active state */
--ai-processing: #ff9800         /* AI processing */
--ai-error: #f44336              /* AI error state */
--ai-gradient: linear-gradient(45deg, #667eea 0%, #764ba2 100%)
```

### Typography
- **Primary Font**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- **Logo Font**: Modern, clean sans-serif
- **AI Elements**: Slightly futuristic but professional

### Design Principles
- **Professional**: Business-oriented, not gaming or consumer
- **AI-Forward**: Subtle AI/tech elements without being overwhelming
- **Accessible**: High contrast, WCAG compliant
- **Cross-Platform**: Consistent across Windows, macOS, Linux

## 🛠️ Asset Creation Tools & Specifications

### Icon Creation Tools
- **Vector Graphics**: Adobe Illustrator, Inkscape, Figma
- **Bitmap Editing**: Adobe Photoshop, GIMP
- **Icon Conversion**: 
  - Windows: png2ico, IcoFX
  - macOS: iconutil, Icon Composer
  - Cross-platform: ImageMagick

### File Format Requirements

#### **ICO Files (Windows)**
```bash
# Create multi-size ICO from PNG sources
convert contextcol-16.png contextcol-24.png contextcol-32.png \
        contextcol-48.png contextcol-64.png contextcol-128.png \
        contextcol-256.png contextcol.ico
```

#### **ICNS Files (macOS)**
```bash
# Create iconset directory structure
mkdir contextcol.iconset
# Copy properly sized PNG files
# Convert to ICNS
iconutil -c icns contextcol.iconset
```

#### **SVG Files**
- Use `context-fill` for theme-adaptive colors
- Optimize for small sizes (16x16 minimum)
- Avoid complex gradients that don't scale well

### Quality Checklist

#### **Icon Quality Standards**
- [ ] **Clarity**: Recognizable at 16x16 pixels
- [ ] **Consistency**: Matches brand style across all sizes
- [ ] **Platform Integration**: Follows OS design guidelines
- [ ] **Accessibility**: Sufficient contrast ratios
- [ ] **File Size**: Optimized for web and application use

#### **Brand Consistency**
- [ ] **Color Accuracy**: Matches Contextcol brand palette
- [ ] **Typography**: Consistent font usage in wordmarks
- [ ] **Style**: Professional, AI/business-oriented design
- [ ] **Legal**: No trademark conflicts with existing brands

## 📋 Implementation Checklist

### Phase 1: Core Application Icons
- [ ] Create Windows ICO files (7 files)
- [ ] Create macOS ICNS files (3 files) 
- [ ] Create cross-platform PNG icons (8 files)
- [ ] Update Visual Elements manifests (2 files)

### Phase 2: About Dialog & Branding
- [ ] Create about dialog assets (6 files)
- [ ] Create wordmark/logo SVG files (2 files)
- [ ] Update aboutDialog.css styling

### Phase 3: Installer Assets
- [ ] Create Windows installer graphics (4 files)
- [ ] Create Windows Store MSIX assets (10 files)
- [ ] Test installer appearance

### Phase 4: Theme Integration
- [ ] Replace Firefox-specific theme icons (3 files)
- [ ] Create AI-specific icons (5 files)
- [ ] Update theme add-on assets (4 files)
- [ ] Create Contextcol AI theme (5 files)

### Phase 5: Platform Testing
- [ ] Test Windows icon integration
- [ ] Test macOS icon integration  
- [ ] Test Linux desktop integration
- [ ] Verify high DPI display support

## 🚀 Asset Optimization

### Performance Considerations
- **Icon Loading**: Use appropriate formats for each platform
- **File Sizes**: Optimize images without quality loss
- **Caching**: Leverage browser caching for theme assets
- **Lazy Loading**: Load non-critical assets progressively

### Build Integration
```makefile
# Add to browser/branding/contextcol/moz.build
FINAL_TARGET_FILES += [
    'contextcol.ico',
    'contextcol64.ico', 
    'contextcol-document.ico',
    'contextcol-pdf.ico',
    # ... other files
]
```

This comprehensive media branding guide ensures complete visual transformation of Firefox into the Contextcol AI Agent Browser while maintaining professional quality and cross-platform compatibility.