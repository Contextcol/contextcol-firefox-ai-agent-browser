# Firefox Browser Architecture Overview

## High-Level Architecture

Firefox browser is built using Mozilla's Gecko engine with a modular, component-based architecture. The browser is written primarily in C++, JavaScript, and Rust, with platform-specific native code.

## Core Technologies

### Programming Languages
- **C++**: Core browser engine, performance-critical code
- **JavaScript**: Browser UI (XUL/HTML), web content handling, some internals
- **Rust**: Modern components, particularly in Gecko rendering and networking
- **Python**: Build system, testing, automation scripts
- **XUL/HTML**: User interface markup
- **CSS**: Styling and theming

### Key Frameworks
- **XUL (XML User Interface Language)**: Mozilla's UI markup language
- **WebIDL**: Interface definitions between C++ and JavaScript
- **Mozilla's Build System**: Custom Python-based build configuration
- **Gecko**: Rendering engine
- **SpiderMonkey**: JavaScript engine

## Browser Directory Structure (`./browser`)

### Core Directories

#### 1. **Application Layer** (`./app/`)
- **Purpose**: Main browser application entry point
- **Key Files**:
  - `nsBrowserApp.cpp`: Main application bootstrap
  - `BrowserDefines.h`: Core browser definitions
  - `firefox.exe.manifest`: Windows application manifest
- **Platform Support**: Windows, macOS, Linux

#### 2. **Base UI** (`./base/`)
- **Purpose**: Core browser UI components and window management
- **Key Components**:
  - `content/browser.xhtml`: Main browser window template
  - `content/browser.js`: Main browser window controller
  - JavaScript modules for core functionality
- **Features**: Window management, tab handling, toolbar components

#### 3. **Branding System** (`./branding/`)
- **Purpose**: Visual identity and brand customization
- **Variants**:
  - `official/`: Official Firefox branding
  - `nightly/`: Firefox Nightly branding
  - `unofficial/`: Developer/custom builds
  - `aurora/`: Aurora channel branding
- **Assets**: Icons, images, configuration files, visual elements

#### 4. **Components** (`./components/`)
- **Purpose**: Modular browser functionality
- **Major Components**:
  - **About Pages**: Special browser pages (about:*, preferences)
  - **Downloads**: Download management system
  - **Extensions**: Extension/add-on system
  - **Search**: Search integration and telemetry
  - **Session Store**: Tab/window session management
  - **Places**: Bookmarks and history system
  - **Migration**: Data import from other browsers
  - **Sidebar**: Sidebar management system

#### 5. **Themes** (`./themes/`)
- **Purpose**: Visual styling and theming system
- **Platform Themes**:
  - `shared/`: Cross-platform styles
  - `windows/`: Windows-specific styles
  - `osx/`: macOS-specific styles
  - `linux/`: Linux-specific styles
- **Features**: Dark/light modes, color schemes, icon sets

#### 6. **Modules** (`./modules/`)
- **Purpose**: Shared JavaScript modules and utilities
- **Key Modules**:
  - Browser window management
  - UI utilities and helpers
  - Telemetry and analytics
  - Permission management

## Component Communication

### Actor System
Firefox uses an Actor-based architecture for process communication:

- **Parent Actors**: Run in main browser process
- **Child Actors**: Run in content processes
- **Communication**: Message passing between processes

### Key Actors (`./actors/`)
- **Content Search**: Search functionality
- **Context Menu**: Right-click menu handling
- **Form Validation**: Form input validation
- **Page Info**: Page information display
- **WebRTC**: Real-time communication

## Build System Integration

### Configuration Files
- **moz.build**: Build configuration in each directory
- **jar.mn**: Resource packaging configuration
- **components.conf**: Component registration

### Build Process
1. **Configure**: `./mach configure` - Set up build environment
2. **Build**: `./mach build` - Compile browser
3. **Package**: Create distributable browser package

## Security Architecture

### Process Isolation
- **Main Process**: UI and coordination
- **Content Processes**: Web page rendering (sandboxed)
- **Extension Process**: Add-on execution
- **GPU Process**: Graphics acceleration

### Sandboxing
- Content processes run in restricted environment
- Limited file system and network access
- IPC communication with main process

## Extension Points for AI Integration

### Recommended Integration Areas
1. **Sidebar System**: `./components/sidebar/`
2. **Toolbar Components**: `./base/content/` toolbar areas
3. **Context Menu**: `./actors/ContextMenuParent.sys.mjs`
4. **New Tab Page**: `./components/newtab/`
5. **Page Actions**: `./modules/PageActions.sys.mjs`

### AI Agent Specific Considerations
- **Chat Interface**: Integrate with sidebar system
- **Page Analysis**: Hook into page loading actors
- **Context Awareness**: Leverage existing permission and site data systems
- **User Interaction**: Extend toolbar and menu systems

## Performance Considerations

### Startup Performance
- Lazy loading of components
- Startup cache system
- Minimal initial UI rendering

### Runtime Performance
- Incremental builds with `./mach build faster`
- Component-based loading
- Process isolation for stability

## Development Workflow

### Key Commands
```bash
./mach build          # Full build
./mach build faster   # Incremental build
./mach run            # Run browser
./mach test           # Run tests
./mach lint           # Code quality checks
```

### File Organization Principles
- **Separation of Concerns**: Each directory has specific purpose
- **Platform Abstraction**: Common code with platform-specific implementations
- **Component Modularity**: Self-contained functional modules
- **Build System Integration**: Consistent build configuration patterns

This architecture provides a solid foundation for customizing Firefox into the Contextcol AI Agent Browser while maintaining the robust, secure, and performant characteristics of the original browser.