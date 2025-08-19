/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from "react";

export class ContextcolAIInterface extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      isExpanded: false,
      isDragging: false,
      files: [],
    };
    this.textareaRef = React.createRef();
    this.fileInputRef = React.createRef();
  }

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleKeyDown = e => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    const { inputValue, files } = this.state;
    if (inputValue.trim() || files.length) {
      // Handle AI request submission
      // Log AI request for development
      // console.log("AI Request:", { text: inputValue, files });
      this.props.onAIRequest?.(inputValue, files);
      this.setState({ inputValue: "", files: [] });
    }
  };

  handleFocus = () => {
    this.setState({ isExpanded: true });
  };

  handleBlur = e => {
    // Only collapse if clicking outside the entire component
    if (!e.currentTarget.contains(e.relatedTarget)) {
      this.setState({ isExpanded: false });
    }
  };

  handleFileUpload = e => {
    const newFiles = Array.from(e.target.files);
    this.setState(prevState => ({
      files: [...prevState.files, ...newFiles],
    }));
  };

  handleRemoveFile = index => {
    this.setState(prevState => ({
      files: prevState.files.filter((_, i) => i !== index),
    }));
  };

  handleDragOver = e => {
    e.preventDefault();
    this.setState({ isDragging: true });
  };

  handleDragLeave = e => {
    e.preventDefault();
    this.setState({ isDragging: false });
  };

  handleDrop = e => {
    e.preventDefault();
    this.setState({ isDragging: false });

    const droppedFiles = Array.from(e.dataTransfer.files);
    this.setState(prevState => ({
      files: [...prevState.files, ...droppedFiles],
    }));
  };

  render() {
    const { inputValue, isExpanded, isDragging, files } = this.state;
    const { wallpapersEnabled } = this.props;

    return (
      <div className="contextcol-ai-interface">
        <div className="contextcol-backdrop">
          <div className="contextcol-content-wrapper">
            {/* Logo Section - Unique Contextcol Branding */}
            <div className="contextcol-logo-section">
              <img
                src="https://contextcol.com/assets/contextcol.png"
                alt="Contextcol"
                className="contextcol-logo"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Main CTA Section */}
            <div
              className={`contextcol-cta-container ${isExpanded ? "expanded" : ""} ${isDragging ? "dragging" : ""}`}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              onDragOver={this.handleDragOver}
              onDragLeave={this.handleDragLeave}
              onDrop={this.handleDrop}
            >
              <div className="contextcol-cta-backdrop">
                <div className="contextcol-input-section">
                  <textarea
                    ref={this.textareaRef}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeyDown}
                    placeholder="What you want Contextcol AI agent to do for you on Browser?"
                    className="contextcol-main-input"
                    rows={isExpanded ? 4 : 2}
                  />

                  {/* File Display */}
                  {Boolean(files.length) && (
                    <div className="contextcol-files-display">
                      {files.map((file, index) => (
                        <div key={index} className="contextcol-file-chip">
                          <span className="contextcol-file-icon">📎</span>
                          <span className="contextcol-file-name">
                            {file.name}
                          </span>
                          <button
                            onClick={() => this.handleRemoveFile(index)}
                            className="contextcol-file-remove"
                            aria-label="Remove file"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="contextcol-actions">
                    <div className="contextcol-secondary-actions">
                      <button
                        onClick={() => this.fileInputRef.current?.click()}
                        className="contextcol-action-btn contextcol-file-btn"
                        title="Upload files"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                      </button>
                      <button
                        className="contextcol-action-btn contextcol-link-btn"
                        title="Add link"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
                        </svg>
                      </button>
                      <button
                        className="contextcol-action-btn contextcol-voice-btn"
                        title="Voice input"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
                        </svg>
                      </button>
                    </div>

                    <button
                      onClick={this.handleSubmit}
                      className="contextcol-primary-btn"
                      disabled={!inputValue.trim() && !files.length}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Drag Overlay */}
                {isDragging && (
                  <div className="contextcol-drag-overlay">
                    <div className="contextcol-drag-content">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      <p>Drop files here to upload</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Wallpaper Attribution */}
            {wallpapersEnabled && this.props.renderWallpaperAttribution?.()}
          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={this.fileInputRef}
          type="file"
          multiple={true}
          onChange={this.handleFileUpload}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}
