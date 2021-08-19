# Raycast open Chrome tab
A Raycast script that matches input with Chrome tab titles and opens best match. Defaults to latests tab in case there's no match.

### Demo
![script5](https://user-images.githubusercontent.com/42960598/129918147-30e4c7bd-f181-4919-990a-7b40d75035e4.gif)


### Installation (There might be an easier way, this is just how I do it)
1. Copy repository to desired folder
2. Run `npm install` to install [Fuse.js](https://fusejs.io/)
3. Install [chrome-cli](https://github.com/prasmussen/chrome-cli) (e.g. using brew)
```shell
brew install chrome-cli
```
4. Create Raycast script in the same folder as step `1` (official instructions [here](https://github.com/raycast/script-commands#create-your-own-script-commands))
5. Copy code from `search-chrome-tabs.js` to your created script file
6. Use script 🎉

### Ideas for improvements
1. Perhaps there's an AppleScript that allows activating a specific Chrome tab based on it's ID. If there is, then `chrome-cli` can be dropped as a dependency.
