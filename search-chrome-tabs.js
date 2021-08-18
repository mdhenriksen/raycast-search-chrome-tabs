#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Search Chrome Tabs
// @raycast.mode silent

// Optional parameters:
// @raycast.icon ⚡️
// @raycast.argument1 { "type": "text", "placeholder": "Placeholder" }

// Documentation:
// @raycast.author Mikkel Dusi Henriksen
// @raycast.authorURL https://github.com/mdhenriksen

/*
    Finds Chrome tabs with title that matches the input the most and opens it
    Depends on Fuse.js & chrome-cli
    Developed for macOS
*/

const Fuse = require("fuse.js");
const { exec } = require("child_process");

const options = {
  includeScore: true,
};

let idsArray = [];
let titlesArray = [];
let matchChromeTabId = 1;
let searchTerm = process.argv.slice(2)[0];

exec(
  `osascript -e{'set text item delimiters to linefeed','tell app"google chrome"to id of tabs of window 1'}`,
  (error, stdout, stderr) => {
    idsArray = stdout.replace("\n", "").split(",");
    createTitlesArray();
  }
);

const createTitlesArray = () => {
  exec(
    `osascript -e{'set text item delimiters to linefeed','tell app"google chrome"to title of tabs of window 1'}`,
    (error, stdout, stderr) => {
      titlesArray = stdout.replace("\n", "").split(",");
      findSearchMatch();
    }
  );
};

const findSearchMatch = () => {
  const fuse = new Fuse(titlesArray, options);
  const results = fuse.search(searchTerm);

  let refIndex = results[0]?.refIndex;
  matchChromeTabId = refIndex !== undefined ? idsArray[refIndex] : idsArray[idsArray.length - 1];

  activateChromeTab();
};

const activateChromeTab = () => {
  exec(`chrome-cli activate -t ${matchChromeTabId}`, (error, stdout, stderr) => {
    openChrome();
  });
};

const openChrome = () => {
  exec(`open -a "Google Chrome"`, (error, stdout, stderr) => {
    console.log(`Opened ${searchTerm}`);
  });
};
