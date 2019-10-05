Add a folder in the root called “app”
Create folders inside app:
assets — I use up to 3 folders in here: fonts, icons and images
components — This is where you’ll place all your shared React components. Usually these components are the ones that we call “dummy”, that have no state logic and can be easily reused across the app.
views — These are our application screens, the ones that we navigate from one to another. These are also React components, but they are the ones that we call containers, because they contain their own state.
modules — There are pieces that have no corresponding view part (JSX). Typical examples of that is the colors module (contains all the app colors) and the utils module (contains utility functions that are being reused).
services — These are the functions that wrap the API calls.
i18n — These are the translation strings for users of different language and locale
All apps require some type of configuration, so I usually create a file called config.js and put it in there. If the configuration file reaches a lot of lines, we can then create a config folder and separate the config in files.
If you have a state manager library, you will also need folders for its structs. In the case of Redux, 2 more folders are used, one for actions and another one for reducers. If you don’t use an external package and prefer to use React’s Context API, you will create your own providers, that can be placed either in modules folder or in a new folder called providers.