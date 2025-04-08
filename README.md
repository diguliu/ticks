# Ticks to Timestamp Chrome Extension

This Chrome extension allows you to convert Windows Ticks time format to human-readable timestamps. Windows Ticks are the number of 100-nanosecond intervals that have elapsed since 12:00:00 midnight, January 1, 1601.

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the directory containing these files

## Usage

1. Select any text that contains a Windows Ticks time value
2. Right-click on the selected text
3. Click "Convert Ticks to Timestamp" from the context menu
4. A tooltip will appear above the selected text showing the converted timestamp
5. If the selected text is not a valid ticks time, it will show "Not valid ticks time"

## Example

A valid ticks time value looks like this: `638475840000000000`

## Technical Details

- The extension uses the standard Windows Ticks format (100-nanosecond intervals since January 1, 1601)
- The conversion takes into account the epoch offset between Windows Ticks and Unix timestamps
- The tooltip automatically disappears after 3 seconds 