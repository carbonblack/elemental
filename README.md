[![npm package](https://img.shields.io/npm/v/elemental.svg?style=flat)](https://www.npmjs.org/package/elemental)
[![Circle CI](https://img.shields.io/circleci/project/elementalui/elemental.svg)](https://circleci.com/gh/elementalui/elemental)

<p align="center">
	<img src="http://elemental-ui.com/images/elemental-logo-paths.svg" width="174" height="154" alt="Elemental Logo" />
</p>

# Elemental UI

React & CSS UI Framework.

Currently under development; built by [@JedWatson](https://github.com/JedWatson) and [@JossMac](https://github.com/JossMac) at [Thinkmill](http://www.thinkmill.com.au).

See [elemental-ui.com](http://elemental-ui.com) for examples and documentation.

Follow us on twitter [@elementalui](https://twitter.com/elementalui) for updates!

## Browser Support

We'd like Elemental to be viable (functionally and aesthetically) to as many browsers as possible, without hindering our ability to move quickly.

For now that means:

- Chrome (mobile and desktop)
- Safari (mobile and desktop)
- Firefox
- Internet Explorer 10 and up


Carbon Black Note: 
We had to fork this package because it was referencing octicon assets via the use of a CDN, which is not possible on isolated on-prem versions of our product. We decided the best way to include these downloaded assets was to put them in the /cbapp/fonts/octicon folder. The assets were downloaded from the following locations:
https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.eot?#iefix&v=396334ee3da78f4302d25c758ae3e3ce5dc3c97d
https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.woff?v=396334ee3da78f4302d25c758ae3e3ce5dc3c97d
https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.ttf?v=396334ee3da78f4302d25c758ae3e3ce5dc3c97d
https://cdnjs.cloudflare.com/ajax/libs/octicons/3.1.0/octicons.svg?v=396334ee3da78f4302d25c758ae3e3ce5dc3c97d#octicons
