# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Firefox browser source code repository, built using Mozilla's build system. Firefox is a cross-platform web browser written primarily in C++, JavaScript, and Rust, with platform-specific native code.
This project is Contextcol AI Agent Browser: Browser that making for business owner to be able to use AI Agent in browser natively to ask and research, assign task to ai agent take action on browser like a human, make the best user experience for business owner collaboration with AI Agent for work on Browser to help them build and grow their business.

## Build System & Commands

### Primary Build Tool
- Use `./mach` (Python-based build system) for all development tasks
- Requires Python 3.9+ to run
- Run `./mach help` to see all available commands

### Essential Build Commands
```bash
# Bootstrap development environment (run once)
./mach bootstrap

# Configure build
./mach configure

# Full build
./mach build

# Incremental build
./mach build faster

# Clean build
./mach clobber
./mach build
```

### Testing Commands
```bash
# Run all tests
./mach test

# Run specific test suites
./mach xpcshell-test
./mach mochitest
./mach reftest
./mach crashtest

# Run browser chrome tests
./mach mochitest browser

# Run a specific test file
./mach test path/to/test/file
```

### Linting & Code Quality
```bash
# Run ESLint
./mach lint

# Run specific linters
./mach lint --linter eslint
./mach lint --linter rust

# Format code
./mach lint --fix
```

### Development Server
```bash
# Run Firefox in development mode
./mach run

# Debug mode
./mach run --debug
```

## Architecture Overview

### Core Directory Structure
- `browser/` - Firefox browser-specific UI and features
- `toolkit/` - Shared components across Mozilla applications
- `dom/` - DOM implementation and web standards
- `layout/` - Rendering engine (Gecko)
- `js/` - SpiderMonkey JavaScript engine
- `netwerk/` - Networking layer
- `security/` - Security-related code including NSS
- `widget/` - Platform-specific UI widgets
- `accessible/` - Accessibility implementation
- `gfx/` - Graphics and rendering
- `image/` - Image handling and decoding
- `devtools/` - Developer tools
- `extensions/` - Extension system
- `mobile/` - Mobile-specific code

### Build Configuration
- `moz.build` files define build targets using Python-based build system
- `configure.py` and `moz.configure` handle build configuration
- `client.py` manages source code dependencies (NSPR/NSS)

### Key Technologies
- **C++** - Core browser engine and performance-critical code
- **JavaScript** - Browser UI (using XUL/HTML), web content, and some internals
- **Rust** - Modern components, particularly in Gecko and networking
- **Python** - Build system, testing, and automation
- **WebIDL** - Interface definitions between C++ and JavaScript

### Platform Support
- Supports Windows, macOS, Linux, Android, and iOS
- Platform-specific code in respective subdirectories
- Uses conditional compilation and runtime detection

## Development Workflow

### Making Changes
1. Always run tests before and after changes: `./mach test`
2. Run linting: `./mach lint`
3. For JavaScript changes, check browser chrome tests
4. For C++/Rust changes, run relevant xpcshell or crashtest suites

### Performance Considerations
- Use `./mach build faster` for incremental builds
- The `obj-*` directory contains build artifacts (ignored by git)
- Use `./mach clobber` sparingly as it triggers full rebuilds

### Testing Strategy
- Browser functionality: Use `./mach mochitest browser`
- JavaScript unit tests: Use `./mach xpcshell-test`
- Rendering: Use `./mach reftest`
- Crash resistance: Use `./mach crashtest`

## Important Notes

### Build Requirements
- Requires significant disk space (10GB+ for full build)
- Build times can be substantial (30+ minutes for full builds)
- Uses Mozilla's custom build system, not standard autotools/cmake

### Code Standards
- JavaScript code should follow Mozilla's ESLint configuration
- C++ code follows Mozilla's coding style
- Rust code uses standard rustfmt
- Use `./mach lint` to verify code style compliance

### Source Control
- Uses Mercurial internally but also supports Git workflows
- Large repository with extensive history
- Some subdirectories (like `nsprpub/`, `security/nss/`) are external dependencies

### Documentation
- Primary docs at https://firefox-source-docs.mozilla.org/
- Use `./mach doc` to build local documentation
- Code changes may require documentation updates