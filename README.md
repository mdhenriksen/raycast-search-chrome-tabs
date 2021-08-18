# raycast-search-chrome-tabs
A Raycast script that matches input with Chrome tab titles and opens best match. Defaults to latests tab in case there's no match.

**Installation** (There might be an easier way, this is just how I do it)
1. Copy repository to desired folder
2. Run `npm install` to install [Fuse.js](https://fusejs.io/)
3. Install [chrome-cli](https://github.com/prasmussen/chrome-cli) (e.g. using brew)
```shell
brew install chrome-cli
```
4. Create Raycast script in the same folder as step `1` (official instructions [here](https://github.com/raycast/script-commands#create-your-own-script-commands))
5. Copy code from `search-chrome-tabs.js` to your created script file
6. Use script 🎉
