# JourneyChat

A demo built using Nuxt, Vuex, Tailwind, and PubNub.

[See the demo](https://journeychat.netlify.app/)

> <b>Note:</b> Demo above saves all entries to demo PubNub account immediately

## Built With

- [Nuxt.js](https://nuxtjs.org/) - Vue framework of choice.
- [Vuex](https://vuex.vuejs.org/) - Application store. Included with Nuxt out-of-the-box.
- [Tailwind CSS](https://tailwindcss.com/) - Utility class CSS framework
- [PubNub](https://www.pubnub.com/) - Realtime API for chat

## Features

### Accessibility

- Every UI element has been checked to meet at least AA/AAA standards as per the Web Content Accessibility Guidelines. However please let me know if there is something I missed.
- Chat interface uses as much semantic HTML as possible to additionally help with screen readers.
- Everything in the interface is "tabbable" as well.

### Progressive Web App

This demo is PWA-ready. Successfully installs on both Android and iOS devices.

### PageSpeed Insight Score

Google's PageSpeed Insight score (preferable to Lighthouse due it's inconsistencies) rates the demo at _84 percent on mobile_ and _93 percent on desktop_, with the greatest room for improvement in the area of performance.

## Dev log

I wrote a simple [dev log](log.md) through my process of building this demo. Its not much, but I thought it would be fun to show my thought-process.

[Read my dev log](log.md)

## Build Locally

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
